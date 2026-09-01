import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";

export default function Milestones() {
  const milestones = [
    {
      year: "2015",
      title: "The Foundation",
      description: "Luxe Jewels is officially founded in Mumbai, transitioning from a private family atelier to a boutique fine jewellery brand."
    },
    {
      year: "2018",
      title: "First Royal Collection",
      description: "We debuted our signature 'Heritage' collection, establishing our hallmark blend of traditional Kundan setting with contemporary forms."
    },
    {
      year: "2022",
      title: "10,000+ Patrons",
      description: "A monumental year as we celebrated serving over 10,000 satisfied customers and launched our flagship digital concierge service."
    },
    {
      year: "2026",
      title: "Global Expansion",
      description: "Luxe Jewels expands its footprint internationally, bringing Indian royal craftsmanship to discerning clients across North America and Europe."
    }
  ];

  return (
    <Section className="relative overflow-hidden">

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-wine/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <SectionTitle
        tagline="Our Journey"
        taglineClassName="text-gold tracking-[0.25em]"
        title="Milestones of Excellence"
        titleClassName="text-wine"
      />

      {/* Timeline container */}
      <div className="relative">

        <div className="space-y-16 md:space-y-24">
          {milestones.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const isLast = idx === milestones.length - 1;
            return (
              <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-start ${isEven ? 'md:flex-row-reverse' : ''} group`}>

                {/* Connecting Line to next item */}
                {!isLast && (
                  <div className="absolute left-8 md:left-1/2 top-8 md:top-14 w-[2px] h-[calc(100%+4rem)] md:h-[calc(100%+6rem)] bg-gold/20 md:-translate-x-1/2 -z-10" />
                )}

                {/* Content Box */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 md:text-right'} transition-transform duration-500 group-hover:-translate-y-2`}>
                  <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-border/80 shadow-sm group-hover:shadow-xl group-hover:border-gold/30 transition-all duration-300 relative z-10">
                    <div className="text-gold text-small font-bold uppercase mb-3 tracking-widest">{item.year}</div>
                    <h3 className="font-display font-semibold text-h4 text-ink mb-4">
                      {item.title}
                    </h3>
                    <p className="text-body text-muted font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Year Marker / Dot */}
                <div className="absolute left-8 md:left-1/2 top-8 md:top-14 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-surface border-[4px] border-white shadow-md flex items-center justify-center ring-1 ring-border group-hover:ring-gold group-hover:scale-110 transition-all duration-500 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-wine/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="font-display font-semibold text-h5 md:text-h4 text-wine relative z-10">
                      {item.year}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </Section>
  );
}
