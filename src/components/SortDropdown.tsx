"use client";

import React from 'react';

export type SortOption =
  | "featured"
  | "newest"
  | "oldest"
  | "price-asc"
  | "price-desc";

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

// Helper to parse a price string like "$49.00" to a number 49.00
export function parsePrice(price: string): number {
  const n = Number(price.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

// Generic sorter that works on items with id and price fields similar to ProductGridItem
export function sortProducts<T extends { id: number; price: string }>(
  products: T[],
  sort: SortOption
): T[] {
  const arr = [...products];
  switch (sort) {
    case "featured":
      return arr; // keep original order
    case "newest":
      // Assuming higher id means newer
      return arr.sort((a, b) => b.id - a.id);
    case "oldest":
      return arr.sort((a, b) => a.id - b.id);
    case "price-asc":
      return arr.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    case "price-desc":
      return arr.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    default:
      return arr;
  }
}

type SortDropdownProps = {
  value: SortOption;
  onChange: (value: SortOption) => void;
  className?: string;
};

const SortDropdown: React.FC<SortDropdownProps> = ({ value, onChange, className }) => {
  return (
    <label className={["inline-flex items-center gap-2", className].filter(Boolean).join(" ")}>      
      <span className="text-sm text-foreground/60">Sort:</span>
      <select
        className="text-sm border border-foreground/15 rounded-md px-2 py-1 bg-background hover:bg-foreground/5 focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
      >
        {SORT_OPTIONS.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </label>
  );
};

export default SortDropdown;
