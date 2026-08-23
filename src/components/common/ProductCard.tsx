"use client";

import Image from "next/image";
import Link from "next/link";
import { HeartFilled, HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Card from "@/components/ui/Card";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { add } = useCart();
  const { toggle, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(product.id);

  return (
    <Card variant="product" className="group flex h-full flex-col">
      <div className="relative aspect-square w-full overflow-hidden bg-cream-dark">
        <Link href={`/products/${product.slug}`} className="relative block h-full w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 20vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <button
          type="button"
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => toggle(product)}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-surface/90 text-ink shadow-sm"
        >
          {wishlisted ? <HeartFilled className="text-gold" /> : <HeartOutlined />}
        </button>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link href={`/products/${product.slug}`} className="text-sm text-ink hover:text-gold">
          {product.name}
        </Link>
        <div className="mt-auto flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-base text-ink">{formatPrice(product.price)}</span>
            {product.compareAtPrice && (
              <span className="text-xs text-muted line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>
          <button
            type="button"
            aria-label="Add to cart"
            onClick={() => add(product)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-cream hover:bg-gold hover:text-ink"
          >
            <ShoppingCartOutlined />
          </button>
        </div>
      </div>
    </Card>
  );
}
