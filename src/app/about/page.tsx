import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "Our Story & Heritage | Luxe Jewels",
  description: "Discover the heritage of Luxe Jewels. Master Indian goldsmithing, 100% BIS Hallmarked 22K & 18K solid gold, certified natural diamonds, and lifetime exchange.",
};

export default function AboutPage() {
  return <AboutClient />;
}
