import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);

    return (
        <div className="group bg-dark-surface rounded-2xl border border-dark-border overflow-hidden transition-all duration-300 transform hover:-translate-y-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-none hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:border-accent-neon">
            <div className="relative aspect-square overflow-hidden bg-[var(--color-bg)]">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500 opacity-90 group-hover:opacity-100"
                />
                <button 
                    onClick={(e) => {
                        e.preventDefault();
                        setIsWishlisted(!isWishlisted);
                    }}
                    className={`absolute top-3 right-3 p-2 bg-dark-surface/80 backdrop-blur-sm rounded-full transition-all outline-none ${
                        isWishlisted 
                            ? 'text-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' 
                            : 'text-gray-400 hover:text-red-500 hover:shadow-[0_0_10px_rgba(239,68,68,0.5)]'
                    }`}
                >
                    <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
                </button>
                <div className={`absolute top-3 left-3 px-3 py-1 backdrop-blur-md text-xs font-bold uppercase tracking-wide rounded-full shadow-sm ${
                    product.type === 'Rent' 
                    ? 'bg-gradient-to-r from-accent-neon to-accent-hover text-white shadow-[0_4px_15px_rgba(34,197,94,0.3)]' 
                    : 'bg-dark-surface/90 text-[var(--color-text)] border border-[var(--color-border)]'
                }`}>
                    {product.type}
                </div>
            </div>
            <div className="p-4">
                <div className="flex justify-between items-start mb-2 gap-2">
                    <h3 className="text-lg font-bold text-[var(--color-text)] line-clamp-1 group-hover:text-accent-neon transition-colors">{product.title}</h3>
                    <p className="font-bold text-accent-neon drop-shadow-[0_0_5px_rgba(0,255,157,0.3)]">${product.price}</p>
                </div>
                <p className="text-[var(--color-text-muted)] text-sm mb-4 line-clamp-2">{product.description}</p>
                <Link
                    to={`/product/${product.id}`}
                    className="block w-full text-center py-2.5 bg-dark-bg border border-dark-border text-[var(--color-text)] rounded-xl font-medium hover:bg-gradient-to-r hover:from-accent-neon hover:to-accent-hover hover:text-white hover:border-transparent hover:shadow-[0_4px_15px_rgba(34,197,94,0.3)] transition-all duration-300"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
