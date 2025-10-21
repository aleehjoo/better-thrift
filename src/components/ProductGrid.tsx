import React from 'react'
import ProductCard from '@/components/ProductCard'

export type ProductGridItem = {
    id: number;
    name: string;
    price: string;
    type: string;
    tags: string[];
    description?: string;
}

type ProductGridProps = {
    products: ProductGridItem[];
    className?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, className }) => {
    if (products.length === 0) {
        return (
            <div className={["border border-dashed border-foreground/20 rounded-xl p-10 text-center", className].filter(Boolean).join(" ")}>
                <div className="text-lg font-semibold">No items found</div>
                <div className="text-sm text-foreground/70 mt-1">Try adjusting your filters or check back later.</div>
            </div>
        )
    }

    return (
        <div className={["grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6", className].filter(Boolean).join(' ')}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}
export default ProductGrid
