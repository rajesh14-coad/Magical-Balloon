import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Sparkles, Image as ImageIcon, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';

/**
 * Mobile App Bottom Navigation Bar
 * Features:
 * - Native iOS/Android app-like bottom navigation dock
 * - Visible on mobile/tablet viewports (< 768px)
 * - Active tab indicator with smooth haptic-style tap feedback
 * - Center elevated WhatsApp Quick-Book action pill
 * - STRICTLY ZERO BLUE (Indian Green & Saffron accents)
 */
export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Services', path: '/services', icon: Sparkles },
    { label: 'Gallery', path: '/gallery', icon: ImageIcon },
    { label: 'Contact', path: '/contact', icon: Phone }
  ];

  return (
    <nav 
      aria-label="Mobile Navigation Bar" 
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-bottom-nav"
    >
      <div className="max-w-md mx-auto px-4 py-2 flex items-center justify-around">
        
        {/* Left 2 Tabs: Home & Services */}
        {navItems.slice(0, 2).map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all duration-200 active:scale-90 ${
                isActive
                  ? 'text-[#138808] dark:text-[#22B814]'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
              }`}
            >
              <div className={`relative p-1 rounded-xl transition-colors ${isActive ? 'bg-[#138808]/15' : ''}`}>
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
                {isActive && (
                  <span className="absolute -top-0.5 right-1 w-1.5 h-1.5 rounded-full bg-[#138808] animate-pulse" />
                )}
              </div>
              <span className={`text-[10px] tracking-tight mt-0.5 ${isActive ? 'font-bold' : 'font-medium'}`}>
                {item.label}
              </span>
            </NavLink>
          );
        })}

        {/* Center Floating WhatsApp Action Button (App Floating Action Button) */}
        <div className="relative -top-3">
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book on WhatsApp"
            className="w-13 h-13 rounded-full bg-gradient-to-tr from-[#138808] to-[#22B814] text-white flex items-center justify-center shadow-lg shadow-[#138808]/40 border-4 border-white dark:border-[#0A0B0E] active:scale-90 transition-transform animate-pulse-glow"
          >
            <MessageCircle className="w-6 h-6 fill-current" />
          </a>
        </div>

        {/* Right 2 Tabs: Gallery & Contact */}
        {navItems.slice(2, 4).map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all duration-200 active:scale-90 ${
                isActive
                  ? 'text-[#138808] dark:text-[#22B814]'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
              }`}
            >
              <div className={`relative p-1 rounded-xl transition-colors ${isActive ? 'bg-[#138808]/15' : ''}`}>
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
                {isActive && (
                  <span className="absolute -top-0.5 right-1 w-1.5 h-1.5 rounded-full bg-[#138808] animate-pulse" />
                )}
              </div>
              <span className={`text-[10px] tracking-tight mt-0.5 ${isActive ? 'font-bold' : 'font-medium'}`}>
                {item.label}
              </span>
            </NavLink>
          );
        })}

      </div>
    </nav>
  );
}
