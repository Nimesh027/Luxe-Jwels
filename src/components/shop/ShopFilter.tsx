"use client";

import React from "react";

export const CATEGORIES = [
  { label: "Rings", value: "rings" },
  { label: "Necklaces", value: "necklaces" },
  { label: "Earrings", value: "earrings" },
  { label: "Bracelets", value: "bracelets" },
  { label: "Pendants", value: "pendants" },
];

export const COLLECTIONS = [
  { label: "Diamond", value: "diamond-collection" },
  { label: "Gold", value: "gold-collection" },
  { label: "Men's", value: "mens-collection" },
  { label: "Couple", value: "couple-collection" },
  { label: "Gifts", value: "gift-collection" },
];

export const PRICE_RANGES = [
  { label: "Under ₹25,000", value: "under-25k", min: 0, max: 25000 },
  { label: "₹25,000 – ₹50,000", value: "25k-50k", min: 25000, max: 50000 },
  { label: "₹50,000 – ₹1,00,000", value: "50k-1l", min: 50000, max: 100000 },
  { label: "Above ₹1,00,000", value: "above-1l", min: 100000, max: Infinity },
];

interface FilterCheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

function FilterCheckbox({ label, checked, onChange }: FilterCheckboxProps) {
  return (
    <button
      type="button"
      onClick={onChange}
      className="w-full flex items-center gap-3 px-2 py-1.5 rounded-lg text-left transition-all duration-200 cursor-pointer group hover:bg-ink/5"
    >
      <span
        className={`w-[15px] h-[15px] shrink-0 rounded-[4px] border-[1.5px] flex items-center justify-center transition-all duration-200 ${checked
            ? "bg-wine border-wine shadow-sm shadow-wine/30"
            : "border-border/70 bg-surface group-hover:border-wine/50"
          }`}
      >
        {checked && (
          <svg className="w-[9px] h-[9px] text-white" viewBox="0 0 10 10" fill="none">
            <path
              d="M1.5 5l2.5 2.5 4.5-4.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span
        className={`text-[13px] leading-none transition-colors duration-150 ${checked ? "text-wine font-semibold" : "text-ink/80 group-hover:text-ink"
          }`}
      >
        {label}
      </span>
    </button>
  );
}

interface FilterRadioProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

function FilterRadio({ label, checked, onChange }: FilterRadioProps) {
  return (
    <button
      type="button"
      onClick={onChange}
      className="w-full flex items-center gap-3 px-2 py-1.5 rounded-lg text-left transition-all duration-200 cursor-pointer group hover:bg-ink/5"
    >
      <span
        className={`w-[15px] h-[15px] shrink-0 rounded-full border-[1.5px] flex items-center justify-center transition-all duration-200 ${checked
            ? "border-wine"
            : "border-border/70 bg-surface group-hover:border-wine/50"
          }`}
      >
        {checked && (
          <span className="w-[7px] h-[7px] rounded-full bg-wine block shadow-sm shadow-wine/40" />
        )}
      </span>
      <span
        className={`text-[13px] leading-none transition-colors duration-150 ${checked ? "text-wine font-semibold" : "text-ink/80 group-hover:text-ink"
          }`}
      >
        {label}
      </span>
    </button>
  );
}

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2.5">
        <p className="text-[9px] font-extrabold uppercase tracking-[0.28em] text-muted/70">
          {title}
        </p>
        <span className="flex-1 h-px bg-border/50" />
      </div>
      <div className="flex flex-col gap-0.5">{children}</div>
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

export default function ShopFilter({
  activeCategories,
  activeCollections,
  activePrice,
  onToggleCategory,
  onToggleCollection,
  onSetPrice,
  onClearAll,
  activeFilterCount,
}: ShopFilterProps) {
  return (
    <aside>
      {/* Header */}
      <div className="flex items-center justify-between mb-5 pb-3 border-b border-border/60">
        <div className="flex items-center gap-2">
          <svg className="w-3.5 h-3.5 text-wine" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="7" y1="12" x2="17" y2="12" />
            <line x1="10" y1="18" x2="14" y2="18" />
          </svg>
          <h2 className="!text-small font-extrabold uppercase tracking-[0.2em] text-ink">
            Filter By
          </h2>
        </div>
        {activeFilterCount > 0 && (
          <button
            onClick={onClearAll}
            className="text-[10px] text-wine/80 hover:text-wine border border-wine/20 hover:border-wine/40 rounded-full px-2.5 py-0.5 transition-all duration-150 cursor-pointer font-semibold tracking-wide"
          >
            Clear {activeFilterCount}
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Category */}
        <FilterSection title="Category">
          {CATEGORIES.map((cat) => (
            <FilterCheckbox
              key={cat.value}
              label={cat.label}
              checked={activeCategories.includes(cat.value)}
              onChange={() => onToggleCategory(cat.value)}
            />
          ))}
        </FilterSection>

        {/* Collection */}
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

        {/* Price */}
        <FilterSection title="Price">
          {PRICE_RANGES.map((range) => (
            <FilterRadio
              key={range.value}
              label={range.label}
              checked={activePrice === range.value}
              onChange={() =>
                onSetPrice(activePrice === range.value ? "" : range.value)
              }
            />
          ))}
        </FilterSection>
      </div>
    </aside>
  );
}
