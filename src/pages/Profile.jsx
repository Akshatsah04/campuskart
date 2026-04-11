import React from 'react';
import { Settings, LogOut, Package, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Profile = () => {
    const { isDark, toggleTheme } = useTheme();

    const user = {
        name: 'Akshat User',
        email: 'akshat@university.edu',
        joined: 'Jan 2024',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200'
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-dark-surface rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.5)] border border-dark-border overflow-hidden mb-8">
                <div className="h-32 bg-gradient-to-r from-accent-neon to-[#22C55E]"></div>
                <div className="px-8 pb-8 relative">
                    <div className="absolute -top-12 left-8 w-24 h-24 bg-dark-bg rounded-full p-1 shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-dark-border">
                        <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
                    </div>
                    <div className="pt-16 flex justify-between items-start">
                        <div>
                            <h1 className="text-2xl font-bold text-[var(--color-text)] transition-colors duration-300">{user.name}</h1>
                            <p className="text-[var(--color-text-muted)] transition-colors duration-300">{user.email}</p>
                            <p className="text-sm text-[var(--color-text-muted)] mt-1 transition-colors duration-300">Joined {user.joined}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button onClick={toggleTheme} className="px-4 py-2 bg-dark-bg border border-dark-border text-[var(--color-text)] rounded-lg font-medium hover:bg-accent-neon/10 hover:border-accent-neon hover:text-accent-neon transition-all duration-300 flex items-center gap-2">
                                {isDark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-blue-500" />} 
                                {isDark ? 'Light Mode' : 'Dark Mode'}
                            </button>
                            <button className="px-4 py-2 bg-dark-bg border border-dark-border text-[var(--color-text)] rounded-lg font-medium hover:bg-accent-neon/10 hover:border-accent-neon hover:text-accent-neon transition-all duration-300 flex items-center gap-2">
                                <Settings size={18} /> Edit Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-2 drop-shadow-[0_0_5px_rgba(255,255,255,0.1)] transition-colors duration-300">
                <Package className="text-accent-neon drop-shadow-[0_0_5px_rgba(0,255,157,0.5)]" /> Your Listings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-dark-surface rounded-xl border border-dark-border text-center py-12 shadow-[0_2px_15px_rgba(0,0,0,0.3)]">
                    <p className="text-[var(--color-text-muted)] transition-colors duration-300">You haven't listed any items yet.</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
