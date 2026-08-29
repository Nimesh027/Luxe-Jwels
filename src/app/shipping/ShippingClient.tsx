"use client";

import StaticPageLayout from "@/components/layout/StaticPageLayout";
import ShippingHighlights from "./components/ShippingHighlights";
import ShippingDetails from "./components/ShippingDetails";
import ShippingHelpBox from "./components/ShippingHelpBox";

export default function ShippingClient() {
  return (
    <StaticPageLayout
      pageTitle="Shipping & Delivery Policy"
      breadcrumbLabel="Shipping & Delivery"
      description="At Luxe Jewels, every creation is handcrafted with extreme precision and delivered in tamper-evident, 100% transit-insured luxury packaging directly to your doorstep."
    >
      <ShippingHighlights />
      <ShippingDetails />
      <ShippingHelpBox />

    </StaticPageLayout>
  );
}
