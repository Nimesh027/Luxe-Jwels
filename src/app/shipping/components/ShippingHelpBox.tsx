import Link from "next/link";
import Section from "@/components/common/Section";

export default function ShippingHelpBox() {
  return (
    <Section className="mt-12 text-center bg-wine/5 rounded-2xl border border-wine/15 p-8 max-w-2xl mx-auto space-y-3">
      <h3 className="font-display text-h5 font-semibold text-wine">
        Have Questions About Your Shipment?
      </h3>
      <p className="text-caption text-muted leading-relaxed">
        Our luxury concierge team is available to assist you with order status, address updates, or delivery scheduling.
      </p>
      <div className="pt-2 flex items-center justify-center gap-4">
        <Link
          href="/contact"
          className="px-6 py-2.5 bg-[#80222F] text-white rounded-full text-caption font-semibold hover:bg-wine-dark transition-all cursor-pointer shadow-xs"
        >
          Contact Concierge
        </Link>
        <a
          href="tel:18002660123"
          className="px-6 py-2.5 bg-white border border-wine/30 text-wine rounded-full text-caption font-semibold hover:bg-wine hover:text-white transition-all cursor-pointer shadow-2xs"
        >
          Call 1800-266-0123
        </a>
      </div>
    </Section>
  );
}
