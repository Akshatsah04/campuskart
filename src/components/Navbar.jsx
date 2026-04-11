import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X, Heart, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import logo from '../public/campuskartlogo.PNG';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { isLoggedIn, user, logout } = useAuth();
    
    const isActive = (path) => location.pathname === path;

    const handleLogout = () => {
        logout();
        setShowDropdown(false);
        navigate('/login');
    };

    return (
        <nav className="sticky top-0 z-50 bg-[var(--color-bg)]/80 backdrop-blur-lg border-b border-dark-border shadow-sm transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
                        <img src={logo} alt="CampusKart Logo" className="h-10 object-contain group-hover:drop-shadow-[0_0_12px_rgba(0,255,157,0.5)] transition-all rounded-lg" />
                        <span className="font-bold text-xl tracking-tight text-[var(--color-text)] hidden md:block">Campus<span className="text-accent-neon drop-shadow-[0_0_8px_rgba(0,255,157,0.3)]">Kart</span></span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className={`relative text-sm font-semibold transition-all duration-300 group ${isActive('/') ? 'text-[var(--color-text)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'}`}>
                            Home
                            <span className={`absolute left-0 -bottom-1 h-0.5 bg-accent-neon transition-all duration-300 ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </Link>
                        <Link to="/market" className={`relative text-sm font-semibold transition-all duration-300 group ${isActive('/market') ? 'text-[var(--color-text)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'}`}>
                            Marketplace
                            <span className={`absolute left-0 -bottom-1 h-0.5 bg-accent-neon transition-all duration-300 ${isActive('/market') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </Link>
                        <Link to="/post-item" className={`relative text-sm font-semibold transition-all duration-300 group ${isActive('/post-item') ? 'text-[var(--color-text)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'}`}>
                            Sell Item
                            <span className={`absolute left-0 -bottom-1 h-0.5 bg-accent-neon transition-all duration-300 ${isActive('/post-item') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </Link>
                    </div>

                    {/* Right Section */}
                    {isLoggedIn ? (
                        <div className="hidden md:flex items-center space-x-4">
                            <div className="relative group">
                                <input
                                    type="text"
                                    placeholder="Search items..."
                                    className="pl-9 pr-4 py-2 bg-dark-surface border border-dark-border rounded-full text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-accent-neon/50 focus:border-accent-neon w-48 transition-all duration-300 focus:w-64 shadow-sm focus:shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                                />
                                <Search className="absolute left-3 top-2.5 text-[var(--color-text-muted)] group-focus-within:text-accent-neon transition-colors" size={16} />
                            </div>
                            <Link to="/wishlist" className="relative p-2 text-[var(--color-text-muted)] hover:text-red-500 hover:bg-red-500/10 rounded-full transition-all duration-300">
                                <Heart size={20} />
                            </Link>
                            <Link to="/cart" className="relative p-2 text-[var(--color-text-muted)] hover:text-accent-neon hover:bg-accent-neon/10 rounded-full transition-all duration-300">
                                <ShoppingCart size={20} />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </Link>
                            <div className="relative ml-2">
                                <button 
                                    onClick={() => setShowDropdown(!showDropdown)} 
                                    className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-accent-neon to-accent-hover text-white font-bold text-sm shadow-[0_4px_15px_rgba(34,197,94,0.3)] hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-neon dark:focus:ring-offset-dark-bg"
                                >
                                    {user?.name?.[0]?.toUpperCase() || 'U'}
                                </button>
                                
                                {showDropdown && (
                                    <>
                                        <div className="fixed inset-0 z-40" onClick={() => setShowDropdown(false)}></div>
                                        <div className="absolute right-0 mt-3 w-56 bg-[var(--color-surface)] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-xl border border-[var(--color-border)] py-2 z-50 animate-fade-in origin-top-right transition-all">
                                            <div className="px-4 py-3 border-b border-[var(--color-border)]">
                                                <p className="text-sm font-semibold text-[var(--color-text)] truncate">{user?.name}</p>
                                                <p className="text-xs text-[var(--color-text-muted)] truncate mt-0.5">{user?.email}</p>
                                            </div>
                                            <div className="py-1">
                                                <Link to="/profile" onClick={() => setShowDropdown(false)} className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[var(--color-text-muted)] hover:bg-[var(--color-surface2)] hover:text-accent-neon transition-colors">
                                                    <User size={16} /> Profile
                                                </Link>
                                                <Link to="/profile" onClick={() => setShowDropdown(false)} className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[var(--color-text-muted)] hover:bg-[var(--color-surface2)] hover:text-accent-neon transition-colors">
                                                    <ShoppingCart size={16} /> Orders
                                                </Link>
                                            </div>
                                            <div className="border-t border-[var(--color-border)] py-1 mt-1">
                                                <button onClick={handleLogout} className="flex items-center gap-2 w-full text-left px-4 py-2.5 text-sm font-medium text-red-500 hover:bg-red-500/10 transition-colors">
                                                    <LogOut size={16} /> Logout
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="hidden md:flex items-center space-x-3">
                            <Link to="/login" className="px-5 py-2 text-sm font-semibold text-[var(--color-text)] hover:text-accent-neon transition-colors">Log In</Link>
                            <Link to="/signup" className="px-5 py-2 text-sm font-bold text-white bg-gradient-to-r from-accent-neon to-accent-hover rounded-xl shadow-[0_4px_15px_rgba(34,197,94,0.3)] hover:shadow-[0_8px_20px_rgba(34,197,94,0.4)] transition-all transform hover:-translate-y-0.5">Sign Up</Link>
                        </div>
                    )}

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
                        <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-[var(--color-text-muted)] hover:text-accent-neon hover:bg-dark-surface hover:shadow-[0_0_10px_rgba(0,255,157,0.1)] transition-colors">Home</Link>
                        <Link to="/market" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-[var(--color-text-muted)] hover:text-accent-neon hover:bg-dark-surface hover:shadow-[0_0_10px_rgba(0,255,157,0.1)] transition-colors">Marketplace</Link>
                        <Link to="/post-item" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-[var(--color-text-muted)] hover:text-accent-neon hover:bg-dark-surface hover:shadow-[0_0_10px_rgba(0,255,157,0.1)] transition-colors">Sell Item</Link>
                        <Link to="/wishlist" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-[var(--color-text-muted)] hover:text-accent-neon hover:bg-dark-surface hover:shadow-[0_0_10px_rgba(0,255,157,0.1)] transition-colors">Wishlist</Link>
                        <Link to="/cart" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-[var(--color-text-muted)] hover:text-accent-neon hover:bg-dark-surface hover:shadow-[0_0_10px_rgba(0,255,157,0.1)] transition-colors">Cart</Link>
                        <Link to="/profile" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-[var(--color-text-muted)] hover:text-accent-neon hover:bg-dark-surface hover:shadow-[0_0_10px_rgba(0,255,157,0.1)] transition-colors">Profile</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
