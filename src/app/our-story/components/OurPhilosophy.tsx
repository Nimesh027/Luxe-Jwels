import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";

export default function OurPhilosophy() {
  const philosophies = [
    {
      title: "Uncompromising Craftsmanship",
      description:
        "We believe that true luxury lies in the details. Every piece is meticulously hand-finished by master artisans, ensuring that the setting, polish, and weight distribution achieve absolute perfection.",
    },
    {
      title: "Timeless Design",
      description:
        "Jewellery should outlive trends. We design heirlooms that blend the grandeur of Indian royal heritage with elegant, contemporary minimalism, meant to be worn and cherished for generations.",
    },
    {
      title: "Celebrating Individuality",
      description:
        "No two stories are the same. We believe fine jewellery should be an intimate expression of your unique journey, offering bespoke customizations that bring your personal narrative to life.",
    },
  ];

  return (
    <Section className="py-16 sm:py-24 bg-gradient-to-b from-background to-[#FAF0F2]/40">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <SectionTitle
          tagline="Our Philosophy"
          taglineClassName="text-gold tracking-[0.25em]"
          title="What We Believe In"
          titleClassName="text-wine"
          description="At Luxe Jewels, we measure our success not by the volume we produce, but by the emotional resonance of the pieces we craft."
        />

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {philosophies.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/60 backdrop-blur-sm border border-wine/10 rounded-[2rem] p-8 sm:p-10 text-center space-y-4 shadow-sm hover:shadow-md transition-all duration-300 hover:border-gold/30"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-wine/5 flex items-center justify-center mb-6">
                <span className="text-gold text-h5">✦</span>
              </div>
              <h3 className="font-display font-semibold !text-h5 text-ink">
                {item.title}
              </h3>
              <p className="text-body text-muted font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}
