import React, { useState } from 'react';
import { LumiereButton } from '../lumiere/LumiereButton';
import { LumiereTabBar } from '../lumiere/LumiereTabBar';
import { Home, User, Settings, Grid } from 'lucide-react';

export const MobileExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabItems = [
    { id: 'home', icon: <Home size={20} /> },
    { id: 'profile', icon: <User size={20} /> },
    { id: 'settings', icon: <Settings size={20} /> },
    { id: 'grid', icon: <Grid size={20} /> }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white p-8 rounded-2xl shadow-[var(--shadow-card)] border border-[var(--lumiere-gold)]">
          <h2 className="font-heading text-3xl text-[var(--lumiere-navy)] mb-8 pb-4 border-b-2 border-[var(--lumiere-gold)]">
            Mobile App Example
          </h2>
          
          <div className="flex justify-center">
            <div className="bg-[var(--lumiere-grey)] p-6 rounded-xl">
              {/* Phone Frame */}
              <div className="w-80 h-[600px] bg-[var(--lumiere-navy)] rounded-[30px] p-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                {/* Screen */}
                <div className="bg-[var(--lumiere-ivory)] h-full rounded-[20px] p-6 flex flex-col justify-between">
                  {/* Content */}
                  <div className="text-center flex-1 flex flex-col justify-center">
                    <h4 className="font-heading text-2xl text-[var(--lumiere-navy)] mb-4">
                      Welcome to Lumière
                    </h4>
                    <p className="text-[var(--lumiere-navy)] opacity-80 mb-8">
                      Experience elegant French-inspired design
                    </p>
                    <div className="space-y-4">
                      <LumiereButton variant="primary" className="w-full">
                        Sign In
                      </LumiereButton>
                      <LumiereButton variant="secondary" className="w-full">
                        Create Account
                      </LumiereButton>
                    </div>
                  </div>
                  
                  {/* Tab Bar */}
                  <div className="mt-6">
                    <LumiereTabBar
                      items={tabItems}
                      activeTab={activeTab}
                      onTabChange={setActiveTab}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};