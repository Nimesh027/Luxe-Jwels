"use client";

import type { Product } from "@/types";
import ProductCard from "@/components/common/ProductCard";
import SectionTitle from "@/components/common/SectionTitle";
import Section from "../common/Section";

interface RelatedProductsSectionProps {
  relatedProducts: Product[];
}

export default function RelatedProductsSection({ relatedProducts }: RelatedProductsSectionProps) {
  if (relatedProducts.length === 0) return null;

  return (
    <Section className="bg-white">
      <SectionTitle title="You May Also Like" align="center" className="mb-8" />
      <div className="grid grid-cols-2 gap-3.5 sm:gap-6 lg:grid-cols-4">
        {relatedProducts.map((relProduct) => (
          <ProductCard key={relProduct.id} product={relProduct} />
        ))}
      </div>
    </Section>
  );
}
