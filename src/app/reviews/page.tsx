"use client";

import { useState } from "react";
import Image from "next/image";

const reviewStats = {
  rating: 4.8,
  totalReviews: 1245,
  distribution: [
    { stars: 5, percentage: 82 },
    { stars: 4, percentage: 12 },
    { stars: 3, percentage: 4 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 },
  ],
};

const customerReviews = [
  {
    id: "r1",
    name: "Pooja S.",
    city: "Ahmedabad",
    rating: 5,
    title: "Magnificent bridal set",
    comment:
      "The diamond halo ring and matching necklace exceeded all my expectations. The craftsmanship is world-class and hallmarking certificate gives 100% confidence.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
    date: "12 Oct 2026",
  },
  {
    id: "r2",
    name: "Rahul M.",
    city: "Surat",
    rating: 5,
    title: "Exceptional service and quick delivery",
    comment:
      "Ordered custom couple bands for our anniversary. The team assisted with sizing and the tamper-proof luxury velvet box unboxing was unforgettable.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    date: "28 Sep 2026",
  },
  {
    id: "r3",
    name: "Neha K.",
    city: "Rajkot",
    rating: 5,
    title: "Best place for certified diamonds",
    comment:
      "Sparkle is phenomenal and cut grade is pristine. Highly recommend Luxe Jewels to everyone looking for authentic craftsmanship.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
    date: "15 Sep 2026",
  },
];

const instagramPosts = [
  "/images/instagram/insta-1.png",
  "/images/instagram/insta-2.png",
  "/images/instagram/insta-3.png",
  "/images/instagram/insta-4.png",
];

export default function ReviewsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="w-full bg-[#FAF7F2] min-h-screen">
      {/* 1. Header Banner */}
      <div className="relative overflow-hidden bg-[#181512] py-14 sm:py-20 border-b border-[#332E27]">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h1 className="font-display text-[32px] sm:text-[44px] md:text-[50px] text-white font-normal leading-tight mb-2">
            Happy Customers
          </h1>
          <p className="font-body text-[14px] sm:text-[16px] text-[#DDD6CD] font-light">
            Real Stories, Genuine Reviews
          </p>
        </div>
      </div>

      {/* 2. Rating Breakdown & Customer Reviews Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Score & Star Distribution (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#EAE4DC] shadow-xs">
            <div className="text-center pb-6 border-b border-[#EAE4DC]">
              <span className="font-display text-[52px] font-semibold text-[#141414] leading-none block">
                {reviewStats.rating}
              </span>
              <div className="flex justify-center text-[#B38E5D] text-lg my-2">
                {"★".repeat(5)}
              </div>
              <p className="font-body text-[13px] text-[#78716A]">
                Based on {reviewStats.totalReviews.toLocaleString()} Reviews
              </p>
            </div>

            {/* Distribution Bars */}
            <div className="py-6 space-y-2.5 border-b border-[#EAE4DC]">
              {reviewStats.distribution.map((d) => (
                <div key={d.stars} className="flex items-center gap-3 text-[13px]">
                  <span className="w-7 text-[#141414] font-medium">{d.stars} ★</span>
                  <div className="flex-1 h-2 rounded-full bg-[#FAF7F2] overflow-hidden border border-[#EAE4DC]">
                    <div
                      className="h-full bg-[#B38E5D] rounded-full"
                      style={{ width: `${d.percentage}%` }}
                    />
                  </div>
                  <span className="w-9 text-right text-[#78716A] text-[12px]">
                    {d.percentage}%
                  </span>
                </div>
              ))}
            </div>

            {/* Write a Review Button */}
            <div className="pt-6 text-center">
              <p className="text-[13px] text-[#78716A] mb-3">
                Share Your Experience with our jewellery
              </p>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="w-full py-3 rounded-xl bg-[#B38E5D] hover:bg-[#9C7748] text-white text-[14px] font-medium tracking-wide shadow-md transition-colors cursor-pointer"
              >
                Write a Review
              </button>
            </div>
          </div>

          {/* Right: Reviews List (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-display text-[22px] font-semibold text-[#141414] mb-4">
              What Our Customers Say
            </h2>

            {customerReviews.map((r) => (
              <div
                key={r.id}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EAE4DC] shadow-xs"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={r.avatar}
                      alt={r.name}
                      className="w-10 h-10 rounded-full object-cover border border-[#EAE4DC]"
                    />
                    <div>
                      <span className="font-display text-[15px] font-semibold text-[#141414] leading-snug block">
                        {r.name}
                      </span>
                      <span className="text-[12px] text-[#78716A]">{r.city}</span>
                    </div>
                  </div>
                  <span className="text-[12px] text-[#8C827A]">{r.date}</span>
                </div>

                <div className="flex text-[#B38E5D] text-xs mb-2">{"★".repeat(r.rating)}</div>
                <h3 className="font-display text-[15px] font-semibold text-[#141414] mb-1">
                  {r.title}
                </h3>
                <p className="font-body text-[13.5px] text-[#554E46] leading-relaxed font-light">
                  {r.comment}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Instagram / Social UGC Gallery */}
        <div className="mt-16 pt-12 border-t border-[#EAE4DC]">
          <div className="text-center mb-8">
            <span className="text-[12px] font-semibold tracking-widest text-[#B38E5D] block mb-1">
              #LuxeJewels
            </span>
            <h2 className="font-display text-[24px] sm:text-[30px] text-[#141414] font-medium">
              Seen On You
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((post, idx) => (
              <div
                key={idx}
                className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-[#EAE4DC] shadow-xs group"
              >
                <Image
                  src={post}
                  alt="Customer showcase"
                  fill
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Write a Review Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#EAE4DC]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#EAE4DC]">
              <h3 className="font-display text-[20px] font-semibold text-[#141414]">
                Write a Review
              </h3>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="text-[#78716A] hover:text-[#141414] text-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <span className="text-[36px] block mb-2">🎉</span>
                <p className="font-display text-[18px] font-semibold text-[#141414]">
                  Thank you for your review!
                </p>
                <p className="text-[13px] text-[#78716A] mt-1">
                  Your feedback helps fellow jewellery lovers find their perfect piece.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4 text-[13px]"
              >
                <div>
                  <label className="block font-medium text-[#141414] mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pooja Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE4DC] focus:border-[#B38E5D] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium text-[#141414] mb-1">City</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ahmedabad"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE4DC] focus:border-[#B38E5D] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium text-[#141414] mb-1">Rating</label>
                  <select className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE4DC] focus:border-[#B38E5D] focus:outline-none bg-white">
                    <option value="5">★★★★★ - Excellent</option>
                    <option value="4">★★★★☆ - Very Good</option>
                    <option value="3">★★★☆☆ - Average</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium text-[#141414] mb-1">Your Review</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share your experience with the craftsmanship and delivery..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE4DC] focus:border-[#B38E5D] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#B38E5D] hover:bg-[#9C7748] text-white font-medium shadow-md transition-colors cursor-pointer"
                >
                  Submit Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
