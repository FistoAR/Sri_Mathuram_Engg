import { Metadata } from 'next';
import { COMPANY_INFO } from './data';
import { Product, BreadcrumbItem } from '@/types';

export function constructMetadata({
  title,
  description,
  canonical,
  ogImage = '/images/og-default.jpg',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const metaTitle = title
    ? `${title} | ${COMPANY_INFO.name}`
    : `${COMPANY_INFO.name} | Hospital Furniture & Medical Equipment`;
  const metaDescription = description || COMPANY_INFO.description;
  const url = canonical ? `${COMPANY_INFO.url}${canonical}` : COMPANY_INFO.url;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      'Hospital Furniture Manufacturer',
      'Medical Equipment Coimbatore',
      'ICU Bed Manufacturer',
      'Electric ICU Beds Tamil Nadu',
      'Surgical Scrub Sink',
      'Medical Trolley Supplier',
      'Blood Donor Chair',
      'Sri Mathurams Medical Engineering',
    ],
    metadataBase: new URL(COMPANY_INFO.url),
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: url,
      siteName: COMPANY_INFO.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [ogImage],
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${COMPANY_INFO.url}/#organization`,
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.legalName,
    url: COMPANY_INFO.url,
    logo: `${COMPANY_INFO.url}/images/logo.png`,
    description: COMPANY_INFO.description,
    email: COMPANY_INFO.email,
    telephone: COMPANY_INFO.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.state,
      postalCode: COMPANY_INFO.address.postalCode,
      addressCountry: COMPANY_INFO.address.country,
    },
    areaServed: COMPANY_INFO.serviceArea,
    sameAs: [COMPANY_INFO.social.linkedin, COMPANY_INFO.social.twitter],
    foundingDate: COMPANY_INFO.established.toString(),
  };
}

import { MedicalProduct } from './data';

export function generateProductSchema(product: Product | MedicalProduct) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${COMPANY_INFO.url}/products/${product.slug}/#product`,
    name: product.name,
    image: product.image,
    description: product.description,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: COMPANY_INFO.name,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        valueAddedTaxIncluded: true,
      },
      description: 'Contact for Quote / Bulk Hospital Procurement',
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
    },
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${COMPANY_INFO.url}${item.url}`,
    })),
  };
}
