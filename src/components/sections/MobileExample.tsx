import React, { useState } from 'react';
import { LumiereButton } from '../lumiere/LumiereButton';
import { LumiereTabBar } from '../lumiere/LumiereTabBar';
import { Home, User, Settings, Grid } from 'lucide-react';

export const MobileExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabItems = [
    { id: 'home', label: 'Home' },
    { id: 'profile', label: 'Profile' },
    { id: 'settings', label: 'Settings' },
    { id: 'grid', label: 'Grid' }
  ];

  return (
    <section id="mobile-example" className="py-16">
      <div className="px-6 mx-auto max-w-6xl">
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
                  <div className="flex flex-col flex-1 justify-center text-center">
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
                      tabs={tabItems}
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