"use client";

import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-background text-foreground">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                I Am Currently Testing This Font
            </h1>

            <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-8">
                You could probably insert a two-sentence description here. Perhaps even one too.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    href="/new-arrivals"
                    className="px-8 py-3 rounded-md bg-foreground text-background font-semibold text-lg hover:bg-foreground/90 transition-colors"
                >
                    Generic Button Here
                </Link>

                <Link
                    href="/men"
                    className="px-8 py-3 rounded-md border border-foreground text-foreground font-semibold text-lg hover:bg-foreground/10 transition-colors"
                >
                    Just Click Me Twin
                </Link>
            </div>
        </section>
    );
}
