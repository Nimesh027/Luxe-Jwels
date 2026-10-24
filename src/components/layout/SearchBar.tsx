"use client";

import { useState, useEffect, useRef, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SearchIcon, CloseIcon, ArrowRightIcon } from "@/components/icons";
import { useAppSelector } from "@/store/hooks";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { JewelryIcon } from "./JewelryIcon";
import {
  searchPlaceholdersData as ROTATING_PLACEHOLDERS,
  popularSearchesData,
  searchTrendingProductsData,
} from "@/data";

interface SearchBarProps {
  className?: string;
  autoFocus?: boolean;
  onClose?: () => void;
  onCloseMobile?: () => void;
  onOpenChange?: (open: boolean) => void;
}

const QUICK_CATEGORIES = [
  { name: "Rings", href: "/category/rings" },
  { name: "Necklaces", href: "/category/necklaces" },
  { name: "Earrings", href: "/category/earrings" },
  { name: "Bracelets", href: "/category/bracelets" },
  { name: "Pendants", href: "/category/pendants" },
  { name: "Men's Collection", href: "/category/mens-collection" },
  { name: "Diamond Suites", href: "/collections/diamond-collection" },
];

function SearchBarComponent({
  className,
  autoFocus = true,
  onClose,
  onCloseMobile,
  onOpenChange,
}: SearchBarProps) {
  const router = useRouter();
  const products = useAppSelector((state) => state.products.items);
  const categories = useAppSelector((state) => state.categories.items);

  const [query, setQuery] = useState("");

  // Dynamic Typewriter Animation State
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    onClose?.();
    onCloseMobile?.();
    onOpenChange?.(false);
  };

  // Keyboard shortcut (ESC) & Body Scroll Lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Real Typewriter Effect (letter-by-letter typing, pause, backspacing, rotating)
  useEffect(() => {
    if (query) return;

    const currentPhrase = ROTATING_PLACEHOLDERS[phraseIndex] || "";
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing forward
      if (typedText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setTypedText(currentPhrase.slice(0, typedText.length + 1));
        }, 55); // natural human typing cadence
      } else {
        // Pause at the end of the phrase
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2200); // 2.2s read time
      }
    } else {
      // Deleting backward
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(currentPhrase.slice(0, typedText.length - 1));
        }, 25); // quick smooth backspace
      } else {
        // Switch to next suggestion phrase
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % ROTATING_PLACEHOLDERS.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, phraseIndex, query]);

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;
    handleClose();
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
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search Luxe Jewels Catalog"
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-start p-3 sm:p-6 md:p-10 overflow-y-auto scrollbar-none bg-black/60 backdrop-blur-md animate-in fade-in duration-200",
        className
      )}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div
        ref={containerRef}
        className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-border overflow-hidden my-auto sm:my-6 animate-in zoom-in-95 slide-in-from-top-4 duration-200"
      >
        {/* 1. TOP UTILITY HEADER: Atelier Brand + ESC badge + Close Button */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 bg-cream border-b border-border">
          <div className="flex items-center gap-2">
            <span className="text-gold text-xs">✦</span>
            <span className="text-[11px] tracking-[0.2em] font-medium text-ink">
              Luxe Atelier Catalog Search
            </span>
          </div>

          <div className="flex items-center gap-3">
            <kbd className="hidden sm:inline-block text-[10.5px] tracking-wider text-muted bg-white border border-border px-2 py-0.5 rounded shadow-2xs">
              ESC to close
            </kbd>
            <Button
              variant="unstyled"
              onClick={handleClose}
              className="p-1.5 rounded-full text-muted hover:text-ink hover:bg-white transition-colors cursor-pointer"
              aria-label="Close search"
            >
              <CloseIcon size={18} />
            </Button>
          </div>
        </div>

        {/* 2. PROMINENT SEARCH INPUT FORM */}
        <div className="p-4 sm:p-7 border-b border-border bg-gradient-to-b from-cream to-white">
          <form
            onSubmit={handleSearchSubmit}
            className="group relative flex items-center w-full h-14 sm:h-16 px-3.5 sm:px-5 rounded-2xl bg-white border-2 border-border hover:border-border focus-within:!border-gold focus-within:ring-4 focus-within:ring-gold/15 focus-within:shadow-[0_10px_35px_-8px_rgba(179,142,93,0.22)] transition-all duration-300 shadow-xs"
          >
            {/* Luxury Gold Search Icon Badge */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cream border border-border group-focus-within:border-gold/50 group-focus-within:bg-gold-soft flex items-center justify-center text-gold mr-3 sm:mr-3.5 shrink-0 shadow-2xs transition-colors duration-200">
              <SearchIcon size={19} className="group-focus-within:scale-110 transition-transform duration-200" />
            </div>

            {/* Dynamic Typewriter Placeholder */}
            {!query && (
              <div className="absolute left-16 sm:left-19 pointer-events-none flex items-center text-[15px] sm:text-[17px] text-muted select-none truncate pr-28 sm:pr-32">
                <span className="font-light text-muted">Search for&nbsp;</span>
                <span className="text-ink font-semibold tracking-tight">
                  {typedText}
                </span>
                {/* Blinking Luxury Gold Cursor */}
                <span className="inline-block w-[2px] h-4 sm:h-5 bg-brand ml-0.5 rounded-full animate-pulse" />
              </div>
            )}

            {/* Main Text Input */}
            <input
              ref={inputRef}
              type="text"
              value={query}
              autoFocus={autoFocus}
              onChange={(e) => setQuery(e.target.value)}
              placeholder=""
              className="w-full h-full bg-transparent text-[15px] sm:text-[17px] text-ink placeholder-transparent focus:outline-none z-10 pr-3 font-medium"
            />

            {/* Clear Input Button */}
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  inputRef.current?.focus();
                }}
                className="text-muted hover:text-ink p-1.5 rounded-full hover:bg-cream mr-2 transition-colors cursor-pointer shrink-0 z-10"
                aria-label="Clear search input"
              >
                <CloseIcon size={16} />
              </button>
            )}

            {/* Action Submit Button */}
            <button
              type="submit"
              className="shrink-0 z-10 inline-flex items-center gap-1.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-gold to-gold-dark hover:from-gold hover:to-gold-dark text-white text-[12.5px] sm:text-[13.5px] font-semibold tracking-wider transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.97] cursor-pointer"
            >
              <span>Search</span>
              {query && (
                <span className="hidden sm:inline-block text-[10px] bg-white/20 px-1.5 py-0.5 rounded text-white/90 font-mono">
                  ↵
                </span>
              )}
            </button>
          </form>
        </div>

        {/* 3. MODAL BODY: DISCOVERY vs ACTIVE RESULTS */}
        <div className="p-4 sm:p-6 md:p-7 max-h-[72vh] sm:max-h-[78vh] overflow-y-auto scrollbar-none bg-white">
          {query.trim() ? (
            /* ACTIVE RESULTS STATE */
            <div className="space-y-6">
              {/* Filtered Categories */}
              {filteredCategories.length > 0 && (
                <div>
                  <span className="text-[12px] font-semibold text-muted tracking-wider block mb-2.5">
                    Matching Categories
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {filteredCategories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/category/${cat.slug}`}
                        onClick={handleClose}
                        className="text-[13px] px-3.5 py-1.5 bg-cream hover:bg-cream hover:text-gold border border-border hover:border-gold/40 rounded-full transition-colors font-medium text-ink flex items-center gap-1.5 shadow-2xs"
                      >
                        <span className="text-gold">✦</span>
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Filtered Products */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[12px] font-semibold text-muted tracking-wider">
                    Matching Pieces ({filteredProducts.length})
                  </span>
                  {filteredProducts.length > 0 && (
                    <button
                      type="button"
                      onClick={() => handleSearchSubmit()}
                      className="text-[12px] font-semibold text-gold hover:text-gold-dark flex items-center gap-1 cursor-pointer"
                    >
                      <span>View All in Catalog</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                    {filteredProducts.slice(0, 6).map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.slug}`}
                        onClick={handleClose}
                        className="group flex items-center gap-3.5 p-2.5 rounded-xl border border-border hover:border-gold/50 hover:bg-cream transition-all duration-150"
                      >
                        <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-cream shrink-0 border border-border">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="56px"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[13px] font-medium text-ink group-hover:text-gold truncate transition-colors">
                            {product.name}
                          </p>
                          <span className="text-[11px] text-muted block truncate">
                            {product.category}
                          </span>
                          <span className="text-[12.5px] font-semibold text-gold mt-0.5 block">
                            ₹{product.price.toLocaleString("en-IN")}
                          </span>
                        </div>
                        <ArrowRightIcon className="w-4 h-4 text-muted/60 group-hover:text-gold group-hover:translate-x-1 transition-all shrink-0" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center">
                    <div className="w-12 h-12 rounded-full bg-cream border border-border text-gold flex items-center justify-center mx-auto mb-3">
                      <SearchIcon size={22} />
                    </div>
                    <p className="text-[15px] font-medium text-ink">
                      No matching jewellery found for &quot;{query}&quot;
                    </p>
                    <p className="text-[13px] text-muted mt-1 max-w-md mx-auto">
                      Try searching by category (Rings, Necklaces), precious metal (18K, 22K), or diamond solitaire style.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                      {["Rings", "Diamond Studs", "18K Gold", "Bridal Suites"].map((sug) => (
                        <button
                          key={sug}
                          type="button"
                          onClick={() => {
                            setQuery(sug);
                            inputRef.current?.focus();
                          }}
                          className="text-[12px] px-3 py-1 bg-cream border border-border hover:border-gold rounded-full text-ink transition-colors cursor-pointer"
                        >
                          {sug}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* DEFAULT / DISCOVERY STATE */
            <div className="space-y-5 sm:space-y-6">
              {/* SECTION 1: Explore Categories with Bespoke Jewelry Icons */}
              <div>
                <span className="text-[11.5px] font-semibold text-muted tracking-wider block mb-3">
                  Explore by Category
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5">
                  {QUICK_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      onClick={handleClose}
                      className="group flex flex-col items-center justify-center p-3 rounded-xl border border-border bg-cream hover:bg-white hover:border-gold/60 hover:shadow-sm transition-all duration-150 text-center"
                    >
                      <div className="transition-transform duration-200 group-hover:scale-110 mb-1.5 text-gold">
                        <JewelryIcon name={cat.name} className="w-6 h-6 text-gold" />
                      </div>
                      <span className="text-[12px] font-medium text-ink group-hover:text-gold transition-colors">
                        {cat.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* SECTION 2: Popular Trending Searches */}
              <div>
                <span className="text-[11.5px] font-semibold text-muted tracking-wider block mb-2.5">
                  Trending Searches
                </span>
                <div className="flex flex-wrap gap-2">
                  {popularSearchesData.map((chip) => (
                    <button
                      key={chip.label}
                      type="button"
                      onClick={() => {
                        setQuery(chip.label);
                        inputRef.current?.focus();
                      }}
                      className="px-3.5 py-1.5 rounded-full border border-border bg-cream hover:border-gold hover:text-gold hover:bg-white text-ink text-[12.5px] font-normal transition-all duration-150 inline-flex items-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <svg
                        className="w-3.5 h-3.5 text-gold"
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

              {/* SECTION 3: Curated Trending Pieces */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11.5px] font-semibold text-muted tracking-wider">
                    Curated Trending Masterpieces
                  </span>
                  <Link
                    href="/shop"
                    onClick={handleClose}
                    className="text-[12px] font-semibold text-gold hover:text-gold-dark flex items-center gap-1"
                  >
                    <span>View All</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                  {searchTrendingProductsData.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={handleClose}
                      className="group block p-2.5 rounded-xl border border-border hover:border-gold/60 hover:shadow-md transition-all duration-200 bg-white"
                    >
                      <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-cream border border-border mb-2">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 150px, 200px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <span className="text-[10px] tracking-wider text-gold font-semibold block">
                        {item.metal}
                      </span>
                      <p className="font-display text-[13px] font-medium text-ink group-hover:text-gold mt-0.5 line-clamp-1 leading-snug transition-colors">
                        {item.title}
                      </p>
                      <p className="text-[12.5px] font-semibold text-ink mt-1">
                        ₹{item.price.toLocaleString("en-IN")}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* SECTION 4: Atelier Store & Concierge Assistance Strip */}
              <div className="p-4 sm:p-5 rounded-2xl bg-cream border border-border flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-white border border-border text-gold flex items-center justify-center shrink-0 shadow-2xs">
                    ✦
                  </div>
                  <div>
                    <p className="text-[13.5px] font-semibold text-ink leading-tight">
                      Looking for Bespoke Designs or Store Viewing?
                    </p>
                    <p className="text-[12px] text-muted mt-0.5">
                      Connect with our Master Gemmologist for certified consultation and personal appointments.
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  onClick={handleClose}
                  className="shrink-0 px-5 py-2 rounded-full bg-brand hover:bg-brand-dark text-white text-[12.5px] font-medium tracking-wide shadow-2xs transition-colors cursor-pointer"
                >
                  Book Atelier Visit
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(SearchBarComponent);
