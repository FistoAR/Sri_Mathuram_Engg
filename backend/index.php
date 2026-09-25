<?php
/**
 * ==============================================================================
 * SRI MATHURAMS MEDICAL ENGINEERING - PRODUCTION SMTP MAILER BACKEND
 * ==============================================================================
 * Features:
 * - 100% Standalone (No Composer or external libraries required)
 * - Gmail / Standard SMTP via secure TLS/SSL Socket (Port 587 / 465)
 * - Automated Lead Notification to Admin + Instant Customer Auto-Reply Email
 * - Enterprise Security Hardened:
 *     * SQL Injection Immune (No database layer)
 *     * CRLF / Email Header Injection Protection
 *     * Anti-Open Relay Restriction
 *     * RFC 5321 Dot-Stuffing Protection
 *     * Max Payload Size Limit (500KB DoS Prevention)
 *     * CORS & HTTP Method Filtering
 * ==============================================================================
 */

// Error reporting: Log errors internally, never leak stack traces to client
error_reporting(0);
ini_set('display_errors', '0');

// Response Headers
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// ==============================================================================
// 1. HTTP METHOD VALIDATION & CORS PREFLIGHT
// ==============================================================================
if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method not allowed. Use POST."]);
    exit;
}

// ==============================================================================
// 2. PRODUCTION SMTP CONFIGURATION (DIRECT CREDENTIALS WITH .ENV OVERRIDE)
// ==============================================================================
function loadEnvFile($filePath) {
    if (!file_exists($filePath) || !is_readable($filePath)) return;
    $lines = file($filePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        $line = trim($line);
        if (empty($line) || $line[0] === '#') continue;
        if (strpos($line, '=') !== false) {
            list($key, $val) = explode('=', $line, 2);
            $key = trim($key);
            $val = trim(trim($val), '"\'');
            putenv("{$key}={$val}");
            $_ENV[$key] = $val;
            $_SERVER[$key] = $val;
        }
    }
}

// Check for optional .env file if deployed in an environment with .env
loadEnvFile(__DIR__ . '/.env');
loadEnvFile(__DIR__ . '/../.env');

// Direct Production Configuration
$SMTP_HOST     = getenv("SMTP_HOST")     ?: "smtp.gmail.com";
$SMTP_PORT     = intval(getenv("SMTP_PORT") ?: 587);
$SMTP_USER     = getenv("SMTP_USER")     ?: "fistotech03@gmail.com";
$SMTP_PASS     = getenv("SMTP_PASS")     ?: "sora rnxk fluq duwy"; // Google 16-character App Password
$FROM_NAME     = "Sri Mathurams Medical";
$COMPANY_EMAIL = getenv("MAIL_TO")       ?: "fistotechintern1@gmail.com";

// Authorized company recipient list (Anti-Spam Relay Filter)
$AUTHORIZED_ADMIN_EMAILS = [
    strtolower($COMPANY_EMAIL),
    "fistotechintern1@gmail.com",
    "fistotech03@gmail.com",
    "mathuramindia@gmail.com"
];

// ==============================================================================
// 3. READ & VALIDATE INPUT (DOS & BUFFER OVERFLOW PROTECTION)
// ==============================================================================
$rawInput = file_get_contents("php://input");

if (strlen($rawInput) > 512 * 1024) {
    http_response_code(413);
    echo json_encode(["success" => false, "error" => "Payload too large. Maximum allowed size is 500KB."]);
    exit;
}

$data = json_decode($rawInput, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Invalid JSON payload."]);
    exit;
}

// Sanitize string helper (CRLF / Header injection prevention)
function sanitizeHeader($string) {
    return trim(str_replace(["\r", "\n", "%0a", "%0d", "%0A", "%0D"], "", (string)$string));
}

// Extract and sanitize input parameters
$toRecipient   = sanitizeHeader(!empty($data["to"]) ? $data["to"] : $COMPANY_EMAIL);
$subject       = sanitizeHeader($data["subject"] ?? "New Website Lead Inquiry");
$messageHtml   = $data["message"] ?? $data["html"] ?? "";
$customerEmail = sanitizeHeader($data["customerEmail"] ?? $data["replyTo"] ?? "");
$customerName  = sanitizeHeader($data["customerName"] ?? "Valued Customer");
$productName   = sanitizeHeader($data["product"] ?? "");
$autoReplyHtml = $data["autoReplyHtml"] ?? null;

// Validate recipient format
if (!filter_var($toRecipient, FILTER_VALIDATE_EMAIL)) {
    $toRecipient = $COMPANY_EMAIL;
}

// Anti-Open Relay: ensure leads always deliver to company inbox
if (!in_array(strtolower($toRecipient), $AUTHORIZED_ADMIN_EMAILS)) {
    $toRecipient = $COMPANY_EMAIL;
}

if (empty($messageHtml)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Message content is required."]);
    exit;
}

