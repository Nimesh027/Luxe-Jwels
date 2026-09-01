import Section from "@/components/common/Section";

export default function Sustainability() {
  const initiatives = [
    {
      title: "Ethical Sourcing",
      description: "We trace our gold and gemstones directly to responsible mines that adhere strictly to human rights and labor standards. We never compromise on origin.",
      icon: "🌍"
    },
    {
      title: "Recycled Metals",
      description: "Over 40% of our production utilizes refined, recycled 22K and 18K gold, significantly reducing our environmental footprint without sacrificing purity.",
      icon: "♻️"
    },
    {
      title: "Responsible Diamonds",
      description: "Every diamond is conflict-free and compliant with the Kimberley Process. We also offer lab-grown alternatives for the eco-conscious connoisseur.",
      icon: "💎"
    },
    {
      title: "Sustainable Packaging",
      description: "Our signature Luxe Jewels boxes are crafted from FSC-certified paper and recycled velvet, designed to be kept forever or recycled completely.",
      icon: "🎁"
    }
  ];

  return (
    <Section className="py-16 sm:py-24 bg-white border-y border-border/40">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* Text Content */}
          <div className="w-full lg:w-1/3 space-y-6 text-center lg:text-left">
            <span className="text-caption font-bold uppercase tracking-[0.25em] text-emerald-700/80">
              Conscious Luxury
            </span>
            <h2 className="font-display text-h3 sm:text-h2 font-semibold text-wine leading-tight">
              A Commitment to the Earth
            </h2>
            <div className="w-12 h-[2px] bg-emerald-700/30 mx-auto lg:mx-0" />
            <p className="text-body text-muted leading-relaxed font-light">
              True luxury should not come at the cost of our planet or its people. We are dedicated to pioneering sustainable and ethical practices within the high jewellery industry.
            </p>
          </div>

          {/* Grid */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {initiatives.map((item, idx) => (
                <div key={idx} className="bg-surface/50 rounded-[2rem] p-8 border border-emerald-900/10 hover:border-emerald-900/30 transition-colors shadow-2xs">
                  <div className="text-h4 mb-4 opacity-80">{item.icon}</div>
                  <h3 className="font-display font-semibold !text-h5 text-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="text-caption text-muted font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </Section>
  );
}
