"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingCart, Heart, User } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full border-b border-foreground/20 bg-background sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
                <Link href="/" className="text-2xl font-bold text-foreground">
                    Thrift<span className="text-foreground/60">Store</span>
                </Link>

                <div className="hidden md:flex flex-1 max-w-md">
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full rounded-md border border-foreground/20 bg-background px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/30"
                        />
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/60" />
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="/new-arrivals" className="hover:text-foreground/70 transition-colors">
                        New Arrivals
                    </Link>
                    <Link href="/men" className="hover:text-foreground/70 transition-colors">
                        Men
                    </Link>
                    <Link href="/women" className="hover:text-foreground/70 transition-colors">
                        Women
                    </Link>
                </div>

                <div className="flex items-center gap-5">
                    <Link href="/wishlist">
                        <Heart className="h-6 w-6 text-foreground hover:text-foreground/70 transition-colors" />
                    </Link>
                    <Link href="/cart">
                        <ShoppingCart className="h-6 w-6 text-foreground hover:text-foreground/70 transition-colors" />
                    </Link>
                    <Link href="/account">
                        <User className="h-6 w-6 text-foreground hover:text-foreground/70 transition-colors" />
                    </Link>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden flex flex-col gap-1.5"
                        aria-label="Toggle menu"
                    >
                        <span className="w-6 h-0.5 bg-foreground"></span>
                        <span className="w-6 h-0.5 bg-foreground"></span>
                        <span className="w-6 h-0.5 bg-foreground"></span>
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-background border-t border-foreground/20">
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full rounded-md border border-foreground/20 bg-background px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/30"
                        />
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/60" />
                    </div>

                    <Link href="/new-arrivals" onClick={() => setIsOpen(false)}>
                        New Arrivals
                    </Link>
                    <Link href="/men" onClick={() => setIsOpen(false)}>
                        Men
                    </Link>
                    <Link href="/women" onClick={() => setIsOpen(false)}>
                        Women
                    </Link>
                    <Link href="/wishlist" onClick={() => setIsOpen(false)}>
                        Wishlist
                    </Link>
                    <Link href="/cart" onClick={() => setIsOpen(false)}>
                        Cart
                    </Link>
                    <Link href="/account" onClick={() => setIsOpen(false)}>
                        Account
                    </Link>
                </div>
            )}
        </nav>
    );
}
