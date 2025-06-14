
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface StoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  storeType: 'coins' | 'dinars';
}

const StoreModal: React.FC<StoreModalProps> = ({ isOpen, onClose, storeType }) => {
  if (!isOpen) return null;

  const coinPackages = [
    { name: "A Handful of Coins", amount: 1000, icon: "🪙", price: "$0.99", bonus: 10 },
    { name: "A Bag of Coins", amount: 4160, icon: "💰", price: "$3.99", bonus: 40 },
    { name: "A Box of Coins", amount: 26250, icon: "📦", price: "$19.99", bonus: 250 },
    { name: "A Truckload of Coins", amount: 52600, icon: "🚛", price: "$39.99", bonus: 400 },
    { name: "A Shipload of Coins", amount: 74900, icon: "🚢", price: "$59.99", bonus: 700 }
  ];

  const dinarPackages = [
    { name: "A Wallet of Dinars", amount: 5, icon: "💎", price: "$0.99" },
    { name: "An Envelope of Dinars", amount: 27, icon: "📄", price: "$4.99" },
    { name: "A Suitcase of Dinars", amount: 56, icon: "💼", price: "$9.99" },
    { name: "A Dufflebag of Dinars", amount: 330, icon: "🎒", price: "$49.99" },
    { name: "A Pile of Dinars", amount: 775, icon: "💎", price: "$99.99" }
  ];

  const packages = storeType === 'coins' ? coinPackages : dinarPackages;
  const title = storeType === 'coins' ? 'Coins' : 'Dinars';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-xl p-6 max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">{title}</h2>
          <button onClick={onClose} className="text-white hover:text-gray-300">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {packages.map((pkg, index) => (
            <div key={index} className={`${storeType === 'coins' ? 'bg-blue-600' : 'bg-orange-600'} rounded-xl p-4 text-center text-white hover:scale-105 transition-transform cursor-pointer`}>
              <h3 className="font-bold mb-2">{pkg.name}</h3>
              <div className="text-4xl mb-2">{pkg.icon}</div>
              {storeType === 'coins' ? (
                <div className="text-yellow-400 font-bold mb-1">🪙{pkg.amount}</div>
              ) : (
                <div className="text-cyan-400 font-bold mb-1">💎{pkg.amount}</div>
              )}
              <div className="bg-blue-500 rounded-full py-2 px-4 font-bold">{pkg.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreModal;
