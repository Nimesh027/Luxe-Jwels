"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PlayIcon } from "@/components/icons";

const processSteps = [
  {
    step: "1. Design",
    description: "Concept to design",
    icon: "✍️",
  },
  {
    step: "2. Casting",
    description: "Molten metal to casting",
    icon: "🔥",
  },
  {
    step: "3. Setting",
    description: "Stone setting",
    icon: "💎",
  },
  {
    step: "4. Polishing",
    description: "Finishing & Polishing",
    icon: "✨",
  },
  {
    step: "5. Quality Check",
    description: "Final inspection",
    icon: "🔍",
  },
];

const journeyStages = [
  { title: "Raw Material", image: "/images/revamp/manufacturing-craft.jpg" },
  { title: "Casting", image: "/images/product/gold-chain.jpg" },
  { title: "Setting", image: "/images/product/diamond-ring.jpg" },
  { title: "Polishing", image: "/images/product/women-necklace-showcase.png" },
  { title: "Final Product", image: "/images/revamp/ring-macro.jpg" },
];

export default function ManufacturingPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="w-full bg-[#FAF7F2] min-h-screen">
      {/* 1. Hero Banner */}
      <div className="relative overflow-hidden bg-[#181512] py-14 sm:py-20 border-b border-[#332E27]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/revamp/manufacturing-craft.jpg"
            alt="Our Manufacturing"
            fill
            priority
            className="object-cover object-center brightness-[0.6] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181512] via-[#181512]/60 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h1 className="font-display text-[32px] sm:text-[44px] md:text-[50px] text-white font-normal leading-tight mb-2">
            Our Manufacturing
          </h1>
          <p className="font-body text-[14px] sm:text-[16px] text-[#DDD6CD] font-light">
            Tradition | Craftsmanship | Perfection
          </p>
        </div>
      </div>

      {/* 2. Video Preview Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#141210] aspect-[16/8] max-h-[460px] flex items-center justify-center shadow-xl border border-[#3A332B] group">
          <Image
            src="/images/revamp/manufacturing-craft.jpg"
            alt="From Raw Material to Masterpiece"
            fill
            className="object-cover object-center brightness-[0.7] group-hover:scale-103 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex flex-col items-center text-center px-4">
            <span className="font-display text-[22px] sm:text-[32px] text-white font-normal mb-4 drop-shadow-md">
              From Raw Material to Masterpiece
            </span>
            <button
              type="button"
              onClick={() => setIsVideoModalOpen(true)}
              className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#B38E5D] hover:bg-[#9C7748] text-white shadow-2xl transition-transform duration-200 hover:scale-110 cursor-pointer"
              aria-label="Play Video"
            >
              <PlayIcon size={24} className="ml-1 fill-white" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. 5 Step Process Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-[#EAE4DC] shadow-xs"
            >
              <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#E5DFD5] flex items-center justify-center text-[22px] mb-3">
                {step.icon}
              </div>
              <h3 className="font-display text-[15px] font-semibold text-[#141414] leading-snug mb-1">
                {step.step}
              </h3>
              <p className="font-body text-[12px] text-[#78716A]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Watch the Journey Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-8">
          <h2 className="font-display text-[26px] sm:text-[32px] text-[#141414] font-medium">
            Watch the Journey
          </h2>
          <p className="font-body text-[13.5px] text-[#78716A] mt-1">
            Every step is inspected and hallmarked with extreme precision
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {journeyStages.map((stage, idx) => (
            <div
              key={idx}
              className="group flex flex-col rounded-xl overflow-hidden bg-white border border-[#EAE4DC] shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-square w-full bg-[#FAF7F2] overflow-hidden">
                <Image
                  src={stage.image}
                  alt={stage.title}
                  fill
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                />
              </div>
              <div className="p-3 text-center">
                <span className="font-display text-[13.5px] font-medium text-[#141414]">
                  {stage.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 bg-[#1A1A1A] text-white border-b border-white/10">
              <span className="font-display text-lg text-[#B38E5D]">
                Manufacturing — Masterpiece in the Making
              </span>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="text-neutral-400 hover:text-white text-sm tracking-wider"
              >
                Close ✕
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <video
                src="/videos/diamond-ring.mp4"
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
