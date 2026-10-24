import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { productsData } from "@/store/slices/productsSlice";
import { SITE_URL } from "@/lib/seo";
import ProductDetailClient from "./ProductDetailClient";

export function generateStaticParams() {
  return productsData.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((item) => item.slug === slug);
  if (!product) return {};

  const description =
    product.description ?? `Shop the ${product.name} — certified, hallmarked fine jewellery from Luxe Jewels.`;

  return {
    title: product.name,
    description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.name,
      description,
      url: `/products/${product.slug}`,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productsData.find((item) => item.slug === slug);
  if (!product) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [`${SITE_URL}${product.image}`],
    description: product.description,
    sku: product.id,
    category: product.category,
    brand: { "@type": "Brand", name: "Luxe Jewels" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: 4.8, reviewCount: 124 },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/products/${product.slug}`,
      priceCurrency: "INR",
      price: product.price,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductDetailClient slug={slug} />
    </>
  );
}
