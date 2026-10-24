"use client";

import { useState } from "react";
import Link from "next/link";

const termsSections = [
  {
    number: "1. General",
    content:
      "These terms and conditions govern your use of the Luxe Jewels website and purchase of our fine jewellery products. By placing an order, you agree to be bound by these provisions.",
  },
  {
    number: "2. Orders",
    content:
      "All orders placed through our platform are subject to item availability, address validation, and confirmation of order acceptance. We reserve the right to decline or cancel any order in exceptional circumstances.",
  },
  {
    number: "3. Pricing",
    content:
      "All prices are quoted in Indian Rupees (₹) inclusive of applicable taxes such as GST. Due to fluctuations in daily bullion gold rates, prices are subject to change without prior notice.",
  },
  {
    number: "4. Intellectual Property",
    content:
      "All content on this website, including jewellery CAD designs, photography, text, logos, and graphics, is the exclusive intellectual property of Luxe Jewels and protected by copyright laws.",
  },
  {
    number: "5. Limitation of Liability",
    content:
      "Luxe Jewels is not liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our products or website services.",
  },
];

const detailedSections = [
  {
    id: "pan-card",
    title: "PAN Card Mandatory Requirement",
    content:
      "In accordance with the Government of India tax mandates (Rule 114B of Income Tax Rules), furnishing a valid Permanent Account Number (PAN) is mandatory for any single transaction or cumulative purchase of gold and jewellery exceeding ₹2,00,000 (Rupees Two Lakhs). The invoice and delivery recipient name must match the PAN card documentation provided.",
  },
  {
    id: "pricing-fluctuation",
    title: "Bullion Market Pricing & Daily Gold Fluctuations",
    content:
      "All jewellery prices displayed on Luxe Jewels reflect real-time live precious metal indices (24K/22K/18K/14K Gold and 925 Silver). Once an order is placed and confirmed, the quoted price is locked regardless of subsequent intraday bullion price changes.",
  },
  {
    id: "shipping-destinations",
    title: "Shipping Destinations & Serviceability",
    content:
      "Luxe Jewels ships to over 19,000 pincodes across India via specialized high-security armoured logistics partners (Blue Dart Apex Vault, Sequel Logistics, and BVC Logistics). Delivery to PO Boxes, non-residential or unverified locations is strictly restricted for security.",
  },
  {
    id: "shipping-charges",
    title: "Shipping & Handling Charges",
    content:
      "We provide 100% complimentary standard insured shipping on all orders within India. No hidden packaging, handling, or transit insurance charges are levied at checkout.",
  },
  {
    id: "delivery-schedule",
    title: "Delivery Schedule & Dispatch Timelines",
    content:
      "Ready-to-ship products (solitaires, classic bands, ready diamond pendants) are dispatched within 24 to 48 hours. Bespoke handcrafted creations or custom-sized rings require 7 to 12 business days for casting, hallmarking, and master artisan hand-finishing.",
  },
  {
    id: "transit-insurance",
    title: "Comprehensive Transit Insurance Protection",
    content:
      "Every single Luxe Jewels shipment is 100% insured against loss, theft, damage, or in-transit tampering from our atelier vault until physical handover and OTP verification at your doorstep.",
  },
  {
    id: "website-content",
    title: "Website Content & Intellectual Property",
    content:
      "All photography, CAD jewellery renders, video material, trademarked insignia, typography layouts, and brand narrative on this website are the exclusive intellectual property of Luxe Jewels. Any unauthorized reproduction, scraping, or republication is actionable under the Copyright Act.",
  },
  {
    id: "encircle-points",
    title: "Redemption of Loyalty & Luxe Rewards Points",
    content:
      "Accumulated Luxe Rewards or partner loyalty points may be redeemed during checkout up to allowable threshold percentages. Loyalty points cannot be exchanged for liquid bullion bars or cash refunds.",
  },
  {
    id: "reviews-feedback",
    title: "Reviews, Customer Feedback & Submissions",
    content:
      "User-submitted reviews, video unboxings, and feedback submitted on Luxe Jewels are subject to review. We reserve the right to verify proof of purchase before publishing testimonials.",
  },
  {
    id: "force-majeure",
    title: "Force Majeure",
    content:
      "Luxe Jewels shall be excused from delivery delays caused by events beyond reasonable control, including natural catastrophes, severe weather anomalies, air-freight disruptions, or statutory lockdowns.",
  },
  {
    id: "governing-law",
    title: "Governing Law And Jurisdiction",
    content:
      "These Terms & Conditions are governed in all respects by the laws of India. Any legal dispute or claim arising shall be subject to the exclusive jurisdiction of the competent courts of Ahmedabad, Gujarat.",
  },
  {
    id: "tokenization-terms",
    title: "RBI Card-on-File Tokenization (CoFT) Compliance",
    content:
      "In full compliance with Reserve Bank of India (RBI) mandates, our payment gateway utilizes tokenized cryptography. No raw 16-digit card numbers or CVV numbers are stored on Luxe Jewels servers.",
  },
  {
    id: "authenticity-hallmarking",
    title: "BIS Hallmarking & Gemological Authenticity Guarantees",
    content:
      "100% of gold items bear the mandatory BIS Hallmark (including 6-digit HUID code). All diamond jewellery includes official gemological certificates (GIA, IGI, or SGL) verifying carat weight, color grade, and cut clarity.",
  },
];

