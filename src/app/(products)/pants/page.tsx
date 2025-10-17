"use client";

import React, { useMemo, useState } from 'react'
import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";

export default function PantsPage() {
    const FILTERS = [
        "Jeans",
        "Chinos", 
        "Dress Pants",
        "Cargo",
        "Joggers",
        "Shorts",
        "Corduroy",
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
        { id: 1, name: "Classic Blue Jeans", price: "$45.00", type: "Jeans", tags: ["denim", "classic", "versatile"], description: "Timeless blue jeans that never go out of style" },
        { id: 2, name: "Slim Chino Pants", price: "$38.00", type: "Chinos", tags: ["chino", "slim", "casual"], description: "Comfortable chino pants for everyday wear" },
        { id: 3, name: "Dress Trousers", price: "$55.00", type: "Dress Pants", tags: ["dress", "formal", "business"], description: "Professional dress trousers for business attire" },
        { id: 4, name: "Cargo Pants", price: "$42.00", type: "Cargo", tags: ["cargo", "utility", "practical"], description: "Functional cargo pants with multiple pockets" },
        { id: 5, name: "Jogger Pants", price: "$35.00", type: "Joggers", tags: ["jogger", "comfortable", "casual"], description: "Comfortable jogger pants for relaxed wear" },
        { id: 6, name: "Chino Shorts", price: "$28.00", type: "Shorts", tags: ["chino", "summer", "casual"], description: "Classic chino shorts for warm weather" },
        { id: 7, name: "Corduroy Pants", price: "$48.00", type: "Corduroy", tags: ["corduroy", "vintage", "textured"], description: "Vintage corduroy pants with unique texture" },
        { id: 8, name: "Vintage Denim", price: "$52.00", type: "Vintage", tags: ["vintage", "denim", "retro"], description: "Authentic vintage denim with character" },
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
                <SectionHeader title="Pants" subtitle="Find the perfect pair of pants for any occasion" />

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
