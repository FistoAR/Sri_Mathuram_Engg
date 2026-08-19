import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Outfit, Montserrat } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { generateOrganizationSchema } from '@/lib/seo';
import { COMPANY_INFO } from '@/lib/data';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_INFO.name} | Hospital Furniture & Medical Equipment`,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description: COMPANY_INFO.description,
  metadataBase: new URL(COMPANY_INFO.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: COMPANY_INFO.url,
    siteName: COMPANY_INFO.name,
  },
  icons: {
    icon: '/images/logo.webp',
    shortcut: '/images/logo.webp',
    apple: '/images/logo.webp',
  },
};

import { InquiryModalProvider } from '@/components/ui/InquiryModalContext';
import { Preloader } from '@/components/ui/Preloader';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = generateOrganizationSchema();

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${montserrat.variable} preloader-active scroll-smooth`}>
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
      <body className="bg-slate-50 text-slate-900 flex flex-col min-h-screen">
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
          <main id="main-content" className="flex-1 bg-slate-50 overflow-x-hidden min-h-screen">
            {children}
          </main>
          <Footer />
        </InquiryModalProvider>
      </body>
    </html>
  );
}
