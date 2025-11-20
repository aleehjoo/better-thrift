"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FilterPanel from "@/components/FilterPanel";

type GenderFilter = "all" | "men" | "women";
type ViewMode = "grid" | "list";
type SortOption = "featured" | "newest" | "price-asc" | "price-desc";

type Product = {
  id: number;
  name: string;
  price: number;
  gender: Exclude<GenderFilter, "all"> | "unisex";
  category: string;
  description: string;
  badge?: string;
};

const NEW_PRODUCTS: Product[] = [
  {
    id: 401,
    name: "Retro Corduroy Jacket",
    price: 1200,
    gender: "men",
    category: "Outerwear",
    description: "Soft corduroy shell with light quilted lining for cooler nights.",
    badge: "New",
  },
  {
    id: 405,
    name: "Minimalist Graphic Tee",
    price: 550,
    gender: "women",
    category: "Tops",
    description: "Relaxed crop tee with a washed print inspired by 90s zines.",
    badge: "New",
  },
  {
    id: 412,
    name: "Vintage Leather Boots",
    price: 1600,
    gender: "women",
    category: "Footwear",
    description: "Hand-burnished boots with stacked heel and cushioned insole.",
  },
  {
    id: 418,
    name: "Unisex Carpenter Denim",
    price: 980,
    gender: "unisex",
    category: "Bottoms",
    description: "Roomy, straight-leg denim with utility pockets and double knees.",
  },
  {
    id: 424,
    name: "Studio Knit Polo",
    price: 890,
    gender: "men",
    category: "Tops",
    description: "Fine knit polo with contrast tipping and a relaxed drape.",
  },
  {
    id: 430,
    name: "Airy Poplin Dress",
    price: 1350,
    gender: "women",
    category: "Dresses",
    description: "Tiered midi dress with hidden pockets and adjustable straps.",
  },
  {
    id: 433,
    name: "Modular Utility Vest",
    price: 1100,
    gender: "men",
    category: "Outerwear",
    description: "Multiple removable pockets crafted from recycled nylon.",
  },
  {
    id: 437,
    name: "Everyday Canvas Sneakers",
    price: 750,
    gender: "unisex",
    category: "Footwear",
    description: "Chunky outsole with contrast stitching and soft mesh lining.",
  },
  {
    id: 441,
    name: "Wool Blend Trench",
    price: 1850,
    gender: "women",
    category: "Outerwear",
    description: "Double-breasted silhouette with detachable belt and deep pockets.",
    badge: "Limited",
  },
];

const CATEGORY_OPTIONS = [...new Set(NEW_PRODUCTS.map((product) => product.category))].sort();

const SORT_OPTIONS: Record<SortOption, string> = {
  featured: "Featured",
  newest: "Newest first",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
};

const formatPrice = (price: number) => `₱${price.toLocaleString("en-PH")}`;

