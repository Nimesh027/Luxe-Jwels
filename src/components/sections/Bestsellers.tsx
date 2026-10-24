"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import ProductCard from "@/components/common/ProductCard";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import { useAppSelector } from "@/store/hooks";

const TABS = [
  { id: "rings", label: "Rings", category: "rings" },
  { id: "necklaces", label: "Necklaces", category: "necklaces" },
  { id: "earrings", label: "Earrings", category: "earrings" },
  { id: "bracelets", label: "Bracelets", category: "bracelets" },
  { id: "pendants", label: "Pendants", category: "pendants" },
  { id: "mens", label: "Men's Collection", category: "mens-collection" },
];

export default function FeaturedCollections() {
  const [activeTab, setActiveTab] = useState("rings");
  const allProducts = useAppSelector((state) => state.products.items);

  const filteredProducts = useMemo(() => {
    const currentTabObj = TABS.find((t) => t.id === activeTab);
    const categoryKey = currentTabObj?.category || "rings";

    let prods = allProducts.filter((p) => {
      if (categoryKey === "mens-collection") {
        return p.gender === "men" || p.category === "mens-collection";
      }
      return p.category === categoryKey;
    });

    if (prods.length < 5) {
      // Fallback to top products if category has few
      const additional = allProducts.filter((p) => !prods.includes(p));
      prods = [...prods, ...additional];
    }

    return prods.slice(0, 5);
  }, [allProducts, activeTab]);

  return (
    <section className="w-full bg-[#FAF7F2] py-14 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="font-display text-[26px] sm:text-[34px] md:text-[38px] text-[#141414] font-medium tracking-tight">
              Featured Collections
            </h2>
            <p className="font-body text-[13.5px] sm:text-[15px] text-[#78716A] mt-1 font-normal">
              Handpicked iconic designs created for life’s most cherished celebrations
            </p>
          </div>

          <Link
            href="/shop"
            className="group inline-flex items-center gap-1.5 text-[12.5px] sm:text-[13.5px] tracking-wider text-[#B38E5D] hover:text-[#9C7748] font-semibold transition-colors shrink-0"
          >
            <span>View All Products</span>
            <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-[12.5px] sm:text-[13px] font-medium tracking-wide transition-all duration-200 cursor-pointer whitespace-nowrap ${ isActive ? "bg-[#B38E5D] text-white shadow-xs" : "bg-white text-[#5C554E] hover:text-[#141414] border border-[#E5DFD5] hover:border-[#B38E5D]" }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 5-Item Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="h-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
