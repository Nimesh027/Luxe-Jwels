import type { SVGProps } from "react";

/**
 * 1. SHIPPING ICON (Free & Insured Express Delivery)
 * Realistic, outlined luxury express courier delivery vehicle with parcel lines.
 */
export function ShippingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14 17H9m10 0h2a1 1 0 0 0 1-1v-4.5a1 1 0 0 0-.29-.71l-3.5-3.5A1 1 0 0 0 17.5 6H15" />
      <path d="M2 5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v12H2V5z" />
      <circle cx="6.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
      <path d="M5 8h4M5 11h2.5" strokeWidth="1.4" />
    </svg>
  );
}

/**
 * 2. RETURNS ICON (30 Days Easy Return & Exchange)
 * Realistic outlined jewelry gift parcel with circular 360° exchange turnaround arrows.
 */
export function ReturnsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Curved turnaround exchange arrows */}
      <path d="M3 12a9 9 0 0 1 15.5-6.36L21 8" />
      <polyline points="21 3 21 8 16 8" />
      <path d="M21 12a9 9 0 0 1-15.5 6.36L3 16" />
      <polyline points="3 21 3 16 8 16" />
      {/* Central jewelry gift parcel */}
      <rect x="8.5" y="8.5" width="7" height="7" rx="1.5" strokeWidth="1.6" />
      <path d="M12 8.5v7M8.5 12h7" strokeWidth="1.3" />
    </svg>
  );
}

/**
 * 3. CERTIFIED ICON (100% Certified & Authenticated Jewellery)
 * Realistic outlined certified medallion seal with authentic checkmark and ribbon tails.
 */
export function CertifiedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Circular assurance seal badge */}
      <circle cx="12" cy="9.5" r="6.5" />
      <circle cx="12" cy="9.5" r="8.2" strokeWidth="1.2" strokeDasharray="1.5 2" />
      {/* Verification checkmark */}
      <polyline points="9 9.5 11.2 11.7 15 7.5" strokeWidth="1.8" />
      {/* Luxury hanging ribbons */}
      <path d="M9 15.5 7 22l5-2.2 5 2.2-2-6.5" strokeWidth="1.6" />
    </svg>
  );
}

/**
 * 4. SECURE ICON (100% Secure Payments & Armored Vault Transit)
 * Realistic outlined security shield with central combination padlock.
 */
export function SecureIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Protective luxury shield */}
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      {/* Central Padlock */}
      <rect x="8.5" y="11" width="7" height="5.5" rx="1.2" strokeWidth="1.6" />
      <path d="M10 11V8.8a2 2 0 1 1 4 0V11" strokeWidth="1.6" />
      <circle cx="12" cy="13.7" r="0.75" fill="currentColor" />
    </svg>
  );
}

/**
 * 5. CARE ICON (Jewellery Care & Lifetime Maintenance)
 * Realistic brilliant-cut solitaire diamond with crown facets and sparkling star accents.
 */
export function CareIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Brilliant cut diamond outline */}
      <path d="M6 3h12l4 6-10 12L2 9z" />
      <path d="M11 3 8 9l4 12 4-12-3-6" strokeWidth="1.4" />
      <path d="M2 9h20" strokeWidth="1.4" />
      {/* Gentle sparkle accent */}
      <path d="M19 2v3M20.5 3.5h-3" strokeWidth="1.4" />
    </svg>
  );
}

/**
 * 6. HALLMARK ICON (BIS Hallmark & Assay Purity Assurance)
 * Authentic BIS triangular hallmark emblem with internal assay stamp lines.
 */
export function HallmarkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* BIS Triangular Hallmark Stamp */}
      <path d="M12 3l9 16H3L12 3z" />
      <circle cx="12" cy="12" r="3.2" strokeWidth="1.4" />
      <path d="M12 10.5v3M10.5 12h3" strokeWidth="1.3" />
      <path d="M8.5 17h7" strokeWidth="1.4" />
    </svg>
  );
}

export const featureIconComponents: Record<
  string,
  (props: SVGProps<SVGSVGElement>) => React.JSX.Element
> = {
  shipping: ShippingIcon,
  returns: ReturnsIcon,
  certified: CertifiedIcon,
  secure: SecureIcon,
  care: CareIcon,
  hallmark: HallmarkIcon,
};

export default featureIconComponents;
