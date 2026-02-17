import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const DUMMY_PRODUCTS = [
    { id: 1, title: 'Calculus Textbook', price: 45, type: 'Sale', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800', description: 'Calculus: Early Transcendentals, 8th Edition. Slightly used but in good condition.' },
    { id: 2, title: 'Graphing Calculator', price: 20, type: 'Rent', image: 'https://images.unsplash.com/photo-1587145820266-a5951eebebb1?auto=format&fit=crop&q=80&w=800', description: 'TI-84 Plus CE. Perfect for math and science classes. Rent for the semester.' },
    { id: 3, title: 'Dorm Mini Fridge', price: 80, type: 'Sale', image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&q=80&w=800', description: 'Compact mini fridge, perfect for dorm rooms. Keeps drinks cold!' },
    { id: 4, title: 'Wireless Headphones', price: 120, type: 'Sale', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800', description: 'Noise cancelling headphones, great for studying in noisy places.' },
    { id: 5, title: 'Lab Coat', price: 15, type: 'Rent', image: 'https://images.unsplash.com/photo-1581093458791-9f302e68383e?auto=format&fit=crop&q=80&w=800', description: 'Standard white lab coat, size M. Clean and ready for chemistry labs.' },
    { id: 6, title: 'Desk Lamp', price: 25, type: 'Sale', image: 'https://images.unsplash.com/photo-1534073828943-f801091a7d58?auto=format&fit=crop&q=80&w=800', description: 'Adjustable LED desk lamp. Multiple brightness settings.' },
];

const Marketplace = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');

    const filteredProducts = DUMMY_PRODUCTS.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === 'All' || product.type === filter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <h1 className="text-3xl font-bold text-gray-900">Marketplace</h1>

                <div className="flex gap-4 w-full md:w-auto">
                    {/* Search */}
                    <div className="relative flex-grow md:w-80">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                    </div>

                    {/* Filter */}
                    <div className="relative">
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="pl-10 pr-8 py-2 border border-gray-200 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 cursor-pointer"
                        >
                            <option value="All">All Items</option>
                            <option value="Sale">For Sale</option>
                            <option value="Rent">For Rent</option>
                        </select>
                        <Filter className="absolute left-3 top-2.5 text-gray-400" size={18} />
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    <p className="text-xl">No products found matching your criteria.</p>
                </div>
            )}
        </div>
    );
};

export default Marketplace;
