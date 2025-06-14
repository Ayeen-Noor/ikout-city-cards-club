
import React, { useState } from 'react';

const FriendsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'friends' | 'pending'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = [
    { id: 'all', label: 'All', bgColor: 'bg-blue-600' },
    { id: 'friends', label: 'My Friends', bgColor: 'bg-blue-600' },
    { id: 'pending', label: 'Pending', bgColor: 'bg-blue-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-800 rounded-xl p-6">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search Players"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
            />
            <div className="flex space-x-2">
              <span className="text-white font-bold self-center">Filter By</span>
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id as any)}
                  className={`${
                    activeFilter === filter.id ? filter.bgColor : 'bg-gray-600'
                  } text-white px-4 py-2 rounded-lg font-bold transition-colors hover:opacity-80`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Empty State */}
          <div className="text-center py-16">
            <div className="text-gray-400 text-lg mb-4">
              You haven't added any friend yet. Use the search bar above to send friend requests.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsPage;
