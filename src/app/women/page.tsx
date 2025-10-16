import React from 'react'
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";

export default function WomensPage () {
    const PRODUCTS = [
        { id: 1, name: "Floral Midi Dress", price: "$49.00", type: "Dresses", tags: ["floral", "midi"], description: "Lightweight floral midi for spring days" },
        { id: 2, name: "Oversized Denim Jacket", price: "$62.00", type: "Jackets", tags: ["denim", "oversized"], description: "Classic denim layer with relaxed fit" },
        { id: 3, name: "High-Waist Mom Jeans", price: "$45.00", type: "Pants", tags: ["denim", "mom"], description: "Vintage-wash high-waist mom jeans" },
        { id: 4, name: "Silk Scarf", price: "$24.00", type: "Accessories", tags: ["silk", "scarf"], description: "Luxurious silk scarf to elevate looks" },
        { id: 5, name: "Platform Sneakers", price: "$59.00", type: "Shoes", tags: ["platform", "casual"], description: "Comfy platform sneakers with lift" },
        { id: 6, name: "Cozy Knit Hoodie", price: "$39.00", type: "Hoodie", tags: ["knit", "cozy"], description: "Soft knit hoodie for everyday comfort" },
        { id: 7, name: "Ribbed Cardigan", price: "$35.00", type: "Sweaters", tags: ["ribbed", "cardigan"], description: "Layerable ribbed knit cardigan" },
        { id: 8, name: "Tailored Blazer", price: "$75.00", type: "Suits & Blazers", tags: ["tailored", "work"], description: "Polished blazer for work or evening" },
        { id: 9, name: "Linen Shorts", price: "$29.00", type: "Shorts", tags: ["linen", "summer"], description: "Breathable linen shorts" },
        { id: 10, name: "Graphic Tee", price: "$19.00", type: "Shirts", tags: ["graphic", "casual"], description: "Soft cotton graphic t-shirt" },
        { id: 11, name: "Pleated Skirt", price: "$42.00", type: "Skirts", tags: ["pleated", "flowy"], description: "Flowy pleated skirt" },
        { id: 12, name: "Ankle Boots", price: "$68.00", type: "Shoes", tags: ["ankle", "leather"], description: "Versatile ankle boots" },
    ];
    return (
        <section className="w-full">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <aside className="md:col-span-1">
                        <div className="rounded-xl border border-foreground/15 bg-background p-5">
                            <h2 className="text-lg font-semibold mb-4">Filters</h2>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-sm font-medium text-foreground/80 mb-2">Type</h3>
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-3 text-sm">
                                            <input type="checkbox" className="accent-foreground/70" />
                                            Shirts
                                        </label>
                                        <label className="flex items-center gap-3 text-sm">
                                            <input type="checkbox" className="accent-foreground/70" />
                                            Jackets
                                        </label>
                                        <label className="flex items-center gap-3 text-sm">
                                            <input type="checkbox" className="accent-foreground/70" />
                                            Pants
                                        </label>
                                        <label className="flex items-center gap-3 text-sm">
                                            <input type="checkbox" className="accent-foreground/70" />
                                            Accessories
                                        </label>
                                        <label className="flex items-center gap-3 text-sm">
                                            <input type="checkbox" className="accent-foreground/70" />
                                            Shoes
                                        </label>
                                        <label className="flex items-center gap-3 text-sm">
                                            <input type="checkbox" className="accent-foreground/70" />
                                            Hoodie
                                        </label>
                                        <label className="flex items-center gap-3 text-sm">
                                            <input type="checkbox" className="accent-foreground/70" />
                                            Sweaters
                                        </label>
                                        <label className="flex items-center gap-3 text-sm">
                                            <input type="checkbox" className="accent-foreground/70" />
                                            Suits & Blazers
                                        </label>
                                        <label className="flex items-center gap-3 text-sm">
                                            <input type="checkbox" className="accent-foreground/70" />
                                            Shorts
                                        </label>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <main className="md:col-span-3">
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-sm text-foreground/70">Showing {PRODUCTS.length} items</p>
                            <div className="hidden md:flex items-center gap-2 text-sm text-foreground/60">
                                <span>Sort:</span>
                                <button className="px-2 py-1 rounded border border-foreground/15 hover:bg-foreground/5">Featured</button>
                                <button className="px-2 py-1 rounded border border-foreground/15 hover:bg-foreground/5">Newest</button>
                                <button className="px-2 py-1 rounded border border-foreground/15 hover:bg-foreground/5">Price</button>
                            </div>
                        </div>

                        <ProductGrid products={PRODUCTS}/>
                    </main>
                </div>
            </div>
        </section>
    )
}
