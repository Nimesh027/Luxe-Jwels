import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categoriesData } from "@/store/slices/categoriesSlice";
import CategoryProductsClient from "./CategoryProductsClient";

export function generateStaticParams() {
  return categoriesData.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = categoriesData.find((item) => item.slug === slug);
  if (!category) return {};

  return {
    title: category.name,
    description: `Shop the ${category.name} collection at Luxe Jewels.`,
    openGraph: {
      title: category.name,
      images: [{ url: category.image }],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exists = categoriesData.some((item) => item.slug === slug);
  if (!exists) notFound();

  return <CategoryProductsClient slug={slug} />;
}
