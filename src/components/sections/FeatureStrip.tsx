import {
  ShippingIcon,
  ReturnsIcon,
  CertifiedIcon,
  SecureIcon,
} from "@/components/icons/FeatureIcons";
import { cn } from "@/lib/utils";

const features = [
  { icon: ShippingIcon, title: "Free Shipping", subtitle: "On orders above ₹2,999" },
  { icon: ReturnsIcon, title: "30 Days Easy Return", subtitle: "Hassle free" },
  { icon: CertifiedIcon, title: "Certified Jewellery", subtitle: "100% authentic" },
  { icon: SecureIcon, title: "Secure Payments", subtitle: "Multiple options" },
];

export default function FeatureStrip({ className }: { className?: string }) {
  return (
    <section aria-label="Why shop with us" className={cn("bg-white border-b border-border", className)}>
      <ul className="container grid grid-cols-2 lg:grid-cols-4 gap-y-6 py-6 sm:py-8">
        {features.map(({ icon: Icon, title, subtitle }, idx) => (
          <li
            key={title}
            className={cn(
              "flex items-center gap-3 sm:gap-4 px-2 sm:px-4 lg:justify-center",
              "border-border",
              idx % 2 === 1 && "border-l",
              idx === 2 && "lg:border-l"
            )}
          >
            <Icon className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 text-gold-warm" />
            <div className="min-w-0">
              <p className="font-display text-[16px] sm:text-[18px] font-semibold leading-tight text-ink">{title}</p>
              <p className="text-[12.5px] sm:text-[13.5px] text-muted">{subtitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
