"use client";

import Image from "next/image";
import Link from "next/link";
import { HeartIcon, EyeIcon, ShoppingBagIcon } from "@/components/icons";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { add } = useCart();
  const { toggle, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(product.id);

  const categoryLabel = product.category
    ? product.category.replace(/-/g, " ")
    : "Fine Jewellery";

  return (
    <Card
      variant="plain"
      className="group flex h-full flex-col overflow-hidden ring-1 ring-border/70 shadow-2xs transition-shadow duration-300 hover:shadow-lg"
    >
      {/* Product Image Box - Fully filled, with hover actions & button */}
      <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-offwhite-dark">
        {/* Full Box Image */}
        <Link
          href={`/products/${product.slug}`}
          className="relative block h-full w-full"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Top-Left Badges (e.g. "Most Viewed", "Most Sell") */}
        {(product.isMostViewed || product.isMostSold || product.badge) && (
          <div className="absolute top-3 left-3 z-10 flex flex-col items-start gap-1 pointer-events-none">
            {product.isMostViewed && (
              <span className="inline-block px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-brown text-white text-micro font-semibold tracking-wide shadow-xs">
                Most Viewed
              </span>
            )}
            {product.isMostSold && (
              <span className="inline-block px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-brown text-white text-micro font-semibold tracking-wide shadow-xs">
                Most Sell
              </span>
            )}
            {product.badge && !product.isMostViewed && !product.isMostSold && (
              <span className="inline-block px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-brown text-white text-micro font-semibold tracking-wide shadow-xs">
                {product.badge}
              </span>
            )}
          </div>
        )}

        {/* Right-Side Action Icons - Visible on hover */}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 flex flex-col gap-1.5 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-focus-within:opacity-100 group-focus-within:translate-x-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto pointer-coarse:opacity-100 pointer-coarse:translate-x-0 pointer-coarse:pointer-events-auto">
          {/* Wishlist */}
          <button
            type="button"
            aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
            title="Wishlist"
            onClick={(e) => {
              e.preventDefault();
              toggle(product);
            }}
            className="relative flex size-9 items-center justify-center rounded-lg bg-white/90 text-ink backdrop-blur-xs shadow-sm transition-all duration-200 hover:bg-brown hover:text-white active:scale-95 cursor-pointer pointer-coarse:rounded-full pointer-coarse:after:absolute pointer-coarse:after:-inset-1.5"
          >
            <HeartIcon
              size={15}
              filled={wishlisted}
              className={wishlisted ? "text-gold" : "currentColor"}
            />
          </button>

          {/* Quick View */}
          <Link
            href={`/products/${product.slug}`}
            aria-label="Quick View"
            title="Quick View"
            className="flex size-9 items-center justify-center rounded-lg bg-white/90 text-ink backdrop-blur-xs shadow-sm transition-all duration-200 hover:bg-brown hover:text-white active:scale-95 cursor-pointer pointer-coarse:hidden"
          >
            <EyeIcon size={15} />
          </Link>
        </div>

        {/* Touch screens: compact bag button in the bottom-right corner so the photo stays visible */}
        <button
          type="button"
          aria-label={`Add ${product.name} to cart`}
          onClick={(e) => {
            e.preventDefault();
            add(product);
          }}
          className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 z-10 hidden size-10 items-center justify-center rounded-full bg-brown text-white shadow-md ring-2 ring-white/70 transition-transform duration-150 active:scale-90 after:absolute after:-inset-1 pointer-coarse:flex"
        >
          <ShoppingBagIcon size={18} />
        </button>

        {/* Add To Cart Button - slides up on hover for mouse users */}
        <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto pointer-coarse:hidden">
          <Button
            variant="fill"
            colorTheme="brown"
            size="sm"
            rounded="md"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              add(product);
            }}
            className="shadow-md hover:shadow-lg"
          >
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Card body: fixed rhythm so every card in a row lines up (title always reserves 2 lines) */}
      <div className="flex flex-1 flex-col items-center text-center px-2.5 pt-3 pb-4 sm:px-3.5">
        {/* Collection / Category Label */}
        <span className="text-micro font-semibold uppercase tracking-widest text-gold-dark">
          {categoryLabel}
        </span>

        {/* Product Title */}
        <Link
          href={`/products/${product.slug}`}
          title={product.name}
          className="mt-1 font-display text-small sm:text-body leading-snug text-ink font-normal hover:text-brown transition-colors line-clamp-2 min-h-[2.75em]"
        >
          {product.name}
        </Link>

        {/* Price Display */}
        <div className="mt-1.5 flex flex-wrap items-baseline justify-center gap-x-1.5">
          <span className="text-micro text-muted font-normal">From</span>
          <span className="font-display text-body font-semibold text-ink">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-micro text-muted line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
