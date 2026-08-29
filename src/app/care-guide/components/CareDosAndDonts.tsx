"use client";

import Section from "@/components/common/Section";

const dosAndDonts = [
  {
    type: "do",
    title: "Do: Individual Storage",
    desc: "Keep pieces separated in velvet-lined pouches or compartment boxes to avoid metal scratches.",
  },
  {
    type: "do",
    title: "Do: Apply Makeup First",
    desc: "Allow lotions, perfumes, and hairsprays to dry completely before adorning your fine jewellery.",
  },
  {
    type: "do",
    title: "Do: Annual Check-Ups",
    desc: "Bring your high jewellery to Luxe Jewels for complimentary professional prong check & ultrasonic dip.",
  },
  {
    type: "dont",
    title: "Don't: Swim or Exercise",
    desc: "Chlorine in swimming pools and saltwater can erode gold alloys and loosen gemstone mountings.",
  },
  {
    type: "dont",
    title: "Don't: Harsh Household Cleaners",
    desc: "Bleach, ammonia, and abrasive powders can permanently discolor solid gold and damage pearls.",
  },
  {
    type: "dont",
    title: "Don't: Expose to Extreme Heat",
    desc: "Sudden temperature changes can fracture sensitive natural gemstones like emeralds and tanzanites.",
  },
];

export default function CareDosAndDonts() {
  return (
    <Section className="!py-4 mb-8 sm:mb-12" containerClassName="max-w-5xl">
      <div className="text-center space-y-2 mb-10">
        <h2 className="font-display text-h2 font-semibold text-wine">
          Essential Do’s & Don’ts
        </h2>
        <p className="text-body text-muted">
          Simple habits to protect your heirloom jewellery every single day.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dosAndDonts.map((item, idx) => {
          const isDo = item.type === "do";
          return (
            <div
              key={idx}
              className={`group relative rounded-2xl border p-8 space-y-4 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden ${
                isDo
                  ? "bg-emerald-50/40 border-emerald-200/60 hover:border-emerald-300"
                  : "bg-rose-50/40 border-rose-200/60 hover:border-rose-300"
              }`}
            >
              {/* Subtle Background Accent */}
              <div
                className={`absolute -top-4 -right-4 w-32 h-32 rounded-full opacity-10 transition-transform duration-700 group-hover:scale-150 ${
                  isDo ? "bg-emerald-400" : "bg-rose-400"
                }`}
              />

              <div className="relative z-10">
                <span
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-6 shadow-sm ${
                    isDo
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-rose-100 text-rose-700"
                  }`}
                >
                  {isDo ? (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </span>
                <h3 className="font-display text-lg font-semibold text-wine">
                  {item.title}
                </h3>
                <p className="text-body text-ink/75 leading-relaxed mt-2 font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
