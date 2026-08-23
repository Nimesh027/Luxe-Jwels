"use client";

import Image from "next/image";
import { DeleteOutlined } from "@ant-design/icons";
import Section from "@/components/common/Section";
import Button from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";

export default function CartClient() {
  const { items, subtotal, remove, setQuantity } = useCart();

  if (items.length === 0) {
    return (
      <Section title="Your Cart">
        <div className="flex flex-col items-start gap-4">
          <p className="text-sm text-muted">Your cart is currently empty.</p>
          <Button href="/collections" variant="dark">
            Continue Shopping
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <Section title="Your Cart">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="flex flex-col gap-4 lg:col-span-2">
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="flex items-center gap-4 border-b border-border pb-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-cream-dark">
                <Image src={product.image} alt={product.name} fill sizes="80px" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <span className="text-sm text-ink">{product.name}</span>
                <span className="text-sm text-muted">{formatPrice(product.price)}</span>
              </div>
              <div className="flex items-center border border-border">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  className="px-3 py-1 text-ink hover:text-gold"
                  onClick={() => setQuantity(product.id, quantity - 1)}
                >
                  −
                </button>
                <span className="w-8 text-center text-sm text-ink">{quantity}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  className="px-3 py-1 text-ink hover:text-gold"
                  onClick={() => setQuantity(product.id, quantity + 1)}
                >
                  +
                </button>
              </div>
              <span className="w-24 text-right text-sm text-ink">
                {formatPrice(product.price * quantity)}
              </span>
              <button
                type="button"
                aria-label="Remove item"
                onClick={() => remove(product.id)}
                className="text-muted hover:text-red-500"
              >
                <DeleteOutlined />
              </button>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border border-border p-6">
          <div className="flex items-center justify-between text-sm text-ink">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="text-xs text-muted">Shipping and taxes calculated at checkout.</p>
          <Button variant="dark" fullWidth>
            Checkout
          </Button>
        </div>
      </div>
    </Section>
  );
}
