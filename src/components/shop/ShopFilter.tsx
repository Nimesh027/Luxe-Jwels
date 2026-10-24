"use client";

import React, { memo, useId, useMemo } from "react";
import { CheckIcon } from "@/components/icons";
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
    <label htmlFor={id} className="group flex min-h-9 cursor-pointer items-center justify-between gap-3 text-[14.5px]">
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
      {typeof count === "number" && <span className="text-[13px] text-subtle">({count})</span>}
    </label>
  );
});

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset className="border-t border-border py-5 last:pb-0">
      <legend className="float-left w-full mb-2 font-display text-[19px] font-semibold text-ink">{title}</legend>
      <div className="clear-both flex flex-col">{children}</div>
    </fieldset>
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
    <aside aria-labelledby="shop-filter-heading" className="rounded-[var(--radius-card)] border border-border bg-white p-5 sm:p-6">
      <div className="mb-1 flex items-center justify-between pb-4">
        <h2 id="shop-filter-heading" className="font-display text-[22px] font-semibold text-ink">
          Shop By
        </h2>
        {activeFilterCount > 0 && (
          <button
            type="button"
            onClick={onClearAll}
            className="text-[13.5px] font-semibold text-gold underline-offset-4 hover:underline cursor-pointer"
          >
            Clear all ({activeFilterCount})
          </button>
        )}
      </div>

      <FilterSection title="Category">
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

      <FilterSection title="Price Range">
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

      <FilterSection title="Collection">
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
