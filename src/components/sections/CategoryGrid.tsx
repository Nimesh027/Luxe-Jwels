import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";

const categories = [
  { name: "Rings", href: "/category/rings", image: "/images/categories/rings.jpg" },
  { name: "Necklaces", href: "/category/necklaces", image: "/images/categories/necklaces.jpg" },
  { name: "Earrings", href: "/category/earrings", image: "/images/categories/earrings.jpg" },
  { name: "Bracelets", href: "/category/bracelets", image: "/images/categories/bracelets.jpg" },
  { name: "Pendants", href: "/category/pendants", image: "/images/categories/pendants.png" },
  { name: "Men's Collection", href: "/category/mens-collection", image: "/images/categories/mens-collection.jpg" },
  { name: "Bangles", href: "/category/bracelets", image: "/images/products/pave-cuff-bangle.jpg" },
  { name: "Wedding Collection", href: "/collections/couple-collection", image: "/images/products/wedding-bands.jpg" },
];

export default function CategoryGrid() {
  return (
    <section className="section-spacing-sm bg-cream" aria-labelledby="shop-by-category">
      <div className="container">
        <SectionTitle
          id="shop-by-category"
          align="left"
          title="Shop By Category"
          description="Discover our exquisite collections"
          viewAllHref="/shop"
        />

        <ul className="grid grid-cols-4 lg:grid-cols-8 gap-x-3 gap-y-6 sm:gap-x-6">
          {categories.map((cat) => (
            <li key={cat.name}>
              <Link href={cat.href} className="group flex flex-col items-center text-center">
                <span className="relative block w-full max-w-[132px] aspect-square rounded-full p-[3px] bg-white border border-border group-hover:border-gold-warm transition-colors duration-300">
                  <span className="relative block w-full h-full rounded-full overflow-hidden bg-cream-dark">
                    <Image
                      src={cat.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 22vw, 132px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </span>
                </span>
                <span className="mt-2.5 text-[13px] sm:text-[14.5px] font-medium leading-snug text-ink group-hover:text-gold transition-colors">
                  {cat.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
