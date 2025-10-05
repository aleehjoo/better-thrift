"use client";

import React, { useMemo, useState } from 'react';
import Navbar from "@/components/Navbar";

export default function WishlistPage() {
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

    type WishlistItem = {
        id: number;
        name: string;
        price: string;
        type: typeof TYPES[number];
        tags: string[];
    };

    const WISHLIST_ITEMS: WishlistItem[] = [
        { id: 1, name: "Vintage Denim Jacket", price: "₱1200", type: "Jackets", tags: ["vintage", "denim", "classic"] },
        { id: 2, name: "Retro Graphic Tee", price: "₱600", type: "Shirts", tags: ["retro", "graphic", "casual"] },
        { id: 3, name: "Corduroy Pants", price: "₱900", type: "Pants", tags: ["corduroy", "vintage", "warm"] },
        { id: 4, name: "Leather Boots", price: "₱1800", type: "Shoes", tags: ["leather", "boots", "brown"] },
        { id: 5, name: "Cashmere Sweater", price: "₱1500", type: "Sweaters", tags: ["cashmere", "luxury", "warm"] },
        { id: 6, name: "Canvas Backpack", price: "₱400", type: "Accessories", tags: ["canvas", "backpack", "casual"] },
        { id: 7, name: "Bomber Jacket", price: "₱1100", type: "Jackets", tags: ["bomber", "street", "nylon"] },
        { id: 8, name: "Chino Shorts", price: "₱500", type: "Shorts", tags: ["chino", "summer", "casual"] },
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
        if (selectedTypes.size === 0) return WISHLIST_ITEMS;
        return WISHLIST_ITEMS.filter(item => selectedTypes.has(item.type));
    }, [selectedTypes]);

    return (
        <div>
            <Navbar />
            <main className="min-h-screen w-full max-w-7xl mx-auto py-8 px-6">
                <h1 className="text-3xl md:text-4xl font-bold mb-8">Your Wishlist</h1>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <aside className="lg:col-span-1">
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

                    <div className="lg:col-span-3">
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-sm text-foreground/70">
                                {filtered.length} {filtered.length === 1 ? 'item' : 'items'} in wishlist
                                {selectedTypes.size > 0 && <span className="ml-2 text-foreground/50">(filtered)</span>}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {filtered.map((item) => (
                                <div key={item.id} className="border rounded-xl shadow-sm overflow-hidden">
                                    <div className="h-64 bg-gray-200 flex items-center justify-center">
                                        <span className="text-gray-500">Image</span>
                                    </div>
                                    <div className="p-4">
                                        <h2 className="text-lg font-semibold">{item.name}</h2>
                                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                                            <span className="text-[10px] uppercase tracking-wide bg-foreground/10 text-foreground px-2 py-0.5 rounded">{item.type}</span>
                                            {item.tags.slice(0, 2).map(tag => (
                                                <span key={tag} className="text-[10px] bg-foreground/5 text-foreground/70 px-2 py-0.5 rounded">{tag}</span>
                                            ))}
                                        </div>
                                        <p className="text-gray-600 mt-2">{item.price}</p>
                                        <button className="mt-4 w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                                            Move to Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
