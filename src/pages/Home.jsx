import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, ShieldCheck, Zap } from 'lucide-react';

const Home = () => {
    return (
        <div className="space-y-16 pb-16">
            {/* Hero Section */}
            <section className="relative bg-indigo-600 text-white py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                        Campus<span className="text-yellow-300">Kart</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-indigo-100">
                        The exclusive marketplace for students to buy, sell, and rent items within your campus.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/market" className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition flex items-center justify-center gap-2">
                            Start Exploring <ArrowRight size={20} />
                        </Link>
                        <Link to="/post-item" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition">
                            Sell an Item
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                    <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                        <ShoppingBag size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Buy & Rent</h3>
                    <p className="text-gray-600">Find textbooks, electronics, and dorm essentials at student-friendly prices.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
                        <Zap size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Quick Listings</h3>
                    <p className="text-gray-600">List your items in seconds and connect with buyers instantly via chat.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                        <ShieldCheck size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Campus Verified</h3>
                    <p className="text-gray-600">Safe transactions within your university community. No strangers, just peers.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
