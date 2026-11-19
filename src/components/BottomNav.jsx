import React from 'react';
import { Home, Sparkles, Phone, MessageCircle, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';
import { useNavigation } from '../utils/navigation';

/**
 * Mobile App Bottom Navigation Bar for One-Page Smooth Scroll SPA
 * Features:
 * - 1-Tap smooth scrolling to sections without page reload
 * - Unified Services & Gallery tab
 * - 1-Tap Direct Call & Contact
 * - Center elevated WhatsApp Quick-Book action pill
 * - Live active tab indicator tracking current scroll position
 * - STRICTLY ZERO BLUE
 */
export default function BottomNav() {
  const { activeSection, scrollToSection } = useNavigation();

  return (
    <nav 
      aria-label="Mobile Navigation Bar" 
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-bottom-nav"
    >
      <div className="max-w-md mx-auto px-3 py-2 flex items-center justify-around">
        
        {/* Tab 1: Home */}
        <button
          onClick={() => scrollToSection('home')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all duration-200 active:scale-90 cursor-pointer ${
            activeSection === 'home'
              ? 'text-[#138808] dark:text-[#22B814]'
              : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
          }`}
        >
          <div className={`relative p-1 rounded-xl transition-colors ${activeSection === 'home' ? 'bg-[#138808]/15' : ''}`}>
            <Home className={`w-5 h-5 ${activeSection === 'home' ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
            {activeSection === 'home' && (
              <span className="absolute -top-0.5 right-1 w-1.5 h-1.5 rounded-full bg-[#138808] animate-pulse" />
            )}
          </div>
          <span className={`text-[10px] tracking-tight mt-0.5 ${activeSection === 'home' ? 'font-bold' : 'font-medium'}`}>
            Home
          </span>
        </button>

        {/* Tab 2: Unified Services & Gallery */}
        <button
          onClick={() => scrollToSection('services')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all duration-200 active:scale-90 cursor-pointer ${
            activeSection === 'services'
              ? 'text-[#138808] dark:text-[#22B814]'
              : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
          }`}
        >
          <div className={`relative p-1 rounded-xl transition-colors ${activeSection === 'services' ? 'bg-[#138808]/15' : ''}`}>
            <Sparkles className={`w-5 h-5 ${activeSection === 'services' ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
            {activeSection === 'services' && (
              <span className="absolute -top-0.5 right-1 w-1.5 h-1.5 rounded-full bg-[#138808] animate-pulse" />
            )}
          </div>
          <span className={`text-[10px] tracking-tight mt-0.5 ${activeSection === 'services' ? 'font-bold' : 'font-medium'}`}>
            Services
          </span>
        </button>

        {/* Center Floating WhatsApp Action Button */}
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

        {/* Tab 3: Direct Phone Call */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          aria-label="Direct Phone Call"
          className="flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all duration-200 active:scale-90 text-zinc-500 dark:text-zinc-400 hover:text-[#138808]"
        >
          <div className="relative p-1 rounded-xl">
            <Phone className="w-5 h-5 stroke-[1.8]" />
          </div>
          <span className="text-[10px] tracking-tight mt-0.5 font-medium">
            Call
          </span>
        </a>

        {/* Tab 4: Contact & Venue */}
        <button
          onClick={() => scrollToSection('contact')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all duration-200 active:scale-90 cursor-pointer ${
            activeSection === 'contact'
              ? 'text-[#138808] dark:text-[#22B814]'
              : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
          }`}
        >
          <div className={`relative p-1 rounded-xl transition-colors ${activeSection === 'contact' ? 'bg-[#138808]/15' : ''}`}>
            <MapPin className={`w-5 h-5 ${activeSection === 'contact' ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
            {activeSection === 'contact' && (
              <span className="absolute -top-0.5 right-1 w-1.5 h-1.5 rounded-full bg-[#138808] animate-pulse" />
            )}
          </div>
          <span className={`text-[10px] tracking-tight mt-0.5 ${activeSection === 'contact' ? 'font-bold' : 'font-medium'}`}>
            Contact
          </span>
        </button>

      </div>
    </nav>
  );
}
