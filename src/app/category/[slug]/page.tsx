import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categoriesData } from "@/store/slices/categoriesSlice";
import CategoryProductsClient from "./CategoryProductsClient";

export const dynamic = "force-dynamic";

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
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = await params;
  const exists = categoriesData.some((item) => item.slug === slug);
  if (!exists) notFound();

  const resolvedSearchParams = searchParams ? await searchParams : {};
  const initialGender =
    typeof resolvedSearchParams.gender === "string"
      ? resolvedSearchParams.gender
      : undefined;
  const initialCollection =
    typeof resolvedSearchParams.collection === "string"
      ? resolvedSearchParams.collection
      : undefined;

  return (
    <CategoryProductsClient
      slug={slug}
      initialGender={initialGender}
      initialCollection={initialCollection}
    />
  );
}
