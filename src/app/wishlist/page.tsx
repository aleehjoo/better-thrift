import Navbar from "@/components/Navbar";

export default function WishlistPage() {
    return (
        <div>
            <Navbar />
            <main className="min-h-screen w-full max-w-7xl mx-auto py-8">

                <h1 className="text-3xl md:text-4xl font-bold mb-8">Your Wishlist</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="border rounded-xl shadow-sm overflow-hidden">
                        <div className="h-64 bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500">Image</span>
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">Vintage Denim Jacket</h2>
                            <p className="text-gray-600">₱1200</p>
                            <button className="mt-4 w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                                Move to Cart
                            </button>
                        </div>
                    </div>
                    <div className="border rounded-xl shadow-sm overflow-hidden">
                        <div className="h-64 bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500">Image</span>
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">Retro Graphic Tee</h2>
                            <p className="text-gray-600">₱600</p>
                            <button className="mt-4 w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                                Move to Cart
                            </button>
                        </div>
                    </div>
                    <div className="border rounded-xl shadow-sm overflow-hidden">
                        <div className="h-64 bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500">Image</span>
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">Corduroy Pants</h2>
                            <p className="text-gray-600">₱900</p>
                            <button className="mt-4 w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                                Move to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
