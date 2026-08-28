import type { Metadata } from "next";
import OurStoryClient from "./OurStoryClient";

export const metadata: Metadata = {
  title: "Our Story & Heritage | Luxe Jewels",
  description: "Discover the story of Luxe Jewels. Royal Indian goldsmithing, 100% BIS Hallmarked 22K & 18K solid gold, certified natural diamonds, and lifetime exchange.",
};

export default function OurStoryPage() {
  return <OurStoryClient />;
}
