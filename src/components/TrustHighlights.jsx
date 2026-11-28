import React from 'react';
import { Link } from 'react-router-dom';
import {
  Palette,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { BOOKING_PROCESS } from '../utils/constants';
import GlassCard from './GlassCard';

/**
 * Service Standards & Transparent 4-Step Booking Workflow
 */
export default function TrustHighlights() {
  const highlights = [
    {
      icon: Palette,
      title: "Custom Venue Styling",
      description: "Every setup is tailored to your room dimensions, backdrop layout, and colour preferences — with exact inclusions listed in your quote.",
      accent: "green",
      footerLabel: "Customisable Themes"
    },
    {
      icon: Clock,
      title: "Scheduled On-Site Setup",
      description: "Our Balanagar-based Hyderabad team confirms your arrival window in advance so installation finishes smoothly before your event starts.",
      accent: "saffron",
      footerLabel: "Pre-Scheduled Slots"
    },
    {
      icon: ShieldCheck,
      title: "Quality Biodegradable Latex",
      description: "We work with metallic, chrome, and pastel natural latex balloons paired with reusable metal rings, backdrop stands, and LED lights.",
      accent: "green",
      footerLabel: "Transparent Material List"
    }
  ];

  return (
    <div className="relative py-10 sm:py-16 overflow-hidden">
      {/* 1. Service Quality Highlights */}
      <section className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#FF7722] block mb-1.5">
            Our Service Standards
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Crafted With Care &amp; Clear Estimates
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
                  <span>{item.footerLabel}</span>
                  <span className="text-[#138808] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* 2. Transparent 4-Step Booking Process */}
      <section className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          <h3 className="text-xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            How Booking &amp; Pricing Works
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1.5">
            Simple, clear process with written estimates and published{' '}
            <Link to="/terms" className="text-[#138808] font-semibold underline">
              Service Terms
            </Link>{' '}
            &amp;{' '}
            <Link to="/refund-policy" className="text-[#138808] font-semibold underline">
              Refund Policy
            </Link>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {BOOKING_PROCESS.map((item, idx) => (
            <GlassCard
              key={item.step}
              accent={idx % 2 === 0 ? "green" : "saffron"}
              padding="p-5 sm:p-6"
              className="rounded-2xl sm:rounded-3xl"
            >
              <span className={`inline-block text-xs font-black tracking-widest uppercase px-2.5 py-1 rounded-lg mb-3 ${
                idx % 2 === 0
                  ? 'bg-[#138808]/15 text-[#138808]'
                  : 'bg-[#FF7722]/15 text-[#FF7722]'
              }`}>
                Step {item.step}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white mb-1.5">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
