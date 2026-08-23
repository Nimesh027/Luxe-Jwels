"use client";

import Image from "next/image";
import Section from "@/components/common/Section";
import Button from "@/components/ui/Button";
import { useAppSelector } from "@/store/hooks";

export default function BrandStory() {
  const brandStory = useAppSelector((state) => state.siteContent.brandStory);

  return (
    <Section>
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          <Image
            src={brandStory.image}
            alt={brandStory.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-4">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">{brandStory.title}</h2>
          <p className="text-sm text-muted">{brandStory.body}</p>
          <Button href={brandStory.cta.href} variant="dark">
            {brandStory.cta.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}
