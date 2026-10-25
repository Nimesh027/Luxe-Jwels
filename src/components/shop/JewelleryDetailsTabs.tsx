"use client";

import Image from "next/image";
import { useState, memo } from "react";
import type { Product } from "@/types";
import Rating from "@/components/ui/Rating";

interface JewelleryDetailsTabsProps {
  product: Product;
}

type TabType = "description" | "specifications" | "shipping" | "reviews";

function JewelleryDetailsTabsComponent({ product }: JewelleryDetailsTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>("description");

  const tabs: { id: TabType; label: string }[] = [
    { id: "description", label: "Description" },
    { id: "specifications", label: "Specifications" },
    { id: "shipping", label: "Shipping & Returns" },
    { id: "reviews", label: "Reviews" },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Headers */}
        <div className="flex items-center gap-6 sm:gap-10 border-b border-border pb-3 mb-8 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`text-[14px] sm:text-[15px] font-medium tracking-wide transition-colors cursor-pointer relative pb-3 whitespace-nowrap ${ isActive ? "text-gold font-semibold" : "text-muted hover:text-ink" }`}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand" />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Body Content */}
        {activeTab === "description" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Story & Bullet Points */}
            <div className="lg:col-span-7">
              <h3 className="font-display text-[24px] sm:text-[30px] font-medium text-ink mb-3">
                A Symbol of Eternal Love
              </h3>
              <p className="font-body text-[14px] sm:text-[15px] text-muted leading-relaxed mb-6 font-light">
                This elegant diamond halo ring is a timeless symbol of love and commitment. Crafted with precision, it features a brilliant diamond center surrounded by smaller diamonds, creating a radiant sparkle from every angle.
              </p>

              <ul className="space-y-2.5 text-[13.5px] sm:text-[14px] text-ink-soft">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  <span>Round Brilliant Cut Diamond</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  <span>18K Gold (Yellow/White/Rose)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  <span>Available in Multiple Sizes</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  <span>Comes with Luxury Box & Certificate</span>
                </li>
              </ul>
            </div>

            {/* Side Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream border border-border shadow-sm">
                <Image
                  src="/images/revamp/ring-macro.jpg"
                  alt="A Symbol of Eternal Love - Luxe Jewels"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "specifications" && (
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 text-[14px]">
            {[
              ["Metal Purity", "18K BIS Hallmarked"],
              ["Diamond Clarity", "VVS - VS Natural"],
              ["Diamond Color", "E - F Near Colorless"],
              ["Certification", "IGI / SGL Certified"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between gap-4 border-b border-border py-3.5">
                <dt className="font-medium text-muted">{label}</dt>
                <dd className="text-right font-semibold text-ink-soft">{value}</dd>
              </div>
            ))}
          </dl>
        )}

        {activeTab === "shipping" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[14px] leading-relaxed">
            <div className="rounded-[var(--radius-card)] border border-border bg-cream/60 p-5">
              <p className="font-semibold text-ink">Complimentary Insured Shipping</p>
              <p className="mt-1.5 text-muted">All orders are delivered via insured express courier with tamper-proof packaging.</p>
            </div>
            <div className="rounded-[var(--radius-card)] border border-border bg-cream/60 p-5">
              <p className="font-semibold text-ink">30-Day Hassle-Free Returns</p>
              <p className="mt-1.5 text-muted">If you are not completely satisfied, return the jewellery in its original condition within 30 days for a full refund or exchange.</p>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="text-[14px] text-ink-soft space-y-4">
            <div className="p-4 rounded-xl bg-cream border border-border">
              <Rating value={5} size={13} className="mb-1" />
              <p className="italic text-muted">&ldquo;Simply magnificent sparkle. Arrived beautifully packed with all certification cards.&rdquo;</p>
              <span className="text-[12px] font-semibold text-ink mt-2 block">— Babitha S., Verified Buyer</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default memo(JewelleryDetailsTabsComponent);
