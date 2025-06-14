
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, onLogout }) => {
  const [voices, setVoices] = useState(75);
  const [soundEffects, setSoundEffects] = useState(85);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-xl p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <div className="bg-blue-500 px-4 py-2 rounded-full">
            <span className="text-white font-bold">Language</span>
          </div>
          <button onClick={onClose} className="text-white hover:text-gray-300">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="text-white font-bold block mb-2">Voices</label>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="100"
                value={voices}
                onChange={(e) => setVoices(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="absolute right-0 top-6 text-white text-sm">{voices}</div>
            </div>
          </div>
          
          <div>
            <label className="text-white font-bold block mb-2">Sound Effects</label>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="100"
                value={soundEffects}
                onChange={(e) => setSoundEffects(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="absolute right-0 top-6 text-white text-sm">{soundEffects}</div>
            </div>
          </div>
          
          <div className="space-y-3 pt-4">
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-bold transition-colors">
              Manage Account
            </button>
            <button 
              onClick={onLogout}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold transition-colors"
            >
              Log Out
            </button>
          </div>
          
          <div className="text-center pt-4">
            <div className="text-white text-sm">v7.0.2</div>
            <div className="space-x-4 mt-2">
              <a href="#" className="text-gray-400 text-sm hover:text-white">Terms of Use</a>
              <a href="#" className="text-gray-400 text-sm hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
