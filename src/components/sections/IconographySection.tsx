import React from 'react';
import { 
  Home, User, Settings, Search, Heart, Star, 
  ShoppingCart, Bell, Mail, Phone, Camera, Map,
  Plus, Minus, X, Check,
  Menu, Filter, Share, Download, Upload, Edit
} from 'lucide-react';

interface IconGridProps {
  title: string;
  icons: { icon: React.ReactNode; name: string }[];
}

const IconGrid: React.FC<IconGridProps> = ({ title, icons }) => (
  <div className="mb-8">
    <h4 className="font-heading text-lg text-[var(--lumiere-navy)] mb-4 text-center">{title}</h4>
    <div className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-8 justify-items-center">
      {icons.map((item, index) => (
        <div key={index} className="flex flex-col items-center p-3 rounded-lg bg-[var(--lumiere-grey)] hover:bg-[var(--lumiere-ivory)] transition-colors">
          <div className="text-[var(--lumiere-navy)] mb-2">
            {item.icon}
          </div>
          <span className="text-xs text-[var(--lumiere-navy)] text-center">{item.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export const IconographySection: React.FC = () => {
  const navigationIcons = [
    { icon: <Home size={20} />, name: 'Home' },
    { icon: <User size={20} />, name: 'Profile' },
    { icon: <Settings size={20} />, name: 'Settings' },
    { icon: <Search size={20} />, name: 'Search' },
    { icon: <Menu size={20} />, name: 'Menu' },
    { icon: <Filter size={20} />, name: 'Filter' }
  ];

  const actionIcons = [
    { icon: <Plus size={20} />, name: 'Add' },
    { icon: <Minus size={20} />, name: 'Remove' },
    { icon: <Edit size={20} />, name: 'Edit' },
    { icon: <X size={20} />, name: 'Close' },
    { icon: <Check size={20} />, name: 'Confirm' },
    { icon: <Share size={20} />, name: 'Share' }
  ];

  const contentIcons = [
    { icon: <Heart size={20} />, name: 'Favorite' },
    { icon: <Star size={20} />, name: 'Rating' },
    { icon: <ShoppingCart size={20} />, name: 'Cart' },
    { icon: <Bell size={20} />, name: 'Notifications' },
    { icon: <Mail size={20} />, name: 'Messages' },
    { icon: <Phone size={20} />, name: 'Call' }
  ];

  const mediaIcons = [
    { icon: <Camera size={20} />, name: 'Camera' },
    { icon: <Download size={20} />, name: 'Download' },
    { icon: <Upload size={20} />, name: 'Upload' },
    { icon: <Map size={20} />, name: 'Location' }
  ];

  return (
    <section id="iconography" className="py-16">
      <div className="px-6 mx-auto max-w-6xl">
        <div className="bg-white p-8 rounded-2xl shadow-[var(--shadow-card)] border border-[var(--lumiere-gold)] text-center">
          <h2 className="font-heading text-3xl text-[var(--lumiere-navy)] mb-8 pb-4 border-b-2 border-[var(--lumiere-gold)]">
            Iconography
          </h2>
          
          <div className="mb-6">
            <p className="text-[var(--lumiere-navy)] opacity-80 mb-4">
              Our icon system uses Lucide React icons with consistent sizing and styling. 
              All icons are designed for mobile interfaces with proper touch targets and visual clarity.
            </p>
          </div>

          <IconGrid title="Navigation Icons" icons={navigationIcons} />
          <IconGrid title="Action Icons" icons={actionIcons} />
          <IconGrid title="Content Icons" icons={contentIcons} />
          <IconGrid title="Media Icons" icons={mediaIcons} />

          <div className="mt-8 p-4 bg-[var(--lumiere-grey)] rounded-lg">
            <h4 className="font-heading text-lg text-[var(--lumiere-navy)] mb-2 text-center">Icon Guidelines</h4>
            <div className="flex justify-center">
              <ul className="text-sm text-[var(--lumiere-navy)] opacity-80 space-y-1 text-left">
                <li>• Use 20px icons for standard UI elements</li>
                <li>• Use 24px icons for primary actions and navigation</li>
                <li>• Maintain 44px minimum touch target for mobile</li>
                <li>• Use consistent stroke width (2px) across all icons</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};