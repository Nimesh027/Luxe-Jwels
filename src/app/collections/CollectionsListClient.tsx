"use client";

import { useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PageHero from "@/components/common/PageHero";
import ProductGrid from "@/components/common/ProductGrid";
import { useAppSelector } from "@/store/hooks";
import { filterProducts } from "@/lib/productFilter";
import Collections from "@/components/sections/Collections";

function CollectionsContent() {
  const searchParams = useSearchParams();
  const gender = searchParams.get("gender");
  const collectionParam = searchParams.get("collection");
  const categoryParam = searchParams.get("category");
  const searchQuery = searchParams.get("search")?.trim() || "";

  const collections = useAppSelector((state) => state.collections.items);
  const allProducts = useAppSelector((state) => state.products.items);

  const matchedCollection = useMemo(() => {
    if (!collectionParam) return null;
    return collections.find((c) => c.slug === collectionParam.toLowerCase().trim());
  }, [collections, collectionParam]);

  const filteredProducts = useMemo(() => {
    return filterProducts(allProducts, {
      collection: collectionParam || undefined,
      category: categoryParam || undefined,
      gender: gender || undefined,
      search: searchQuery || undefined,
    });
  }, [allProducts, collectionParam, categoryParam, gender, searchQuery]);

  const pageTitle = useMemo(() => {
    if (searchQuery) return `Results for “${searchQuery}”`;
    if (matchedCollection) {
      if (gender === "women") return `Women's ${matchedCollection.name}`;
      if (gender === "men") return `Men's ${matchedCollection.name}`;
      return matchedCollection.name;
    }
    if (gender === "women") return "All Women's Jewellery";
    if (gender === "men") return "All Men's Jewellery";
    return "All Jewellery & Collections";
  }, [matchedCollection, gender, searchQuery]);

  const pageSubtitle = useMemo(() => {
    if (matchedCollection) return matchedCollection.tagline;
    if (gender === "women") return `${filteredProducts.length} handcrafted pieces for her`;
    if (gender === "men") return `${filteredProducts.length} handcrafted pieces for him`;
    return "Explore fine jewellery curated for every moment.";
  }, [matchedCollection, gender, filteredProducts.length]);

  return (
    <>
      <PageHero
        title={pageTitle}
        subtitle={searchQuery ? `${filteredProducts.length} matching designs` : pageSubtitle}
        image="/images/revamp/luxury-trust-banner.jpg"
        breadcrumbs={[{ label: searchQuery ? "Search" : "Collections" }]}
      />
      <ProductGrid title={searchQuery ? "Search results" : "All designs"} products={filteredProducts} />
      <Collections />
    </>
  );
}

export default function CollectionsListClient() {
  return (
    <Suspense fallback={<div className="min-h-[40vh]" />}>
      <CollectionsContent />
    </Suspense>
  );
}

