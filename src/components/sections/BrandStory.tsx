import ImageBanner from "@/components/common/ImageBanner";
import Button from "@/components/ui/Button";

export default function LuxuryTrustBanner() {
  return (
    <section className="bg-cream pb-[clamp(36px,4.5vw,64px)]" aria-label="Luxury, trust, forever">
      <div className="container">
        <ImageBanner
          image="/images/revamp/luxury-trust-banner.jpg"
          imageAlt="Diamond ring resting on gold silk"
          title="Luxury. Trust. Forever."
          subtitle="Every piece is hallmarked and certified to celebrate your most precious moments."
          size="sm"
          imageClassName="object-center lg:object-[center_35%]"
        >
          <Button variant="outline" colorTheme="light" size="sm" href="/shop">
            Shop Collection
          </Button>
        </ImageBanner>
      </div>
    </section>
  );
}
