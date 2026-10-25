"use client";

import { useMemo, useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import ShopHero from "@/components/shop/ShopHero";
import ShopFilter, { CATEGORIES, COLLECTIONS, PRICE_RANGES } from "@/components/shop/ShopFilter";
import ProductCard from "@/components/common/ProductCard";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import { useAppSelector } from "@/store/hooks";
import { filterProducts } from "@/lib/productFilter";
import type { Product } from "@/types";
import { sortOptionsData as SORT_OPTIONS } from "@/data";
import Drawer from "@/components/ui/Drawer";

const INITIAL_DISPLAY_COUNT = 15;
const LOAD_MORE_BATCH_COUNT = 15;

// ─── Price Filter Helper ──────────────────────────────────────────────────────

function applyPriceFilter(products: Product[], priceRange: string): Product[] {
  const range = PRICE_RANGES.find((r) => r.value === priceRange);
  if (!range) return products;
  return products.filter((p) => p.price >= range.min && p.price < range.max);
}

// ─── Product Card Skeleton Loader ─────────────────────────────────────────────

function ProductCardSkeleton() {
  return (
    <div aria-hidden="true" className="flex flex-col animate-pulse">
      <div className="aspect-square w-full rounded-[var(--radius-card)] bg-cream-dark" />
      <div className="mt-3 h-4 w-4/5 rounded bg-cream-dark" />
      <div className="mt-2 h-4 w-2/5 rounded bg-cream-dark" />
      <div className="mt-2 h-3 w-1/3 rounded bg-cream-dark" />
    </div>
  );
}

// ─── Main Shop Component ──────────────────────────────────────────────────────

function ShopContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const rawCategories = searchParams.get("category") ?? "";
  const rawCollections = searchParams.get("collection") ?? "";
  const activeCategories = rawCategories ? rawCategories.split(",").filter(Boolean) : [];
  const activeCollections = rawCollections ? rawCollections.split(",").filter(Boolean) : [];
  const activePrice = searchParams.get("price") ?? "";
  const activeSort = searchParams.get("sort") ?? "featured";

  const allProducts = useAppSelector((state) => state.products.items);

  // Filtered & Sorted products
  const products = useMemo(() => {
    let filtered: Product[];

    if (activeCategories.length === 0 && activeCollections.length === 0) {
      filtered = [...allProducts];
    } else {
      filtered = allProducts.filter((product) => {
        const catMatch =
          activeCategories.length === 0 ||
          activeCategories.some((cat) => {
            if (cat === "mens-collection") return product.gender === "men";
            if (cat === "womens-collection") return product.gender === "women";
            return product.category === cat;
          });
        const colMatch =
          activeCollections.length === 0 ||
          activeCollections.some(
            (col) => filterProducts([product], { collection: col }).length > 0
          );
        return catMatch && colMatch;
      });
    }

    if (activePrice) filtered = applyPriceFilter(filtered, activePrice);

    if (activeSort === "price-asc")
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    else if (activeSort === "price-desc")
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    else if (activeSort === "name-asc")
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));

    return filtered;
  }, [allProducts, rawCategories, rawCollections, activePrice, activeSort]);

  // Infinite Scroll State (Default 15 products)
  const [visibleCount, setVisibleCount] = useState(INITIAL_DISPLAY_COUNT);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  // Reset to 15 items whenever filter or sort changes
  useEffect(() => {
    setVisibleCount(INITIAL_DISPLAY_COUNT);
    setIsLoadingMore(false);
  }, [rawCategories, rawCollections, activePrice, activeSort]);

  const visibleProducts = useMemo(() => {
    return products.slice(0, visibleCount);
  }, [products, visibleCount]);

  const hasMore = visibleCount < products.length;

  // Infinite scroll intersection observer
  useEffect(() => {
    if (!hasMore || isLoadingMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && hasMore && !isLoadingMore) {
          setIsLoadingMore(true);
          // Smooth simulated loading delay for luxury feel and skeleton rendering
          setTimeout(() => {
            setVisibleCount((prev) => Math.min(prev + LOAD_MORE_BATCH_COUNT, products.length));
            setIsLoadingMore(false);
          }, 600);
        }
      },
      {
        rootMargin: "250px", // Pre-fetch before user reaches the very bottom
        threshold: 0.1,
      }
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [hasMore, isLoadingMore, products.length]);

  function setParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function toggleMultiParam(key: string, current: string[], value: string) {
    const params = new URLSearchParams(searchParams.toString());
    let next: string[];
    if (current.includes(value)) {
      next = current.filter((v) => v !== value);
    } else {
      next = [...current, value];
    }
    if (next.length > 0) {
      params.set(key, next.join(","));
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function clearAll() {
    router.push(pathname, { scroll: false });
  }

  const activeFilterCount =
    activeCategories.length + activeCollections.length + (activePrice ? 1 : 0);

  const sidebarProps = {
    activeCategories,
    activeCollections,
    activePrice,
    onToggleCategory: (val: string) =>
      toggleMultiParam("category", activeCategories, val),
    onToggleCollection: (val: string) =>
      toggleMultiParam("collection", activeCollections, val),
    onSetPrice: (val: string) => setParam("price", val),
    onClearAll: clearAll,
    activeFilterCount,
  };

  return (
    <div className="bg-cream">
      {/* ── Page Hero ────────────────────────────────────────────── */}
      <ShopHero />

      <div className="py-8 sm:py-10 lg:py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* ── Desktop Sidebar — col-span-3 ─────────────────── */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="lg:sticky lg:top-24">
                <ShopFilter {...sidebarProps} />
              </div>
            </div>

            {/* ── Mobile Filter Drawer ─────────────────────────── */}
            <Drawer
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
              title="Filter Products"
              position="left"
              className="lg:hidden"
            >
              <div className="p-4">
                <ShopFilter {...sidebarProps} />
                <div className="mt-6 pt-4 border-t border-border flex gap-3">
                  <Button
                    onClick={clearAll}
                    variant="border"
                    colorTheme="wine"
                    size="sm"
                    className="flex-1"
                  >
                    Clear All
                  </Button>
                  <Button
                    onClick={() => setSidebarOpen(false)}
                    variant="fill"
                    colorTheme="wine"
                    size="sm"
                    className="flex-1"
                  >
                    View {products.length} Results
                  </Button>
                </div>
              </div>
            </Drawer>

            {/* ── Product Grid — col-span-9 ────────────────────── */}
            <div className="lg:col-span-9">
              {/* ── Toolbar ───────────────────────────────────────── */}
              <div className="mb-5 flex items-center justify-between gap-3 rounded-[var(--radius-card)] border border-border bg-white px-3 py-2.5 sm:px-4">
                <div className="flex items-center gap-3">
                  {/* Mobile filter toggle */}
                  <Button
                    id="shop-filter-toggle"
                    onClick={() => setSidebarOpen(true)}
                    variant="border"
                    colorTheme="wine"
                    size="sm"
                    rounded="md"
                    className="lg:hidden"
                    leftIcon={
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" y1="6" x2="20" y2="6" /><line x1="7" y1="12" x2="17" y2="12" /><line x1="10" y1="18" x2="14" y2="18" />
                      </svg>
                    }
                    rightIcon={
                      activeFilterCount > 0 ? (
                        <span className="bg-brand text-white text-[10.5px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                          {activeFilterCount}
                        </span>
                      ) : undefined
                    }
                  >
                    Filters
                  </Button>

                  <p className="text-[13.5px] sm:text-[14px] text-muted">
                    <span className="font-semibold text-ink">{products.length}</span>{" "}
                    {products.length === 1 ? "design" : "designs"}
                    <span className="hidden sm:inline">
                      {" "}· showing <span className="font-medium text-ink">{visibleProducts.length}</span>
                    </span>
                  </p>
                </div>

                {/* Sort dropdown */}
                <div className="flex items-center gap-2.5">
                  <span className="text-[13.5px] text-muted hidden sm:block whitespace-nowrap">
                    Sort by
                  </span>
                  <Select
                    options={SORT_OPTIONS}
                    value={activeSort}
                    onChange={(val) => setParam("sort", val)}
                    align="right"
                  />
                </div>
              </div>

              {/* Active Filter Chips */}
              {activeFilterCount > 0 && (
                <div className="flex flex-wrap items-center gap-2 mb-6 p-3 bg-surface border border-border rounded-[var(--radius-card)]">
                  <span className="text-caption text-muted font-medium">
                    Active filters:
                  </span>
                  {activeCategories.map((slug) => {
                    const cat = CATEGORIES.find((c) => c.value === slug);
                    return (
                      <Button
                        key={slug}
                        onClick={() => toggleMultiParam("category", activeCategories, slug)}
                        variant="border"
                        colorTheme="wine"
                        size="xs"
                        rounded="full"
                        rightIcon={<span>&times;</span>}
                      >
                        {cat?.label ?? slug}
                      </Button>
                    );
                  })}
                  {activeCollections.map((slug) => {
                    const col = COLLECTIONS.find((c) => c.value === slug);
                    return (
                      <Button
                        key={slug}
                        onClick={() => toggleMultiParam("collection", activeCollections, slug)}
                        variant="border"
                        colorTheme="wine"
                        size="xs"
                        rounded="full"
                        rightIcon={<span>&times;</span>}
                      >
                        {col?.label ?? slug}
                      </Button>
                    );
                  })}
                  {activePrice && (
                    <Button
                      onClick={() => setParam("price", "")}
                      variant="border"
                      colorTheme="wine"
                      size="xs"
                      rounded="full"
                      rightIcon={<span>&times;</span>}
                    >
                      {PRICE_RANGES.find((r) => r.value === activePrice)?.label}
                    </Button>
                  )}
                  <Button
                    onClick={clearAll}
                    variant="text"
                    colorTheme="wine"
                    size="xs"
                    rounded="md"
                  >
                    Clear All
                  </Button>
                </div>
              )}

              {/* Empty state */}
              {products.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-28 text-center gap-5">
                  <div className="w-20 h-20 rounded-full bg-wine/8 border border-wine/15 flex items-center justify-center">
                    <svg className="w-8 h-8 text-wine/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-display text-h4 text-ink mb-1.5">
                      No products found
                    </p>
                    <p className="text-small text-muted">
                      Try adjusting your filters to see more results.
                    </p>
                  </div>
                  <Button
                    onClick={clearAll}
                    variant="border"
                    colorTheme="wine"
                    size="sm"
                    rounded="md"
                  >
                    Clear All Filters
                  </Button>
                </div>
              ) : (
                <>
                  {/* Products Grid */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-3">
                    {visibleProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}

                    {/* Skeleton loaders while loading more on scroll */}
                    {isLoadingMore && (
                      <>
                        <ProductCardSkeleton />
                        <ProductCardSkeleton />
                        <ProductCardSkeleton />
                      </>
                    )}
                  </div>

                  {/* Infinite Scroll Sentinel */}
                  <div
                    ref={loadMoreRef}
                    className={hasMore ? "w-full py-4 flex items-center justify-center" : "h-0 w-full overflow-hidden"}
                  >
                    {isLoadingMore && (
                      <div className="flex items-center gap-2.5 py-2 text-[14px] font-medium text-gold">
                        <span className="w-4 h-4 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
                        <span>Curating more handcrafted designs...</span>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Suspense Wrapper ─────────────────────────────────────────────────────────

function ShopWrapper() {
  const searchParams = useSearchParams();
  return <ShopContent key={searchParams.toString()} />;
}

export default function ShopClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream" />}>
      <ShopWrapper />
    </Suspense>
  );
}
