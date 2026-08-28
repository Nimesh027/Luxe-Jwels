import type { Metadata } from "next";
import FaqsClient from "./FaqsClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQs) | Luxe Jewels",
  description: "Find instant answers to questions regarding Luxe Jewels 22K/18K Gold purity, diamond certification, order tracking, shipping, and lifetime exchange.",
};

export default function FaqsPage() {
  return <FaqsClient />;
}
