"use client";

import Link from "next/link";

export default function ShopByCategory() {
    return (
        <section className="w-full min-h-screen flex items-center py-16">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-center font-serif">
                    Shop by Category
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <Link href="/shirts" className="h-64 bg-gray-200 flex items-center justify-center rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <span className="text-gray-700 font-medium">Shirts</span>
                    </Link>
                    <Link href="/jackets" className="h-64 bg-gray-200 flex items-center justify-center rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <span className="text-gray-700 font-medium">Jackets</span>
                    </Link>
                    <Link href="/pants" className="h-64 bg-gray-200 flex items-center justify-center rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <span className="text-gray-700 font-medium">Pants</span>
                    </Link>
                    <Link href="/accessories" className="h-64 bg-gray-200 flex items-center justify-center rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <span className="text-gray-700 font-medium">Accessories</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
