import Image from "next/image";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";

export default function CraftsmanshipProcess() {
  const processes = [
    {
      id: "01",
      title: "Design & Conception",
      description: "Every masterpiece begins as a hand-drawn sketch. Our visionary designers translate raw inspiration into detailed technical drawings, carefully plotting the placement of each gemstone and the precise curvature of the metal.",
      image: "/images/collections/wedding-collection.jpg",
    },
    {
      id: "02",
      title: "Casting & Forging",
      description: "Using ethically sourced 22K and 18K gold, our master casters melt and pour the metal into custom molds. The gold is then forged, annealed, and shaped to create a structurally flawless foundation.",
      image: "/images/collections/temple-collection.jpg",
    },
    {
      id: "03",
      title: "Precision Setting",
      description: "Our setters meticulously place each certified diamond and precious gemstone. Using microscopic precision, stones are secured in prong, bezel, or pavé settings to maximize brilliance and ensure lifelong durability.",
      image: "/images/collections/classic-collection.jpg",
    },
    {
      id: "04",
      title: "Polishing & Finishing",
      description: "The piece undergoes rigorous polishing using traditional techniques. Artisans smooth every edge and enhance the metal's natural luster, achieving the signature Luxe Jewels mirror finish.",
      image: "/images/collections/couple-collection.jpg",
    },
    {
      id: "05",
      title: "Quality Assurance & Hallmark",
      description: "Before reaching you, each piece passes a strict 15-point quality inspection. Finally, it receives the official Government of India BIS Hallmark—the ultimate seal of 100% purity and authenticity.",
      image: "/images/collections/wedding-collection.jpg",
    },
  ];

  return (
    <Section className="py-16 sm:py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <SectionTitle
          tagline="The Making of a Masterpiece"
          taglineClassName="text-gold tracking-[0.25em]"
          title="Our Craftsmanship Process"
          titleClassName="text-wine"
          description="Witness the journey from a simple sketch to a timeless heirloom, shaped by hands that have perfected their art over decades."
        />

        {/* Process Timeline (Alternating) */}
        <div className="space-y-16 sm:space-y-24">
          {processes.map((process, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={process.id}
                className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
              >
                {/* Image Column */}
                <div className={`w-full lg:w-1/2 relative aspect-square sm:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg border border-wine/10 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <Image
                    src={process.image}
                    alt={process.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-wine/5 mix-blend-overlay" />
                </div>

                {/* Text Column */}
                <div className={`w-full lg:w-1/2 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="font-display text-h2 text-gold/30 font-bold block mb-2">
                    {process.id}
                  </span>
                  <h3 className="font-display text-h4 sm:text-h3 font-semibold text-ink">
                    {process.title}
                  </h3>
                  <div className="w-10 h-[2px] bg-wine/30" />
                  <p className="text-body text-muted leading-relaxed font-light">
                    {process.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </Section>
  );
}
