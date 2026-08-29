import Section from "@/components/common/Section";
import Image from "next/image";

export default function MaterialsAndQuality() {
  const materials = [
    {
      title: "22K & 18K Solid Gold",
      description: "Our foundation is built on uncompromising purity. We exclusively use solid 22-karat and 18-karat gold, revered globally for its rich color and lasting value. Every piece carries the official BIS Hallmark, a government guarantee of authenticity.",
      image: "/images/collections/temple-collection.jpg",
    },
    {
      title: "Conflict-Free Diamonds",
      description: "We source only natural, untreated diamonds graded EF (colorless) and VVS (very, very slightly included). Every diamond over 0.30 carats is independently certified by IGI or SGL, guaranteeing ethical sourcing via the Kimberley Process.",
      image: "/images/collections/wedding-collection.jpg",
    },
    {
      title: "Precious Gemstones",
      description: "From vivid Colombian emeralds to deep Burmese rubies, our colored gemstones are hand-selected for optimal hue, saturation, and tone. We trace our gems from ethical mines to our workshops to ensure responsible practices.",
      image: "/images/collections/classic-collection.jpg",
    },
  ];

  return (
    <Section className="py-16 sm:py-24 bg-surface">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-caption font-bold uppercase tracking-[0.25em] text-gold">
            Pure Elements
          </span>
          <h2 className="font-display text-h3 sm:text-h2 font-semibold text-wine leading-tight">
            Materials & Unyielding Quality
          </h2>
          <p className="text-body text-muted font-light leading-relaxed">
            A masterpiece is only as enduring as the elements from which it is forged. We travel the world to ethically source the finest materials nature has to offer.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {materials.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-[2rem] overflow-hidden border border-border/80 shadow-sm group hover:shadow-lg hover:border-gold/30 transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-6 left-6 font-display font-semibold text-h4 text-white">
                  {item.title}
                </h3>
              </div>
              <div className="p-8">
                <p className="text-body text-muted font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}
