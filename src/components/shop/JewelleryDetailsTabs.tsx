"use client";

import Image from "next/image";
import { useState } from "react";
import {
  DownOutlined,
  UpOutlined,
  GoldOutlined,
  CrownOutlined,
  ReadOutlined,
  StarOutlined,
} from "@ant-design/icons";
import SectionTitle from "@/components/common/SectionTitle";
import Tabs, { TabOption } from "@/components/ui/Tabs";
import type { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import Section from "../common/Section";

interface JewelleryDetailsTabsProps {
  product: Product;
}

type TabType = "details" | "price";
type AccordionKey = "metal" | "diamond" | "general" | "description";

export default function JewelleryDetailsTabs({ product }: JewelleryDetailsTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>("details");
  const [openAccordion, setOpenAccordion] = useState<AccordionKey | null>("metal");
  const [showFullDesc, setShowFullDesc] = useState(false);

  const detailTabOptions: TabOption<TabType>[] = [
    { id: "details", label: "Product Details" },
    { id: "price", label: "Price Breakup" },
  ];

  const toggleAccordion = (key: AccordionKey) => {
    setOpenAccordion((prev) => (prev === key ? null : key));
  };

  // Generate dynamic attributes based on product
  const skuId = `SKU ID : 504${product.id.slice(-4).toUpperCase()}YWRAAA322JD400106`;
  const isDiamondCategory =
    product.collections?.includes("diamond-collection") ||
    product.category === "rings" ||
    product.category === "pendants" ||
    product.name.toLowerCase().includes("diamond");

  // Dynamic Price Breakup calculations matching product.price
  const grandTotal = product.price;
  const gst = Math.round((grandTotal * 0.03) / 1.03); // 3% GST included
  const priceBeforeGst = grandTotal - gst;
  const discount = product.compareAtPrice
    ? product.compareAtPrice - product.price
    : Math.round(priceBeforeGst * 0.05);

  const subtotalBeforeDiscount = priceBeforeGst + discount;
  const goldValue = Math.round(subtotalBeforeDiscount * 0.58);
  const stoneValue = isDiamondCategory
    ? Math.round(subtotalBeforeDiscount * 0.28)
    : Math.round(subtotalBeforeDiscount * 0.18);
  const makingCharges = subtotalBeforeDiscount - goldValue - stoneValue;
  const goldWeightGrams = (goldValue / 12317.73).toFixed(3);

  return (
    <Section className="bg-white">
      <SectionTitle title="Jewellery Details" align="center" className="mb-8" />

      {/* Pill Switcher using central Tabs component */}
      <Tabs
        options={detailTabOptions}
        activeId={activeTab}
        onChange={setActiveTab}
        variant="pill"
        className="mb-10"
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
        {/* Left Column: Tab Content */}
        <div className="lg:col-span-7">
          {activeTab === "details" ? (
            <div className="space-y-4">
              {/* 1. Metal Details Accordion */}
              <div className="overflow-hidden rounded-2xl border border-border bg-white transition-all">
                <button
                  type="button"
                  onClick={() => toggleAccordion("metal")}
                  className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-ink hover:bg-cream/40 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cream text-gold-dark">
                      <GoldOutlined className="text-h5" />
                    </span>
                    <span className="text-caption font-semibold tracking-wider uppercase text-ink">
                      Metal Details
                    </span>
                  </div>
                  <span className={`text-caption text-muted transition-transform duration-300 ${openAccordion === "metal" ? "rotate-180" : ""}`}>
                    <DownOutlined />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${openAccordion === "metal"
                    ? "grid-rows-[1fr] opacity-100 border-t border-border/60"
                    : "grid-rows-[0fr] opacity-0 overflow-hidden"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="bg-cream/20 px-6 py-5">
                      <div className="grid grid-cols-2 gap-y-5 gap-x-6 sm:grid-cols-3">
                        <div>
                          <div className="font-display text-h4 font-medium text-ink">18K</div>
                          <div className="mt-0.5 text-caption text-muted">Karatage</div>
                        </div>
                        <div>
                          <div className="font-display text-h4 font-medium text-ink">Yellow</div>
                          <div className="mt-0.5 text-caption text-muted">Material Colour</div>
                        </div>
                        <div>
                          <div className="font-display text-h4 font-medium text-ink">
                            {goldWeightGrams}g
                          </div>
                          <div className="mt-0.5 text-caption text-muted">Gross Weight</div>
                        </div>
                        <div>
                          <div className="font-display text-h4 font-medium text-ink">Gold</div>
                          <div className="mt-0.5 text-caption text-muted">Metal</div>
                        </div>
                        <div>
                          <div className="font-display text-h4 font-medium text-ink">Standard</div>
                          <div className="mt-0.5 text-caption text-muted">Size</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Diamond Details Accordion */}
              <div className="overflow-hidden rounded-2xl border border-border bg-white transition-all">
                <button
                  type="button"
                  onClick={() => toggleAccordion("diamond")}
                  className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-ink hover:bg-cream/40 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cream text-gold-dark">
                      <StarOutlined className="text-h5" />
                    </span>
                    <span className="text-caption font-semibold tracking-wider uppercase text-ink">
                      Diamond Details
                    </span>
                  </div>
                  <span className={`text-caption text-muted transition-transform duration-300 ${openAccordion === "diamond" ? "rotate-180" : ""}`}>
                    <DownOutlined />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${openAccordion === "diamond"
                    ? "grid-rows-[1fr] opacity-100 border-t border-border/60"
                    : "grid-rows-[0fr] opacity-0 overflow-hidden"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="bg-cream/20 px-6 py-5">
                      <div className="grid grid-cols-2 gap-y-5 gap-x-6 sm:grid-cols-3">
                        <div>
                          <div className="font-display text-h4 font-medium text-ink">SI2 / VS1</div>
                          <div className="mt-0.5 text-caption text-muted">Diamond Clarity</div>
                        </div>
                        <div>
                          <div className="font-display text-h4 font-medium text-ink">G-H</div>
                          <div className="mt-0.5 text-caption text-muted">Diamond Color</div>
                        </div>
                        <div>
                          <div className="font-display text-h4 font-medium text-ink">09</div>
                          <div className="mt-0.5 text-caption text-muted">No Of Diamonds</div>
                        </div>
                        <div>
                          <div className="font-display text-h4 font-medium text-ink">Prong</div>
                          <div className="mt-0.5 text-caption text-muted">Diamond Setting</div>
                        </div>
                        <div>
                          <div className="font-display text-h4 font-medium text-ink">Round</div>
                          <div className="mt-0.5 text-caption text-muted">Diamond Shape</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. General Details Accordion */}
              <div className="overflow-hidden rounded-2xl border border-border bg-white transition-all">
                <button
                  type="button"
                  onClick={() => toggleAccordion("general")}
                  className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-ink hover:bg-cream/40 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cream text-gold-dark">
                      <CrownOutlined className="text-h5" />
                    </span>
                    <span className="text-caption font-semibold tracking-wider uppercase text-ink">
                      General Details
                    </span>
                  </div>
                  <span className={`text-caption text-muted transition-transform duration-300 ${openAccordion === "general" ? "rotate-180" : ""}`}>
                    <DownOutlined />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${openAccordion === "general"
                    ? "grid-rows-[1fr] opacity-100 border-t border-border/60"
                    : "grid-rows-[0fr] opacity-0 overflow-hidden"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="bg-cream/20 px-6 py-5">
                      <div className="grid grid-cols-2 gap-y-5 gap-x-6 sm:grid-cols-3">
                        <div>
                          <div className="font-display text-h4 font-medium text-ink capitalize">
                            {product.category}
                          </div>
                          <div className="mt-0.5 text-caption text-muted">Jewellery Type</div>
                        </div>
                        <div>
                          <div className="font-display text-h4 font-medium text-ink">Luxe Jewels</div>
                          <div className="mt-0.5 text-caption text-muted">Brand</div>
                        </div>
                        <div>
                          <div className="font-display text-h4 font-medium text-ink">
                            {product.isBestseller ? "Bestsellers" : "Signature"}
                          </div>
                          <div className="mt-0.5 text-caption text-muted">Collection</div>
                        </div>
                        <div>
                          <div className="font-display text-h4 font-medium text-ink capitalize">
                            {product.gender || "Women"}
                          </div>
                          <div className="mt-0.5 text-caption text-muted">Gender</div>
                        </div>
                        <div>
                          <div className="font-display text-h4 font-medium text-ink">Bridal Wear</div>
                          <div className="mt-0.5 text-caption text-muted">Occasion</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Description Accordion */}
              <div className="overflow-hidden rounded-2xl border border-border bg-white transition-all">
                <button
                  type="button"
                  onClick={() => toggleAccordion("description")}
                  className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-ink hover:bg-cream/40 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cream text-gold-dark">
                      <ReadOutlined className="text-h5" />
                    </span>
                    <span className="text-caption font-semibold tracking-wider uppercase text-ink">
                      Description
                    </span>
                  </div>
                  <span className={`text-caption text-muted transition-transform duration-300 ${openAccordion === "description" ? "rotate-180" : ""}`}>
                    <DownOutlined />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${openAccordion === "description"
                    ? "grid-rows-[1fr] opacity-100 border-t border-border/60"
                    : "grid-rows-[0fr] opacity-0 overflow-hidden"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="bg-cream/20 px-6 py-5">
                      <p className="text-small leading-relaxed text-muted">
                        {product.description ||
                          "Crafted in 18 Karat yellow gold, this diamond piece celebrates luxury and beauty with a touch of modern elegance. Stone Clarity: SI2. Embracing a minimalist design, this jewellery piece holds the power to captivate hearts with its unmatched brilliance."}
                        {!showFullDesc && (
                          <span>
                            {" "}
                            ...{" "}
                            <button
                              type="button"
                              onClick={() => setShowFullDesc(true)}
                              className="font-medium text-wine hover:underline cursor-pointer"
                            >
                              See more
                            </button>
                          </span>
                        )}
                      </p>
                      {showFullDesc && (
                        <p className="mt-3 text-small leading-relaxed text-muted">
                          Every piece comes with a hallmark certificate verifying the purity of gold
                          and diamond authenticity. Handcrafted by master artisans with precision and
                          care.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Price Breakup Tab */
            <div className="space-y-4">
              {/* 1. Mobile Card View (Shown on < 640px) */}
              <div className="space-y-3 sm:hidden">
                {/* Yellow Gold Item */}
                <div className="rounded-2xl border border-border/80 bg-white p-4 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-border/40 pb-2.5">
                    <span className="flex items-center gap-2 text-caption font-semibold text-ink">
                      <span className="h-3 w-3 rounded-full bg-amber-400 border border-amber-600/30" />
                      Yellow Gold 18KT
                    </span>
                    <span className="font-display text-small font-semibold text-ink">
                      {formatPrice(goldValue)}
                    </span>
                  </div>
                  <div className="mt-2.5 grid grid-cols-2 text-[11px] text-muted">
                    <div>Rate: <span className="text-ink font-medium">₹12,317.73/g</span></div>
                    <div className="text-right">Weight: <span className="text-ink font-medium">{goldWeightGrams}g</span></div>
                  </div>
                </div>

                {/* Stone / Diamond Item */}
                <div className="rounded-2xl border border-border/80 bg-white p-4 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-border/40 pb-2.5">
                    <span className="flex items-center gap-2 text-caption font-semibold text-ink">
                      <span className="h-3 w-3 rounded-full bg-slate-300 border border-slate-400/40" />
                      Stone / Diamond
                    </span>
                    <span className="font-display text-small font-semibold text-ink">
                      {formatPrice(stoneValue)}
                    </span>
                  </div>
                  <div className="mt-2.5 text-[11px] text-muted">
                    Weight / Count: <span className="text-ink font-medium">{isDiamondCategory ? "0.302 ct / 0.060 g" : "0.150 ct"}</span>
                  </div>
                </div>

                {/* Making Charges */}
                <div className="rounded-2xl border border-border/80 bg-white p-4 flex items-center justify-between text-caption shadow-2xs">
                  <span className="font-medium text-ink">Making Charges</span>
                  <span className="font-display text-small font-semibold text-ink">{formatPrice(makingCharges)}</span>
                </div>

                {/* Sub Total */}
                <div className="rounded-2xl border border-border/80 bg-cream/40 p-4 flex items-center justify-between text-caption">
                  <span className="font-medium text-ink">Sub Total ({goldWeightGrams}g Gross Wt.)</span>
                  <span className="font-display text-small font-semibold text-ink">{formatPrice(subtotalBeforeDiscount)}</span>
                </div>

                {/* Discount */}
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 flex items-center justify-between text-caption text-emerald-800">
                  <span className="font-medium">Special Discount</span>
                  <span className="font-bold text-small">-{formatPrice(discount)}</span>
                </div>

                {/* GST (3%) */}
                <div className="rounded-2xl border border-border/80 bg-white p-4 flex items-center justify-between text-caption text-muted shadow-2xs">
                  <span>GST (3% Included)</span>
                  <span className="font-medium text-ink">{formatPrice(gst)}</span>
                </div>

                {/* Grand Total */}
                <div className="rounded-2xl border-2 border-wine bg-wine/5 p-4 flex items-center justify-between text-wine">
                  <span className="font-display text-small font-semibold">Grand Total</span>
                  <span className="font-display text-h5 font-bold">{formatPrice(grandTotal)}</span>
                </div>
              </div>

              {/* 2. Desktop Detailed Table View (Shown on >= 640px) */}
              <div className="hidden sm:block overflow-hidden rounded-2xl border border-border bg-white shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-caption">
                    <thead className="border-b border-border bg-cream/40 font-semibold tracking-wider text-muted uppercase">
                      <tr>
                        <th className="py-3.5 px-4">Product Details</th>
                        <th className="py-3.5 px-4">Rate</th>
                        <th className="py-3.5 px-4">Weight</th>
                        <th className="py-3.5 px-4">Discount</th>
                        <th className="py-3.5 px-4 text-right">Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60 text-ink">
                      <tr>
                        <td className="py-3.5 px-4 font-medium">
                          <div className="flex items-center gap-2">
                            <span className="inline-block h-3 w-3 rounded-full bg-gold"></span>
                            Yellow Gold <span className="text-muted text-[11px]">18KT</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-muted">₹ 12,317.73/g</td>
                        <td className="py-3.5 px-4 text-muted">{goldWeightGrams}g</td>
                        <td className="py-3.5 px-4 text-muted">-</td>
                        <td className="py-3.5 px-4 text-right font-medium">
                          {formatPrice(goldValue)}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 font-medium">
                          <div className="flex items-center gap-2">
                            <span className="inline-block h-3 w-3 rounded-full bg-slate-300"></span>
                            Stone / Diamond
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-muted">-</td>
                        <td className="py-3.5 px-4 text-muted">0.302 ct / 0.060 g</td>
                        <td className="py-3.5 px-4 text-muted">-</td>
                        <td className="py-3.5 px-4 text-right font-medium">
                          {formatPrice(stoneValue)}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 font-medium">Making Charges</td>
                        <td className="py-3.5 px-4 text-muted">-</td>
                        <td className="py-3.5 px-4 text-muted">-</td>
                        <td className="py-3.5 px-4 text-muted">-</td>
                        <td className="py-3.5 px-4 text-right font-medium">
                          {formatPrice(makingCharges)}
                        </td>
                      </tr>
                      <tr className="bg-cream/20 font-medium">
                        <td className="py-3.5 px-4">Sub Total</td>
                        <td className="py-3.5 px-4 text-muted">-</td>
                        <td className="py-3.5 px-4 text-muted">{goldWeightGrams}g Gross Wt.</td>
                        <td className="py-3.5 px-4 text-muted">-</td>
                        <td className="py-3.5 px-4 text-right">
                          {formatPrice(subtotalBeforeDiscount)}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 font-medium text-emerald-700">Discount</td>
                        <td className="py-3.5 px-4 text-muted">-</td>
                        <td className="py-3.5 px-4 text-muted">-</td>
                        <td className="py-3.5 px-4 font-semibold text-emerald-700">
                          -{formatPrice(discount)}
                        </td>
                        <td className="py-3.5 px-4 text-right">-</td>
                      </tr>
                      <tr className="bg-cream/20">
                        <td className="py-3.5 px-4 font-medium">Subtotal after Discount</td>
                        <td className="py-3.5 px-4 text-muted">-</td>
                        <td className="py-3.5 px-4 text-muted">-</td>
                        <td className="py-3.5 px-4 text-muted">-</td>
                        <td className="py-3.5 px-4 text-right font-medium">
                          {formatPrice(priceBeforeGst)}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 font-medium">GST (3%)</td>
                        <td className="py-3.5 px-4 text-muted">-</td>
                        <td className="py-3.5 px-4 text-muted">-</td>
                        <td className="py-3.5 px-4 text-muted">-</td>
                        <td className="py-3.5 px-4 text-right font-medium">
                          {formatPrice(gst)}
                        </td>
                      </tr>
                      <tr className="bg-wine/5 font-semibold text-ink">
                        <td className="py-4 px-4 font-display text-small">Grand Total</td>
                        <td className="py-4 px-4" colSpan={3}></td>
                        <td className="py-4 px-4 text-right font-display text-body text-wine">
                          {formatPrice(grandTotal)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: SKU & Product Showcase Card */}
        <div className="lg:col-span-5">
          <div className="space-y-3">
            <div className="text-right text-[11px] font-mono tracking-wider text-muted">
              {skuId}
            </div>

            <div className="relative aspect-square w-full min-h-[260px] sm:min-h-[320px] overflow-hidden rounded-2xl border border-border bg-cream-dark shadow-xs">
              <Image
                src={product.image || "/images/product/diamond-ring.jpg"}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-gold/30 bg-gold/5 p-4 text-caption text-ink">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-dark">
                <StarOutlined className="text-body" />
              </span>
              <p className="leading-tight">
                Enjoy sparkling jewellery! We provide <strong>free jewellery cleaning services</strong>!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
