"use client";

import Image from "next/image";
import Section from "@/components/common/Section";
import Card from "@/components/ui/Card";
import { useAppSelector } from "@/store/hooks";

export default function Collections() {
  const collections = useAppSelector((state) => state.collections.items);

  return (
    <Section title="Collections That Speak Style" viewAllHref="/collections">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {collections.map((collection) => (
          <Card
            key={collection.id}
            variant="collection"
            href={`/collections/${collection.slug}`}
            className="aspect-[3/4]"
          >
            <Image
              src={collection.image}
              alt={collection.name}
              fill
              sizes="(max-width: 768px) 50vw, 20vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <p className="text-sm font-medium text-cream">{collection.name}</p>
              <p className="text-xs text-cream/75">{collection.tagline}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
