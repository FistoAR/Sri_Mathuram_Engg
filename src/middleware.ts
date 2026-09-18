import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Block direct browser URL access to original raw product images
  if (
    pathname.includes("/images/Product Assets/productsImage/") ||
    pathname.includes("/images/Product%20Assets/productsImage/") ||
    pathname.includes("productsImage")
  ) {
    // Return 403 Forbidden to any direct browser navigation or scraper
    return new NextResponse("Access Denied: Direct resource extraction is forbidden.", {
      status: 403,
      headers: {
        "Content-Type": "text/plain",
        "X-Robots-Tag": "noindex, nofollow, noarchive",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/images/Product Assets/productsImage/:path*",
    "/images/Product%20Assets/productsImage/:path*",
    "/images/:path*productsImage/:path*",
  ],
};
