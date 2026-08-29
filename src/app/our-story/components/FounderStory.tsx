import Image from "next/image";
import Section from "@/components/common/Section";

export default function FounderStory() {
  return (
    <Section className="py-16 sm:py-24 bg-surface">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* IMAGE COLUMN */}
          <div className="order-2 lg:order-1 relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/collections/couple-collection.jpg"
              alt="The Luxe Jewels Founders"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-wine/10 mix-blend-overlay" />
          </div>

          {/* CONTENT COLUMN */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-caption font-bold uppercase tracking-[0.25em] text-gold">
                Our Genesis
              </span>
              <h2 className="font-display text-h3 sm:text-h2 font-semibold text-wine leading-tight">
                A Legacy Born from Passion and Precision
              </h2>
            </div>
            
            <div className="w-12 h-[2px] bg-gold" />
            
            <div className="space-y-4 text-body text-muted leading-relaxed font-light">
              <p>
                Founded in 1994, Luxe Jewels began as a humble goldsmith workshop in the historic artisan district of Mumbai. Our founders, generations of master jewellers, envisioned a space where the rich, regal heritage of Indian craftsmanship could seamlessly merge with contemporary, global aesthetics.
              </p>
              <p>
                What started with handcrafting bespoke bridal trousseaus for close family quickly grew into a renowned sanctuary for connoisseurs of fine jewellery. Every piece was—and still is—treated as a deeply personal work of art, forged with patience and an uncompromising dedication to perfection.
              </p>
              <p>
                Today, Luxe Jewels stands as a testament to that original vision: a brand that honors the purity of 22K gold, the brilliance of conflict-free diamonds, and the irreplaceable touch of human hands. We don't just make jewellery; we craft heirloom memories destined to be passed down through generations.
              </p>
            </div>
            
            <div className="pt-6">
              <p className="font-display text-h5 text-ink italic opacity-80">
                "True luxury is not loud. It is the quiet confidence of exceptional craftsmanship."
              </p>
              <span className="block mt-2 text-caption font-semibold uppercase tracking-widest text-wine">
                — The Founders
              </span>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}
