import Image from "next/image";
import Link from "next/link";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import PageHero from "@/components/common/PageHero";
import Button from "@/components/ui/Button";

const blogPosts = [
  {
    id: "post-1",
    title: "How to Choose the Perfect Engagement Ring",
    date: "12 Mar 2026",
    author: "Pooja S.",
    image: "/images/revamp/ring-macro.jpg",
    snippet:
      "A comprehensive guide to diamond 4Cs, solitaire settings, gold karats, and timeless halo designs that resonate forever.",
    slug: "choose-perfect-engagement-ring",
  },
  {
    id: "post-2",
    title: "5 Latest Jewellery Trends for 2026",
    date: "10 Mar 2026",
    author: "Rahul M.",
    image: "/images/products/celebration-diamond-choker.jpg",
    snippet:
      "From layered yellow gold chains to emerald teardrop pendants, explore the high-fashion bridal trends defining this year.",
    slug: "latest-jewellery-trends-2026",
  },
  {
    id: "post-3",
    title: "Caring for Your Diamond Jewellery",
    date: "05 Mar 2026",
    author: "Luxe Atelier",
    image: "/images/revamp/halo-ring.jpg",
    snippet:
      "Expert tips on cleaning, inspecting prong settings, and maintaining the eternal fire of your diamond heirlooms.",
    slug: "caring-for-diamond-jewellery",
  },
  {
    id: "post-4",
    title: "Gold vs Diamond — Which is Better Investment?",
    date: "28 Feb 2026",
    author: "Financial Luxe",
    image: "/images/product/gold-chain.jpg",
    snippet:
      "Analyzing long-term gold purity returns versus natural certified diamond appreciation for discerning Indian buyers.",
    slug: "gold-vs-diamond-investment",
  },
];

export default function BlogClient() {
  return (
    <>
      <PageHero
        title="Jewellery Tips, Trends & Stories"
        subtitle="Insights on diamond grading, hallmarked gold, styling and timeless care"
        image="/images/revamp/halo-ring.jpg"
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="section-spacing-sm" aria-label="Latest articles">
        <div className="container">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {blogPosts.map((post) => (
              <li key={post.id}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-border bg-white transition-shadow hover:shadow-[var(--shadow-card)]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 330px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-[13px] text-muted">
                      <time>{post.date}</time> · {post.author}
                    </p>
                    <h2 className="mt-2 font-display text-[21px] font-semibold leading-snug text-ink group-hover:text-gold transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-2 mb-4 text-[14.5px] leading-relaxed text-muted line-clamp-3">{post.snippet}</p>
                    <Link
                      href="/guide"
                      aria-label={`Read more: ${post.title}`}
                      className="mt-auto inline-flex items-center gap-1.5 text-[14px] font-semibold text-gold hover:text-gold-dark transition-colors"
                    >
                      Read More
                      <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <div className="mt-10 sm:mt-12 text-center">
            <Button variant="outline" href="/guide">
              View All Articles
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
