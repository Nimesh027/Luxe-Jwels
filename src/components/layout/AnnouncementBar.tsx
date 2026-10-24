"use client";

import { usePathname } from "next/navigation";
import {
  ShippingIcon,
  ReturnsIcon,
  CertifiedIcon,
  SecureIcon,
} from "@/components/icons/FeatureIcons";

const trustPillars = [
  { icon: ShippingIcon, label: "Free Shipping", short: "Free Shipping" },
  { icon: ReturnsIcon, label: "30 Days Easy Return", short: "30-Day Returns" },
  { icon: CertifiedIcon, label: "Certified Jewellery", short: "Certified" },
  { icon: SecureIcon, label: "Secure Payments", short: "Secure Pay" },
];

export default function AnnouncementBar() {
  const pathname = usePathname();
  const isAuthPage =
    pathname === "/login" || pathname === "/register" || pathname === "/forgot-password";
  if (isAuthPage) return null;

  return (
    <div className="theme-dark w-full bg-ink text-white select-none" role="region" aria-label="Store benefits">
      <ul className="container flex items-center justify-between sm:justify-center gap-3 sm:gap-0 h-9 text-[11.5px] sm:text-[12.5px] font-medium tracking-wide">
        {trustPillars.map((item, idx) => {
          const Icon = item.icon;
          return (
            <li
              key={item.label}
              className={`flex items-center gap-1.5 sm:gap-2 sm:px-6 lg:px-10 ${
                idx > 0 ? "sm:border-l sm:border-white/15" : ""
              } ${idx === 3 ? "hidden min-[400px]:flex" : ""}`}
            >
              <Icon className="w-3.5 h-3.5 text-gold shrink-0" />
              <span className="sm:hidden whitespace-nowrap text-white/90">{item.short}</span>
              <span className="hidden sm:inline whitespace-nowrap text-white/90">{item.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
