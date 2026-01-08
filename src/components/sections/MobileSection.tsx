import React, { useState } from 'react';
import { Search, Filter, MoreVertical, ChevronRight, Star, Heart } from 'lucide-react';

export const MobileSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section data-section="mobile-patterns" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white p-8 rounded-2xl shadow-[var(--shadow-card)] border border-[var(--lumiere-gold)]">
          <h2 className="font-heading text-3xl text-[var(--lumiere-navy)] mb-8 pb-4 border-b-2 border-[var(--lumiere-gold)]">
            Mobile UI Patterns
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Search Pattern */}
            <div className="space-y-4">
              <h3 className="font-heading text-xl text-[var(--lumiere-navy)]">Search & Filter</h3>
              <div className="bg-[var(--lumiere-grey)] p-4 rounded-lg">
                <div className="flex gap-2 mb-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--lumiere-navy)] opacity-50" size={16} />
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-[var(--lumiere-gold)] rounded-lg bg-[var(--lumiere-ivory)] text-[var(--lumiere-navy)]"
                    />
                  </div>
                  <button className="p-3 bg-[var(--lumiere-navy)] text-white rounded-lg">
                    <Filter size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* List Pattern */}
            <div className="space-y-4">
              <h3 className="font-heading text-xl text-[var(--lumiere-navy)]">List Items</h3>
              <div className="bg-[var(--lumiere-grey)] p-4 rounded-lg space-y-2">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center justify-between p-3 bg-white rounded-lg border border-[var(--lumiere-gold)]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[var(--lumiere-sage)] rounded-full"></div>
                      <div>
                        <div className="font-heading text-sm text-[var(--lumiere-navy)]">List Item {item}</div>
                        <div className="text-xs text-[var(--lumiere-navy)] opacity-70">Subtitle text</div>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-[var(--lumiere-navy)] opacity-50" />
                  </div>
                ))}
              </div>
            </div>

            {/* Card Grid Pattern */}
            <div className="space-y-4">
              <h3 className="font-heading text-xl text-[var(--lumiere-navy)]">Card Grid</h3>
              <div className="bg-[var(--lumiere-grey)] p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-white rounded-lg p-3 border border-[var(--lumiere-gold)]">
                      <div className="w-full h-20 bg-[var(--lumiere-sage)] rounded-lg mb-2"></div>
                      <div className="font-heading text-sm text-[var(--lumiere-navy)]">Card {item}</div>
                      <div className="text-xs text-[var(--lumiere-navy)] opacity-70">Description</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Sheet Pattern */}
            <div className="space-y-4">
              <h3 className="font-heading text-xl text-[var(--lumiere-navy)]">Action Sheet</h3>
              <div className="bg-[var(--lumiere-grey)] p-4 rounded-lg">
                <div className="bg-white rounded-t-2xl p-4 border border-[var(--lumiere-gold)]">
                  <div className="w-12 h-1 bg-[var(--lumiere-gold)] rounded-full mx-auto mb-4"></div>
                  <div className="space-y-2">
                    <button className="w-full p-3 text-left text-[var(--lumiere-navy)] hover:bg-[var(--lumiere-grey)] rounded-lg">
                      Share
                    </button>
                    <button className="w-full p-3 text-left text-[var(--lumiere-navy)] hover:bg-[var(--lumiere-grey)] rounded-lg">
                      Edit
                    </button>
                    <button className="w-full p-3 text-left text-red-600 hover:bg-[var(--lumiere-grey)] rounded-lg">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Sheet Navigation */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="font-heading text-xl text-[var(--lumiere-navy)]">Bottom Navigation</h3>
              <div className="bg-[var(--lumiere-grey)] p-4 rounded-lg">
                <div className="bg-white rounded-lg p-4 border border-[var(--lumiere-gold)]">
                  <div className="flex justify-around">
                    {[
                      { icon: <Search size={20} />, label: 'Discover', active: true },
                      { icon: <Heart size={20} />, label: 'Favorites', active: false },
                      { icon: <Star size={20} />, label: 'Reviews', active: false },
                      { icon: <MoreVertical size={20} />, label: 'More', active: false }
                    ].map((item, index) => (
                      <div key={index} className={`flex flex-col items-center p-2 rounded-lg ${item.active ? 'text-[var(--lumiere-navy)]' : 'text-[var(--lumiere-navy)] opacity-50'}`}>
                        {item.icon}
                        <span className="text-xs mt-1">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-8 p-4 bg-[var(--lumiere-grey)] rounded-lg">
            <h4 className="font-heading text-lg text-[var(--lumiere-navy)] mb-2">Mobile Pattern Guidelines</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[var(--lumiere-navy)] opacity-80">
              <div>
                <strong>Touch Interactions:</strong>
                <ul className="mt-1 space-y-1">
                  <li>Use swipe gestures for navigation</li>
                  <li>Implement pull-to-refresh</li>
                  <li>Add haptic feedback for actions</li>
                </ul>
              </div>
              <div>
                <strong>Content Organization:</strong>
                <ul className="mt-1 space-y-1">
                  <li>Prioritize content hierarchy</li>
                  <li>Use progressive disclosure</li>
                  <li>Implement infinite scroll for lists</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// (intentionally no `id` attributes; navigation uses `data-section` selectors)