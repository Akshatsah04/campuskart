import React from 'react';
import { Upload, DollarSign } from 'lucide-react';

const PostItem = () => {
    return (
        <div className="max-w-2xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-white mb-8 text-center drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">Sell Your Item</h1>

            <form className="space-y-6">
                {/* Image Upload */}
                <div className="border-2 border-dashed border-dark-border rounded-2xl p-8 text-center hover:border-accent-neon transition-colors duration-300 cursor-pointer bg-dark-surface group">
                    <div className="w-12 h-12 bg-accent-neon/10 text-accent-neon rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,255,157,0.2)] transition-all duration-300">
                        <Upload size={24} />
                    </div>
                    <p className="font-medium text-white">Click to upload images</p>
                    <p className="text-sm text-gray-400 mt-1">SVG, PNG, JPG or GIF (max. 5MB)</p>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Item Title</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent-neon focus:border-accent-neon transition-all duration-300 focus:shadow-[0_0_10px_rgba(0,255,157,0.2)]"
                            placeholder="e.g. Calculus Textbook, 8th Ed."
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Price</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-gray-500 group-focus-within:text-accent-neon transition-colors">$</span>
                                </div>
                                <input
                                    type="number"
                                    className="w-full pl-8 pr-4 py-3 bg-dark-surface border border-dark-border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent-neon focus:border-accent-neon transition-all duration-300 focus:shadow-[0_0_10px_rgba(0,255,157,0.2)]"
                                    placeholder="0.00"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Listing Type</label>
                            <select className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-accent-neon focus:border-accent-neon transition-all duration-300 focus:shadow-[0_0_10px_rgba(0,255,157,0.2)]">
                                <option value="sale">For Sale</option>
                                <option value="rent">For Rent</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
                        <textarea
                            rows="4"
                            className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent-neon focus:border-accent-neon transition-all duration-300 focus:shadow-[0_0_10px_rgba(0,255,157,0.2)] resize-none"
                            placeholder="Describe your item... (condition, features, reason for selling)"
                        ></textarea>
                    </div>
                </div>

                <button
                    type="button"
                    className="w-full py-4 bg-accent-neon text-black rounded-xl font-bold shadow-[0_0_15px_rgba(0,255,157,0.3)] hover:shadow-[0_0_25px_rgba(0,255,157,0.5)] hover:bg-accent-hover transition-all duration-300 transform hover:-translate-y-0.5"
                >
                    Post Listing
                </button>
            </form>
        </div>
    );
};

export default PostItem;
