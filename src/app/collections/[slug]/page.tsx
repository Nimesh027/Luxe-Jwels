import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { collectionsData } from "@/store/slices/collectionsSlice";
import CollectionDetailClient from "./CollectionDetailClient";

export function generateStaticParams() {
  return collectionsData.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = collectionsData.find((item) => item.slug === slug);
  if (!collection) return {};

  return {
    title: collection.name,
    description: collection.tagline,
    openGraph: {
      title: collection.name,
      description: collection.tagline,
      images: [{ url: collection.image }],
    },
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exists = collectionsData.some((item) => item.slug === slug);
  if (!exists) notFound();

  return <CollectionDetailClient slug={slug} />;
}
