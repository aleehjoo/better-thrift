"use client";

import React, { useMemo, useState } from 'react';
import CartItem from "@/components/CartItem";
import Navbar from "@/components/Navbar";

export default function CartPage() {
    const TYPES = [
        "Shirts",
        "Jackets", 
        "Pants",
        "Accessories",
        "Shoes",
        "Hoodie",
        "Sweaters",
        "Suits & Blazers",
        "Shorts",
    ] as const;

    type CartItemType = {
        id: number;
        name: string;
        price: number;
        quantity: number;
        image: string;
        type: typeof TYPES[number];
        tags: string[];
    };

    const CART_ITEMS: CartItemType[] = [
        { id: 1, name: "Vintage Denim Jacket", price: 1200, quantity: 1, image: "/placeholder.png", type: "Jackets", tags: ["vintage", "denim", "classic"] },
        { id: 2, name: "Retro Graphic Tee", price: 600, quantity: 2, image: "/placeholder.png", type: "Shirts", tags: ["retro", "graphic", "casual"] },
        { id: 3, name: "Leather Boots", price: 1800, quantity: 1, image: "/placeholder.png", type: "Shoes", tags: ["leather", "boots", "brown"] },
        { id: 4, name: "Cashmere Sweater", price: 1500, quantity: 1, image: "/placeholder.png", type: "Sweaters", tags: ["cashmere", "luxury", "warm"] },
        { id: 5, name: "Canvas Backpack", price: 400, quantity: 1, image: "/placeholder.png", type: "Accessories", tags: ["canvas", "backpack", "casual"] },
        { id: 6, name: "Chino Shorts", price: 500, quantity: 2, image: "/placeholder.png", type: "Shorts", tags: ["chino", "summer", "casual"] },
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
        if (selectedTypes.size === 0) return CART_ITEMS;
        return CART_ITEMS.filter(item => selectedTypes.has(item.type));
    }, [selectedTypes]);

    const total = useMemo(() => {
        return filtered.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }, [filtered]);

    return (
        <section>
            <Navbar/>
            <div className="min-h-screen w-full max-w-7xl mx-auto px-6 py-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-8">Your Cart</h1>

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
                                {filtered.length} {filtered.length === 1 ? 'item' : 'items'} in cart
                                {selectedTypes.size > 0 && <span className="ml-2 text-foreground/50">(filtered)</span>}
                            </p>
                        </div>

                        <div className="space-y-6">
                            {filtered.map((item) => (
                                <div key={item.id} className="flex items-center gap-6 border-b pb-4">
                                    <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold">{item.name}</h3>
                                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                                            <span className="text-[10px] uppercase tracking-wide bg-foreground/10 text-foreground px-2 py-0.5 rounded">{item.type}</span>
                                            {item.tags.slice(0, 2).map(tag => (
                                                <span key={tag} className="text-[10px] bg-foreground/5 text-foreground/70 px-2 py-0.5 rounded">{tag}</span>
                                            ))}
                                        </div>
                                        <p className="text-gray-600">₱{item.price}</p>
                                        <p className="text-gray-500">Qty: {item.quantity}</p>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <button className="px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200">
                                            +
                                        </button>
                                        <button className="px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200">
                                            –
                                        </button>
                                        <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row md:items-center md:justify-between">
                            <p className="text-xl font-semibold">Total: ₱{total.toLocaleString()}</p>
                            <button className="mt-4 md:mt-0 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
