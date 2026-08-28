"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/common/Section";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import Input from "@/components/ui/Input";

export default function TrackOrderClient() {
  const [trackType, setTrackType] = useState<"order" | "awb">("order");
  const [orderIdInput, setOrderIdInput] = useState("LX-89210");
  const [contactInput, setContactInput] = useState("+91 9876543210");
  const [isSearched, setIsSearched] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSearched(true);
    }, 500);
  };

  const handleCopyLink = () => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const timelineSteps = [
    {
      title: "Order Placed & Vault Reserved",
      date: "24 Aug, 10:30 AM",
      location: "Luxe Jewels Vault, Mumbai",
      description: "Payment confirmed. Item reserved from primary vault inventory.",
      status: "completed",
      icon: "💎",
    },
    {
      title: "BIS Hallmark & Gemologist Audit",
      date: "25 Aug, 02:15 PM",
      location: "Quality Assurance Lab, Mumbai",
      description: "22K/18K Gold purity & IGI Diamond certification verified.",
      status: "completed",
      icon: "🔍",
    },
    {
      title: "Dispatched via Sequel Express Air",
      date: "26 Aug, 09:00 AM",
      location: "Mumbai Airport Cargo Terminal",
      description: "Handed to Sequel Logistics. 100% transit insurance activated.",
      status: "completed",
      icon: "✈️",
    },
    {
      title: "Out for Delivery",
      date: "27 Aug, 08:30 AM",
      location: "Bengaluru Delivery Hub",
      description: "Courier agent on the way. Please keep OTP ready upon arrival.",
      status: "active",
      icon: "🚚",
    },
    {
      title: "Delivered & Verified",
      date: "Est. Today by 5:00 PM",
      location: "Bengaluru Residence",
      description: "Final OTP verification and recipient signature confirmation.",
      status: "pending",
      icon: "🎁",
    },
  ];

  return (
    <Section className="py-8 sm:py-14 bg-gradient-to-b from-[#FAF0F2]/60 via-surface to-background min-h-screen">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* BREADCRUMB NAVIGATION */}
        <Breadcrumbs items={[{ label: "Track Order" }]} className="mb-6" />

        {/* HERO BADGE & PAGE TITLE */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-wine/10 text-wine rounded-full text-[11px] font-bold uppercase tracking-widest border border-wine/20">
            <span>✨</span> REAL-TIME LUXURY SHIPMENT TRACKING
          </span>
          <h1 className="font-display text-3xl sm:text-5xl text-wine font-semibold tracking-tight">
            Track Your Order
          </h1>
          <p className="text-xs sm:text-sm text-muted font-normal leading-relaxed">
            Enter your Order ID or Courier AWB number below to view live location updates, transit logs, and estimated delivery times.
          </p>
        </div>

        {/* SEARCH FORM GLASS CARD */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-wine/20 p-6 sm:p-10 shadow-[0_15px_40px_rgba(128,34,47,0.08)] max-w-2xl mx-auto mb-12 relative overflow-hidden">
          
          {/* Subtle Corner Glow Accent */}
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-wine/10 rounded-full blur-2xl pointer-events-none" />

          {/* Toggle Mode Tabs */}
          <div className="grid grid-cols-2 gap-2 p-1.5 bg-[#F8EFEF]/80 rounded-2xl mb-6 border border-wine/10">
            <button
              type="button"
              onClick={() => setTrackType("order")}
              className={`py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                trackType === "order"
                  ? "bg-white text-wine shadow-sm"
                  : "text-muted hover:text-ink"
              }`}
            >
              Order ID & Mobile
            </button>
            <button
              type="button"
              onClick={() => setTrackType("awb")}
              className={`py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                trackType === "awb"
                  ? "bg-white text-wine shadow-sm"
                  : "text-muted hover:text-ink"
              }`}
            >
              AWB Tracking Number
            </button>
          </div>

          {/* Input Form */}
          <form onSubmit={handleTrackSubmit} className="space-y-4">
            <Input
              id="track-order-id-input"
              label={trackType === "order" ? "Order ID" : "AWB / Waybill Number"}
              labelAction={<span className="text-[11px] text-muted font-normal uppercase">e.g. {trackType === "order" ? "LX-89210" : "SQL-98234109"}</span>}
              type="text"
              variant="light"
              value={orderIdInput}
              onChange={(e) => setOrderIdInput(e.target.value)}
              placeholder={trackType === "order" ? "LX-89210" : "SQL-98234109"}
              inputClassName="font-mono uppercase tracking-wider"
              trailingIcon={<span className="text-xs">🏷️</span>}
              required
            />

            <Input
              id="track-contact-input"
              label="Mobile Number or Email Address"
              type="text"
              variant="light"
              value={contactInput}
              onChange={(e) => setContactInput(e.target.value)}
              placeholder="+91 9876543210"
              trailingIcon={<span className="text-xs">📱</span>}
              required
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-[#80222F] hover:bg-[#681B26] text-white rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-lg cursor-pointer active:scale-95 flex items-center justify-center gap-2 mt-2"
            >
              {isLoading ? (
                <span className="inline-block animate-spin text-lg">⏳</span>
              ) : (
                <>
                  <span>TRACK SHIPMENT</span>
                  <span className="text-base">→</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* TRACKING RESULTS DISPLAY */}
        {isSearched && (
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
            
            {/* 1. TOP SHIPMENT HEADER CARD */}
            <div className="bg-surface rounded-3xl border border-wine/30 p-6 sm:p-8 shadow-sm space-y-6">
              
              {/* Header Badge & Title Row */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-border/80">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="font-display font-bold text-xl sm:text-2xl text-wine">
                      Order #{orderIdInput || "LX-89210"}
                    </h2>
                    <span className="px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200/80 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-2xs">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                      Out for Delivery
                    </span>
                  </div>
                  <p className="text-xs text-muted font-medium">
                    Courier: <strong className="text-ink">Sequel Express Air (100% Transit Insured)</strong> • AWB: <span className="font-mono text-ink">SQL-98234109</span>
                  </p>
                </div>

                {/* Quick Action Buttons */}
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="px-3.5 py-2 bg-white border border-border hover:border-wine/40 text-ink rounded-xl text-xs font-medium transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{copiedLink ? "✓ Copied!" : "🔗 Share Link"}</span>
                  </button>
                  <Link
                    href="/contact"
                    className="px-3.5 py-2 bg-wine/10 hover:bg-wine/20 text-wine rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5"
                  >
                    <span>📞 Contact Agent</span>
                  </Link>
                </div>
              </div>

              {/* Delivery ETA & Address Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#FAF0F2] rounded-2xl p-4 border border-wine/15 space-y-1">
                  <span className="text-[10px] text-muted uppercase tracking-wider font-semibold block">
                    Estimated Delivery
                  </span>
                  <span className="font-display font-bold text-base sm:text-lg text-wine block">
                    Today by 5:00 PM
                  </span>
                  <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                    <span>🔒</span> OTP Verification Required
                  </span>
                </div>

                <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200/80 space-y-1">
                  <span className="text-[10px] text-muted uppercase tracking-wider font-semibold block">
                    Delivery Address
                  </span>
                  <span className="text-xs font-semibold text-ink block truncate">
                    Parthik Bhilvala
                  </span>
                  <span className="text-xs text-muted block line-clamp-1">
                    Flat 302, Luxe Residency, MG Road, Bengaluru - 560001
                  </span>
                </div>

                <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200/80 space-y-1">
                  <span className="text-[10px] text-muted uppercase tracking-wider font-semibold block">
                    Package Contents
                  </span>
                  <span className="text-xs font-semibold text-ink block truncate">
                    Eternal Halo Diamond Ring
                  </span>
                  <span className="text-xs text-muted block">
                    18K Solid Gold • 1 Unit (Velvet Box)
                  </span>
                </div>
              </div>

            </div>

            {/* 2. ITEM PREVIEW CARD */}
            <div className="bg-surface rounded-2xl border border-border/80 p-5 shadow-2xs flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-neutral-100 shrink-0 border border-border/60">
                  <Image
                    src="/images/products/solitaire-ring.jpg"
                    alt="Eternal Halo Diamond Ring"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm sm:text-base text-ink">
                    Eternal Halo Diamond Ring
                  </h4>
                  <p className="text-xs text-muted">18K Solid Gold • BIS Hallmarked • Size: 47 * 57 mm</p>
                  <span className="font-semibold text-xs text-ink mt-0.5 block">₹42,999</span>
                </div>
              </div>

              <Link
                href="/products/solitaire-ring"
                className="hidden sm:inline-flex px-4 py-2 border border-border hover:border-wine text-xs font-semibold rounded-full text-ink hover:text-wine transition-all"
              >
                View Item
              </Link>
            </div>

            {/* 3. STEPPER PROGRESS TIMELINE */}
            <div className="bg-surface rounded-3xl border border-border/80 p-6 sm:p-10 shadow-xs space-y-8">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-wine">
                  Shipment Journey Timeline
                </h3>
                <span className="text-xs text-muted font-medium">Live Status Updates</span>
              </div>

              {/* Vertical Stepper List */}
              <div className="relative pl-6 sm:pl-10 space-y-8">
                {timelineSteps.map((step, index) => {
                  const isCompleted = step.status === "completed";
                  const isActive = step.status === "active";
                  const isLast = index === timelineSteps.length - 1;

                  return (
                    <div key={index} className="relative flex items-start gap-4 sm:gap-6 pb-2 last:pb-0">
                      
                      {/* Connecting Line to Next Step (Omitted on Last Step) */}
                      {!isLast && (
                        <div className="absolute -left-[10px] sm:-left-[24px] top-8 -bottom-8 w-0.5 bg-border/70" />
                      )}

                      {/* Step Circle Indicator */}
                      <div
                        className={`absolute -left-6 sm:-left-10 top-0.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all shadow-2xs z-10 ${
                          isCompleted
                            ? "bg-wine text-white"
                            : isActive
                            ? "bg-amber-500 text-white ring-4 ring-amber-100 animate-pulse"
                            : "bg-neutral-200 text-neutral-400"
                        }`}
                      >
                        {isCompleted ? "✓" : step.icon}
                      </div>

                      {/* Content Block */}
                      <div className="space-y-1 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4
                            className={`font-display font-semibold text-sm sm:text-base ${
                              isCompleted || isActive ? "text-wine" : "text-neutral-400"
                            }`}
                          >
                            {step.title}
                          </h4>
                          <span
                            className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                              isActive
                                ? "bg-amber-50 text-amber-700 border border-amber-200"
                                : "bg-neutral-100 text-muted"
                            }`}
                          >
                            {step.date}
                          </span>
                        </div>

                        <p className="text-xs text-ink/80 font-normal leading-relaxed">
                          {step.description}
                        </p>

                        <span className="text-[11px] text-muted font-medium flex items-center gap-1 pt-0.5">
                          <span>📍</span> {step.location}
                        </span>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}

        {/* NEED ASSISTANCE HELP BOX */}
        <div className="mt-12 text-center bg-white/80 rounded-2xl border border-wine/15 p-8 max-w-2xl mx-auto space-y-3 shadow-2xs">
          <h3 className="font-display text-lg font-semibold text-wine">
            Need Live Delivery Support?
          </h3>
          <p className="text-xs text-muted leading-relaxed">
            Our luxury concierge team is available to help you reschedule delivery times or assist with address changes.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-[#80222F] text-white rounded-full text-xs font-semibold hover:bg-wine-dark transition-all cursor-pointer shadow-xs"
            >
              Contact Concierge
            </Link>
            <a
              href="tel:18002660123"
              className="px-6 py-2.5 bg-white border border-wine/30 text-wine rounded-full text-xs font-semibold hover:bg-wine hover:text-white transition-all cursor-pointer shadow-2xs"
            >
              Call 1800-266-0123
            </a>
          </div>
        </div>

      </div>
    </Section>
  );
}
