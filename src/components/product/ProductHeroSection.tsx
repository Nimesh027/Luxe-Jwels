"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { HeartIcon, ShareIcon, CheckIcon } from "@/components/icons";
import { CertifiedIcon, CareIcon, ShippingIcon, ReturnsIcon } from "@/components/icons/FeatureIcons";
import type { Product, Category } from "@/types";
import Button from "@/components/ui/Button";
import Rating from "@/components/ui/Rating";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import { formatPrice, cn } from "@/lib/utils";

interface ProductHeroSectionProps {
  product: Product;
  category?: Category;
  images: string[];
  activeImageIndex: number;
  onSelectImage: (index: number) => void;
  onOpenLightbox: () => void;
  onOpenSizeGuide: () => void;
}

const METALS = [
  { id: "yellow", label: "Yellow Gold", swatch: "#d4ad62" },
  { id: "white", label: "White Gold", swatch: "#e5e4e2" },
  { id: "rose", label: "Rose Gold", swatch: "#e8b298" },
] as const;

const SIZES = [6, 7, 8, 9, 10, 11, 12];

const ASSURANCES = [
  { icon: CertifiedIcon, label: "Certified Diamond" },
  { icon: CareIcon, label: "Lifetime Polish" },
  { icon: ShippingIcon, label: "Free Shipping" },
  { icon: ReturnsIcon, label: "Easy 30 Day Return" },
];

