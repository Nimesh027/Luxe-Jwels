"use client";

import Image from "next/image";
import { useMemo } from "react";
import Section from "@/components/common/Section";
import ProductCard from "@/components/common/ProductCard";
import { useAppSelector } from "@/store/hooks";

export default function CollectionDetailClient({ slug }: { slug: string }) {
  const collection = useAppSelector((state) =>
    state.collections.items.find((item) => item.slug === slug)
  );
  const allProducts = useAppSelector((state) => state.products.items);
  const products = useMemo(() => {
    const matchingCategory = allProducts.filter((item) => item.category === slug);
    return matchingCategory.length > 0 ? matchingCategory : allProducts;
  }, [allProducts, slug]);

  if (!collection) return null;

  return (
    <>
      <Section className="py-0" containerClassName="max-w-none px-0">
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
            <h1 className="font-display text-3xl text-cream sm:text-4xl">{collection.name}</h1>
            <p className="text-sm text-cream/85">{collection.tagline}</p>
          </div>
        </div>
      </Section>

      <Section title="Shop The Collection">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>
    </>
  );
}
