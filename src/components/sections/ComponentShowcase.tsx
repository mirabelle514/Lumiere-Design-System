import React, { useState } from 'react';
import { LumiereButton } from '../lumiere/LumiereButton';
import { LumiereCard, LumiereCardTitle, LumiereCardContent } from '../lumiere/LumiereCard';
import { LumiereInput } from '../lumiere/LumiereInput';
import { LumiereTextarea } from '../lumiere/LumiereTextarea';
import { LumiereToggle } from '../lumiere/LumiereToggle';
import { LumiereTabBar } from '../lumiere/LumiereTabBar';
import { LumiereModal } from '../lumiere/LumiereModal';

export const ComponentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [toggleState, setToggleState] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const tabItems = [
    { id: 'home', label: 'Home' },
    { id: 'profile', label: 'Profile' },
    { id: 'settings', label: 'Settings' },
    { id: 'grid', label: 'Grid' }
  ];

  return (
    <div data-section="component-showcase" className="space-y-16">
      {/* Buttons Section */}
      <section className="py-16">
        <div className="px-6 mx-auto max-w-6xl">
          <div className="bg-white p-8 rounded-2xl shadow-[var(--shadow-card)] border border-[var(--lumiere-gold)]">
            <h2 className="font-heading text-3xl text-[var(--lumiere-navy)] mb-8 pb-4 border-b-2 border-[var(--lumiere-gold)]">
              Buttons
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <h4 className="font-heading text-lg text-[var(--lumiere-navy)] mb-4">Primary Button</h4>
                <LumiereButton variant="primary" className="w-full">
                  Get Started
                </LumiereButton>
                <small className="block mt-2 text-gray-600">Navy background, white text - Primary actions</small>
              </div>
              <div>
                <h4 className="font-heading text-lg text-[var(--lumiere-navy)] mb-4">Secondary Button</h4>
                <LumiereButton variant="secondary" className="w-full">
                  Learn More
                </LumiereButton>
                <small className="block mt-2 text-gray-600">Gold border, ivory background - Secondary actions</small>
              </div>
              <div>
                <h4 className="font-heading text-lg text-[var(--lumiere-navy)] mb-4">Tertiary Button</h4>
                <LumiereButton variant="tertiary" className="w-full">
                  Cancel
                </LumiereButton>
                <small className="block mt-2 text-gray-600">Text only - Tertiary actions</small>
              </div>
              <div>
                <h4 className="font-heading text-lg text-[var(--lumiere-navy)] mb-4">Disabled Button</h4>
                <LumiereButton variant="primary" disabled className="w-full">
                  Disabled
                </LumiereButton>
                <small className="block mt-2 text-gray-600">Grey background - Inactive state</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Input Fields Section */}
      <section className="py-16">
        <div className="px-6 mx-auto max-w-6xl">
          <div className="bg-white p-8 rounded-2xl shadow-[var(--shadow-card)] border border-[var(--lumiere-gold)] text-center">
            <h2 className="font-heading text-3xl text-[var(--lumiere-navy)] mb-6 pb-4 border-b-2 border-[var(--lumiere-gold)]">
              Input Fields
            </h2>
            <div className="max-w-lg mx-auto text-left space-y-5 pt-2">
              <LumiereInput
                label="Email Address"
                type="email"
                placeholder="Enter your email"
              />
              <LumiereInput
                label="Password"
                type="password"
                placeholder="Enter your password"
              />
              <LumiereTextarea
                label="Message"
                rows={4}
                placeholder="Enter your message"
              />
              <div className="flex gap-3 items-center justify-center pt-2">
                <LumiereToggle
                  variant="switch"
                  pressed={toggleState}
                  onClick={() => setToggleState(!toggleState)}
                  aria-label="Enable Notifications"
                />
                <span className="text-sm text-[var(--lumiere-navy)]">Enable Notifications</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-16">
        <div className="px-6 mx-auto max-w-6xl">
          <div className="bg-white p-8 rounded-2xl shadow-[var(--shadow-card)] border border-[var(--lumiere-gold)]">
            <h2 className="font-heading text-3xl text-[var(--lumiere-navy)] mb-8 pb-4 border-b-2 border-[var(--lumiere-gold)]">
              Cards
            </h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <LumiereCard variant="standard">
                <LumiereCardTitle>Standard Card</LumiereCardTitle>
                <LumiereCardContent>
                  This is a standard card component with ivory background and gold border. 
                  Perfect for content sections and information display.
                </LumiereCardContent>
              </LumiereCard>
              <LumiereCard variant="featured">
                <LumiereCardTitle>Featured Card</LumiereCardTitle>
                <LumiereCardContent>
                  This is a featured card with gradient background and enhanced styling. 
                  Use for highlighting important content or premium features.
                </LumiereCardContent>
              </LumiereCard>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-16">
        <div className="px-6 mx-auto max-w-6xl">
          <div className="bg-white p-8 rounded-2xl shadow-[var(--shadow-card)] border border-[var(--lumiere-gold)] text-center">
            <h2 className="font-heading text-3xl text-[var(--lumiere-navy)] mb-8 pb-4 border-b-2 border-[var(--lumiere-gold)]">
              Navigation
            </h2>
            <LumiereTabBar
              tabs={tabItems}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              className="max-w-md mx-auto"
            />
            <small className="block mt-4 text-gray-600">
              Navy background with white active indicators for better contrast
            </small>
          </div>
        </div>
      </section>

      {/* Modal Section */}
      <section className="py-16">
        <div className="px-6 mx-auto max-w-6xl">
          <div className="bg-white p-8 rounded-2xl shadow-[var(--shadow-card)] border border-[var(--lumiere-gold)]">
            <h2 className="font-heading text-3xl text-[var(--lumiere-navy)] mb-8 pb-4 border-b-2 border-[var(--lumiere-gold)]">
              Modal Example
            </h2>
            <LumiereButton onClick={() => setModalOpen(true)}>
              Open Modal
            </LumiereButton>
            
            <LumiereModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              title="Confirmation"
            >
              <div className="text-center">
                <p className="text-[var(--lumiere-navy)] mb-6">
                  Are you sure you want to delete this item? This action cannot be undone.
                </p>
                <div className="space-y-3">
                  <LumiereButton 
                    variant="primary" 
                    className="w-full"
                    onClick={() => setModalOpen(false)}
                  >
                    Delete
                  </LumiereButton>
                  <LumiereButton 
                    variant="secondary" 
                    className="w-full"
                    onClick={() => setModalOpen(false)}
                  >
                    Cancel
                  </LumiereButton>
                </div>
              </div>
            </LumiereModal>
          </div>
        </div>
      </section>
    </div>
  );
};