import React from 'react';
import { Trash2, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    // Dummy wishlist items
    const wishlistItems = [
        { id: 1, title: 'Calculus Textbook', price: 45, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800', type: 'Buy' },
        { id: 3, title: 'MacBook Pro M1', price: 800, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800', type: 'Rent' },
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-[var(--color-text)] mb-8 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">Your Wishlist</h1>

            {wishlistItems.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Wishlist Items List */}
                    {wishlistItems.map(item => (
                        <div key={item.id} className="group flex gap-4 p-4 bg-dark-surface rounded-xl border border-dark-border shadow-[0_2px_10px_rgba(0,0,0,0.5)] hover:border-accent-neon/50 transition-all duration-300 transform hover:-translate-y-1">
                            <div className="w-24 h-24 bg-dark-bg rounded-lg overflow-hidden flex-shrink-0 border border-dark-border relative">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                                <div className="absolute top-1 left-1 px-2 py-0.5 backdrop-blur-md text-[10px] font-bold uppercase tracking-wide rounded-full bg-accent-neon/90 text-black shadow-[0_0_5px_rgba(0,255,157,0.4)]">
                                    {item.type}
                                </div>
                            </div>
                            <div className="flex-grow flex flex-col justify-between">
                                <Link to={`/product/${item.id}`} className="flex justify-between items-start group-hover:text-accent-neon transition-colors cursor-pointer">
                                    <h3 className="font-semibold text-[var(--color-text)] line-clamp-2">{item.title}</h3>
                                </Link>
                                <div className="mt-1 mb-2">
                                    <p className="font-bold text-accent-neon drop-shadow-[0_0_5px_rgba(0,255,157,0.3)]">${item.price}</p>
                                </div>
                                <div className="flex gap-3 mt-auto">
                                    <button className="flex-1 py-1.5 bg-dark-bg border border-accent-neon text-accent-neon rounded-lg text-sm font-medium hover:bg-accent-neon hover:text-[var(--color-bg)] hover:shadow-[0_0_10px_rgba(0,255,157,0.3)] transition-all flex items-center justify-center gap-1 group/btn">
                                        <ShoppingCart size={14} className="group-hover/btn:scale-110 transition-transform" /> Add to Cart
                                    </button>
                                    <button className="px-3 py-1.5 bg-dark-bg border border-dark-border text-red-500 rounded-lg text-sm hover:border-red-500/50 hover:bg-red-500/10 hover:shadow-[0_0_10px_rgba(239,68,68,0.2)] transition-all flex items-center justify-center pointer-events-auto">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-dark-surface rounded-2xl border-dashed border-2 border-dark-border shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                    <p className="text-[var(--color-text-muted)] mb-4 text-lg">Your wishlist is empty.</p>
                    <Link to="/market" className="text-accent-neon font-bold hover:drop-shadow-[0_0_8px_rgba(0,255,157,0.5)] transition-all">Explore Marketplace</Link>
                </div>
            )}
        </div>
    );
};

export default Wishlist;
