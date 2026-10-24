"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import {
  ShippingIcon,
  ReturnsIcon,
  CertifiedIcon,
  SecureIcon,
} from "@/components/icons/FeatureIcons";

export default function AnnouncementBar() {
  const pathname = usePathname();
  const items = useAppSelector((state) => state.siteContent.announcementBar);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAuthPage =
    pathname === "/login" || pathname === "/register" || pathname === "/forgot-password";
  if (isAuthPage) return null;

  const trustPillars = [
    {
      icon: <ShippingIcon className="w-3.5 h-3.5 text-[#B38E5D]" />,
      label: "Free Shipping",
    },
    {
      icon: <ReturnsIcon className="w-3.5 h-3.5 text-[#B38E5D]" />,
      label: "30 Days Easy Return",
    },
    {
      icon: <CertifiedIcon className="w-3.5 h-3.5 text-[#B38E5D]" />,
      label: "Certified Jewellery",
    },
    {
      icon: <SecureIcon className="w-3.5 h-3.5 text-[#B38E5D]" />,
      label: "Secure Payments",
    },
  ];

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#121212] text-white border-b border-[#222220] select-none transition-all duration-300 ease-in-out z-40 ${ isVisible ? "max-h-12 py-2 opacity-100 translate-y-0" : "max-h-0 py-0 opacity-0 -translate-y-full border-transparent pointer-events-none" }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-center">
        {/* Desktop & Tablet: Balanced 4-pillar row */}
        <div className="hidden sm:flex items-center justify-center gap-6 md:gap-10 text-[11.5px] tracking-wide text-neutral-300">
          {trustPillars.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {item.icon}
              <span className="font-medium text-white/90">{item.label}</span>
              {idx < trustPillars.length - 1 && (
                <span className="text-white/20 ml-6 md:ml-10">|</span>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: Smooth marquee or compact row */}
        <div className="sm:hidden flex items-center justify-between w-full text-[11px] text-neutral-300">
          <div className="flex items-center gap-1.5">
            {trustPillars[0].icon}
            <span className="font-medium">{trustPillars[0].label}</span>
          </div>
          <span className="text-white/20">•</span>
          <div className="flex items-center gap-1.5">
            {trustPillars[2].icon}
            <span className="font-medium">{trustPillars[2].label}</span>
          </div>
          <span className="text-white/20">•</span>
          <div className="flex items-center gap-1.5">
            {trustPillars[3].icon}
            <span className="font-medium">100% Secure</span>
          </div>
        </div>
      </div>
    </div>
  );
}
