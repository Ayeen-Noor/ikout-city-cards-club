
import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';

interface Player {
  id: string;
  name: string;
  avatar: string;
  score: number;
  isCurrentPlayer?: boolean;
}

interface GameTableProps {
  players: Player[];
  onBackToMenu: () => void;
}

const GameTable: React.FC<GameTableProps> = ({ players, onBackToMenu }) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  
  // Sample hand of cards
  const playerHand = ['K♥', '9♠', 'A♠', '8♠', 'K♦', 'Q♦', 'J♦', 'Q♣', '8♣'];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* City skyline background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-black opacity-50"></div>
      
      {/* Game UI */}
      <div className="relative z-10 p-4">
        {/* Top player info */}
        <div className="flex justify-center mb-4">
          <div className="bg-slate-800 rounded-lg p-3 flex items-center space-x-3">
            <img src="/lovable-uploads/5da0dd28-0965-46da-952b-1a513a32e18d.png" alt="Player" className="w-12 h-12 rounded-full" />
            <div>
              <div className="text-white font-bold">Sour</div>
              <div className="text-yellow-400 text-sm">Score: 26</div>
            </div>
          </div>
        </div>

        {/* Game table area */}
        <div className="flex justify-center items-center mb-8">
          <div className="relative w-96 h-96 bg-green-800 rounded-full border-8 border-yellow-600 shadow-2xl">
            {/* Center card */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white rounded-lg w-16 h-24 shadow-lg flex items-center justify-center border-2 border-gray-300">
                <span className="text-2xl">J♠</span>
              </div>
            </div>
            
            {/* Player positions around table */}
            {players.slice(0, 4).map((player, index) => {
              const angle = (index * 90) - 90; // Start from top
              const radius = 140;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <div
                  key={player.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `50%`,
                    top: `50%`,
                    transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`
                  }}
                >
                  <div className="bg-slate-800 rounded-lg p-2 flex flex-col items-center min-w-[80px]">
                    <img src={player.avatar} alt={player.name} className="w-8 h-8 rounded-full mb-1" />
                    <div className="text-white text-xs font-bold truncate max-w-[70px]">{player.name}</div>
                    <div className="text-yellow-400 text-xs">{player.score}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Player's hand */}
        <div className="flex justify-center">
          <div className="flex space-x-2 bg-slate-800 rounded-xl p-4">
            {playerHand.map((card, index) => (
              <button
                key={index}
                onClick={() => setSelectedCard(card)}
                className={`bg-white rounded-lg w-12 h-18 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 border-2 ${
                  selectedCard === card ? 'border-yellow-400' : 'border-gray-300'
                }`}
              >
                <span className={`text-lg font-bold ${
                  card.includes('♥') || card.includes('♦') ? 'text-red-600' : 'text-black'
                }`}>
                  {card}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Game controls */}
        <div className="fixed bottom-4 left-4">
          <button
            onClick={onBackToMenu}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold transition-colors"
          >
            Leave Game
          </button>
        </div>

        <div className="fixed bottom-4 right-4 space-x-2">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-bold transition-colors">
            💬
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold transition-colors">
            ⚙️
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameTable;
