"use client";

import React, { memo } from "react";
import { FilterIcon, CheckIcon } from "@/components/icons";
import Button from "@/components/ui/Button";

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
  { value: "gold", label: "Yellow Gold", color: "#E5C158" },
  { value: "white-gold", label: "White Gold", color: "#E0E0E0" },
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
}

const FilterCheckbox = memo(function FilterCheckbox({
  label,
  count,
  checked,
  onChange,
}: FilterCheckboxProps) {
  return (
    <Button
      variant="unstyled"
      onClick={onChange}
      className="w-full flex items-center justify-between py-1.5 rounded text-left transition-colors cursor-pointer group hover:text-[#B38E5D]"
    >
      <div className="flex items-center gap-2.5">
        <span
          className={`w-4 h-4 shrink-0 rounded border flex items-center justify-center transition-all ${ checked ? "bg-[#B38E5D] border-[#B38E5D] text-white" : "border-[#D6CEC5] bg-white group-hover:border-[#B38E5D]" }`}
        >
          {checked && <CheckIcon size={11} className="text-white stroke-[2.5]" />}
        </span>
        <span
          className={`text-[13px] ${ checked ? "text-[#B38E5D] font-semibold" : "text-[#332E29]" }`}
        >
          {label}
        </span>
      </div>
      {typeof count === "number" && (
        <span className="text-[11.5px] text-[#8C827A] font-light">({count})</span>
      )}
    </Button>
  );
});

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-[#EAE4DC] pb-5 mb-5 last:border-b-0 last:pb-0 last:mb-0">
      <h3 className="font-display text-[15px] font-semibold text-[#141414] mb-3">
        {title}
      </h3>
      <div className="flex flex-col gap-1">{children}</div>
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
  activePrice,
  onToggleCategory,
  onSetPrice,
  onClearAll,
  activeFilterCount,
}: ShopFilterProps) {
  return (
    <aside className="bg-white p-5 rounded-2xl border border-[#EAE4DC] shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#EAE4DC]">
        <div className="flex items-center gap-2">
          <FilterIcon size={16} className="text-[#B38E5D]" />
          <h2 className="font-display text-[17px] font-semibold text-[#141414]">
            Shop By
          </h2>
        </div>
        {activeFilterCount > 0 && (
          <button
            type="button"
            onClick={onClearAll}
            className="text-[11.5px] text-[#B38E5D] hover:underline font-medium cursor-pointer"
          >
            Clear ({activeFilterCount})
          </button>
        )}
      </div>

      <div className="space-y-1">
        {/* Category */}
        <FilterSection title="Category">
          {CATEGORIES.map((cat) => (
            <FilterCheckbox
              key={cat.value}
              label={cat.label}
              count={cat.count}
              checked={activeCategories.includes(cat.value)}
              onChange={() => onToggleCategory(cat.value)}
            />
          ))}
        </FilterSection>

        {/* Price Range */}
        <FilterSection title="Price Range">
          {PRICE_RANGES.map((range) => (
            <FilterCheckbox
              key={range.value}
              label={range.label}
              checked={activePrice === range.value}
              onChange={() =>
                onSetPrice(activePrice === range.value ? "" : range.value)
              }
            />
          ))}
        </FilterSection>

        {/* Metal */}
        <FilterSection title="Metal">
          {METALS.map((metal) => (
            <div
              key={metal.value}
              className="flex items-center gap-2.5 py-1 text-[13px] text-[#332E29] hover:text-[#B38E5D] cursor-pointer"
            >
              <span
                className="w-3.5 h-3.5 rounded-full border border-black/20"
                style={{ backgroundColor: metal.color }}
              />
              <span>{metal.label}</span>
            </div>
          ))}
        </FilterSection>

        {/* Stone */}
        <FilterSection title="Stone">
          {STONES.map((stone) => (
            <div
              key={stone.value}
              className="flex items-center gap-2.5 py-1 text-[13px] text-[#332E29] hover:text-[#B38E5D] cursor-pointer"
            >
              <span>{stone.label}</span>
            </div>
          ))}
        </FilterSection>
      </div>
    </aside>
  );
}

export default memo(ShopFilterComponent);
