
import React, { useState } from 'react';

const LeaderboardPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  const leaderboardData = {
    daily: [
      { rank: 1, name: 'boanas83', score: 2450, avatar: '/lovable-uploads/5da0dd28-0965-46da-952b-1a513a32e18d.png', isVip: true },
      { rank: 2, name: 'betonmylife', score: 2380, avatar: '/lovable-uploads/5da0dd28-0965-46da-952b-1a513a32e18d.png', isVip: false },
      { rank: 3, name: 'dalal.90', score: 2200, avatar: '/lovable-uploads/5da0dd28-0965-46da-952b-1a513a32e18d.png', isVip: true },
      { rank: 4, name: 'kuwaitGamer', score: 2150, avatar: '/lovable-uploads/5da0dd28-0965-46da-952b-1a513a32e18d.png', isVip: false },
      { rank: 5, name: 'cardMaster', score: 2100, avatar: '/lovable-uploads/5da0dd28-0965-46da-952b-1a513a32e18d.png', isVip: true },
    ],
    weekly: [
      { rank: 1, name: 'dalal.90', score: 15800, avatar: '/lovable-uploads/5da0dd28-0965-46da-952b-1a513a32e18d.png', isVip: true },
      { rank: 2, name: 'boanas83', score: 14200, avatar: '/lovable-uploads/5da0dd28-0965-46da-952b-1a513a32e18d.png', isVip: true },
      { rank: 3, name: 'betonmylife', score: 13900, avatar: '/lovable-uploads/5da0dd28-0965-46da-952b-1a513a32e18d.png', isVip: false },
      { rank: 4, name: 'proPlayer', score: 12500, avatar: '/lovable-uploads/5da0dd28-0965-46da-952b-1a513a32e18d.png', isVip: true },
      { rank: 5, name: 'kuwaitGamer', score: 11800, avatar: '/lovable-uploads/5da0dd28-0965-46da-952b-1a513a32e18d.png', isVip: false },
    ],
    monthly: [
      { rank: 1, name: 'betonmylife', score: 58400, avatar: '/lovable-uploads/5da0dd28-0965-46da-952b-1a513a32e18d.png', isVip: false },
      { rank: 2, name: 'dalal.90', score: 56200, avatar: '/lovable-uploads/5da0dd28-0965-46da-952b-1a513a32e18d.png', isVip: true },
      { rank: 3, name: 'boanas83', score: 54800, avatar: '/lovable-uploads/5da0dd28-0965-46da-952b-1a513a32e18d.png', isVip: true },
      { rank: 4, name: 'legendPlayer', score: 48900, avatar: '/lovable-uploads/5da0dd28-0965-46da-952b-1a513a32e18d.png', isVip: true },
      { rank: 5, name: 'cardMaster', score: 45600, avatar: '/lovable-uploads/5da0dd28-0965-46da-952b-1a513a32e18d.png', isVip: true },
    ]
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return rank;
    }
  };

  return (
    <div className="p-6">
      <div className="bg-gradient-to-r from-yellow-600/90 to-orange-600/90 rounded-xl p-6 text-white backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-6 text-center">🏆 Leaderboard</h2>
        
        {/* Period Selection */}
        <div className="flex justify-center mb-6">
          <div className="bg-black/20 rounded-lg p-1 flex space-x-1">
            {(['daily', 'weekly', 'monthly'] as const).map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-4 py-2 rounded-md transition-colors capitalize ${
                  selectedPeriod === period
                    ? 'bg-white text-orange-600 font-bold'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* Leaderboard List */}
        <div className="space-y-3">
          {leaderboardData[selectedPeriod].map((player) => (
            <div
              key={player.rank}
              className={`flex items-center justify-between p-4 rounded-lg ${
                player.rank <= 3 ? 'bg-yellow-500/30' : 'bg-black/20'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="text-2xl font-bold w-8 text-center">
                  {getRankIcon(player.rank)}
                </div>
                <img
                  src={player.avatar}
                  alt={player.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold">{player.name}</span>
                    {player.isVip && <span className="text-yellow-300">👑</span>}
                  </div>
                  <div className="text-sm opacity-75">Score: {player.score.toLocaleString()}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold">#{player.rank}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Player's Current Position */}
        <div className="mt-6 p-4 bg-blue-600/50 rounded-lg">
          <div className="text-center">
            <div className="text-sm opacity-75">Your Current Position</div>
            <div className="text-2xl font-bold">#42</div>
            <div className="text-sm">Score: 1,850</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
