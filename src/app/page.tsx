import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeatureStrip from "@/components/sections/FeatureStrip";
import CategoryGrid from "@/components/sections/CategoryGrid";
import ManufacturingBanner from "@/components/sections/ManufacturingBanner";
import FeaturedCollections from "@/components/sections/Bestsellers";
import ForHimForHer from "@/components/sections/ForHimForHer";
import Testimonials from "@/components/sections/Testimonials";
import BrandStory from "@/components/sections/BrandStory";
import ServiceStrip from "@/components/sections/ServiceStrip";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Luxe Jewels | Timeless Elegance, Crafted for You" },
  description:
    "Explore luxury handcrafted jewellery at Luxe Jewels. Certified diamonds, hallmarked gold rings, necklaces, earrings, bracelets and bridal collections.",
  alternates: { canonical: "/" },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Luxe Jewels",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/collections?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Hero />
      <FeatureStrip />
      <CategoryGrid />
      <ManufacturingBanner />
      <FeaturedCollections />
      <div className="pt-[clamp(36px,4.5vw,64px)] bg-cream">
        <ForHimForHer />
      </div>
      <Testimonials />
      <BrandStory />
      <ServiceStrip />
    </>
  );
}
