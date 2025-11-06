"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, ShoppingCart, Heart, User, ChevronDown, X } from "lucide-react";

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

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

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
                        className="md:hidden relative w-8 h-8 flex items-center justify-center z-50"
                        aria-label="Toggle menu"
                    >
                        <div className="relative w-6 h-5 flex flex-col justify-center">
                            <span
                                className={`absolute w-full h-0.5 bg-foreground transition-all duration-300 ease-in-out ${
                                    isOpen
                                        ? 'rotate-45 top-1/2 -translate-y-1/2'
                                        : 'top-0'
                                }`}
                            />
                            <span
                                className={`absolute w-full h-0.5 bg-foreground transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2 ${
                                    isOpen ? 'opacity-0' : 'opacity-100'
                                }`}
                            />
                            <span
                                className={`absolute w-full h-0.5 bg-foreground transition-all duration-300 ease-in-out ${
                                    isOpen
                                        ? '-rotate-45 top-1/2 -translate-y-1/2'
                                        : 'bottom-0'
                                }`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Slide-in Panel */}
            <div
                className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
                }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-foreground/10">
                        <h2 className="text-xl font-semibold text-foreground">Menu</h2>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
                            aria-label="Close menu"
                        >
                            <X className="h-5 w-5 text-foreground" />
                        </button>
                    </div>

                    {/* Navigation Content */}
                    <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                        {/* Search */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full rounded-lg border border-foreground/20 bg-background px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/30 transition-all"
                            />
                            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/60" />
                        </div>

                        {/* Navigation Links */}
                        <nav className="space-y-1">
                            <Link
                                href="/new-arrivals"
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 rounded-lg text-foreground hover:bg-foreground/10 transition-all duration-200 font-medium"
                            >
                                New Arrivals
                            </Link>

                            {/* Products Section */}
                            <div className="space-y-1">
                                <div className="px-4 py-2 text-sm font-semibold text-foreground/60 uppercase tracking-wider">
                                    Products
                                </div>
                                <div className="space-y-1">
                                    {productCategories.map((category, index) => (
                                        <Link
                                            key={category.href}
                                            href={category.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block px-4 py-3 rounded-lg text-foreground/80 hover:bg-foreground/10 hover:text-foreground transition-all duration-200"
                                            style={{
                                                animationDelay: `${index * 30}ms`,
                                            }}
                                        >
                                            {category.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Link
                                href="/men"
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 rounded-lg text-foreground hover:bg-foreground/10 transition-all duration-200 font-medium"
                            >
                                Men
                            </Link>
                            <Link
                                href="/women"
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 rounded-lg text-foreground hover:bg-foreground/10 transition-all duration-200 font-medium"
                            >
                                Women
                            </Link>
                        </nav>

                        {/* Account Actions */}
                        <div className="pt-6 border-t border-foreground/10 space-y-1">
                            <Link
                                href="/wishlist"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-foreground/10 transition-all duration-200"
                            >
                                <Heart className="h-5 w-5" />
                                <span>Wishlist</span>
                            </Link>
                            <Link
                                href="/cart"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-foreground/10 transition-all duration-200"
                            >
                                <ShoppingCart className="h-5 w-5" />
                                <span>Cart</span>
                            </Link>
                            <Link
                                href="/account"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-foreground/10 transition-all duration-200"
                            >
                                <User className="h-5 w-5" />
                                <span>Account</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
