"use client";

import StaticPageLayout from "@/components/layout/StaticPageLayout";
import ContactFAQ from "./components/ContactFAQ";
import ContactSupportOptions from "./components/ContactSupportOptions";

export default function ContactClient() {
  return (
    <StaticPageLayout pageTitle="Help & Contact" className="pt-0 sm:pt-0 pb-16">
      <ContactSupportOptions />
      <ContactFAQ />
    </StaticPageLayout>
  );
}
