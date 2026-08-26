"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/ui/Button";
import QuantitySelector from "@/components/ui/QuantitySelector";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import { formatPrice } from "@/lib/utils";
import {
  VisaBadge,
  MastercardBadge,
  AmexBadge,
  PaypalBadge,
  UpiBadge,
  ApplePayBadge,
} from "@/components/icons/PaymentIcons";

export default function CartClient() {
  const router = useRouter();
  const { items, subtotal, count, remove, setQuantity, clear } = useCart();
  const { toggle: toggleWishlist, isWishlisted } = useWishlist();

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [promoError, setPromoError] = useState("");
  const [orderNote, setOrderNote] = useState("");
  const [noteOpen, setNoteOpen] = useState(false);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoCode.trim()) return;

    if (promoCode.trim().toUpperCase() === "LUXE10") {
      const discount = Math.round(subtotal * 0.1);
      setPromoDiscount(discount);
      setPromoApplied(true);
      setPromoError("");
    } else if (promoCode.trim().toUpperCase() === "WELCOME") {
      const discount = 2000;
      setPromoDiscount(discount);
      setPromoApplied(true);
      setPromoError("");
    } else {
      setPromoError("Invalid code. Try LUXE10 for 10% off!");
    }
  };

  const handleRemovePromo = () => {
    setPromoApplied(false);
    setPromoDiscount(0);
    setPromoCode("");
    setPromoError("");
  };

  const finalTotal = Math.max(0, subtotal - promoDiscount);

  // Empty Cart View
  if (items.length === 0) {
    return (
      <Section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto flex max-w-lg flex-col items-center justify-center text-center px-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f6efe9] text-wine mb-6 shadow-xs border border-wine/10">
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </div>

          <h1 className="font-display text-2xl sm:text-3xl font-medium text-ink tracking-tight mb-2.5">
            Your shopping bag is empty
          </h1>
          <p className="text-xs sm:text-sm text-muted font-light leading-relaxed mb-8 max-w-sm">
            Discover our handcrafted collections of rings, necklaces, bracelets, and heirloom jewellery to start building your look.
          </p>

          <Button
            href="/collections"
            variant="fill"
            colorTheme="wine"
            size="lg"
            className="rounded-full px-8 uppercase tracking-wider text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg"
          >
            Explore Collections
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <div className="bg-[#fcfaf7] min-h-screen py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <SectionTitle
          title="Shopping Bag"
          description="Review your chosen fine jewellery pieces before seamless insured checkout."
          align="center"
          className="mb-8 sm:mb-10"
        />

        {/* Complimentary Insured Shipping Progress Banner */}
        <div className="mb-8 rounded-2xl border border-gold/30 bg-gradient-to-r from-[#fffcf7] via-[#faf5ec] to-[#fffcf7] p-4 sm:p-5 shadow-2xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark font-semibold text-sm">
                ✦
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-ink">
                  You Have Unlocked Complimentary Insured Delivery!
                </p>
                <p className="text-[11px] sm:text-xs text-muted font-light">
                  Includes certified hallmarking certificate & signature velvet presentation box.
                </p>
              </div>
            </div>
            <span className="shrink-0 rounded-full bg-gold/20 px-3 py-1 text-[11px] font-semibold text-gold-dark uppercase tracking-wider">
              Free Shipping Applied
            </span>
          </div>
        </div>

        {/* Main 2-Column Cart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Cart Items List (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="rounded-2xl border border-neutral-200/80 bg-white p-5 sm:p-7 shadow-xs">
              {/* Header Bar */}
              <div className="hidden sm:grid grid-cols-12 border-b border-neutral-100 pb-3 text-xs uppercase tracking-wider font-semibold text-neutral-500">
                <span className="col-span-6">Product</span>
                <span className="col-span-2 text-center">Price</span>
                <span className="col-span-2 text-center">Quantity</span>
                <span className="col-span-2 text-right">Total</span>
              </div>

              {/* Items List */}
              <div className="divide-y divide-neutral-100">
                {items.map(({ product, quantity }) => {
                  const saved = isWishlisted(product.id);

                  return (
                    <div
                      key={product.id}
                      className="py-5 sm:py-6 flex flex-col sm:grid sm:grid-cols-12 sm:items-center gap-4"
                    >
                      {/* Product Thumbnail & Details (6 cols on sm) */}
                      <div className="sm:col-span-6 flex items-center gap-4">
                        <div className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 overflow-hidden rounded-xl border border-neutral-200/80 bg-neutral-50">
                          <Link href={`/products/${product.slug}`}>
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              sizes="96px"
                              className="object-cover object-center transition-transform duration-500 hover:scale-105"
                            />
                          </Link>
                        </div>

                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gold">
                            {product.category?.replace(/-/g, " ") || "Fine Jewellery"}
                          </span>
                          <Link href={`/products/${product.slug}`}>
                            <h3 className="font-display text-sm sm:text-base font-normal text-ink hover:text-wine transition-colors line-clamp-1 mt-0.5">
                              {product.name}
                            </h3>
                          </Link>
                          <p className="text-[11px] text-muted font-light mt-0.5">
                            18K Solid Gold • Certified Hallmarked
                          </p>

                          {/* Mobile-only Price display */}
                          <div className="sm:hidden mt-1.5 flex items-baseline gap-2">
                            <span className="text-sm font-semibold text-ink">
                              {formatPrice(product.price * quantity)}
                            </span>
                            {quantity > 1 && (
                              <span className="text-xs text-muted">
                                ({formatPrice(product.price)} each)
                              </span>
                            )}
                          </div>

                          {/* Item Action Buttons with Theme Styling */}
                          <div className="mt-3 flex items-center gap-2 pt-0.5">
                            {/* Save to Wishlist Button */}
                            <button
                              type="button"
                              onClick={() => toggleWishlist(product)}
                              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium transition-all duration-200 cursor-pointer ${
                                saved
                                  ? "bg-wine/10 text-wine border border-wine/30 shadow-2xs"
                                  : "bg-[#fbf7f2] text-neutral-600 hover:text-wine hover:bg-wine/5 border border-neutral-200/80"
                              }`}
                            >
                              <svg
                                className={`h-3.5 w-3.5 ${
                                  saved ? "fill-wine text-wine" : "fill-none stroke-current"
                                }`}
                                viewBox="0 0 24 24"
                                strokeWidth="1.8"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                                />
                              </svg>
                              <span>{saved ? "Saved in Wishlist" : "Save for later"}</span>
                            </button>

                            {/* Remove Item Button */}
                            <button
                              type="button"
                              onClick={() => remove(product.id)}
                              className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium text-neutral-500 hover:text-red-700 hover:bg-red-50/80 border border-neutral-200/80 transition-all duration-200 cursor-pointer"
                            >
                              <svg
                                className="h-3.5 w-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.8"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                              <span>Remove</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Desktop Unit Price (2 cols) */}
                      <div className="hidden sm:block sm:col-span-2 text-center text-sm font-medium text-ink">
                        {formatPrice(product.price)}
                      </div>

                      {/* Quantity Controller (2 cols) */}
                      <div className="sm:col-span-2 flex justify-start sm:justify-center">
                        <QuantitySelector
                          value={quantity}
                          onChange={(newQty) => setQuantity(product.id, newQty)}
                          size="sm"
                        />
                      </div>

                      {/* Line Total (2 cols) */}
                      <div className="hidden sm:block sm:col-span-2 text-right font-display text-sm sm:text-base font-semibold text-ink">
                        {formatPrice(product.price * quantity)}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Cart Bar */}
              <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <Link
                  href="/collections"
                  className="text-wine hover:text-wine-dark font-medium underline underline-offset-4 transition-colors"
                >
                  ← Continue Shopping
                </Link>

                <button
                  type="button"
                  onClick={clear}
                  className="text-neutral-400 hover:text-red-600 transition-colors cursor-pointer"
                >
                  Clear Entire Bag
                </button>
              </div>
            </div>

            {/* Special Instructions & Gifting Note */}
            <div className="rounded-2xl border border-neutral-200/80 bg-white p-5 sm:p-6 shadow-xs">
              <button
                type="button"
                onClick={() => setNoteOpen(!noteOpen)}
                className="flex w-full items-center justify-between text-left text-xs sm:text-sm font-semibold text-ink cursor-pointer"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="text-gold text-base">✍</span>
                  <span>Add Gift Message or Custom Ring Sizing Note</span>
                </span>
                <span className="text-sm">{noteOpen ? "−" : "+"}</span>
              </button>

              {noteOpen && (
                <div className="mt-3">
                  <textarea
                    rows={3}
                    value={orderNote}
                    onChange={(e) => setOrderNote(e.target.value)}
                    placeholder="Provide special delivery instructions, custom engraving message, or gift card greetings..."
                    className="w-full rounded-xl border border-neutral-300 bg-neutral-50 p-3 text-xs sm:text-sm text-ink placeholder:text-neutral-400 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                  <p className="text-[11px] text-muted font-light mt-1.5">
                    We will handwrite your note on our embossed gold foil stationery at no extra cost.
                  </p>
                </div>
              )}
            </div>

            {/* Assurance Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-xl border border-neutral-200/60 bg-white p-3.5 text-center shadow-2xs">
                <span className="text-base sm:text-lg block mb-1">🛡️</span>
                <p className="text-[11px] font-semibold text-ink">BIS Hallmarked</p>
                <p className="text-[10px] text-muted">100% Certified Gold</p>
              </div>
              <div className="rounded-xl border border-neutral-200/60 bg-white p-3.5 text-center shadow-2xs">
                <span className="text-base sm:text-lg block mb-1">✈️</span>
                <p className="text-[11px] font-semibold text-ink">Insured Shipping</p>
                <p className="text-[10px] text-muted">Doorstep Delivery</p>
              </div>
              <div className="rounded-xl border border-neutral-200/60 bg-white p-3.5 text-center shadow-2xs">
                <span className="text-base sm:text-lg block mb-1">🔄</span>
                <p className="text-[11px] font-semibold text-ink">30-Day Returns</p>
                <p className="text-[10px] text-muted">Hassle-Free Exchange</p>
              </div>
              <div className="rounded-xl border border-neutral-200/60 bg-white p-3.5 text-center shadow-2xs">
                <span className="text-base sm:text-lg block mb-1">🎁</span>
                <p className="text-[11px] font-semibold text-ink">Luxury Box</p>
                <p className="text-[10px] text-muted">Signature Packaging</p>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary & Checkout Card (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-xs">
                <h2 className="font-display text-base font-semibold text-ink uppercase tracking-wider border-b border-neutral-100 pb-3 mb-4">
                  Order Summary
                </h2>

                {/* Subtotal Calculation */}
                <div className="space-y-2.5 text-xs sm:text-sm text-neutral-600">
                  <div className="flex justify-between">
                    <span>Cart Subtotal ({count} items)</span>
                    <span className="font-medium text-ink">{formatPrice(subtotal)}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Insured Delivery</span>
                    <span className="font-semibold text-emerald-600 text-xs uppercase bg-emerald-50 px-2 py-0.5 rounded">
                      FREE
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Luxury Velvet Presentation Box</span>
                    <span className="font-semibold text-emerald-600 text-xs uppercase bg-emerald-50 px-2 py-0.5 rounded">
                      FREE
                    </span>
                  </div>

                  {promoApplied && (
                    <div className="flex justify-between text-emerald-600 font-medium">
                      <span>Promo Discount ({promoCode.toUpperCase()})</span>
                      <span>− {formatPrice(promoDiscount)}</span>
                    </div>
                  )}

                  <div className="border-t border-neutral-100 pt-3 flex items-baseline justify-between text-base font-bold text-ink">
                    <span>Estimated Total</span>
                    <span className="font-display text-xl text-wine font-bold">
                      {formatPrice(finalTotal)}
                    </span>
                  </div>
                </div>

                {/* Promo Code Input */}
                <div className="mt-5 border-t border-neutral-100 pt-4">
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-600 mb-1.5">
                    Promotional Code
                  </label>

                  {promoApplied ? (
                    <div className="flex items-center justify-between rounded-xl bg-emerald-50 border border-emerald-200 p-2.5 text-xs text-emerald-800">
                      <span>Coupon &quot;{promoCode.toUpperCase()}&quot; Applied!</span>
                      <button
                        type="button"
                        onClick={handleRemovePromo}
                        className="font-semibold text-emerald-900 hover:underline cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyPromo} className="flex gap-2">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="e.g. LUXE10"
                        className="flex-1 rounded-xl border border-neutral-300 bg-neutral-50 px-3 py-2 text-xs text-ink placeholder:text-neutral-400 focus:border-gold focus:outline-none uppercase"
                      />
                      <button
                        type="submit"
                        className="rounded-xl bg-ink px-4 py-2 text-xs font-semibold text-cream hover:bg-wine transition-colors cursor-pointer"
                      >
                        Apply
                      </button>
                    </form>
                  )}

                  {promoError && (
                    <p className="mt-1 text-[11px] text-red-600 font-medium">{promoError}</p>
                  )}
                </div>

                {/* Checkout CTA Button */}
                <button
                  type="button"
                  onClick={() => router.push("/checkout")}
                  className="mt-6 w-full h-12 rounded-full bg-wine text-white text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-md hover:bg-wine-dark hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                {/* Trust & Payment Badges */}
                <div className="mt-5 border-t border-neutral-100 pt-4 text-center">
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400 mb-2.5">
                    Guaranteed Safe & Secure Checkout
                  </p>
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    <VisaBadge />
                    <MastercardBadge />
                    <AmexBadge />
                    <PaypalBadge />
                    <UpiBadge />
                    <ApplePayBadge />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
