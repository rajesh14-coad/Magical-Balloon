import React from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';
import WhatsAppIcon from './WhatsAppIcon';

/**
 * Mobile-Only Sticky Action Bar (Call & WhatsApp Only)
 * High-conversion thumb-friendly action bar.
 * Replaces the 5-tab navbar with direct 1-tap Call and authentic WhatsApp actions.
 * STRICTLY ZERO BLUE
 */
export default function BottomNav() {
  return (
    <nav 
      aria-label="Mobile Quick Action Bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-2.5 sm:p-3 bg-white/95 dark:bg-[#0A0B0E]/95 backdrop-blur-lg border-t border-zinc-200/80 dark:border-white/10 shadow-[0_-4px_25px_rgba(0,0,0,0.1)] transition-colors duration-300"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        
        {/* 1. Direct Phone Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          aria-label="Call Magical Balloon Decor"
          className="flex items-center justify-center gap-2 py-3 px-3.5 rounded-2xl font-bold text-xs sm:text-sm bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 active:scale-95 transition-all shadow-sm border border-zinc-800 dark:border-white/20 select-none"
        >
          <Phone className="w-4 h-4 text-[#FF7722] fill-current shrink-0" />
          <span>Call Now</span>
        </a>

        {/* 2. Direct WhatsApp Button with Official WhatsApp Icon */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book on WhatsApp"
          className="flex items-center justify-center gap-2 py-3 px-3.5 rounded-2xl font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white active:scale-95 transition-all shadow-md shadow-[#25D366]/35 select-none"
        >
          <WhatsAppIcon className="w-4.5 h-4.5 fill-current shrink-0" />
          <span>WhatsApp</span>
        </a>

      </div>
    </nav>
  );
}
