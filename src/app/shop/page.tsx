import type { Metadata } from "next";
import ShopClient from "./ShopClient";

export const metadata: Metadata = {
  title: "Shop All Jewellery | Luxe Jewels",
  description:
    "Browse our full collection of certified fine jewellery — diamonds, gold rings, necklaces, earrings, bracelets and pendants for men and women.",
  openGraph: {
    title: "Shop All Jewellery | Luxe Jewels",
    description:
      "Discover handcrafted fine jewellery in gold and diamonds. Shop rings, necklaces, earrings, bracelets and more.",
  },
};

export default function ShopPage() {
  return <ShopClient />;
}