export default function TermsClient() {
  const [agreed, setAgreed] = useState(false);
  const [openIds, setOpenIds] = useState<string[]>(["pan-card"]);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full bg-[#FAF7F2] min-h-screen">
      {/* 1. Header Banner */}
      <div className="relative overflow-hidden bg-[#181512] py-14 sm:py-20 border-b border-[#332E27]">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h1 className="font-display text-[32px] sm:text-[44px] md:text-[50px] text-white font-normal leading-tight mb-2">
            Terms & Conditions
          </h1>
          <p className="font-body text-[14px] sm:text-[16px] text-[#DDD6CD] font-light">
            Please read carefully
          </p>
        </div>
      </div>

      {/* 2. Numbered Core Summary Card */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-4xl">
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#EAE4DC] shadow-xs space-y-8">
          {termsSections.map((sec, idx) => (
            <div key={idx} className="pb-6 border-b border-[#F0EBE2] last:border-b-0 last:pb-0">
              <h3 className="font-display text-[17px] sm:text-[18px] font-semibold text-[#141414] mb-2">
                {sec.number}
              </h3>
              <p className="font-body text-[13.5px] sm:text-[14.5px] text-[#554E46] leading-relaxed font-light">
                {sec.content}
              </p>
            </div>
          ))}

          {/* Agreement Checkbox & Action */}
          <div className="pt-6 border-t border-[#EAE4DC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <label className="flex items-center gap-3 cursor-pointer text-[13.5px] text-[#141414]">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-4 h-4 rounded accent-[#B38E5D] cursor-pointer"
              />
              <span>I agree to the terms & conditions</span>
            </label>

            <Link
              href="/shop"
              className={`px-8 py-3 rounded-xl text-[14px] font-medium tracking-wide shadow-md transition-all ${ agreed ? "bg-[#B38E5D] hover:bg-[#9C7748] text-white cursor-pointer" : "bg-[#EAE4DC] text-[#8C827A] cursor-not-allowed pointer-events-none" }`}
            >
              Continue
            </Link>
          </div>
        </div>

        {/* 3. Detailed Regulatory & Policy Accordions */}
        <div className="mt-12 space-y-4">
          <h2 className="font-display text-[22px] sm:text-[26px] font-medium text-[#141414] mb-6 text-center">
            Detailed Statutory & Operational Provisions
          </h2>

          <div className="space-y-3">
            {detailedSections.map((section) => {
              const isOpen = openIds.includes(section.id);
              return (
                <div
                  key={section.id}
                  className="bg-white rounded-2xl border border-[#EAE4DC] overflow-hidden shadow-2xs transition-all hover:border-[#B38E5D]/40"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(section.id)}
                    className="w-full flex items-center justify-between p-5 text-left font-display text-[16px] sm:text-[17px] font-semibold text-[#141414] hover:text-[#B38E5D] cursor-pointer transition-colors"
                  >
                    <span className="pr-4">{section.title}</span>
                    <span
                      className={`w-7 h-7 rounded-full bg-[#FAF7F2] text-[#B38E5D] flex items-center justify-center font-bold text-sm shrink-0 transition-transform duration-300 ${ isOpen ? "rotate-45 bg-[#B38E5D] text-white" : "" }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-[13.5px] sm:text-[14px] text-[#554E46] leading-relaxed font-light border-t border-[#F0EBE2] animate-in fade-in duration-200">
                      <p className="pt-3">{section.content}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
