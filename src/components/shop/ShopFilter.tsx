"use client";

import React, { memo } from "react";
import { FilterIcon, CheckIcon } from "@/components/icons";
import Button from "@/components/ui/Button";
import {
  filterCategoriesData as CATEGORIES,
  filterCollectionsData as COLLECTIONS,
  filterPriceRangesData as PRICE_RANGES,
} from "@/data";

export { CATEGORIES, COLLECTIONS, PRICE_RANGES };

interface FilterCheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const FilterCheckbox = memo(function FilterCheckbox({ label, checked, onChange }: FilterCheckboxProps) {
  return (
    <Button
      variant="unstyled"
      onClick={onChange}
      className="w-full flex items-center gap-3 px-2 py-1.5 rounded-lg text-left transition-all duration-200 cursor-pointer group hover:bg-ink/5"
    >
      <span
        className={`w-[15px] h-[15px] shrink-0 rounded-[4px] border-[1.5px] flex items-center justify-center transition-all duration-200 ${
          checked
            ? "bg-wine border-wine shadow-sm shadow-wine/30"
            : "border-border/70 bg-surface group-hover:border-wine/50"
        }`}
      >
        {checked && <CheckIcon size={10} className="text-white stroke-[2.5]" />}
      </span>
      <span
        className={`text-[13px] leading-none transition-colors duration-150 ${
          checked ? "text-wine font-semibold" : "text-ink/80 group-hover:text-ink"
        }`}
      >
        {label}
      </span>
    </Button>
  );
});

interface FilterRadioProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const FilterRadio = memo(function FilterRadio({ label, checked, onChange }: FilterRadioProps) {
  return (
    <Button
      variant="unstyled"
      onClick={onChange}
      className="w-full flex items-center gap-3 px-2 py-1.5 rounded-lg text-left transition-all duration-200 cursor-pointer group hover:bg-ink/5"
    >
      <span
        className={`w-[15px] h-[15px] shrink-0 rounded-full border-[1.5px] flex items-center justify-center transition-all duration-200 ${
          checked
            ? "border-wine"
            : "border-border/70 bg-surface group-hover:border-wine/50"
        }`}
      >
        {checked && (
          <span className="w-[7px] h-[7px] rounded-full bg-wine block shadow-sm shadow-wine/40" />
        )}
      </span>
      <span
        className={`text-[13px] leading-none transition-colors duration-150 ${
          checked ? "text-wine font-semibold" : "text-ink/80 group-hover:text-ink"
        }`}
      >
        {label}
      </span>
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
  return (
    <aside>
      {/* Header */}
      <div className="flex items-center justify-between mb-5 pb-3 border-b border-border/60">
        <div className="flex items-center gap-2">
          <FilterIcon size={16} className="text-wine" />
          <h2 className="!text-small font-extrabold uppercase tracking-[0.2em] text-ink">
            Filter By
          </h2>
        </div>
        {activeFilterCount > 0 && (
          <Button
            variant="unstyled"
            onClick={onClearAll}
            className="text-[10px] text-wine/80 hover:text-wine border border-wine/20 hover:border-wine/40 rounded-full px-2.5 py-0.5 transition-all duration-150 cursor-pointer font-semibold tracking-wide"
          >
            Clear {activeFilterCount}
          </Button>
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

export default memo(ShopFilterComponent);
