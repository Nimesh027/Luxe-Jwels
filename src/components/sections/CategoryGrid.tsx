"use client";

import Image from "next/image";
import Link from "next/link";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

const categories = [
  {
    name: "Rings",
    slug: "rings",
    href: "/category/rings",
    image: "/images/revamp/halo-ring.jpg",
  },
  {
    name: "Necklaces",
    slug: "necklaces",
    href: "/category/necklaces",
    image: "/images/category/necklaces.jpg",
  },
  {
    name: "Earrings",
    slug: "earrings",
    href: "/category/earrings",
    image: "/images/category/earrings.jpg",
  },
  {
    name: "Bracelets",
    slug: "bracelets",
    href: "/category/bracelets",
    image: "/images/category/bracelets.jpg",
  },
  {
    name: "Pendants",
    slug: "pendants",
    href: "/category/pendants",
    image: "/images/category/pendants.jpg",
  },
  {
    name: "Men's Collection",
    slug: "mens-collection",
    href: "/category/mens-collection",
    image: "/images/category/mens-collection.jpg",
  },
  {
    name: "Bangles",
    slug: "bangles",
    href: "/category/bracelets",
    image: "/images/product/black-onyx-bracelet.jpg",
  },
  {
    name: "Wedding Collection",
    slug: "wedding-collection",
    href: "/collections/couple-collection",
    image: "/images/collections/couple-collection.jpg",
  },
];

export default function CategoryGrid() {
  return (
    <section className="w-full bg-[#FCFAF8] py-10 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Left Title and Right 'View All' */}
        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <div>
            <h2 className="font-display text-[26px] sm:text-[32px] md:text-[36px] text-[#141414] font-medium tracking-tight">
              Shop By Category
            </h2>
            <p className="font-body text-[13px] sm:text-[14.5px] text-[#78716A] mt-1 font-normal">
              Discover our exquisite collections
            </p>
          </div>

          <Link
            href="/shop"
            className="group inline-flex items-center gap-1.5 text-[12.5px] sm:text-[13.5px] tracking-wider text-[#B38E5D] hover:text-[#9C7748] font-semibold transition-colors pb-1"
          >
            <span>View All Categories</span>
            <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 8 Circular Category Items Grid / Scroll on mobile */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 sm:gap-6 justify-items-center">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group flex flex-col items-center text-center cursor-pointer w-full max-w-[120px]"
            >
              {/* Circular Thumbnail with Golden Ring */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-26 lg:h-26 rounded-full p-1 bg-white border border-[#E5DFD5] group-hover:border-[#B38E5D] group-hover:shadow-md transition-all duration-300">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#FAF7F2]">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="120px"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Category Label */}
              <span className="font-body text-[12px] sm:text-[13px] font-medium text-[#141414] group-hover:text-[#B38E5D] transition-colors mt-3 line-clamp-1">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
