import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Share2, Heart } from 'lucide-react';

const ProductDetails = () => {
    const { id } = useParams();

    // In a real app, fetch fetch based on ID
    const product = {
        id: id,
        title: 'Calculus Textbook',
        price: 45,
        type: 'Sale',
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
        description: 'Calculus: Early Transcendentals, 8th Edition. Used for one semester, minimal highlighting. Great condition overall. Saves you $100 compared to the bookstore price!',
        seller: {
            name: 'Alex Johnson',
            major: 'Engineering',
            year: 'Junior'
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <Link to="/market" className="inline-flex items-center text-gray-500 hover:text-indigo-600 mb-6 transition">
                <ArrowLeft size={18} className="mr-2" /> Back to Market
            </Link>

            <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-96 md:h-auto bg-gray-100 relative">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold uppercase tracking-wide text-gray-800 rounded-full shadow-sm">
                        For {product.type}
                    </div>
                </div>

                <div className="p-8 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
                        <p className="text-3xl font-bold text-indigo-600 mb-6">${product.price}</p>

                        <div className="prose text-gray-600 mb-8">
                            <p>{product.description}</p>
                        </div>

                        <div className="border-t border-gray-100 pt-6">
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Seller Info</h3>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                                    {product.seller.name[0]}
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">{product.seller.name}</p>
                                    <p className="text-sm text-gray-500">{product.seller.major}, {product.seller.year}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <button className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition flex items-center justify-center gap-2">
                            <MessageCircle size={20} /> Contact Seller
                        </button>
                        <button className="p-3 border border-gray-200 rounded-xl text-gray-500 hover:text-red-500 hover:bg-red-50 transition">
                            <Heart size={20} />
                        </button>
                        <button className="p-3 border border-gray-200 rounded-xl text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition">
                            <Share2 size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
