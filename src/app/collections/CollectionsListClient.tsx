"use client";

import Image from "next/image";
import Section from "@/components/common/Section";
import Card from "@/components/ui/Card";
import { useAppSelector } from "@/store/hooks";

export default function CollectionsListClient() {
  const collections = useAppSelector((state) => state.collections.items);

  return (
    <Section title="Collections" subtitle="Explore jewellery curated for every story.">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((collection) => (
          <Card
            key={collection.id}
            variant="collection"
            href={`/collections/${collection.slug}`}
            className="aspect-[4/3]"
          >
            <Image
              src={collection.image}
              alt={collection.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <p className="font-display text-xl text-cream">{collection.name}</p>
              <p className="text-sm text-cream/75">{collection.tagline}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
