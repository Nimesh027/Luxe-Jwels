"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import {
  InstagramIcon,
  PinterestIcon,
  FacebookIcon,
  YoutubeIcon,
} from "@/components/icons/SocialIcons";
import {
  VisaBadge,
  MastercardBadge,
  AmexBadge,
  PaypalBadge,
  UpiBadge,
  ApplePayBadge,
} from "@/components/icons/PaymentIcons";
import Newsletter from "../sections/Newsletter";

const socialSvgMap: Record<string, React.ComponentType<{ className?: string }>> = {
  instagram: InstagramIcon,
  pinterest: PinterestIcon,
  facebook: FacebookIcon,
  youtube: YoutubeIcon,
};

function renderPaymentBadge(badge: string) {
  const normalized = badge.toLowerCase().trim();
  switch (normalized) {
    case "visa":
      return <VisaBadge key={badge} />;
    case "mastercard":
      return <MastercardBadge key={badge} />;
    case "amex":
      return <AmexBadge key={badge} />;
    case "paypal":
      return <PaypalBadge key={badge} />;
    case "upi":
      return <UpiBadge key={badge} />;
    case "apple pay":
    case "applepay":
      return <ApplePayBadge key={badge} />;
    default:
      return (
        <span
          key={badge}
          className="flex h-7 items-center justify-center rounded-md border border-neutral-700 bg-white/10 px-2.5 text-micro font-medium tracking-wider text-offwhite/80"
        >
          {badge}
        </span>
      );
  }
}

export default function Footer() {
  const pathname = usePathname();
  const footer = useAppSelector((state) => state.siteContent.footer);

  const isAuthPage =
    pathname === "/login" || pathname === "/register" || pathname === "/forgot-password";
  if (isAuthPage) return null;

  return (
    <>
      <Newsletter />

      <footer className="relative bg-ink-deep border-t border-gold/30 text-offwhite pt-section pb-8 sm:pb-10">
        {/* Top Gold Hairline Glow Accent */}
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold/50 to-transparent" />

        <div className="container">
          {/* Main Footer Grid: 4-cols for Brand, 8-cols for Navigation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack">
            {/* Brand Intro Column */}
            <div className="lg:col-span-4 flex flex-col items-start">
              <Link href="/" className="inline-block">
                <span className="font-display text-h3 font-normal tracking-wide text-offwhite">
                  Luxe Jewels
                </span>
              </Link>
              <div className="h-0.5 w-10 bg-gold/70 mt-2 mb-3" />
              <p className="max-w-sm text-small font-light leading-relaxed text-offwhite/75">
                {footer.brandBlurb}
              </p>

              {/* Proper Social Icons (Crisp SVGs with gold halo on hover) */}
              <div className="mt-6 flex items-center gap-3">
                {footer.socials.map((social) => {
                  const Icon = socialSvgMap[social.icon] || InstagramIcon;
                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-12 md:size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-offwhite/80 transition-all duration-300 hover:border-gold hover:bg-gold/15 hover:text-gold hover:scale-105 shadow-xs"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Navigation Links Grid (2 columns on mobile, 4 columns on desktop) */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-x-grid gap-y-8">
              {footer.columns.map((column) => (
                <div key={column.id}>
                  <h3 className="text-small font-semibold tracking-wide text-offwhite/90 mb-2 md:mb-4">
                    {column.title}
                  </h3>
                  <ul className="md:space-y-1">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="block py-2.5 text-small font-light text-offwhite/75 hover:text-gold transition-colors duration-200 md:py-1"
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
          <div className="mt-12 sm:mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5">
            {/* Authentic Payment Logos */}
            <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
              {footer.paymentBadges.map((badge) => renderPaymentBadge(badge))}
            </div>

            {/* Copyright Text */}
            <p className="text-center sm:text-right text-caption text-offwhite/60 font-light">
              {footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
