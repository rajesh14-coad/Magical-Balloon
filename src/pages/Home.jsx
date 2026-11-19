import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  MessageCircle, 
  ArrowRight, 
  Palette, 
  Clock, 
  ShieldCheck, 
  Star, 
  MapPin, 
  CheckCircle2, 
  Check 
} from 'lucide-react';
import { BUSINESS_INFO, STATS } from '../utils/constants';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';
import HeroSlider from '../components/HeroSlider';

// Featured service thumbnail images (Zero Blue)
import birthdayImg from '../assets/birthday-balloon.jpg';
import anniversaryImg from '../assets/anniversary-balloon.jpg';
import babyshowerImg from '../assets/babyshower-balloon.jpg';
import corporateImg from '../assets/corporate-balloon.jpg';

/**
 * Mobile-First Native App-Style Home Page
 * UI/UX Enhancements:
 * - Full-Width Hero Banner Slider with touch swipe
 * - App-style 2x2 Quick Trust Bar
 * - Mobile-friendly featured services cards
 * - Indian Green (#138808) primary CTA buttons
 * - STRICTLY ZERO BLUE
 */
export default function Home() {
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

  const featuredServices = [
    {
      id: "birthday",
      title: "Magical Birthdays",
      subtitle: "Kids, Milestones & Adult Parties",
      badge: "Most Loved",
      accent: "saffron",
      image: birthdayImg,
      description: "Organic circular balloon arches, custom neon signs, and dessert table styling in warm saffron & champagne gold.",
      features: ["Custom Neon Sign", "Organic Balloon Ring", "Spotlighting Included"],
      whatsappMsg: "Hi Magical Balloon Decor, I want to book a Birthday decoration setup in Hyderabad."
    },
    {
      id: "anniversary",
      title: "Romantic Anniversaries",
      subtitle: "Canopy Cabanas & Candlelight",
      badge: "Couples Special",
      accent: "saffron",
      image: anniversaryImg,
      description: "Fairy-tale chiffon canopies, ruby red balloons, fairy light curtains, and aromatic LED candles for couples.",
      features: ["Chiffon Cabana Tent", "LED Candle Pathway", "Custom Name Board"],
      whatsappMsg: "Hi Magical Balloon Decor, I want to book an Anniversary / Romantic Canopy setup."
    },
    {
      id: "babyshower",
      title: "Welcome Baby & Baby Shower",
      subtitle: "Pastel Sage & Gold Themes",
      badge: "Trending",
      accent: "green",
      image: babyshowerImg,
      description: "Soothing pastel sage green, soft gold, and ivory balloon garlands with cute teddy bear props and baby easel boards.",
      features: ["Pastel Organic Arch", "Teddy Bear Props", "Baby Easel Welcome Board"],
      whatsappMsg: "Hi Magical Balloon Decor, I want to book a Baby Shower / Welcome Baby setup."
    },
    {
      id: "corporate",
      title: "Corporate & Grand Openings",
      subtitle: "Pillars, Arches & Stage Decor",
      badge: "Commercial",
      accent: "green",
      image: corporateImg,
      description: "High-impact entrance pillars and ribbon-cutting balloon styling designed for brand galas and showroom inaugurations.",
      features: ["Grand Entrance Pillars", "Exact Brand Color Matching", "Durable Commercial Finish"],
      whatsappMsg: "Hi Magical Balloon Decor, I want to book a Corporate / Store Opening decor."
    }
  ];

  return (
    <div className="relative overflow-hidden">
      
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#138808]/10 via-[#FF7722]/10 to-[#138808]/10 blur-[130px] pointer-events-none -z-10" />

      {/* ==================== 1. FULL-WIDTH HERO BANNER SECTION ==================== */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-8 pb-10 sm:pb-16">
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

      {/* ==================== 2. FEATURED SERVICES SECTION ==================== */}
      <section className="py-12 sm:py-20 relative bg-zinc-50/60 dark:bg-zinc-950/40 border-y border-zinc-200/60 dark:border-white/[0.06] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 dark:bg-white/[0.06] border border-zinc-200/80 dark:border-white/10 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#138808] dark:text-emerald-400 shadow-sm mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Celebrations</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-950 dark:text-white tracking-tight mb-2.5 sm:mb-4">
              Our <span className="text-[#138808]">Magical</span> Services
            </h2>

            <p className="text-xs sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl mx-auto font-normal">
              Explore Hyderabad's most popular balloon decoration setups, styled directly at your venue.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredServices.map((service) => {
              const whatsappUrl = `https://wa.me/919509971603?text=${encodeURIComponent(service.whatsappMsg)}`;
              
              return (
                <GlassCard
                  key={service.id}
                  title={service.title}
                  subtitle={service.subtitle}
                  image={service.image}
                  imageAlt={service.title}
                  badge={service.badge}
                  accent={service.accent}
                  padding="p-4 sm:p-6"
                  className="flex flex-col justify-between group rounded-2xl"
                >
                  <div>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 sm:mb-6 font-normal">
                      {service.description}
                    </p>

                    <div className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-6">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                          <Check className="w-3.5 h-3.5 text-[#138808] shrink-0 stroke-[2.5]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3.5 border-t border-zinc-200/60 dark:border-white/[0.08] flex items-center justify-between gap-2">
                    <span className="text-[11px] font-medium text-zinc-500">
                      Hyderabad Wide
                    </span>
                    <Button
                      variant="primary"
                      size="sm"
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={MessageCircle}
                      className="shrink-0 active:scale-95 text-xs py-2 px-3.5"
                    >
                      Enquire
                    </Button>
                  </div>
                </GlassCard>
              );
            })}
          </div>

          {/* View All Services CTA */}
          <div className="mt-8 sm:mt-14 text-center">
            <Link to="/services">
              <Button
                variant="outline"
                size="md"
                icon={ArrowRight}
                className="w-full sm:w-auto px-6 sm:px-8 shadow-sm hover:border-[#138808] hover:text-[#138808] text-xs sm:text-sm"
              >
                View All 8+ Decoration Packages
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* ==================== 3. HIGHLIGHTS SECTION ==================== */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
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
                className="flex flex-col items-start justify-between text-left group rounded-2xl"
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

      {/* ==================== 4. STATS COUNTER ==================== */}
      <section className="pb-12 sm:pb-20 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {STATS.map((stat, idx) => (
            <GlassCard
              key={stat.label}
              accent={idx % 2 === 0 ? "green" : "saffron"}
              padding="p-4 sm:p-6"
              className="text-center rounded-2xl"
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
