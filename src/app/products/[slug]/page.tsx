import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { productsData } from "@/store/slices/productsSlice";
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

  return {
    title: product.name,
    description: product.description ?? `${product.name} — fine jewellery from Luxe Jewels.`,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exists = productsData.some((item) => item.slug === slug);
  if (!exists) notFound();

  return <ProductDetailClient slug={slug} />;
}
