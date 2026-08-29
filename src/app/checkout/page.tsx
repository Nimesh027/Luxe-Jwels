"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/common/Section";
import Button from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";
import {
  VisaBadge,
  MastercardBadge,
  AmexBadge,
  PaypalBadge,
  UpiBadge,
} from "@/components/icons/PaymentIcons";

export default function CheckoutPage() {
  const { items, subtotal, count } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const shipping = 0; // Free Insured Shipping
  const total = subtotal + shipping;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <Section className="py-16 sm:py-24 bg-[#fcfaf7]">
        <div className="mx-auto max-w-lg rounded-3xl border border-neutral-200/80 bg-white p-8 sm:p-12 text-center shadow-lg">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mb-6 shadow-xs border border-emerald-200">
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <span className="text-caption uppercase tracking-[0.25em] font-semibold text-gold mb-2 block">
            ORDER CONFIRMED
          </span>
          <h1 className="font-display text-h2 font-medium text-ink mb-3">
            Thank you for your order!
          </h1>
          <p className="text-body text-muted font-light leading-relaxed mb-6">
            Your heirloom jewellery order is being carefully prepared and insured. A confirmation email and tracking link have been dispatched.
          </p>

          <Button
            href="/"
            variant="fill"
            colorTheme="wine"
            size="lg"
            className="rounded-full px-8 uppercase tracking-wider text-body font-semibold shadow-md"
          >
            Return to Home
          </Button>
        </div>
      </Section>
    );
  }

  if (items.length === 0) {
    return (
      <Section className="py-16 sm:py-24 bg-white text-center">
        <div className="mx-auto max-w-md">
          <h1 className="font-display text-h3 font-medium text-ink mb-3">
            No items to checkout
          </h1>
          <p className="text-body text-muted mb-6">
            Your cart is currently empty. Explore our fine jewellery collections to add items.
          </p>
          <Button href="/collections" variant="fill" colorTheme="wine">
            Explore Collections
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <div className="bg-[#fcfaf7] min-h-screen py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Checkout Header */}
        <div className="mb-8">
          <Link href="/cart" className="inline-flex items-center gap-1.5 text-caption uppercase tracking-wider font-semibold text-wine hover:underline mb-2">
            <span>← Return to Cart</span>
          </Link>
          <h1 className="font-display text-h2 lg:text-h2 font-medium text-ink tracking-tight">
            Secure Luxury Checkout
          </h1>
          <p className="text-body text-muted font-light mt-1">
            Complimentary insured delivery & certified authenticity included.
          </p>
        </div>

        <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Shipping & Payment Info */}
          <div className="lg:col-span-7 space-y-6">
            {/* Contact Information */}
            <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-xs">
              <h2 className="font-display text-body font-semibold text-ink uppercase tracking-wider mb-4">
                1. Contact Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-caption font-medium text-neutral-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full h-11 rounded-xl border border-neutral-300 bg-neutral-50 px-4 text-body text-ink focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div>
                  <label className="block text-caption font-medium text-neutral-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full h-11 rounded-xl border border-neutral-300 bg-neutral-50 px-4 text-body text-ink focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-xs">
              <h2 className="font-display text-body font-semibold text-ink uppercase tracking-wider mb-4">
                2. Shipping Address
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-caption font-medium text-neutral-700 mb-1">First Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Priya"
                    className="w-full h-11 rounded-xl border border-neutral-300 bg-neutral-50 px-4 text-body text-ink focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div>
                  <label className="block text-caption font-medium text-neutral-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Sharma"
                    className="w-full h-11 rounded-xl border border-neutral-300 bg-neutral-50 px-4 text-body text-ink focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-caption font-medium text-neutral-700 mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    placeholder="Flat / House No., Landmark, Street"
                    className="w-full h-11 rounded-xl border border-neutral-300 bg-neutral-50 px-4 text-body text-ink focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div>
                  <label className="block text-caption font-medium text-neutral-700 mb-1">City</label>
                  <input
                    type="text"
                    required
                    placeholder="Mumbai"
                    className="w-full h-11 rounded-xl border border-neutral-300 bg-neutral-50 px-4 text-body text-ink focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div>
                  <label className="block text-caption font-medium text-neutral-700 mb-1">PIN Code</label>
                  <input
                    type="text"
                    required
                    placeholder="400001"
                    className="w-full h-11 rounded-xl border border-neutral-300 bg-neutral-50 px-4 text-body text-ink focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-xs">
              <h2 className="font-display text-body font-semibold text-ink uppercase tracking-wider mb-4">
                3. Payment Method
              </h2>
              <div className="space-y-3">
                <label
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === "upi"
                      ? "border-wine bg-wine/5"
                      : "border-neutral-200 bg-neutral-50/50 hover:bg-neutral-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={paymentMethod === "upi"}
                      onChange={() => setPaymentMethod("upi")}
                      className="accent-wine"
                    />
                    <div>
                      <p className="text-body font-semibold text-ink">UPI / Instant Transfer</p>
                      <p className="text-[11px] text-muted">Google Pay, PhonePe, Paytm, BHIM</p>
                    </div>
                  </div>
                  <UpiBadge />
                </label>

                <label
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === "card"
                      ? "border-wine bg-wine/5"
                      : "border-neutral-200 bg-neutral-50/50 hover:bg-neutral-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                      className="accent-wine"
                    />
                    <div>
                      <p className="text-body font-semibold text-ink">Credit / Debit Card</p>
                      <p className="text-[11px] text-muted">Visa, Mastercard, American Express</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <VisaBadge />
                    <MastercardBadge />
                    <AmexBadge />
                  </div>
                </label>

                <label
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === "paypal"
                      ? "border-wine bg-wine/5"
                      : "border-neutral-200 bg-neutral-50/50 hover:bg-neutral-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      checked={paymentMethod === "paypal"}
                      onChange={() => setPaymentMethod("paypal")}
                      className="accent-wine"
                    />
                    <div>
                      <p className="text-body font-semibold text-ink">PayPal</p>
                      <p className="text-[11px] text-muted">Pay securely with PayPal balance or card</p>
                    </div>
                  </div>
                  <PaypalBadge />
                </label>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-xs">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-4">
                <h2 className="font-display text-body font-semibold text-ink uppercase tracking-wider">
                  Order Summary
                </h2>
                <span className="text-caption font-semibold text-gold">
                  {count} {count === 1 ? "Item" : "Items"}
                </span>
              </div>

              {/* Items List */}
              <div className="max-h-64 overflow-y-auto divide-y divide-neutral-100 mb-5">
                {items.map((item) => (
                  <div key={item.product.id} className="py-3 flex items-center gap-3">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-caption font-medium text-ink truncate">{item.product.name}</p>
                      <p className="text-[11px] text-muted">Qty: {item.quantity}</p>
                    </div>
                    <span className="text-caption font-semibold text-ink">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals Calculation */}
              <div className="space-y-2 border-t border-neutral-100 pt-4 text-caption text-neutral-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-ink">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Insured Delivery</span>
                  <span className="font-semibold text-emerald-600">FREE</span>
                </div>
                <div className="flex justify-between border-t border-neutral-100 pt-3 text-small font-bold text-ink">
                  <span>Total Amount</span>
                  <span className="font-display text-h5 text-wine">{formatPrice(total)}</span>
                </div>
              </div>

              {/* Place Order CTA Button */}
              <button
                type="submit"
                className="mt-6 w-full h-12 rounded-full bg-wine text-white text-body font-semibold uppercase tracking-wider shadow-md hover:bg-wine-dark hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Place Order • {formatPrice(total)}</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-muted">
                <svg className="h-3.5 w-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>256-Bit SSL Encrypted & BIS Hallmarked Delivery</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
