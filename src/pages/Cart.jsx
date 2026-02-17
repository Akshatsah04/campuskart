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
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

            {cartItems.length > 0 ? (
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Cart Items List */}
                    <div className="md:col-span-2 space-y-4">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-grow flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                                        <p className="font-bold text-gray-900">${item.price}</p>
                                    </div>
                                    <button className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1 self-start transition">
                                        <Trash2 size={16} /> Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="md:col-span-1">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h3>
                            <div className="space-y-2 mb-4">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>${total}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Tax (Included)</span>
                                    <span>$0.00</span>
                                </div>
                            </div>
                            <div className="border-t border-gray-200 pt-4 mb-6">
                                <div className="flex justify-between font-bold text-lg text-gray-900">
                                    <span>Total</span>
                                    <span>${total}</span>
                                </div>
                            </div>
                            <button className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-200 hover:shadow-xl hover:bg-indigo-700 transition flex items-center justify-center gap-2">
                                Checkout <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-20 bg-gray-50 rounded-2xl border-dashed border-2 border-gray-200">
                    <p className="text-gray-500 mb-4">Your cart is empty.</p>
                    <Link to="/market" className="text-indigo-600 font-bold hover:underline">Start Shopping</Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
