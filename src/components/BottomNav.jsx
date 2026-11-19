import React from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';
import WhatsAppIcon from './WhatsAppIcon';

/**
 * Mobile-Only Sticky Action Bar (Call & WhatsApp Only)
 * High-conversion thumb-friendly action bar.
 * Designed to fit 100% cleanly on ALL mobile screens (from 320px ultra-compact to large tablets).
 * Uses flex-1 with min-w-0 so both buttons get exactly 50% width and can NEVER overflow.
 * Includes iOS/Android safe-area inset support.
 * STRICTLY ZERO BLUE
 */
export default function BottomNav() {
  return (
    <nav 
      aria-label="Mobile Quick Action Bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 w-full px-3 py-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom,0.75rem))] bg-white/95 dark:bg-[#0A0B0E]/95 backdrop-blur-lg border-t border-zinc-200/80 dark:border-white/10 shadow-[0_-4px_25px_rgba(0,0,0,0.12)] transition-colors duration-300"
      style={{ maxWidth: '100vw', boxSizing: 'border-box' }}
    >
      <div className="flex items-center gap-2 max-w-sm mx-auto w-full">
        
        {/* 1. Direct Phone Call Button (Exactly 50% width) */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          aria-label="Call Magical Balloon Decor"
          className="flex-1 min-w-0 flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl font-bold text-xs bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 active:scale-95 transition-all shadow-sm border border-zinc-800 dark:border-white/20 select-none overflow-hidden cursor-pointer"
        >
          <Phone className="w-4 h-4 text-[#FF7722] fill-current shrink-0" />
          <span className="truncate">Call Now</span>
        </a>

        {/* 2. Direct WhatsApp Button with Official WhatsApp Icon (Exactly 50% width) */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book on WhatsApp"
          className="flex-1 min-w-0 flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl font-bold text-xs bg-[#25D366] hover:bg-[#20bd5a] text-white active:scale-95 transition-all shadow-md shadow-[#25D366]/35 select-none overflow-hidden cursor-pointer"
        >
          <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" size={16} />
          <span className="truncate">WhatsApp</span>
        </a>

      </div>
    </nav>
  );
}
