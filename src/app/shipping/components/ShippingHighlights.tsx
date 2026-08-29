import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";

const highlights = [
  {
    icon: "🚚",
    title: "Free Domestic Shipping",
    description: "Complimentary insured express shipping across all pin codes in India.",
  },
  {
    icon: "🛡️",
    title: "100% Transit Insured",
    description: "Your package is fully insured from our vault until delivered to your hands.",
  },
  {
    icon: "🎁",
    title: "Discreet Packaging",
    description: "Delivered in unbranded, tamper-proof outer boxes with a luxury velvet box inside.",
  },
  {
    icon: "⚡",
    title: "Fast Dispatch",
    description: "Ready-to-ship pieces dispatch within 24-48h; custom orders within 3-5 days.",
  },
];

export default function ShippingHighlights() {
  return (
    <Section>
      <SectionTitle 
        title="Key Shipping Highlights" 
        description="Experience our premium delivery service designed for your peace of mind." 
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {highlights.map((item, index) => (
          <div key={index} className="bg-surface rounded-2xl border border-border/80 p-6 text-center space-y-3 shadow-2xs hover:border-wine/30 transition-all">
            <div className="w-12 h-12 rounded-full bg-wine/10 text-wine flex items-center justify-center mx-auto text-h4">
              {item.icon}
            </div>
            <h3 className="font-display font-semibold text-wine text-body">{item.title}</h3>
            <p className="text-caption text-muted leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
