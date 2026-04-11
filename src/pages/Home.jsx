import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, ShieldCheck, Zap } from 'lucide-react';

const Home = () => {
    return (
        <div className="flex-grow flex flex-col">
            <section className="relative bg-gradient-to-b from-[var(--color-bg)] to-[var(--color-bg-gradient)] text-[var(--color-text)] py-20 px-6 overflow-hidden flex-grow flex flex-col justify-center">
                {/* Neon Background Effects */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-neon/5 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-10 bg-[radial-gradient(var(--color-accent)_1px,transparent_1px)] [background-size:30px_30px]"></div>
                
                <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 text-[var(--color-text)]">
                        Campus<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-neon to-accent-hover">Kart</span>
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto text-[var(--color-text-muted)] font-medium leading-relaxed">
                        The exclusive premium marketplace for students to buy, sell, and rent items within your campus.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/market" className="px-8 py-4 bg-gradient-to-r from-accent-neon to-accent-hover text-white font-bold rounded-full shadow-[0_4px_20px_rgba(34,197,94,0.25)] hover:shadow-[0_8px_30px_rgba(34,197,94,0.4)] transform hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-2 group">
                            Start Exploring <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;
