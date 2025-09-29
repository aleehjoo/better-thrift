"use client";

import React, { useMemo, useState } from 'react'
import Navbar from "@/components/Navbar";

export default function MensPage () {
    const TYPES = [
        "Shirts",
        "Jackets",
        "Pants",
        "Accessories",
        "Shoes",
        "Hoodies & Sweatshirts",
        "Sweaters",
        "Suits & Blazers",
        "Shorts",
        "Activewear",
    ] as const;

    type Product = {
        id: number;
        name: string;
        price: string;
        type: typeof TYPES[number];
        tags: string[];
    };

    const PRODUCTS: Product[] = [
        { id: 1, name: "Oxford Button-Down", price: "$29.00", type: "Shirts", tags: ["cotton", "casual", "classic"] },
        { id: 2, name: "Denim Trucker Jacket", price: "$58.00", type: "Jackets", tags: ["denim", "casual"] },
        { id: 3, name: "Slim Chino Pants", price: "$35.00", type: "Pants", tags: ["workwear", "stretch"] },
        { id: 4, name: "Leather Belt", price: "$18.00", type: "Accessories", tags: ["leather", "brown"] },
        { id: 5, name: "Retro Sneakers", price: "$49.00", type: "Shoes", tags: ["retro", "street"] },
        { id: 6, name: "Fleece Hoodie", price: "$32.00", type: "Hoodies & Sweatshirts", tags: ["warm", "athleisure"] },
        { id: 7, name: "Cable Knit Sweater", price: "$38.00", type: "Sweaters", tags: ["wool", "cozy"] },
        { id: 8, name: "Linen Blazer", price: "$72.00", type: "Suits & Blazers", tags: ["linen", "summer"] },
        { id: 9, name: "Athletic Shorts", price: "$22.00", type: "Shorts", tags: ["training", "lightweight"] },
        { id: 10, name: "Compression Tee", price: "$19.00", type: "Activewear", tags: ["gym", "quick-dry"] },
        { id: 11, name: "Flannel Shirt", price: "$27.00", type: "Shirts", tags: ["flannel", "warm"] },
        { id: 12, name: "Bomber Jacket", price: "$61.00", type: "Jackets", tags: ["nylon", "street"] },
    ];

    const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());

    const toggleType = (type: string) => {
        setSelectedTypes(prev => {
            const next = new Set(prev);
            if (next.has(type)) next.delete(type); else next.add(type);
            return next;
        });
    };

    const clearFilters = () => setSelectedTypes(new Set());

    const filtered = useMemo(() => {
        if (selectedTypes.size === 0) return PRODUCTS;
        return PRODUCTS.filter(p => selectedTypes.has(p.type));
    }, [selectedTypes]);

    return (
        <section className="w-full">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <aside className="md:col-span-1">
                        <div className="rounded-xl border border-foreground/15 bg-background p-5">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold">Filters</h2>
                                <button onClick={clearFilters} className="text-xs text-foreground/60 hover:text-foreground/90">Clear</button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-sm font-medium text-foreground/80 mb-2">Type</h3>
                                    <div className="space-y-2">
                                        {TYPES.map(type => (
                                            <label key={type} className="flex items-center gap-3 text-sm cursor-pointer select-none">
                                                <input
                                                    type="checkbox"
                                                    className="accent-foreground/70"
                                                    checked={selectedTypes.has(type)}
                                                    onChange={() => toggleType(type)}
                                                />
                                                {type}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <main className="md:col-span-3">
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-sm text-foreground/70">
                                Showing {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
                                {selectedTypes.size > 0 && <span className="ml-2 text-foreground/50">(filtered)</span>}
                            </p>
                            <div className="hidden md:flex items-center gap-2 text-sm text-foreground/60">
                                <span>Sort:</span>
                                <button className="px-2 py-1 rounded border border-foreground/15 hover:bg-foreground/5">Featured</button>
                                <button className="px-2 py-1 rounded border border-foreground/15 hover:bg-foreground/5">Newest</button>
                                <button className="px-2 py-1 rounded border border-foreground/15 hover:bg-foreground/5">Price</button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                            {filtered.map((p) => (
                                <div key={p.id} className="group rounded-xl overflow-hidden border border-foreground/15 bg-background">
                                    <div className="aspect-[3/4] bg-foreground/5" />
                                    <div className="p-3">
                                        <p className="text-sm font-medium">{p.name}</p>
                                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                                            <span className="text-[10px] uppercase tracking-wide bg-foreground/10 text-foreground px-2 py-0.5 rounded">{p.type}</span>
                                            {p.tags.slice(0, 2).map(tag => (
                                                <span key={tag} className="text-[10px] bg-foreground/5 text-foreground/70 px-2 py-0.5 rounded">{tag}</span>
                                            ))}
                                        </div>
                                        <p className="mt-2 text-sm font-semibold">{p.price}</p>
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
