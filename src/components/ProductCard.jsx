import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
    return (
        <div className="group bg-dark-surface rounded-xl border border-dark-border overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,255,157,0.3)] hover:border-accent-neon">
            <div className="relative aspect-square overflow-hidden bg-dark-bg">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500 opacity-90 group-hover:opacity-100"
                />
                <button className="absolute top-3 right-3 p-2 bg-dark-surface/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 hover:shadow-[0_0_10px_rgba(239,68,68,0.5)] transition-all outline-none">
                    <Heart size={18} />
                </button>
                <div className={`absolute top-3 left-3 px-3 py-1 backdrop-blur-md text-xs font-bold uppercase tracking-wide rounded-full shadow-sm ${
                    product.type === 'Rent' 
                    ? 'bg-accent-neon/90 text-black shadow-[0_0_10px_rgba(0,255,157,0.4)]' 
                    : 'bg-dark-surface/90 text-gray-200 border border-gray-500'
                }`}>
                    {product.type}
                </div>
            </div>
            <div className="p-4">
                <div className="flex justify-between items-start mb-2 gap-2">
                    <h3 className="text-lg font-bold text-white line-clamp-1 group-hover:text-accent-neon transition-colors">{product.title}</h3>
                    <p className="font-bold text-accent-neon drop-shadow-[0_0_5px_rgba(0,255,157,0.3)]">${product.price}</p>
                </div>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                <Link
                    to={`/product/${product.id}`}
                    className="block w-full text-center py-2.5 bg-dark-bg border border-dark-border text-white rounded-lg font-medium hover:bg-accent-neon hover:text-black hover:border-accent-neon hover:shadow-[0_0_15px_rgba(0,255,157,0.4)] transition-all duration-300"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
