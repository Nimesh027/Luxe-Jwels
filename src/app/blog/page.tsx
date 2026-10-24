import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Jewellery Tips, Trends & Stories",
  description:
    "Expert advice from Luxe Jewels on choosing engagement rings, caring for diamonds, gold purity and the latest fine jewellery trends.",
  alternates: { canonical: "/blog" },
};

export default function Page() {
  return <BlogClient />;
}
