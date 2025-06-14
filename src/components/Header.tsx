
import React, { useState } from 'react';
import { Crown, User, Users, Bell, Settings } from 'lucide-react';

interface HeaderProps {
  coins: number;
  diamonds: number;
  isVip: boolean;
  onSettingsClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ coins, diamonds, isVip, onSettingsClick }) => {
  return (
    <header className="bg-gradient-to-r from-slate-800 to-slate-700 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <img src="/lovable-uploads/7a6267de-1d8e-4d23-b830-14c4f3ab28e1.png" alt="iKout Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold text-white">iKout</h1>
        </div>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-blue-600 px-3 py-1 rounded-full">
            <div className="w-4 h-4 bg-cyan-400 rounded-full mr-2"></div>
            <span className="text-white font-bold">{diamonds}</span>
          </div>
          <div className="flex items-center bg-yellow-600 px-3 py-1 rounded-full">
            <div className="w-4 h-4 bg-yellow-400 rounded-full mr-2"></div>
            <span className="text-white font-bold">{coins}</span>
          </div>
        </div>
        
        {isVip && (
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-1 rounded-full flex items-center">
            <Crown className="w-4 h-4 text-white mr-1" />
            <span className="text-white font-bold text-sm">VIP</span>
          </div>
        )}
        
        <button className="text-white hover:text-yellow-400 transition-colors">
          <Bell className="w-6 h-6" />
        </button>
        
        <button 
          onClick={onSettingsClick}
          className="text-white hover:text-yellow-400 transition-colors"
        >
          <Settings className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
