import { notFound } from 'next/navigation';
import Script from 'next/script';
import { PRODUCTS, MedicalProduct } from '@/lib/data';
import { constructMetadata, generateProductSchema } from '@/lib/seo';
import { ProductDetailClient } from './ProductDetailClient';

interface ProductDetailProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductDetailProps) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) {
    return constructMetadata({ title: 'Product Not Found', noIndex: true });
  }

  return constructMetadata({
    title: `${product.name} | Hospital Equipment`,
    description: product.description,
    canonical: `/products/${product.slug}`,
    ogImage: product.image,
  });
}

export default function ProductDetailPage({ params }: ProductDetailProps) {
  const product = PRODUCTS.find((p) => p.slug === params.slug) as MedicalProduct | undefined;

  if (!product) {
    notFound();
  }

  const productSchema = generateProductSchema(product);

  // Get related products in the same category
  let relatedProducts = PRODUCTS.filter(
    (p) => p.slug !== product.slug && p.category === product.category
  );

  if (relatedProducts.length < 4) {
    const additionalProducts = PRODUCTS.filter(
      (p) => p.slug !== product.slug && !relatedProducts.some((rp) => rp.id === p.id)
    );
    relatedProducts = [...relatedProducts, ...additionalProducts];
  }

  return (
    <>
      <Script
        id={`product-schema-${product.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
    </>
  );
}
