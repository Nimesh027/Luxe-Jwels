"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  InstagramIcon,
  PinterestIcon,
  FacebookIcon,
  YoutubeIcon,
} from "@/components/icons/SocialIcons";
import {
  VisaBadge,
  MastercardBadge,
  PaypalBadge,
  UpiBadge,
} from "@/components/icons/PaymentIcons";
import { MapPinIcon, PhoneIcon, MailIcon } from "@/components/icons";
import Newsletter from "../sections/Newsletter";

export default function Footer() {
  const pathname = usePathname();

  const isAuthPage =
    pathname === "/login" || pathname === "/register" || pathname === "/forgot-password";
  if (isAuthPage) return null;

  return (
    <>
      <Newsletter />

      <footer className="w-full bg-[#111110] text-[#E0DCD6] py-12 sm:py-14 border-t border-[#222220]">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer 5-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-[#242422]">
            {/* Column 1: Brand Identity */}
            <div className="flex flex-col items-start lg:col-span-1">
              <Link href="/" className="flex items-center gap-2.5 mb-2 group">
                <svg className="w-6 h-6 text-[#B38E5D]" viewBox="0 0 32 32" fill="none">
                  <path d="M16 2L2 12L16 30L30 12L16 2Z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M2 12H30M16 2L10 12L16 30L22 12L16 2Z" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-display text-[20px] tracking-[0.16em] text-white font-semibold leading-none">
                    LUXE JEWELS
                  </span>
                  <span className="font-body text-[9px] tracking-[0.24em] text-[#B38E5D] font-medium mt-1">
                    Timeless Elegance
                  </span>
                </div>
              </Link>

              <p className="font-body text-[13px] text-[#A69F96] font-light leading-relaxed mt-3 max-w-xs">
                Fine handcrafted jewellery for every milestone. Hallmarked gold, certified diamonds, and master artisan atelier.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5 mt-5">
                {[
                  { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
                  { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
                  { icon: PinterestIcon, href: "https://pinterest.com", label: "Pinterest" },
                  { icon: YoutubeIcon, href: "https://youtube.com", label: "YouTube" },
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-8 h-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/80 hover:text-[#B38E5D] hover:border-[#B38E5D] transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Shop & Categories */}
            <div>
              <h4 className="font-display text-[15px] font-semibold text-white tracking-wider mb-4">
                Shop Jewellery
              </h4>
              <ul className="space-y-2.5 text-[13px]">
                {[
                  { label: "All Jewellery", href: "/shop" },
                  { label: "Rings", href: "/category/rings" },
                  { label: "Necklaces", href: "/category/necklaces" },
                  { label: "Earrings", href: "/category/earrings" },
                  { label: "Bracelets", href: "/category/bracelets" },
                  { label: "Men's Collection", href: "/category/mens-collection" },
                  { label: "Signature Collections", href: "/collections" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[#A69F96] hover:text-[#B38E5D] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Guide & Education */}
            <div>
              <h4 className="font-display text-[15px] font-semibold text-white tracking-wider mb-4">
                Guide & Learn
              </h4>
              <ul className="space-y-2.5 text-[13px]">
                {[
                  { label: "Guide & Learn Hub", href: "/guide" },
                  { label: "Gold Karats (18K/22K/24K)", href: "/guide/gold" },
                  { label: "Diamond Types (Natural/CVD)", href: "/guide/diamond" },
                  { label: "12 Diamond Shapes Cut", href: "/guide/shape" },
                  { label: "Silver Standards (925/999)", href: "/guide/silver" },
                  { label: "Jewellery Care Guide", href: "/care-guide" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[#A69F96] hover:text-[#B38E5D] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: About, Manufacturing, Blog & Contact */}
            <div>
              <h4 className="font-display text-[15px] font-semibold text-white tracking-wider mb-4">
                About & Studio
              </h4>
              <ul className="space-y-2.5 text-[13px]">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Our Story & Heritage", href: "/our-story" },
                  { label: "Explore Manufacturing", href: "/manufacturing" },
                  { label: "Blog & Insights", href: "/blog" },
                  { label: "Contact & Showroom", href: "/contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[#A69F96] hover:text-[#B38E5D] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Customer Care & Policies */}
            <div>
              <h4 className="font-display text-[15px] font-semibold text-white tracking-wider mb-4">
                Customer Care
              </h4>
              <ul className="space-y-2.5 text-[13px]">
                {[
                  { label: "Track Your Order", href: "/track-order" },
                  { label: "Shipping Policy", href: "/shipping" },
                  { label: "Return & Refund", href: "/returns" },
                  { label: "FAQs & Help Center", href: "/faqs" },
                  { label: "Customer Reviews", href: "/reviews" },
                  { label: "Terms & Conditions", href: "/terms" },
                  { label: "Privacy Policy", href: "/privacy-policy" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[#A69F96] hover:text-[#B38E5D] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Atelier Contact & Operating Hours Strip */}
          <div className="py-8 border-b border-[#242422] grid grid-cols-1 sm:grid-cols-3 gap-6 text-[13px] text-[#A69F96]">
            <div className="flex items-start gap-3">
              <MapPinIcon size={18} className="text-[#B38E5D] mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-medium">Flagship Studio & Atelier</p>
                <p className="text-[12px] text-[#8C827A] mt-0.5">Ahmedabad, Gujarat, India</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <PhoneIcon size={18} className="text-[#B38E5D] mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-medium">+91 98765 43210</p>
                <p className="text-[12px] text-[#8C827A] mt-0.5">Mon - Sat: 10:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MailIcon size={18} className="text-[#B38E5D] mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-medium">support@luxejewels.com</p>
                <p className="text-[12px] text-[#8C827A] mt-0.5">We reply within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Bottom Row: Copyright & Payment Badges */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[12px] text-[#78716A]">
              &copy; 2026 Luxe Jewels. All Rights Reserved.
            </p>

            <div className="flex items-center gap-2">
              <VisaBadge />
              <MastercardBadge />
              <UpiBadge />
              <PaypalBadge />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
