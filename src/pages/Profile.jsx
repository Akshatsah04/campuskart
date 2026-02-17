import React from 'react';
import { Settings, LogOut, Package } from 'lucide-react';

const Profile = () => {
    const user = {
        name: 'Akshat User',
        email: 'akshat@university.edu',
        joined: 'Jan 2024',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200'
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
                <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                <div className="px-8 pb-8 relative">
                    <div className="absolute -top-12 left-8 w-24 h-24 bg-white rounded-full p-1 shadow-md">
                        <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
                    </div>
                    <div className="pt-16 flex justify-between items-start">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                            <p className="text-gray-500">{user.email}</p>
                            <p className="text-sm text-gray-400 mt-1">Joined {user.joined}</p>
                        </div>
                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition flex items-center gap-2">
                            <Settings size={18} /> Edit Profile
                        </button>
                    </div>
                </div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Package className="text-indigo-600" /> Your Listings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 text-center py-12">
                    <p className="text-gray-500">You haven't listed any items yet.</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
