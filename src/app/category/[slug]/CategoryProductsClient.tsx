"use client";

import { useMemo } from "react";
import Section from "@/components/common/Section";
import ProductCard from "@/components/common/ProductCard";
import { useAppSelector } from "@/store/hooks";

export default function CategoryProductsClient({ slug }: { slug: string }) {
  const category = useAppSelector((state) =>
    state.categories.items.find((item) => item.slug === slug)
  );
  const allProducts = useAppSelector((state) => state.products.items);
  const products = useMemo(
    () => allProducts.filter((item) => item.category === slug),
    [allProducts, slug]
  );

  if (!category) return null;

  return (
    <Section title={category.name} subtitle={`${products.length} products`}>
      {products.length === 0 ? (
        <p className="text-sm text-muted">No products found in this category yet.</p>
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
