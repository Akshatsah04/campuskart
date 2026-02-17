import React from 'react';
import { Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 py-12 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 bg-indigo-600 rounded-md flex items-center justify-center text-white font-bold text-xs">C</div>
                            <span className="font-bold text-lg tracking-tight text-gray-900">Campus<span className="text-indigo-600">Kart</span></span>
                        </div>
                        <p className="text-gray-500 text-sm">
                            The #1 marketplace for students. Buy, sell, and rent items securely within your campus network.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Marketplace</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li className="hover:text-indigo-600 cursor-pointer">All Products</li>
                            <li className="hover:text-indigo-600 cursor-pointer">Textbooks</li>
                            <li className="hover:text-indigo-600 cursor-pointer">Electronics</li>
                            <li className="hover:text-indigo-600 cursor-pointer">Furniture</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Support</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li className="hover:text-indigo-600 cursor-pointer">Help Center</li>
                            <li className="hover:text-indigo-600 cursor-pointer">Safety Tips</li>
                            <li className="hover:text-indigo-600 cursor-pointer">Terms of Service</li>
                            <li className="hover:text-indigo-600 cursor-pointer">Privacy Policy</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 transition">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 transition">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 transition">
                                <Github size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} CampusKart. All rights reserved. Made with ❤️ for students.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
