"use client";

import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import ProductCard from "@/components/common/ProductCard";
import Button from "@/components/ui/Button";
import { useWishlist } from "@/hooks/useWishlist";

export default function WishlistClient() {
  const { items } = useWishlist();

  // Empty Wishlist State
  if (items.length === 0) {
    return (
      <Section>
        <div className="mx-auto flex max-w-lg flex-col items-center justify-center text-center px-4">
          {/* Heart Halo Icon */}
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-wine/10 text-wine mb-6 shadow-xs">
            <svg
              className="h-10 w-10 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          {/* Heading & Subtitle */}
          <h1 className="font-display text-2xl sm:text-3xl font-medium text-ink tracking-tight mb-2.5">
            Your wishlist is empty
          </h1>
          <p className="text-xs sm:text-sm text-muted font-light leading-relaxed mb-8 max-w-sm">
            Your saved pieces, all in one place. Explore our handcrafted fine jewellery suites and save your favorite heirloom creations.
          </p>

          {/* Continue Shopping CTA */}
          <Button
            href="/collections"
            variant="fill"
            colorTheme="wine"
            size="lg"
            className="rounded-full px-8 uppercase tracking-wider text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg"
          >
            Continue Shopping
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <SectionTitle
        title="My Wishlist"
        description="Your saved pieces, all in one place"
        align="center"
        className="mb-10 sm:mb-12"
      />

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  );
}
