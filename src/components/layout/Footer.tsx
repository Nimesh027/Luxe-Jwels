"use client";

import Link from "next/link";
import { useAppSelector } from "@/store/hooks";
import { socialIconMap } from "@/lib/icons";

export default function Footer() {
  const footer = useAppSelector((state) => state.siteContent.footer);

  return (
    <footer className="relative bg-[#100f0e] border-t border-gold/30 text-cream pt-14 sm:pt-16 lg:pt-20 pb-8 sm:pb-10">
      {/* Top Gold Hairline Glow Accent */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container ">
        {/* Main Footer Grid: 4-cols for Brand, 8-cols for Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Intro Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="inline-block">
              <span className="font-display text-xl sm:text-2xl font-normal tracking-[0.25em] text-cream">
                LUXE JEWELS
              </span>
            </Link>
            <div className="h-[1.5px] w-10 bg-gold/70 mt-2 mb-3" />
            <p className="max-w-sm text-xs sm:text-[13px] font-light leading-relaxed text-cream/70">
              {footer.brandBlurb}
            </p>

            {/* Social Icons (Evenly spaced & larger) */}
            <div className="mt-6 flex items-center gap-3">
              {footer.socials.map((social) => {
                const Icon = socialIconMap[social.icon];
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-base sm:text-lg text-cream/80 transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold hover:scale-105"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links Grid (2 columns on mobile, 4 columns on desktop) */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {footer.columns.map((column) => (
              <div key={column.id}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/90 mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs sm:text-[13px] font-light text-cream/70 hover:text-gold transition-colors duration-200 block py-0.5"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider & Bottom Row */}
        <div className="mt-12 sm:mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Payment Methods (Consistent box sizing) */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {footer.paymentBadges.map((badge) => (
              <span
                key={badge}
                className="h-7 px-3 rounded border border-white/15 bg-white/5 text-[11px] font-medium tracking-wider uppercase text-cream/70 flex items-center justify-center shadow-xs"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Copyright Text */}
          <p className="text-center sm:text-right text-xs text-cream/50 tracking-wide font-light">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
