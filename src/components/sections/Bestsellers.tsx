"use client";

import Carousel from "@/components/common/Carousel";
import Section from "@/components/common/Section";
import ProductCard from "@/components/common/ProductCard";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useAppSelector } from "@/store/hooks";
import { selectBestsellers } from "@/store/slices/productsSlice";

export default function Bestsellers() {
  const products = useAppSelector(selectBestsellers);
  const isLg = useMediaQuery("(min-width: 1024px)");
  const isSm = useMediaQuery("(min-width: 640px)");
  const itemsPerView = isLg ? 5 : isSm ? 3 : 2;

  return (
    <Section title="Bestsellers" viewAllHref="/collections">
      <Carousel
        items={products.map((product) => (
          <div key={product.id} className="px-2">
            <ProductCard product={product} />
          </div>
        ))}
        itemsPerView={itemsPerView}
      />
    </Section>
  );
}
