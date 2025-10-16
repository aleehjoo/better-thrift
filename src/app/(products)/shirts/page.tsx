"use client";

import React, { useMemo, useState } from 'react'
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";

export default function ShirtsPage() {
    const FILTERS = [
        "Casual",
        "Formal", 
        "Graphic",
        "Polo",
        "Button-Down",
        "Tank Top",
        "Long Sleeve",
        "Short Sleeve"
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
        { id: 1, name: "Classic White Button-Down", price: "$29.00", type: "Formal", tags: ["cotton", "classic", "versatile"], description: "Essential white shirt perfect for any occasion" },
        { id: 2, name: "Vintage Band Tee", price: "$22.00", type: "Graphic", tags: ["vintage", "music", "retro"], description: "Authentic vintage band t-shirt with soft cotton" },
        { id: 3, name: "Polo Shirt", price: "$35.00", type: "Polo", tags: ["polo", "casual", "sporty"], description: "Comfortable polo shirt for casual wear" },
        { id: 4, name: "Flannel Shirt", price: "$27.00", type: "Casual", tags: ["flannel", "warm", "cozy"], description: "Soft flannel shirt perfect for layering" },
        { id: 5, name: "Graphic Hoodie", price: "$45.00", type: "Graphic", tags: ["hoodie", "graphic", "street"], description: "Trendy graphic hoodie with unique design" },
        { id: 6, name: "Dress Shirt", price: "$38.00", type: "Formal", tags: ["dress", "formal", "business"], description: "Professional dress shirt for business attire" },
        { id: 7, name: "Tank Top", price: "$15.00", type: "Tank Top", tags: ["tank", "summer", "casual"], description: "Comfortable tank top for warm weather" },
        { id: 8, name: "Long Sleeve Tee", price: "$25.00", type: "Long Sleeve", tags: ["long-sleeve", "basic", "comfortable"], description: "Essential long sleeve t-shirt" },
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
                    <h1 className="text-4xl font-bold mb-4">Shirts</h1>
                    <p className="text-foreground/70 text-lg">Discover our curated collection of shirts for every occasion</p>
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
