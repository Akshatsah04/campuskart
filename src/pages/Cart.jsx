import React from 'react';
import { Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
    // Dummy cart items
    const cartItems = [
        { id: 1, title: 'Calculus Textbook', price: 45, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800' },
        { id: 2, title: 'Graphing Calculator', price: 20, image: 'https://images.unsplash.com/photo-1587145820266-a5951eebebb1?auto=format&fit=crop&q=80&w=800' },
    ];

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-white mb-8 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">Your Cart</h1>

            {cartItems.length > 0 ? (
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Cart Items List */}
                    <div className="md:col-span-2 space-y-4">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex gap-4 p-4 bg-dark-surface rounded-xl border border-dark-border shadow-[0_2px_10px_rgba(0,0,0,0.5)] hover:border-accent-neon/50 transition-colors duration-300">
                                <div className="w-24 h-24 bg-dark-bg rounded-lg overflow-hidden flex-shrink-0 border border-dark-border">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-grow flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-semibold text-white">{item.title}</h3>
                                        <p className="font-bold text-accent-neon drop-shadow-[0_0_5px_rgba(0,255,157,0.3)]">${item.price}</p>
                                    </div>
                                    <button className="text-red-500 hover:text-red-400 hover:drop-shadow-[0_0_5px_rgba(239,68,68,0.5)] text-sm flex items-center gap-1 self-start transition-all">
                                        <Trash2 size={16} /> Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="md:col-span-1">
                        <div className="bg-dark-surface p-6 rounded-2xl border border-dark-border shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                            <h3 className="text-lg font-bold text-white mb-4">Order Summary</h3>
                            <div className="space-y-2 mb-4">
                                <div className="flex justify-between text-gray-400">
                                    <span>Subtotal</span>
                                    <span>${total}</span>
                                </div>
                                <div className="flex justify-between text-gray-400">
                                    <span>Tax (Included)</span>
                                    <span>$0.00</span>
                                </div>
                            </div>
                            <div className="border-t border-dark-border pt-4 mb-6">
                                <div className="flex justify-between font-bold text-lg text-white">
                                    <span>Total</span>
                                    <span className="text-accent-neon drop-shadow-[0_0_5px_rgba(0,255,157,0.3)]">${total}</span>
                                </div>
                            </div>
                            <button className="w-full py-3 bg-accent-neon text-black rounded-xl font-bold shadow-[0_0_15px_rgba(0,255,157,0.3)] hover:shadow-[0_0_25px_rgba(0,255,157,0.5)] hover:bg-accent-hover transition-all duration-300 flex items-center justify-center gap-2 group transform hover:-translate-y-0.5">
                                Checkout <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-20 bg-dark-surface rounded-2xl border-dashed border-2 border-dark-border shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                    <p className="text-gray-400 mb-4 text-lg">Your cart is empty.</p>
                    <Link to="/market" className="text-accent-neon font-bold hover:drop-shadow-[0_0_8px_rgba(0,255,157,0.5)] transition-all">Start Shopping</Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