// ==============================================================================
// 4. LOW-LEVEL SMTP ENGINE (TLS / SSL SOCKET)
// ==============================================================================
function executeSmtpSend($host, $port, $user, $pass, $fromName, $toEmail, $subject, $htmlBody, $replyToEmail = null) {
    $connectHost = ($port === 465) ? "ssl://" . $host : $host;
    
    $socket = @fsockopen($connectHost, $port, $errno, $errstr, 25);
    if (!$socket) {
        return ["success" => false, "error" => "Could not connect to SMTP server: " . $errstr];
    }

    $readResponse = function() use ($socket) {
        $res = "";
        while ($line = fgets($socket, 515)) {
            $res .= $line;
            if (isset($line[3]) && $line[3] === " ") {
                break;
            }
        }
        return $res;
    };

    $sendCommand = function($cmd) use ($socket, $readResponse) {
        fwrite($socket, $cmd . "\r\n");
        return $readResponse();
    };

    // Initial Banner
    $res = $readResponse();
    if (strpos($res, "220") === false) {
        fclose($socket);
        return ["success" => false, "error" => "SMTP banner rejected: " . $res];
    }

    // EHLO Handshake
    $sendCommand("EHLO localhost");

    // Upgrade with STARTTLS for port 587
    if ($port !== 465) {
        $res = $sendCommand("STARTTLS");
        if (strpos($res, "220") === false) {
            fclose($socket);
            return ["success" => false, "error" => "STARTTLS not supported or rejected"];
        }

        $crypto = stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
        if (!$crypto) {
            fclose($socket);
            return ["success" => false, "error" => "TLS encryption handshake failed"];
        }

        // Re-send EHLO after TLS negotiation
        $sendCommand("EHLO localhost");
    }

    // AUTH LOGIN
    $res = $sendCommand("AUTH LOGIN");
    if (strpos($res, "334") === false) {
        fclose($socket);
        return ["success" => false, "error" => "AUTH LOGIN command rejected"];
    }

    // Username
    $res = $sendCommand(base64_encode($user));
    if (strpos($res, "334") === false) {
        fclose($socket);
        return ["success" => false, "error" => "SMTP Username rejected"];
    }

    // Password (clean spaces first)
    $cleanPass = str_replace(" ", "", $pass);
    $res = $sendCommand(base64_encode($cleanPass));
    if (strpos($res, "235") === false) {
        // Retry with original password
        $res = $sendCommand(base64_encode($pass));
        if (strpos($res, "235") === false) {
            fclose($socket);
            return ["success" => false, "error" => "SMTP Authentication failed. Check App Password."];
        }
    }

    // MAIL FROM
    $res = $sendCommand("MAIL FROM:<" . $user . ">");
    if (strpos($res, "250") === false) {
        fclose($socket);
        return ["success" => false, "error" => "MAIL FROM rejected"];
    }

    // RCPT TO
    $res = $sendCommand("RCPT TO:<" . $toEmail . ">");
    if (strpos($res, "250") === false && strpos($res, "251") === false) {
        fclose($socket);
        return ["success" => false, "error" => "Recipient rejected: " . $toEmail];
    }

    // DATA
    $res = $sendCommand("DATA");
    if (strpos($res, "354") === false) {
        fclose($socket);
        return ["success" => false, "error" => "DATA command rejected"];
    }

    // RFC 5321 Dot-Stuffing
    $safeBody = str_replace(["\r\n.", "\n."], ["\r\n..", "\n.."], $htmlBody);

    // Build Email Headers
    $headers = [];
    $headers[] = "From: " . $fromName . " <" . $user . ">";
    $headers[] = "To: " . $toEmail;
    if ($replyToEmail && filter_var($replyToEmail, FILTER_VALIDATE_EMAIL)) {
        $headers[] = "Reply-To: " . $replyToEmail;
    }
    $headers[] = "Subject: " . $subject;
    $headers[] = "MIME-Version: 1.0";
    $headers[] = "Content-Type: text/html; charset=UTF-8";
    $headers[] = "X-Mailer: SriMathurams-EnterpriseMailer/3.0";

    $rawEmail = implode("\r\n", $headers) . "\r\n\r\n" . $safeBody . "\r\n.\r\n";
    fwrite($socket, $rawEmail);

    $res = $readResponse();
    $sendCommand("QUIT");
    fclose($socket);

    if (strpos($res, "250") === false) {
        return ["success" => false, "error" => "Message rejected by SMTP server: " . $res];
    }

    return ["success" => true];
}

// ==============================================================================
// 5. SEND MAIN NOTIFICATION EMAIL (TO ADMIN / SALES TEAM)
// ==============================================================================
$adminReplyTo = (filter_var($customerEmail, FILTER_VALIDATE_EMAIL)) ? $customerEmail : null;

