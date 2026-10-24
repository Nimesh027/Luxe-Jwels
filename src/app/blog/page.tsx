"use client";

import Image from "next/image";
import Link from "next/link";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

const blogPosts = [
  {
    id: "post-1",
    title: "How to Choose the Perfect Engagement Ring",
    date: "12 Mar 2026",
    author: "Pooja S.",
    image: "/images/revamp/ring-macro.jpg",
    snippet:
      "A comprehensive guide to diamond 4Cs, solitaire settings, gold karats, and timeless halo designs that resonate forever.",
    slug: "choose-perfect-engagement-ring",
  },
  {
    id: "post-2",
    title: "5 Latest Jewellery Trends for 2026",
    date: "10 Mar 2026",
    author: "Rahul M.",
    image: "/images/collections/gold-collection.jpg",
    snippet:
      "From layered yellow gold chains to emerald teardrop pendants, explore the high-fashion bridal trends defining this year.",
    slug: "latest-jewellery-trends-2026",
  },
  {
    id: "post-3",
    title: "Caring for Your Diamond Jewellery",
    date: "05 Mar 2026",
    author: "Luxe Atelier",
    image: "/images/revamp/halo-ring.jpg",
    snippet:
      "Expert tips on cleaning, inspecting prong settings, and maintaining the eternal fire of your diamond heirlooms.",
    slug: "caring-for-diamond-jewellery",
  },
  {
    id: "post-4",
    title: "Gold vs Diamond — Which is Better Investment?",
    date: "28 Feb 2026",
    author: "Financial Luxe",
    image: "/images/product/gold-chain.jpg",
    snippet:
      "Analyzing long-term gold purity returns versus natural certified diamond appreciation for discerning Indian buyers.",
    slug: "gold-vs-diamond-investment",
  },
];

export default function BlogPage() {
  return (
    <div className="w-full bg-[#FAF7F2] min-h-screen">
      {/* 1. Header Banner */}
      <div className="relative overflow-hidden bg-[#181512] py-14 sm:py-20 border-b border-[#332E27]">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <span className="text-[12px] font-semibold tracking-widest text-[#B38E5D] block mb-1">
            Blog & Guides
          </span>
          <h1 className="font-display text-[32px] sm:text-[44px] md:text-[50px] text-white font-normal leading-tight mb-2">
            Jewellery Tips, Trends & Stories
          </h1>
          <p className="font-body text-[14px] sm:text-[16px] text-[#DDD6CD] font-light">
            Insights on diamond grading, hallmarked gold, styling, and timeless care
          </p>
        </div>
      </div>

      {/* 2. Blog Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col bg-white rounded-2xl overflow-hidden border border-[#EAE4DC] shadow-xs hover:shadow-md transition-shadow group"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[4/3] w-full bg-[#FAF7F2] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover object-center group-hover:scale-106 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-[#8C827A] mb-2 font-medium">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>

                  <h3 className="font-display text-[16px] sm:text-[17px] font-medium text-[#141414] leading-snug group-hover:text-[#B38E5D] transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="font-body text-[12.5px] text-[#6B635B] line-clamp-3 leading-relaxed font-light mb-4">
                    {post.snippet}
                  </p>
                </div>

                <Link
                  href="/guide"
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-wider text-[#B38E5D] hover:text-[#9C7748] transition-colors pt-2 border-t border-[#F0EBE2]"
                >
                  <span>Read More</span>
                  <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="mt-12 text-center">
          <Link
            href="/guide"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[#B38E5D] text-[#B38E5D] hover:bg-[#B38E5D] hover:text-white text-[13.5px] font-medium tracking-wide transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
