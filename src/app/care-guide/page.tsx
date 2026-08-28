import type { Metadata } from "next";
import CareGuideClient from "./CareGuideClient";

export const metadata: Metadata = {
  title: "Jewellery Care Guide | Luxe Jewels",
  description: "Learn how to clean, store, and preserve 22K/18K solid gold, natural diamonds, Kundan Polki, and pearls with Luxe Jewels care guide.",
};

export default function CareGuidePage() {
  return <CareGuideClient />;
}
