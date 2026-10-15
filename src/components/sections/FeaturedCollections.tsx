"use client";

import { useId, useMemo, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/common/Section";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import Rating from "@/components/ui/Rating";
import { useAppSelector } from "@/store/hooks";
import { cn, formatPrice } from "@/lib/utils";
import type { Product } from "@/types";

const MAX_ITEMS = 6;

// Tab order matches the storefront navigation; "Women's Collection" is covered by the other tabs
const TAB_ORDER = ["rings", "necklaces", "earrings", "bracelets", "pendants", "mens-collection"];

function productsForTab(items: Product[], slug: string) {
  if (slug === "mens-collection") {
    return items.filter((item) => item.gender === "men" || item.category === "mens-collection");
  }
  return items.filter((item) => item.category === slug);
}

export default function FeaturedCollections() {
  const categories = useAppSelector((state) => state.categories.items);
  const products = useAppSelector((state) => state.products.items);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Only show tabs that have products to display
  const tabs = useMemo(
    () =>
      TAB_ORDER.map((slug) => categories.find((c) => c.slug === slug))
        .filter((c): c is NonNullable<typeof c> => Boolean(c))
        .map((category) => ({ category, items: productsForTab(products, category.slug).slice(0, MAX_ITEMS) }))
        .filter((tab) => tab.items.length > 0),
    [categories, products]
  );

  const [activeSlug, setActiveSlug] = useState(TAB_ORDER[0]);
  const activeIndex = Math.max(0, tabs.findIndex((t) => t.category.slug === activeSlug));
  const activeTab = tabs[activeIndex];

  if (!activeTab) return null;

  // Roving focus between tabs with arrow / Home / End keys
  const handleTabKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const last = tabs.length - 1;
    const next =
      e.key === "ArrowRight" ? (activeIndex === last ? 0 : activeIndex + 1)
      : e.key === "ArrowLeft" ? (activeIndex === 0 ? last : activeIndex - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setActiveSlug(tabs[next].category.slug);
    tabRefs.current[next]?.focus();
  };

  return (
    <Section>
      {/* Title row — stays on one line at every width */}
      <div className="mb-4 sm:mb-6 flex items-end justify-between gap-4">
        <h2 className="font-display text-h2 text-ink font-normal tracking-tight">
          Featured Collections
        </h2>
        <Link
          href={`/category/${activeTab.category.slug}`}
          className="group -my-3 inline-flex min-h-12 shrink-0 items-center gap-1.5 py-3 text-caption sm:text-small font-medium text-brown hover:text-brown-dark hover:underline underline-offset-4 transition-colors"
        >
          <span>View All</span>
          <ArrowRightIcon className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* Category Tabs */}
      <div
        role="tablist"
        aria-label="Featured jewellery categories"
        className="flex gap-5 sm:gap-7 lg:gap-8 overflow-x-auto scroll-smooth border-b border-border [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {tabs.map(({ category }, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={category.slug}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              id={`${baseId}-tab-${category.slug}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`${baseId}-panel`}
              tabIndex={isActive ? 0 : -1}
              onClick={(e) => {
                setActiveSlug(category.slug);
                e.currentTarget.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
              }}
              onKeyDown={handleTabKeyDown}
              className={cn(
                "relative shrink-0 min-h-11 sm:min-h-12 whitespace-nowrap text-caption sm:text-small transition-colors duration-200 cursor-pointer",
                "after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:rounded-full after:bg-brown after:origin-center after:transition-transform after:duration-300",
                isActive
                  ? "font-semibold text-ink after:scale-x-100"
                  : "font-medium text-muted hover:text-ink after:scale-x-0"
              )}
            >
              {category.name}
            </button>
          );
        })}
      </div>

      {/* Product Panel — keyed by tab so each switch fades in */}
      <div
        key={activeTab.category.slug}
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${activeTab.category.slug}`}
        className="mt-5 sm:mt-8 grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-8 lg:grid-cols-6 lg:gap-x-5 animate-in fade-in slide-in-from-bottom-2 duration-500"
      >
        {activeTab.items.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group min-w-0"
          >
            <div className="relative aspect-square overflow-hidden rounded-xl bg-offwhite-dark ring-1 ring-border/60 transition-shadow duration-300 group-hover:shadow-md">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <h3 className="mt-2.5 sm:mt-3 text-caption sm:text-small font-medium text-ink line-clamp-1 transition-colors group-hover:text-brown">
              {product.name}
            </h3>
            <p className="mt-0.5 text-caption sm:text-small font-semibold text-brown">{formatPrice(product.price)}</p>
            <Rating value={5} size={12} className="mt-1" />
          </Link>
        ))}
      </div>
    </Section>
  );
}
