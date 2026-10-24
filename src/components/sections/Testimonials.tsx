import Image from "next/image";
import SectionTitle from "@/components/common/SectionTitle";
import Rating from "@/components/ui/Rating";

const testimonials = [
  {
    name: "Pooja S.",
    city: "Ahmedabad",
    rating: 5,
    quote: "The quality is amazing and delivery was on time. My wife loved it!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&auto=format&fit=crop&q=80",
  },
  {
    name: "Rohit M.",
    city: "Surat",
    rating: 5,
    quote: "Beautiful collection and excellent customer service. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80",
  },
  {
    name: "Neha K.",
    city: "Rajkot",
    rating: 5,
    quote: "Best place to buy genuine diamond jewellery online. Will shop again!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&auto=format&fit=crop&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="pb-[clamp(36px,4.5vw,64px)] bg-cream" aria-labelledby="testimonials-heading">
      <div className="container">
        <SectionTitle
          id="testimonials-heading"
          align="left"
          title="Loved by Thousands"
          description="Real stories from our customers"
          viewAllHref="/reviews"
          viewAllLabel="All Reviews"
        />

        <ul className="-mx-4 px-4 sm:mx-0 sm:px-0 flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-none">
          {testimonials.map((t) => (
            <li key={t.name} className="snap-start shrink-0 w-[85%] sm:w-auto">
              <figure className="flex h-full gap-4 rounded-[var(--radius-card)] border border-border bg-white p-5 sm:p-6">
                <Image
                  src={t.avatar}
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 rounded-full object-cover"
                />
                <div className="flex min-w-0 flex-col">
                  <blockquote className="text-[14.5px] leading-relaxed text-ink-soft">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <Rating value={t.rating} size={14} className="mt-3" />
                  <figcaption className="mt-2">
                    <span className="block font-display text-[17px] font-semibold text-ink leading-tight">{t.name}</span>
                    <span className="text-[13px] text-muted">{t.city}</span>
                  </figcaption>
                </div>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
