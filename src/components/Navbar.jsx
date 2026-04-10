import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../public/campuskartlogo.PNG';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="sticky top-0 z-50 bg-dark-bg/90 backdrop-blur-md border-b border-dark-border shadow-[0_2px_15px_rgba(0,0,0,0.5)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
                        <img src={logo} alt="CampusKart Logo" className="h-10 object-contain group-hover:drop-shadow-[0_0_12px_rgba(0,255,157,0.5)] transition-all rounded-lg" />
                        <span className="font-bold text-xl tracking-tight text-white hidden md:block">Campus<span className="text-accent-neon drop-shadow-[0_0_8px_rgba(0,255,157,0.3)]">Kart</span></span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className={`text-sm font-medium transition-all duration-300 ${isActive('/') ? 'text-accent-neon drop-shadow-[0_0_8px_rgba(0,255,157,0.5)]' : 'text-gray-400 hover:text-accent-hover hover:drop-shadow-[0_0_8px_rgba(0,230,138,0.5)]'}`}>Home</Link>
                        <Link to="/market" className={`text-sm font-medium transition-all duration-300 ${isActive('/market') ? 'text-accent-neon drop-shadow-[0_0_8px_rgba(0,255,157,0.5)]' : 'text-gray-400 hover:text-accent-hover hover:drop-shadow-[0_0_8px_rgba(0,230,138,0.5)]'}`}>Marketplace</Link>
                        <Link to="/post-item" className={`text-sm font-medium transition-all duration-300 ${isActive('/post-item') ? 'text-accent-neon drop-shadow-[0_0_8px_rgba(0,255,157,0.5)]' : 'text-gray-400 hover:text-accent-hover hover:drop-shadow-[0_0_8px_rgba(0,230,138,0.5)]'}`}>Sell Item</Link>
                    </div>

                    {/* Right Section */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search items..."
                                className="pl-9 pr-4 py-2 bg-dark-surface border border-dark-border rounded-full text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent-neon focus:border-accent-neon w-48 transition-all duration-300 focus:w-64 focus:shadow-[0_0_10px_rgba(0,255,157,0.3)]"
                            />
                            <Search className="absolute left-3 top-2.5 text-gray-500 group-focus-within:text-accent-neon transition-colors" size={16} />
                        </div>
                        <Link to="/cart" className="relative p-2 text-gray-400 hover:text-accent-neon hover:drop-shadow-[0_0_8px_rgba(0,255,157,0.5)] transition-all duration-300">
                            <ShoppingCart size={20} />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_5px_rgba(239,68,68,0.5)]"></span>
                        </Link>
                        <Link to="/profile" className="p-2 text-gray-400 hover:text-accent-neon hover:drop-shadow-[0_0_8px_rgba(0,255,157,0.5)] transition-all duration-300">
                            <User size={20} />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-accent-neon hover:drop-shadow-[0_0_8px_rgba(0,255,157,0.5)] p-2 transition-all">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-dark-bg/95 backdrop-blur-md border-t border-dark-border absolute w-full left-0 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-accent-neon hover:bg-dark-surface hover:shadow-[0_0_10px_rgba(0,255,157,0.1)] transition-colors">Home</Link>
                        <Link to="/market" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-accent-neon hover:bg-dark-surface hover:shadow-[0_0_10px_rgba(0,255,157,0.1)] transition-colors">Marketplace</Link>
                        <Link to="/post-item" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-accent-neon hover:bg-dark-surface hover:shadow-[0_0_10px_rgba(0,255,157,0.1)] transition-colors">Sell Item</Link>
                        <Link to="/cart" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-accent-neon hover:bg-dark-surface hover:shadow-[0_0_10px_rgba(0,255,157,0.1)] transition-colors">Cart</Link>
                        <Link to="/profile" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-accent-neon hover:bg-dark-surface hover:shadow-[0_0_10px_rgba(0,255,157,0.1)] transition-colors">Profile</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
