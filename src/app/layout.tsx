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
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${montserrat.variable} scroll-smooth`}>
      <head />
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
          <main id="main-content" className="flex-1 bg-slate-50 overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </InquiryModalProvider>
      </body>
    </html>
  );
}
