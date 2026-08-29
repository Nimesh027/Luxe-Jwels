"use client";

import { useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Section from "@/components/common/Section";
import ProductCard from "@/components/common/ProductCard";
import { useAppSelector } from "@/store/hooks";
import { filterProducts } from "@/lib/productFilter";

function CategoryContent({
  slug,
  initialGender,
  initialCollection,
}: {
  slug: string;
  initialGender?: string;
  initialCollection?: string;
}) {
  const searchParams = useSearchParams();
  const searchParamGender = searchParams.get("gender");
  const searchParamCollection = searchParams.get("collection");

  const rawGender = searchParamGender !== null ? searchParamGender : initialGender;
  const rawCollection = searchParamCollection !== null ? searchParamCollection : initialCollection;

  const activeGender = rawGender ? rawGender.toLowerCase().trim() : undefined;
  const activeCollection = rawCollection ? rawCollection.toLowerCase().trim() : undefined;

  const category = useAppSelector((state) =>
    state.categories.items.find((item) => item.slug === slug)
  );
  const allProducts = useAppSelector((state) => state.products.items);

  const products = useMemo(() => {
    return filterProducts(allProducts, {
      category: slug,
      gender: activeGender,
      collection: activeCollection,
    });
  }, [allProducts, slug, activeGender, activeCollection]);

  if (!category) return null;

  let displayTitle = category.name;
  if (slug === "mens-collection") {
    displayTitle = "Men's Collection";
  } else if (slug === "womens-collection") {
    displayTitle = "Women's Collection";
  } else if (activeGender === "men") {
    displayTitle = slug === "necklaces" ? "Men's Chains & Necklaces" : `Men's ${category.name}`;
  } else if (activeGender === "women") {
    displayTitle = `Women's ${category.name}`;
  }

  return (
    <Section title={displayTitle} subtitle={`${products.length} products`}>
      {products.length === 0 ? (
        <p className="text-small text-muted">No products found in this category yet.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </Section>
  );
}

function CategoryProductsWrapper({
  slug,
  initialGender,
  initialCollection,
}: {
  slug: string;
  initialGender?: string;
  initialCollection?: string;
}) {
  const searchParams = useSearchParams();
  const searchKey = `${slug}-${searchParams.toString()}-${initialGender || ""}-${initialCollection || ""}`;

  return (
    <CategoryContent
      key={searchKey}
      slug={slug}
      initialGender={initialGender}
      initialCollection={initialCollection}
    />
  );
}

export default function CategoryProductsClient({
  slug,
  initialGender,
  initialCollection,
}: {
  slug: string;
  initialGender?: string;
  initialCollection?: string;
}) {
  return (
    <Suspense fallback={<div className="min-h-[40vh]" />}>
      <CategoryProductsWrapper
        slug={slug}
        initialGender={initialGender}
        initialCollection={initialCollection}
      />
    </Suspense>
  );
}



