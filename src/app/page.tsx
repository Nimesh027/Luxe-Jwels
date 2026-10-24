import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeatureStrip from "@/components/sections/FeatureStrip";
import CategoryGrid from "@/components/sections/CategoryGrid";
import ManufacturingBanner from "@/components/sections/ManufacturingBanner";
import FeaturedCollections from "@/components/sections/Bestsellers";
import ForHimForHer from "@/components/sections/ForHimForHer";
import NewCollection from "@/components/sections/NewCollection";
import Collections from "@/components/sections/Collections";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import BrandStory from "@/components/sections/BrandStory";
import ServiceStrip from "@/components/sections/ServiceStrip";
import Instagram from "@/components/sections/Instagram";

export const metadata: Metadata = {
  title: "Luxe Jewels | Timeless Elegance, Crafted for You",
  description:
    "Explore luxury handcrafted jewellery at Luxe Jewels. Certified diamonds, hallmarked gold rings, necklaces, bracelets, and bridal collections.",
  openGraph: {
    title: "Luxe Jewels | Timeless Elegance, Crafted for You",
    description:
      "Handcrafted fine jewellery for life's most precious moments. Hallmarked gold & certified diamonds.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      {/* 1. Hero Showcase */}
      <Hero />

      {/* 2. Top Trust Pillars Strip */}
      <FeatureStrip />

      {/* 3. Shop by Category (Circular 8-item grid) */}
      <CategoryGrid />

      {/* 4. Explore Our Manufacturing Banner */}
      <ManufacturingBanner />

      {/* 5. Featured Collections Tabbed Product Grid */}
      <FeaturedCollections />

      {/* 6. Dual Promotional Banners (Designer & Custom Jewellery) */}
      <ForHimForHer />

      {/* 7. New Collection Spotlight Banner */}
      <NewCollection />

      {/* 8. Signature Curated Collections */}
      <Collections />

      {/* 9. The Luxe Jewels Difference */}
      <WhyChooseUs />

      {/* 10. Loved by Thousands Customer Reviews */}
      <Testimonials />

      {/* 11. Luxury. Trust. Forever. Brand Showcase */}
      <BrandStory />

      {/* 12. Authentic Assurance Pillars */}
      <ServiceStrip />

      {/* 13. Social Community Gallery */}
      <Instagram />
    </>
  );
}
