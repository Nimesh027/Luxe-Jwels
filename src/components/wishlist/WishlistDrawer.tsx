"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useWishlist } from "@/hooks/useWishlist";
import { useCart } from "@/hooks/useCart";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setWishlistDrawerOpen, setCartDrawerOpen } from "@/store/slices/uiSlice";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Drawer from "@/components/ui/Drawer";
import {
  HeartIcon,
  TrashIcon,
  CheckIcon,
  ChevronRightIcon,
  ShoppingBagIcon,
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

  const handleAddAllToCart = () => {
    items.forEach((item) => add(item, 1));
    closeDrawer();
    dispatch(setCartDrawerOpen(true));
  };

  const handleViewWishlist = () => {
    closeDrawer();
    router.push("/wishlist");
  };

  const titleNode = (
    <div className="flex items-center gap-2">
      <span className="font-display text-body font-semibold text-ink">
        Your Wishlist
      </span>
      <span className="flex h-5.5 min-w-5.5 items-center justify-center rounded-full bg-wine text-white text-caption font-semibold px-1.5">
        {items.length}
      </span>
    </div>
  );

  const footerNode =
    items.length > 0 ? (
      <div className="w-full space-y-3">
        {/* Wishlist summary count */}
        <div className="flex items-baseline justify-between text-muted">
          <span className="text-[11px] tracking-wider font-semibold">
            Saved Items
          </span>
          <span className="font-display text-small font-bold text-ink">
            {items.length} {items.length === 1 ? "Piece" : "Pieces"}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 pt-1">
          <Button
            colorTheme="wine"
            rounded="full"
            size="sm"
            fullWidth
            onClick={handleAddAllToCart}
            className="h-10 text-caption font-semibold tracking-wider shadow-md hover:shadow-lg cursor-pointer"
            leftIcon={<ShoppingBagIcon size={14} />}
          >
            Move All to Cart
          </Button>

          <Button
            variant="border"
            colorTheme="dark"
            rounded="full"
            size="sm"
            fullWidth
            onClick={handleViewWishlist}
            className="h-9 text-caption font-medium tracking-wider hover:!bg-cream-dark/80 !border-border-strong cursor-pointer"
            rightIcon={<ChevronRightIcon size={14} strokeWidth={2.5} />}
          >
            View Full Wishlist
          </Button>
        </div>
      </div>
    ) : null;

  return (
    <Drawer
      isOpen={isOpen}
      onClose={closeDrawer}
      title={titleNode}
      ariaLabel="Wishlist Drawer"
      headerClassName="bg-cream"
      footer={footerNode}
      footerClassName="bg-cream border-t border-border/80 p-4 sm:p-5"
    >
      {items.length === 0 ? (
        /* Empty Wishlist State */
        <div className="flex flex-1 min-h-[350px] flex-col items-center justify-center p-6 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-soft text-wine mb-5 shadow-xs">
            <HeartIcon size={36} filled className="text-wine" />
          </div>

          <h3 className="font-display text-h4 font-medium text-ink mb-2">
            Your wishlist is empty
          </h3>
          <p className="text-body text-muted-foreground font-light max-w-xs leading-relaxed mb-6">
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
            className="text-caption font-semibold tracking-wider !text-cream hover:!bg-wine shadow-md hover:shadow-lg cursor-pointer"
          >
            Continue Shopping
          </Button>
        </div>
      ) : (
        /* Populated Wishlist Items List */
        <div className="p-4 sm:p-6 divide-y divide-border">
          {items.map((product) => {
            const isAdded = addedIds[product.id];

            return (
              <div
                key={product.id}
                className="py-4 first:pt-0 last:pb-0 flex gap-3.5 sm:gap-4 items-start"
              >
                {/* Product Thumbnail */}
                <div className="relative h-20 w-20 sm:h-22 sm:w-22 shrink-0 overflow-hidden rounded-xl border border-border/80 bg-cream">
                  <Link href={`/products/${product.slug}`} onClick={closeDrawer}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 80px, 88px"
                      className="object-cover object-center"
                    />
                  </Link>
                </div>

                {/* Details & Actions */}
                <div className="flex flex-1 flex-col justify-between min-w-0 self-stretch">
                  <div>
                    <Link
                      href={`/products/${product.slug}`}
                      onClick={closeDrawer}
                      className="font-display text-small font-normal text-ink hover:text-wine transition-colors line-clamp-1 block truncate"
                    >
                      {product.name}
                    </Link>

                    {/* Specs */}
                    <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-muted-foreground font-light truncate">
                      <span>18K Solid Gold</span>
                      <span>•</span>
                      <span className="capitalize">
                        {product.category?.replace(/-/g, " ") || "Jewellery"}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="mt-1 flex items-baseline gap-2 flex-wrap">
                      <span className="text-small font-semibold text-ink">
                        {formatPrice(product.price)}
                      </span>
                      {product.compareAtPrice && product.compareAtPrice > product.price && (
                        <span className="text-[11px] text-muted-foreground line-through">
                          {formatPrice(product.compareAtPrice)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Row: Add To Cart & Remove */}
                  <div className="mt-2.5 flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
                    <Button
                      size="xs"
                      rounded="full"
                      colorTheme={isAdded ? undefined : "dark"}
                      onClick={() => handleAddToCart(product)}
                      className={`tracking-wider cursor-pointer ${ isAdded ? "!bg-emerald-700 !text-white" : "!bg-ink !text-cream hover:!bg-wine" }`}
                      leftIcon={
                        isAdded ? (
                          <CheckIcon size={12} strokeWidth={2.5} />
                        ) : (
                          <ShoppingBagIcon size={12} />
                        )
                      }
                    >
                      {isAdded ? "Added" : "Add To Bag"}
                    </Button>

                    <Button
                      variant="border"
                      size="xs"
                      rounded="full"
                      onClick={() => toggle(product)}
                      className="!px-2.5 !py-1 text-[10px] font-medium !text-muted hover:!text-red-700 hover:!bg-red-50/80 !border-border/80 cursor-pointer"
                      leftIcon={<TrashIcon size={13} />}
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
    </Drawer>
  );
}
