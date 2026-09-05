"use client";

import type { Product } from "@/types";
import Button from "@/components/ui/Button";
import { ShoppingBagIcon } from "@/components/icons";

interface StickyAddToCartBarProps {
  product: Product;
  onAddToCart: () => void;
}

export default function StickyAddToCartBar({
  product,
  onAddToCart,
}: StickyAddToCartBarProps) {
  // Calculate discount percentage
  const discountPercent = product.compareAtPrice
    ? Math.round(
        ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100
      )
    : 12;

  const comparePriceFormatted = product.compareAtPrice
    ? `₹${product.compareAtPrice.toLocaleString("en-IN")}`
    : "₹48,999";

  const priceFormatted = `₹${product.price.toLocaleString("en-IN")}`;

  return (
    <div className="fixed bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-1.5rem)] sm:w-auto max-w-md sm:max-w-fit bg-white shadow-[0_12px_40px_rgba(0,0,0,0.16)] rounded-full border border-neutral-100 p-2 px-3.5 sm:px-7 flex items-center justify-between gap-2.5 sm:gap-8 animate-in slide-in-from-bottom-5 duration-300">
      
      {/* 1. PRICE & DISCOUNT BADGE */}
      <div className="flex items-center gap-2 shrink-0">
        <div>
          <span className="text-[9px] sm:text-caption text-neutral-400 line-through font-normal block -mb-0.5">
            {comparePriceFormatted}
          </span>
          <div className="flex items-center gap-1.5">
            <span className="font-display font-bold text-small sm:text-h5 text-slate-900 tracking-tight">
              {priceFormatted}
            </span>
            <span className="px-1.5 sm:px-2 py-0.5 bg-red-50 text-red-500 rounded-full text-[9px] sm:text-caption font-semibold flex items-center gap-0.5 border border-red-100/80">
              <span className="text-[8px] sm:text-[9px]">▾</span>
              {discountPercent}%
            </span>
          </div>
        </div>
      </div>

      {/* 2. ADD TO CART BUTTON */}
      <Button
        type="button"
        colorTheme="wine"
        rounded="full"
        size="sm"
        onClick={onAddToCart}
        className="px-4 sm:px-7 font-semibold text-caption sm:text-body uppercase tracking-wider shadow-md hover:shadow-lg shrink-0"
        leftIcon={<ShoppingBagIcon size={16} />}
      >
        Add to Cart
      </Button>

    </div>
  );
}
