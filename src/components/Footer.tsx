import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-16 border-t border-foreground/15">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
                <div>
                    <div className="text-2xl font-bold">Thrift<span className="text-foreground/60">Store</span></div>
                    <p className="mt-3 text-sm text-foreground/70">Sustainable fashion finds curated for your style.</p>
                </div>
                <div>
                    <div className="font-semibold mb-3">Shop</div>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/new-arrivals" className="hover:underline">New Arrivals</Link></li>
                        <li><Link href="/men" className="hover:underline">Men</Link></li>
                        <li><Link href="/women" className="hover:underline">Women</Link></li>
                        <li><Link href="/jackets" className="hover:underline">Jackets</Link></li>
                    </ul>
                </div>
                <div>
                    <div className="font-semibold mb-3">Company</div>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:underline">About</Link></li>
                        <li><Link href="#" className="hover:underline">Contact</Link></li>
                        <li><Link href="#" className="hover:underline">Returns</Link></li>
                    </ul>
                </div>
                <div>
                    <div className="font-semibold mb-3">Stay in the loop</div>
                    <div className="flex gap-2">
                        <input className="flex-1 border border-foreground/20 rounded-md px-3 py-2 bg-background" placeholder="Enter your email" />
                        <button className="px-4 rounded-md bg-foreground text-background text-sm">Join</button>
                    </div>
                    <div className="flex gap-4 mt-4 text-foreground/70">
                        <Instagram className="w-5 h-5 hover:text-foreground" />
                        <Facebook className="w-5 h-5 hover:text-foreground" />
                        <Twitter className="w-5 h-5 hover:text-foreground" />
                    </div>
                </div>
            </div>
            <div className="text-xs text-foreground/60 text-center py-4 border-t border-foreground/10">© {new Date().getFullYear()} ThriftStore. All rights reserved.</div>
        </footer>
    );
}