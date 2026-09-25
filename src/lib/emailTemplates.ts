import { ContactFormData, ModalInquiryData } from './api';


/**
 * 1. Contact Form Email UI (Orange Accent, Clean Title Case Badge)
 * Badge: "Contact submission from website" in elegant orange
 */
export function getContactFormEmailHtml(data: ContactFormData): string {
  const cleanPhone = (data.phone || '').replace(/[^0-9]/g, '');

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enquiry from website - Sri Mathurams</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #F8FAFC; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0F172A; -webkit-font-smoothing: antialiased;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F8FAFC; padding: 36px 16px;">
      <tr>
        <td align="center">
          <table width="560" cellpadding="0" cellspacing="0" style="background-color: #FFFFFF; border-radius: 14px; border: 1px solid #E2E8F0; overflow: hidden; max-width: 100%; box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);">
            
            <!-- Clean Header with Brand Name & Orange Badge -->
            <tr>
              <td style="padding: 22px 28px 18px 28px; border-bottom: 1px solid #F1F5F9;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left" valign="middle">
                      <div style="font-size: 17px; font-weight: 800; color: #0B3C83; letter-spacing: 0.5px; line-height: 1.2; text-transform: uppercase; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                        Sri Mathurams
                      </div>
                      <div style="font-size: 10.5px; font-weight: 700; color: #E86D24; letter-spacing: 1.2px; text-transform: uppercase; margin-top: 3px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                        Medical Engineering
                      </div>
                    </td>
                    <td align="right" valign="middle">
                      <span style="display: inline-block; background-color: #FFF7ED; border: 1px solid #FFEDD5; color: #EA580C; font-size: 11px; font-weight: 600; padding: 4px 12px; border-radius: 20px; white-space: nowrap;">
                        Enquiry from website
                      </span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Content Area -->
            <tr>
              <td style="padding: 26px 30px;">
                
                <div style="font-size: 14px; color: #334155; line-height: 1.5; margin-bottom: 22px;">
                  New requirement submitted by <strong style="color: #0F172A;">${data.name}</strong>.
                </div>

                <!-- Customer Details Table -->
                <div style="margin-bottom: 22px;">
                  <div style="font-size: 11px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 8px;">
                    Customer Information
                  </div>
                  
                  <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 13px; border: 1px solid #F1F5F9; border-radius: 8px; overflow: hidden;">
                    <tr style="background-color: #FFFFFF; border-bottom: 1px solid #F1F5F9;">
                      <td style="padding: 10px 14px; color: #64748B; width: 36%; font-weight: 500;">Customer Name</td>
                      <td style="padding: 10px 14px; color: #0F172A; font-weight: 600;">${data.name}</td>
                    </tr>
                    <tr style="background-color: #FAFBFC; border-bottom: 1px solid #F1F5F9;">
                      <td style="padding: 10px 14px; color: #64748B; font-weight: 500;">Hospital / Org</td>
                      <td style="padding: 10px 14px; color: #0F172A;">${data.hospital || '—'}</td>
                    </tr>
                    <tr style="background-color: #FFFFFF; border-bottom: 1px solid #F1F5F9;">
                      <td style="padding: 10px 14px; color: #64748B; font-weight: 500;">City / Location</td>
                      <td style="padding: 10px 14px; color: #0F172A;">${data.city || '—'}</td>
                    </tr>
                    <tr style="background-color: #FAFBFC; border-bottom: 1px solid #F1F5F9;">
                      <td style="padding: 10px 14px; color: #64748B; font-weight: 500;">Phone Number</td>
                      <td style="padding: 10px 14px;">
                        <a href="tel:+91${cleanPhone}" style="color: #EA580C; font-weight: 700; text-decoration: none;">+91 ${data.phone}</a>
                      </td>
                    </tr>
                    <tr style="background-color: #FFFFFF;">
                      <td style="padding: 10px 14px; color: #64748B; font-weight: 500;">Email Address</td>
                      <td style="padding: 10px 14px;">
                        ${data.email ? `<a href="mailto:${data.email}" style="color: #0284C7; text-decoration: none;">${data.email}</a>` : '—'}
                      </td>
                    </tr>
                  </table>
                </div>

                <!-- Product Details Block with Orange Accent -->
                <div style="margin-bottom: 22px;">
                  <div style="font-size: 11px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 8px;">
                    Requested Product
                  </div>

                  <div style="background-color: #FFFBF8; border: 1px solid #FED7AA; border-radius: 8px; padding: 14px 16px;">
                    <div style="font-size: 11px; font-weight: 700; color: #EA580C; text-transform: uppercase; margin-bottom: 2px;">
                      ${data.category || 'Hospital Furniture'}
                    </div>
                    <div style="font-size: 15px; font-weight: 700; color: #0F2D4A; margin-bottom: 4px;">
                      ${data.product || 'General Requirement'}
                    </div>
                    <div style="font-size: 12px; color: #64748B;">
                      Quantity: <strong style="color: #0F2D4A;">${data.quantity || '1 Unit'}</strong>
                    </div>
                  </div>
                </div>

                <!-- Message / Notes -->
                ${data.message ? `
                <div style="margin-bottom: 24px;">
                  <div style="font-size: 11px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 8px;">
                    Requirement Note
                  </div>
                  <div style="background-color: #FAFBFC; border-left: 3px solid #EA580C; border-radius: 0 6px 6px 0; padding: 12px 16px; font-size: 13px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${data.message}</div>
                </div>
                ` : ''}

                <!-- Action Buttons: Exact Matching Equal Height -->
                <div style="padding-top: 10px; border-top: 1px solid #F1F5F9;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: fixed;">
                    <tr>
                      <td align="left" valign="top" style="width: 50%; padding-right: 6px;">
                        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0F2D4A; border-radius: 6px; height: 46px; border-collapse: separate;">
                          <tr>
                            <td align="center" valign="middle" height="46" style="height: 46px; padding: 4px 10px; text-align: center;">
                              <a href="tel:+91${cleanPhone}" style="display: block; width: 100%; color: #FFFFFF; text-decoration: none; font-weight: 600; font-size: 13px; line-height: 1.3;">
                                Call Customer
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td align="right" valign="top" style="width: 50%; padding-left: 6px;">
                        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #16A34A; border-radius: 6px; height: 46px; border-collapse: separate;">
                          <tr>
                            <td align="center" valign="middle" height="46" style="height: 46px; padding: 4px 10px; text-align: center;">
                              <a href="https://wa.me/91${cleanPhone}" target="_blank" style="display: block; width: 100%; color: #FFFFFF; text-decoration: none; font-weight: 600; font-size: 13px; line-height: 1.3;">
                                WhatsApp
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>

              </td>
            </tr>

            <!-- Minimal Footer -->
            <tr>
              <td style="background-color: #FAFBFC; padding: 14px 30px; border-top: 1px solid #F1F5F9; text-align: center; font-size: 11px; color: #94A3B8;">
                Sri Mathurams Medical Engineering • Coimbatore – 641108
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}

