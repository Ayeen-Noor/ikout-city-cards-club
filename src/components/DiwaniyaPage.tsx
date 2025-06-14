
import React from 'react';
import { ArrowDown, Crown } from 'lucide-react';

interface DiwaniyaPageProps {
  onJoinDiwaniya: (id: string) => void;
  onCreateDiwaniya: () => void;
}

const DiwaniyaPage: React.FC<DiwaniyaPageProps> = ({ onJoinDiwaniya, onCreateDiwaniya }) => {
  const topDiwaniyas = [
    { rank: 1, name: "Number-1", shield: "🛡️", score: 370700 },
    { rank: 2, name: "سعود", shield: "♠️", score: 356200 },
    { rank: 3, name: "Number-2", shield: "🛡️", score: 344700 }
  ];

  const availableDiwaniyas = [
    { name: "احصوص", shield: "♠️", members: 0 },
    { name: "منها ولا كنت", shield: "🛡️", members: 2500 },
    { name: "بلهايل", shield: "⚠️", members: 7300 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Diwaniyas */}
          <div className="bg-slate-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Top Diwaniyas</h2>
              <div className="bg-blue-500 p-2 rounded-full">
                <Crown className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="space-y-3">
              {topDiwaniyas.map((diwaniya) => (
                <div key={diwaniya.rank} className="bg-gray-700 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center text-black font-bold">
                      {diwaniya.rank}
                    </div>
                    <div className="text-2xl">{diwaniya.shield}</div>
                    <span className="text-white font-bold">{diwaniya.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Crown className="w-4 h-4 text-yellow-400" />
                    <span className="text-white font-bold">{diwaniya.score.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Join a Diwaniya */}
          <div className="bg-slate-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Join a Diwaniya</h2>
              <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white font-bold transition-colors">
                Discover More
              </button>
            </div>
            <div className="space-y-3">
              {availableDiwaniyas.map((diwaniya, index) => (
                <div key={index} className="bg-gray-700 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{diwaniya.shield}</div>
                    <div>
                      <div className="text-white font-bold">{diwaniya.name}</div>
                      <div className="text-gray-400 text-sm">{diwaniya.members} members</div>
                    </div>
                  </div>
                  <button 
                    onClick={() => onJoinDiwaniya(diwaniya.name)}
                    className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg text-white font-bold transition-colors"
                  >
                    Join
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Invites */}
          <div className="bg-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Invites</h2>
            <div className="bg-blue-600 rounded-lg p-8 text-center">
              <div className="text-white mb-4">No pending invite.</div>
              <div className="text-gray-300 text-sm">
                When someone invites you to their Diwaniya, the request will show here.
              </div>
            </div>
          </div>

          {/* Create */}
          <div className="bg-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Create</h2>
            <div className="bg-blue-600 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <div className="text-white font-bold mb-4">Create a Diwaniya</div>
              <button 
                onClick={onCreateDiwaniya}
                className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg text-white font-bold transition-colors"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiwaniyaPage;
