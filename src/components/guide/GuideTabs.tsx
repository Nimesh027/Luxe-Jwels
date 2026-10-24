import Link from "next/link";
import {
  goldGuidesData,
  silverGuidesData,
  diamondTypesGuidesData,
  diamondShapesData,
} from "@/data";
import { cn } from "@/lib/utils";

export interface GuideTab {
  id: string;
  label: string;
  count?: number;
  href?: string;
  onSelect?: () => void;
}

interface GuideTabsProps {
  tabs: GuideTab[];
  activeId: string;
  label: string;
}

/** Sticky underline tab bar shared by every /guide page. */
export default function GuideTabs({ tabs, activeId, label }: GuideTabsProps) {
  return (
    <div className="sticky top-16 sm:top-[76px] z-30 border-b border-border bg-cream/95 backdrop-blur-sm">
      <div className="container">
        <nav aria-label={label} className="-mx-4 px-4 sm:mx-0 sm:px-0 flex gap-6 sm:gap-8 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => {
            const isActive = tab.id === activeId;
            const className = cn(
              "shrink-0 whitespace-nowrap border-b-2 py-4 text-[14.5px] font-medium transition-colors cursor-pointer",
              isActive ? "border-gold text-ink" : "border-transparent text-muted hover:text-ink"
            );
            const content = (
              <>
                {tab.label}
                {typeof tab.count === "number" && <span className="text-subtle"> ({tab.count})</span>}
              </>
            );
            return tab.href ? (
              <Link key={tab.id} href={tab.href} aria-current={isActive ? "page" : undefined} className={className}>
                {content}
              </Link>
            ) : (
              <button key={tab.id} type="button" aria-pressed={isActive} onClick={tab.onSelect} className={className}>
                {content}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

/** Top-level guide categories, linking to each category page. */
export const guideCategoryTabs: GuideTab[] = [
  {
    id: "all",
    label: "All Guides",
    count: goldGuidesData.length + silverGuidesData.length + diamondTypesGuidesData.length + diamondShapesData.length,
    href: "/guide",
  },
  { id: "gold", label: "Gold Karats", count: goldGuidesData.length, href: "/guide/gold" },
  { id: "silver", label: "Silver Standards", count: silverGuidesData.length, href: "/guide/silver" },
  { id: "diamond", label: "Diamond Types", count: diamondTypesGuidesData.length, href: "/guide/diamond" },
  { id: "shape", label: "Diamond Shapes", count: diamondShapesData.length, href: "/guide/shape" },
];

/** Banner image used for each guide category. */
export const guideHeroImages: Record<string, string> = {
  all: "/images/guide/gold/gold-22k.jpg",
  gold: "/images/guide/gold/gold-22k.jpg",
  silver: "/images/guide/silver/silver-925.jpg",
  diamond: "/images/guide/diamond/diamond-real.jpg",
  shape: "/images/revamp/halo-ring.jpg",
  shapes: "/images/revamp/halo-ring.jpg",
};

export const guideCategoryNames: Record<string, string> = {
  gold: "Gold Karats",
  silver: "Silver Standards",
  diamond: "Diamond Types",
  shape: "Diamond Shapes",
  shapes: "Diamond Shapes",
};
