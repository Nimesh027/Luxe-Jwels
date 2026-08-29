"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { MegaMenuData } from "@/types";
import JewelryIcon from "./JewelryIcon";
import { cn } from "@/lib/utils";

interface MegaMenuProps {
  data: MegaMenuData;
  onClose?: () => void;
}

export default function MegaMenu({ data, onClose }: MegaMenuProps) {
  const [activeTabId, setActiveTabId] = useState<string>(
    data.defaultTabId || data.tabs[0]?.id || "tab-category"
  );

  const activeTab = data.tabs.find((t) => t.id === activeTabId) || data.tabs[0];

  if (!activeTab) return null;

  return (
    <div
      role="region"
      aria-label="Navigation Mega Menu"
      className="w-full bg-surface border-t border-border/70 py-6 sm:py-7 transition-all duration-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        {/* LEFT COLUMN: Filter / Navigation Tabs */}
        <div className="w-full lg:w-48 xl:w-52 shrink-0 flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 border-b lg:border-b-0 lg:border-r border-border/60 pr-0 lg:pr-4">
          {data.tabs.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                type="button"
                onMouseEnter={() => setActiveTabId(tab.id)}
                onClick={() => setActiveTabId(tab.id)}
                className={cn(
                  "text-left px-4 py-2.5 rounded-full text-small font-medium transition-all duration-150 whitespace-nowrap cursor-pointer",
                  isActive
                    ? "bg-wine-soft text-wine border border-wine/20 shadow-xs font-semibold"
                    : "text-muted hover:text-wine hover:bg-cream"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* MIDDLE SECTION: 3-Column Items Grid + Bottom Promo Banner */}
        <div className="flex-1 flex flex-col justify-between min-w-0">
          {/* 3-Column Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3.5 py-1">
            {activeTab.items.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={onClose}
                className="group flex items-center gap-3 p-1.5 rounded-xl hover:bg-cream transition-all duration-150"
              >
                <div className="shrink-0 transition-transform duration-200 group-hover:scale-110">
                  <JewelryIcon name={item.name} className="w-8 h-8" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-small font-normal text-ink group-hover:text-wine transition-colors duration-150 block truncate">
                    {item.name}
                  </span>
                  {item.badge && (
                    <span className="text-[10px] text-gold font-semibold uppercase tracking-wider">
                      {item.badge}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Promotional Bar */}
          {activeTab.bottomBanner && (
            <div className="mt-6 p-3 sm:p-4 rounded-xl bg-cream/70 border border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center gap-3.5">
                {/* Thumbnails preview stack */}
                {activeTab.bottomBanner.thumbnails && activeTab.bottomBanner.thumbnails.length > 0 && (
                  <div className="flex items-center -space-x-2 shrink-0">
                    {activeTab.bottomBanner.thumbnails.slice(0, 3).map((thumb, idx) => (
                      <div
                        key={idx}
                        className="relative w-10 h-10 rounded-lg overflow-hidden border-2 border-surface shadow-xs"
                      >
                        <Image
                          src={thumb}
                          alt="Jewellery Preview"
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
                <div>
                  <h4 className="text-small font-display font-semibold text-ink leading-tight">
                    {activeTab.bottomBanner.heading}
                  </h4>
                  <p className="text-caption text-muted mt-0.5">
                    {activeTab.bottomBanner.subheading}
                  </p>
                </div>
              </div>

              <Link
                href={activeTab.bottomBanner.buttonHref}
                onClick={onClose}
                className="shrink-0 inline-flex items-center justify-center px-6 py-2 rounded-full bg-wine text-white text-caption font-semibold tracking-wide hover:bg-wine-dark transition-all duration-150 shadow-xs hover:shadow active:scale-95"
              >
                {activeTab.bottomBanner.buttonText}
              </Link>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Featured Showcase Card */}
        {activeTab.featuredCard && (
          <div className="w-full lg:w-64 xl:w-72 shrink-0 border-t lg:border-t-0 lg:border-l border-border/60 pt-4 lg:pt-0 lg:pl-6 flex flex-col justify-between">
            <Link
              href={activeTab.featuredCard.href}
              onClick={onClose}
              className="group block"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream-dark shadow-sm">
                <Image
                  src={activeTab.featuredCard.image}
                  alt={activeTab.featuredCard.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="font-display text-small font-medium text-ink mt-3 leading-snug line-clamp-2 group-hover:text-wine transition-colors duration-150">
                {activeTab.featuredCard.title}
              </p>
              <div className="inline-flex items-center gap-1.5 text-caption font-semibold text-wine hover:text-gold mt-2 transition-colors duration-150">
                <span>{activeTab.featuredCard.ctaLabel}</span>
                <span className="text-[10px] transform group-hover:translate-x-1 transition-transform">
                  ↗
                </span>
              </div>
            </Link>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
