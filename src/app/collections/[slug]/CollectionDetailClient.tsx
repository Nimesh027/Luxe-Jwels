"use client";

import { useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PageHero from "@/components/common/PageHero";
import ProductGrid from "@/components/common/ProductGrid";
import { useAppSelector } from "@/store/hooks";
import { filterProducts } from "@/lib/productFilter";

function CollectionDetailContent({
  slug,
  initialGender,
  initialCategory,
}: {
  slug: string;
  initialGender?: string;
  initialCategory?: string;
}) {
  const searchParams = useSearchParams();
  const searchParamGender = searchParams.get("gender");
  const searchParamCategory = searchParams.get("category");

  const rawGender = searchParamGender !== null ? searchParamGender : initialGender;
  const rawCategory = searchParamCategory !== null ? searchParamCategory : initialCategory;

  const activeGender = rawGender ? rawGender.toLowerCase().trim() : undefined;
  const activeCategory = rawCategory ? rawCategory.toLowerCase().trim() : undefined;

  const collection = useAppSelector((state) =>
    state.collections.items.find((item) => item.slug === slug)
  );
  const allProducts = useAppSelector((state) => state.products.items);

  const products = useMemo(() => {
    return filterProducts(allProducts, {
      collection: slug,
      gender: activeGender,
      category: activeCategory,
    });
  }, [allProducts, slug, activeGender, activeCategory]);

  if (!collection) return null;

  return (
    <>
      <PageHero
        title={collection.name}
        subtitle={collection.tagline}
        image={collection.image}
        breadcrumbs={[{ label: "Collections", href: "/collections" }, { label: collection.name }]}
      />
      <ProductGrid title="Shop the Collection" products={products} />
    </>
  );
}

function CollectionDetailWrapper({
  slug,
  initialGender,
  initialCategory,
}: {
  slug: string;
  initialGender?: string;
  initialCategory?: string;
}) {
  const searchParams = useSearchParams();
  const searchKey = `${slug}-${searchParams.toString()}-${initialGender || ""}-${initialCategory || ""}`;

  return (
    <CollectionDetailContent
      key={searchKey}
      slug={slug}
      initialGender={initialGender}
      initialCategory={initialCategory}
    />
  );
}

export default function CollectionDetailClient({
  slug,
  initialGender,
  initialCategory,
}: {
  slug: string;
  initialGender?: string;
  initialCategory?: string;
}) {
  return (
    <Suspense fallback={<div className="min-h-[40vh]" />}>
      <CollectionDetailWrapper
        slug={slug}
        initialGender={initialGender}
        initialCategory={initialCategory}
      />
    </Suspense>
  );
}
