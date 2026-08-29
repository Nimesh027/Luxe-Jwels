"use client";

import Image from "next/image";
import { useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Section from "@/components/common/Section";
import ProductCard from "@/components/common/ProductCard";
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
      <Section className="!p-0" containerClassName="!p-0 !max-w-full">
        <div className="relative h-64 w-full overflow-hidden sm:h-80">
          <Image
            src={collection.image}
            alt={collection.name}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/45" />
          <div className="relative flex h-full flex-col items-center justify-center gap-2 text-center">
            <h1 className="font-display text-h2 text-cream sm:text-h2">{collection.name}</h1>
            <p className="text-small text-cream/85">{collection.tagline}</p>
          </div>
        </div>
      </Section>

      <Section title="Shop The Collection" subtitle={`${products.length} products`}>
        {products.length === 0 ? (
          <p className="text-small text-muted">No products found in this collection.</p>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </Section>
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
