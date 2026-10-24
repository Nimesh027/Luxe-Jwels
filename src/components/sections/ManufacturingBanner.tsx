"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PlayIcon, ArrowRightIcon } from "@/components/icons";

export default function ManufacturingBanner() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <section className="w-full py-10 sm:py-12 bg-[#FCFAF8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#141210] min-h-[320px] sm:min-h-[380px] md:min-h-[420px] flex items-center shadow-lg border border-[#332E28]">
            {/* Background Manufacturing Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/revamp/manufacturing-craft.jpg"
                alt="Explore Our Manufacturing - From Raw Material to Masterpiece"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-center brightness-[0.75] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#141210]/95 via-[#141210]/60 to-transparent w-full md:w-[65%]" />
            </div>

            {/* Left Content */}
            <div className="relative z-10 p-6 sm:p-10 md:p-14 max-w-lg text-left">
              <span className="inline-block text-[11px] sm:text-[12px] font-medium tracking-[0.2em] text-[#B38E5D] mb-2">
                Behind The Brilliance
              </span>
              <h2 className="font-display text-[26px] sm:text-[34px] md:text-[40px] text-white font-normal leading-[1.15] mb-2">
                Explore Our Manufacturing
              </h2>
              <p className="font-body text-[13.5px] sm:text-[15px] text-[#DDD6CD] font-light leading-relaxed mb-6">
                From Raw Material to Masterpiece. Experience master craftsmanship passed down across generations.
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#B38E5D] hover:bg-[#9C7748] text-white text-[13.5px] font-medium transition-all shadow-md cursor-pointer active:scale-[0.98]"
                >
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/25">
                    <PlayIcon size={10} className="ml-0.5 fill-white" />
                  </span>
                  <span>Watch Video</span>
                </button>

                <Link
                  href="/manufacturing"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/30 hover:border-white bg-black/30 hover:bg-black/50 text-white text-[13.5px] font-medium transition-all backdrop-blur-xs active:scale-[0.98]"
                >
                  <span>Discover Process</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Center-Right Pulsing Video Button Overlay */}
            <div className="hidden sm:flex absolute right-12 md:right-24 z-10 items-center justify-center">
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="group relative flex items-center justify-center w-18 h-18 md:w-22 md:h-22 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 transition-transform duration-300 hover:scale-110 cursor-pointer shadow-2xl"
                aria-label="Play Manufacturing Video"
              >
                <div className="absolute inset-0 rounded-full animate-ping bg-[#B38E5D]/30" />
                <span className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#B38E5D] group-hover:bg-[#9C7748] text-white shadow-md">
                  <PlayIcon size={20} className="ml-1 fill-white" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isPlaying && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setIsPlaying(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 bg-[#1A1A1A] text-white border-b border-white/10">
              <span className="font-display text-lg tracking-wider text-[#B38E5D]">
                Manufacturing — From Raw Material to Masterpiece
              </span>
              <button
                type="button"
                onClick={() => setIsPlaying(false)}
                className="text-neutral-400 hover:text-white text-sm font-semibold tracking-wider px-2 py-1 rounded"
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
    </>
  );
}
