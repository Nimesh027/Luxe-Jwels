import ImageBanner from "@/components/common/ImageBanner";
import Button from "@/components/ui/Button";

const promoBanners = [
  {
    title: "Designer Jewellery",
    subtitle: "For every occasion",
    image: "/images/revamp/designer-jewellery-banner.jpg",
    imageAlt: "Model wearing a Luxe Jewels designer diamond necklace",
    href: "/shop",
    cta: "Shop Now",
  },
  {
    title: "Custom Jewellery",
    subtitle: "Bring your dream to life",
    image: "/images/revamp/custom-jewellery-banner.jpg",
    imageAlt: "Jeweller handcrafting a custom ring",
    href: "/contact",
    cta: "Get Started",
  },
];

export default function ForHimForHer() {
  return (
    <section className="bg-cream pb-[clamp(36px,4.5vw,64px)]" aria-label="Designer and custom jewellery">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {promoBanners.map((b) => (
          <ImageBanner
            key={b.title}
            image={b.image}
            imageAlt={b.imageAlt}
            title={b.title}
            subtitle={b.subtitle}
            size="sm"
            sizes="(max-width: 768px) 100vw, 650px"
            contentClassName="sm:px-8 lg:px-10"
          >
            <Button variant="outline" colorTheme="light" size="sm" href={b.href}>
              {b.cta}
            </Button>
          </ImageBanner>
        ))}
      </div>
    </section>
  );
}
