"use client";

import Link from "next/link";
import { useAppSelector } from "@/store/hooks";
import { socialIconMap } from "@/lib/icons";

export default function Footer() {
  const footer = useAppSelector((state) => state.siteContent.footer);

  return (
    <footer className="border-t border-border bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="font-display text-lg tracking-[0.2em]">LUXE JEWELS</span>
          <p className="mt-3 max-w-sm text-sm text-cream/70">{footer.brandBlurb}</p>
        </div>

        {/* Desktop columns */}
        <div className="hidden grid-cols-4 gap-8 md:grid">
          {footer.columns.map((column) => (
            <div key={column.id}>
              <h3 className="mb-4 text-xs uppercase tracking-wide text-cream/60">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-cream/85 hover:text-gold">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile accordion columns */}
        <div className="md:hidden">
          {footer.columns.map((column) => (
            <details key={column.id} className="border-b border-cream/15 py-3">
              <summary className="cursor-pointer text-xs uppercase tracking-wide text-cream/80">
                {column.title}
              </summary>
              <ul className="mt-3 space-y-2 pl-1">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-cream/70 hover:text-gold">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-cream/15 pt-6 sm:flex-row">
          <div className="flex items-center gap-4 text-lg">
            {footer.socials.map((social) => {
              const Icon = socialIconMap[social.icon];
              return (
                <a
                  key={social.id}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/80 hover:text-gold"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
          <div className="flex items-center gap-2">
            {footer.paymentBadges.map((badge) => (
              <span
                key={badge}
                className="rounded border border-cream/25 px-2 py-1 text-[10px] uppercase tracking-wide text-cream/70"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-cream/50">{footer.copyright}</p>
      </div>
    </footer>
  );
}
