"use client";

import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="w-full h-screen flex flex-col md:flex-row items-center justify-between bg-background text-foreground">
            {/* Left Content */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left px-6 md:px-12 py-12">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 font-serif">
                    Redefine Your Style
                </h1>

                <p className="max-w-xl text-lg md:text-xl text-muted-foreground mb-8 font-sans">
                    Discover sustainable fashion finds curated just for you.
                    Unique pieces that make your wardrobe stand out.
                </p>

                <div className="flex gap-4">
                    <Link
                        href="/men"
                        className="px-8 py-3 rounded-md bg-foreground text-background font-semibold text-lg hover:bg-foreground/90 transition-colors"
                    >
                        Shop Men’s
                    </Link>
                    <Link
                        href="/women"
                        className="px-8 py-3 rounded-md border border-foreground text-foreground font-semibold text-lg hover:bg-foreground/10 transition-colors"
                    >
                        Shop Women’s
                    </Link>
                </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full h-1/2 md:h-full">
                <img
                    src="https://via.placeholder.com/1000x1200"
                    alt="Fashion showcase"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
}
