
import React from 'react';
import { Crown, X } from 'lucide-react';

interface VipModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: (tier: 'weekly' | 'monthly') => void;
}

const VipModal: React.FC<VipModalProps> = ({ isOpen, onClose, onSubscribe }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-xl p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">Become a VIP today and enjoy:</h2>
          <button onClick={onClose} className="text-white hover:text-gray-300">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="flex items-center space-x-3">
            <Crown className="w-8 h-8 text-yellow-400" />
            <span className="text-white">Exclusive GOLDEN player name.</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">2x</span>
            </div>
            <span className="text-white">Double the daily coin reward!</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">🎟️</span>
            </div>
            <span className="text-white">FREE Win Streak ticket every week!</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">👥</span>
            </div>
            <span className="text-white">1-on-1 private chat with friends.</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Weekly VIP */}
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-6 text-center text-white">
            <div className="mb-4">
              <Crown className="w-16 h-16 text-yellow-400 mx-auto mb-2" />
              <div className="bg-yellow-500 text-purple-800 px-4 py-1 rounded-full text-sm font-bold inline-block mb-2">
                VIP WEEKLY
              </div>
            </div>
            <div className="text-4xl font-bold mb-4">$1.99/week</div>
            <button 
              onClick={() => onSubscribe('weekly')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-bold transition-colors"
            >
              Subscribe
            </button>
          </div>
          
          {/* Monthly VIP */}
          <div className="bg-gradient-to-br from-pink-600 to-pink-800 rounded-xl p-6 text-center text-white">
            <div className="mb-4">
              <Crown className="w-16 h-16 text-yellow-400 mx-auto mb-2" />
              <div className="bg-yellow-500 text-pink-800 px-4 py-1 rounded-full text-sm font-bold inline-block mb-2">
                VIP MONTHLY
              </div>
            </div>
            <div className="text-4xl font-bold mb-4">$3.99/month</div>
            <button 
              onClick={() => onSubscribe('monthly')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-bold transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VipModal;
