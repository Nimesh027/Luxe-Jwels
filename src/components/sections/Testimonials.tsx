"use client";

import { memo } from "react";

const testimonials = [
  {
    id: "t-1",
    name: "Pooja S.",
    city: "Ahmedabad",
    rating: 5,
    quote: "The quality is amazing and delivery was on time. My wife loved it!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
  },
  {
    id: "t-2",
    name: "Rahul M.",
    city: "Surat",
    rating: 5,
    quote: "Beautiful collection and excellent customer service. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
  },
  {
    id: "t-3",
    name: "Neha K.",
    city: "Rajkot",
    rating: 5,
    quote: "Best place to buy genuine diamond jewellery online. Will shop again!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
  },
  {
    id: "t-4",
    name: "Aakash P.",
    city: "Mumbai",
    rating: 5,
    quote: "Exceptional hallmark purity and lifetime care guarantee. Truly luxurious unboxing.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
  },
];

function TestimonialsComponent() {
  return (
    <section className="w-full bg-[#FAF7F2] py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-display text-[26px] sm:text-[34px] md:text-[38px] text-[#141414] font-medium tracking-tight">
            Loved by Thousands
          </h2>
          <p className="font-body text-[13.5px] sm:text-[15px] text-[#78716A] mt-1 font-normal">
            Real stories, genuine delight from our cherished patrons
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between bg-white rounded-2xl p-6 border border-[#EAE4DC] shadow-xs hover:shadow-md transition-shadow duration-300"
            >
              <div>
                {/* 5 Star Rating */}
                <div className="flex text-[#B38E5D] text-sm mb-3">
                  {"★".repeat(item.rating)}
                </div>

                {/* Quote */}
                <p className="font-body text-[13.5px] sm:text-[14px] text-[#3A3530] leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Customer Avatar & Location */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#F0EBE2]">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#E5DFD5]"
                />
                <div className="flex flex-col">
                  <span className="font-display text-[14.5px] font-semibold text-[#141414] leading-snug">
                    {item.name}
                  </span>
                  <span className="font-body text-[11.5px] text-[#8C827A]">
                    {item.city}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(TestimonialsComponent);
