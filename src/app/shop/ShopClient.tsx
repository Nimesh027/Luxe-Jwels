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
import { usePresence } from "@/hooks/usePresence";

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name A–Z", value: "name-asc" },
];

const PRODUCTS_PER_PAGE = 18;

// ─── Price Filter Helper ──────────────────────────────────────────────────────

function applyPriceFilter(products: Product[], priceRange: string): Product[] {
  const range = PRICE_RANGES.find((r) => r.value === priceRange);
  if (!range) return products;
  return products.filter((p) => p.price >= range.min && p.price < range.max);
}

// ─── Pagination Component ────────────────────────────────────────────────────

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  // Build page number list with ellipsis
  function getPages(): (number | "...")[] {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages: (number | "...")[] = [1];
    if (currentPage > 3) pages.push("...");
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);
    return pages;
  }

  const pages = getPages();

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-1.5 mt-10 pt-8 border-t border-border/60">
      {/* Prev */}
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        variant="border"
        colorTheme="brown"
        size="sm"
        rounded="md"
        aria-label="Previous page"
        leftIcon={
          <svg aria-hidden="true" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        }
      >
        Prev
      </Button>

      {/* Page numbers */}
      <div className="flex items-center gap-1">
        {pages.map((page, i) =>
          page === "..." ? (
            <span key={`ellipsis-${i}`} aria-hidden="true" className="w-9 h-9 flex items-center justify-center text-caption text-muted select-none">
              &hellip;
            </span>
          ) : (
            <button
              key={page}
              type="button"
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
              onClick={() => onPageChange(page as number)}
              className={`size-11 pointer-coarse:size-12 flex items-center justify-center text-caption font-medium rounded-lg border transition-all duration-150 cursor-pointer ${currentPage === page
                ? "bg-brown border-brown text-white shadow-sm shadow-brown/20"
                : "border-border text-ink hover:border-brown/50 hover:text-brown hover:bg-brown/5"
                }`}
            >
              {page}
            </button>
          )
        )}
      </div>

      {/* Next */}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        variant="border"
        colorTheme="brown"
        size="sm"
        rounded="md"
        aria-label="Next page"
        rightIcon={
          <svg aria-hidden="true" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        }
      >
        Next
      </Button>
    </nav>
  );
}

// ─── Main Shop Component ──────────────────────────────────────────────────────

function ShopContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebar = usePresence(sidebarOpen, 300);

  const rawCategories = searchParams.get("category") ?? "";
  const rawCollections = searchParams.get("collection") ?? "";
  const activeCategories = rawCategories ? rawCategories.split(",").filter(Boolean) : [];
  const activeCollections = rawCollections ? rawCollections.split(",").filter(Boolean) : [];
  const activePrice = searchParams.get("price") ?? "";
  const activeSort = searchParams.get("sort") ?? "featured";
  const currentPage = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));

  const allProducts = useAppSelector((state) => state.products.items);

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

  // Pagination derived values
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = products.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  // When a filter changes, reset to page 1
  function setParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    // Reset page whenever a filter/sort changes (but not when page itself changes)
    if (key !== "page") params.delete("page");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function goToPage(page: number) {
    const params = new URLSearchParams(searchParams.toString());
    if (page <= 1) params.delete("page");
    else params.set("page", String(page));
    router.push(`${pathname}?${params.toString()}`, { scroll: true });
  }

  function toggleMultiParam(key: string, current: string[], value: string) {
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setParam(key, next.join(","));
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
    <div className="bg-offwhite">
      {/* ── Page Hero ────────────────────────────────────────────── */}
      <ShopHero />

      <div className="py-section">
        <div className="container">
          {/* ── Toolbar ───────────────────────────────────────────── */}
          <div className="flex items-center justify-between gap-4 mb-7 pb-5 border-b border-border/70">
            {/* Mobile filter toggle */}
            <Button
              id="shop-filter-toggle"
              onClick={() => setSidebarOpen(true)}
              variant="border"
              colorTheme="brown"
              size="sm"
              rounded="md"
              className="lg:hidden"
              leftIcon={
                <svg aria-hidden="true" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="6" x2="20" y2="6" /><line x1="7" y1="12" x2="17" y2="12" /><line x1="10" y1="18" x2="14" y2="18" />
                </svg>
              }
              rightIcon={
                activeFilterCount > 0 ? (
                  <span className="bg-brown text-white text-micro font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                    {activeFilterCount}
                  </span>
                ) : undefined
              }
            >
              Filters
            </Button>

            {/* Product count — desktop */}
            <p className="hidden lg:block text-caption text-muted">
              Showing{" "}
              <span className="font-semibold text-ink">{products.length}</span>{" "}
              {products.length === 1 ? "product" : "products"}
              {totalPages > 1 && (
                <span className="text-muted/70"> &mdash; page {currentPage} of {totalPages}</span>
              )}
            </p>

            {/* Product count — mobile */}
            <p className="lg:hidden text-caption text-muted">
              <span className="font-semibold text-ink">{products.length}</span> results
            </p>

            {/* Sort dropdown — fully custom */}
            <div className="flex items-center gap-2.5">
              <span className="text-micro text-muted hidden sm:block tracking-wider font-medium whitespace-nowrap">
                Sort
              </span>
              <Select
                options={SORT_OPTIONS}
                value={activeSort}
                onChange={(val) => setParam("sort", val)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack">
            {/* ── Desktop Sidebar — col-span-3 ─────────────────── */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="bg-white border border-border/60 rounded-2xl p-5 shadow-sm">
                <ShopFilter {...sidebarProps} />
              </div>
            </div>

            {/* ── Mobile Sidebar Overlay ─────────────────────────── */}
            {sidebar.mounted && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div
                  className={`absolute inset-0 bg-ink/40 backdrop-blur-sm ${sidebar.open ? "animate-in fade-in" : "animate-out fade-out duration-300"}`}
                  onClick={() => setSidebarOpen(false)}
                />
                <div className={`absolute left-0 top-0 bottom-0 w-[min(300px,85vw)] bg-white shadow-2xl flex flex-col ${sidebar.open ? "animate-in slide-in-from-left duration-500" : "animate-out slide-out-to-left duration-300"}`}>
                  <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                    <div className="flex items-center gap-2">
                      <svg aria-hidden="true" className="w-3.5 h-3.5 text-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" y1="6" x2="20" y2="6" /><line x1="7" y1="12" x2="17" y2="12" /><line x1="10" y1="18" x2="14" y2="18" />
                      </svg>
                      <span className="!text-small font-extrabold tracking-widest text-ink">
                        Filter By
                      </span>
                    </div>
                    <Button
                      onClick={() => setSidebarOpen(false)}
                      variant="ghost"
                      colorTheme="ink"
                      size="sm"
                      rounded="md"
                      aria-label="Close filters"
                      leftIcon={
                        <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      }
                    />
                  </div>
                  <div className="flex-1 overflow-y-auto px-5 py-5">
                    <ShopFilter {...sidebarProps} />
                  </div>
                  <div className="px-5 py-4 border-t border-border">
                    <Button
                      onClick={() => setSidebarOpen(false)}
                      variant="fill"
                      colorTheme="brown"
                      size="md"
                      rounded="lg"
                      fullWidth
                    >
                      View {products.length} {products.length === 1 ? "product" : "products"}
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* ── Product Grid — col-span-9 ──────────────────────── */}
            <div className="lg:col-span-9">
              {/* Active filter pills */}
              {activeFilterCount > 0 && (
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  {activeCategories.map((val) => (
                    <Button
                      key={val}
                      onClick={() => toggleMultiParam("category", activeCategories, val)}
                      aria-label={`Remove ${CATEGORIES.find((c) => c.value === val)?.label} filter`}
                      variant="border"
                      colorTheme="brown"
                      size="xs"
                      rounded="full"
                      rightIcon={
                        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      }
                    >
                      {CATEGORIES.find((c) => c.value === val)?.label}
                    </Button>
                  ))}
                  {activeCollections.map((val) => (
                    <Button
                      key={val}
                      onClick={() => toggleMultiParam("collection", activeCollections, val)}
                      aria-label={`Remove ${COLLECTIONS.find((c) => c.value === val)?.label} filter`}
                      variant="border"
                      colorTheme="brown"
                      size="xs"
                      rounded="full"
                      rightIcon={
                        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      }
                    >
                      {COLLECTIONS.find((c) => c.value === val)?.label}
                    </Button>
                  ))}
                  {activePrice && (
                    <Button
                      onClick={() => setParam("price", "")}
                      aria-label={`Remove ${PRICE_RANGES.find((r) => r.value === activePrice)?.label} filter`}
                      variant="border"
                      colorTheme="brown"
                      size="xs"
                      rounded="full"
                      rightIcon={
                        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      }
                    >
                      {PRICE_RANGES.find((r) => r.value === activePrice)?.label}
                    </Button>
                  )}
                  <Button
                    onClick={clearAll}
                    variant="text"
                    colorTheme="brown"
                    size="xs"
                    rounded="md"
                  >
                    Clear all
                  </Button>
                </div>
              )}

              {/* Empty state */}
              {products.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-28 text-center gap-5">
                  <div className="w-20 h-20 rounded-full bg-brown/8 border border-brown/15 flex items-center justify-center">
                    <svg aria-hidden="true" className="w-8 h-8 text-brown/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
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
                    colorTheme="brown"
                    size="sm"
                    rounded="md"
                  >
                    Clear all filters
                  </Button>
                </div>
              ) : (
                <div className="grid-products gap-grid">
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}

              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={goToPage}
              />
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
    <Suspense fallback={<div className="min-h-screen bg-offwhite" />}>
      <ShopWrapper />
    </Suspense>
  );
}
