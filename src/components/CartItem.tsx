interface CartItemProps {
    name: string;
    price: number;
    quantity: number;
    image: string;
}

export default function CartItem({ name, price, quantity, image }: CartItemProps) {
    return (
        <div className="flex items-center gap-6 border-b pb-4">
            <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex-1">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-gray-600">₱{price}</p>
                <p className="text-gray-500">Qty: {quantity}</p>
            </div>

            <div className="flex flex-col gap-2">
                <button className="px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200">
                    +
                </button>
                <button className="px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200">
                    –
                </button>
                <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
                    Remove
                </button>
            </div>
        </div>
    );
}
