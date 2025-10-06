import React from 'react'
import Navbar from "@/components/Navbar";

export default function Page() {
    return (
        <div>
            <Navbar/>
            <main className="max-w-7xl mx-auto px-6 py-10">
                <h1 className="text-3xl font-bold mb-6">Your Account</h1>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <aside className="lg:col-span-1 space-y-2">
                        <button className="w-full text-left px-4 py-2 rounded-md border border-foreground/20 hover:bg-foreground/5">Overview</button>
                        <button className="w-full text-left px-4 py-2 rounded-md border border-foreground/20 hover:bg-foreground/5">Orders</button>
                        <button className="w-full text-left px-4 py-2 rounded-md border border-foreground/20 hover:bg-foreground/5">Addresses</button>
                        <button className="w-full text-left px-4 py-2 rounded-md border border-foreground/20 hover:bg-foreground/5">Wishlist</button>
                        <button className="w-full text-left px-4 py-2 rounded-md border border-foreground/20 hover:bg-foreground/5">Account Settings</button>
                        <button className="w-full text-left px-4 py-2 rounded-md border border-foreground/20 hover:bg-foreground/5">Sign Out</button>
                    </aside>

                    <section className="lg:col-span-3 space-y-8">
                        <div className="rounded-lg border border-foreground/20 p-6">
                            <div className="flex items-start justify-between gap-6">
                                <div>
                                    <h2 className="text-xl font-semibold">Profile</h2>
                                    <p className="text-sm text-foreground/70 mt-1">Manage your personal information</p>
                                </div>
                                <button className="px-4 py-2 rounded-md border border-foreground/20 hover:bg-foreground/5 text-sm">Edit</button>
                            </div>
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                <div className="space-y-1">
                                    <div className="text-foreground/60">Name</div>
                                    <div className="font-medium">John Doe</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-foreground/60">Email</div>
                                    <div className="font-medium">john.doe@example.com</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-foreground/60">Phone</div>
                                    <div className="font-medium">(555) 123-4567</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-foreground/60">Member since</div>
                                    <div className="font-medium">Jan 2024</div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-foreground/20 p-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-semibold">Recent Orders</h2>
                                <button className="text-sm hover:underline">View all</button>
                            </div>
                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-md border border-foreground/20 p-4">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-foreground/60">Order</span>
                                        <span className="font-medium">#1024</span>
                                    </div>
                                    <div className="mt-2 text-sm text-foreground/70">Placed on Sep 12, 2025</div>
                                    <div className="mt-3 flex items-center justify-between text-sm">
                                        <span>3 items</span>
                                        <span className="font-semibold">$128.40</span>
                                    </div>
                                </div>
                                <div className="rounded-md border border-foreground/20 p-4">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-foreground/60">Order</span>
                                        <span className="font-medium">#1023</span>
                                    </div>
                                    <div className="mt-2 text-sm text-foreground/70">Placed on Aug 28, 2025</div>
                                    <div className="mt-3 flex items-center justify-between text-sm">
                                        <span>1 item</span>
                                        <span className="font-semibold">$42.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-foreground/20 p-6">
                            <div className="flex items-start justify-between gap-6">
                                <div>
                                    <h2 className="text-xl font-semibold">Addresses</h2>
                                    <p className="text-sm text-foreground/70 mt-1">Default shipping & billing</p>
                                </div>
                                <button className="px-4 py-2 rounded-md border border-foreground/20 hover:bg-foreground/5 text-sm">Manage</button>
                            </div>
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                <div className="rounded-md border border-foreground/20 p-4">
                                    <div className="text-foreground/60">Shipping</div>
                                    <div className="mt-1 font-medium">123 Market St, San Francisco, CA</div>
                                </div>
                                <div className="rounded-md border border-foreground/20 p-4">
                                    <div className="text-foreground/60">Billing</div>
                                    <div className="mt-1 font-medium">123 Market St, San Francisco, CA</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}
