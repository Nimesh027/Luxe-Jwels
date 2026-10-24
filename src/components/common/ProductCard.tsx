"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeartIcon, StarIcon } from "@/components/icons";
import Button from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  showRating?: boolean;
}

function ProductCardComponent({ product, showRating = true }: ProductCardProps) {
  const { add } = useCart();
  const { toggle, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(product.id);

  return (
    <div className="group relative flex flex-col h-full bg-white rounded-xl sm:rounded-2xl border border-[#EAE4DC] hover:border-[#D0C3B2] p-3 sm:p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Product Image Area */}
      <div className="relative aspect-square w-full rounded-lg sm:rounded-xl overflow-hidden bg-[#FAF7F2] mb-3">
        <Link href={`/products/${product.slug}`} className="block w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
          />
        </Link>

        {/* Top Badges: Bestseller / New */}
        <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1 pointer-events-none">
          {product.isBestseller && (
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide bg-[#B38E5D] text-white shadow-xs">
              Bestseller
            </span>
          )}
          {product.isMostSold && !product.isBestseller && (
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide bg-[#2C2C2C] text-white shadow-xs">
              New
            </span>
          )}
        </div>

        {/* Wishlist Button (Top-Right) */}
        <button
          type="button"
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          onClick={(e) => {
            e.preventDefault();
            toggle(product);
          }}
          className="absolute top-2.5 right-2.5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#141414] hover:text-[#B38E5D] hover:bg-white shadow-xs transition-transform active:scale-95 cursor-pointer"
        >
          <HeartIcon
            size={16}
            filled={wishlisted}
            className={wishlisted ? "text-[#B38E5D]" : "currentColor"}
          />
        </button>

        {/* Quick Add to Cart Button (Slide up on hover) */}
        <div className="absolute inset-x-2.5 bottom-2.5 z-10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
          <Button
            variant="fill"
            colorTheme="gold"
            size="sm"
            rounded="md"
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              add(product);
            }}
            className="text-[12px] font-semibold tracking-wider py-2 bg-[#B38E5D] hover:bg-[#9C7748] text-white shadow-md"
          >
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Information */}
      <div className="flex flex-col flex-1 justify-between text-left">
        <div>
          {/* Product Title */}
          <Link
            href={`/products/${product.slug}`}
            title={product.name}
            className="font-display text-[16px] sm:text-[17px] text-[#141414] font-medium leading-snug hover:text-[#B38E5D] transition-colors line-clamp-1 mb-1.5 block"
          >
            {product.name}
          </Link>

          {/* Star Rating with crisp SVG icons */}
          {showRating && (
            <div className="flex items-center gap-1.5 mb-2.5">
              <div className="flex items-center gap-0.5 text-[#C5A059]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    size={13}
                    filled
                    className="text-[#C5A059] fill-[#C5A059]"
                  />
                ))}
              </div>
              <span className="text-[12px] text-[#6B655F] font-semibold tracking-tight">
                4.8 <span className="text-[#9C948B] font-normal">(124)</span>
              </span>
            </div>
          )}
        </div>

        {/* Price Row with comfortable bottom spacing */}
        <div className="flex items-baseline gap-2 mt-auto pt-1 pb-0.5">
          <span className="font-display text-[17px] sm:text-[18.5px] font-semibold text-[#141414] tracking-tight">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-[12.5px] sm:text-[13px] text-[#9A9187] line-through font-light">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(ProductCardComponent);
