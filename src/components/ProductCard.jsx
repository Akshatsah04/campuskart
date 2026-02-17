import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
    return (
        <div className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-500 hover:text-red-500 transition shadow-sm">
                    <Heart size={18} />
                </button>
                <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold uppercase tracking-wide text-gray-800 rounded-full shadow-sm">
                    {product.type}
                </div>
            </div>
            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{product.title}</h3>
                    <p className="font-bold text-indigo-600">${product.price}</p>
                </div>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                <Link
                    to={`/product/${product.id}`}
                    className="block w-full text-center py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
