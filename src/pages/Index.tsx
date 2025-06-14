
import React, { useState } from 'react';
import Header from '../components/Header';
import GameModeCard from '../components/GameModeCard';
import VipModal from '../components/VipModal';
import StoreModal from '../components/StoreModal';
import SettingsModal from '../components/SettingsModal';
import DiwaniyaPage from '../components/DiwaniyaPage';
import FriendsPage from '../components/FriendsPage';
import LeaderboardPage from '../components/LeaderboardPage';
import CartPage from '../components/CartPage';
import GameTable from '../components/GameTable';
import LoadingScreen from '../components/LoadingScreen';
import { Users, User } from 'lucide-react';
import { toast } from 'sonner';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<'home' | 'leaderboard' | 'friends' | 'cart' | 'diamonds' | 'vip' | 'game'>('home');
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
  };

  const openStore = (type: 'coins' | 'dinars') => {
    setStoreType(type);
    setShowStoreModal(true);
  };

  const handleJoinGame = (gameMode: string) => {
    toast.info(`Joining ${gameMode}...`);
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
    <div className="min-h-screen relative">
      {/* Background Image for all pages */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/feae5c01-726d-470d-9257-891aebf098a1.png')`
        }}
      />
      
      {/* Overlay for better content readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content with relative positioning */}
      <div className="relative z-10">
        <Header 
          coins={playerStats.coins}
          diamonds={playerStats.diamonds}
          isVip={playerStats.isVip}
          onSettingsClick={() => setShowSettingsModal(true)}
        />
        
        {/* Navigation Bar - Top */}
        <div className="bg-slate-800/90 p-4">
          <div className="flex justify-center items-center space-x-6">
            <button
              onClick={() => setCurrentPage('home')}
              className={`flex flex-col items-center p-3 rounded-lg transition-colors ${
                currentPage === 'home' ? 'bg-blue-600' : 'hover:bg-slate-600'
              }`}
            >
              <img src="/lovable-uploads/b2adab6d-401e-41a3-8626-f31d108960ea.png" alt="Home" className="w-8 h-8 mb-1" />
              <span className="text-white text-sm">Home</span>
            </button>
            
            <button
              onClick={() => setCurrentPage('leaderboard')}
              className={`flex flex-col items-center p-3 rounded-lg transition-colors ${
                currentPage === 'leaderboard' ? 'bg-blue-600' : 'hover:bg-slate-600'
              }`}
            >
              <img src="/lovable-uploads/908a1157-e33a-40d5-9ae3-0195168c1afc.png" alt="Leaderboard" className="w-8 h-8 mb-1" />
              <span className="text-white text-sm">Leaderboard</span>
            </button>
            
            <button
              onClick={() => setCurrentPage('friends')}
              className={`flex flex-col items-center p-3 rounded-lg transition-colors ${
                currentPage === 'friends' ? 'bg-blue-600' : 'hover:bg-slate-600'
              }`}
            >
              <img src="/lovable-uploads/20ea8668-0b88-42f9-ba1f-fc7efeea4fd3.png" alt="Friends" className="w-8 h-8 mb-1" />
              <span className="text-white text-sm">Friends</span>
            </button>
            
            <button
              onClick={() => setCurrentPage('cart')}
              className={`flex flex-col items-center p-3 rounded-lg transition-colors ${
                currentPage === 'cart' ? 'bg-blue-600' : 'hover:bg-slate-600'
              }`}
            >
              <img src="/lovable-uploads/fafbc279-c169-43da-9930-e9a5197bf124.png" alt="Cart" className="w-8 h-8 mb-1" />
              <span className="text-white text-sm">Cart</span>
            </button>
            
            <button
              onClick={() => setCurrentPage('diamonds')}
              className={`flex flex-col items-center p-3 rounded-lg transition-colors ${
                currentPage === 'diamonds' ? 'bg-blue-600' : 'hover:bg-slate-600'
              }`}
            >
              <img src="/lovable-uploads/5381f256-01c9-4696-8ffe-99b59bc60c54.png" alt="Diamonds" className="w-8 h-8 mb-1" />
              <span className="text-white text-sm">Diamonds</span>
            </button>
            
            <button
              onClick={() => setCurrentPage('vip')}
              className={`flex flex-col items-center p-3 rounded-lg transition-colors ${
                currentPage === 'vip' ? 'bg-yellow-600' : 'hover:bg-yellow-500'
              }`}
            >
              <img src="/lovable-uploads/867f4545-9d44-407e-91dc-ed688ca0f25a.png" alt="VIP" className="w-8 h-8 mb-1" />
              <span className="text-white text-sm">VIP</span>
            </button>
          </div>
        </div>

        {/* Page Content */}
        {currentPage === 'home' && (
          <div className="p-6">
            {/* Daily Challenge Section */}
            <div className="bg-orange-600/90 rounded-xl p-6 mb-6 text-white backdrop-blur-sm">
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

        {currentPage === 'leaderboard' && <LeaderboardPage />}
        {currentPage === 'friends' && <FriendsPage />}
        {currentPage === 'cart' && <CartPage />}
        {currentPage === 'diamonds' && (
          <div className="p-6">
            <div className="bg-blue-600/90 rounded-xl p-6 text-white backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-4 text-center">💎 Diamonds Store</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-500/50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">💎</div>
                  <div className="text-xl font-bold">100 Diamonds</div>
                  <div className="text-sm">$4.99</div>
                  <button className="mt-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition-colors">
                    Buy Now
                  </button>
                </div>
                <div className="bg-blue-500/50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">💎💎</div>
                  <div className="text-xl font-bold">500 Diamonds</div>
                  <div className="text-sm">$19.99</div>
                  <button className="mt-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition-colors">
                    Buy Now
                  </button>
                </div>
                <div className="bg-blue-500/50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">💎💎💎</div>
                  <div className="text-xl font-bold">1000 Diamonds</div>
                  <div className="text-sm">$34.99</div>
                  <button className="mt-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {currentPage === 'vip' && (
          <div className="p-6">
            <div className="bg-gradient-to-r from-yellow-600/90 to-orange-600/90 rounded-xl p-6 text-white backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-4 text-center">👑 VIP Membership</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-yellow-500/50 p-6 rounded-lg text-center">
                  <div className="text-3xl mb-4">👑</div>
                  <h3 className="text-xl font-bold mb-2">Weekly VIP</h3>
                  <div className="text-2xl font-bold mb-4">$2.99/week</div>
                  <ul className="text-sm space-y-2 mb-4">
                    <li>✓ Double coins from games</li>
                    <li>✓ Exclusive VIP tables</li>
                    <li>✓ Priority matchmaking</li>
                    <li>✓ Special VIP badge</li>
                  </ul>
                  <button 
                    onClick={() => handleSubscribe('weekly')}
                    className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-colors"
                  >
                    Subscribe Weekly
                  </button>
                </div>
                <div className="bg-yellow-500/50 p-6 rounded-lg text-center">
                  <div className="text-3xl mb-4">👑👑</div>
                  <h3 className="text-xl font-bold mb-2">Monthly VIP</h3>
                  <div className="text-2xl font-bold mb-4">$9.99/month</div>
                  <ul className="text-sm space-y-2 mb-4">
                    <li>✓ All Weekly benefits</li>
                    <li>✓ Triple coins from games</li>
                    <li>✓ Exclusive monthly tournaments</li>
                    <li>✓ Custom avatar frames</li>
                    <li>✓ Free daily diamonds</li>
                  </ul>
                  <button 
                    onClick={() => handleSubscribe('monthly')}
                    className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-colors"
                  >
                    Subscribe Monthly
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

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
    </div>
  );
};

export default Index;
