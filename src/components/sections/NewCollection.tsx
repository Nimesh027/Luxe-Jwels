"use client";

import Image from "next/image";
import Section from "@/components/common/Section";
import Button from "@/components/ui/Button";
import { useAppSelector } from "@/store/hooks";

export default function NewCollection() {
  const newCollection = useAppSelector((state) => state.siteContent.newCollection);

  return (
    <Section className="!p-0" containerClassName="!p-0 !max-w-full">
      <div className="relative flex h-80 w-full items-center overflow-hidden sm:h-96">
        <Image
          src={newCollection.image}
          alt={newCollection.title}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative flex flex-col items-start gap-4 px-6 sm:px-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">
            {newCollection.subtitle}
          </span>
          <h2 className="max-w-xl font-display text-2xl text-cream sm:text-4xl">
            {newCollection.title}
          </h2>
          <Button href={newCollection.cta.href} variant="primary">
            {newCollection.cta.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}
