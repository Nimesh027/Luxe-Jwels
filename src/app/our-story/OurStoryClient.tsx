"use client";

import Image from "next/image";
import { MedalIcon, ShieldCheckIcon, DiamondIcon, HeartIcon } from "@/components/icons";
import Button from "@/components/ui/Button";
import Instagram from "@/components/sections/Instagram";

// Rich Story Chapters
import FounderStory from "./components/FounderStory";
import OurPhilosophy from "./components/OurPhilosophy";
import CraftsmanshipProcess from "./components/CraftsmanshipProcess";
import MaterialsAndQuality from "./components/MaterialsAndQuality";
import DesignPhilosophy from "./components/DesignPhilosophy";
import OurArtisans from "./components/OurArtisans";
import Sustainability from "./components/Sustainability";
import Milestones from "./components/Milestones";
import AwardsRecognition from "./components/AwardsRecognition";
import CustomerPromise from "./components/CustomerPromise";
import PageHero from "@/components/common/PageHero";

const values = [
  { title: "Quality", subtitle: "100% BIS hallmarked purity", icon: MedalIcon },
  { title: "Trust", subtitle: "Transparent grading & sourcing", icon: ShieldCheckIcon },
  { title: "Craftsmanship", subtitle: "Master goldsmith artistry", icon: DiamondIcon },
  { title: "Customer First", subtitle: "Lifetime assistance & care", icon: HeartIcon },
];

const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "10K+", label: "Happy Customers" },
  { value: "500+", label: "Designs" },
  { value: "12", label: "Countries" },
];

export default function OurStoryClient() {
  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="Crafting dreams since 1995"
        image="/images/revamp/designer-model.jpg"
        breadcrumbs={[{ label: "Our Story" }]}
      />

      {/* Intro + values */}
      <section className="section-spacing-sm">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <h2 className="font-display text-h2 font-semibold text-ink">We are Luxe Jewels</h2>
            <p className="mt-4 text-[16px] sm:text-[17px] leading-relaxed text-muted">
              A legacy of trust, purity and timeless design. For over 25 years we have been crafting exquisite
              jewellery that celebrates life&apos;s most precious moments. From delicate solitaires to grand bridal
              suites, every creation is hand-finished by master artisans in our Ahmedabad atelier.
            </p>

            <h3 className="mt-10 font-display text-h3 font-semibold text-ink">Our Values</h3>
            <ul className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {values.map(({ title, subtitle, icon: Icon }) => (
                <li key={title} className="flex flex-col items-center text-center rounded-[var(--radius-card)] border border-border bg-white px-3 py-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft text-gold">
                    <Icon size={22} />
                  </span>
                  <p className="mt-3 font-display text-[18px] font-semibold text-ink leading-tight">{title}</p>
                  <p className="mt-1 text-[13px] leading-snug text-muted">{subtitle}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] border border-border">
            <Image
              src="/images/revamp/manufacturing-craft.jpg"
              alt="Luxe Jewels artisan hand-finishing a ring"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section aria-label="Luxe Jewels in numbers" className="border-y border-border bg-white">
        <dl className="container grid grid-cols-2 md:grid-cols-4 gap-y-8 py-10 sm:py-12 text-center">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col border-border ${idx % 2 === 1 ? "border-l" : ""} ${idx === 2 ? "md:border-l" : ""}`}
            >
              <dt className="order-2 mt-1 text-[14px] text-muted">{stat.label}</dt>
              <dd className="font-display text-[40px] sm:text-[48px] font-semibold leading-none text-gold">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Heritage split */}
      <section className="section-spacing-sm">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-border">
            <Image
              src="/images/brand/brand-story.jpg"
              alt="Goldsmith engraving a gold pendant"
              fill
              sizes="(max-width: 768px) 100vw, 650px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-eyebrow text-gold">Artisan Mastery</p>
            <h2 className="mt-2 font-display text-h2 font-semibold text-ink leading-tight">
              Honouring India&apos;s Rich Goldsmith Heritage
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-muted">
              We use traditional casting, hand-prong setting and microscope pavé methods refined over generations.
              Every piece of gold is hallmarked by BIS, ensuring ethical accountability and lifelong trust.
            </p>
            <Button href="/shop" className="mt-6">
              Explore Jewellery
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Deep Dive Chapters: Full Story Modules */}
      <div className="space-y-0">
        <FounderStory />
        <OurPhilosophy />
        <CraftsmanshipProcess />
        <MaterialsAndQuality />
        <DesignPhilosophy />
        <OurArtisans />
        <Sustainability />
        <Milestones />
        <AwardsRecognition />
        <CustomerPromise />
      </div>

      {/* 7. Instagram Community */}
      <Instagram />
    </>
  );
}
