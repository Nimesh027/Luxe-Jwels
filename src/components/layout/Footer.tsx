"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentType } from "react";
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
import { MapPinIcon, PhoneIcon, MailIcon } from "@/components/icons";
import type { FooterContactItem } from "@/data/mockData";
import BrandLogo from "./BrandLogo";
import Newsletter from "../sections/Newsletter";

const socialIcons: Record<string, ComponentType<{ className?: string }>> = {
  instagram: InstagramIcon,
  pinterest: PinterestIcon,
  facebook: FacebookIcon,
  youtube: YoutubeIcon,
};

const contactIcons: Record<FooterContactItem["icon"], typeof PhoneIcon> = {
  location: MapPinIcon,
  phone: PhoneIcon,
  email: MailIcon,
};

function PaymentBadge({ name }: { name: string }) {
  switch (name.toLowerCase().replace(/\s+/g, "")) {
    case "visa":
      return <VisaBadge />;
    case "mastercard":
      return <MastercardBadge />;
    case "amex":
      return <AmexBadge />;
    case "paypal":
      return <PaypalBadge />;
    case "upi":
      return <UpiBadge />;
    case "applepay":
      return <ApplePayBadge />;
    default:
      return (
        <span className="flex h-7 items-center rounded-md border border-white/20 px-2.5 text-[12px] font-medium uppercase tracking-wider text-white/85">
          {name}
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
    <footer className="theme-dark w-full bg-ink text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <Newsletter />

      {/* Brand + link columns */}
      <div className="container py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[1.35fr_repeat(5,minmax(0,1fr))] gap-x-6 gap-y-10 lg:gap-x-8">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <BrandLogo tone="light" />
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-muted">{footer.brandBlurb}</p>
            <ul className="mt-6 flex items-center gap-2.5" aria-label="Social media">
              {footer.socials.map((social) => {
                const Icon = socialIcons[social.icon] ?? InstagramIcon;
                return (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/85 hover:border-brand hover:bg-brand hover:text-white transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.id} aria-label={column.title} className="min-w-0">
              <h3 className="mb-4 font-display text-[19px] font-semibold text-white">{column.title}</h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={`${link.label}-${link.href}`}>
                    <Link href={link.href} className="text-[14px] leading-snug text-muted hover:text-gold transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Contact strip */}
        <address className="not-italic mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-8">
          {footer.contact.map((item) => {
            const Icon = contactIcons[item.icon];
            return (
              <div key={item.id} className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-gold">
                  <Icon size={18} />
                </span>
                <div className="min-w-0">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="break-all text-[15px] font-medium text-white hover:text-gold transition-colors"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <p className="text-[15px] font-medium text-white">{item.title}</p>
                  )}
                  <p className="mt-0.5 text-[13.5px] text-muted">{item.detail}</p>
                </div>
              </div>
            );
          })}
        </address>
      </div>

      {/* Copyright + payments */}
      <div className="border-t border-white/10">
        <div className="container flex flex-col-reverse items-center justify-between gap-4 py-5 sm:flex-row">
          <p className="text-[13px] text-subtle">
            &copy; {new Date().getFullYear()} {footer.copyright}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2" aria-label="Accepted payment methods">
            {footer.paymentBadges.map((badge) => (
              <li key={badge}>
                <PaymentBadge name={badge} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
