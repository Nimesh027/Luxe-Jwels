"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/common/Section";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import FeatureStrip from "@/components/sections/FeatureStrip";
import Instagram from "@/components/sections/Instagram";

export default function CareGuideClient() {
  const [activeCategory, setActiveCategory] = useState<string>("gold");

  const categories = [
    {
      id: "gold",
      title: "22K & 18K Gold Jewellery",
      icon: "✨",
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
      icon: "💎",
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
      icon: "👑",
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
      icon: "🐚",
      tips: [
        "Follow the Golden Rule: 'Last on, first off.' Put on pearls AFTER applying perfume, hairspray, and lotions.",
        "Clean pearls and organic gems only with a damp soft cloth; never use harsh cleaners or ultrasonic bath.",
        "Store flat rather than hanging to avoid stretching the silk thread on pearl strands.",
        "Restring pearl necklaces every 2–3 years if worn frequently.",
      ],
    },
  ];

  const dosAndDonts = [
    {
      type: "do",
      title: "Do: Individual Storage",
      desc: "Keep pieces separated in velvet-lined pouches or compartment boxes to avoid metal scratches.",
    },
    {
      type: "do",
      title: "Do: Apply Makeup First",
      desc: "Allow lotions, perfumes, and hairsprays to dry completely before adorning your fine jewellery.",
    },
    {
      type: "do",
      title: "Do: Annual Check-Ups",
      desc: "Bring your high jewellery to Luxe Jewels for complimentary professional prong check & ultrasonic dip.",
    },
    {
      type: "dont",
      title: "Don't: Swim or Exercise",
      desc: "Chlorine in swimming pools and saltwater can erode gold alloys and loosen gemstone mountings.",
    },
    {
      type: "dont",
      title: "Don't: Harsh Household Cleaners",
      desc: "Bleach, ammonia, and abrasive powders can permanently discolor solid gold and damage pearls.",
    },
    {
      type: "dont",
      title: "Don't: Expose to Extreme Heat",
      desc: "Sudden temperature changes can fracture sensitive natural gemstones like emeralds and tanzanites.",
    },
  ];

  return (
    <>
      <Section className="py-10 sm:py-16 bg-gradient-to-b from-[#FAF0F2]/40 via-surface to-background">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6">

          {/* BREADCRUMB NAVIGATION */}
          <Breadcrumbs items={[{ label: "Jewellery Care Guide" }]} />

          {/* HERO HEADER SECTION */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
            <div className="flex items-center justify-center gap-3 mb-1">
              <span className="h-[1px] w-8 bg-gold/60" />
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-wine/80">Luxe Lifetime Care</span>
              <span className="h-[1px] w-8 bg-gold/60" />
            </div>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-wine font-semibold tracking-tight leading-[1.15]">
              Jewellery Care Guide
            </h1>
            <p className="text-xs sm:text-base text-muted font-light leading-relaxed max-w-2xl mx-auto">
              Fine gold, certified diamonds, and precious gemstones are designed to endure for generations. Follow our master goldsmiths’ care instructions to preserve their eternal fire and brilliance.
            </p>
          </div>

          {/* CARE CATEGORY TABS & CARDS */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-3 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
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
                  className="bg-surface rounded-3xl border border-wine/20 p-6 sm:p-10 shadow-xs space-y-6 animate-in fade-in duration-300"
                >
                  <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                    <span className="text-3xl">{cat.icon}</span>
                    <h2 className="font-display text-xl sm:text-2xl font-semibold text-wine">
                      {cat.title} Care Tips
                    </h2>
                  </div>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cat.tips.map((tip, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 bg-[#FAF0F2]/50 rounded-2xl p-4 border border-wine/10 text-xs sm:text-sm text-ink/80 leading-relaxed"
                      >
                        <span className="w-6 h-6 rounded-full bg-wine/10 text-wine flex items-center justify-center shrink-0 font-bold text-xs">
                          {idx + 1}
                        </span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>

          {/* DO'S & DON'TS GRID */}
          <div className="mb-16">
            <div className="text-center space-y-2 mb-10">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-wine">
                Essential Do’s & Don’ts
              </h2>
              <p className="text-xs sm:text-sm text-muted">
                Simple habits to protect your heirloom jewellery every single day.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dosAndDonts.map((item, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl border p-6 space-y-2 shadow-2xs transition-all ${
                    item.type === "do"
                      ? "bg-surface border-emerald-200/80 hover:border-emerald-400/50"
                      : "bg-surface border-rose-200/80 hover:border-rose-400/50"
                  }`}
                >
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      item.type === "do"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-rose-100 text-rose-800"
                    }`}
                  >
                    {item.type === "do" ? "✓ RECOMMENDED" : "✕ AVOID"}
                  </span>
                  <h3 className="font-display font-semibold text-wine text-base pt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* COMPLIMENTARY BOUTIQUE SERVICE BOX */}
          <div className="bg-gradient-to-r from-wine/10 via-wine/5 to-wine/10 rounded-3xl border border-wine/20 p-8 sm:p-10 text-center max-w-3xl mx-auto space-y-4 shadow-sm">
            <span className="text-3xl block">✨</span>
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-wine">
              Complimentary Lifetime Care at Luxe Boutiques
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-lg mx-auto">
              Every Luxe Jewels piece includes lifetime complimentary cleaning, gold polishing, and stone tightening. Visit any flagship boutique worldwide for white-glove spa care.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#80222F] hover:bg-wine-dark text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md cursor-pointer active:scale-95"
              >
                BOOK CARE APPOINTMENT
              </Link>
            </div>
          </div>

        </div>
      </Section>

      <FeatureStrip />
      <Instagram />
    </>
  );
}
