"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";

export default function CartClient() {
  const router = useRouter();
  const { items, subtotal, count, remove, setQuantity } = useCart();
  const [savedForLater, setSavedForLater] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [promoError, setPromoError] = useState("");

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError("");
    const code = promoCode.trim().toUpperCase();

    if (code === "LUXE10") {
      const discount = Math.round(subtotal * 0.1);
      setPromoDiscount(discount);
      setPromoApplied(true);
    } else if (code === "WELCOME") {
      const discount = Math.min(1000, subtotal);
      setPromoDiscount(discount);
      setPromoApplied(true);
    } else {
      setPromoError("Invalid code. Try 'LUXE10' for 10% off or 'WELCOME'.");
    }
  };

  const handleRemovePromo = () => {
    setPromoApplied(false);
    setPromoDiscount(0);
    setPromoCode("");
    setPromoError("");
  };

  const finalTotal = Math.max(0, subtotal - promoDiscount);

  // If cart is completely empty
  if (items.length === 0) {
    return (
      <div className="w-full bg-[#FAF7F2] min-h-[60vh] flex items-center justify-center py-16 px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-white border border-[#EAE4DC] flex items-center justify-center mx-auto mb-4 text-[24px]">
            🛍️
          </div>
          <h1 className="font-display text-[28px] font-medium text-[#141414] mb-2">
            Your Cart is Empty
          </h1>
          <p className="font-body text-[14px] text-[#78716A] mb-6">
            Looks like you haven&apos;t added any jewellery yet. Explore our handcrafted collections.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#B38E5D] hover:bg-[#9C7748] text-white text-[14px] font-medium tracking-wide shadow-md transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FAF7F2] py-10 sm:py-14 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Title */}
        <h1 className="font-display text-[26px] sm:text-[32px] text-[#141414] font-medium mb-8">
          Your Cart ({count} {count === 1 ? "item" : "items"})
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Item List (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-white border border-[#EAE4DC] shadow-xs"
              >
                {/* Thumbnail */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-[#FAF7F2] border border-[#EAE4DC] shrink-0">
                  <Image
                    src={product.image || "/images/revamp/halo-ring.jpg"}
                    alt={product.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/products/${product.slug}`}
                    className="font-display text-[15px] sm:text-[17px] font-medium text-[#141414] hover:text-[#B38E5D] transition-colors line-clamp-1"
                  >
                    {product.name}
                  </Link>
                  <p className="font-body text-[12px] text-[#78716A] mt-0.5">
                    Yellow Gold | Size 7
                  </p>
                  <p className="font-display text-[15px] sm:text-[16px] font-semibold text-[#141414] mt-1.5">
                    {formatPrice(product.price)}
                  </p>
                </div>

                {/* Quantity Stepper & Delete Button */}
                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-3">
                  <div className="flex items-center border border-[#EAE4DC] rounded-lg bg-white overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setQuantity(product.id, Math.max(1, quantity - 1))}
                      className="w-7 h-7 flex items-center justify-center text-[#78716A] hover:text-[#141414] hover:bg-[#FAF7F2] cursor-pointer"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-[13px] font-semibold text-[#141414]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(product.id, quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center text-[#78716A] hover:text-[#141414] hover:bg-[#FAF7F2] cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => remove(product.id)}
                    className="p-1.5 text-[#A69F96] hover:text-red-600 transition-colors cursor-pointer"
                    aria-label="Remove item"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}

            {/* Free Shipping & Secure Badges */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#EAE4DC]">
                <span className="text-[#B38E5D] text-lg">🚚</span>
                <div>
                  <p className="font-display text-[13.5px] font-semibold text-[#141414]">Free Shipping</p>
                  <p className="text-[11.5px] text-[#78716A]">Orders above ₹2,999</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#EAE4DC]">
                <span className="text-[#B38E5D] text-lg">🔒</span>
                <div>
                  <p className="font-display text-[13.5px] font-semibold text-[#141414]">Secure Payments</p>
                  <p className="text-[11.5px] text-[#78716A]">100% Safe & Secure</p>
                </div>
              </div>
            </div>

            {/* "Still Deciding? Save your cart for later" Banner */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#FAF0E4] via-[#FDF7EF] to-[#FAF0E4] border border-[#E8D8C3] flex items-center justify-between gap-4 mt-6">
              <div>
                <h3 className="font-display text-[16px] sm:text-[18px] font-semibold text-[#141414]">
                  Still Deciding?
                </h3>
                <p className="font-body text-[12.5px] sm:text-[13px] text-[#78716A]">
                  Save your cart for later and get notified on price updates.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSavedForLater(true)}
                className="px-5 py-2.5 rounded-xl bg-white border border-[#B38E5D] text-[#B38E5D] hover:bg-[#B38E5D] hover:text-white text-[13px] font-medium tracking-wide transition-colors cursor-pointer shrink-0"
              >
                {savedForLater ? "Cart Saved ✓" : "Save Cart"}
              </button>
            </div>
          </div>

          {/* RIGHT: Order Summary Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-[#EAE4DC] p-6 shadow-sm sticky top-28 space-y-5">
              <h2 className="font-display text-[18px] font-semibold text-[#141414] pb-4 border-b border-[#EAE4DC]">
                Order Summary
              </h2>

              <div className="space-y-3 text-[14px]">
                <div className="flex justify-between text-[#5C554E]">
                  <span>Subtotal ({count} {count === 1 ? "item" : "items"})</span>
                  <span className="font-semibold text-[#141414]">{formatPrice(subtotal)}</span>
                </div>

                <div className="flex justify-between items-center text-[#5C554E]">
                  <span>Insured Delivery</span>
                  <span className="font-semibold text-[#227248] text-[12px] bg-emerald-50 px-2 py-0.5 rounded">
                    FREE
                  </span>
                </div>

                <div className="flex justify-between items-center text-[#5C554E]">
                  <span>Luxury Velvet Box</span>
                  <span className="font-semibold text-[#227248] text-[12px] bg-emerald-50 px-2 py-0.5 rounded">
                    FREE
                  </span>
                </div>

                {promoApplied && (
                  <div className="flex justify-between text-[#227248] font-medium">
                    <span>Discount ({promoCode.toUpperCase()})</span>
                    <span>&minus; {formatPrice(promoDiscount)}</span>
                  </div>
                )}

                <div className="pt-3 border-t border-[#EAE4DC] flex items-baseline justify-between text-[16px]">
                  <span className="font-semibold text-[#141414]">Total</span>
                  <span className="font-display text-[22px] font-semibold text-[#B38E5D]">
                    {formatPrice(finalTotal)}
                  </span>
                </div>
              </div>

              {/* Promo Code Input Form */}
              <div className="pt-3 border-t border-[#EAE4DC]">
                <label className="block text-[11px] font-semibold tracking-wider text-[#78716A] mb-2">
                  Promotional Coupon
                </label>

                {promoApplied ? (
                  <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-[12.5px] text-emerald-800">
                    <span>Coupon &quot;{promoCode.toUpperCase()}&quot; Applied!</span>
                    <button
                      type="button"
                      onClick={handleRemovePromo}
                      className="font-semibold text-emerald-900 underline cursor-pointer"
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
                      placeholder="e.g. LUXE10 or WELCOME"
                      className="flex-1 px-3 py-2 text-[13px] rounded-xl border border-[#EAE4DC] focus:border-[#B38E5D] focus:outline-none bg-[#FAF7F2]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-[#141414] hover:bg-[#2C2723] text-white text-[12.5px] font-medium tracking-wide transition-colors cursor-pointer"
                    >
                      Apply Code
                    </button>
                  </form>
                )}

                {promoError && (
                  <p className="mt-1.5 text-[11px] text-red-600 font-medium">{promoError}</p>
                )}
              </div>

              {/* Checkout CTA */}
              <button
                type="button"
                onClick={() => router.push("/checkout")}
                className="w-full py-3.5 rounded-xl bg-[#B38E5D] hover:bg-[#9C7748] text-white text-[14.5px] font-medium tracking-wide shadow-md transition-colors cursor-pointer text-center"
              >
                Proceed to Checkout
              </button>

              {/* Payment Security */}
              <div className="pt-4 border-t border-[#EAE4DC] text-center">
                <p className="text-[10px] tracking-wider font-semibold text-[#8C827A] mb-2">
                  Guaranteed 100% Safe & Insured Checkout
                </p>
                <div className="flex items-center justify-center gap-2 text-[11px] text-[#78716A] flex-wrap">
                  <span className="px-2 py-1 rounded bg-[#FAF7F2] border border-[#EAE4DC]">UPI</span>
                  <span className="px-2 py-1 rounded bg-[#FAF7F2] border border-[#EAE4DC]">Cards</span>
                  <span className="px-2 py-1 rounded bg-[#FAF7F2] border border-[#EAE4DC]">Net Banking</span>
                  <span className="px-2 py-1 rounded bg-[#FAF7F2] border border-[#EAE4DC]">EMI</span>
                </div>
              </div>

              <div className="text-center pt-2">
                <Link
                  href="/shop"
                  className="text-[13px] text-[#78716A] hover:text-[#B38E5D] underline transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
