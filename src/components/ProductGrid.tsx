import React from 'react'

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
                <div key={product.id} className="group rounded-xl overflow-hidden border border-foreground/15 bg-background hover:shadow-lg transition-shadow">
                    <div className="aspect-[3/4] bg-foreground/5 flex items-center justify-center">
                        <span className="text-foreground/30 text-sm">Product Image</span>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                        {product.description && (
                                                    <p className="text-sm text-foreground/70 mb-2">{product.description}</p>
                                                )}
                        <div className="flex items-center gap-2 mb-3 flex-wrap">
                            <span className="text-[10px] uppercase tracking-wide bg-foreground/10 text-foreground px-2 py-0.5 rounded">{product.type}</span>
                            {product.tags.slice(0, 2).map(tag => (
                                <span key={tag} className="text-[10px] bg-foreground/5 text-foreground/70 px-2 py-0.5 rounded">{tag}</span>
                            ))}
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-lg font-bold">{product.price}</p>
                            <button className="inline-flex items-center justify-center h-9 px-4 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors text-sm font-medium whitespace-nowrap flex-none">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ProductGrid
