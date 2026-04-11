import React from 'react';
import { Github, Twitter, Instagram, Phone } from 'lucide-react';
import logo from '../public/campuskartlogo.PNG';

const Footer = () => {
    return (
        <footer className="bg-[var(--color-bg)] border-t border-[var(--color-border)] py-16 relative z-10 mt-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4 group">
                            <img src={logo} alt="CampusKart Logo" className="h-8 object-contain group-hover:drop-shadow-[0_0_12px_rgba(0,255,157,0.5)] transition-all rounded-md" />
                            <span className="font-bold text-lg tracking-tight text-[var(--color-text)] hidden md:block">Campus<span className="text-accent-neon drop-shadow-[0_0_5px_rgba(0,255,157,0.3)]">Kart</span></span>
                        </div>
                        {/* <p className="text-gray-400 text-sm">
                            The #1 marketplace for students. Buy, sell, and rent items securely within your campus network.
                        </p> */}
                    </div>

                    <div>
                        <h4 className="font-bold text-[var(--color-text)] mb-6 uppercase text-sm tracking-wider">Marketplace</h4>
                        <ul className="space-y-3 text-sm text-[var(--color-text-muted)] font-medium">
                            <li className="hover:text-accent-neon cursor-pointer transition-all duration-300 hover:underline underline-offset-4">All Products</li>
                            <li className="hover:text-accent-neon cursor-pointer transition-all duration-300 hover:underline underline-offset-4">Textbooks</li>
                            <li className="hover:text-accent-neon cursor-pointer transition-all duration-300 hover:underline underline-offset-4">Electronics</li>
                            <li className="hover:text-accent-neon cursor-pointer transition-all duration-300 hover:underline underline-offset-4">Furniture</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-[var(--color-text)] mb-6 uppercase text-sm tracking-wider">Support</h4>
                        <ul className="space-y-3 text-sm text-[var(--color-text-muted)] font-medium">
                            <li className="hover:text-accent-neon cursor-pointer transition-all duration-300 hover:underline underline-offset-4">Help Center</li>
                            <li className="hover:text-accent-neon cursor-pointer transition-all duration-300 hover:underline underline-offset-4">Safety Tips</li>
                            <li className="hover:text-accent-neon cursor-pointer transition-all duration-300 hover:underline underline-offset-4">Terms of Service</li>
                            <li className="hover:text-accent-neon cursor-pointer transition-all duration-300 hover:underline underline-offset-4">Privacy Policy</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-[var(--color-text)] mb-6 uppercase text-sm tracking-wider">Connect</h4>
                        <div className="flex space-x-4 relative">
                            <a href="https://www.instagram.com/_campus.kart_?igsh=MTlrMHdvbXJ0ZWg2bg==" target="_blank" rel="noopener noreferrer" className="p-2 bg-dark-surface border border-dark-border rounded-full text-[var(--color-text-muted)] hover:bg-accent-neon/10 hover:text-accent-neon hover:border-accent-neon hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300">
                                <Instagram size={18} />
                            </a>
                            <a href="https://github.com/Akshatsah04/campuskart" target="_blank" rel="noopener noreferrer" className="p-2 bg-dark-surface border border-dark-border rounded-full text-[var(--color-text-muted)] hover:bg-accent-neon/10 hover:text-accent-neon hover:border-accent-neon hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300">
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
                                className="p-2 bg-dark-surface border border-dark-border rounded-full text-[var(--color-text-muted)] hover:bg-accent-neon/10 hover:text-accent-neon hover:border-accent-neon hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300 cursor-pointer outline-none relative"
                                title="Copy Phone Number"
                            >
                                <Phone size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-[var(--color-border)] text-center text-sm text-[var(--color-text-muted)]">
                    &copy; {new Date().getFullYear()} Campus<span className="font-bold">Kart</span>. All rights reserved. Made with ❤️ for students.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
