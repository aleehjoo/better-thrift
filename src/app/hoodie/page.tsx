import React from 'react'
import Navbar from "@/components/Navbar";

export default function HoodiePage() {
    return (
        <div>
            <Navbar/>
            <main className="max-w-7xl mx-auto px-6 py-10">
                <h1 className="text-3xl font-bold mb-6">Hoodie</h1>
                <p className="text-foreground/70">This is a placeholder page for the Hoodie category.</p>
            </main>
        </div>
    )
}


