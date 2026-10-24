"use client";

import Image from "next/image";
import { useState, memo } from "react";
import type { Product } from "@/types";

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
    <section className="w-full bg-white py-12 sm:py-16 border-b border-[#EAE4DC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Headers */}
        <div className="flex items-center gap-6 sm:gap-10 border-b border-[#EAE4DC] pb-3 mb-8 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`text-[14px] sm:text-[15px] font-medium tracking-wide transition-colors cursor-pointer relative pb-3 whitespace-nowrap ${ isActive ? "text-[#B38E5D] font-semibold" : "text-[#78716A] hover:text-[#141414]" }`}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B38E5D]" />
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
              <h3 className="font-display text-[24px] sm:text-[30px] font-medium text-[#141414] mb-3">
                A Symbol of Eternal Love
              </h3>
              <p className="font-body text-[14px] sm:text-[15px] text-[#6B635B] leading-relaxed mb-6 font-light">
                This elegant diamond halo ring is a timeless symbol of love and commitment. Crafted with precision, it features a brilliant diamond center surrounded by smaller diamonds, creating a radiant sparkle from every angle.
              </p>

              <ul className="space-y-2.5 text-[13.5px] sm:text-[14px] text-[#3A3530]">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B38E5D]" />
                  <span>Round Brilliant Cut Diamond</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B38E5D]" />
                  <span>18K Gold (Yellow/White/Rose)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B38E5D]" />
                  <span>Available in Multiple Sizes</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B38E5D]" />
                  <span>Comes with Luxury Box & Certificate</span>
                </li>
              </ul>
            </div>

            {/* Side Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#EAE4DC] shadow-sm">
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
          <div className="max-w-2xl text-[14px] text-[#3A3530]">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b border-[#EAE4DC] py-2.5">
                  <td className="py-2.5 font-medium text-[#78716A]">Metal Purity</td>
                  <td className="py-2.5 text-right font-semibold">18K BIS Hallmarked</td>
                </tr>
                <tr className="border-b border-[#EAE4DC] py-2.5">
                  <td className="py-2.5 font-medium text-[#78716A]">Diamond Clarity</td>
                  <td className="py-2.5 text-right font-semibold">VVS - VS Natural</td>
                </tr>
                <tr className="border-b border-[#EAE4DC] py-2.5">
                  <td className="py-2.5 font-medium text-[#78716A]">Diamond Color</td>
                  <td className="py-2.5 text-right font-semibold">E - F Near Colorless</td>
                </tr>
                <tr className="border-b border-[#EAE4DC] py-2.5">
                  <td className="py-2.5 font-medium text-[#78716A]">Certification</td>
                  <td className="py-2.5 text-right font-semibold">IGI / SGL Certified</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "shipping" && (
          <div className="max-w-2xl text-[14px] text-[#554E46] space-y-3 font-light leading-relaxed">
            <p>
              • <strong>Complimentary Insured Shipping:</strong> All orders are delivered via insured express courier with tamper-proof packaging.
            </p>
            <p>
              • <strong>30-Day Hassle-Free Returns:</strong> If you are not completely satisfied, return the jewellery in its original condition within 30 days for a full refund or exchange.
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="max-w-2xl text-[14px] text-[#3A3530] space-y-4">
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EAE4DC]">
              <div className="flex text-[#B38E5D] text-xs mb-1">★★★★★</div>
              <p className="italic text-[#554E46]">&ldquo;Simply magnificent sparkle. Arrived beautifully packed with all certification cards.&rdquo;</p>
              <span className="text-[12px] font-semibold text-[#141414] mt-2 block">— Babitha S., Verified Buyer</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default memo(JewelleryDetailsTabsComponent);
