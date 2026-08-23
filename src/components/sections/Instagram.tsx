"use client";

import Image from "next/image";
import Section from "@/components/common/Section";
import { useAppSelector } from "@/store/hooks";

export default function Instagram() {
  const instagram = useAppSelector((state) => state.siteContent.instagram);

  return (
    <Section title="Follow Us On Instagram" subtitle={instagram.handle}>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
        {instagram.images.map((image, index) => (
          <div key={index} className="relative aspect-square overflow-hidden">
            <Image
              src={image}
              alt={`Instagram post ${index + 1}`}
              fill
              sizes="(max-width: 768px) 33vw, 16vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-wide text-ink underline underline-offset-4 hover:text-gold"
        >
          View More On Instagram
        </a>
      </div>
    </Section>
  );
}
