"use client";

import { useState } from "react";
import Section from "@/components/common/Section";

const GoldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /><path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" /></svg>
);

const DiamondIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 13L2 9Z" /><path d="M11 3 8 9l4 13" /><path d="M13 3l3 6-4 13" /></svg>
);

const PolkiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" /></svg>
);

const PearlIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8" /><path d="M12 4v.01" /><path d="M12 20v.01" /><path d="M4 12h.01" /><path d="M20 12h.01" /><path d="M6.34 6.34v.01" /><path d="M17.66 17.66v.01" /><path d="M17.66 6.34v.01" /><path d="M6.34 17.66v.01" /></svg>
);

const categories = [
  {
    id: "gold",
    title: "22K & 18K Gold Jewellery",
    icon: <GoldIcon />,
    tips: [
      "Soak gold pieces in warm water mixed with a few drops of mild dish soap for 10–15 minutes.",
      "Use an extra-soft toothbrush to gently clean intricate filigree and under stone mounts.",
      "Rinse thoroughly with clean warm water and pat completely dry with a soft microfiber cloth.",
      "Avoid wearing gold while using chlorine bleach, swimming pools, or harsh cleaning chemicals.",
    ],
  },
  {
    id: "diamonds",
    title: "Natural Diamonds & Solitaires",
    icon: <DiamondIcon />,
    tips: [
      "Diamonds naturally attract skin oils, lotions, and soaps. Clean them regularly to restore fire & brilliance.",
      "Gently brush with lukewarm soapy water or use a certified diamond cleaning solution.",
      "Schedule an annual professional prong inspection with our jewellers to ensure stones remain secure.",
      "Store diamond pieces separately in soft velvet pouches to prevent scratching softer metals.",
    ],
  },
  {
    id: "polki",
    title: "Kundan & Heritage Polki",
    icon: <PolkiIcon />,
    tips: [
      "Keep Polki and Kundan jewellery strictly away from water, moisture, and extreme humidity.",
      "Never submerge Kundan pieces in liquid as water can seep into the foil backing behind stones.",
      "Wipe gently with a dry, clean cotton or flannel cloth after each wear before storing.",
      "Store in airtight velvet-lined boxes with anti-tarnish paper strips.",
    ],
  },
  {
    id: "pearls",
    title: "Pearls & Colored Gemstones",
    icon: <PearlIcon />,
    tips: [
      "Follow the Golden Rule: 'Last on, first off.' Put on pearls AFTER applying perfume, hairspray, and lotions.",
      "Clean pearls and organic gems only with a damp soft cloth; never use harsh cleaners or ultrasonic bath.",
      "Store flat rather than hanging to avoid stretching the silk thread on pearl strands.",
      "Restring pearl necklaces every 2–3 years if worn frequently.",
    ],
  },
];

export default function CareCategoryTabs() {
  const [activeCategory, setActiveCategory] = useState<string>("gold");

  return (
    <Section className="!py-4 mb-8 sm:mb-12" containerClassName="max-w-5xl">
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-3 rounded-full text-caption font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeCategory === cat.id
                ? "bg-[#80222F] text-white shadow-md"
                : "bg-surface border border-border/80 text-ink/80 hover:border-wine/40 hover:text-wine"
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.title}</span>
          </button>
        ))}
      </div>

      {/* SELECTED CATEGORY CARD SHOWCASE */}
      {categories
        .filter((c) => c.id === activeCategory)
        .map((cat) => (
          <div
            key={cat.id}
            className="bg-surface rounded-[2rem] border border-border/80 p-6 sm:p-10 shadow-sm animate-in fade-in zoom-in-95 duration-500"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Left: Title & Icon */}
              <div className="md:w-1/3 shrink-0 flex flex-col items-center md:items-start text-center md:text-left gap-4 pb-6 md:pb-0 md:pr-8 md:border-r border-border/60 w-full">
                <div className="w-20 h-20 rounded-full bg-wine/5 flex items-center justify-center text-h2 shadow-sm border border-wine/10">
                  {cat.icon}
                </div>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-wine mb-2">
                    {cat.title}
                  </h2>
                  <p className="text-caption text-muted uppercase tracking-widest font-medium">
                    Care Instructions
                  </p>
                </div>
              </div>

              {/* Right: Tips List */}
              <ul className="md:w-2/3 grid grid-cols-1 gap-4 w-full">
                {cat.tips.map((tip, idx) => (
                  <li
                    key={idx}
                    className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-border/40 hover:border-gold/40 hover:shadow-md transition-all duration-300"
                  >
                    <span className="w-8 h-8 rounded-full bg-wine/5 group-hover:bg-wine text-wine group-hover:text-white flex items-center justify-center shrink-0 font-bold text-caption transition-colors duration-300">
                      {idx + 1}
                    </span>
                    <span className="text-body text-ink/80 leading-relaxed pt-1 font-light">
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
    </Section>
  );
}
