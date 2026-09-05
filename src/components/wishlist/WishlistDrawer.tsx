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
import Button from "@/components/ui/Button";
import {
  CloseIcon,
  HeartIcon,
  TrashIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@/components/icons";

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
              <h2 className="font-display !text-body font-semibold text-ink">
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
              <CloseIcon size={18} />
            </button>
          </div>

          {/* Drawer Body */}
          {items.length === 0 ? (
            /* Empty Wishlist State */
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f6efe9] text-wine mb-5 shadow-xs">
                <HeartIcon size={36} filled className="text-wine" />
              </div>

              <h3 className="font-display text-h4 font-medium text-ink mb-2">
                Your wishlist is empty
              </h3>
              <p className="text-body text-muted font-light max-w-xs leading-relaxed mb-6">
                Explore our fine jewellery creations and save your favorite heirloom pieces.
              </p>

              <Button
                colorTheme="dark"
                rounded="full"
                size="sm"
                onClick={() => {
                  closeDrawer();
                  router.push("/collections");
                }}
                className="text-caption font-semibold uppercase tracking-wider !text-cream hover:!bg-wine shadow-md hover:shadow-lg"
              >
                Continue Shopping
              </Button>
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
                        <Button
                          size="xs"
                          rounded="full"
                          colorTheme={isAdded ? undefined : "dark"}
                          onClick={() => handleAddToCart(product)}
                          className={`tracking-wider ${isAdded
                            ? "!bg-emerald-700 !text-white"
                            : "!bg-ink !text-cream hover:!bg-wine"
                            }`}
                          leftIcon={
                            isAdded ? (
                              <CheckIcon size={12} strokeWidth={2.5} />
                            ) : undefined
                          }
                        >
                          {isAdded ? "Added" : "Add To Cart"}
                        </Button>

                        <Button
                          variant="border"
                          size="xs"
                          rounded="full"
                          onClick={() => toggle(product)}
                          className="text-neutral-500 hover:text-red-700 hover:bg-red-50/80 !border-neutral-200/80"
                          leftIcon={<TrashIcon size={14} />}
                        >
                          Remove
                        </Button>
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
              <Button
                colorTheme="wine"
                rounded="full"
                fullWidth
                onClick={handleViewWishlist}
                className="h-10 text-caption font-semibold uppercase tracking-wider shadow-md hover:shadow-lg"
                rightIcon={<ChevronRightIcon size={14} strokeWidth={2.5} />}
              >
                View Wishlist
              </Button>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
