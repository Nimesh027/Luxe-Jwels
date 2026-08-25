import type { FC, SVGProps } from "react";

interface JewelryIconProps extends SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
}

export const JewelryIcon: FC<JewelryIconProps> = ({ name, className = "w-7 h-7", ...props }) => {
  const iconKey = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Render bespoke handcrafted SVG icon based on category
  switch (true) {
    case iconKey.includes("allgold") || iconKey.includes("all"):
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} {...props}>
          <circle cx="18" cy="18" r="16.5" fill="#FAF6EE" stroke="#EFE4D2" strokeWidth="1" />
          <circle cx="13" cy="12" r="1.8" fill="#C9A961" />
          <circle cx="23" cy="12" r="1.8" fill="#C9A961" />
          <path d="M13 14v5c0 1.8 1.8 3.5 5 3.5s5-1.7 5-3.5v-5" stroke="#C9A961" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="18" cy="25" r="2" fill="#A9873F" />
          <path d="M18 22.5v1" stroke="#A9873F" strokeWidth="1.5" />
        </svg>
      );

    case iconKey.includes("bangle"):
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} {...props}>
          <circle cx="18" cy="18" r="16.5" fill="#FAF6EE" stroke="#EFE4D2" strokeWidth="1" />
          <ellipse cx="18" cy="18" rx="10.5" ry="6.5" stroke="#C9A961" strokeWidth="2" />
          <ellipse cx="18" cy="18" rx="7.5" ry="4" stroke="#A9873F" strokeWidth="1" strokeDasharray="2 1.5" />
        </svg>
      );

    case iconKey.includes("bracelet"):
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} {...props}>
          <circle cx="18" cy="18" r="16.5" fill="#FAF6EE" stroke="#EFE4D2" strokeWidth="1" />
          <circle cx="18" cy="18" r="9.5" stroke="#C9A961" strokeWidth="1.6" strokeDasharray="3.5 2" />
          <circle cx="18" cy="8.5" r="2.2" fill="#A9873F" />
          <path d="M18 6.5v4M16 8.5h4" stroke="#FFF" strokeWidth="0.9" />
        </svg>
      );

    case iconKey.includes("earring") || iconKey.includes("stud"):
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} {...props}>
          <circle cx="18" cy="18" r="16.5" fill="#FAF6EE" stroke="#EFE4D2" strokeWidth="1" />
          {/* Left earring */}
          <circle cx="13" cy="12" r="1.6" fill="#A9873F" />
          <path d="M13 13.6v2.4" stroke="#C9A961" strokeWidth="1.2" />
          <path d="M11 18l2-2 2 2v3a2 2 0 01-4 0v-3z" fill="#C9A961" stroke="#A9873F" strokeWidth="0.8" />
          {/* Right earring */}
          <circle cx="23" cy="12" r="1.6" fill="#A9873F" />
          <path d="M23 13.6v2.4" stroke="#C9A961" strokeWidth="1.2" />
          <path d="M21 18l2-2 2 2v3a2 2 0 01-4 0v-3z" fill="#C9A961" stroke="#A9873F" strokeWidth="0.8" />
        </svg>
      );

    case iconKey.includes("chain"):
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} {...props}>
          <circle cx="18" cy="18" r="16.5" fill="#FAF6EE" stroke="#EFE4D2" strokeWidth="1" />
          <path d="M10 12c2.5 6 5.5 13 8 13s5.5-7 8-13" stroke="#C9A961" strokeWidth="2" strokeLinecap="round" strokeDasharray="3.5 2" />
          <path d="M12.5 12c2 4.5 4 10 5.5 10s3.5-5.5 5.5-10" stroke="#A9873F" strokeWidth="1" strokeLinecap="round" />
        </svg>
      );

    case iconKey.includes("pendant"):
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} {...props}>
          <circle cx="18" cy="18" r="16.5" fill="#FAF6EE" stroke="#EFE4D2" strokeWidth="1" />
          <path d="M12 10c2 3.5 4 7 6 7s4-3.5 6-7" stroke="#D3C5AE" strokeWidth="1.2" />
          <circle cx="18" cy="17" r="1.8" fill="#A9873F" />
          <path d="M18 18.8L15 24 18 28 21 24 18 18.8z" fill="#C9A961" stroke="#A9873F" strokeWidth="1" />
          <circle cx="18" cy="23.5" r="1.4" fill="#FFF" />
        </svg>
      );

    case iconKey.includes("engagement") || iconKey.includes("solitaire"):
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} {...props}>
          <circle cx="18" cy="18" r="16.5" fill="#FAF6EE" stroke="#EFE4D2" strokeWidth="1" />
          <ellipse cx="18" cy="20" rx="9" ry="6.5" stroke="#C9A961" strokeWidth="2" />
          {/* Diamond solitaire */}
          <path d="M18 8l-3.2 4h6.4L18 8z" fill="#FAF6EE" stroke="#A9873F" strokeWidth="1.2" />
          <circle cx="18" cy="10.5" r="1.2" fill="#C9A961" />
        </svg>
      );

    case iconKey.includes("ring"):
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} {...props}>
          <circle cx="18" cy="18" r="16.5" fill="#FAF6EE" stroke="#EFE4D2" strokeWidth="1" />
          <ellipse cx="18" cy="18" rx="9.5" ry="7" stroke="#C9A961" strokeWidth="2.2" />
          <ellipse cx="18" cy="18" rx="6.5" ry="4.5" stroke="#FAF6EE" strokeWidth="1.2" />
          <circle cx="18" cy="11" r="2" fill="#A9873F" />
        </svg>
      );

    case iconKey.includes("necklace") || iconKey.includes("choker"):
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} {...props}>
          <circle cx="18" cy="18" r="16.5" fill="#FAF6EE" stroke="#EFE4D2" strokeWidth="1" />
          <path d="M10 12c1.8 8 5.8 15 8 15s6.2-7 8-15" stroke="#C9A961" strokeWidth="2" strokeLinecap="round" />
          <circle cx="18" cy="24" r="1.8" fill="#A9873F" />
          <circle cx="14.5" cy="21.5" r="1.2" fill="#A9873F" />
          <circle cx="21.5" cy="21.5" r="1.2" fill="#A9873F" />
        </svg>
      );

    case iconKey.includes("nose") || iconKey.includes("pin"):
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} {...props}>
          <circle cx="18" cy="18" r="16.5" fill="#FAF6EE" stroke="#EFE4D2" strokeWidth="1" />
          <circle cx="15" cy="15" r="3" fill="#C9A961" stroke="#A9873F" strokeWidth="1.2" />
          <circle cx="15" cy="15" r="1" fill="#FFF" />
          <path d="M17.5 17c2.5 2.5 4 4.5 4.5 6s-.5 3-1.8 3" stroke="#C9A961" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );

    case iconKey.includes("kada"):
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} {...props}>
          <circle cx="18" cy="18" r="16.5" fill="#FAF6EE" stroke="#EFE4D2" strokeWidth="1" />
          <ellipse cx="18" cy="18" rx="10" ry="7.5" stroke="#C9A961" strokeWidth="3" />
          <circle cx="11" cy="18" r="2.2" fill="#A9873F" />
          <circle cx="25" cy="18" r="2.2" fill="#A9873F" />
        </svg>
      );

    case iconKey.includes("mangalsutra"):
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} {...props}>
          <circle cx="18" cy="18" r="16.5" fill="#FAF6EE" stroke="#EFE4D2" strokeWidth="1" />
          <path d="M10 12c2.5 6 5.5 13 8 13s5.5-7 8-13" stroke="#222" strokeWidth="1.8" strokeDasharray="2 2" />
          <circle cx="18" cy="25" r="2.8" fill="#C9A961" stroke="#A9873F" strokeWidth="1" />
          <circle cx="15.5" cy="24.5" r="1.2" fill="#C9A961" />
          <circle cx="20.5" cy="24.5" r="1.2" fill="#C9A961" />
        </svg>
      );

    case iconKey.includes("coin"):
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} {...props}>
          <circle cx="18" cy="18" r="16.5" fill="#FAF6EE" stroke="#EFE4D2" strokeWidth="1" />
          <circle cx="18" cy="18" r="9.5" fill="#C9A961" stroke="#A9873F" strokeWidth="1.4" />
          <circle cx="18" cy="18" r="7.5" stroke="#FFF" strokeWidth="0.7" strokeDasharray="1.2 1.2" />
          <text x="18" y="21" fontSize="7.5" fontWeight="bold" fill="#5C111E" textAnchor="middle">24K</text>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 36 36" fill="none" className={className} {...props}>
          <circle cx="18" cy="18" r="16.5" fill="#FAF6EE" stroke="#EFE4D2" strokeWidth="1" />
          <circle cx="18" cy="18" r="7.5" stroke="#C9A961" strokeWidth="1.8" />
          <circle cx="18" cy="18" r="2.5" fill="#A9873F" />
        </svg>
      );
  }
};

export default JewelryIcon;
