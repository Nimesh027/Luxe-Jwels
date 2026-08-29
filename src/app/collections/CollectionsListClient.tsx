"use client";

import { useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/common/Section";
import Card from "@/components/ui/Card";
import ProductCard from "@/components/common/ProductCard";
import { useAppSelector } from "@/store/hooks";
import { filterProducts } from "@/lib/productFilter";
import Collections from "@/components/sections/Collections";

function CollectionsContent() {
  const searchParams = useSearchParams();
  const gender = searchParams.get("gender");
  const collectionParam = searchParams.get("collection");
  const categoryParam = searchParams.get("category");

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
    });
  }, [allProducts, collectionParam, categoryParam, gender]);

  const pageTitle = useMemo(() => {
    if (matchedCollection) {
      if (gender === "women") return `Women's ${matchedCollection.name}`;
      if (gender === "men") return `Men's ${matchedCollection.name}`;
      return matchedCollection.name;
    }
    if (gender === "women") return "All Women's Jewellery";
    if (gender === "men") return "All Men's Jewellery";
    return "All Jewellery & Collections";
  }, [matchedCollection, gender]);

  const pageSubtitle = useMemo(() => {
    if (matchedCollection) return matchedCollection.tagline;
    if (gender === "women") return `${filteredProducts.length} handcrafted pieces for her`;
    if (gender === "men") return `${filteredProducts.length} handcrafted pieces for him`;
    return "Explore fine jewellery curated for every moment.";
  }, [matchedCollection, gender, filteredProducts.length]);

  return (
    <>
      <Section title={pageTitle} subtitle={pageSubtitle}>
        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 mb-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>
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

