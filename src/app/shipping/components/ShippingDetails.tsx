import Section from "@/components/common/Section";

export default function ShippingDetails() {
  return (
    <Section className="bg-white">
      <div className="space-y-5">
        {/* Section 1: Domestic Timelines */}
        <div className="space-y-4">
          <h2 className="font-display !text-h4 font-semibold text-ink flex items-center">
            Domestic Delivery Timelines & Charges
          </h2>
          <p className="text-body text-muted leading-relaxed font-light">
            We offer complimentary express shipping for all orders across India. Orders are processed Monday through Saturday (excluding national holidays).
          </p>
          <div className="overflow-x-auto pt-4">
            <table className="w-full text-left text-small border border-border/60 rounded-xl overflow-hidden shadow-xs">
              <thead className="bg-[#fbf8f2] text-ink font-semibold uppercase tracking-[0.08em] border-b border-gold/20">
                <tr>
                  <th className="p-4 border-r border-border/40 font-medium">Shipping Type</th>
                  <th className="p-4 border-r border-border/40 font-medium">Estimated Delivery</th>
                  <th className="p-4 font-medium text-wine">Shipping Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 text-ink/80 bg-white">
                <tr className="hover:bg-gold/[0.02] transition-colors">
                  <td className="p-4 font-medium border-r border-border/40">Standard Insured Delivery</td>
                  <td className="p-4 font-light border-r border-border/40">3 to 5 Business Days</td>
                  <td className="p-4 font-semibold text-wine">FREE</td>
                </tr>
                <tr className="hover:bg-gold/[0.02] transition-colors">
                  <td className="p-4 font-medium border-r border-border/40">Metro Priority Air Express</td>
                  <td className="p-4 font-light border-r border-border/40">1 to 2 Business Days</td>
                  <td className="p-4 font-semibold text-wine">FREE on orders &gt; ₹25,000</td>
                </tr>
                <tr className="hover:bg-gold/[0.02] transition-colors">
                  <td className="p-4 font-medium border-r border-border/40">Bespoke / Custom Creations</td>
                  <td className="p-4 font-light border-r border-border/40">7 to 10 Business Days</td>
                  <td className="p-4 font-semibold text-wine">FREE</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2: International Shipping */}
        <div className="space-y-4">
          <h2 className="font-display !text-h4 font-semibold text-ink flex items-center">
            International Luxury Shipping
          </h2>
          <p className="text-body text-muted leading-relaxed font-light">
            Luxe Jewels ships fine jewellery creations worldwide to over 40 countries including the United States, United Kingdom, United Arab Emirates, Canada, Australia, Singapore, and Europe via DHL Express and FedEx Priority.
          </p>
          <ul className="list-disc list-inside text-body text-muted/90 font-light space-y-2 pt-2 marker:text-gold">
            <li>International orders dispatch within 3-5 business days following custom clearance and hallmarking verification.</li>
            <li>Shipping charges are calculated at checkout based on destination country and total order weight.</li>
            <li>Custom duties and import taxes (if applicable) are handled per destination country regulations.</li>
          </ul>
        </div>

        {/* Section 3: Live Tracking */}
        <div className="space-y-4">
          <h2 className="font-display !text-h4 font-semibold text-ink flex items-center">
            Order Dispatch & Live GPS Tracking
          </h2>
          <p className="text-body text-muted leading-relaxed font-light">
            Once your piece passes final quality inspection and is handed over to our courier partner (BlueDart / Sequel Logistics / DHL), you will receive an immediate SMS and Email containing your AWB tracking number and live GPS tracking link.
          </p>
        </div>

        {/* Section 4: Security & OTP Delivery */}
        <div className="space-y-4">
          <h2 className="font-display !text-h4 font-semibold text-ink flex items-center">
            Secure Delivery & OTP Verification
          </h2>
          <p className="text-body text-muted leading-relaxed font-light">
            To guarantee maximum security, high-value luxury packages require a One-Time Password (OTP) sent to your registered phone number or physical signature upon delivery. Please do not accept outer packages that show signs of damage, tampering, or broken security seals.
          </p>
        </div>
      </div>
    </Section>
  );
}
