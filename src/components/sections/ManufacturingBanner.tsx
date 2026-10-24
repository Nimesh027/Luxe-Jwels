"use client";

import { useState } from "react";
import { PlayIcon } from "@/components/icons";
import ImageBanner from "@/components/common/ImageBanner";
import VideoModal from "@/components/common/VideoModal";
import Button from "@/components/ui/Button";

export default function ManufacturingBanner() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-cream pb-[clamp(36px,4.5vw,64px)]" aria-label="Our manufacturing">
      <div className="container">
        <ImageBanner
          image="/images/revamp/manufacturing-craft.jpg"
          imageAlt="Artisan setting a diamond at the Luxe Jewels workshop"
          title="Explore Our Manufacturing"
          subtitle="From raw material to masterpiece"
          size="md"
          overlay={
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label="Play manufacturing video"
              className="absolute right-6 sm:right-[18%] top-1/2 -translate-y-1/2 hidden sm:flex h-20 w-20 items-center justify-center rounded-full border border-white/70 bg-white/15 text-white backdrop-blur-sm hover:bg-white hover:text-ink transition-colors cursor-pointer"
            >
              <PlayIcon size={24} className="ml-1 fill-current" />
            </button>
          }
        >
          <Button
            variant="outline"
            colorTheme="light"
            size="sm"
            onClick={() => setIsPlaying(true)}
            leftIcon={<PlayIcon size={12} className="fill-current" />}
          >
            Watch Video
          </Button>
          <Button variant="text" colorTheme="light" size="sm" href="/manufacturing">
            Discover the process →
          </Button>
        </ImageBanner>
      </div>

      <VideoModal
        open={isPlaying}
        onClose={() => setIsPlaying(false)}
        title="From Raw Material to Masterpiece"
      />
    </section>
  );
}
