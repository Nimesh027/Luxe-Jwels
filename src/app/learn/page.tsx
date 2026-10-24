import type { Metadata } from "next";
import GuideHubClient from "@/components/guide/GuideHubClient";

export const metadata: Metadata = {
  title: "Learn & Guide | Precious Metals & Gemstones Education",
  alternates: { canonical: "/guide" },
  description:
    "Learn everything about 18k, 22k, 24k, 14k, 9k gold, 925 sterling silver, CVD and HPHT lab-grown diamonds, real diamonds, and moissanite.",
};

export default function LearnPage() {
  return <GuideHubClient />;
}
