"use client";

import Carousel from "@/components/common/Carousel";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import ProductCard from "@/components/common/ProductCard";
import Button from "@/components/ui/Button";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useAppSelector } from "@/store/hooks";
import { selectBestsellers } from "@/store/slices/productsSlice";

export default function Bestsellers() {
  const products = useAppSelector(selectBestsellers);
  const isLg = useMediaQuery("(min-width: 1024px)");
  const isSm = useMediaQuery("(min-width: 640px)");
  const itemsPerView = isLg ? 5 : isSm ? 3 : 2;

  return (
    <Section>
      <SectionTitle
        title="Most Loved Bestsellers"
        description="Explore our most coveted and iconic designs, handcrafted with timeless brilliance."
        align="center"
      />
      <Carousel
        items={products.map((product) => (
          <div key={product.id} className="px-2">
            <ProductCard product={product} />
          </div>
        ))}
        itemsPerView={itemsPerView}
      />

      {/* View All Button at the bottom */}
      <div className="mt-8 sm:mt-12 text-center">
        <Button
          href="/collections"
          variant="border"
          colorTheme="wine"
          size="lg"
          rightIcon={<ArrowRightIcon className="w-4 h-4" />}
          className="hover:shadow-md"
        >
          View All Bestsellers
        </Button>
      </div>
    </Section>
  );
}
