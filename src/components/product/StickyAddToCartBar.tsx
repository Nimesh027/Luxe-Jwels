"use client";

import type { Product } from "@/types";

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
      <button
        type="button"
        onClick={onAddToCart}
        className="px-4 sm:px-7 py-2 sm:py-2.5 bg-[#80222F] hover:bg-[#681B26] text-white font-semibold rounded-full text-body flex items-center gap-1.5 sm:gap-2 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95 whitespace-nowrap shrink-0"
      >
        {/* Shopping Bag Icon */}
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        <span>Add to Cart</span>
      </button>

    </div>
  );
}
