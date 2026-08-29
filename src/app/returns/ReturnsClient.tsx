"use client";

import StaticPageLayout from "@/components/layout/StaticPageLayout";
import ReturnHighlights from "./components/ReturnHighlights";
import ReturnPolicies from "./components/ReturnPolicies";
import ReturnHelpBox from "./components/ReturnHelpBox";

export default function ReturnsClient() {
  return (
    <StaticPageLayout
      pageTitle="Returns & Lifetime Exchange Policy"
      breadcrumbLabel="Returns & Exchange Policy"
      description="We want you to love your heirloom creation. Luxe Jewels offers a 15-day 100% money-back guarantee and a transparent Lifetime Exchange Policy for all fine jewellery."
    >
      <ReturnHighlights />
      <ReturnPolicies />
      <ReturnHelpBox />
    </StaticPageLayout>
  );
}
