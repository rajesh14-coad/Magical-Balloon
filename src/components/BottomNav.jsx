import React from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';
import WhatsAppIcon from './WhatsAppIcon';

/**
 * Mobile-Only Sticky Action Bar (Call & WhatsApp Only)
 * High-conversion thumb-friendly action bar.
 * Designed to fit 100% cleanly on all screen sizes (320px to large tablets).
 * Includes iOS safe-area support so buttons are NEVER cut off by home bars.
 * STRICTLY ZERO BLUE
 */
export default function BottomNav() {
  return (
    <nav 
      aria-label="Mobile Quick Action Bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 pt-2.5 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-white/95 dark:bg-[#0A0B0E]/95 backdrop-blur-lg border-t border-zinc-200/80 dark:border-white/10 shadow-[0_-4px_25px_rgba(0,0,0,0.1)] transition-colors duration-300"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        
        {/* 1. Direct Phone Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          aria-label="Call Magical Balloon Decor"
          className="flex items-center justify-center gap-1.5 sm:gap-2 py-3 px-2 sm:px-4 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 active:scale-95 transition-all shadow-sm border border-zinc-800 dark:border-white/20 select-none min-w-0"
        >
          <Phone className="w-4 h-4 text-[#FF7722] fill-current shrink-0" />
          <span className="truncate">Call Now</span>
        </a>

        {/* 2. Direct WhatsApp Button with Official WhatsApp Icon */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book on WhatsApp"
          className="flex items-center justify-center gap-1.5 sm:gap-2 py-3 px-2 sm:px-4 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white active:scale-95 transition-all shadow-md shadow-[#25D366]/35 select-none min-w-0"
        >
          <WhatsAppIcon className="w-4.5 h-4.5 fill-current shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>

      </div>
    </nav>
  );
}
