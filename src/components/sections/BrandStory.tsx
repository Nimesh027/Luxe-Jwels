"use client";

import Image from "next/image";
import Link from "next/link";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

export default function LuxuryTrustBanner() {
  return (
    <section className="w-full py-6 sm:py-8 lg:py-10 bg-[#FAF7F2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#141210] min-h-[210px] sm:min-h-[235px] md:min-h-[255px] lg:min-h-[270px] flex items-center shadow-lg border border-[#3A332B]/40 ring-1 ring-black/10">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/revamp/luxury-trust-banner.jpg"
              alt="Luxury. Trust. Forever."
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-center lg:object-[center_35%] brightness-[0.78] contrast-[1.08]"
              priority={false}
            />
            {/* Seamless Full-Width Linear Gradient Overlay - No hard cutoffs */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, rgba(14,12,10,0.96) 0%, rgba(14,12,10,0.88) 30%, rgba(14,12,10,0.55) 52%, rgba(14,12,10,0.18) 75%, rgba(14,12,10,0) 100%)",
              }}
            />
            {/* Mobile bottom-to-top gradient for compact screens */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent sm:hidden pointer-events-none" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 sm:px-10 md:px-12 py-7 sm:py-9 max-w-xl text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] font-medium tracking-[0.2em] text-[#EAD8BF] uppercase mb-2.5 sm:mb-3">
              ✦ Certified Authentic & Hallmarked
            </span>
            <h2 className="font-display text-[26px] sm:text-[34px] md:text-[40px] text-white font-normal leading-[1.15] mb-2 sm:mb-2.5 tracking-tight">
              Luxury. Trust. Forever.
            </h2>
            <p className="font-body text-[13px] sm:text-[14px] text-white/80 font-light max-w-md mb-4 sm:mb-5 leading-relaxed">
              Every jewel is hallmarked and certified to celebrate your most precious moments for eternity.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-white text-[#181512] hover:bg-[#F6EFE6] text-[12px] sm:text-[13px] font-medium tracking-wider uppercase shadow-md hover:shadow-xl transition-all duration-200 active:scale-[0.98] group"
            >
              <span>Shop Collection</span>
              <ArrowRightIcon className="w-3.5 h-3.5 text-[#8F6C39] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