export default function ProductHeroSection({
  product,
  category,
  images,
  activeImageIndex,
  onSelectImage,
  onOpenLightbox,
  onOpenSizeGuide,
}: ProductHeroSectionProps) {
  const router = useRouter();
  const { add } = useCart();
  const { toggle, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(product.id);

  const [metal, setMetal] = useState<(typeof METALS)[number]["id"]>("yellow");
  const [size, setSize] = useState(7);
  const [isAdded, setIsAdded] = useState(false);
  const [copied, setCopied] = useState(false);

  const isRing = product.category === "rings";
  const discount =
    product.compareAtPrice && product.compareAtPrice > product.price
      ? Math.round((1 - product.price / product.compareAtPrice) * 100)
      : 0;
  const activeMetal = METALS.find((m) => m.id === metal)!;

  const handleAddToCart = () => {
    add(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: product.name, url });
      } catch {
        /* user dismissed the share sheet */
      }
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const categoryCrumb = category ?? { name: "Shop", slug: "" };

  return (
    <section className="bg-cream pt-5 pb-10 sm:pb-14">
      <div className="container">
        <nav aria-label="Breadcrumb" className="mb-5 sm:mb-6">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13.5px] text-muted">
            <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href={categoryCrumb.slug ? `/category/${categoryCrumb.slug}` : "/shop"}
                className="hover:text-gold transition-colors"
              >
                {categoryCrumb.name}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink font-medium truncate max-w-[60vw]">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Gallery */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 lg:sticky lg:top-24">
            {images.length > 1 && (
              <ul className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible scrollbar-none" aria-label="Product images">
                {images.map((img, idx) => (
                  <li key={img + idx}>
                    <button
                      type="button"
                      onClick={() => onSelectImage(idx)}
                      aria-label={`Show image ${idx + 1}`}
                      aria-current={activeImageIndex === idx}
                      className={cn(
                        "relative block h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-md border bg-white transition-colors cursor-pointer",
                        activeImageIndex === idx ? "border-gold ring-1 ring-gold" : "border-border hover:border-border-strong"
                      )}
                    >
                      <Image src={img} alt="" fill sizes="80px" className="object-cover" />
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <button
              type="button"
              onClick={onOpenLightbox}
              aria-label="Enlarge image"
              className="relative block aspect-square w-full flex-1 overflow-hidden rounded-[var(--radius-card)] border border-border bg-white cursor-zoom-in"
            >
              <Image
                src={images[activeImageIndex] || product.image}
                alt={`${product.name} in ${activeMetal.label.toLowerCase()}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover"
              />
            </button>
          </div>

          {/* Buy box */}
          <div className="lg:col-span-5">
            <h1 className="font-display text-h2 font-semibold text-ink leading-tight">{product.name}</h1>

            <a href="#reviews" className="mt-2 inline-flex items-center gap-2 text-[14px] text-muted hover:text-gold transition-colors">
              <Rating value={4.8} size={15} />
              <span className="font-semibold text-ink">4.8</span>
              <span>(124 reviews)</span>
            </a>

            <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-[28px] sm:text-[32px] font-semibold text-ink leading-none">
                {formatPrice(product.price)}
              </span>
              {discount > 0 && (
                <>
                  <span className="text-[17px] text-subtle line-through">{formatPrice(product.compareAtPrice!)}</span>
                  <span className="rounded-[3px] bg-success/10 px-2 py-0.5 text-[13px] font-semibold text-success">
                    {discount}% OFF
                  </span>
                </>
              )}
            </div>
            <p className="mt-1.5 text-[13px] text-muted">Inclusive of all taxes</p>

            <ul className="mt-5 space-y-2.5 border-y border-border py-5">
              {ASSURANCES.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-[14.5px] text-ink-soft">
                  <Icon className="h-5 w-5 text-gold-warm shrink-0" />
                  {label}
                </li>
              ))}
            </ul>

            <fieldset className="mt-5">
              <legend className="mb-2.5 text-[14px] font-semibold text-ink">
                Metal: <span className="font-normal text-muted">{activeMetal.label}</span>
              </legend>
              <div className="grid grid-cols-3 gap-2.5">
                {METALS.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    aria-pressed={metal === m.id}
                    onClick={() => setMetal(m.id)}
                    className={cn(
                      "flex h-11 items-center justify-center gap-2 rounded-[var(--radius-btn)] border px-2 text-[13.5px] font-medium transition-colors cursor-pointer",
                      metal === m.id ? "border-gold bg-gold-soft text-ink" : "border-border bg-white text-ink hover:border-border-strong"
                    )}
                  >
                    <span className="h-3.5 w-3.5 shrink-0 rounded-full border border-black/15" style={{ backgroundColor: m.swatch }} />
                    <span className="truncate">{m.label}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            {isRing && (
              <fieldset className="mt-5">
                <div className="mb-2.5 flex items-center justify-between">
                  <legend className="text-[14px] font-semibold text-ink">
                    Size: <span className="font-normal text-muted">{size}</span>
                  </legend>
                  <button
                    type="button"
                    onClick={onOpenSizeGuide}
                    className="text-[13.5px] font-semibold text-gold underline-offset-4 hover:underline cursor-pointer"
                  >
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {SIZES.map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      aria-pressed={size === sz}
                      onClick={() => setSize(sz)}
                      className={cn(
                        "flex h-11 items-center justify-center rounded-[var(--radius-btn)] border text-[14px] font-medium transition-colors cursor-pointer",
                        size === sz ? "border-ink bg-ink text-white" : "border-border bg-white text-ink hover:border-border-strong"
                      )}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </fieldset>
            )}

            <div className="mt-6 space-y-3">
              <Button size="lg" fullWidth onClick={handleAddToCart} leftIcon={isAdded ? <CheckIcon size={18} /> : undefined}>
                {isAdded ? "Added to Cart" : "Add to Cart"}
              </Button>
              <Button
                size="lg"
                colorTheme="dark"
                fullWidth
                onClick={() => {
                  add(product, 1);
                  router.push("/cart");
                }}
              >
                Buy Now
              </Button>
            </div>

            <div className="mt-4 flex items-center gap-6 text-[14px] text-ink-soft">
              <button
                type="button"
                onClick={() => toggle(product)}
                aria-pressed={wishlisted}
                className="inline-flex items-center gap-2 hover:text-gold transition-colors cursor-pointer"
              >
                <HeartIcon size={17} filled={wishlisted} className={wishlisted ? "text-gold" : undefined} />
                {wishlisted ? "In Wishlist" : "Add to Wishlist"}
              </button>
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-2 hover:text-gold transition-colors cursor-pointer"
              >
                <ShareIcon size={17} />
                <span aria-live="polite">{copied ? "Link copied" : "Share"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
