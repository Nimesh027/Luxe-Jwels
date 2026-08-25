"use client";

import Image from "next/image";
import Link from "next/link";
import { HeartFilled, HeartOutlined, EyeOutlined } from "@ant-design/icons";
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
    <Card variant="plain" className="group flex h-full flex-col bg-transparent">
      {/* Product Image Box - Fully filled, with hover actions & button */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-cream-dark border border-border/40 transition-all duration-300 group-hover:shadow-md">
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
              <span className="inline-block px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-wine text-white text-[9px] sm:text-[10px] font-semibold tracking-wide shadow-xs uppercase">
                Most Viewed
              </span>
            )}
            {product.isMostSold && (
              <span className="inline-block px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-gold text-ink text-[9px] sm:text-[10px] font-semibold tracking-wide shadow-xs uppercase">
                Most Sell
              </span>
            )}
            {product.badge && !product.isMostViewed && !product.isMostSold && (
              <span className="inline-block px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-ink text-cream text-[9px] sm:text-[10px] font-semibold tracking-wide shadow-xs uppercase">
                {product.badge}
              </span>
            )}
          </div>
        )}

        {/* Right-Side Action Icons - Visible on hover */}
        <div className="absolute top-3 right-3 z-10 flex flex-col gap-1.5 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          {/* Wishlist */}
          <button
            type="button"
            aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
            title="Wishlist"
            onClick={(e) => {
              e.preventDefault();
              toggle(product);
            }}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface/90 text-ink backdrop-blur-xs shadow-sm transition-all duration-200 hover:bg-wine hover:text-white active:scale-95 cursor-pointer"
          >
            {wishlisted ? (
              <HeartFilled className="text-gold text-xs" />
            ) : (
              <HeartOutlined className="text-xs" />
            )}
          </button>

          {/* Quick View */}
          <Link
            href={`/products/${product.slug}`}
            aria-label="Quick View"
            title="Quick View"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface/90 text-ink backdrop-blur-xs shadow-sm transition-all duration-200 hover:bg-wine hover:text-white active:scale-95 cursor-pointer"
          >
            <EyeOutlined className="text-xs" />
          </Link>
        </div>

        {/* Add To Cart Button - Visible on hover using reusable Button component */}
        <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          <Button
            variant="fill"
            colorTheme="wine"
            size="sm"
            rounded="md"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              add(product);
            }}
            className="text-xs font-medium tracking-widest uppercase shadow-md hover:shadow-lg"
          >
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Typography Section Below Image */}
      <div className="flex flex-col items-center text-center pt-3 pb-1 px-1">
        {/* Collection / Category Label */}
        <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.22em] uppercase text-gold/90 mb-1">
          {categoryLabel}
        </span>

        {/* Product Title */}
        <Link
          href={`/products/${product.slug}`}
          className="font-display text-sm sm:text-base text-ink font-normal tracking-wide hover:text-wine transition-colors line-clamp-1 mb-1"
        >
          {product.name}
        </Link>

        {/* Price Display */}
        <div className="flex items-baseline justify-center gap-1.5 text-xs sm:text-sm">
          <span className="text-[11px] text-muted/75 font-normal">From</span>
          <span className="font-display text-ink font-medium">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-[11px] text-muted line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
