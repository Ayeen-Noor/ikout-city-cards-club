import React, { useState } from 'react';
import Header from '../components/Header';
import GameModeCard from '../components/GameModeCard';
import VipModal from '../components/VipModal';
import StoreModal from '../components/StoreModal';
import SettingsModal from '../components/SettingsModal';
import DiwaniyaPage from '../components/DiwaniyaPage';
import FriendsPage from '../components/FriendsPage';
import GameTable from '../components/GameTable';
import LoadingScreen from '../components/LoadingScreen';
import { Users, User, Crown } from 'lucide-react';
import { toast } from 'sonner';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<'home' | 'diwaniya' | 'friends' | 'game'>('home');
  const [showVipModal, setShowVipModal] = useState(false);
  const [showStoreModal, setShowStoreModal] = useState(false);
  const [storeType, setStoreType] = useState<'coins' | 'dinars'>('coins');
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [playerStats, setPlayerStats] = useState({
    coins: 120,
    diamonds: 0,
    isVip: false
  });

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleSubscribe = (tier: 'weekly' | 'monthly') => {
    setPlayerStats(prev => ({ ...prev, isVip: true }));
    setShowVipModal(false);
    toast.success(`Successfully subscribed to VIP ${tier}!`);
  };

  const handleLogout = () => {
    setShowSettingsModal(false);
    toast.info('Logged out successfully');
    // Reset to welcome state or redirect to login
  };

  const openStore = (type: 'coins' | 'dinars') => {
    setStoreType(type);
    setShowStoreModal(true);
  };

  const handleJoinGame = (gameMode: string) => {
    toast.info(`Joining ${gameMode}...`);
    // Simulate finding a game
    setTimeout(() => {
      setCurrentPage('game');
    }, 1500);
  };

  const samplePlayers = [
    { id: '1', name: 'Guest-6961769', avatar: '/lovable-uploads/5da0dd28-0965-46da-952b-1a513a32e18d.png', score: 0 },
    { id: '2', name: 'Sour', avatar: '/lovable-uploads/5da0dd28-0965-46da-952b-1a513a32e18d.png', score: 26 },
    { id: '3', name: 'zx.ll', avatar: '/lovable-uploads/5da0dd28-0965-46da-952b-1a513a32e18d.png', score: 16 },
    { id: '4', name: 'Guest-7098091', avatar: '/lovable-uploads/5da0dd28-0965-46da-952b-1a513a32e18d.png', score: 0 }
  ];

  // Show loading screen first
  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  if (currentPage === 'game') {
    return (
      <GameTable 
        players={samplePlayers}
        onBackToMenu={() => setCurrentPage('home')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      <Header 
        coins={playerStats.coins}
        diamonds={playerStats.diamonds}
        isVip={playerStats.isVip}
        onSettingsClick={() => setShowSettingsModal(true)}
      />
      
      {/* Navigation */}
      <div className="bg-slate-700 p-2">
        <div className="flex justify-center space-x-1">
          {[
            { id: 'home', icon: '🏠', label: 'Home' },
            { id: 'diwaniya', icon: '🏛️', label: 'Diwaniya' },
            { id: 'friends', icon: '👥', label: 'Friends' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setCurrentPage(tab.id as any)}
              className={`p-3 rounded-lg transition-colors ${
                currentPage === tab.id ? 'bg-blue-600' : 'bg-slate-600 hover:bg-slate-500'
              }`}
            >
              <div className="text-2xl">{tab.icon}</div>
            </button>
          ))}
          <button 
            onClick={() => openStore('coins')}
            className="p-3 bg-slate-600 hover:bg-slate-500 rounded-lg transition-colors"
          >
            <div className="text-2xl">🛒</div>
          </button>
          <button 
            onClick={() => openStore('dinars')}
            className="p-3 bg-slate-600 hover:bg-slate-500 rounded-lg transition-colors"
          >
            <div className="text-2xl">💎</div>
          </button>
          <button 
            onClick={() => setShowVipModal(true)}
            className="p-3 bg-yellow-600 hover:bg-yellow-500 rounded-lg transition-colors"
          >
            <Crown className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Page Content */}
      {currentPage === 'home' && (
        <div className="p-6">
          {/* Daily Challenge Section */}
          <div className="bg-orange-600 rounded-xl p-6 mb-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Jun 25</h2>
                <div className="text-sm opacity-90">FINISHED</div>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-sm">BEST STREAK</span>
                  <div className="bg-red-500 rounded-full px-2 py-1 text-xs">0</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">213</div>
                <div className="text-sm">REWARD</div>
                <div className="text-yellow-300">🪙 0</div>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-bold mb-2">👑 Top Players</h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>⭐ boanas83</span>
                  <span>29</span>
                </div>
                <div className="flex justify-between">
                  <span>⭐ betonmylife</span>
                  <span>28</span>
                </div>
                <div className="flex justify-between">
                  <span>⭐ dalal.90</span>
                  <span>20</span>
                </div>
              </div>
            </div>
          </div>

          {/* Game Modes Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <GameModeCard
              title="Multiplayer"
              playerCount="826 PLAYERS"
              bgColor="bg-blue-600"
              icon={<Users className="w-12 h-12" />}
              onClick={() => handleJoinGame('Multiplayer')}
            />
            <GameModeCard
              title="Play with Friends"
              bgColor="bg-green-600"
              icon={<Users className="w-12 h-12" />}
              onClick={() => handleJoinGame('Play with Friends')}
            />
            <GameModeCard
              title="Practice"
              bgColor="bg-purple-600"
              icon={<User className="w-12 h-12" />}
              onClick={() => handleJoinGame('Practice')}
            />
            <GameModeCard
              title="Quick Play"
              subtitle="Join instantly"
              bgColor="bg-blue-500"
              icon={<span className="text-4xl">⚡</span>}
              onClick={() => handleJoinGame('Quick Play')}
            />
          </div>
        </div>
      )}

      {currentPage === 'diwaniya' && (
        <DiwaniyaPage
          onJoinDiwaniya={(id) => toast.info(`Joining Diwaniya: ${id}`)}
          onCreateDiwaniya={() => toast.info('Creating new Diwaniya...')}
        />
      )}

      {currentPage === 'friends' && <FriendsPage />}

      {/* Modals */}
      <VipModal
        isOpen={showVipModal}
        onClose={() => setShowVipModal(false)}
        onSubscribe={handleSubscribe}
      />
      
      <StoreModal
        isOpen={showStoreModal}
        onClose={() => setShowStoreModal(false)}
        storeType={storeType}
      />
      
      <SettingsModal
        isOpen={showSettingsModal}
        onClose={() => setShowSettingsModal(false)}
        onLogout={handleLogout}
      />
    </div>
  );
};

export default Index;
