"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { ShoppingBagIcon, TrashIcon } from "@/components/icons";
import { ShippingIcon, SecureIcon } from "@/components/icons/FeatureIcons";

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

  if (items.length === 0) {
    return (
      <section className="section-spacing">
        <div className="container max-w-md text-center">
          <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-border bg-white text-gold-warm">
            <ShoppingBagIcon size={30} />
          </span>
          <h1 className="mt-5 font-display text-h2 font-semibold text-ink">Your cart is empty</h1>
          <p className="mt-2 text-[15px] text-muted">
            Looks like you haven&apos;t added any jewellery yet. Explore our handcrafted collections.
          </p>
          <Button href="/shop" size="lg" className="mt-7">
            Start Shopping
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 sm:py-12">
      <div className="container">
        <h1 className="font-display text-h2 font-semibold text-ink">
          Your Cart{" "}
          <span className="font-body text-[16px] font-normal text-muted">
            ({count} {count === 1 ? "item" : "items"})
          </span>
        </h1>

        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Items */}
          <div className="lg:col-span-8 space-y-6">
            <ul className="divide-y divide-border rounded-[var(--radius-card)] border border-border bg-white">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-4 p-4 sm:p-5">
                  <Link
                    href={`/products/${product.slug}`}
                    className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-md border border-border bg-cream-dark"
                  >
                    <Image src={product.image} alt={product.name} fill sizes="112px" className="object-cover" />
                  </Link>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <Link
                          href={`/products/${product.slug}`}
                          className="text-[15.5px] font-medium text-ink hover:text-gold transition-colors line-clamp-2"
                        >
                          {product.name}
                        </Link>
                        <p className="mt-0.5 text-[13.5px] text-muted">Yellow Gold · Size 7</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(product.id)}
                        aria-label={`Remove ${product.name} from cart`}
                        className="-mr-1.5 -mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted hover:bg-cream hover:text-danger transition-colors cursor-pointer"
                      >
                        <TrashIcon size={17} />
                      </button>
                    </div>

                    <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-3">
                      <div className="flex h-10 items-center overflow-hidden rounded-[var(--radius-btn)] border border-border">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          disabled={quantity <= 1}
                          onClick={() => setQuantity(product.id, Math.max(1, quantity - 1))}
                          className="flex h-full w-10 items-center justify-center text-[18px] text-ink hover:bg-cream disabled:text-border-strong cursor-pointer"
                        >
                          −
                        </button>
                        <span aria-live="polite" className="w-9 text-center text-[15px] font-semibold text-ink">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => setQuantity(product.id, quantity + 1)}
                          className="flex h-full w-10 items-center justify-center text-[18px] text-ink hover:bg-cream cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-[17px] font-semibold text-ink">{formatPrice(product.price * quantity)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: ShippingIcon, title: "Free Shipping", text: "On orders above ₹2,999" },
                { icon: SecureIcon, title: "Secure Payments", text: "100% safe & secure" },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-center gap-3.5 rounded-[var(--radius-card)] border border-border bg-white p-4">
                  <Icon className="h-8 w-8 shrink-0 text-gold-warm" />
                  <div>
                    <p className="font-display text-[17px] font-semibold text-ink leading-tight">{title}</p>
                    <p className="text-[13.5px] text-muted">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-[var(--radius-card)] border border-border bg-gold-soft p-5 sm:p-6">
              <div>
                <h2 className="font-display text-h4 font-semibold text-ink">Still deciding?</h2>
                <p className="text-[14.5px] text-muted">Save your cart for later and get notified on price updates.</p>
              </div>
              <Button variant="outline" onClick={() => setSavedForLater(true)} className="shrink-0">
                {savedForLater ? "Cart Saved ✓" : "Save Cart"}
              </Button>
            </div>
          </div>

          {/* Summary */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24" aria-labelledby="order-summary-heading">
            <div className="rounded-[var(--radius-card)] border border-border bg-white p-5 sm:p-6">
              <h2
                id="order-summary-heading"
                className="border-b border-border pb-4 font-display text-h4 font-semibold text-ink"
              >
                Order Summary
              </h2>

              <dl className="space-y-3 py-4 text-[15px]">
                <div className="flex justify-between">
                  <dt className="text-muted">Subtotal</dt>
                  <dd className="font-medium text-ink">{formatPrice(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Shipping</dt>
                  <dd className="font-semibold text-success">FREE</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Luxury gift box</dt>
                  <dd className="font-semibold text-success">FREE</dd>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-success">
                    <dt>Discount ({promoCode.toUpperCase()})</dt>
                    <dd className="font-medium">− {formatPrice(promoDiscount)}</dd>
                  </div>
                )}
              </dl>

              <div className="flex items-baseline justify-between border-t border-border pt-4">
                <span className="text-[16px] font-semibold text-ink">Total</span>
                <span className="text-[26px] font-semibold text-ink">{formatPrice(finalTotal)}</span>
              </div>

              <div className="mt-5">
                {promoApplied ? (
                  <div
                    role="status"
                    className="flex items-center justify-between rounded-[var(--radius-btn)] border border-success/30 bg-success/5 px-3 py-2.5 text-[14px] text-success"
                  >
                    <span>Coupon “{promoCode.toUpperCase()}” applied</span>
                    <button type="button" onClick={handleRemovePromo} className="font-semibold underline cursor-pointer">
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyPromo}>
                    <label htmlFor="promo-code" className="mb-1.5 block text-[14px] font-medium text-ink">
                      Promo code
                    </label>
                    <div className="flex gap-2">
                      <input
                        id="promo-code"
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="e.g. LUXE10"
                        aria-describedby={promoError ? "promo-error" : undefined}
                        className="field min-w-0 flex-1"
                      />
                      <Button type="submit" colorTheme="dark" className="shrink-0 h-[46px]">
                        Apply
                      </Button>
                    </div>
                    {promoError && (
                      <p id="promo-error" className="mt-1.5 text-[13px] text-danger">
                        {promoError}
                      </p>
                    )}
                  </form>
                )}
              </div>

              <Button size="lg" fullWidth className="mt-5" onClick={() => router.push("/checkout")}>
                Proceed to Checkout
              </Button>
              <div className="mt-3 text-center">
                <Link
                  href="/shop"
                  className="text-[14px] font-medium text-ink-soft underline-offset-4 hover:text-gold hover:underline"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
