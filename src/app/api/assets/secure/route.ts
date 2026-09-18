import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Secret scrambling key sequence
const SCRAMBLE_KEY = [0x53, 0x4D, 0x45, 0x32, 0x30, 0x32, 0x36, 0xAA, 0xBB, 0xCC];

// Simple token de-obfuscator
function decodeToken(token: string): string {
  try {
    const raw = Buffer.from(token, "base64url").toString("utf-8");
    return raw;
  } catch (e) {
    return "";
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const token = searchParams.get("token") || searchParams.get("t");
    const fileParam = searchParams.get("file");

    // 1. Block direct browser address-bar document navigations
    const secFetchDest = request.headers.get("sec-fetch-dest");
    if (secFetchDest === "document") {
      return new NextResponse("Access Denied: Direct browser navigation is restricted.", { status: 403 });
    }

    let filePath = "";
    if (token) {
      filePath = decodeToken(token);
    } else if (fileParam) {
      filePath = fileParam;
    }

    if (!filePath) {
      return new NextResponse("Missing or invalid token", { status: 400 });
    }

    // Clean and normalize file path to prevent directory traversal
    const safePath = path.normalize(filePath).replace(/^(\.\.(\/|\\|$))+/, "");
    
    // Only permit files inside public/images
    if (!safePath.startsWith("/images/") && !safePath.startsWith("images/")) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    const cleanRelPath = safePath.startsWith("/") ? safePath.slice(1) : safePath;
    const fullDiskPath = path.join(process.cwd(), "public", cleanRelPath);

    if (!fs.existsSync(fullDiskPath)) {
      return new NextResponse("Not found", { status: 404 });
    }

    const rawBuffer = fs.readFileSync(fullDiskPath);

    // Scramble the buffer using rolling XOR transformation
    const scrambledBuffer = Buffer.alloc(rawBuffer.length);
    for (let i = 0; i < rawBuffer.length; i++) {
      scrambledBuffer[i] = rawBuffer[i] ^ SCRAMBLE_KEY[i % SCRAMBLE_KEY.length];
    }

    // Return as application/octet-stream binary so DevTools cannot preview as image
    return new NextResponse(scrambledBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/octet-stream",
        "X-Content-Type-Options": "nosniff",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
