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
    return (
        <div className={["grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6", className].filter(Boolean).join(' ')}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}
export default ProductGrid
