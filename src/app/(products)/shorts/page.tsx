"use client";

import React, { useMemo, useState } from 'react'
import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import Footer from "@/components/Footer";
import FilterPanel from "@/components/FilterPanel";

export default function ShortsPage() {
    const FILTERS = [
        "Chino",
        "Denim", 
        "Athletic",
        "Cargo",
        "Bermuda",
        "Board",
        "Linen",
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
        { id: 1, name: "Classic Chino Shorts", price: "$35.00", type: "Chino", tags: ["chino", "classic", "versatile"], description: "Essential chino shorts for any casual occasion" },
        { id: 2, name: "Denim Shorts", price: "$28.00", type: "Denim", tags: ["denim", "casual", "comfortable"], description: "Comfortable denim shorts for everyday wear" },
        { id: 3, name: "Athletic Shorts", price: "$25.00", type: "Athletic", tags: ["athletic", "performance", "sporty"], description: "High-performance athletic shorts for active wear" },
        { id: 4, name: "Cargo Shorts", price: "$32.00", type: "Cargo", tags: ["cargo", "utility", "practical"], description: "Functional cargo shorts with multiple pockets" },
        { id: 5, name: "Bermuda Shorts", price: "$38.00", type: "Bermuda", tags: ["bermuda", "formal", "sophisticated"], description: "Sophisticated Bermuda shorts for smart casual wear" },
        { id: 6, name: "Board Shorts", price: "$30.00", type: "Board", tags: ["board", "swim", "beach"], description: "Quick-dry board shorts for beach and pool" },
        { id: 7, name: "Linen Shorts", price: "$42.00", type: "Linen", tags: ["linen", "summer", "breathable"], description: "Lightweight linen shorts for warm weather" },
        { id: 8, name: "Vintage Cutoffs", price: "$26.00", type: "Vintage", tags: ["vintage", "cutoff", "retro"], description: "Authentic vintage cutoff shorts with character" },
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
        <>
        <section className="w-full">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-16">
                <SectionHeader title="Shorts" subtitle="Stay cool and comfortable with our collection of premium shorts" />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <aside className="md:col-span-1">
                        <FilterPanel
                            sectionLabel="Type"
                            options={[...FILTERS] as unknown as string[]}
                            selected={selectedFilters}
                            onToggle={toggleFilter}
                            onClear={clearFilters}
                            className="sticky top-24"
                        />
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
        <Footer />
        </>
    )
}