/**
 * 2. Quote Request Email UI (Blue Accent, Clean Title Case Badge)
 * Badge: "Quote request from website" in elegant blue
 */
export function getModalInquiryEmailHtml(data: ModalInquiryData): string {
  const cleanPhone = (data.mobileNumber || '').replace(/[^0-9]/g, '');

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Request for quotation - Sri Mathurams</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #F8FAFC; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0F172A; -webkit-font-smoothing: antialiased;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F8FAFC; padding: 36px 16px;">
      <tr>
        <td align="center">
          <table width="560" cellpadding="0" cellspacing="0" style="background-color: #FFFFFF; border-radius: 14px; border: 1px solid #E2E8F0; overflow: hidden; max-width: 100%; box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);">
            
            <!-- Clean Header with Brand Name & Blue Badge -->
            <tr>
              <td style="padding: 22px 28px 18px 28px; border-bottom: 1px solid #F1F5F9;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left" valign="middle">
                      <div style="font-size: 17px; font-weight: 800; color: #0B3C83; letter-spacing: 0.5px; line-height: 1.2; text-transform: uppercase; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                        Sri Mathurams
                      </div>
                      <div style="font-size: 10.5px; font-weight: 700; color: #E86D24; letter-spacing: 1.2px; text-transform: uppercase; margin-top: 3px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                        Medical Engineering
                      </div>
                    </td>
                    <td align="right" valign="middle">
                      <span style="display: inline-block; background-color: #EFF6FF; border: 1px solid #DBEAFE; color: #0284C7; font-size: 11px; font-weight: 600; padding: 4px 12px; border-radius: 20px; white-space: nowrap;">
                        Request for quotation
                      </span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Content Area -->
            <tr>
              <td style="padding: 26px 30px;">
                
                <div style="font-size: 14px; color: #334155; line-height: 1.5; margin-bottom: 22px;">
                  Quick quotation request received from <strong style="color: #0F172A;">${data.countryCode || '+91'} ${data.mobileNumber}</strong>.
                </div>

                <!-- Product Details Block with Blue Accent -->
                <div style="margin-bottom: 22px;">
                  <div style="font-size: 11px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 8px;">
                    Requested Product
                  </div>

                  <div style="background-color: #F8FAFC; border: 1px solid #BAE6FD; border-radius: 8px; padding: 14px 16px;">
                    <div style="font-size: 11px; font-weight: 700; color: #0284C7; text-transform: uppercase; margin-bottom: 2px;">
                      ${data.category || 'Hospital Furniture'}
                    </div>
                    <div style="font-size: 15px; font-weight: 700; color: #0F2D4A; margin-bottom: 4px;">
                      ${data.productName}
                    </div>
                    <div style="font-size: 12px; color: #64748B;">
                      Quantity: <strong style="color: #0F2D4A;">${data.quantity} ${data.unit}</strong>
                    </div>
                  </div>
                </div>

                <!-- Contact Details Block -->
                <div style="margin-bottom: 22px;">
                  <div style="font-size: 11px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 8px;">
                    Contact Information
                  </div>
                  
                  <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 13px; border: 1px solid #F1F5F9; border-radius: 8px; overflow: hidden;">
                    <tr style="background-color: #FFFFFF; border-bottom: 1px solid #F1F5F9;">
                      <td style="padding: 10px 14px; color: #64748B; width: 36%; font-weight: 500;">Customer Name</td>
                      <td style="padding: 10px 14px; color: #0F172A; font-weight: 600;">${data.customerName || '—'}</td>
                    </tr>
                    <tr style="background-color: #FAFBFC; border-bottom: 1px solid #F1F5F9;">
                      <td style="padding: 10px 14px; color: #64748B; font-weight: 500;">Email Address</td>
                      <td style="padding: 10px 14px;">
                        ${data.email ? `<a href="mailto:${data.email}" style="color: #0284C7; font-weight: 600; text-decoration: none;">${data.email}</a>` : '—'}
                      </td>
                    </tr>
                    <tr style="background-color: #FFFFFF; border-bottom: 1px solid #F1F5F9;">
                      <td style="padding: 10px 14px; color: #64748B; font-weight: 500;">Mobile Number</td>
                      <td style="padding: 10px 14px;">
                        <a href="tel:${data.countryCode || '+91'}${cleanPhone}" style="color: #0284C7; font-weight: 700; font-size: 14px; text-decoration: none;">
                          ${data.countryCode || '+91'} ${data.mobileNumber}
                        </a>
                      </td>
                    </tr>
                    <tr style="background-color: #FAFBFC; border-bottom: 1px solid #F1F5F9;">
                      <td style="padding: 10px 14px; color: #64748B; font-weight: 500;">Hospital / Clinic</td>
                      <td style="padding: 10px 14px; color: #0F172A;">${data.hospitalName || '—'}</td>
                    </tr>
                    <tr style="background-color: #FFFFFF;">
                      <td style="padding: 10px 14px; color: #64748B; font-weight: 500;">Location / City</td>
                      <td style="padding: 10px 14px; color: #0F172A;">${data.location || '—'}</td>
                    </tr>
                  </table>
                </div>

                <!-- Additional Details -->
                ${data.additionalDetails ? `
                <div style="margin-bottom: 24px;">
                  <div style="font-size: 11px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 8px;">
                    Customization Detail
                  </div>
                  <div style="background-color: #FAFBFC; border-left: 3px solid #0284C7; border-radius: 0 6px 6px 0; padding: 12px 16px; font-size: 13px; line-height: 1.6; color: #334155;">
                    ${data.additionalDetails}
                  </div>
                </div>
                ` : ''}

                <!-- Action Buttons: Exact Matching Equal Height -->
                <div style="padding-top: 10px; border-top: 1px solid #F1F5F9;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: fixed;">
                    <tr>
                      <td align="left" valign="top" style="width: 50%; padding-right: 6px;">
                        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0F2D4A; border-radius: 6px; height: 46px; border-collapse: separate;">
                          <tr>
                            <td align="center" valign="middle" height="46" style="height: 46px; padding: 4px 10px; text-align: center;">
                              <a href="tel:${data.countryCode || '+91'}${cleanPhone}" style="display: block; width: 100%; color: #FFFFFF; text-decoration: none; font-weight: 600; font-size: 13px; line-height: 1.3;">
                                Call Customer
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td align="right" valign="top" style="width: 50%; padding-left: 6px;">
                        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #16A34A; border-radius: 6px; height: 46px; border-collapse: separate;">
                          <tr>
                            <td align="center" valign="middle" height="46" style="height: 46px; padding: 4px 10px; text-align: center;">
                              <a href="https://wa.me/${(data.countryCode || '91').replace('+', '')}${cleanPhone}" target="_blank" style="display: block; width: 100%; color: #FFFFFF; text-decoration: none; font-weight: 600; font-size: 13px; line-height: 1.3;">
                                WhatsApp
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>

              </td>
            </tr>

            <!-- Minimal Footer -->
            <tr>
              <td style="background-color: #FAFBFC; padding: 14px 30px; border-top: 1px solid #F1F5F9; text-align: center; font-size: 11px; color: #94A3B8;">
                Sri Mathurams Medical Engineering • Coimbatore – 641108
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}

