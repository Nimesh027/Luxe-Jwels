import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import { TrophyIcon, SparklesIcon, LeafIcon, MedalIcon } from "@/components/icons";

export default function AwardsRecognition() {
  const awards = [
    {
      year: "2024",
      title: "National Jewellery Excellence Award",
      issuer: "Gems & Jewellery Trade Council of India",
      icon: <TrophyIcon size={28} className="text-wine group-hover:text-gold transition-colors" />,
    },
    {
      year: "2023",
      title: "Best Bridal Collection of the Year",
      issuer: "Retail Jeweller India Awards",
      icon: <SparklesIcon size={28} className="text-wine group-hover:text-gold transition-colors" />,
    },
    {
      year: "2021",
      title: "Pioneer in Sustainable Sourcing",
      issuer: "Ethical Luxury Forum",
      icon: <LeafIcon size={28} className="text-wine group-hover:text-gold transition-colors" />,
    },
    {
      year: "2019",
      title: "Master Goldsmith Recognition",
      issuer: "World Gold Council",
      icon: <MedalIcon size={28} className="text-wine group-hover:text-gold transition-colors" />,
    },
  ];

  return (
    <Section className="py-16 sm:py-24 bg-gradient-to-b from-surface to-background border-t border-border/40">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <SectionTitle
          tagline="Honors & Accolades"
          taglineClassName="text-gold tracking-[0.25em]"
          title="Recognized for Excellence"
          titleClassName="text-wine"
          description="Our unwavering commitment to purity, design, and craftsmanship has been celebrated by the most prestigious institutions in the global jewellery industry."
        />

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, idx) => (
            <div key={idx} className="group bg-white rounded-3xl p-8 border border-border/60 shadow-sm text-center flex flex-col items-center justify-between space-y-4 hover:shadow-xl hover:border-gold/40 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#FAF0F2] group-hover:bg-wine/10 border border-wine/15 group-hover:border-wine/30 flex items-center justify-center mb-2 shadow-2xs transition-colors duration-300">
                {award.icon}
              </div>
              <div className="space-y-2 flex-grow flex flex-col justify-center">
                <span className="text-caption font-bold text-gold tracking-widest">{award.year}</span>
                <h3 className="font-display font-semibold !text-h5 text-ink leading-snug">
                  {award.title}
                </h3>
              </div>
              <div className="w-8 h-[1px] bg-wine/20 my-2" />
              <p className="text-caption text-muted font-medium">
                {award.issuer}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications Banner */}
        <div className="mt-16 bg-white/50 border border-gold/20 rounded-2xl p-6 sm:p-8 flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-70 grayscale">
          {/* Using text placeholders since we don't have SVG logos of these entities */}
          <span className="font-display font-bold text-h5 text-wine/80">BIS Hallmark</span>
          <span className="font-display font-bold text-h5 text-wine/80">IGI Certified</span>
          <span className="font-display font-bold text-h5 text-wine/80">SGL Assessed</span>
          <span className="font-display font-bold text-h5 text-wine/80">Kimberley Process</span>
        </div>

      </div>
    </Section>
  );
}
