import React from 'react'
import Navbar from "@/components/Navbar";

const MensPage = () => {
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
                                            Hoodies & Sweatshirts
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
                                        <label className="flex items-center gap-3 text-sm">
                                            <input type="checkbox" className="accent-foreground/70" />
                                            Activewear
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <main className="md:col-span-3">
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-sm text-foreground/70">Showing curated men's items</p>
                            <div className="hidden md:flex items-center gap-2 text-sm text-foreground/60">
                                <span>Sort:</span>
                                <button className="px-2 py-1 rounded border border-foreground/15 hover:bg-foreground/5">Featured</button>
                                <button className="px-2 py-1 rounded border border-foreground/15 hover:bg-foreground/5">Newest</button>
                                <button className="px-2 py-1 rounded border border-foreground/15 hover:bg-foreground/5">Price</button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="group rounded-xl overflow-hidden border border-foreground/15 bg-background">
                                    <div className="aspect-[3/4] bg-foreground/5" />
                                    <div className="p-3">
                                        <p className="text-sm font-medium">Product {i + 1}</p>
                                        <p className="text-xs text-foreground/60">Category</p>
                                        <p className="mt-1 text-sm font-semibold">$—.—</p>
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
export default MensPage
