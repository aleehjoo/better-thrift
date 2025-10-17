"use client";

import React, { useMemo, useState } from 'react'
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import SortDropdown, { SortOption, sortProducts } from "@/components/SortDropdown";

export default function HoodiePage() {
    const FILTERS = [
        "Pullover",
        "Zip-Up", 
        "Graphic",
        "Oversized",
        "Cropped",
        "Vintage",
        "Fleece",
        "Athletic"
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
        { id: 1, name: "Classic Pullover Hoodie", price: "$45.00", type: "Pullover", tags: ["pullover", "classic", "comfortable"], description: "Essential pullover hoodie for everyday comfort" },
        { id: 2, name: "Zip-Up Hoodie", price: "$48.00", type: "Zip-Up", tags: ["zip-up", "versatile", "layering"], description: "Versatile zip-up hoodie perfect for layering" },
        { id: 3, name: "Graphic Print Hoodie", price: "$52.00", type: "Graphic", tags: ["graphic", "print", "statement"], description: "Bold graphic hoodie to make a statement" },
        { id: 4, name: "Oversized Hoodie", price: "$55.00", type: "Oversized", tags: ["oversized", "relaxed", "trendy"], description: "Trendy oversized hoodie for relaxed style" },
        { id: 5, name: "Cropped Hoodie", price: "$42.00", type: "Cropped", tags: ["cropped", "fitted", "modern"], description: "Modern cropped hoodie for a fitted look" },
        { id: 6, name: "Vintage Band Hoodie", price: "$65.00", type: "Vintage", tags: ["vintage", "band", "retro"], description: "Authentic vintage band hoodie with character" },
        { id: 7, name: "Fleece Hoodie", price: "$58.00", type: "Fleece", tags: ["fleece", "warm", "cozy"], description: "Ultra-soft fleece hoodie for maximum warmth" },
        { id: 8, name: "Athletic Hoodie", price: "$50.00", type: "Athletic", tags: ["athletic", "performance", "sporty"], description: "Performance athletic hoodie for active wear" },
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
        <section className="w-full">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">Hoodies</h1>
                    <p className="text-foreground/70 text-lg">Stay cozy and stylish with our collection of premium hoodies</p>
                </div>

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
    )
}


