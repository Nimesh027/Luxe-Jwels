import Section from "@/components/common/Section";

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
    <Section className="py-16 sm:py-24 bg-surface relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-wine/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-caption font-bold uppercase tracking-[0.25em] text-gold">
            Our Journey
          </span>
          <h2 className="font-display text-h3 sm:text-h2 font-semibold text-wine leading-tight">
            Milestones of Excellence
          </h2>
        </div>

        {/* Horizontal Scrollable/Responsive Timeline */}
        <div className="relative">
          
          {/* Connecting Line (Hidden on Mobile, Visible on md+) */}
          <div className="hidden md:block absolute top-[4.5rem] left-0 w-full h-[2px] bg-wine/10" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center space-y-4">
                
                {/* Year Marker */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border border-gold/40 shadow-sm flex items-center justify-center relative z-10 mx-auto">
                  <span className="font-display font-semibold text-h4 sm:text-h3 text-wine">
                    {item.year}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-4 px-2 space-y-2">
                  <h3 className="font-display font-semibold text-body text-ink">
                    {item.title}
                  </h3>
                  <p className="text-caption text-muted font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
              </div>
            ))}
          </div>

        </div>

      </div>
    </Section>
  );
}
