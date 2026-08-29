"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useWishlist } from "@/hooks/useWishlist";
import { useCart } from "@/hooks/useCart";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setWishlistDrawerOpen } from "@/store/slices/uiSlice";
import { formatPrice } from "@/lib/utils";

export default function WishlistDrawer() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.wishlistDrawerOpen);
  const { items, toggle } = useWishlist();
  const { add } = useCart();
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const closeDrawer = () => dispatch(setWishlistDrawerOpen(false));

  const handleAddToCart = (product: (typeof items)[0]) => {
    add(product, 1);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  const handleViewWishlist = () => {
    closeDrawer();
    router.push("/wishlist");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dimmed Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-ink/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={closeDrawer}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <aside
          className="relative flex w-screen max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ease-out"
          aria-label="Wishlist Drawer"
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-neutral-200/80 px-6 py-4.5 bg-[#fbf9f6]">
            <div className="flex items-center gap-2">
              <h2 className="font-display text-h5 sm:text-h4 font-medium text-ink">
                Your Wishlist
              </h2>
              <span className="flex h-5.5 min-w-5.5 items-center justify-center rounded-full bg-wine text-white text-caption font-semibold px-1.5">
                {items.length}
              </span>
            </div>

            <button
              type="button"
              onClick={closeDrawer}
              aria-label="Close wishlist drawer"
              className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-200/60 hover:text-ink transition-colors cursor-pointer"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Body */}
          {items.length === 0 ? (
            /* Empty Wishlist State */
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f6efe9] text-wine mb-5 shadow-xs">
                <svg className="h-9 w-9 fill-wine text-wine" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>

              <h3 className="font-display text-h4 font-medium text-ink mb-2">
                Your wishlist is empty
              </h3>
              <p className="text-body text-muted font-light max-w-xs leading-relaxed mb-6">
                Explore our fine jewellery creations and save your favorite heirloom pieces.
              </p>

              <button
                type="button"
                onClick={() => {
                  closeDrawer();
                  router.push("/collections");
                }}
                className="inline-flex h-11 items-center justify-center rounded-full bg-ink px-8 text-caption font-semibold uppercase tracking-wider text-cream shadow-md transition-all hover:bg-wine hover:shadow-lg cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            /* Populated Wishlist Items List */
            <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-neutral-100">
              {items.map((product) => {
                const isAdded = addedIds[product.id];

                return (
                  <div key={product.id} className="py-4.5 flex gap-4">
                    {/* Product Thumbnail */}
                    <div className="relative h-22 w-22 shrink-0 overflow-hidden rounded-xl border border-neutral-200/80 bg-neutral-50">
                      <Link href={`/products/${product.slug}`} onClick={closeDrawer}>
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="88px"
                          className="object-cover object-center"
                        />
                      </Link>
                    </div>

                    {/* Details & Actions */}
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <Link
                          href={`/products/${product.slug}`}
                          onClick={closeDrawer}
                          className="font-display text-small font-normal text-ink hover:text-wine transition-colors line-clamp-1 block"
                        >
                          {product.name}
                        </Link>

                        {/* Specs */}
                        <div className="mt-1 flex items-center gap-2 text-[11px] text-muted font-light">
                          <span>18K Solid Gold</span>
                          <span>•</span>
                          <span className="capitalize">{product.category?.replace(/-/g, " ") || "Jewellery"}</span>
                        </div>

                        {/* Price */}
                        <div className="mt-1.5 flex items-baseline gap-2">
                          <span className="text-small font-semibold text-ink">
                            {formatPrice(product.price)}
                          </span>
                          {product.compareAtPrice && product.compareAtPrice > product.price && (
                            <span className="text-caption text-muted line-through">
                              {formatPrice(product.compareAtPrice)}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Row: Add To Cart & Remove */}
                      <div className="mt-3 flex items-center justify-between gap-2">
                        <button
                          type="button"
                          onClick={() => handleAddToCart(product)}
                          className={`h-8 rounded-full px-3.5 text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1.5 shadow-2xs ${
                            isAdded
                              ? "bg-emerald-700 text-white"
                              : "bg-ink text-cream hover:bg-wine"
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              <span>Added</span>
                            </>
                          ) : (
                            <span>Add To Cart</span>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => toggle(product)}
                          className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium text-neutral-500 hover:text-red-700 hover:bg-red-50/80 border border-neutral-200/80 transition-all duration-200 cursor-pointer"
                        >
                          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Drawer Footer with VIEW WISHLIST CTA */}
          {items.length > 0 && (
            <div className="border-t border-neutral-200 bg-[#fbf9f6] p-6">
              <button
                type="button"
                onClick={handleViewWishlist}
                className="w-full h-11.5 rounded-full bg-wine text-white text-body font-semibold uppercase tracking-wider shadow-md hover:bg-wine-dark hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Wishlist</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
