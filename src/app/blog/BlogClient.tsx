"use client";

import { useState } from "react";
import Section from "@/components/common/Section";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import BlogCard from "@/components/blog/BlogCard";
import FeatureStrip from "@/components/sections/FeatureStrip";
import Instagram from "@/components/sections/Instagram";
import { blogsData } from "@/data/blogsData";

export default function BlogClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Gold Trends", "Solitaires", "Bridal Couture", "Jewellery Care"];

  const featuredPost = blogsData.find((b) => b.featured) || blogsData[0];

  const filteredPosts = blogsData.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Section className="py-10 sm:py-16 bg-gradient-to-b from-[#FAF0F2]/40 via-surface to-background">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">

          {/* BREADCRUMB NAVIGATION */}
          <Breadcrumbs items={[{ label: "Luxe Journal" }]} />

          {/* HERO HEADER SECTION */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
            <div className="flex items-center justify-center gap-3 mb-1">
              <span className="h-[1px] w-8 bg-gold/60" />
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-wine/80">
                HAUTE JOAILLERIE & HERITAGE
              </span>
              <span className="h-[1px] w-8 bg-gold/60" />
            </div>
            <h1 className="font-display text-h1 text-wine font-semibold tracking-tight leading-[1.15]">
              The Luxe Journal
            </h1>
            <p className="text-body text-muted font-light leading-relaxed max-w-2xl mx-auto">
              Explore style guides, gold purity insights, diamond buying tutorials, and royal bridal couture trends curated by our master gemologists.
            </p>
          </div>

          {/* CATEGORY TAB SCROLL & SEARCH */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 border-b border-border/60 pb-6">
            {/* CATEGORY PILL TABS */}
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto scrollbar-none pb-2 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-caption font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#80222F] text-white shadow-xs"
                      : "bg-surface border border-border/80 text-ink/80 hover:border-wine/40 hover:text-wine"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* SEARCH INPUT */}
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search journal..."
                className="w-full px-4 py-2 pl-9 rounded-full border border-wine/25 bg-surface text-caption text-ink placeholder:text-muted focus:outline-none focus:border-wine focus:ring-2 focus:ring-wine/15 transition-all shadow-xs"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted text-caption">🔍</span>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-caption text-muted hover:text-wine font-bold cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* FEATURED STORY HERO CARD (Shown when on "All" category & no active search) */}
          {selectedCategory === "All" && !searchQuery && featuredPost && (
            <BlogCard post={featuredPost} featured={true} />
          )}

          {/* BLOG GRID */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-surface rounded-3xl border border-border/80 p-8 space-y-3">
              <span className="text-h2 block">📖</span>
              <h3 className="font-display font-semibold text-h5 text-wine">No Journal Articles Found</h3>
              <p className="text-caption text-muted">Try searching with a different keyword or select another category.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-2 px-5 py-2 bg-wine text-white rounded-full text-caption font-bold uppercase tracking-wider hover:bg-wine-dark transition-all cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </Section>

      <FeatureStrip />
      <Instagram />
    </>
  );
}
