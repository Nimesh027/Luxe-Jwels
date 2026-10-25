import ProductCard from "@/components/common/ProductCard";
import Button from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/icons";
import type { Product } from "@/types";

interface ProductGridProps {
  title: string;
  products: Product[];
}

/** Titled product listing with item count and empty state (category & collection pages). */
export default function ProductGrid({ title, products }: ProductGridProps) {
  return (
    <section className="section-spacing-sm">
      <div className="container">
        <div className="mb-6 flex items-end justify-between gap-4 border-b border-border pb-4">
          <h2 className="font-display text-h3 font-semibold text-ink">
            {title} <span className="font-body text-[15px] font-normal text-muted">({products.length} items)</span>
          </h2>
          <Button
            variant="text"
            size="sm"
            href="/shop"
            className="group px-0"
            rightIcon={<ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />}
          >
            All jewellery
          </Button>
        </div>

        {products.length === 0 ? (
          <div className="py-16 text-center">
            <p className="font-display text-h4 text-ink">No designs here yet</p>
            <p className="mt-1 text-[15px] text-muted">
              New pieces are added regularly — explore the full collection meanwhile.
            </p>
            <Button href="/shop" className="mt-6">
              Browse all jewellery
            </Button>
          </div>
        ) : (
          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products.map((product, i) => (
              <li key={product.id}>
                <ProductCard product={product} priority={i < 4} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
