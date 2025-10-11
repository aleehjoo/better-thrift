"use client";

import React, { useMemo, useState } from 'react'
import Navbar from "@/components/Navbar";

export default function SweatersPage() {
    const FILTERS = [
        "Cardigan",
        "Pullover", 
        "Turtleneck",
        "V-Neck",
        "Crew Neck",
        "Cashmere",
        "Wool",
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
        { id: 1, name: "Classic Cardigan", price: "$65.00", type: "Cardigan", tags: ["cardigan", "classic", "versatile"], description: "Timeless cardigan perfect for layering" },
        { id: 2, name: "Cable Knit Pullover", price: "$75.00", type: "Pullover", tags: ["cable-knit", "cozy", "textured"], description: "Traditional cable knit pullover for warmth" },
        { id: 3, name: "Cashmere Turtleneck", price: "$120.00", type: "Turtleneck", tags: ["cashmere", "luxury", "elegant"], description: "Luxurious cashmere turtleneck for sophisticated looks" },
        { id: 4, name: "V-Neck Sweater", price: "$55.00", type: "V-Neck", tags: ["v-neck", "casual", "comfortable"], description: "Comfortable V-neck sweater for everyday wear" },
        { id: 5, name: "Crew Neck Sweater", price: "$58.00", type: "Crew Neck", tags: ["crew-neck", "classic", "versatile"], description: "Essential crew neck sweater for any outfit" },
        { id: 6, name: "Wool Blend Sweater", price: "$68.00", type: "Wool", tags: ["wool", "warm", "durable"], description: "Warm wool blend sweater for cold weather" },
        { id: 7, name: "Vintage Fair Isle", price: "$85.00", type: "Vintage", tags: ["vintage", "fair-isle", "patterned"], description: "Authentic vintage Fair Isle sweater with character" },
        { id: 8, name: "Oversized Sweater", price: "$72.00", type: "Pullover", tags: ["oversized", "relaxed", "trendy"], description: "Trendy oversized sweater for relaxed style" },
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
                    <h1 className="text-4xl font-bold mb-4">Sweaters</h1>
                    <p className="text-foreground/70 text-lg">Stay warm and stylish with our collection of premium sweaters</p>
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

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filtered.map((product) => (
                                <div key={product.id} className="group rounded-xl overflow-hidden border border-foreground/15 bg-background hover:shadow-lg transition-shadow">
                                    <div className="aspect-[3/4] bg-foreground/5 flex items-center justify-center">
                                        <span className="text-foreground/30 text-sm">Product Image</span>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                                        <p className="text-sm text-foreground/70 mb-2">{product.description}</p>
                                        <div className="flex items-center gap-2 mb-3 flex-wrap">
                                            <span className="text-[10px] uppercase tracking-wide bg-foreground/10 text-foreground px-2 py-0.5 rounded">{product.type}</span>
                                            {product.tags.slice(0, 2).map(tag => (
                                                <span key={tag} className="text-[10px] bg-foreground/5 text-foreground/70 px-2 py-0.5 rounded">{tag}</span>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className="text-lg font-bold">{product.price}</p>
                                            <button className="px-4 py-2 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors text-sm">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </section>
    )
}


