"use client";

import { useState } from "react";
import Link from "next/link";
import { useAppSelector } from "@/store/hooks";
import { DiamondMark } from "@/components/layout/BrandLogo";

export default function Newsletter() {
  const newsletter = useAppSelector((state) => state.siteContent.newsletter);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="border-b border-white/10" aria-labelledby="newsletter-heading">
      <div className="container grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-12 py-8 sm:py-10">
        {/* Authenticity badge */}
        <div className="flex items-center gap-4 lg:col-span-5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold">
            <DiamondMark className="h-6 w-6" />
          </span>
          <div>
            <p className="font-display text-[22px] sm:text-[24px] font-semibold leading-tight text-white">
              {newsletter.badgeTitle}
            </p>
            <p className="text-[14px] text-muted">{newsletter.badgeSubtitle}</p>
          </div>
        </div>

        {/* Subscription */}
        <div className="lg:col-span-7">
          <h3 id="newsletter-heading" className="font-display text-[20px] font-semibold text-white">
            {newsletter.title}
          </h3>
          <p className="mb-3 text-[14px] text-muted">{newsletter.subtitle}</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="flex w-full overflow-hidden rounded-[var(--radius-btn)] border border-white/20 bg-white/5 transition-colors focus-within:border-gold">
              <input
                id="newsletter-email"
                type="email"
                required
                autoComplete="email"
                placeholder={newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-[15px] text-white placeholder:text-subtle focus:outline-none"
              />
              <button
                type="submit"
                disabled={submitted}
                className="shrink-0 bg-brand px-5 sm:px-7 text-[14px] font-semibold tracking-wide text-white transition-colors hover:bg-brand-dark cursor-pointer disabled:opacity-90"
              >
                {submitted ? "Subscribed ✓" : newsletter.cta}
              </button>
            </div>
            <p role="status" className="mt-2 text-[13px] text-muted">
              {submitted ? (
                <span className="text-gold">{newsletter.successMessage}</span>
              ) : (
                // Link the "Privacy Policy" phrase inside the configurable note
                newsletter.privacyNote.split(/(Privacy Policy)/).map((part, i) =>
                  part === "Privacy Policy" ? (
                    <Link key={i} href="/privacy-policy" className="underline underline-offset-2 hover:text-gold">
                      {part}
                    </Link>
                  ) : (
                    part
                  )
                )
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
