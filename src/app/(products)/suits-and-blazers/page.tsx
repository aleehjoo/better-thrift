"use client";

import React, { useMemo, useState } from 'react'
import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import Footer from "@/components/Footer";
import FilterPanel from "@/components/FilterPanel";

export default function SuitsAndBlazersPage() {
    const FILTERS = [
        "Blazer",
        "Suit Jacket", 
        "Tuxedo",
        "Sport Coat",
        "Wool",
        "Linen",
        "Cotton",
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
        { id: 1, name: "Classic Navy Blazer", price: "$125.00", type: "Blazer", tags: ["navy", "classic", "versatile"], description: "Timeless navy blazer for any formal occasion" },
        { id: 2, name: "Wool Suit Jacket", price: "$180.00", type: "Suit Jacket", tags: ["wool", "formal", "business"], description: "Professional wool suit jacket for business attire" },
        { id: 3, name: "Black Tuxedo Jacket", price: "$220.00", type: "Tuxedo", tags: ["tuxedo", "formal", "elegant"], description: "Elegant black tuxedo jacket for special events" },
        { id: 4, name: "Linen Sport Coat", price: "$95.00", type: "Sport Coat", tags: ["linen", "casual", "summer"], description: "Lightweight linen sport coat for warm weather" },
        { id: 5, name: "Cotton Blazer", price: "$85.00", type: "Blazer", tags: ["cotton", "casual", "comfortable"], description: "Comfortable cotton blazer for smart casual wear" },
        { id: 6, name: "Wool Blend Jacket", price: "$110.00", type: "Wool", tags: ["wool", "warm", "professional"], description: "Warm wool blend jacket for professional settings" },
        { id: 7, name: "Vintage Tweed Jacket", price: "$140.00", type: "Vintage", tags: ["vintage", "tweed", "textured"], description: "Authentic vintage tweed jacket with character" },
        { id: 8, name: "Double-Breasted Blazer", price: "$160.00", type: "Blazer", tags: ["double-breasted", "formal", "sophisticated"], description: "Sophisticated double-breasted blazer for formal occasions" },
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
                <SectionHeader title="Suits & Blazers" subtitle="Make a statement with our collection of professional and formal wear" />

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


