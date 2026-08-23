"use client";

import Image from "next/image";
import Section from "@/components/common/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { useAppSelector } from "@/store/hooks";

export default function ForHimForHer() {
  const tiles = useAppSelector((state) => state.siteContent.forHimForHer);

  return (
    <Section>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {tiles.map((tile) => (
          <Card key={tile.id} variant="promo" className="h-72">
            <Image src={tile.image} alt={tile.title} fill sizes="50vw" className="object-cover" />
            <div className="absolute inset-0 bg-ink/40" />
            <div className="relative flex h-full flex-col items-start justify-end gap-3 p-8">
              <h3 className="font-display text-2xl text-cream">{tile.title}</h3>
              <p className="text-sm text-cream/85">{tile.tagline}</p>
              <Button href={tile.href} variant="primary" size="sm">
                {tile.cta}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
