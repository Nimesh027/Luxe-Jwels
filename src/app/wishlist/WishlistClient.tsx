"use client";

import Section from "@/components/common/Section";
import ProductCard from "@/components/common/ProductCard";
import Button from "@/components/ui/Button";
import { useWishlist } from "@/hooks/useWishlist";

export default function WishlistClient() {
  const { items } = useWishlist();

  if (items.length === 0) {
    return (
      <Section title="Your Wishlist">
        <div className="flex flex-col items-start gap-4">
          <p className="text-sm text-muted">You haven&apos;t saved any pieces yet.</p>
          <Button href="/collections" variant="dark">
            Explore Collections
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <Section title="Your Wishlist" subtitle={`${items.length} saved`}>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  );
}
