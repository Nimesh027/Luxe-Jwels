"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PlayIcon } from "@/components/icons";

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full bg-[#121110] overflow-hidden select-none">
        {/* Main Hero Container - Sleeker, compact luxury banner height */}
        <div className="relative min-h-[380px] sm:min-h-[440px] md:min-h-[480px] lg:min-h-[520px] xl:min-h-[560px] w-full flex items-center">
          {/* Background Image of Luxury Model / Jewellery */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/revamp/hero-bride.jpg"
              alt="Luxe Jewels - Timeless Elegance, Crafted for You"
              fill
              priority
              sizes="100vw"
              className="object-cover object-right lg:object-[80%_center] brightness-[0.95] contrast-[1.04]"
            />

            {/* Gradient Overlays for Guaranteed Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e0c0a] via-[#0e0c0a]/85 via-45% to-transparent sm:w-[72%] lg:w-[62%] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0a]/90 via-transparent to-transparent sm:hidden pointer-events-none" />
          </div>

          {/* Hero Content Overlay */}
          <div className="container mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 relative z-10 py-8 sm:py-12 lg:py-14">
            <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl text-left">
              {/* Main Headline */}
              <h1 className="font-display text-[36px] sm:text-[48px] md:text-[58px] lg:text-[68px] xl:text-[76px] text-white font-normal leading-[1.08] sm:leading-[1.05] tracking-tight mb-3.5 sm:mb-4 drop-shadow-sm">
                Timeless Elegance, <br />
                Crafted for You
              </h1>

              {/* Subheading */}
              <p className="font-body text-[14.5px] sm:text-[16px] md:text-[17.5px] lg:text-[19px] text-[#EDE7DE]/90 font-light leading-relaxed max-w-lg lg:max-w-xl mb-5 sm:mb-7 drop-shadow-xs">
                Premium jewellery for every moment. <br className="hidden sm:inline" />
                Tradition. Craftsmanship. Forever.
              </p>

              {/* Action Buttons with Divider */}
              <div className="flex items-center gap-4 sm:gap-6">
                {/* Shop Now Button: Clean Crisp White Rectangle */}
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 rounded-[3px] bg-white hover:bg-[#F4EFEA] text-[#141414] text-[14px] sm:text-[15.5px] font-semibold tracking-wide shadow-sm transition-all duration-200 active:scale-[0.98]"
                >
                  Shop Now
                </Link>

                {/* Vertical Divider */}
                <div className="h-6 sm:h-7 w-[1px] bg-white/30" />

                {/* Watch Video: Outlined Circular Play Icon + Text */}
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-flex items-center gap-3 text-white hover:text-[#E8D8C3] transition-colors duration-200 cursor-pointer group"
                >
                  <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/60 group-hover:border-white bg-white/10 group-hover:bg-white/20 transition-all duration-200">
                    <PlayIcon size={13} className="ml-0.5 fill-white" />
                  </span>
                  <span className="text-[14px] sm:text-[15.5px] font-normal tracking-wide">
                    Watch Video
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Preview */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 bg-[#1A1A1A] text-white border-b border-white/10">
              <span className="font-display text-lg tracking-wider text-[#B38E5D]">
                The Craft of Luxe Jewels
              </span>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="text-neutral-400 hover:text-white text-sm font-semibold tracking-wider px-2 py-1 rounded"
              >
                Close ✕
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
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
    </>
  );
}
