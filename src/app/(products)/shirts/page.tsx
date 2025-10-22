"use client";

import React, { useMemo, useState } from 'react'
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import SortDropdown, { SortOption, sortProducts } from "@/components/SortDropdown";
import SectionHeader from "@/components/SectionHeader";
import Footer from "@/components/Footer";
import FilterPanel from "@/components/FilterPanel";

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

    const [sort, setSort] = useState<SortOption>("featured");
    const sorted = useMemo(() => sortProducts(filtered, sort), [filtered, sort]);

    return (
        <>
        <section className="w-full">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-16">
                <SectionHeader title="Shirts" subtitle="Discover our curated collection of shirts for every occasion" />

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
                                <SortDropdown value={sort} onChange={setSort} />
                            </div>
                        </div>

                        <div className="md:hidden mb-4 flex items-center justify-end">
                            <SortDropdown value={sort} onChange={setSort} />
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
