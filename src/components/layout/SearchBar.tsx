"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CloseOutlined } from "@ant-design/icons";
import { useAppSelector } from "@/store/hooks";
import { cn } from "@/lib/utils";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

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
  onCloseMobile?: () => void;
  onOpenChange?: (open: boolean) => void;
}

export default function SearchBar({
  className,
  autoFocus = false,
  onCloseMobile,
  onOpenChange,
}: SearchBarProps) {
  const router = useRouter();
  const products = useAppSelector((state) => state.products.items);
  const categories = useAppSelector((state) => state.categories.items);

  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
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
    <div ref={containerRef} className={cn("relative", className)}>
      {/* Pill Search Input Form */}
      <form
        onSubmit={handleSearchSubmit}
        className={cn(
          "relative flex items-center w-full h-10 sm:h-11 px-4 sm:px-5 rounded-full border border-border bg-surface transition-all duration-200 shadow-xs",
          "focus-within:border-wine/50 focus-within:ring-2 focus-within:ring-wine/10"
        )}
      >
        {/* Maroon Search Magnifying Glass Icon */}
        <span className="text-wine mr-3 shrink-0 flex items-center select-none">
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>

        {/* Dynamic Placeholder overlay if query is empty */}
        {!query && (
          <div className="absolute left-12 pointer-events-none flex items-center text-xs sm:text-sm select-none">
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
          type="text"
          value={query}
          autoFocus={autoFocus}
          onChange={(e) => {
            setQuery(e.target.value);
            updateIsOpen(true);
          }}
          onFocus={() => updateIsOpen(true)}
          className="w-full h-full bg-transparent text-xs sm:text-sm text-ink placeholder-transparent focus:outline-none z-10 pr-2"
        />

        {/* Clear Button (when text is entered) */}
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="text-muted hover:text-ink text-xs p-1 z-10 cursor-pointer shrink-0"
            aria-label="Clear search"
          >
            <CloseOutlined className="text-[10px]" />
          </button>
        )}
      </form>

      {/* Live Search Popup Dropdown - Centered beneath search bar */}
      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-full min-w-[300px] sm:min-w-[480px] md:min-w-[540px] lg:min-w-[580px] max-w-xl bg-surface border border-border/80 shadow-2xl rounded-2xl lg:rounded-3xl p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-150 max-h-[80vh] overflow-y-auto">
          {query.trim() ? (
            /* Filtered Search Results View when user types */
            <div>
              {/* Filtered Categories */}
              {filteredCategories.length > 0 && (
                <div className="mb-4 pb-3 border-b border-border/60">
                  <span className="text-xs font-semibold text-muted tracking-wide block mb-2">
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
                        className="text-xs px-3.5 py-1.5 bg-cream hover:bg-wine-soft hover:text-wine rounded-full transition-colors font-medium text-ink flex items-center gap-1.5"
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
                <span className="text-xs font-semibold text-muted tracking-wide block mb-3">
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
                        className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-cream transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-cream shrink-0 border border-border/60">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-xs font-medium text-ink group-hover:text-wine truncate transition-colors">
                            {product.name}
                          </h5>
                          <span className="text-xs font-semibold text-wine mt-0.5 block">
                            ₹{product.price.toLocaleString("en-IN")}
                          </span>
                        </div>
                        <ArrowRightIcon className="w-4 h-4 text-muted/50 group-hover:text-wine group-hover:translate-x-1 transition-all shrink-0" />
                      </Link>
                    ))}

                    <div className="pt-3 text-center border-t border-border/60">
                      <button
                        type="button"
                        onClick={handleSearchSubmit}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-wine hover:text-wine-dark cursor-pointer mx-auto"
                      >
                        <span>View all results for &quot;{query}&quot;</span>
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="py-6 text-center text-xs text-muted">
                    No matching jewellery found for &quot;{query}&quot;.
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* DEFAULT SEARCH VIEW (MATCHING REFERENCE IMAGE) */
            <div className="space-y-5">
              {/* SECTION 1: Popular Searches with Trending Arrow Chips */}
              <div>
                <span className="text-xs text-muted/80 font-normal block mb-2.5">
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
                      className="px-3.5 py-1.5 rounded-xl border border-border/80 bg-surface hover:border-wine/60 hover:text-wine text-ink text-xs font-normal transition-all duration-150 inline-flex items-center gap-1.5 cursor-pointer shadow-2xs hover:bg-wine-soft/30"
                    >
                      {/* Upward trending arrow icon */}
                      <svg
                        className="w-3.5 h-3.5 text-muted/70 group-hover:text-wine"
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
                <span className="text-xs text-muted/80 font-normal block mb-2.5">
                  Trending Products
                </span>
                <div className="grid grid-cols-3 gap-3">
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
                      className="group block"
                    >
                      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-cream border border-border/70 shadow-xs">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100px, 160px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <p className="font-body text-[11px] sm:text-xs text-ink/90 group-hover:text-wine mt-1.5 line-clamp-2 leading-tight transition-colors">
                        {item.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* SECTION 3: Bottom Pink/Blush Store Banner */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#faedf0] border border-[#f5dede] text-center shadow-xs">
                <p className="font-display text-xs sm:text-sm text-ink leading-snug">
                  <span className="text-ink/80 font-normal">Loved It Online? </span>
                  <span className="text-wine font-semibold">Find It At A Luxe Store Near You!</span>
                </p>
                <p className="text-[10px] sm:text-[11px] text-muted/90 mt-0.5">
                  Click &quot;Request Store Availability&quot; on your favourite product.
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
