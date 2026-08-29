import React from "react";
import HelpBoxSection from "@/components/common/HelpBoxSection";

export default function ReturnHelpBox() {
  return (
    <HelpBoxSection
      title="Need to Request a Return or Exchange?"
      description="Log into your account to select the item you wish to return, or speak directly with our luxury concierge."
      primaryAction={{ label: "Go to My Orders", href: "/account" }}
      secondaryAction={{ label: "Contact Support", href: "/contact" }}
    />
  );
}
