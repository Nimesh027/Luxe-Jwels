import React from "react";
import { PolicyContainer, PolicyBlock } from "@/components/common/PolicySection";

export default function ReturnPolicies() {
  return (
    <PolicyContainer>
      
      {/* Section 1: 15-Day Return Policy */}
      <PolicyBlock
        title="15-Day 100% Money-Back Guarantee"
        description="If for any reason you are not completely satisfied with your purchase, you may return the unused item within 15 days of delivery for a 100% full refund or store credit with no restocking fees or deductions."
      >
        <ul className="list-disc list-inside text-body text-muted/90 font-light space-y-2 pt-2 marker:text-gold">
          <li>Product must be in original unworn condition with security tags intact.</li>
          <li>Original BIS Hallmark certificates, IGI/SGL diamond certificates, and luxury velvet packaging must be returned.</li>
          <li>Customized products with personalized initials or custom metal engravings are non-refundable.</li>
        </ul>
      </PolicyBlock>

      {/* Section 2: Lifetime Exchange & Buyback */}
      <PolicyBlock
        title="Lifetime Exchange & Buyback Policy"
        description="Luxe Jewels offers a transparent Lifetime Exchange Policy so you can upgrade your fine jewellery pieces whenever your style evolves."
      >
        <div className="overflow-x-auto pt-4">
          <table className="w-full text-left text-small border border-border/60 rounded-xl overflow-hidden shadow-xs">
            <thead className="bg-[#fbf8f2] text-ink font-semibold uppercase tracking-[0.08em] border-b border-gold/20">
              <tr>
                <th className="p-4 border-r border-border/40 font-medium">Jewellery Category</th>
                <th className="p-4 border-r border-border/40 font-medium">Lifetime Exchange Value</th>
                <th className="p-4 font-medium text-wine">Lifetime Buyback (Cash)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40 text-ink/80 bg-white">
              <tr className="hover:bg-gold/[0.02] transition-colors">
                <td className="p-4 font-medium border-r border-border/40">Plain Solid Gold (22K / 18K)</td>
                <td className="p-4 font-semibold text-wine border-r border-border/40">100% of Gold Rate</td>
                <td className="p-4 font-semibold text-wine">95% of Gold Rate</td>
              </tr>
              <tr className="hover:bg-gold/[0.02] transition-colors">
                <td className="p-4 font-medium border-r border-border/40">Natural Diamond Jewellery</td>
                <td className="p-4 font-semibold text-wine border-r border-border/40">100% Gold + 90% Diamonds</td>
                <td className="p-4 font-semibold text-wine">95% Gold + 80% Diamonds</td>
              </tr>
              <tr className="hover:bg-gold/[0.02] transition-colors">
                <td className="p-4 font-medium border-r border-border/40">Gemstone Jewellery</td>
                <td className="p-4 font-semibold text-wine border-r border-border/40">100% Gold + 80% Gemstones</td>
                <td className="p-4 font-semibold text-wine">95% Gold + 70% Gemstones</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PolicyBlock>

      {/* Section 3: Easy 3-Step Return Process */}
      <PolicyBlock
        title="Easy 3-Step Return Process"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-[#fbf8f2] rounded-xl p-6 border border-gold/20 shadow-sm hover:shadow-md transition-shadow">
            <span className="w-8 h-8 rounded-full bg-wine text-white text-small font-bold flex items-center justify-center mb-4">1</span>
            <h4 className="font-semibold text-ink text-body">Initiate Return</h4>
            <p className="text-small text-muted mt-2 leading-relaxed font-light">Request a return under My Account &gt; Order History or contact our Concierge team.</p>
          </div>

          <div className="bg-[#fbf8f2] rounded-xl p-6 border border-gold/20 shadow-sm hover:shadow-md transition-shadow">
            <span className="w-8 h-8 rounded-full bg-wine text-white text-small font-bold flex items-center justify-center mb-4">2</span>
            <h4 className="font-semibold text-ink text-body">Insured Doorstep Pickup</h4>
            <p className="text-small text-muted mt-2 leading-relaxed font-light">Our insured courier agent will inspect outer seals and pick up the package from your home.</p>
          </div>

          <div className="bg-[#fbf8f2] rounded-xl p-6 border border-gold/20 shadow-sm hover:shadow-md transition-shadow">
            <span className="w-8 h-8 rounded-full bg-wine text-white text-small font-bold flex items-center justify-center mb-4">3</span>
            <h4 className="font-semibold text-ink text-body">Audit & Fast Refund</h4>
            <p className="text-small text-muted mt-2 leading-relaxed font-light">Once verified by our gemologists, your full refund is dispatched within 2-4 business days.</p>
          </div>
        </div>
      </PolicyBlock>

    </PolicyContainer>
  );
}
