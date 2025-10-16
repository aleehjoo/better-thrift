"use client";

import React, { useMemo, useState } from 'react'
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";

export default function JacketsPage() {
    const FILTERS = [
        "Denim",
        "Leather", 
        "Bomber",
        "Blazer",
        "Windbreaker",
        "Puffer",
        "Trench",
        "Vintage"
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
        { id: 1, name: "Classic Denim Jacket", price: "$58.00", type: "Denim", tags: ["denim", "classic", "versatile"], description: "Timeless denim jacket perfect for any outfit" },
        { id: 2, name: "Vintage Leather Bomber", price: "$120.00", type: "Leather", tags: ["leather", "vintage", "bomber"], description: "Authentic vintage leather bomber jacket" },
        { id: 3, name: "Nylon Windbreaker", price: "$45.00", type: "Windbreaker", tags: ["nylon", "lightweight", "waterproof"], description: "Lightweight windbreaker for outdoor activities" },
        { id: 4, name: "Wool Blazer", price: "$85.00", type: "Blazer", tags: ["wool", "formal", "business"], description: "Professional wool blazer for business attire" },
        { id: 5, name: "Puffer Jacket", price: "$75.00", type: "Puffer", tags: ["puffer", "warm", "winter"], description: "Cozy puffer jacket for cold weather" },
        { id: 6, name: "Trench Coat", price: "$95.00", type: "Trench", tags: ["trench", "classic", "elegant"], description: "Elegant trench coat for sophisticated looks" },
        { id: 7, name: "Vintage Band Jacket", price: "$65.00", type: "Vintage", tags: ["vintage", "music", "retro"], description: "Authentic vintage band jacket with character" },
        { id: 8, name: "Casual Bomber", price: "$55.00", type: "Bomber", tags: ["bomber", "casual", "street"], description: "Modern bomber jacket for casual wear" },
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

    return (
        <section className="w-full">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">Jackets</h1>
                    <p className="text-foreground/70 text-lg">Stay stylish and warm with our collection of premium jackets</p>
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
                                <span>Sort:</span>
                                <button className="px-2 py-1 rounded border border-foreground/15 hover:bg-foreground/5">Featured</button>
                                <button className="px-2 py-1 rounded border border-foreground/15 hover:bg-foreground/5">Newest</button>
                                <button className="px-2 py-1 rounded border border-foreground/15 hover:bg-foreground/5">Price</button>
                            </div>
                        </div>

                        <ProductGrid products={filtered} />
                    </main>
                </div>
            </div>
        </section>
    )
}
