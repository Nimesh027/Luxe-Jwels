"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCartDrawerOpen } from "@/store/slices/uiSlice";
import { formatPrice } from "@/lib/utils";
import QuantitySelector from "@/components/ui/QuantitySelector";
import Button from "@/components/ui/Button";
import Drawer from "@/components/ui/Drawer";
import {
  ShoppingBagIcon,
  TrashIcon,
  ChevronRightIcon,
} from "@/components/icons";

export default function CartDrawer() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.cartDrawerOpen);
  const { items, count, subtotal, remove, setQuantity } = useCart();
  const [instructionsOpen, setInstructionsOpen] = useState(false);
  const [orderNote, setOrderNote] = useState("");

  const closeDrawer = () => dispatch(setCartDrawerOpen(false));

  const handleViewCart = () => {
    closeDrawer();
    router.push("/cart");
  };

  const handleCheckout = () => {
    closeDrawer();
    router.push("/checkout");
  };

  const freeShippingThreshold = 10000;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  const titleNode = (
    <div className="flex items-center gap-2">
      <span className="font-display text-body font-semibold text-ink">Your Cart</span>
      <span className="flex h-5.5 min-w-5.5 items-center justify-center rounded-full bg-wine text-white text-caption font-semibold px-1.5">
        {count}
      </span>
    </div>
  );

  const footerNode = items.length > 0 ? (
    <div className="w-full space-y-3.5">
      {/* Order Special Instructions Accordion */}
      <div className="border-b border-neutral-200/70 pb-3">
        <Button
          variant="unstyled"
          onClick={() => setInstructionsOpen(!instructionsOpen)}
          className="flex w-full items-center justify-between text-left text-caption font-medium text-neutral-700 hover:text-ink cursor-pointer"
        >
          <span className="inline-flex items-center gap-1.5">
            <span className="text-gold text-caption">✍</span>
            <span>Order Special Instructions / Gift Note</span>
          </span>
          <span className="text-small font-semibold">{instructionsOpen ? "−" : "+"}</span>
        </Button>

        {instructionsOpen && (
          <div className="mt-2.5">
            <textarea
              rows={2}
              value={orderNote}
              onChange={(e) => setOrderNote(e.target.value)}
              placeholder="Add custom engraving note or special delivery instructions..."
              className="w-full rounded-lg border border-neutral-300 bg-white p-2.5 text-caption text-ink placeholder:text-neutral-400 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>
        )}
      </div>

      {/* Subtotal & Estimated Total */}
      <div className="flex items-baseline justify-between">
        <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-600">
          Estimated Total
        </span>
        <span className="font-display text-[16px] sm:text-[18px] font-bold text-ink">
          {formatPrice(subtotal)}
        </span>
      </div>

      {/* Tax & Shipping Note */}
      <p className="text-[10.5px] text-muted-foreground font-light leading-relaxed">
        Taxes, discounts, and insured shipping calculated at checkout.
      </p>

      {/* Action Buttons: Check Out & View Cart */}
      <div className="flex flex-col gap-2 pt-1">
        <Button
          colorTheme="wine"
          rounded="full"
          size="sm"
          fullWidth
          onClick={handleCheckout}
          className="h-10 text-caption font-semibold uppercase tracking-wider shadow-md hover:shadow-lg cursor-pointer"
          rightIcon={<ChevronRightIcon size={14} strokeWidth={2.5} />}
        >
          Check Out
        </Button>

        <Button
          variant="border"
          colorTheme="dark"
          rounded="full"
          size="sm"
          fullWidth
          onClick={handleViewCart}
          className="h-9 text-caption font-medium uppercase tracking-wider hover:!bg-neutral-100/80 !border-neutral-300 cursor-pointer"
        >
          View Cart
        </Button>
      </div>
    </div>
  ) : null;

  return (
    <Drawer
      isOpen={isOpen}
      onClose={closeDrawer}
      title={titleNode}
      ariaLabel="Shopping Cart Drawer"
      headerClassName="bg-[#fbf9f6]"
      footer={footerNode}
      footerClassName="bg-[#fbf9f6] border-t border-neutral-200/80 p-4 sm:p-5"
    >
      {items.length === 0 ? (
        /* Empty Cart View */
        <div className="flex flex-1 min-h-[350px] flex-col items-center justify-center p-6 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f6efe9] text-wine mb-5 shadow-xs">
            <ShoppingBagIcon size={36} className="text-wine" />
          </div>

          <h3 className="font-display text-h4 font-medium text-ink mb-2">
            Your cart is empty
          </h3>
          <p className="text-body text-muted-foreground font-light max-w-xs leading-relaxed mb-6">
            Explore our fine jewellery creations and add your favorite pieces to begin.
          </p>

          <Button
            colorTheme="dark"
            rounded="full"
            size="sm"
            onClick={() => {
              closeDrawer();
              router.push("/collections");
            }}
            className="text-caption font-semibold uppercase tracking-wider !text-cream hover:!bg-wine shadow-md hover:shadow-lg cursor-pointer"
          >
            Start Shopping
          </Button>
        </div>
      ) : (
        /* Populated Cart Content */
        <div>
          {/* Free Shipping Progress Ribbon */}
          <div className="bg-[#FAF7F2] border-b border-neutral-200/60 px-4 py-2.5 sm:px-6">
            <div className="flex items-center justify-between text-[11px] mb-1.5 font-medium">
              <span className="text-ink">
                {isFreeShipping ? (
                  <span className="text-emerald-700 font-semibold">
                    ✓ You&apos;ve unlocked Free Insured Shipping!
                  </span>
                ) : (
                  <span>
                    Add <strong className="text-wine">{formatPrice(freeShippingThreshold - subtotal)}</strong> for Free Shipping
                  </span>
                )}
              </span>
              <span className="text-[10px] text-muted-foreground font-semibold">
                {progressPercent}%
              </span>
            </div>
            <div className="w-full bg-neutral-200/80 h-1.5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500 bg-gold"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="p-4 sm:p-6 divide-y divide-neutral-100">
            {items.map((item) => {
              const { product, quantity } = item;

              return (
                <div
                  key={product.id}
                  className="py-4 first:pt-0 last:pb-0 flex gap-3.5 sm:gap-4 items-start"
                >
                  {/* Product Image */}
                  <div className="relative h-20 w-20 sm:h-22 sm:w-22 shrink-0 overflow-hidden rounded-xl border border-neutral-200/80 bg-neutral-50">
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

                  {/* Product Details */}
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

                      {/* Unit & Total Price */}
                      <div className="mt-1 flex items-baseline gap-2 flex-wrap">
                        <span className="text-small font-semibold text-ink">
                          {formatPrice(product.price * quantity)}
                        </span>
                        {quantity > 1 && (
                          <span className="text-[11px] text-muted-foreground">
                            ({formatPrice(product.price)} each)
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity Selector & Remove Action */}
                    <div className="mt-2.5 flex items-center justify-between gap-2">
                      <QuantitySelector
                        value={quantity}
                        onChange={(newQty) => setQuantity(product.id, newQty)}
                        size="sm"
                      />

                      <Button
                        variant="border"
                        size="xs"
                        rounded="full"
                        onClick={() => remove(product.id)}
                        className="!px-2.5 !py-1 text-[10px] font-medium !text-neutral-500 hover:!text-red-700 hover:!bg-red-50/80 !border-neutral-200/80 cursor-pointer"
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
        </div>
      )}
    </Drawer>
  );
}
