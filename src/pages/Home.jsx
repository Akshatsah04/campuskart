import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, ShieldCheck, Zap } from 'lucide-react';

const Home = () => {
    return (
        <div className="flex-grow flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-indigo-600 text-white py-24 px-6 overflow-hidden flex-grow flex flex-col justify-center">
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
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;
