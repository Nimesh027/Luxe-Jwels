import type { Metadata } from "next";
import ReturnsClient from "./ReturnsClient";

export const metadata: Metadata = {
  title: "Returns & Lifetime Exchange Policy | Luxe Jewels",
  description: "Learn about Luxe Jewels 15-day 100% money-back guarantee, free insured doorstep reverse pickup, and transparent Lifetime Exchange & Buyback policy.",
};

export default function ReturnsPage() {
  return <ReturnsClient />;
}
