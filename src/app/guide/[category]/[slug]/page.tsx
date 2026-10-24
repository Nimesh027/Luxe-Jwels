import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuideDetailClient from "@/components/guide/GuideDetailClient";
import DiamondShapeDetailClient from "@/components/guide/DiamondShapeDetailClient";
import { getGuideItem, getAllGuideSlugs, getDiamondShape } from "@/data";

interface GuideDetailPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export function generateStaticParams() {
  return getAllGuideSlugs();
}

export async function generateMetadata({
  params,
}: GuideDetailPageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const normalizedCategory = category.toLowerCase();
  const isShapeCategory =
    normalizedCategory === "shape" || normalizedCategory === "shapes";

  const shape = getDiamondShape(slug);
  if (isShapeCategory || (shape && normalizedCategory === "diamond")) {
    if (!shape) {
      return {
        title: "Diamond Shape Guide Not Found",
      };
    }

    return {
      title: `${shape.name} | 4Cs & Cut Masterclass Guide | Luxe Jewels`,
      description: shape.overview || shape.description,
      openGraph: {
        title: `${shape.name} Diamond Guide - Luxe Jewels`,
        description: shape.tagline,
        images: [
          {
            url: shape.image,
            width: 1200,
            height: 1200,
            alt: shape.name,
          },
        ],
      },
    };
  }

  const item = getGuideItem(category, slug);

  if (!item) {
    return {
      title: "Jewellery Guide Not Found",
    };
  }

  return {
    title: `${item.name} | Certified Master Guide | Luxe Jewels`,
    description: item.description,
    openGraph: {
      title: `${item.name} - Luxe Jewels Guide & Learn`,
      description: item.tagline,
      images: [
        {
          url: item.detailImage || item.image,
          width: 1200,
          height: 1200,
          alt: item.name,
        },
      ],
    },
  };
}

export default async function GuideDetailPage({
  params,
}: GuideDetailPageProps) {
  const { category, slug } = await params;
  const normalizedCategory = category.toLowerCase();
  const isShapeCategory =
    normalizedCategory === "shape" || normalizedCategory === "shapes";

  // When visiting shape category or if slug is a diamond cut shape, render the bespoke diamond details page
  if (isShapeCategory) {
    const shape = getDiamondShape(slug);
    if (!shape) {
      notFound();
    }
    return <DiamondShapeDetailClient shape={shape} />;
  }

  // If in /guide/diamond/[slug] and slug is a shape (e.g. /guide/diamond/round)
  const potentialShape = getDiamondShape(slug);
  if (normalizedCategory === "diamond" && potentialShape && !getGuideItem("diamond", slug)) {
    return <DiamondShapeDetailClient shape={potentialShape} />;
  }

  const item = getGuideItem(category, slug);

  if (!item) {
    notFound();
  }

  return <GuideDetailClient item={item} />;
}

