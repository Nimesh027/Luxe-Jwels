"use client";

import Link from "next/link";
import StaticPageLayout from "@/components/layout/StaticPageLayout";

export default function ReturnsClient() {
  return (
    <StaticPageLayout
      pageTitle="Returns & Lifetime Exchange Policy"
      breadcrumbLabel="Returns & Exchange Policy"
      description="We want you to love your heirloom creation. Luxe Jewels offers a 15-day 100% money-back guarantee and a transparent Lifetime Exchange Policy for all fine jewellery."
    >

      {/* 4 KEY HIGHLIGHT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
        <div className="bg-surface rounded-2xl border border-border/80 p-6 text-center space-y-3 shadow-2xs hover:border-wine/30 transition-all">
          <div className="w-12 h-12 rounded-full bg-wine/10 text-wine flex items-center justify-center mx-auto text-h4">
            ↩️
          </div>
          <h3 className="font-display font-semibold text-wine text-body">15-Day Money Back</h3>
          <p className="text-caption text-muted leading-relaxed">Full 100% refund with zero deductions on returns initiated within 15 days.</p>
        </div>

        <div className="bg-surface rounded-2xl border border-border/80 p-6 text-center space-y-3 shadow-2xs hover:border-wine/30 transition-all">
          <div className="w-12 h-12 rounded-full bg-wine/10 text-wine flex items-center justify-center mx-auto text-h4">
            💎
          </div>
          <h3 className="font-display font-semibold text-wine text-body">Lifetime Exchange</h3>
          <p className="text-caption text-muted leading-relaxed">Upgrade or exchange your jewellery anytime at prevailing gold & diamond market rates.</p>
        </div>

        <div className="bg-surface rounded-2xl border border-border/80 p-6 text-center space-y-3 shadow-2xs hover:border-wine/30 transition-all">
          <div className="w-12 h-12 rounded-full bg-wine/10 text-wine flex items-center justify-center mx-auto text-h4">
            📦
          </div>
          <h3 className="font-display font-semibold text-wine text-body">Free Reverse Pickup</h3>
          <p className="text-caption text-muted leading-relaxed">Complimentary white-glove, insured courier pickup directly from your doorstep.</p>
        </div>

        <div className="bg-surface rounded-2xl border border-border/80 p-6 text-center space-y-3 shadow-2xs hover:border-wine/30 transition-all">
          <div className="w-12 h-12 rounded-full bg-wine/10 text-wine flex items-center justify-center mx-auto text-h4">
            ⚡
          </div>
          <h3 className="font-display font-semibold text-wine text-body">Instant Refunds</h3>
          <p className="text-caption text-muted leading-relaxed">Refunds processed to original payment method within 2-4 days post quality audit.</p>
        </div>
      </div>

      {/* DETAILED POLICY SECTIONS */}
      <div className="bg-surface rounded-2xl border border-border/80 p-6 sm:p-10 shadow-xs space-y-8 divide-y divide-border/60">
        
        {/* Section 1: 15-Day Return Policy */}
        <div className="space-y-3">
          <h2 className="font-display text-h3 font-semibold text-wine flex items-center gap-2">
            <span>✨</span> 15-Day 100% Money-Back Guarantee
          </h2>
          <p className="text-body text-ink/80 leading-relaxed font-normal">
            If for any reason you are not completely satisfied with your purchase, you may return the unused item within 15 days of delivery for a 100% full refund or store credit with no restocking fees or deductions.
          </p>
          <ul className="list-disc list-inside text-body text-muted space-y-1.5 pt-1">
            <li>Product must be in original unworn condition with security tags intact.</li>
            <li>Original BIS Hallmark certificates, IGI/SGL diamond certificates, and luxury velvet packaging must be returned.</li>
            <li>Customized products with personalized initials or custom metal engravings are non-refundable.</li>
          </ul>
        </div>

        {/* Section 2: Lifetime Exchange & Buyback */}
        <div className="pt-8 space-y-3">
          <h2 className="font-display text-h3 font-semibold text-wine flex items-center gap-2">
            <span>👑</span> Lifetime Exchange & Buyback Policy
          </h2>
          <p className="text-body text-ink/80 leading-relaxed font-normal">
            Luxe Jewels offers a transparent Lifetime Exchange Policy so you can upgrade your fine jewellery pieces whenever your style evolves.
          </p>
          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left text-caption border border-border rounded-xl overflow-hidden">
              <thead className="bg-[#FAF0F2] text-wine font-semibold uppercase tracking-wider">
                <tr>
                  <th className="p-3 border-b border-border">Jewellery Category</th>
                  <th className="p-3 border-b border-border">Lifetime Exchange Value</th>
                  <th className="p-3 border-b border-border">Lifetime Buyback (Cash)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-ink">
                <tr>
                  <td className="p-3 font-medium">Plain Solid Gold (22K / 18K)</td>
                  <td className="p-3 font-semibold text-emerald-700">100% of Gold Rate</td>
                  <td className="p-3 font-semibold text-emerald-700">95% of Gold Rate</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Natural Diamond Jewellery</td>
                  <td className="p-3 font-semibold text-emerald-700">100% Gold + 90% Diamonds</td>
                  <td className="p-3 font-semibold text-emerald-700">95% Gold + 80% Diamonds</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Gemstone Jewellery</td>
                  <td className="p-3 font-semibold text-emerald-700">100% Gold + 80% Gemstones</td>
                  <td className="p-3 font-semibold text-emerald-700">95% Gold + 70% Gemstones</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: Easy 3-Step Return Process */}
        <div className="pt-8 space-y-3">
          <h2 className="font-display text-h3 font-semibold text-wine flex items-center gap-2">
            <span>🔄</span> Easy 3-Step Return Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="bg-[#FAF0F2]/60 rounded-xl p-4 border border-wine/10">
              <span className="w-7 h-7 rounded-full bg-wine text-white text-caption font-bold flex items-center justify-center mb-2">1</span>
              <h4 className="font-semibold text-wine text-body">Initiate Return</h4>
              <p className="text-[11px] text-muted mt-1 leading-relaxed">Request a return under My Account &gt; Order History or contact our Concierge team.</p>
            </div>

            <div className="bg-[#FAF0F2]/60 rounded-xl p-4 border border-wine/10">
              <span className="w-7 h-7 rounded-full bg-wine text-white text-caption font-bold flex items-center justify-center mb-2">2</span>
              <h4 className="font-semibold text-wine text-body">Insured Doorstep Pickup</h4>
              <p className="text-[11px] text-muted mt-1 leading-relaxed">Our insured courier agent will inspect outer seals and pick up the package from your home.</p>
            </div>

            <div className="bg-[#FAF0F2]/60 rounded-xl p-4 border border-wine/10">
              <span className="w-7 h-7 rounded-full bg-wine text-white text-caption font-bold flex items-center justify-center mb-2">3</span>
              <h4 className="font-semibold text-wine text-body">Audit & Fast Refund</h4>
              <p className="text-[11px] text-muted mt-1 leading-relaxed">Once verified by our gemologists, your full refund is dispatched within 2-4 business days.</p>
            </div>
          </div>
        </div>

      </div>

      {/* INITIATE RETURN CTA BOX */}
      <div className="mt-12 text-center bg-wine/5 rounded-2xl border border-wine/15 p-8 max-w-2xl mx-auto space-y-3">
        <h3 className="font-display text-h5 font-semibold text-wine">
          Need to Request a Return or Exchange?
        </h3>
        <p className="text-caption text-muted leading-relaxed">
          Log into your account to select the item you wish to return, or speak directly with our luxury concierge.
        </p>
        <div className="pt-2 flex items-center justify-center gap-4">
          <Link
            href="/account"
            className="px-6 py-2.5 bg-[#80222F] text-white rounded-full text-caption font-semibold hover:bg-wine-dark transition-all cursor-pointer shadow-xs"
          >
            Go to My Orders
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-white border border-wine/30 text-wine rounded-full text-caption font-semibold hover:bg-wine hover:text-white transition-all cursor-pointer shadow-2xs"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </StaticPageLayout>
  );
}
