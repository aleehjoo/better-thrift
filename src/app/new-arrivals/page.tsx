import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NewArrivalsPage() {

    return (
        <>
        <main className="min-h-screen w-full bg-gray-50">
            <Navbar/>
            <div className="max-w-7xl mx-auto py-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center font-serif">
                    New Arrivals
                </h1>

                <div className="mb-16 flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 h-80 bg-gray-200 rounded-xl flex items-center justify-center">
                        <span className="text-gray-500">Featured Image</span>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold mb-4">
                            Statement Oversized Coat
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Insert some text here to glaze whatever it is mainly
                            featured in the thrift store.
                        </p>
                        <p className="text-lg font-bold mb-6">₱1800</p>
                        <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* Supporting Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="border rounded-xl overflow-hidden shadow-sm">
                        <div className="h-56 bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500">Image</span>
                        </div>
                        <div className="p-4">
                            <h3 className="font-medium">Retro Corduroy Jacket</h3>
                            <p className="text-gray-600">₱1200</p>
                        </div>
                    </div>

                    <div className="border rounded-xl overflow-hidden shadow-sm">
                        <div className="h-56 bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500">Image</span>
                        </div>
                        <div className="p-4">
                            <h3 className="font-medium">Minimalist Graphic Tee</h3>
                            <p className="text-gray-600">₱550</p>
                        </div>
                    </div>

                    <div className="border rounded-xl overflow-hidden shadow-sm">
                        <div className="h-56 bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500">Image</span>
                        </div>
                        <div className="p-4">
                            <h3 className="font-medium">Vintage Leather Boots</h3>
                            <p className="text-gray-600">₱1600</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
        </>
    );
}
