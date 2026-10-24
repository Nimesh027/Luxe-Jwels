"use client";

import { useState } from "react";
import Image from "next/image";
import {
  PlayIcon,
  CrownIcon,
  GoldBarIcon,
  DiamondIcon,
  SparklesIcon,
  JewelerLoupeIcon,
} from "@/components/icons";
import PageHero from "@/components/common/PageHero";
import SectionTitle from "@/components/common/SectionTitle";
import VideoModal from "@/components/common/VideoModal";
import Button from "@/components/ui/Button";

const processSteps = [
  { step: "Design", description: "Concept to design", icon: CrownIcon },
  { step: "Casting", description: "Molten metal to casting", icon: GoldBarIcon },
  { step: "Setting", description: "Stone setting", icon: DiamondIcon },
  { step: "Polishing", description: "Finishing & polishing", icon: SparklesIcon },
  { step: "Quality Check", description: "Final inspection", icon: JewelerLoupeIcon },
];

const journeyStages = [
  { title: "Raw Material", image: "/images/collections/gold-collection.jpg", alt: "Raw gold ready for casting" },
  { title: "Casting", image: "/images/brand/brand-story.jpg", alt: "Goldsmith shaping a cast piece" },
  { title: "Setting", image: "/images/revamp/custom-jewellery-banner.jpg", alt: "Artisan setting stones by hand" },
  { title: "Polishing", image: "/images/products/wedding-bands.jpg", alt: "Polished gold wedding bands" },
  { title: "Final Product", image: "/images/revamp/ring-macro.jpg", alt: "Finished diamond ring" },
];

export default function ManufacturingClient() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <PageHero
        title="Our Manufacturing"
        subtitle="Tradition | Craftsmanship | Perfection"
        image="/images/revamp/manufacturing-craft.jpg"
        breadcrumbs={[{ label: "Manufacturing" }]}
      />

      {/* Video */}
      <section className="section-spacing-sm">
        <div className="container">
          <button
            type="button"
            onClick={() => setIsVideoOpen(true)}
            aria-label="Play video: From raw material to masterpiece"
            className="theme-dark group relative isolate flex aspect-[4/3] sm:aspect-[16/7] w-full items-center justify-center overflow-hidden rounded-[var(--radius-card)] bg-espresso cursor-pointer"
          >
            <Image
              src="/images/revamp/manufacturing-craft.jpg"
              alt=""
              fill
              sizes="(max-width: 1384px) 100vw, 1320px"
              className="-z-10 object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <span aria-hidden="true" className="absolute inset-0 -z-10 bg-espresso-deep/55" />
            <span className="flex flex-col items-center gap-5 px-6 text-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/70 bg-white/15 text-white backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-ink">
                <PlayIcon size={26} className="ml-1 fill-current" />
              </span>
              <span className="font-display text-h2 font-medium text-white">From Raw Material to Masterpiece</span>
              <span className="text-[15px] text-white/85">Watch our in-house manufacturing process</span>
            </span>
          </button>
        </div>
      </section>

      {/* Process */}
      <section className="pb-[clamp(36px,4.5vw,64px)]" aria-labelledby="process-heading">
        <div className="container">
          <SectionTitle id="process-heading" title="Our Process" description="Five stages, one standard of perfection" />
          <ol className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {processSteps.map(({ step, description, icon: Icon }, idx) => (
              <li
                key={step}
                className="flex flex-col items-center rounded-[var(--radius-card)] border border-border bg-white px-4 py-6 text-center last:col-span-2 sm:last:col-span-1"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-soft text-gold">
                  <Icon size={24} />
                </span>
                <p className="mt-4 font-display text-[19px] font-semibold text-ink leading-tight">
                  <span className="text-gold">{idx + 1}.</span> {step}
                </p>
                <p className="mt-1 text-[14px] text-muted">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Journey */}
      <section className="border-t border-border bg-white section-spacing-sm" aria-labelledby="journey-heading">
        <div className="container">
          <SectionTitle
            id="journey-heading"
            title="Watch the Journey"
            description="Every step is inspected and hallmarked with extreme precision"
          />
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {journeyStages.map((stage) => (
              <li key={stage.title}>
                <figure>
                  <div className="relative aspect-square overflow-hidden rounded-[var(--radius-card)] border border-border bg-cream-dark">
                    <Image
                      src={stage.image}
                      alt={stage.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 260px"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-2.5 text-center text-[15px] font-medium text-ink">{stage.title}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Button href="/contact">Book a Workshop Visit</Button>
          </div>
        </div>
      </section>

      <VideoModal
        open={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        title="From Raw Material to Masterpiece"
      />
    </>
  );
}
