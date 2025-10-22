"use client";

import React, { useMemo, useState } from 'react'
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import SortDropdown, { SortOption, sortProducts } from "@/components/SortDropdown";
import SectionHeader from "@/components/SectionHeader";
import Footer from "@/components/Footer";
import FilterPanel from "@/components/FilterPanel";

export default function AccessoriesPage() {
    const FILTERS = [
        "Bags",
        "Belts", 
        "Watches",
        "Jewelry",
        "Hats",
        "Scarves",
        "Sunglasses",
        "Wallets"
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
        { id: 1, name: "Leather Crossbody Bag", price: "$65.00", type: "Bags", tags: ["leather", "crossbody", "elegant"], description: "Stylish leather crossbody bag for everyday use" },
        { id: 2, name: "Vintage Leather Belt", price: "$28.00", type: "Belts", tags: ["leather", "vintage", "classic"], description: "Authentic vintage leather belt with character" },
        { id: 3, name: "Classic Watch", price: "$85.00", type: "Watches", tags: ["watch", "classic", "timeless"], description: "Elegant classic watch for any occasion" },
        { id: 4, name: "Silver Necklace", price: "$45.00", type: "Jewelry", tags: ["silver", "necklace", "elegant"], description: "Beautiful silver necklace to complete your look" },
        { id: 5, name: "Baseball Cap", price: "$22.00", type: "Hats", tags: ["cap", "casual", "sporty"], description: "Comfortable baseball cap for casual wear" },
        { id: 6, name: "Silk Scarf", price: "$35.00", type: "Scarves", tags: ["silk", "elegant", "versatile"], description: "Luxurious silk scarf for sophisticated styling" },
        { id: 7, name: "Vintage Sunglasses", price: "$55.00", type: "Sunglasses", tags: ["sunglasses", "vintage", "retro"], description: "Stylish vintage sunglasses with UV protection" },
        { id: 8, name: "Leather Wallet", price: "$38.00", type: "Wallets", tags: ["leather", "wallet", "practical"], description: "Durable leather wallet with multiple compartments" },
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
                <SectionHeader title="Accessories" subtitle="Complete your look with our curated selection of accessories" />

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
