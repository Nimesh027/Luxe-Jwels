import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "The Luxe Journal | Jewellery Guides, Solitaire Trends & Gold Purity",
  description: "Explore the Luxe Journal for master jewellery guides, BIS 22K hallmarking standards, solitaire diamond 4Cs, and royal bridal couture trends.",
};

export default function BlogPage() {
  return <BlogClient />;
}
