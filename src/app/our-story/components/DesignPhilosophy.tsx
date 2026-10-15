import Section from "@/components/common/Section";
import Image from "next/image";

export default function DesignPhilosophy() {
  return (
    <Section className="bg-linear-to-b from-offwhite via-white to-offwhite overflow-hidden">
      <div className="container max-w-6xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-split items-center">
          
          {/* Content Column */}
          <div className="space-y-6">
            <span className="text-caption font-bold tracking-widest text-gold-dark">
              Design Philosophy
            </span>
            <h2 className="font-display text-h3 sm:text-h2 font-semibold text-brown leading-tight">
              Rooted in Tradition, Designed for Today
            </h2>
            <div className="w-12 h-0.5 bg-gold" />
            <p className="text-body text-muted leading-relaxed font-light">
              Luxe Jewels exists at the intersection of heritage and modernity. We do not believe in mass production. Our design ethos revolves around creating distinct, recognizable silhouettes that feel deeply rooted in Indian royal aesthetics, yet possess a sleek, contemporary minimalism that resonates globally.
            </p>
            
            <ul className="space-y-4 pt-4">
              {[
                { title: "Minimal Elegance", desc: "Clean lines and understated luxury that never screams for attention." },
                { title: "Heritage Motifs", desc: "Subtle nods to traditional architecture and historical royal crests." },
                { title: "Comfort First", desc: "Ergonomically designed for everyday wear without compromising on scale." }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-gold-dark mt-1">✧</span>
                  <div>
                    <h4 className="font-display font-semibold text-body text-ink">{item.title}</h4>
                    <p className="text-caption text-muted font-light leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Mosaic Image Collage Column */}
          <div className="relative w-full h-[clamp(440px,calc(360px+25vw),720px)]">
            {/* Primary Large Image */}
            <div className="absolute top-0 right-0 w-[70%] h-[65%] rounded-4xl overflow-hidden shadow-2xl border border-gold/20 z-10">
              <Image
                src="/images/collections/diamond-collection.jpg"
                alt="Intricate traditional design"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Secondary Overlapping Image */}
            <div className="absolute bottom-10 left-0 w-[55%] h-[50%] rounded-4xl overflow-hidden shadow-2xl border border-gold/20 z-20">
              <Image
                src="/images/collections/couple-collection.jpg"
                alt="Contemporary minimal design"
                fill
                className="object-cover"
              />
            </div>

            {/* Accent Element */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-32 h-32 bg-brown/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-10 w-24 h-24 bg-gold/10 rounded-full blur-2xl -z-10" />
          </div>

        </div>

      </div>
    </Section>
  );
}
