"use client";

import { useState } from "react";
import Section from "@/components/common/Section";
import StaticPageLayout from "@/components/layout/StaticPageLayout";
import HelpBoxSection from "@/components/common/HelpBoxSection";
import TrackOrderForm from "./components/TrackOrderForm";
import TrackingHeader from "./components/TrackingHeader";
import TrackingItemPreview from "./components/TrackingItemPreview";
import TrackingTimeline from "./components/TrackingTimeline";

export default function TrackOrderClient() {
  const [trackType, setTrackType] = useState<"order" | "awb">("order");
  const [orderIdInput, setOrderIdInput] = useState("LX-89210");
  const [contactInput, setContactInput] = useState("+91 9876543210");
  const [isSearched, setIsSearched] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSearched(true);
    }, 500);
  };

  return (
    <StaticPageLayout
      pageTitle="Track Your Order"
      breadcrumbLabel="Track Order"
      description="Enter your Order ID or Courier AWB number below to view live location updates, transit logs, and estimated delivery times."
    >
      {/* SEARCH FORM COMPONENT */}
      <TrackOrderForm
        trackType={trackType}
        setTrackType={setTrackType}
        orderIdInput={orderIdInput}
        setOrderIdInput={setOrderIdInput}
        contactInput={contactInput}
        setContactInput={setContactInput}
        isLoading={isLoading}
        onSubmit={handleTrackSubmit}
      />

      {/* TRACKING RESULTS DISPLAY */}
      {isSearched && (
        <Section className="bg-surface/50 pb-16 sm:pb-24">
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
            <TrackingHeader orderId={orderIdInput} />
            <TrackingItemPreview />
            <TrackingTimeline />
          </div>
        </Section>
      )}

      {/* NEED ASSISTANCE HELP BOX */}
      <HelpBoxSection
        title="Need Live Delivery Support?"
        description="Our luxury concierge team is available to help you reschedule delivery times or assist with address changes."
        primaryAction={{ label: "Contact Concierge", href: "/contact" }}
        secondaryAction={{ label: "Call 1800-266-0123", href: "tel:18002660123" }}
      />

    </StaticPageLayout>
  );
}
