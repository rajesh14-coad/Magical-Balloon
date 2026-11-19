import React from 'react';
import { 
  Palette, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';
import { STATS } from '../utils/constants';
import GlassCard from './GlassCard';

/**
 * Trust & Quality Highlights Section (Crafted With Passion & Precision)
 * Positioned cleanly near the bottom of the page before Contact.
 * STRICTLY ZERO BLUE
 */
export default function TrustHighlights() {
  const highlights = [
    {
      icon: Palette,
      title: "100% Custom Designs",
      description: "Every setup is uniquely tailored to your theme, venue aesthetics, and color preferences.",
      accent: "green"
    },
    {
      icon: Clock,
      title: "Timely Setup Guaranteed",
      description: "Our punctual Hyderabad crew arrives well in advance to ensure flawless setup before guests arrive.",
      accent: "saffron"
    },
    {
      icon: ShieldCheck,
      title: "Premium Biodegradable Balloons",
      description: "We use only long-lasting metallic, chrome, and pastel latex balloons for a glossy, radiant finish.",
      accent: "green"
    }
  ];

  return (
    <div className="relative py-10 sm:py-16 overflow-hidden">
      
      {/* ==================== 1. HIGHLIGHTS: CRAFTED WITH PASSION ==================== */}
      <section className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#FF7722] block mb-1.5">
            Why Choose Magical Balloon
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Crafted With Passion & Precision
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <GlassCard
                key={idx}
                accent={item.accent}
                padding="p-5 sm:p-8"
                className="flex flex-col items-start justify-between text-left group rounded-2xl sm:rounded-3xl"
              >
                <div>
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110 ${
                    item.accent === 'green'
                      ? 'bg-[#138808]/15 text-[#138808]'
                      : 'bg-[#FF7722]/15 text-[#FF7722]'
                  }`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-1.5 sm:mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-zinc-200/50 dark:border-white/[0.06] w-full flex items-center justify-between text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  <span>Guaranteed Setup Quality</span>
                  <span className="text-[#138808] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* ==================== 2. STATS COUNTER ==================== */}
      <section className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {STATS.map((stat, idx) => (
            <GlassCard
              key={stat.label}
              accent={idx % 2 === 0 ? "green" : "saffron"}
              padding="p-4 sm:p-6"
              className="text-center rounded-2xl sm:rounded-3xl"
            >
              <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-950 dark:text-white mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

    </div>
  );
}
