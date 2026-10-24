import type { Metadata } from "next";
import GuideHubClient from "@/components/guide/GuideHubClient";

export const metadata: Metadata = {
  title: "Guide & Learn | Gold Karats, Silver Standards, Diamond Types & Shapes",
  description:
    "Explore the complete fine jewellery education guide. Master 18k, 22k, 24k, 14k, 9k gold purity, 925 sterling & fine silver standards, natural mined vs CVD & HPHT lab-grown diamonds, and moissanite.",
  openGraph: {
    title: "Guide & Learn - Luxe Jewels Gemology & Metallurgy Hub",
    description:
      "A comprehensive guide to Gold Purity, Silver Standards, Diamond Science, and Diamond Shapes.",
    images: [
      {
        url: "/images/guide/gold/gold-18k.jpg",
        width: 1200,
        height: 1200,
        alt: "Luxe Jewels Guide & Learn",
      },
    ],
  },
};

export default function GuideHubPage() {
  return <GuideHubClient />;
}
