"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeartIcon, ShoppingBagIcon } from "@/components/icons";
import Rating from "@/components/ui/Rating";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import { formatPrice, cn } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  showRating?: boolean;
  /** Pass true for cards visible above the fold */
  priority?: boolean;
  sizes?: string;
}

function ProductCardComponent({
  product,
  showRating = true,
  priority = false,
  sizes = "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 220px",
}: ProductCardProps) {
  const { add } = useCart();
  const { toggle, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(product.id);
  const href = `/products/${product.slug}`;

  const discount =
    product.compareAtPrice && product.compareAtPrice > product.price
      ? Math.round((1 - product.price / product.compareAtPrice) * 100)
      : 0;
  const badge = product.isBestseller ? "Bestseller" : product.isMostSold ? "New" : null;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-border bg-white transition-[box-shadow,border-color,translate] duration-300 ease-out hover:-translate-y-0.5 hover:border-border-strong hover:shadow-lift">
      <div className="relative aspect-square overflow-hidden bg-cream-dark">
        <Link href={href} tabIndex={-1} aria-hidden="true" className="block h-full w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </Link>

        {badge && (
          <span
            className={cn(
              "pointer-events-none absolute left-2.5 top-2.5 rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase leading-none tracking-[0.08em]",
              badge === "New" ? "bg-ink text-white" : "bg-white/95 text-gold shadow-xs"
            )}
          >
            {badge}
          </span>
        )}

        <div className="absolute right-2.5 top-2.5 flex flex-col gap-2">
          <button
            type="button"
            aria-label={wishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
            aria-pressed={wishlisted}
            onClick={() => toggle(product)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-ink shadow-xs hover:text-gold transition-colors cursor-pointer"
          >
            <HeartIcon size={17} filled={wishlisted} className={wishlisted ? "text-gold" : undefined} />
          </button>
          <button
            type="button"
            aria-label={`Add ${product.name} to cart`}
            onClick={() => add(product)}
            className="flex lg:hidden h-9 w-9 items-center justify-center rounded-full bg-white/95 text-ink shadow-xs hover:text-gold transition-colors cursor-pointer"
          >
            <ShoppingBagIcon size={17} />
          </button>
        </div>

        <div className="absolute inset-x-2.5 bottom-2.5 hidden lg:block translate-y-2 opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
          <button
            type="button"
            onClick={() => add(product)}
            className="h-10 w-full rounded-[var(--radius-btn)] bg-brand text-[13.5px] font-semibold tracking-wide text-white hover:bg-brand-dark transition-colors cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-3 pb-3.5 pt-3 sm:px-4 sm:pb-4">
        {showRating && (
          <div className="flex items-center gap-1.5">
            <Rating value={4.8} size={12} />
            <span className="text-[12px] text-muted">(124)</span>
          </div>
        )}

        <h3 className="mt-1.5 mb-3 font-body text-[14px] sm:text-[15px] font-medium leading-snug text-ink line-clamp-2 min-h-[2.6em]">
          <Link href={href} className="hover:text-gold transition-colors">
            {product.name}
          </Link>
        </h3>

        <div className="mt-auto flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-border pt-2.5">
          <span className="text-[16px] sm:text-[17px] font-semibold text-ink">{formatPrice(product.price)}</span>
          {discount > 0 && (
            <>
              <span className="text-[12.5px] text-subtle line-through">{formatPrice(product.compareAtPrice!)}</span>
              <span className="rounded-full bg-success/10 px-1.5 py-0.5 text-[11px] font-semibold leading-none text-success">
                {discount}% off
              </span>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

export default memo(ProductCardComponent);
