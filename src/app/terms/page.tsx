import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the official Terms and Conditions for Luxe Jewels fine jewellery website.",
};

export default function TermsPage() {
  return <TermsClient />;
}
