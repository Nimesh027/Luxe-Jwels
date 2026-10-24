"use client";

import { memo } from "react";
import type { Product } from "@/types";
import Button from "@/components/ui/Button";
import { ShoppingBagIcon } from "@/components/icons";
import { formatPrice } from "@/lib/utils";

interface StickyAddToCartBarProps {
  product: Product;
  onAddToCart: () => void;
}

/** Mobile/tablet only: keeps price and the primary action within thumb reach. */
function StickyAddToCartBarComponent({ product, onAddToCart }: StickyAddToCartBarProps) {
  const hasDiscount = Boolean(product.compareAtPrice && product.compareAtPrice > product.price);

  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 backdrop-blur-sm pb-[env(safe-area-inset-bottom)]">
      <div className="container flex items-center justify-between gap-4 py-3">
        <div className="min-w-0">
          <p className="truncate text-[13px] text-muted">{product.name}</p>
          <p className="flex items-baseline gap-2">
            <span className="text-[18px] font-semibold text-ink">{formatPrice(product.price)}</span>
            {hasDiscount && (
              <span className="text-[13px] text-subtle line-through">{formatPrice(product.compareAtPrice!)}</span>
            )}
          </p>
        </div>
        <Button onClick={onAddToCart} leftIcon={<ShoppingBagIcon size={17} />} className="shrink-0">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default memo(StickyAddToCartBarComponent);