/**
 * 3. Customer Reply Confirmation Email UI (Brand Logo, Clean Title, Dual Call & WhatsApp Equal-Height Buttons)
 */
export function getCustomerReplyEmailHtml(name: string, product?: string): string {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inquiry received - Sri Mathurams</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #F8FAFC; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0F172A; -webkit-font-smoothing: antialiased;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F8FAFC; padding: 36px 16px;">
      <tr>
        <td align="center">
          <table width="560" cellpadding="0" cellspacing="0" style="background-color: #FFFFFF; border-radius: 14px; border: 1px solid #E2E8F0; overflow: hidden; max-width: 100%; box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);">
            
            <!-- Clean Header with Brand Name -->
            <tr>
              <td style="padding: 22px 28px 18px 28px; border-bottom: 1px solid #F1F5F9;">
                <div style="font-size: 17px; font-weight: 800; color: #0B3C83; letter-spacing: 0.5px; line-height: 1.2; text-transform: uppercase; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                  Sri Mathurams
                </div>
                <div style="font-size: 10.5px; font-weight: 700; color: #E86D24; letter-spacing: 1.2px; text-transform: uppercase; margin-top: 3px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                  Medical Engineering
                </div>
              </td>
            </tr>

            <!-- Content Area -->
            <tr>
              <td style="padding: 26px 30px;">
                
                <h2 style="font-size: 17px; font-weight: 700; color: #0F2D4A; margin-top: 0; margin-bottom: 12px;">
                  Thank You, ${name || 'Valued Customer'}!
                </h2>

                <p style="font-size: 13px; line-height: 1.6; color: #334155; margin-bottom: 14px;">
                  We have received your requirement${product ? ` for <strong>${product}</strong>` : ''}.
                </p>

                <p style="font-size: 13px; line-height: 1.6; color: #334155; margin-bottom: 22px;">
                  Our sales engineering team in Coimbatore is reviewing your details and will connect with you shortly with product specifications and official factory quotation.
                </p>

                <!-- Direct Support Info Box -->
                <div style="background-color: #FAFBFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                  <div style="font-size: 11px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
                    Direct Factory Assistance
                  </div>
                  <div style="font-size: 13px; color: #334155; line-height: 1.6;">
                    Phone: <a href="tel:+919842204966" style="color: #0F2D4A; font-weight: 600; text-decoration: none;">+91 98422 04966</a> / <a href="tel:+918883011166" style="color: #0F2D4A; font-weight: 600; text-decoration: none;">+91 88830 11166</a><br>
                    Email: <a href="mailto:mathuramindia@gmail.com" style="color: #0F2D4A; text-decoration: none;">mathuramindia@gmail.com</a>
                  </div>
                </div>

                <!-- Dual Action Buttons: Guaranteed Equal Height across All Email Clients -->
                <div style="padding-top: 6px;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="table-layout: fixed;">
                    <tr>
                      <td align="left" valign="top" style="width: 50%; padding-right: 6px;">
                        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0F2D4A; border-radius: 6px; height: 48px; border-collapse: separate;">
                          <tr>
                            <td align="center" valign="middle" height="48" style="height: 48px; padding: 4px 10px; text-align: center;">
                              <a href="tel:+919842204966" style="display: block; width: 100%; color: #FFFFFF; text-decoration: none; font-weight: 600; font-size: 13px; line-height: 1.3;">
                                Call Sales Desk
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td align="right" valign="top" style="width: 50%; padding-left: 6px;">
                        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #16A34A; border-radius: 6px; height: 48px; border-collapse: separate;">
                          <tr>
                            <td align="center" valign="middle" height="48" style="height: 48px; padding: 4px 10px; text-align: center;">
                              <a href="https://wa.me/919842204966" target="_blank" style="display: block; width: 100%; color: #FFFFFF; text-decoration: none; font-weight: 600; font-size: 13px; line-height: 1.3;">
                                Chat on WhatsApp
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>

              </td>
            </tr>

            <!-- Minimal Footer -->
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
  </html>
  `;
}
