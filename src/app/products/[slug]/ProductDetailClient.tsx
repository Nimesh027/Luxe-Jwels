"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import Section from "@/components/common/Section";
import Button from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import { formatPrice } from "@/lib/utils";
import { useAppSelector } from "@/store/hooks";

export default function ProductDetailClient({ slug }: { slug: string }) {
  const product = useAppSelector((state) =>
    state.products.items.find((item) => item.slug === slug)
  );
  const category = useAppSelector((state) =>
    state.categories.items.find((item) => item.slug === product?.category)
  );
  const { add } = useCart();
  const { toggle, isWishlisted } = useWishlist();
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const wishlisted = isWishlisted(product.id);

  return (
    <Section>
      <nav className="mb-6 text-xs uppercase tracking-wide text-muted">
        <Link href="/" className="hover:text-gold">Home</Link>
        {category && (
          <>
            {" / "}
            <Link href={`/category/${category.slug}`} className="hover:text-gold">
              {category.name}
            </Link>
          </>
        )}
        {" / "}
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-cream-dark">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            className="object-cover"
          />
        </div>

        <div className="flex flex-col items-start gap-4">
          <h1 className="font-display text-3xl text-ink">{product.name}</h1>
          <div className="flex items-baseline gap-3">
            <span className="text-2xl text-ink">{formatPrice(product.price)}</span>
            {product.compareAtPrice && (
              <span className="text-base text-muted line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>
          {product.description && <p className="text-sm text-muted">{product.description}</p>}

          <div className="flex items-center gap-3">
            <div className="flex items-center border border-border">
              <button
                type="button"
                aria-label="Decrease quantity"
                className="px-3 py-2 text-ink hover:text-gold"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
              >
                −
              </button>
              <span className="w-10 text-center text-sm text-ink">{quantity}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                className="px-3 py-2 text-ink hover:text-gold"
                onClick={() => setQuantity((value) => value + 1)}
              >
                +
              </button>
            </div>

            <Button variant="dark" onClick={() => add(product, quantity)}>
              Add To Cart
            </Button>

            <button
              type="button"
              aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
              onClick={() => toggle(product)}
              className="flex h-11 w-11 items-center justify-center border border-border text-lg text-ink hover:border-gold"
            >
              {wishlisted ? <HeartFilled className="text-gold" /> : <HeartOutlined />}
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
