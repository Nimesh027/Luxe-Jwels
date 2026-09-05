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
import {
  CloseIcon,
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
          aria-label="Shopping Cart Drawer"
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-neutral-200/80 px-6 py-4.5 bg-[#fbf9f6]">
            <div className="flex items-center gap-2">
              <p className="font-display text-body font-semibold text-ink">
                Your Cart
              </p>
              <span className="flex h-5.5 min-w-5.5 items-center justify-center rounded-full bg-wine text-white text-caption font-semibold px-1.5">
                {count}
              </span>
            </div>

            <button
              type="button"
              onClick={closeDrawer}
              aria-label="Close cart drawer"
              className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-200/60 hover:text-ink transition-colors cursor-pointer"
            >
              <CloseIcon size={18} />
            </button>
          </div>

          {/* Drawer Body */}
          {items.length === 0 ? (
            /* Empty Cart View */
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f6efe9] text-wine mb-5 shadow-xs">
                <ShoppingBagIcon size={36} className="text-wine" />
              </div>

              <h3 className="font-display text-h4 font-medium text-ink mb-2">
                Your cart is empty
              </h3>
              <p className="text-body text-muted font-light max-w-xs leading-relaxed mb-6">
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
                className="text-caption font-semibold uppercase tracking-wider !text-cream hover:!bg-wine shadow-md hover:shadow-lg"
              >
                Start Shopping
              </Button>
            </div>
          ) : (
            /* Populated Cart Items List */
            <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-neutral-100">
              {items.map((item) => {
                const { product, quantity } = item;

                return (
                  <div key={product.id} className="py-4.5 flex gap-4">
                    {/* Product Image */}
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

                    {/* Product Details */}
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <Link
                          href={`/products/${product.slug}`}
                          onClick={closeDrawer}
                          className="font-display text-small font-normal text-ink hover:text-wine transition-colors line-clamp-1 block"
                        >
                          {product.name}
                        </Link>

                        {/* Specs: Weight / Purity / Category */}
                        <div className="mt-1 flex items-center gap-2 text-[11px] text-muted font-light">
                          <span>18K Solid Gold</span>
                          <span>•</span>
                          <span className="capitalize">{product.category.replace(/-/g, " ")}</span>
                        </div>

                        {/* Unit & Total Price */}
                        <div className="mt-1.5 flex items-baseline gap-2">
                          <span className="text-small font-semibold text-ink">
                            {formatPrice(product.price * quantity)}
                          </span>
                          {quantity > 1 && (
                            <span className="text-[11px] text-muted">
                              ({formatPrice(product.price)} each)
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Quantity Selector */}
                      <div className="mt-3 flex items-center justify-between">
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
                          className="!px-2.5 !py-1 text-[10px] font-medium !text-neutral-500 hover:!text-red-700 hover:!bg-red-50/80 !border-neutral-200/80"
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

          {/* Drawer Footer with Actions & Checkout */}
          {items.length > 0 && (
            <div className="border-t border-neutral-200 bg-[#fbf9f6] p-6">
              {/* Order Special Instructions Accordion */}
              <div className="mb-4 border-b border-neutral-200/70 pb-3">
                <button
                  type="button"
                  onClick={() => setInstructionsOpen(!instructionsOpen)}
                  className="flex w-full items-center justify-between text-left text-caption font-medium text-neutral-700 hover:text-ink cursor-pointer"
                >
                  <span className="inline-flex items-center gap-1.5">
                    <span className="text-gold text-caption">✍</span>
                    <span>Order Special Instructions / Gift Note</span>
                  </span>
                  <span className="text-small font-semibold">{instructionsOpen ? "−" : "+"}</span>
                </button>

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
              <div className="flex items-baseline justify-between mb-1.5">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-600">
                  Estimated Total
                </span>
                <span className="font-display text-[16px] sm:text-[17px] font-bold text-ink">
                  {formatPrice(subtotal)}
                </span>
              </div>

              {/* Tax & Shipping Note */}
              <p className="text-[10.5px] text-muted font-light leading-relaxed mb-4">
                Taxes, discounts, and insured shipping calculated at checkout.
              </p>

              {/* Action Buttons: View Cart & Check Out */}
              <div className="flex flex-col gap-2">
                <Button
                  colorTheme="wine"
                  rounded="full"
                  size="sm"
                  fullWidth
                  onClick={handleCheckout}
                  className="text-caption font-semibold uppercase tracking-wider shadow-md hover:shadow-lg"
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
                  className="text-caption font-medium uppercase tracking-wider hover:!bg-neutral-100/80 !border-neutral-300"
                >
                  View Cart
                </Button>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
