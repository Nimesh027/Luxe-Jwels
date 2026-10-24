import type { Metadata } from "next";
import TermsClient from "../terms/TermsClient";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  alternates: { canonical: "/terms" },
  description: "Read the official Terms and Conditions for Luxe Jewels fine jewellery website.",
};

export default function TermsAndConditionsPage() {
  return <TermsClient />;
}
