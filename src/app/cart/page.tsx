import CartItem from "@/components/CartItem";
import Navbar from "@/components/Navbar";

export default function CartPage() {
    return (
        <section>
            <Navbar/>
            <div className="min-h-screen w-full max-w-7xl mx-auto px-6 py-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-8">Your Cart</h1>

                <div className="space-y-6">
                    <CartItem
                        name="Vintage Denim Jacket"
                        price={1200}
                        quantity={1}
                        image="/placeholder.png"
                    />
                    <CartItem
                        name="Retro Graphic Tee"
                        price={600}
                        quantity={2}
                        image="/placeholder.png"
                    />
                </div>

                <div className="mt-12 border-t pt-6 flex flex-col md:flex-row md:items-center md:justify-between">
                    <p className="text-xl font-semibold">Total: ₱2400</p>
                    <button className="mt-4 md:mt-0 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </section>
    );
}
