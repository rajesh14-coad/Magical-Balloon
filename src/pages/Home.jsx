import React from 'react';
import { 
  Sparkles, 
  Star, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';
import HeroSlider from '../components/HeroSlider';

/**
 * Mobile-First Native App-Style Hero Section
 * Direct, modern, and immediately leads into the Designs section below it.
 * STRICTLY ZERO BLUE
 */
export default function Home() {
  return (
    <div className="relative overflow-hidden">
      
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[700px] max-w-full h-[350px] bg-gradient-to-r from-[#138808]/10 via-[#FF7722]/10 to-[#138808]/10 blur-[130px] pointer-events-none -z-10" />

      {/* ==================== FULL-WIDTH HERO BANNER SECTION ==================== */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-2 sm:pt-4 pb-2 sm:pb-4">
        <HeroSlider />

        {/* App-like Quick Trust Grid under the banner */}
        <div className="mt-4 sm:mt-8 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
          
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl glass-panel flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-500/15 flex items-center justify-center shrink-0">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 fill-amber-500" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white block">4.9 / 5 Rating</span>
              <span className="text-[10px] sm:text-xs text-zinc-500">300+ Reviews</span>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl glass-panel flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#138808]/15 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#138808]" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white block">100% On-Time</span>
              <span className="text-[10px] sm:text-xs text-zinc-500">Punctual Crew</span>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl glass-panel flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#FF7722]/15 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF7722]" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white block">Hyderabad Wide</span>
              <span className="text-[10px] sm:text-xs text-zinc-500">Balanagar & Beyond</span>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl glass-panel flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#138808]/15 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#138808]" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white block">Custom Themes</span>
              <span className="text-[10px] sm:text-xs text-zinc-500">Bespoke Styling</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
