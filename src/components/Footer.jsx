import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Clock, Heart, Sparkles, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '../utils/constants';

/**
 * Premium Bespoke Footer Component
 * Features:
 * - Subtle tricolor gradient accent line on top (Saffron, White, Indian Green)
 * - Complete verified business data from utils/constants.js
 * - Physical Address in Hyderabad
 * - Light Mode & Dark Mode elegant styling
 * - STRICTLY ZERO BLUE
 */
export default function Footer() {
  return (
    <footer className="w-full relative mt-28 bg-zinc-50/90 dark:bg-[#0A0B0E] border-t border-zinc-200/60 dark:border-white/[0.08] transition-colors duration-300">
      
      {/* Subtle Indian Tricolor Gradient Top Accent Line (1.5px) */}
      <div className="w-full h-[1.5px] bg-gradient-to-r from-[#FF7722] via-zinc-300 to-[#138808] dark:from-[#FF7722] dark:via-white/70 dark:to-[#138808]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand Info & Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF7722] via-white to-[#138808] p-[1.5px]">
                <div className="w-full h-full bg-white dark:bg-[#0A0B0E] rounded-[9px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#FF7722]" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-[#FF7722] via-[#E67E22] to-[#138808] bg-clip-text text-transparent">
                Magical Balloon Decoration
              </span>
            </Link>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed">
              {BUSINESS_INFO.tagline}. Creating breathtaking, customized balloon decor for birthdays, anniversaries, corporate launches, and intimate celebrations across Hyderabad.
            </p>

            <div className="flex items-center gap-2.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
              <Clock className="w-4 h-4 text-[#FF7722] shrink-0" />
              <span>{BUSINESS_INFO.openingHours}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7722]"></span>
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-zinc-600 hover:text-[#FF7722] dark:text-zinc-400 dark:hover:text-[#FFA059] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-[#FF7722]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact & WhatsApp (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#138808]"></span>
              Direct Support
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 text-sm text-zinc-700 hover:text-[#FF7722] dark:text-zinc-300 dark:hover:text-[#FFA059] transition-colors group"
              >
                <div className="p-2 rounded-lg bg-zinc-200/60 dark:bg-white/[0.05] group-hover:bg-[#FF7722]/10 transition-colors">
                  <Phone className="w-4 h-4 text-[#FF7722]" />
                </div>
                <span className="font-medium text-xs sm:text-sm">{BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-zinc-700 hover:text-[#138808] dark:text-zinc-300 dark:hover:text-[#22B814] transition-colors group"
              >
                <div className="p-2 rounded-lg bg-zinc-200/60 dark:bg-white/[0.05] group-hover:bg-[#138808]/10 transition-colors">
                  <MessageCircle className="w-4 h-4 text-[#138808]" />
                </div>
                <span className="font-medium text-xs sm:text-sm">WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Col 4: Physical Address (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500"></span>
              Workshop & Address
            </h4>
            <div className="flex items-start gap-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              <div className="p-2 rounded-lg bg-zinc-200/60 dark:bg-white/[0.05] shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-[#138808]" />
              </div>
              <p className="font-normal select-all">
                {BUSINESS_INFO.address}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="mt-14 pt-6 border-t border-zinc-200/70 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-medium">
            Handcrafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for celebrations in Hyderabad, India 🇮🇳
          </p>
        </div>

      </div>
    </footer>
  );
}
