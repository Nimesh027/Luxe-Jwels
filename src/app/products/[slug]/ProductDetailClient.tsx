"use client";

import { useState } from "react";
import Section from "@/components/common/Section";
import JewelleryDetailsTabs from "@/components/shop/JewelleryDetailsTabs";
import BudgetExploreSection from "@/components/shop/BudgetExploreSection";
import ProductHeroSection from "@/components/product/ProductHeroSection";
import CustomerReviewsSection from "@/components/product/CustomerReviewsSection";
import RelatedProductsSection from "@/components/product/RelatedProductsSection";
import LightboxModal from "@/components/product/LightboxModal";
import SizeGuideModal from "@/components/product/SizeGuideModal";
import StickyAddToCartBar from "@/components/product/StickyAddToCartBar";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addItem as addToCart } from "@/store/slices/cartSlice";
import { setCartDrawerOpen } from "@/store/slices/uiSlice";

export default function ProductDetailClient({ slug }: { slug: string }) {
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector((state) => state.products.items);
  const product = allProducts.find((item) => item.slug === slug);
  const category = useAppSelector((state) =>
    state.categories.items.find((item) => item.slug === product?.category)
  );

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  if (!product) return null;

  const handleStickyAddToCart = () => {
    dispatch(addToCart({ product, quantity: 1 }));
    dispatch(setCartDrawerOpen(true));
  };

  const relatedProducts = allProducts
    .filter((item) => item.id !== product.id && item.category === product.category)
    .slice(0, 4);

  const images = [
    product.image,
    "/images/collections/couple-collection.jpg",
    "/images/collections/diamond-collection.jpg",
    "/images/category/rings.jpg",
  ];

  return (
    <>
      {/* Section 1: Hero Section (Breadcrumbs, Gallery, Swatches, Buy Box) */}
      <ProductHeroSection
        product={product}
        category={category}
        images={images}
        activeImageIndex={activeImageIndex}
        onSelectImage={setActiveImageIndex}
        onOpenLightbox={() => setIsLightboxOpen(true)}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* Section 2: Tabbed Jewellery Details (Accordions & Price Breakup) */}
      <JewelleryDetailsTabs product={product} />

      {/* Section 3: Why Choose Us (The Luxe Jewels Difference) */}
      <WhyChooseUs />

      {/* Section 4: Explore Similar Designs Within Your Budget */}
      <BudgetExploreSection currentProduct={product} allProducts={allProducts} />

      {/* Section 5: Customer Reviews & Ratings */}
      <CustomerReviewsSection />

      {/* Section 6: Related Products Recommendations */}
      <RelatedProductsSection relatedProducts={relatedProducts} />

      {/* FIXED STICKY BOTTOM ACTION BAR (MATCHING SCREENSHOT) */}
      <StickyAddToCartBar
        product={product}
        onAddToCart={handleStickyAddToCart}
      />

      {/* Lightbox Slider Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        images={images}
        activeIndex={activeImageIndex}
        productName={product.name}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={setActiveImageIndex}
      />

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
    </>
  );
}
