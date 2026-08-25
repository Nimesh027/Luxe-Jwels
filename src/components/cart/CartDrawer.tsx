"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCartDrawerOpen } from "@/store/slices/uiSlice";
import { formatPrice } from "@/lib/utils";

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
              <h2 className="font-display text-lg sm:text-xl font-medium text-ink">
                Your Cart
              </h2>
              <span className="flex h-5.5 min-w-5.5 items-center justify-center rounded-full bg-wine text-white text-xs font-semibold px-1.5">
                {count}
              </span>
            </div>

            <button
              type="button"
              onClick={closeDrawer}
              aria-label="Close cart drawer"
              className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-200/60 hover:text-ink transition-colors cursor-pointer"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Body */}
          {items.length === 0 ? (
            /* Empty Cart View */
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f6efe9] text-wine mb-5 shadow-xs">
                <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>

              <h3 className="font-display text-xl font-medium text-ink mb-2">
                Your cart is empty
              </h3>
              <p className="text-xs sm:text-sm text-muted font-light max-w-xs leading-relaxed mb-6">
                Explore our fine jewellery creations and add your favorite pieces to begin.
              </p>

              <button
                type="button"
                onClick={() => {
                  closeDrawer();
                  router.push("/collections");
                }}
                className="inline-flex h-11 items-center justify-center rounded-full bg-ink px-8 text-xs font-semibold uppercase tracking-wider text-cream shadow-md transition-all hover:bg-wine hover:shadow-lg cursor-pointer"
              >
                Start Shopping
              </button>
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
                          className="font-display text-sm font-normal text-ink hover:text-wine transition-colors line-clamp-1 block"
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
                          <span className="text-sm font-semibold text-ink">
                            {formatPrice(product.price * quantity)}
                          </span>
                          {quantity > 1 && (
                            <span className="text-[11px] text-muted">
                              ({formatPrice(product.price)} each)
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Quantity Selector: − 1 + */}
                      <div className="mt-3 flex items-center justify-between">
                        <div className="inline-flex h-8 items-center rounded-xl border border-neutral-200 bg-[#fbf9f6] shadow-2xs">
                          <button
                            type="button"
                            onClick={() => setQuantity(product.id, Math.max(1, quantity - 1))}
                            aria-label="Decrease quantity"
                            className="flex h-8 w-7 items-center justify-center text-neutral-600 hover:text-wine hover:bg-wine/10 transition-colors rounded-l-xl cursor-pointer text-xs"
                          >
                            −
                          </button>
                          <span className="w-7 text-center text-xs font-semibold text-neutral-900">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => setQuantity(product.id, quantity + 1)}
                            aria-label="Increase quantity"
                            className="flex h-8 w-7 items-center justify-center text-neutral-600 hover:text-wine hover:bg-wine/10 transition-colors rounded-r-xl cursor-pointer text-xs"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => remove(product.id)}
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

          {/* Drawer Footer with Actions & Checkout */}
          {items.length > 0 && (
            <div className="border-t border-neutral-200 bg-[#fbf9f6] p-6">
              {/* Order Special Instructions Accordion */}
              <div className="mb-4 border-b border-neutral-200/70 pb-3">
                <button
                  type="button"
                  onClick={() => setInstructionsOpen(!instructionsOpen)}
                  className="flex w-full items-center justify-between text-left text-xs font-medium text-neutral-700 hover:text-ink cursor-pointer"
                >
                  <span className="inline-flex items-center gap-1.5">
                    <svg className="h-3.5 w-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <span>Order Special Instructions / Gift Note</span>
                  </span>
                  <span className="text-sm font-semibold">{instructionsOpen ? "−" : "+"}</span>
                </button>

                {instructionsOpen && (
                  <div className="mt-2.5">
                    <textarea
                      rows={2}
                      value={orderNote}
                      onChange={(e) => setOrderNote(e.target.value)}
                      placeholder="Add custom engraving note or special delivery instructions..."
                      className="w-full rounded-lg border border-neutral-300 bg-white p-2.5 text-xs text-ink placeholder:text-neutral-400 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                )}
              </div>

              {/* Subtotal & Estimated Total */}
              <div className="flex items-baseline justify-between mb-1.5">
                <span className="text-xs uppercase tracking-wider font-semibold text-neutral-600">
                  Estimated Total
                </span>
                <span className="font-display text-lg sm:text-xl font-bold text-ink">
                  {formatPrice(subtotal)}
                </span>
              </div>

              {/* Tax & Shipping Note */}
              <p className="text-[11px] text-muted font-light leading-relaxed mb-5">
                Taxes, discounts, and insured shipping calculated at checkout.
              </p>

              {/* Action Buttons: View Cart & Check Out */}
              <div className="flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={handleCheckout}
                  className="w-full h-11.5 rounded-full bg-wine text-white text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-md hover:bg-wine-dark hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Check Out</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={handleViewCart}
                  className="w-full h-11 rounded-full border border-neutral-300 bg-white text-ink text-xs sm:text-sm font-medium uppercase tracking-wider hover:bg-neutral-100/80 transition-all duration-200 flex items-center justify-center cursor-pointer"
                >
                  View Cart
                </button>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
