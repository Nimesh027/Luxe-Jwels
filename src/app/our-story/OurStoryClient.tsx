"use client";

import Image from "next/image";
import Link from "next/link";
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

const values = [
  {
    title: "Quality",
    subtitle: "100% BIS Hallmarked Purity",
    icon: "🏆",
  },
  {
    title: "Trust",
    subtitle: "Transparent Grading & Sourcing",
    icon: "🤝",
  },
  {
    title: "Craftsmanship",
    subtitle: "Master Goldsmith Artistry",
    icon: "💎",
  },
  {
    title: "Customer First",
    subtitle: "Lifetime Assistance & Care",
    icon: "❤️",
  },
];

const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "10K+", label: "Happy Customers" },
  { value: "500+", label: "Designs" },
  { value: "12", label: "Countries" },
];

export default function OurStoryClient() {
  return (
    <div className="w-full bg-[#FAF7F2] min-h-screen">
      {/* 1. Header Banner */}
      <div className="relative overflow-hidden bg-[#181512] py-14 sm:py-20 border-b border-[#332E27]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/revamp/hero-bride.jpg"
            alt="Our Story"
            fill
            priority
            className="object-cover object-center brightness-[0.5] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181512] via-[#181512]/60 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h1 className="font-display text-[32px] sm:text-[44px] md:text-[50px] text-white font-normal leading-tight mb-2">
            Our Story
          </h1>
          <p className="font-body text-[14px] sm:text-[16px] text-[#DDD6CD] font-light">
            Crafting Dreams Since 1995
          </p>
        </div>
      </div>

      {/* 2. We are Luxe Jewels Narrative */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-4xl text-center">
        <h2 className="font-display text-[26px] sm:text-[34px] text-[#141414] font-medium mb-4">
          We are Luxe Jewels
        </h2>
        <p className="font-body text-[15px] sm:text-[16.5px] text-[#554E46] leading-relaxed font-light mb-6">
          A legacy of trust, purity, and timeless designs. For over 25 years, we have been crafting exquisite jewellery that celebrates life’s most precious moments. From delicate solitaires to grand bridal suites, every creation is hand-finished by master artisans in our Ahmedabad atelier.
        </p>
        <div className="w-16 h-0.5 bg-[#B38E5D] mx-auto" />
      </div>

      {/* 3. Our Values */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 max-w-5xl">
        <div className="text-center mb-8">
          <h3 className="font-display text-[22px] sm:text-[28px] text-[#141414] font-medium">
            Our Values
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {values.map((v, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-[#EAE4DC] shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-[#FAF7F2] border border-[#E5DFD5] flex items-center justify-center text-[24px] mb-3">
                {v.icon}
              </div>
              <h4 className="font-display text-[16px] font-semibold text-[#141414] mb-1">
                {v.title}
              </h4>
              <p className="font-body text-[12px] text-[#78716A]">
                {v.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Stats Row */}
      <div className="w-full bg-white border-y border-[#EAE4DC] py-12 sm:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-display text-[36px] sm:text-[46px] font-semibold text-[#141414] leading-tight">
                  {stat.value}
                </span>
                <span className="font-body text-[13px] sm:text-[14px] text-[#78716A] mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Brand Heritage Image Split */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#EAE4DC] shadow-sm">
            <Image
              src="/images/revamp/manufacturing-craft.jpg"
              alt="Craftsmanship in Action"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[12px] font-semibold tracking-wider text-[#B38E5D]">
              Artisan Mastery
            </span>
            <h3 className="font-display text-[26px] sm:text-[32px] text-[#141414] font-medium leading-tight">
              Honoring India’s Rich Goldsmith Heritage
            </h3>
            <p className="font-body text-[14px] text-[#554E46] leading-relaxed font-light">
              We employ traditional casting, hand-prongs setting, and microscope pavé methods that have been refined for generations. Every piece of gold is hallmarked by BIS, ensuring ethical accountability and lifelong trust.
            </p>
            <div className="pt-2">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#B38E5D] hover:bg-[#9C7748] text-white text-[13.5px] font-medium tracking-wide shadow-md transition-colors"
              >
                Explore Jewellery
              </Link>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
}
