"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "@/components/common/Section";
import { useAppSelector } from "@/store/hooks";

export default function CategoryGrid() {
  const categories = useAppSelector((state) => state.categories.items);

  return (
    <Section title="Shop By Category">
      <div className="flex gap-6 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className="flex shrink-0 flex-col items-center gap-3 sm:shrink"
          >
            <div className="relative h-20 w-20 overflow-hidden rounded-full border border-border sm:h-24 sm:w-24">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <span className="text-center text-xs uppercase tracking-wide text-ink">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
