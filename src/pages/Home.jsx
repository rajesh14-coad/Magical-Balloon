import React from 'react';
import {
  Sparkles,
  FileText,
  MapPin,
  Clock,
  Phone,
  ArrowRight
} from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import Button from '../components/Button';
import { BUSINESS_INFO } from '../utils/constants';
import { useNavigation } from '../utils/navigation';

/**
 * Landing Hero Section
 * Includes semantic above-the-fold H1, service summary, transparent actions, and visual showcase.
 */
export default function Home() {
  const { scrollToSection } = useNavigation();

  return (
    <div className="relative overflow-hidden">
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[700px] max-w-full h-[350px] bg-gradient-to-r from-[#138808]/10 via-[#FF7722]/10 to-[#138808]/10 blur-[130px] pointer-events-none -z-10" />

      <section className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-4 sm:pt-8 pb-2 sm:pb-4">
        {/* Semantic Above-the-Fold Header & Value Proposition */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#138808]/10 text-[#138808] dark:text-[#22B814] text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-[#138808]/20">
            <MapPin className="w-3.5 h-3.5" />
            <span>Balanagar, Kukatpally, Madhapur &amp; All Hyderabad</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-950 dark:text-white tracking-tight leading-tight">
            Custom Balloon Decoration Services in{' '}
            <span className="gradient-tricolor-text">Hyderabad</span>
          </h1>

          <p className="text-xs sm:text-base text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Professional on-site balloon arches, backdrops, and floral-balloon styling for birthdays, anniversaries, baby showers, Haldi ceremonies, and store openings — with clear upfront estimates before booking.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-1">
            <Button
              variant="primary"
              size="md"
              icon={ArrowRight}
              onClick={() => scrollToSection('services')}
            >
              Explore Themes &amp; Packages
            </Button>

            <Button
              variant="outline"
              size="md"
              icon={Phone}
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
            >
              Call {BUSINESS_INFO.phone}
            </Button>
          </div>
        </div>

        {/* Full-Width Hero Visual Showcase */}
        <HeroSlider />

        {/* Factual Service Highlights */}
        <div className="mt-4 sm:mt-8 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl glass-panel flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#FF7722]/15 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF7722]" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white block">Custom Themes</span>
              <span className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400">Tailored Colour Styling</span>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl glass-panel flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#138808]/15 flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#138808]" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white block">Upfront Quotes</span>
              <span className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400">No Hidden Charges</span>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl glass-panel flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#FF7722]/15 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF7722]" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white block">Scheduled Crew</span>
              <span className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400">Open 24 Hours (Mon–Sun)</span>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl glass-panel flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#138808]/15 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#138808]" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white block">Hyderabad Service</span>
              <span className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400">Balanagar Studio &amp; Venues</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