export default function NewArrivalsPage() {
  const [genderFilter, setGenderFilter] = useState<GenderFilter>("all");
  const [sortOption, setSortOption] = useState<SortOption>("featured");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [categoryFilters, setCategoryFilters] = useState<Set<string>>(new Set());
  const [showSortMenu, setShowSortMenu] = useState(false);

  const toggleCategory = (category: string) => {
    setCategoryFilters((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  const activeProducts = useMemo(() => {
    let result = NEW_PRODUCTS.filter((product) => {
      const genderMatch =
        genderFilter === "all" || product.gender === genderFilter || product.gender === "unisex";
      const categoryMatch =
        categoryFilters.size === 0 || categoryFilters.has(product.category);
      return genderMatch && categoryMatch;
    });

    switch (sortOption) {
      case "newest":
        result = [...result].sort((a, b) => b.id - a.id);
        break;
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return result;
  }, [genderFilter, categoryFilters, sortOption]);

  const featuredProduct = activeProducts[0] ?? NEW_PRODUCTS[0];

  const renderProductCard = (product: Product) => (
    <div
      key={product.id}
      className="group rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative bg-gray-100">
        <div className="aspect-[4/5] w-full flex items-center justify-center">
          <span className="text-gray-500">Image</span>
        </div>
        {product.badge && (
          <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium text-gray-800 shadow">
            {product.badge}
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 hidden items-end justify-center gap-2 bg-black/0 p-3 transition group-hover:flex group-hover:bg-black/10">
          <button className="pointer-events-auto px-3 py-2 rounded-md bg-white text-gray-900 text-xs font-medium shadow hover:bg-gray-100">
            Quick View
          </button>
          <button className="pointer-events-auto px-3 py-2 rounded-md bg-black text-white text-xs font-medium shadow hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium text-gray-900">{product.name}</h3>
          <p className="text-sm font-semibold text-gray-700">{formatPrice(product.price)}</p>
        </div>
        <p className="text-xs text-gray-500 mt-2">{product.category}</p>
        <p className="text-sm text-gray-600 mt-3">{product.description}</p>
        <div className="mt-4 flex items-center gap-3">
          <button className="px-3 py-1.5 rounded-md border border-gray-300 text-xs hover:bg-gray-100">
            Wishlist
          </button>
          <button className="px-3 py-1.5 rounded-md border border-gray-300 text-xs hover:bg-gray-100">
            Compare
          </button>
        </div>
      </div>
    </div>
  );

  const renderListCard = (product: Product) => (
    <div
      key={`${product.id}-list`}
      className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md md:flex-row"
    >
      <div className="relative w-full overflow-hidden rounded-xl bg-gray-100 md:w-56">
        <div className="aspect-[4/5] w-full flex items-center justify-center">
          <span className="text-gray-500">Image</span>
        </div>
        {product.badge && (
          <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium text-gray-800 shadow">
            {product.badge}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>
          </div>
          <p className="text-xl font-semibold text-gray-900">{formatPrice(product.price)}</p>
        </div>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded-md bg-black text-white text-sm hover:bg-gray-800">
            Add to Cart
          </button>
          <button className="px-4 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-100">
            Wishlist
          </button>
          <button className="px-4 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-100">
            Compare
          </button>
        </div>
      </div>
    </div>
  );

  const genderButtonClass = (value: GenderFilter) =>
    [
      "px-4 py-2 rounded-full text-sm transition border",
      genderFilter === value
        ? "bg-black text-white border-black"
        : "border-gray-300 text-gray-700 hover:bg-gray-100",
    ].join(" ");

  const viewButtonClass = (value: ViewMode) =>
    [
      "px-3 py-2 rounded-md border text-sm transition",
      viewMode === value ? "bg-black text-white border-black" : "border-gray-300 hover:bg-gray-100",
    ].join(" ");

  return (
    <>
      <main className="min-h-screen w-full bg-gray-50">
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 py-10">
          <h1 className="mb-12 text-center font-serif text-3xl font-bold tracking-tight md:text-5xl">
            New Arrivals
          </h1>

          {/* Action bar */}
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <button type="button" className={genderButtonClass("all")} onClick={() => setGenderFilter("all")}>
                All
              </button>
              <button type="button" className={genderButtonClass("men")} onClick={() => setGenderFilter("men")}>
                Men
              </button>
              <button type="button" className={genderButtonClass("women")} onClick={() => setGenderFilter("women")}>
                Women
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm hover:bg-gray-100"
                  onClick={() => setShowSortMenu((prev) => !prev)}
                >
                  Sort
                  <span className="text-xs text-gray-500">{SORT_OPTIONS[sortOption]}</span>
                </button>
                {showSortMenu && (
                  <div className="absolute right-0 z-20 mt-2 w-44 rounded-xl border border-gray-200 bg-white p-1 shadow-lg">
                    {Object.entries(SORT_OPTIONS).map(([value, label]) => (
                      <button
                        key={value}
                        type="button"
                        className={`w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-100 ${
                          sortOption === value ? "bg-gray-100 font-medium" : ""
                        }`}
                        onClick={() => {
                          setSortOption(value as SortOption);
                          setShowSortMenu(false);
                        }}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                type="button"
                className="relative rounded-md border border-gray-300 px-3 py-2 text-sm hover:bg-gray-100"
                onClick={() => setShowFilters((prev) => !prev)}
              >
                Filters
                {categoryFilters.size > 0 && (
                  <span className="ml-2 rounded-full bg-black/80 px-2 py-0.5 text-xs text-white">
                    {categoryFilters.size}
                  </span>
                )}
              </button>
              <div className="hidden items-center gap-1 md:flex">
                <button type="button" className={viewButtonClass("grid")} onClick={() => setViewMode("grid")}>
                  Grid
                </button>
                <button type="button" className={viewButtonClass("list")} onClick={() => setViewMode("list")}>
                  List
                </button>
              </div>
            </div>
          </div>

          {showFilters && (
            <div className="mb-10">
              <FilterPanel
                title="Filter products"
                sectionLabel="Categories"
                options={CATEGORY_OPTIONS}
                selected={categoryFilters}
                onToggle={toggleCategory}
                onClear={() => setCategoryFilters(new Set())}
              />
            </div>
          )}

          {/* Featured */}
          <div className="mb-16 grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl bg-gray-200 shadow-md transition-all hover:shadow-lg">
              <div className="flex w-full items-center justify-center bg-gray-200">
                <div className="aspect-[4/3] w-full max-w-2xl bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Featured Image</span>
                </div>
              </div>
              {featuredProduct?.badge && (
                <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-800 shadow">
                  {featuredProduct.badge}
                </div>
              )}
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-3 text-2xl font-semibold md:text-3xl">{featuredProduct?.name}</h2>
              <p className="mb-4 text-gray-600 md:mb-6">{featuredProduct?.description}</p>
              <p className="mb-6 text-xl font-bold">{featuredProduct ? formatPrice(featuredProduct.price) : "—"}</p>
              <div className="flex items-center gap-3">
                <button className="rounded-md bg-black px-5 py-2.5 text-white hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 transition">
                  Add to Cart
                </button>
                <button className="rounded-md border border-gray-300 px-5 py-2.5 text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400/40 transition">
                  Wishlist
                </button>
              </div>
            </div>
          </div>

          {/* Product collection */}
          {activeProducts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center text-gray-500">
              No products match the selected filters yet. Try a different combination.
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {activeProducts.map(renderProductCard)}
            </div>
          ) : (
            <div className="space-y-4">{activeProducts.map(renderListCard)}</div>
          )}

          {/* Pagination/collection CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <button className="rounded-md border border-gray-300 bg-white px-6 py-3 hover:bg-gray-100 transition">
              Load more
            </button>
            <div className="flex w-full flex-col items-center gap-4 rounded-2xl bg-gray-900 p-6 text-white md:flex-row md:justify-between md:p-8">
              <div>
                <p className="text-sm uppercase tracking-wide text-white/70">This week’s drop</p>
                <h3 className="mt-1 text-xl font-semibold md:text-2xl">Fresh finds, limited quantities</h3>
              </div>
              <div className="flex items-center gap-3">
                <button className="rounded-md bg-white px-5 py-2.5 text-gray-900 hover:bg-gray-100 transition">
                  View full collection
                </button>
                <button className="rounded-md border border-white/30 px-5 py-2.5 hover:bg-white/10 transition">
                  Notify me
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
