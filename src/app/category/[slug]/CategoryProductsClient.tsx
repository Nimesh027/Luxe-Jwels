"use client";

import { useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PageHero from "@/components/common/PageHero";
import ProductGrid from "@/components/common/ProductGrid";
import { useAppSelector } from "@/store/hooks";
import { filterProducts } from "@/lib/productFilter";

const HERO_IMAGES: Record<string, string> = {
  rings: "/images/revamp/ring-macro.jpg",
  necklaces: "/images/product/grand-floral-heritage-necklace.jpg",
  earrings: "/images/products/teardrop-chandelier-earrings.jpg",
  bracelets: "/images/products/royal-tennis-bracelet.jpg",
  pendants: "/images/product/cross-pendant.jpg",
  "mens-collection": "/images/for-him-for-her/for-him-1.jpg",
  "womens-collection": "/images/revamp/designer-model.jpg",
};

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
    <>
      <PageHero
        title={displayTitle}
        subtitle="Timeless designs for every occasion"
        image={HERO_IMAGES[slug] ?? "/images/revamp/ring-macro.jpg"}
        breadcrumbs={[{ label: "Shop", href: "/shop" }, { label: displayTitle }]}
      />
      <ProductGrid title={displayTitle} products={products} />
    </>
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



