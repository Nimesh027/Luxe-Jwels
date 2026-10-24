"use client";

import { useState, useMemo } from "react";
import ProductCard from "@/components/common/ProductCard";
import SectionTitle from "@/components/common/SectionTitle";
import { useAppSelector } from "@/store/hooks";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "rings", label: "Rings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "earrings", label: "Earrings" },
  { id: "bracelets", label: "Bracelets" },
  { id: "pendants", label: "Pendants" },
  { id: "mens-collection", label: "Men's Collection" },
];

const ITEMS = 6;

export default function FeaturedCollections() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const allProducts = useAppSelector((state) => state.products.items);

  const products = useMemo(() => {
    const matches = allProducts.filter((p) =>
      activeTab === "mens-collection"
        ? p.gender === "men" || p.category === "mens-collection"
        : p.category === activeTab
    );
    // Top up thin categories so the row always reads as a full grid
    const fill = allProducts.filter((p) => !matches.includes(p));
    return [...matches, ...fill].slice(0, ITEMS);
  }, [allProducts, activeTab]);

  return (
    <section className="section-spacing-sm bg-white border-y border-border" aria-labelledby="featured-heading">
      <div className="container">
        <SectionTitle
          id="featured-heading"
          align="left"
          title="Featured Collections"
          description="Handpicked designs for life's most cherished celebrations"
          viewAllHref="/shop"
          className="mb-5 sm:mb-6"
        />

        <div
          role="tablist"
          aria-label="Featured categories"
          className="-mx-4 px-4 sm:mx-0 sm:px-0 mb-6 sm:mb-8 flex gap-6 sm:gap-8 overflow-x-auto border-b border-border scrollbar-none"
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="featured-panel"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative -mb-px shrink-0 whitespace-nowrap border-b-2 pb-3 text-[14.5px] font-medium transition-colors cursor-pointer",
                  isActive ? "border-gold text-ink" : "border-transparent text-muted hover:text-ink"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <ul id="featured-panel" role="tabpanel" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8 sm:gap-x-5">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
