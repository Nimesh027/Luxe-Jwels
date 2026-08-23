"use client";

import Image from "next/image";
import Carousel from "@/components/common/Carousel";
import Section from "@/components/common/Section";
import Rating from "@/components/ui/Rating";
import { useAppSelector } from "@/store/hooks";

export default function Testimonials() {
  const testimonials = useAppSelector((state) => state.testimonials.items);

  return (
    <Section title="What Our Customers Say">
      <Carousel
        showDots
        showArrows={false}
        items={testimonials.map((testimonial) => (
          <div key={testimonial.id} className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 text-center">
            <Rating value={testimonial.rating} />
            <p className="text-base text-ink">&ldquo;{testimonial.quote}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image src={testimonial.avatar} alt={testimonial.name} fill sizes="40px" className="object-cover" />
              </div>
              <span className="text-sm font-medium text-ink">{testimonial.name}</span>
            </div>
          </div>
        ))}
      />
    </Section>
  );
}
