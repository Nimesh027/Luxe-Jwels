import Hero from "@/components/sections/Hero";
import FeatureStrip from "@/components/sections/FeatureStrip";
import CategoryGrid from "@/components/sections/CategoryGrid";
import Bestsellers from "@/components/sections/Bestsellers";
import ForHimForHer from "@/components/sections/ForHimForHer";
import NewCollection from "@/components/sections/NewCollection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Collections from "@/components/sections/Collections";
import Testimonials from "@/components/sections/Testimonials";
import BrandStory from "@/components/sections/BrandStory";
import ServiceStrip from "@/components/sections/ServiceStrip";
import Instagram from "@/components/sections/Instagram";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <CategoryGrid />
      <Bestsellers />
      <ForHimForHer />
      <NewCollection />
      <WhyChooseUs />
      <Collections />
      <Testimonials />
      <BrandStory />
      <ServiceStrip />
      <Instagram />
      <Newsletter />
    </>
  );
}
