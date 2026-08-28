"use client";

import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/data/blogsData";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <div className="group relative bg-surface rounded-3xl border border-wine/20 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 mb-12 sm:mb-16">
        {/* IMAGE CONTAINER */}
        <div className="relative lg:col-span-7 h-[260px] sm:h-[380px] lg:h-auto overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3.5 py-1.5 bg-[#80222F] text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-xs">
              FEATURED STORY
            </span>
          </div>
        </div>

        {/* CONTENT CONTAINER */}
        <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-3.5">
            <div className="flex items-center gap-3 text-xs text-muted font-medium">
              <span className="text-wine font-semibold uppercase tracking-wider">{post.category}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <Link href={`/blog/${post.slug}`}>
              <h2 className="font-display text-xl sm:text-3xl text-wine font-semibold tracking-tight leading-snug group-hover:text-wine-dark transition-colors">
                {post.title}
              </h2>
            </Link>

            <p className="text-xs sm:text-sm text-muted font-light leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          </div>

          <div className="pt-4 border-t border-border/60 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-wine/10 text-wine flex items-center justify-center font-bold text-sm">
                {post.author.avatar}
              </div>
              <div>
                <p className="text-xs font-semibold text-ink">{post.author.name}</p>
                <p className="text-[10px] text-muted">{post.date}</p>
              </div>
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-wine hover:text-wine-dark uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Read Story</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-surface rounded-2xl border border-border/80 overflow-hidden shadow-2xs hover:shadow-xs hover:border-wine/30 transition-all duration-300 flex flex-col h-full">
      {/* CARD IMAGE */}
      <div className="relative w-full h-[200px] sm:h-[220px] overflow-hidden bg-cream/30">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-wine border border-wine/20 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-2xs">
            {post.category}
          </span>
        </div>
      </div>

      {/* CARD BODY */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[11px] text-muted">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <Link href={`/blog/${post.slug}`} className="block">
            <h3 className="font-display font-semibold text-base sm:text-lg text-wine line-clamp-2 leading-snug group-hover:text-wine-dark transition-colors">
              {post.title}
            </h3>
          </Link>

          <p className="text-xs text-muted font-light leading-relaxed line-clamp-2 pt-1">
            {post.excerpt}
          </p>
        </div>

        <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs">
          <span className="text-[11px] text-muted font-medium">By {post.author.name}</span>
          <Link
            href={`/blog/${post.slug}`}
            className="font-bold text-wine hover:text-wine-dark flex items-center gap-1 transition-colors"
          >
            <span>Read</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
