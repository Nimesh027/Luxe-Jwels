import Section from "@/components/common/Section";

export default function ShippingDetails() {
  return (
    <Section className="bg-surface rounded-2xl border border-border/80 p-6 sm:p-10 shadow-xs space-y-8 divide-y divide-border/60">
      {/* Section 1: Domestic Timelines */}
      <div className="space-y-3">
        <h2 className="font-display text-h3 font-semibold text-wine flex items-center gap-2">
          <span>📍</span> Domestic Delivery Timelines & Charges
        </h2>
        <p className="text-body text-ink/80 leading-relaxed font-normal">
          We offer complimentary express shipping for all orders across India. Orders are processed Monday through Saturday (excluding national holidays).
        </p>
        <div className="overflow-x-auto pt-2">
          <table className="w-full text-left text-caption border border-border rounded-xl overflow-hidden">
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
        <h2 className="font-display text-h3 font-semibold text-wine flex items-center gap-2">
          <span>✈️</span> International Luxury Shipping
        </h2>
        <p className="text-body text-ink/80 leading-relaxed font-normal">
          Luxe Jewels ships fine jewellery creations worldwide to over 40 countries including the United States, United Kingdom, United Arab Emirates, Canada, Australia, Singapore, and Europe via DHL Express and FedEx Priority.
        </p>
        <ul className="list-disc list-inside text-body text-muted space-y-1.5 pt-1">
          <li>International orders dispatch within 3-5 business days following custom clearance and hallmarking verification.</li>
          <li>Shipping charges are calculated at checkout based on destination country and total order weight.</li>
          <li>Custom duties and import taxes (if applicable) are handled per destination country regulations.</li>
        </ul>
      </div>

      {/* Section 3: Live Tracking */}
      <div className="pt-8 space-y-3">
        <h2 className="font-display text-h3 font-semibold text-wine flex items-center gap-2">
          <span>📱</span> Order Dispatch & Live GPS Tracking
        </h2>
        <p className="text-body text-ink/80 leading-relaxed font-normal">
          Once your piece passes final quality inspection and is handed over to our courier partner (BlueDart / Sequel Logistics / DHL), you will receive an immediate SMS and Email containing your AWB tracking number and live GPS tracking link.
        </p>
      </div>

      {/* Section 4: Security & OTP Delivery */}
      <div className="pt-8 space-y-3">
        <h2 className="font-display text-h3 font-semibold text-wine flex items-center gap-2">
          <span>🔒</span> Secure Delivery & OTP Verification
        </h2>
        <p className="text-body text-ink/80 leading-relaxed font-normal">
          To guarantee maximum security, high-value luxury packages require a One-Time Password (OTP) sent to your registered phone number or physical signature upon delivery. Please do not accept outer packages that show signs of damage, tampering, or broken security seals.
        </p>
      </div>
    </Section>
  );
}
