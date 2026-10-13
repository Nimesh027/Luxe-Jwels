import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryGuideClient from "@/components/guide/CategoryGuideClient";
import { guideCategoriesData } from "@/data";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export function generateStaticParams() {
  return [
    { category: "gold" },
    { category: "silver" },
    { category: "diamond" },
    { category: "shape" },
    { category: "shapes" },
  ];
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const norm = category.toLowerCase();
  const overview = guideCategoriesData.find(
    (c) => c.id.toLowerCase() === norm || (norm === "shapes" && c.id === "shape")
  );

  if (!overview) {
    return {
      title: "Guide Category Not Found - Luxe Jewels",
    };
  }

  return {
    title: `${overview.title} | Luxe Jewels Guide & Learn`,
    description: overview.description,
    openGraph: {
      title: `${overview.title} - Luxe Jewels`,
      description: overview.description,
      images: [
        {
          url: overview.heroImage,
          width: 1200,
          height: 1200,
          alt: overview.title,
        },
      ],
    },
  };
}

export default async function GuideCategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const norm = category.toLowerCase();
  const overview = guideCategoriesData.find(
    (c) => c.id.toLowerCase() === norm || (norm === "shapes" && c.id === "shape")
  );

  if (!overview) {
    notFound();
  }

  return <CategoryGuideClient overview={overview} />;
}
