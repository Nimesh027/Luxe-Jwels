"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PlayIcon } from "@/components/icons";
import VideoModal from "@/components/common/VideoModal";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="theme-dark relative isolate overflow-hidden bg-espresso" aria-labelledby="hero-heading">
      <Image
        src="/images/revamp/hero-bride.jpg"
        alt="Bride wearing a Luxe Jewels diamond necklace and drop earrings"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[72%_center] lg:object-[80%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(23_17_12/0.92)_0%,rgb(30_21_14/0.78)_34%,rgb(43_30_20/0.25)_62%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-espresso-deep/85 via-espresso-deep/20 to-transparent md:hidden"
      />

      <div className="container flex min-h-[460px] sm:min-h-[520px] lg:min-h-[600px] items-end md:items-center py-12 sm:py-16">
        <div className="max-w-[560px]">
          <h1
            id="hero-heading"
            className="font-display text-display font-medium text-white tracking-[-0.01em]"
          >
            Timeless Elegance,
            <br />
            Crafted for You
          </h1>
          <p className="mt-4 sm:mt-5 text-[16px] sm:text-[18px] leading-relaxed text-white/90 max-w-md">
            Premium jewellery for every moment.
            <br />
            Tradition. Craftsmanship. Forever.
          </p>

          <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="/shop"
              className="inline-flex h-12 items-center justify-center rounded-[var(--radius-btn)] bg-white px-8 text-[15px] font-semibold text-ink hover:bg-cream transition-colors"
            >
              Shop Now
            </Link>
            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              className="group inline-flex items-center gap-3 text-[15px] font-medium text-white cursor-pointer"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/70 group-hover:bg-white group-hover:text-ink transition-colors">
                <PlayIcon size={14} className="ml-0.5 fill-current" />
              </span>
              Watch Video
            </button>
          </div>
        </div>
      </div>

      <VideoModal open={isVideoOpen} onClose={() => setIsVideoOpen(false)} title="The Craft of Luxe Jewels" />
    </section>
  );
}
