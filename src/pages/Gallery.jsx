import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Eye, 
  MessageCircle, 
  X, 
  ArrowRight, 
  CheckCircle2, 
  Filter 
} from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';

// 8 High-definition balloon decoration images (Zero Blue)
import heroBalloon from '../assets/hero-balloon.jpg';
import birthdayBalloon from '../assets/birthday-balloon.jpg';
import anniversaryBalloon from '../assets/anniversary-balloon.jpg';
import babyshowerBalloon from '../assets/babyshower-balloon.jpg';
import corporateBalloon from '../assets/corporate-balloon.jpg';
import galleryParty from '../assets/gallery-party.jpg';
import galleryLights from '../assets/gallery-lights.jpg';
import galleryCelebration from '../assets/gallery-celebration.jpg';

/**
 * Production-Ready Gallery Page
 * Features:
 * - Masonry-style dynamic CSS Grid
 * - Interactive Category Filter Pills
 * - Hover frosted glass overlay with 'View' & WhatsApp enquiry
 * - Full-screen Frosted Lightbox Modal
 * - Bottom CTA linking to Contact page
 * - STRICTLY ZERO BLUE
 */
export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalItem, setActiveModalItem] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Opulent Golden Saffron Arch",
      category: "Grand Entrances",
      categoryKey: "entrances",
      image: heroBalloon,
      aspect: "aspect-[4/5]",
      accent: "saffron",
      description: "Grand organic entrance arch crafted with saffron, champagne gold, and ivory balloons for a luxury Hyderabad celebration."
    },
    {
      id: 2,
      title: "Golden Champagne Birthday Ring",
      category: "Birthdays",
      categoryKey: "birthdays",
      image: birthdayBalloon,
      aspect: "aspect-square",
      accent: "saffron",
      description: "Circular ring balloon setup with metallic chrome gold, cream, and warm spotlights for milestone birthdays."
    },
    {
      id: 3,
      title: "Ruby Red Romantic Canopy",
      category: "Romantic & Canopies",
      categoryKey: "anniversaries",
      image: anniversaryBalloon,
      aspect: "aspect-[4/5]",
      accent: "saffron",
      description: "Intimate cabana setup with glossy ruby red, pearl white, silver balloons, and romantic candlelit pathway."
    },
    {
      id: 4,
      title: "Pastel Sage & Gold Baby Shower",
      category: "Baby Showers",
      categoryKey: "babyshower",
      image: babyshowerBalloon,
      aspect: "aspect-square",
      accent: "green",
      description: "Organic pastel sage green and warm gold garland with custom easel welcome board to welcome newborn."
    },
    {
      id: 5,
      title: "Emerald & Gold Grand Launch Pillars",
      category: "Corporate Galas",
      categoryKey: "corporate",
      image: corporateBalloon,
      aspect: "aspect-square",
      accent: "green",
      description: "High-impact entrance pillars and ribbon-cutting balloon styling for brand openings in Hyderabad."
    },
    {
      id: 6,
      title: "Sparkling Metallic Birthday Arch",
      category: "Birthdays",
      categoryKey: "birthdays",
      image: galleryParty,
      aspect: "aspect-[4/5]",
      accent: "saffron",
      description: "Vibrant warm gold and saffron party balloon archway designed for high-energy indoor banquet parties."
    },
    {
      id: 7,
      title: "Starlit Terrace Proposal Setup",
      category: "Romantic & Canopies",
      categoryKey: "anniversaries",
      image: galleryLights,
      aspect: "aspect-square",
      accent: "saffron",
      description: "Open rooftop fairy-light canopy draped with pearl balloons for marriage proposals and anniversary dinners."
    },
    {
      id: 8,
      title: "Royal Stage Garland Installation",
      category: "Corporate Galas",
      categoryKey: "corporate",
      image: galleryCelebration,
      aspect: "aspect-[4/5]",
      accent: "green",
      description: "Full-width organic balloon backdrop installed for major Hyderabad corporate award ceremonies."
    }
  ];

  const categories = [
    { label: "All Works", value: "All" },
    { label: "Birthdays", value: "birthdays" },
    { label: "Romantic & Canopies", value: "anniversaries" },
    { label: "Baby Showers", value: "babyshower" },
    { label: "Corporate Galas", value: "corporate" }
  ];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.categoryKey === selectedCategory);

  return (
    <div className="py-12 sm:py-20 relative">
      
      {/* Ambient Lighting Background (Strictly NO BLUE: Saffron & Green) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-gradient-to-r from-[#FF7722]/10 via-transparent to-[#138808]/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-white/[0.06] border border-zinc-200/80 dark:border-white/10 text-xs font-semibold text-zinc-800 dark:text-zinc-200 shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7722]" />
            <span>Our Real Portfolio</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-zinc-950 dark:text-white tracking-tight leading-tight mb-4">
            Decoration <span className="gradient-tricolor-text">Gallery</span>
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            Browse through our portfolio of custom-styled balloon artistry installed across residences, banquet halls, and open-air venues in Hyderabad.
          </p>
        </div>

        {/* Mobile App-Style Touch-Scrollable Filter Pills */}
        <div className="flex overflow-x-auto no-scrollbar py-2 px-1 gap-2 sm:gap-3 sm:flex-wrap sm:justify-center mb-8 sm:mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer shrink-0 active:scale-95 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#138808] to-[#1cb80e] text-white shadow-md shadow-[#138808]/25 scale-105'
                    : 'glass-panel text-zinc-700 dark:text-zinc-300 hover:text-[#138808] hover:border-[#138808]/40'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 2-Column Mobile Feed / 4-Column Desktop Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredItems.map((item) => {
            const whatsappMsg = `Hi Magical Balloon Decoration, I saw "${item.title}" in your gallery and would like to enquire about its pricing and setup in Hyderabad.`;
            const whatsappUrl = `https://wa.me/919509971603?text=${encodeURIComponent(whatsappMsg)}`;

            return (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden glass-panel border border-white/80 dark:border-white/10 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Container with Zoom & Frosted Overlay */}
                <div className={`relative ${item.aspect} w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Frosted Glass Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                    
                    {/* Top Tag */}
                    <div className="flex justify-end">
                      <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/90 text-zinc-900 backdrop-blur-md">
                        {item.category}
                      </span>
                    </div>

                    {/* Bottom Actions */}
                    <div className="space-y-3">
                      <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                        {item.title}
                      </h4>

                      <div className="flex items-center gap-2">
                        {/* View Lightbox Button */}
                        <button
                          type="button"
                          onClick={() => setActiveModalItem(item)}
                          className="p-2 rounded-xl bg-white/20 hover:bg-white text-white hover:text-black backdrop-blur-md transition-colors cursor-pointer"
                          aria-label="View large photo"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        {/* WhatsApp Enquiry Button */}
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-1.5 px-3 rounded-xl bg-[#FF7722] hover:bg-[#FFA059] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-md"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Enquire</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card Caption (Visible always for clean readability) */}
                <div className="p-4 bg-white/90 dark:bg-[#12141A]/90 backdrop-blur-sm border-t border-zinc-200/60 dark:border-white/10 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white truncate">
                      {item.title}
                    </h3>
                    <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                      {item.category}
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveModalItem(item)}
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-[#FF7722] hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
                    aria-label="Inspect details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* -------------------- FULL-SCREEN FROSTED LIGHTBOX MODAL -------------------- */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative max-w-3xl w-full rounded-3xl overflow-hidden glass-panel border border-white/20 dark:border-white/15 bg-white/95 dark:bg-[#0A0B0E]/95 shadow-2xl flex flex-col max-h-[90vh]">
              
              {/* Modal Top Bar */}
              <div className="p-4 sm:p-5 border-b border-zinc-200/60 dark:border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF7722] block">
                    {activeModalItem.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
                    {activeModalItem.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModalItem(null)}
                  className="p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-white/10 dark:hover:bg-white/20 text-zinc-700 dark:text-zinc-200 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image */}
              <div className="overflow-y-auto p-4 sm:p-6 space-y-4">
                <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 max-h-[55vh] flex items-center justify-center bg-black">
                  <img
                    src={activeModalItem.image}
                    alt={activeModalItem.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {activeModalItem.description}
                </p>
              </div>

              {/* Modal Footer CTA */}
              <div className="p-4 sm:p-5 border-t border-zinc-200/60 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 bg-zinc-50/50 dark:bg-black/20">
                <span className="text-xs text-zinc-500 font-medium">
                  Deliverable across Hyderabad • Balanagar, Madhapur & beyond
                </span>

                <Button
                  variant="primary"
                  size="md"
                  href={`https://wa.me/919509971603?text=${encodeURIComponent(
                    `Hi Magical Balloon Decoration, I am interested in booking "${activeModalItem.title}". Please share package pricing and availability.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={MessageCircle}
                >
                  Book on WhatsApp
                </Button>
              </div>

            </div>
          </div>
        )}

        {/* -------------------- BOTTOM CALL TO ACTION -------------------- */}
        <div className="mt-20 sm:mt-28">
          <GlassCard accent="saffron" padding="p-8 sm:p-14" className="text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7722]/15 text-[#FF7722] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Bespoke Balloon Styling</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 dark:text-white tracking-tight mb-4">
                Loved our work? Let's plan your event!
              </h2>

              <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                Whether you have an exact Pinterest photo or need creative theme suggestions, our Hyderabad decor artists are ready to transform your venue.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact">
                  <Button
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                  >
                    Contact Us Today
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  size="lg"
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={MessageCircle}
                >
                  Instant WhatsApp Chat
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>

      </div>
    </div>
  );
}
