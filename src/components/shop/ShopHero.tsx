import PageHero, { type Crumb } from "@/components/common/PageHero";

interface ShopHeroProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  breadcrumbs?: Crumb[];
}

export default function ShopHero({
  title = "Shop All Jewellery",
  subtitle = "Timeless designs for every occasion",
  imageSrc = "/images/revamp/ring-macro.jpg",
  breadcrumbs,
}: ShopHeroProps) {
  return (
    <PageHero
      title={title}
      subtitle={subtitle}
      image={imageSrc}
      breadcrumbs={breadcrumbs ?? [{ label: title }]}
    />
  );
}
