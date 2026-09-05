"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/ui/Button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { removeItem, selectWishlistItems } from "@/store/slices/wishlistSlice";
import { addItem as addToCart } from "@/store/slices/cartSlice";
import { setCartDrawerOpen } from "@/store/slices/uiSlice";
import type { Product } from "@/types";

export default function WishlistClient() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectWishlistItems);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({ product, quantity: 1 }));
    dispatch(setCartDrawerOpen(true));
  };

  const handleRemove = (productId: string) => {
    dispatch(removeItem(productId));
  };

  // Empty Wishlist State
  if (items.length === 0) {
    return (
      <Section className="py-16 sm:py-24">
        <div className="mx-auto flex max-w-md flex-col items-center justify-center text-center px-4">
          {/* Heart Halo Icon Circle */}
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#FAF0F2] text-[#80222F] mb-6 shadow-2xs">
            <svg className="h-10 w-10 fill-[#80222F]" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          {/* Heading & Subtitle */}
          <h1 className="font-display text-h2 font-semibold text-ink tracking-tight mb-3">
            Your wishlist is empty
          </h1>
          <p className="text-body text-muted font-normal leading-relaxed mb-8 max-w-sm">
            Explore our fine jewellery creations and save your favorite heirloom pieces.
          </p>

          {/* Continue Shopping Black Pill CTA Button */}
          <Button
            href="/collections"
            colorTheme="dark"
            rounded="full"
            size="md"
            className="px-8 font-bold uppercase tracking-widest shadow-md hover:shadow-lg"
          >
            CONTINUE SHOPPING
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <SectionTitle
        title="My Wishlist"
        description="Your saved pieces, all in one place"
        align="left"
        className="mb-8"
      />

      {/* HORIZONTAL WISHLIST PRODUCT CARDS LIST (MATCHING SCREENSHOT) */}
      <div className="bg-surface rounded-2xl border border-border/70 p-6 sm:p-8 shadow-xs divide-y divide-border/50">
        {items.map((product) => (
          <div
            key={product.id}
            className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 transition-all"
          >
            {/* Left: Product Thumbnail & Details */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-neutral-100 flex-shrink-0 border border-border/40 shadow-2xs">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-1">
                <h3 className="font-display font-semibold text-h5 text-ink">
                  {product.name}
                </h3>
                <p className="text-caption text-muted font-medium">
                  18K Solid Gold • {product.category ? product.category.toUpperCase() : "Rings"}
                </p>

                <div className="flex items-center gap-2 pt-0.5 pb-1">
                  <span className="font-semibold text-ink text-body">
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>
                  {product.compareAtPrice && (
                    <span className="text-caption text-muted line-through font-normal">
                      ₹{product.compareAtPrice.toLocaleString("en-IN")}
                    </span>
                  )}
                </div>

                <div>
                  <Button
                    size="xs"
                    colorTheme="dark"
                    rounded="full"
                    onClick={() => handleAddToCart(product)}
                    className="px-5 font-bold uppercase tracking-wider shadow-xs hover:shadow-md"
                  >
                    ADD TO CART
                  </Button>
                </div>
              </div>
            </div>

            {/* Right: Remove Pill Button */}
            <Button
              variant="border"
              size="xs"
              rounded="full"
              onClick={() => handleRemove(product.id)}
              className="text-gray-600 hover:!text-red-700 hover:!bg-red-50/80 !border-gray-300 self-start sm:self-center"
              title="Remove from Wishlist"
              leftIcon={
                <svg className="w-3.5 h-3.5 text-gray-500 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" />
                </svg>
              }
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}
