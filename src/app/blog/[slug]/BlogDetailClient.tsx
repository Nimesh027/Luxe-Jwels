"use client";

import Link from "next/link";
import Image from "next/image";
import Section from "@/components/common/Section";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import BlogCard from "@/components/blog/BlogCard";
import FeatureStrip from "@/components/sections/FeatureStrip";
import Instagram from "@/components/sections/Instagram";
import { blogsData, type BlogPost } from "@/data/blogsData";

interface BlogDetailClientProps {
  post: BlogPost;
}

export default function BlogDetailClient({ post }: BlogDetailClientProps) {
  const relatedPosts = blogsData.filter((b) => b.id !== post.id).slice(0, 3);

  return (
    <>
      <Section className="py-10 sm:py-16 bg-gradient-to-b from-[#FAF0F2]/40 via-surface to-background">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">

          {/* BREADCRUMB NAVIGATION */}
          <Breadcrumbs
            items={[
              { label: "Luxe Journal", href: "/blog" },
              { label: post.title },
            ]}
          />

          {/* ARTICLE CATEGORY & HEADER */}
          <div className="text-center space-y-4 mb-10">
            <span className="inline-block px-4 py-1.5 bg-wine/10 text-wine rounded-full text-xs font-bold uppercase tracking-widest border border-wine/20">
              {post.category}
            </span>

            <h1 className="font-display text-3xl sm:text-5xl text-wine font-semibold tracking-tight leading-tight max-w-3xl mx-auto">
              {post.title}
            </h1>

            {/* AUTHOR METADATA & DATE BAR */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-muted">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-wine/10 text-wine flex items-center justify-center font-bold text-xs">
                  {post.author.avatar}
                </div>
                <span className="font-semibold text-ink">{post.author.name}</span>
                <span className="text-muted/60">({post.author.role})</span>
              </div>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* MAIN HERO BANNER IMAGE */}
          <div className="relative w-full h-[320px] sm:h-[480px] rounded-3xl overflow-hidden shadow-md mb-12 border border-wine/20">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* ARTICLE CONTENT BODY */}
          <article className="prose prose-wine max-w-none space-y-8 text-xs sm:text-base text-ink/85 leading-relaxed font-light">
            {/* Intro Paragraph */}
            <p className="text-sm sm:text-lg text-ink font-normal leading-relaxed border-l-4 border-wine pl-4 bg-wine/5 py-3 rounded-r-xl">
              {post.content.intro}
            </p>

            {/* Sections */}
            {post.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-3 pt-4">
                <h2 className="font-display text-xl sm:text-2xl font-semibold text-wine tracking-tight">
                  {section.heading}
                </h2>
                <p>{section.body}</p>

                {section.quote && (
                  <blockquote className="my-6 p-6 rounded-2xl bg-[#FAF0F2] border border-wine/20 text-wine font-display italic text-sm sm:text-base leading-relaxed">
                    &ldquo;{section.quote}&rdquo;
                  </blockquote>
                )}
              </div>
            ))}

            {/* Conclusion */}
            <div className="pt-6 border-t border-border/80 space-y-3">
              <h3 className="font-display text-lg font-semibold text-wine">
                Final Reflections
              </h3>
              <p>{post.content.conclusion}</p>
            </div>

            {/* TAGS BAR */}
            <div className="pt-6 flex flex-wrap items-center gap-2 border-t border-border/60">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">TAGS:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-surface border border-border rounded-full text-xs text-ink/80"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </article>

          {/* RELATED ARTICLES SECTION USING REUSABLE BlogCard */}
          <div className="mt-16 sm:mt-20 pt-12 border-t border-border/80">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-wine">
                Related Stories
              </h2>
              <Link
                href="/blog"
                className="text-xs font-bold text-wine hover:text-wine-dark uppercase tracking-wider transition-colors"
              >
                View All Articles →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedPosts.map((rPost) => (
                <BlogCard key={rPost.id} post={rPost} />
              ))}
            </div>
          </div>

        </div>
      </Section>

      <FeatureStrip />
      <Instagram />
    </>
  );
}
