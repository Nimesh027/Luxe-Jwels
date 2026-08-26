"use client";

import { useState } from "react";
import type { Product } from "@/types";
import ProductCard from "@/components/common/ProductCard";
import SectionTitle from "@/components/common/SectionTitle";
import Tabs, { TabOption } from "@/components/ui/Tabs";
import { formatPrice } from "@/lib/utils";
import Section from "../common/Section";

interface BudgetExploreSectionProps {
  currentProduct: Product;
  allProducts: Product[];
}

type BudgetFilter = "under30" | "30to50" | "50to75" | "above75" | "all";

export default function BudgetExploreSection({
  currentProduct,
  allProducts,
}: BudgetExploreSectionProps) {
  // Determine initial budget filter tier based on current product price
  const getInitialTier = (price: number): BudgetFilter => {
    if (price < 30000) return "under30";
    if (price <= 50000) return "30to50";
    if (price <= 75000) return "50to75";
    return "above75";
  };

  const [activeTier, setActiveTier] = useState<BudgetFilter>(
    getInitialTier(currentProduct.price)
  );

  // Filter products excluding current product
  const availableProducts = allProducts.filter((p) => p.id !== currentProduct.id);

  const getFilteredProducts = () => {
    let filtered: Product[] = [];
    switch (activeTier) {
      case "under30":
        filtered = availableProducts.filter((p) => p.price < 30000);
        break;
      case "30to50":
        filtered = availableProducts.filter((p) => p.price >= 30000 && p.price <= 50000);
        break;
      case "50to75":
        filtered = availableProducts.filter((p) => p.price > 50000 && p.price <= 75000);
        break;
      case "above75":
        filtered = availableProducts.filter((p) => p.price > 75000);
        break;
      case "all":
      default:
        filtered = availableProducts;
        break;
    }

    // Fallback if tier has fewer than 4 items
    if (filtered.length === 0) {
      return availableProducts.slice(0, 4);
    }
    return filtered.slice(0, 4);
  };

  const filteredProducts = getFilteredProducts();

  const budgetTabOptions: TabOption<BudgetFilter>[] = [
    { id: "under30", label: "Under ₹30,000", subtitle: "Everyday Luxury" },
    { id: "30to50", label: "₹30,000 - ₹50,000", subtitle: "Popular Choice" },
    { id: "50to75", label: "₹50,000 - ₹75,000", subtitle: "Signature Fine Jewellery" },
    { id: "above75", label: "Above ₹75,000", subtitle: "Heirloom & Statement" },
    { id: "all", label: "View All", subtitle: "Complete Collection" },
  ];

  return (
    <Section className="bg-white">
      <SectionTitle
        tagline="Curated Pricing Options"
        title="Explore Similar Designs Within Your Budget"
        description={
          <>
            Current item is valued at{" "}
            <strong className="text-wine">{formatPrice(currentProduct.price)}</strong>. Compare
            alternative jewellery designs across your preferred price ranges.
          </>
        }
        align="center"
        className="mb-8"
      />

      {/* Budget Tier Pill Filters (Using central Tabs component with slider variant) */}
      <Tabs
        options={budgetTabOptions}
        activeId={activeTier}
        onChange={setActiveTier}
        variant="slider"
        className="mb-10"
      />

      {/* Product Cards Grid */}
      <div className="grid grid-cols-2 gap-3.5 sm:gap-6 lg:grid-cols-4">
        {filteredProducts.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </Section>
  );
}
