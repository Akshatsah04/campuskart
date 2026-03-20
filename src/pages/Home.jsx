import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, ShieldCheck, Zap } from 'lucide-react';

const Home = () => {
    return (
        <div className="flex-grow flex flex-col">
            <section className="relative bg-dark-bg text-white py-24 px-6 overflow-hidden flex-grow flex flex-col justify-center">
                {/* Neon Background Effects */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-neon/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00FF9D_1px,transparent_1px)] [background-size:30px_30px]"></div>
                
                <div className="max-w-7xl mx-auto text-center relative z-10 animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        Campus<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-neon to-[#22C55E] drop-shadow-[0_0_10px_rgba(0,255,157,0.4)]">Kart</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-400 font-light">
                        The exclusive <span className="text-accent-neon/80 font-medium">premium</span> marketplace for students to buy, sell, and rent items within your campus.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/market" className="px-8 py-4 bg-accent-neon text-black font-bold rounded-full shadow-[0_0_20px_rgba(0,255,157,0.4)] hover:shadow-[0_0_30px_rgba(0,255,157,0.6)] hover:bg-accent-hover transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
                            Start Exploring <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;
