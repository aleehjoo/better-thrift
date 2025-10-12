"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, ShoppingCart, Heart, User, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
    const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

    const productCategories = [
        { name: "Accessories", href: "/accessories" },
        { name: "Hoodies", href: "/hoodie" },
        { name: "Jackets", href: "/jackets" },
        { name: "Pants", href: "/pants" },
        { name: "Shirts", href: "/shirts" },
        { name: "Shoes", href: "/shoes" },
        { name: "Shorts", href: "/shorts" },
        { name: "Suits & Blazers", href: "/suits-and-blazers" },
        { name: "Sweaters", href: "/sweaters" },
    ];

    const handleMouseEnter = () => {
        if (dropdownTimeout) {
            clearTimeout(dropdownTimeout);
            setDropdownTimeout(null);
        }
        setIsProductsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setIsProductsDropdownOpen(false);
        }, 150); // 150ms delay before closing
        setDropdownTimeout(timeout);
    };

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (dropdownTimeout) {
                clearTimeout(dropdownTimeout);
            }
        };
    }, [dropdownTimeout]);

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
                    
                    {/* Products Dropdown */}
                    <div className="relative">
                        <button
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className="flex items-center gap-1 hover:text-foreground/70 transition-colors"
                        >
                            Products
                            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {isProductsDropdownOpen && (
                            <div
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                className="absolute top-full left-0 mt-2 w-56 bg-background border border-foreground/20 rounded-lg shadow-lg py-2 z-50 animate-in slide-in-from-top-2 duration-200"
                            >
                                {productCategories.map((category) => (
                                    <Link
                                        key={category.href}
                                        href={category.href}
                                        className="block px-4 py-2 text-sm hover:bg-foreground/5 hover:text-foreground/80 transition-colors"
                                    >
                                        {category.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    
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
                    
                    {/* Mobile Products Section */}
                    <div className="space-y-2">
                        <div className="font-medium text-foreground/80">Products</div>
                        <div className="pl-4 space-y-2">
                            {productCategories.map((category) => (
                                <Link
                                    key={category.href}
                                    href={category.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-sm text-foreground/70 hover:text-foreground/90 transition-colors"
                                >
                                    {category.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    
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
