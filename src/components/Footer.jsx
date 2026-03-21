import React from 'react';
import { Github, Twitter, Instagram, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark-bg border-t border-dark-border py-12 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4 group">
                            <div className="w-6 h-6 bg-accent-neon rounded-md flex items-center justify-center text-black font-bold text-xs shadow-[0_0_8px_rgba(0,255,157,0.4)] group-hover:shadow-[0_0_12px_rgba(0,255,157,0.8)] transition-all">C</div>
                            <span className="font-bold text-lg tracking-tight text-white">Campus<span className="text-accent-neon drop-shadow-[0_0_5px_rgba(0,255,157,0.3)]">Kart</span></span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            The #1 marketplace for students. Buy, sell, and rent items securely within your campus network.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Marketplace</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="hover:text-accent-neon cursor-pointer transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(0,255,157,0.5)]">All Products</li>
                            <li className="hover:text-accent-neon cursor-pointer transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(0,255,157,0.5)]">Textbooks</li>
                            <li className="hover:text-accent-neon cursor-pointer transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(0,255,157,0.5)]">Electronics</li>
                            <li className="hover:text-accent-neon cursor-pointer transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(0,255,157,0.5)]">Furniture</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Support</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="hover:text-accent-neon cursor-pointer transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(0,255,157,0.5)]">Help Center</li>
                            <li className="hover:text-accent-neon cursor-pointer transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(0,255,157,0.5)]">Safety Tips</li>
                            <li className="hover:text-accent-neon cursor-pointer transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(0,255,157,0.5)]">Terms of Service</li>
                            <li className="hover:text-accent-neon cursor-pointer transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(0,255,157,0.5)]">Privacy Policy</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Connect</h4>
                        <div className="flex space-x-4 relative">
                            <a href="https://www.instagram.com/_campus.kart_?igsh=MTlrMHdvbXJ0ZWg2bg==" target="_blank" rel="noopener noreferrer" className="p-2 bg-dark-surface border border-dark-border rounded-full text-gray-400 hover:bg-accent-neon hover:text-black hover:shadow-[0_0_15px_rgba(0,255,157,0.6)] hover:border-transparent transition-all duration-300">
                                <Instagram size={18} />
                            </a>
                            <a href="https://github.com/Akshatsah04/campuskart" target="_blank" rel="noopener noreferrer" className="p-2 bg-dark-surface border border-dark-border rounded-full text-gray-400 hover:bg-accent-neon hover:text-black hover:shadow-[0_0_15px_rgba(0,255,157,0.6)] hover:border-transparent transition-all duration-300">
                                <Github size={18} />
                            </a>
                            <button 
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigator.clipboard.writeText("9060926686");
                                    const btn = e.currentTarget;
                                    const originalTitle = btn.getAttribute('title');
                                    btn.setAttribute('title', 'Copied!');
                                    const span = document.createElement('span');
                                    span.textContent = 'Copied!';
                                    span.className = 'absolute -top-8 right-0 bg-accent-neon text-black text-xs font-bold py-1 px-2 rounded shadow-[0_0_10px_rgba(0,255,157,0.5)] animate-fade-in';
                                    btn.parentElement.appendChild(span);
                                    setTimeout(() => {
                                        span.remove();
                                        btn.setAttribute('title', originalTitle);
                                    }, 2000);
                                }} 
                                className="p-2 bg-dark-surface border border-dark-border rounded-full text-gray-400 hover:bg-accent-neon hover:text-black hover:shadow-[0_0_15px_rgba(0,255,157,0.6)] hover:border-transparent transition-all duration-300 cursor-pointer outline-none relative"
                                title="Copy Phone Number"
                            >
                                <Phone size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-dark-border text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} CampusKart. All rights reserved. Made with ❤️ for students.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