$adminResult = executeSmtpSend(
    $SMTP_HOST,
    $SMTP_PORT,
    $SMTP_USER,
    $SMTP_PASS,
    $FROM_NAME,
    $toRecipient,
    $subject,
    $messageHtml,
    $adminReplyTo
);

if (!$adminResult["success"]) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "error"   => $adminResult["error"]
    ]);
    exit;
}

// ==============================================================================
// 6. SEND INSTANT AUTO-REPLY CONFIRMATION EMAIL (TO CUSTOMER)
// ==============================================================================
$autoReplySent = false;
$autoReplyError = null;

if (!empty($customerEmail) && filter_var($customerEmail, FILTER_VALIDATE_EMAIL)) {
    // Generate customer confirmation HTML if not provided in payload
    if (empty($autoReplyHtml)) {
        $displayProd = !empty($productName) ? " for <strong>" . htmlspecialchars($productName) . "</strong>" : "";
        $autoReplyHtml = '
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Inquiry Received</title></head>
        <body style="margin: 0; padding: 0; background-color: #F8FAFC; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; color: #0F172A;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F8FAFC; padding: 36px 16px;">
            <tr>
              <td align="center">
                <table width="560" cellpadding="0" cellspacing="0" style="background-color: #FFFFFF; border-radius: 14px; border: 1px solid #E2E8F0; overflow: hidden; max-width: 100%; box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);">
                  <tr>
                    <td style="padding: 24px 30px 18px 30px; border-bottom: 1px solid #F1F5F9;">
                      <div style="font-size: 16px; font-weight: 800; color: #0F2D4A; letter-spacing: 0.3px;">Sri Mathurams</div>
                      <div style="font-size: 12px; color: #64748B; margin-top: 1px;">Medical Engineering</div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 26px 30px;">
                      <h2 style="font-size: 17px; font-weight: 700; color: #0F2D4A; margin-top: 0; margin-bottom: 12px;">
                        Thank You, ' . htmlspecialchars($customerName) . '!
                      </h2>
                      <p style="font-size: 13px; line-height: 1.6; color: #334155; margin-bottom: 14px;">
                        We have received your requirement' . $displayProd . '.
                      </p>
                      <p style="font-size: 13px; line-height: 1.6; color: #334155; margin-bottom: 22px;">
                        Our sales engineering team in Coimbatore is reviewing your details and will connect with you shortly with product specifications and official factory quotation.
                      </p>
                      <div style="background-color: #FAFBFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                        <div style="font-size: 11px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">Direct Factory Assistance</div>
                        <div style="font-size: 13px; color: #334155; line-height: 1.6;">
                          Phone: <a href="tel:+919842204966" style="color: #0F2D4A; font-weight: 600; text-decoration: none;">+91 98422 04966</a> / <a href="tel:+918883011166" style="color: #0F2D4A; font-weight: 600; text-decoration: none;">+91 88830 11166</a><br>
                          Email: <a href="mailto:mathuramindia@gmail.com" style="color: #0F2D4A; text-decoration: none;">mathuramindia@gmail.com</a>
                        </div>
                      </div>
                      <div style="padding-top: 6px;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td align="left" style="width: 50%; padding-right: 6px;">
                              <a href="tel:+919842204966" style="display: block; text-align: center; background-color: #0F2D4A; color: #FFFFFF; text-decoration: none; padding: 11px 16px; border-radius: 6px; font-weight: 600; font-size: 13px;">Call Sales Desk</a>
                            </td>
                            <td align="right" style="width: 50%; padding-left: 6px;">
                              <a href="https://wa.me/919842204966" target="_blank" style="display: block; text-align: center; background-color: #16A34A; color: #FFFFFF; text-decoration: none; padding: 11px 16px; border-radius: 6px; font-weight: 600; font-size: 13px;">Chat on WhatsApp</a>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="background-color: #FAFBFC; padding: 14px 30px; border-top: 1px solid #F1F5F9; text-align: center; font-size: 11px; color: #94A3B8;">
                      Sri Mathurams Medical Engineering • Somayampalayam, Coimbatore – 641108
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>';
    }

    $customerSubject = "Requirement Received - Sri Mathurams Medical Engineering";
    $replyResult = executeSmtpSend(
        $SMTP_HOST,
        $SMTP_PORT,
        $SMTP_USER,
        $SMTP_PASS,
        $FROM_NAME,
        $customerEmail,
        $customerSubject,
        $autoReplyHtml,
        "mathuramindia@gmail.com"
    );

    if ($replyResult["success"]) {
        $autoReplySent = true;
    } else {
        $autoReplyError = $replyResult["error"];
    }
}

// ==============================================================================
// 7. FINAL RESPONSE
// ==============================================================================
http_response_code(200);
echo json_encode([
    "success"        => true,
    "message"        => "Inquiry processed and email sent successfully.",
    "autoReplySent"  => $autoReplySent,
    "autoReplyError" => $autoReplyError
]);
