import Section from "@/components/common/Section";
import Image from "next/image";

export default function OurArtisans() {
  const artisans = [
    {
      name: "Ramesh Verma",
      role: "Master Gem Setter",
      experience: "35 Years of Experience",
      quote: "The stone speaks to you if you are patient enough to listen. Every setting is a silent promise of security and brilliance.",
      image: "/images/collections/temple-collection.jpg",
    },
    {
      name: "Abdul Kadir",
      role: "Head Polisher & Finisher",
      experience: "28 Years of Experience",
      quote: "Polishing gold is not just about making it shine. It is about revealing the metal's soul, removing imperfections until only pure light remains.",
      image: "/images/collections/wedding-collection.jpg",
    },
    {
      name: "Meenakshi Desai",
      role: "Lead Enamel Artist",
      experience: "20 Years of Experience",
      quote: "Meenakari is painting with fire and glass. It requires a steady hand and a calm mind to bring vibrant colors to life on cold metal.",
      image: "/images/collections/classic-collection.jpg",
    },
  ];

  return (
    <Section className="py-16 sm:py-24 bg-[#F9F7F5]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-caption font-bold uppercase tracking-[0.25em] text-gold">
            The Hands Behind the Magic
          </span>
          <h2 className="font-display text-h3 sm:text-h2 font-semibold text-wine leading-tight">
            Meet Our Master Artisans
          </h2>
          <p className="text-body text-muted font-light leading-relaxed">
            Our workshop is home to over 300 legacy karigars (craftsmen) hailing from families that have served Indian royalty for centuries. We are proud to share their stories.
          </p>
        </div>

        {/* Artisans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artisans.map((artisan, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-[2rem] bg-white shadow-sm hover:shadow-xl transition-all duration-500 border border-border/80 hover:border-gold/30">
              
              {/* Image Container */}
              <div className="relative h-72 w-full overflow-hidden bg-surface">
                <Image
                  src={artisan.image}
                  alt={artisan.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                {/* Gradient overlay for text legibility if needed, but here text is below */}
              </div>

              {/* Content Container */}
              <div className="p-8 space-y-4">
                <div className="space-y-1">
                  <h3 className="font-display font-semibold text-h4 text-ink">
                    {artisan.name}
                  </h3>
                  <div className="flex flex-col gap-1">
                    <span className="text-caption font-bold uppercase tracking-wider text-wine/80">
                      {artisan.role}
                    </span>
                    <span className="text-[11px] text-muted font-medium">
                      {artisan.experience}
                    </span>
                  </div>
                </div>
                
                <div className="w-8 h-[1px] bg-gold/50" />
                
                <p className="text-body text-muted leading-relaxed font-light italic">
                  "{artisan.quote}"
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}
