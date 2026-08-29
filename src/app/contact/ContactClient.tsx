"use client";

import Link from "next/link";
import Section from "@/components/common/Section";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import ContactFAQ from "./components/ContactFAQ";
import ContactSupportOptions from "./components/ContactSupportOptions";
export default function ContactClient() {

  return (
    <>
      <Section>
        {/* BREADCRUMB NAVIGATION */}
        <Breadcrumbs items={[{ label: "Help & Contact" }]} />

        {/* MAIN PAGE TITLE */}
        <h1 className="font-display text-3xl sm:text-4xl text-wine font-semibold tracking-wide text-center mb-10 sm:mb-12">
          Help & Contact
        </h1>
      </Section>
      {/* HAVE A QUESTION MAIN CARD (MATCHING USER SCREENSHOT) */}
      <ContactSupportOptions />

      {/* FREQUENTLY ASKED QUESTIONS (FAQ) SECTION */}
      <ContactFAQ />
    </>
  );
}
