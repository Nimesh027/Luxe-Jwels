import Section from "@/components/common/Section";

export default function CustomerPromise() {
  const promises = [
    {
      title: "100% Authenticity",
      description: "Every piece is certified and hallmarked, guaranteeing the highest standard of gold and gemstone purity."
    },
    {
      title: "Lifetime Support",
      description: "Our relationship doesn't end at purchase. We offer complimentary cleaning and maintenance for life."
    },
    {
      title: "Quality Guarantee",
      description: "Backed by our master artisans, we stand fiercely behind the structural integrity of every design."
    },
    {
      title: "Personalised Service",
      description: "Experience dedicated, one-on-one consultations with our expert jewellery advisors for a truly bespoke journey."
    }
  ];

  return (
    <Section className="py-16 sm:py-20 bg-wine-dark text-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">

        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <h2 className="font-display text-h3 sm:text-h2 font-semibold text-white tracking-wide">
            The Luxe Jewels Promise
          </h2>
          <p className="text-body text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
            When you invest in our heritage, we invest in you. Our promises are the bedrock of the trust we have built over decades.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {promises.map((promise, idx) => (
            <div key={idx} className="pt-6 sm:pt-0 sm:px-6 first:pt-0 first:px-0 text-center space-y-3">
              <h3 className="font-display font-semibold !text-h5 text-gold">
                {promise.title}
              </h3>
              <p className="text-caption text-white/70 font-light leading-relaxed">
                {promise.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}
