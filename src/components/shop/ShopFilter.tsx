"use client";

import React, { memo, useId, useMemo, useState } from "react";
import { CheckIcon, ChevronDownIcon } from "@/components/icons";
import { useAppSelector } from "@/store/hooks";
import { cn } from "@/lib/utils";

export const CATEGORIES = [
  { value: "rings", label: "Rings", count: 132 },
  { value: "necklaces", label: "Necklaces", count: 98 },
  { value: "earrings", label: "Earrings", count: 76 },
  { value: "bracelets", label: "Bracelets", count: 54 },
  { value: "pendants", label: "Pendants", count: 42 },
  { value: "mens-collection", label: "Men's Collection", count: 28 },
];

export const PRICE_RANGES = [
  { value: "under-10000", label: "Under ₹10,000", min: 0, max: 10000 },
  { value: "10000-25000", label: "₹10,000 - ₹25,000", min: 10000, max: 25000 },
  { value: "25000-50000", label: "₹25,000 - ₹50,000", min: 25000, max: 50000 },
  { value: "50000-100000", label: "₹50,000 - ₹1,00,000", min: 50000, max: 100000 },
  { value: "above-100000", label: "Above ₹1,00,000", min: 100000, max: Infinity },
];

export const METALS = [
  { value: "gold", label: "Yellow Gold", color: "var(--color-gold)" },
  { value: "white-gold", label: "White Gold", color: "var(--color-border)" },
  { value: "rose-gold", label: "Rose Gold", color: "#E8B298" },
  { value: "platinum", label: "Platinum", color: "#C0C0C0" },
  { value: "silver", label: "Silver", color: "#D3D3D3" },
];

export const STONES = [
  { value: "diamond", label: "Diamond" },
  { value: "ruby", label: "Ruby" },
  { value: "emerald", label: "Emerald" },
  { value: "sapphire", label: "Sapphire" },
  { value: "pearl", label: "Pearl" },
];

export const COLLECTIONS = [
  { value: "diamond-collection", label: "Diamond Collection" },
  { value: "gold-collection", label: "Gold Collection" },
  { value: "couple-collection", label: "Couple Collection" },
  { value: "gift-collection", label: "Gift Collection" },
];

interface FilterCheckboxProps {
  label: string;
  count?: number;
  checked: boolean;
  onChange: () => void;
  type?: "checkbox" | "radio";
}

const FilterCheckbox = memo(function FilterCheckbox({
  label,
  count,
  checked,
  onChange,
  type = "checkbox",
}: FilterCheckboxProps) {
  const id = useId();
  return (
    <label
      htmlFor={id}
      className="group -mx-2 flex min-h-9 cursor-pointer items-center justify-between gap-3 rounded-md px-2 text-[14px] transition-colors hover:bg-cream"
    >
      <span className="flex items-center gap-3">
        <input id={id} type="checkbox" checked={checked} onChange={onChange} className="peer sr-only" />
        <span
          aria-hidden="true"
          className={cn(
            "flex h-[18px] w-[18px] shrink-0 items-center justify-center border transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-gold/40",
            type === "radio" ? "rounded-full" : "rounded-[3px]",
            checked ? "border-brand bg-brand text-white" : "border-border-strong bg-white group-hover:border-gold"
          )}
        >
          {checked && <CheckIcon size={12} className="stroke-[2.5]" />}
        </span>
        <span className={checked ? "font-medium text-ink" : "text-ink-soft group-hover:text-ink"}>{label}</span>
      </span>
      {typeof count === "number" && (
        <span
          className={cn(
            "min-w-7 rounded-full px-2 py-0.5 text-center text-[11.5px] font-medium leading-none",
            checked ? "bg-gold-soft text-gold" : "bg-cream text-muted"
          )}
        >
          {count}
        </span>
      )}
    </label>
  );
});

function FilterSection({
  title,
  selected = 0,
  children,
}: {
  title: string;
  selected?: number;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  const panelId = useId();
  return (
    <div className="border-t border-border py-3.5 last:pb-0">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-2 py-1.5 text-left cursor-pointer"
        >
          <span className="flex items-center gap-2 font-display text-[18px] font-semibold text-ink">
            {title}
            {selected > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1.5 font-body text-[11px] font-bold leading-none text-white">
                {selected}
              </span>
            )}
          </span>
          <ChevronDownIcon
            size={16}
            className={cn("shrink-0 text-muted transition-transform duration-200", open && "rotate-180")}
          />
        </button>
      </h3>
      <div id={panelId} role="group" aria-label={title} hidden={!open} className="mt-1.5 flex flex-col gap-0.5">
        {children}
      </div>
    </div>
  );
}

export interface ShopFilterProps {
  activeCategories: string[];
  activeCollections: string[];
  activePrice: string;
  onToggleCategory: (val: string) => void;
  onToggleCollection: (val: string) => void;
  onSetPrice: (val: string) => void;
  onClearAll: () => void;
  activeFilterCount: number;
}

function ShopFilterComponent({
  activeCategories,
  activeCollections,
  activePrice,
  onToggleCategory,
  onToggleCollection,
  onSetPrice,
  onClearAll,
  activeFilterCount,
}: ShopFilterProps) {
  const products = useAppSelector((state) => state.products.items);

  // Real counts from the catalogue rather than placeholder numbers
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const c of CATEGORIES) {
      counts[c.value] = products.filter((p) =>
        c.value === "mens-collection"
          ? p.gender === "men" || p.category === "mens-collection"
          : p.category === c.value
      ).length;
    }
    return counts;
  }, [products]);

  return (
    <aside aria-labelledby="shop-filter-heading" className="rounded-[var(--radius-card)] border border-border bg-white px-5 py-4 sm:px-6 sm:py-5">
      <div className="flex items-center justify-between pb-3.5">
        <h2 id="shop-filter-heading" className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.16em] text-ink">
          <svg className="h-4 w-4 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <line x1="4" y1="6" x2="20" y2="6" /><line x1="7" y1="12" x2="17" y2="12" /><line x1="10" y1="18" x2="14" y2="18" />
          </svg>
          Shop By
        </h2>
        {activeFilterCount > 0 && (
          <button
            type="button"
            onClick={onClearAll}
            className="text-[13px] font-semibold text-gold underline-offset-4 hover:underline cursor-pointer"
          >
            Clear all ({activeFilterCount})
          </button>
        )}
      </div>

      <FilterSection title="Category" selected={activeCategories.length}>
        {CATEGORIES.map((cat) => (
          <FilterCheckbox
            key={cat.value}
            label={cat.label}
            count={categoryCounts[cat.value]}
            checked={activeCategories.includes(cat.value)}
            onChange={() => onToggleCategory(cat.value)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Price Range" selected={activePrice ? 1 : 0}>
        {PRICE_RANGES.map((range) => (
          <FilterCheckbox
            key={range.value}
            type="radio"
            label={range.label}
            checked={activePrice === range.value}
            onChange={() => onSetPrice(activePrice === range.value ? "" : range.value)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Collection" selected={activeCollections.length}>
        {COLLECTIONS.map((col) => (
          <FilterCheckbox
            key={col.value}
            label={col.label}
            checked={activeCollections.includes(col.value)}
            onChange={() => onToggleCollection(col.value)}
          />
        ))}
      </FilterSection>
    </aside>
  );
}

export default memo(ShopFilterComponent);
