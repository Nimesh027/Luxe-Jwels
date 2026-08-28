"use client";

import Link from "next/link";
import Section from "@/components/common/Section";

export default function ShippingClient() {
  return (
    <Section>

      {/* BREADCRUMB NAVIGATION */}
      <nav
        aria-label="Breadcrumb"
        className="mb-8 flex items-center gap-2 text-xs uppercase tracking-wider text-muted"
      >
        <Link href="/" className="hover:text-wine transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="font-semibold text-wine">Shipping & Delivery</span>
      </nav>

      {/* MAIN PAGE TITLE */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <h1 className="font-display text-3xl sm:text-4xl text-wine font-semibold tracking-wide">
          Shipping & Delivery Policy
        </h1>
        <p className="text-xs sm:text-sm text-muted font-light leading-relaxed">
          At Luxe Jewels, every creation is handcrafted with extreme precision and delivered in tamper-evident, 100% transit-insured luxury packaging directly to your doorstep.
        </p>
      </div>

      {/* 4 KEY SHIPPING HIGHLIGHTS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
        <div className="bg-surface rounded-2xl border border-border/80 p-6 text-center space-y-3 shadow-2xs hover:border-wine/30 transition-all">
          <div className="w-12 h-12 rounded-full bg-wine/10 text-wine flex items-center justify-center mx-auto text-xl">
            🚚
          </div>
          <h3 className="font-display font-semibold text-wine text-base">Free Domestic Shipping</h3>
          <p className="text-xs text-muted leading-relaxed">Complimentary insured express shipping across all pin codes in India.</p>
        </div>

        <div className="bg-surface rounded-2xl border border-border/80 p-6 text-center space-y-3 shadow-2xs hover:border-wine/30 transition-all">
          <div className="w-12 h-12 rounded-full bg-wine/10 text-wine flex items-center justify-center mx-auto text-xl">
            🛡️
          </div>
          <h3 className="font-display font-semibold text-wine text-base">100% Transit Insured</h3>
          <p className="text-xs text-muted leading-relaxed">Your package is fully insured from our vault until delivered to your hands.</p>
        </div>

        <div className="bg-surface rounded-2xl border border-border/80 p-6 text-center space-y-3 shadow-2xs hover:border-wine/30 transition-all">
          <div className="w-12 h-12 rounded-full bg-wine/10 text-wine flex items-center justify-center mx-auto text-xl">
            🎁
          </div>
          <h3 className="font-display font-semibold text-wine text-base">Discreet Packaging</h3>
          <p className="text-xs text-muted leading-relaxed">Delivered in unbranded, tamper-proof outer boxes with a luxury velvet box inside.</p>
        </div>

        <div className="bg-surface rounded-2xl border border-border/80 p-6 text-center space-y-3 shadow-2xs hover:border-wine/30 transition-all">
          <div className="w-12 h-12 rounded-full bg-wine/10 text-wine flex items-center justify-center mx-auto text-xl">
            ⚡
          </div>
          <h3 className="font-display font-semibold text-wine text-base">Fast Dispatch</h3>
          <p className="text-xs text-muted leading-relaxed">Ready-to-ship pieces dispatch within 24-48h; custom orders within 3-5 days.</p>
        </div>
      </div>

      {/* DETAILED SHIPPING SECTIONS */}
      <div className="bg-surface rounded-2xl border border-border/80 p-6 sm:p-10 shadow-xs space-y-8 divide-y divide-border/60">

        {/* Section 1: Domestic Timelines */}
        <div className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-wine flex items-center gap-2">
            <span>📍</span> Domestic Delivery Timelines & Charges
          </h2>
          <p className="text-xs sm:text-sm text-ink/80 leading-relaxed font-normal">
            We offer complimentary express shipping for all orders across India. Orders are processed Monday through Saturday (excluding national holidays).
          </p>
          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left text-xs border border-border rounded-xl overflow-hidden">
              <thead className="bg-[#FAF0F2] text-wine font-semibold uppercase tracking-wider">
                <tr>
                  <th className="p-3 border-b border-border">Shipping Type</th>
                  <th className="p-3 border-b border-border">Estimated Delivery</th>
                  <th className="p-3 border-b border-border">Shipping Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-ink">
                <tr>
                  <td className="p-3 font-medium">Standard Insured Delivery</td>
                  <td className="p-3">3 to 5 Business Days</td>
                  <td className="p-3 font-semibold text-emerald-700">FREE</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Metro Priority Air Express</td>
                  <td className="p-3">1 to 2 Business Days</td>
                  <td className="p-3 font-semibold text-emerald-700">FREE on orders &gt; ₹25,000</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Bespoke / Custom Creations</td>
                  <td className="p-3">7 to 10 Business Days</td>
                  <td className="p-3 font-semibold text-emerald-700">FREE</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2: International Shipping */}
        <div className="pt-8 space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-wine flex items-center gap-2">
            <span>✈️</span> International Luxury Shipping
          </h2>
          <p className="text-xs sm:text-sm text-ink/80 leading-relaxed font-normal">
            Luxe Jewels ships fine jewellery creations worldwide to over 40 countries including the United States, United Kingdom, United Arab Emirates, Canada, Australia, Singapore, and Europe via DHL Express and FedEx Priority.
          </p>
          <ul className="list-disc list-inside text-xs sm:text-sm text-muted space-y-1.5 pt-1">
            <li>International orders dispatch within 3-5 business days following custom clearance and hallmarking verification.</li>
            <li>Shipping charges are calculated at checkout based on destination country and total order weight.</li>
            <li>Custom duties and import taxes (if applicable) are handled per destination country regulations.</li>
          </ul>
        </div>

        {/* Section 3: Live Tracking */}
        <div className="pt-8 space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-wine flex items-center gap-2">
            <span>📱</span> Order Dispatch & Live GPS Tracking
          </h2>
          <p className="text-xs sm:text-sm text-ink/80 leading-relaxed font-normal">
            Once your piece passes final quality inspection and is handed over to our courier partner (BlueDart / Sequel Logistics / DHL), you will receive an immediate SMS and Email containing your AWB tracking number and live GPS tracking link.
          </p>
        </div>

        {/* Section 4: Security & OTP Delivery */}
        <div className="pt-8 space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-wine flex items-center gap-2">
            <span>🔒</span> Secure Delivery & OTP Verification
          </h2>
          <p className="text-xs sm:text-sm text-ink/80 leading-relaxed font-normal">
            To guarantee maximum security, high-value luxury packages require a One-Time Password (OTP) sent to your registered phone number or physical signature upon delivery. Please do not accept outer packages that show signs of damage, tampering, or broken security seals.
          </p>
        </div>

      </div>

      {/* NEED ASSISTANCE HELP BOX */}
      <div className="mt-12 text-center bg-wine/5 rounded-2xl border border-wine/15 p-8 max-w-2xl mx-auto space-y-3">
        <h3 className="font-display text-lg font-semibold text-wine">
          Have Questions About Your Shipment?
        </h3>
        <p className="text-xs text-muted leading-relaxed">
          Our luxury concierge team is available to assist you with order status, address updates, or delivery scheduling.
        </p>
        <div className="pt-2 flex items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-[#80222F] text-white rounded-full text-xs font-semibold hover:bg-wine-dark transition-all cursor-pointer shadow-xs"
          >
            Contact Concierge
          </Link>
          <a
            href="tel:18002660123"
            className="px-6 py-2.5 bg-white border border-wine/30 text-wine rounded-full text-xs font-semibold hover:bg-wine hover:text-white transition-all cursor-pointer shadow-2xs"
          >
            Call 1800-266-0123
          </a>
        </div>
      </div>

    </Section>
  );
}
