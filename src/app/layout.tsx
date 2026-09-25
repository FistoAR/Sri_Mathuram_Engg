import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Outfit, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { generateOrganizationSchema } from "@/lib/seo";
import { COMPANY_INFO } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_INFO.name} | Hospital Furniture & Medical Equipment Manufacturer`,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description: COMPANY_INFO.description,
  keywords: [
    "Hospital Furniture Manufacturer",
    "Medical Equipment Coimbatore",
    "ICU Bed Manufacturer",
    "Electric ICU Beds Tamil Nadu",
    "Fowler Cots & Semi Fowler Beds",
    "Hospital Plain Cots",
    "Labour Cots & Delivery Tables",
    "Stretcher Trolley Manufacturer",
    "Patient Transfer Trolley",
    "Emergency Crash Carts",
    "Instrument & Dressing Trolleys",
    "Overbed Tables & Bedside Lockers",
    "Hospital Wheelchairs",
    "Attender Cots",
    "Examination Couches",
    "Stainless Steel Hospital Furniture",
    "OT Equipment Manufacturer",
    "Sri Mathurams Medical Engineering",
    "Hospital Furniture Supplier India",
    "Coimbatore Medical Devices"
  ],
  authors: [{ name: COMPANY_INFO.name, url: COMPANY_INFO.url }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  metadataBase: new URL(COMPANY_INFO.url),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: COMPANY_INFO.url,
    title: `${COMPANY_INFO.name} | Hospital Furniture & Medical Equipment Manufacturer`,
    description: COMPANY_INFO.description,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: `${COMPANY_INFO.name} - Hospital Furniture & Medical Equipment`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_INFO.name} | Hospital Furniture & Medical Equipment Manufacturer`,
    description: COMPANY_INFO.description,
    images: ["/images/og-default.jpg"],
  },
  icons: {
    icon: "/images/logo.webp",
    shortcut: "/images/logo.webp",
    apple: "/images/logo.webp",
  },
};

import { InquiryModalProvider } from "@/components/ui/InquiryModalContext";
import { Preloader } from "@/components/ui/Preloader";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { SecurityGuard } from "@/components/ui/SecurityGuard";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = generateOrganizationSchema();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} ${montserrat.variable} preloader-active`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (window.sessionStorage && window.sessionStorage.getItem('hasSeenPreloader')) {
                  document.documentElement.classList.add('preloader-done');
                  document.documentElement.classList.remove('preloader-active');
                }
              } catch (e) {}
            `,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html:not(.preloader-done) #main-content,
              html:not(.preloader-done) footer,
              html:not(.preloader-done) header {
                opacity: 0 !important;
                visibility: hidden !important;
              }
              html:not(.preloader-done) footer {
                display: none !important;
              }
              html.preloader-done .preloader-wrapper {
                display: none !important;
                opacity: 0 !important;
                pointer-events: none !important;
              }
            `,
          }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 flex flex-col min-h-screen select-none">
        <SecurityGuard />
        <SmoothScroll>
          <Preloader />
          <Script
            id="organization-jsonld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
          />
          <InquiryModalProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-orange-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg"
            >
              Skip to main content
            </a>
            <Header />
            <main
              id="main-content"
              className="flex-1 bg-slate-50 overflow-x-hidden min-h-screen"
            >
              {children}
            </main>
            <Footer />
          </InquiryModalProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
