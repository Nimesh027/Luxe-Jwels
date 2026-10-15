"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SearchIcon, CloseIcon, ArrowRightIcon } from "@/components/icons";
import { useAppSelector } from "@/store/hooks";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { usePresence } from "@/hooks/usePresence";

const ROTATING_PLACEHOLDERS = [
  "gold necklace",
  "diamond jewellery",
  "gold rings",
  "bridal necklaces",
  "solitaire earrings",
  "gold bangles",
  "men's chains",
  "gift collections",
];

interface SearchBarProps {
  className?: string;
  autoFocus?: boolean;
  /** "dropdown" floats suggestions under the field; "panel" is the full-screen mobile search */
  variant?: "dropdown" | "panel";
  onCloseMobile?: () => void;
  onOpenChange?: (open: boolean) => void;
}

export default function SearchBar({
  className,
  autoFocus = false,
  variant = "dropdown",
  onCloseMobile,
  onOpenChange,
}: SearchBarProps) {
  const isPanel = variant === "panel";
  const router = useRouter();
  const products = useAppSelector((state) => state.products.items);
  const categories = useAppSelector((state) => state.categories.items);

  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const suggestions = usePresence(isOpen, 150);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const updateIsOpen = (open: boolean) => {
    setIsOpen(open);
    onOpenChange?.(open);
  };

  // Rotating placeholder effect
  useEffect(() => {
    if (query) return;
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setPlaceholderIndex((prev) => (prev + 1) % ROTATING_PLACEHOLDERS.length);
        setIsFading(false);
      }, 250);
    }, 3200);

    return () => clearInterval(interval);
  }, [query]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        updateIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    updateIsOpen(false);
    onCloseMobile?.();
    router.push(`/collections?search=${encodeURIComponent(query.trim())}`);
  };

  const filteredProducts = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description?.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const filteredCategories = query.trim()
    ? categories.filter((c) =>
        c.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div ref={containerRef} className={cn("relative", isPanel && "flex h-full flex-col", className)}>
      {/* Search field row (panel adds a back button and its own top bar) */}
      <div
        className={cn(
          isPanel &&
            "flex shrink-0 items-center gap-1 border-b border-border bg-white px-gutter py-2.5 shadow-xs"
        )}
      >
      {isPanel && (
        <button
          type="button"
          onClick={onCloseMobile}
          aria-label="Close search"
          className="-ml-3 flex size-12 shrink-0 items-center justify-center rounded-full text-ink hover:bg-brown-soft hover:text-brown transition-colors cursor-pointer"
        >
          <ArrowRightIcon className="w-5 h-5 rotate-180" />
        </button>
      )}
      {/* Pill Search Input Form */}
      <form
        onSubmit={handleSearchSubmit}
        className={cn(
          "relative flex items-center w-full h-11 px-4 sm:px-5 rounded-full border border-border bg-white transition-all duration-200 shadow-xs",
          isPanel && "flex-1 min-w-0 bg-offwhite",
          "focus-within:border-brown/50 focus-within:bg-white focus-within:ring-2 focus-within:ring-brown/10"
        )}
      >
        {/* Maroon Search Magnifying Glass Icon */}
        <span className="text-brown mr-3 shrink-0 flex items-center select-none">
          <SearchIcon size={16} />
        </span>

        {/* Dynamic Placeholder overlay if query is empty */}
        {!query && (
          <div className="absolute left-12 right-4 pointer-events-none flex items-center overflow-hidden whitespace-nowrap text-body select-none">
            <span className="text-muted/60 font-normal">Search for&nbsp;</span>
            <span
              className={cn(
                "text-muted/80 font-normal transition-opacity duration-200",
                isFading ? "opacity-0" : "opacity-100"
              )}
            >
              {ROTATING_PLACEHOLDERS[placeholderIndex]}
            </span>
          </div>
        )}

        {/* Actual Input */}
        <input
          ref={inputRef}
          name="q"
          type="text"
          value={query}
          autoFocus={autoFocus}
          onChange={(e) => {
            setQuery(e.target.value);
            updateIsOpen(true);
          }}
          onFocus={() => updateIsOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              if (isPanel) return onCloseMobile?.();
              updateIsOpen(false);
              inputRef.current?.blur();
            }
          }}
          aria-label="Search jewellery"
          className="w-full h-full bg-transparent text-body text-ink placeholder-transparent focus:outline-none z-10 pr-2"
        />

        {/* Clear Button (when text is entered) */}
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="text-muted hover:text-ink text-caption p-1 z-10 cursor-pointer shrink-0"
            aria-label="Clear search"
          >
            <CloseIcon size={14} />
          </button>
        )}
      </form>
      </div>

      {/* Suggestions: floating card under the field, or the scrolling body of the mobile panel */}
      {(suggestions.mounted || isPanel) && (
        <div
          className={cn(
            isPanel
              ? "flex-1 overflow-y-auto overscroll-contain scrollbar-none px-gutter pt-5 pb-10"
              : "absolute inset-x-0 top-full mt-2 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[min(36rem,calc(100vw-2*var(--space-gutter)))] bg-white ring-1 ring-border shadow-2xl rounded-2xl lg:rounded-3xl p-4 sm:p-5 z-50 origin-top max-h-[min(75svh,640px)] overflow-y-auto overscroll-contain scrollbar-none",
            !isPanel &&
              (isOpen
                ? "animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-200"
                : "animate-out fade-out zoom-out-95 duration-150")
          )}
        >
          {query.trim() ? (
            /* Filtered Search Results View when user types */
            <div>
              {/* Filtered Categories */}
              {filteredCategories.length > 0 && (
                <div className="mb-4 pb-3 border-b border-border/60">
                  <span className="block mb-3 text-micro font-semibold tracking-widest uppercase text-gold-dark">
                    Categories
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {filteredCategories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/category/${cat.slug}`}
                        onClick={() => {
                          updateIsOpen(false);
                          onCloseMobile?.();
                        }}
                        className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-border bg-offwhite px-4 text-caption font-medium text-ink transition-colors hover:border-brown/50 hover:bg-brown-soft hover:text-brown"
                      >
                        <span className="text-gold">✦</span>
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Filtered Products List */}
              <div>
                <span className="block mb-3 text-micro font-semibold tracking-widest uppercase text-gold-dark">
                  Matching Products ({filteredProducts.length})
                </span>

                {filteredProducts.length > 0 ? (
                  <div className="space-y-2.5">
                    {filteredProducts.slice(0, 5).map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.slug}`}
                        onClick={() => {
                          updateIsOpen(false);
                          onCloseMobile?.();
                        }}
                        className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-offwhite transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-offwhite shrink-0 border border-border/60">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-caption font-medium text-ink group-hover:text-brown truncate transition-colors">
                            {product.name}
                          </h5>
                          <span className="text-caption font-semibold text-brown mt-0.5 block">
                            ₹{product.price.toLocaleString("en-IN")}
                          </span>
                        </div>
                        <ArrowRightIcon className="w-4 h-4 text-muted/50 group-hover:text-brown group-hover:translate-x-1 transition-all shrink-0" />
                      </Link>
                    ))}

                    <div className="pt-3 text-center border-t border-border/60">
                      <Button
                        type="button"
                        onClick={handleSearchSubmit}
                        variant="text"
                        colorTheme="brown"
                        size="xs"
                        className="mx-auto"
                      >
                        <span>View all results for &quot;{query}&quot;</span>
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="py-6 text-center text-caption text-muted">
                    No matching jewellery found for &quot;{query}&quot;.
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* DEFAULT SEARCH VIEW (MATCHING REFERENCE IMAGE) */
            <div className="space-y-5 sm:space-y-6">
              {/* SECTION 1: Popular Searches with Trending Arrow Chips */}
              <div>
                <span className="flex items-center gap-2 mb-3 text-micro font-semibold tracking-widest uppercase text-gold-dark">
                  <span className="h-px w-4 bg-gold" />
                  Popular Searches
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Gemstone", query: "gemstone" },
                    { label: "Auspicious Jewellery", query: "auspicious" },
                    { label: "Special Coins", query: "gold coins" },
                    { label: "Pendants Under 30k", query: "pendants" },
                  ].map((chip) => (
                    <button
                      key={chip.label}
                      type="button"
                      onClick={() => {
                        setQuery(chip.label);
                        inputRef.current?.focus();
                      }}
                      className="group inline-flex min-h-10 pointer-coarse:min-h-11 items-center gap-2 rounded-full border border-border bg-offwhite px-4 text-caption font-medium text-ink transition-colors duration-150 cursor-pointer hover:border-brown/50 hover:bg-brown-soft hover:text-brown"
                    >
                      {/* Upward trending arrow icon */}
                      <svg
                        aria-hidden="true"
                        className="w-3.5 h-3.5 shrink-0 text-gold-dark group-hover:text-brown transition-colors"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        <polyline points="17 6 23 6 23 12" />
                      </svg>
                      <span>{chip.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* SECTION 2: Trending Products (3-Column Image Cards) */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="flex items-center gap-2 text-micro font-semibold tracking-widest uppercase text-gold-dark">
                    <span className="h-px w-4 bg-gold" />
                    Trending Now
                  </span>
                  <Link
                    href="/shop"
                    onClick={() => {
                      updateIsOpen(false);
                      onCloseMobile?.();
                    }}
                    className="inline-flex min-h-10 items-center gap-1 -my-2 text-caption font-medium text-brown hover:text-brown-dark hover:underline underline-offset-4"
                  >
                    View all
                    <ArrowRightIcon className="w-3 h-3" />
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                  {[
                    {
                      title: "Regal Diamond Encrusted Square..",
                      image: "/images/product/Regal_Diamond.png",
                      href: "/products/diamond-studs",
                    },
                    {
                      title: "Modish Links Diamond Ring",
                      image: "/images/product/Diamond_Ring.png",
                      href: "/products/diamond-ring",
                    },
                    {
                      title: "Teardrop Shaped Yellow Gold And.",
                      image: "/images/product/Diamond_Pendant.png",
                      href: "/products/gold-chain",
                    },
                  ].map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => {
                        updateIsOpen(false);
                        onCloseMobile?.();
                      }}
                      className="group block rounded-xl"
                    >
                      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-offwhite ring-1 ring-border transition-shadow duration-300 group-hover:shadow-md group-hover:ring-gold/60">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100px, 160px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <p className="font-body text-micro sm:text-caption font-medium text-ink group-hover:text-brown mt-2 line-clamp-2 leading-snug transition-colors">
                        {item.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* SECTION 3: Bottom Pink/Blush Store Banner */}
              <div className="flex items-center gap-3 sm:gap-4 rounded-2xl bg-brown-soft border border-brown/15 p-3.5 sm:p-4">
                <span className="flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-full bg-white text-brown ring-1 ring-gold/40 shadow-xs">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
                    <circle cx="12" cy="9.5" r="2.5" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="font-display text-small sm:text-body font-medium text-ink leading-snug">
                    Loved it online? <span className="text-brown">Find it at a store near you.</span>
                  </p>
                  <p className="text-micro text-muted mt-0.5">
                    Tap &quot;Request Store Availability&quot; on any product.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
