"use client";

import React, { useMemo, useState } from 'react'
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import SortDropdown, { SortOption, sortProducts } from "@/components/SortDropdown";
import SectionHeader from "@/components/SectionHeader";
import Footer from "@/components/Footer";

export default function ShoesPage() {
    const FILTERS = [
        "Sneakers",
        "Boots", 
        "Dress Shoes",
        "Sandals",
        "Loafers",
        "Athletic",
        "Vintage",
        "Casual"
    ] as const;

    type Product = {
        id: number;
        name: string;
        price: string;
        type: string;
        tags: string[];
        description: string;
    };

    const PRODUCTS: Product[] = [
        { id: 1, name: "Classic White Sneakers", price: "$65.00", type: "Sneakers", tags: ["white", "classic", "versatile"], description: "Timeless white sneakers that go with everything" },
        { id: 2, name: "Leather Ankle Boots", price: "$95.00", type: "Boots", tags: ["leather", "ankle", "elegant"], description: "Stylish leather ankle boots for any occasion" },
        { id: 3, name: "Oxford Dress Shoes", price: "$120.00", type: "Dress Shoes", tags: ["oxford", "formal", "leather"], description: "Professional oxford shoes for business attire" },
        { id: 4, name: "Canvas Sneakers", price: "$45.00", type: "Sneakers", tags: ["canvas", "casual", "comfortable"], description: "Comfortable canvas sneakers for everyday wear" },
        { id: 5, name: "Leather Loafers", price: "$85.00", type: "Loafers", tags: ["leather", "loafers", "sophisticated"], description: "Elegant leather loafers for sophisticated looks" },
        { id: 6, name: "Running Shoes", price: "$75.00", type: "Athletic", tags: ["running", "athletic", "performance"], description: "High-performance running shoes for athletes" },
        { id: 7, name: "Vintage Combat Boots", price: "$110.00", type: "Vintage", tags: ["vintage", "combat", "rugged"], description: "Authentic vintage combat boots with character" },
        { id: 8, name: "Casual Slip-ons", price: "$55.00", type: "Casual", tags: ["slip-on", "casual", "easy"], description: "Comfortable slip-on shoes for relaxed wear" },
    ];

    const [selectedFilters, setSelectedFilters] = useState<Set<string>>(new Set());

    const toggleFilter = (filter: string) => {
        setSelectedFilters(prev => {
            const next = new Set(prev);
            if (next.has(filter)) next.delete(filter); else next.add(filter);
            return next;
        });
    };

    const clearFilters = () => setSelectedFilters(new Set());

    const filtered = useMemo(() => {
        if (selectedFilters.size === 0) return PRODUCTS;
        return PRODUCTS.filter(p => selectedFilters.has(p.type));
    }, [selectedFilters]);

    const [sort, setSort] = useState<SortOption>("featured");
    const sorted = useMemo(() => sortProducts(filtered, sort), [filtered, sort]);

    return (
        <>
        <section className="w-full">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-16">
                <SectionHeader title="Shoes" subtitle="Step up your style with our collection of premium footwear" />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <aside className="md:col-span-1">
                        <div className="rounded-xl border border-foreground/15 bg-background p-5 sticky top-24">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold">Filters</h2>
                                <button onClick={clearFilters} className="text-xs text-foreground/60 hover:text-foreground/90">Clear</button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-sm font-medium text-foreground/80 mb-2">Type</h3>
                                    <div className="space-y-2">
                                        {FILTERS.map(filter => (
                                            <label key={filter} className="flex items-center gap-3 text-sm cursor-pointer select-none">
                                                <input
                                                    type="checkbox"
                                                    className="accent-foreground/70"
                                                    checked={selectedFilters.has(filter)}
                                                    onChange={() => toggleFilter(filter)}
                                                />
                                                {filter}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <main className="md:col-span-3">
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-sm text-foreground/70">
                                Showing {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
                                {selectedFilters.size > 0 && <span className="ml-2 text-foreground/50">(filtered)</span>}
                            </p>
                            <div className="hidden md:flex items-center gap-2 text-sm text-foreground/60">
                                <SortDropdown value={sort} onChange={setSort} />
                            </div>
                        </div>

                        <ProductGrid products={sorted} />
                    </main>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}


