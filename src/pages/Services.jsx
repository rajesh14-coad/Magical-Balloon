import React, { useState } from 'react';
import { 
  Sparkles, 
  Phone, 
  Eye, 
  X, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';
import Button from '../components/Button';
import WhatsAppIcon from '../components/WhatsAppIcon';

// Newly added Pexels images + Curated Balloon Setups (Strictly Zero Blue)
import imgBirthday1 from '../assets/pexels-nikitaxnikitin-14774949.jpg';
import imgBirthday2 from '../assets/pexels-pavel-danilyuk-7180850.jpg';
import imgBirthday3 from '../assets/pexels-mlkbnl-10651684.jpg';
import imgBirthday4 from '../assets/pexels-hannaauramenka-8652621.jpg';
import imgRomantic1 from '../assets/anniversary-balloon.jpg';
import imgRomantic2 from '../assets/pexels-derya-59965512-36231146.jpg';
import imgBaby1 from '../assets/babyshower-balloon.jpg';
import imgBaby2 from '../assets/pexels-planka-22690730.jpg';
import imgHaldi1 from '../assets/haldi-balloon.jpg';
import imgHaldi2 from '../assets/pexels-planka-20598637.jpg';
import imgStage1 from '../assets/pexels-rebornfilmes-36704177.jpg';
import imgStage2 from '../assets/pexels-mesut-yalcin-1233429888-31779567.jpg';
import imgStage3 from '../assets/pexels-basungavisual-37382220.jpg';
import imgStage4 from '../assets/hero-balloon.jpg';

/**
 * Clean & Minimalist Decoration Showcase (RaharDecors Style)
 * Features:
 * - 4-Column Responsive Grid (2-col on mobile, 4-col on desktop)
 * - Minimal text per card (clean title + tags only, zero clutter)
 * - Aspect 4:5 portrait images with smooth hover "Quick View"
 * - Instant Frosted Quick View Modal with 1-click WhatsApp booking
 * - STRICTLY ZERO BLUE
 */
export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeModalItem, setActiveModalItem] = useState(null);

  const allItems = [
    // --- Birthday Decorations ---
    {
      id: "bday-1",
      title: "Premium Birthday Decor",
      category: "birthdays",
      image: imgBirthday1,
      badge: "Trending",
      tag: "Milestones & Kids",
      whatsappMsg: "Hi Magical Balloon Decor, I want to book 'Premium Birthday Decor' in Hyderabad."
    },
    {
      id: "bday-2",
      title: "Luxury Birthday Setup",
      category: "birthdays",
      image: imgBirthday2,
      badge: "Luxury Ring",
      tag: "Grand Arch & Lights",
      whatsappMsg: "Hi Magical Balloon Decor, I want to book 'Luxury Birthday Setup' in Hyderabad."
    },
    {
      id: "bday-3",
      title: "Elegant Home Birthday",
      category: "birthdays",
      image: imgBirthday3,
      badge: "Home Setup",
      tag: "Warm Gold & Ivory",
      whatsappMsg: "Hi Magical Balloon Decor, I want to book 'Elegant Home Birthday' in Hyderabad."
    },
    {
      id: "bday-4",
      title: "Natural Style Birthday",
      category: "birthdays",
      image: imgBirthday4,
      badge: "Pastel Chic",
      tag: "Organic Garland",
      whatsappMsg: "Hi Magical Balloon Decor, I want to book 'Natural Style Birthday' in Hyderabad."
    },

    // --- Romantic & Anniversary ---
    {
      id: "rom-1",
      title: "Romantic Canopy Cabana",
      category: "couples",
      image: imgRomantic1,
      badge: "Couples Choice",
      tag: "Candlelight & Canopies",
      whatsappMsg: "Hi Magical Balloon Decor, I want to book 'Romantic Canopy Cabana' in Hyderabad."
    },
    {
      id: "rom-2",
      title: "Intimate Room Surprise",
      category: "couples",
      image: imgRomantic2,
      badge: "Midnight Surprise",
      tag: "Helium & Fairy Lights",
      whatsappMsg: "Hi Magical Balloon Decor, I want to book 'Intimate Room Surprise' in Hyderabad."
    },

    // --- Kids & Baby Shower ---
    {
      id: "baby-1",
      title: "Welcome Baby & Baby Shower",
      category: "kids",
      image: imgBaby1,
      badge: "Baby Special",
      tag: "Sage & Ivory Pastel",
      whatsappMsg: "Hi Magical Balloon Decor, I want to book 'Welcome Baby & Baby Shower' in Hyderabad."
    },
    {
      id: "baby-2",
      title: "Botanical Pastel Garland",
      category: "kids",
      image: imgBaby2,
      badge: "Trending Pastel",
      tag: "Organic Eucalyptus Style",
      whatsappMsg: "Hi Magical Balloon Decor, I want to book 'Botanical Pastel Garland' in Hyderabad."
    },

    // --- Haldi & Traditional ---
    {
      id: "haldi-1",
      title: "Traditional Haldi Mehendi",
      category: "traditional",
      image: imgHaldi1,
      badge: "Marigold Special",
      tag: "Yellow & Green Drapes",
      whatsappMsg: "Hi Magical Balloon Decor, I want to book 'Traditional Haldi Mehendi' in Hyderabad."
    },
    {
      id: "haldi-2",
      title: "Festive Wedding Stage",
      category: "traditional",
      image: imgHaldi2,
      badge: "Traditional Luxe",
      tag: "Floral & Balloon Mix",
      whatsappMsg: "Hi Magical Balloon Decor, I want to book 'Festive Wedding Stage' in Hyderabad."
    },

    // --- Grand Stages & Corporate ---
    {
      id: "stage-1",
      title: "Grand Ring Stage Backdrop",
      category: "stages",
      image: imgStage1,
      badge: "Grand Stage",
      tag: "Metallic 8ft Ring",
      whatsappMsg: "Hi Magical Balloon Decor, I want to book 'Grand Ring Stage Backdrop' in Hyderabad."
    },
    {
      id: "stage-2",
      title: "Royal Ballroom Celebration",
      category: "stages",
      image: imgStage2,
      badge: "Banquet Gala",
      tag: "Full Stage Archway",
      whatsappMsg: "Hi Magical Balloon Decor, I want to book 'Royal Ballroom Celebration' in Hyderabad."
    },
    {
      id: "stage-3",
      title: "Corporate Launch Pillars",
      category: "stages",
      image: imgStage3,
      badge: "Commercial / B2B",
      tag: "Entrance Arches",
      whatsappMsg: "Hi Magical Balloon Decor, I want to book 'Corporate Launch Pillars' in Hyderabad."
    },
    {
      id: "stage-4",
      title: "Opulent Golden Saffron Arch",
      category: "stages",
      image: imgStage4,
      badge: "VIP Setup",
      tag: "High-Density Cluster",
      whatsappMsg: "Hi Magical Balloon Decor, I want to book 'Opulent Golden Saffron Arch' in Hyderabad."
    }
  ];

  const filterTabs = [
    { label: "All Setups", value: "All" },
    { label: "Birthday Decorations", value: "birthdays" },
    { label: "Romantic & Anniversary", value: "couples" },
    { label: "Kids & Baby Shower", value: "kids" },
    { label: "Haldi & Traditional", value: "traditional" },
    { label: "Grand Stages & Corporate", value: "stages" }
  ];

  const filteredItems = activeCategory === 'All'
    ? allItems
    : allItems.filter(item => item.category === activeCategory);

  return (
    <div className="relative py-8 sm:py-16 overflow-hidden">
      
      {/* Ambient Lighting Gradients (Strictly NO BLUE: Indian Green & Saffron) */}
      <div className="absolute top-1/4 right-0 w-[500px] max-w-full h-[500px] bg-[#138808]/5 dark:bg-[#138808]/[0.03] rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 left-0 w-[500px] max-w-full h-[500px] bg-[#FF7722]/5 dark:bg-[#FF7722]/[0.03] rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#138808]/10 text-[#138808] dark:text-[#22B814] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 border border-[#138808]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hyderabad's Premier Balloon Styling</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-950 dark:text-white tracking-tight">
            Our Decoration Designs
          </h2>
        </div>

        {/* ==================== CATEGORY FILTER PILLS ==================== */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar px-1">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.value;

            return (
              <button
                key={tab.value}
                onClick={() => setActiveCategory(tab.value)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#138808] text-white shadow-md shadow-[#138808]/30 scale-105'
                    : 'bg-white hover:bg-zinc-100 text-zinc-700 dark:bg-white/[0.06] dark:text-zinc-300 dark:hover:bg-white/10 border border-zinc-200/70 dark:border-white/10'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ==================== CLEAN 4-COLUMN CARD GRID (RAHARDECORS STYLE) ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {filteredItems.map((item) => {
            const whatsappUrl = `https://wa.me/919509971603?text=${encodeURIComponent(item.whatsappMsg)}`;

            return (
              <div 
                key={item.id} 
                className="bg-white dark:bg-[#12141a] rounded-2xl sm:rounded-3xl p-2.5 sm:p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-200/70 dark:border-white/10 flex flex-col justify-between group cursor-pointer"
                onClick={() => setActiveModalItem(item)}
              >
                {/* Portrait Aspect 4:5 Image Container */}
                <div className="relative aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                    loading="lazy"
                  />

                  {/* Badge */}
                  <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 z-10">
                    <span className="inline-block px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20">
                      {item.badge}
                    </span>
                  </div>

                  {/* Center Hover "Quick View" Button (Just like reference screenshot!) */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-2">
                    <span className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#138808] text-white text-[11px] sm:text-xs font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all">
                      <Eye className="w-3.5 h-3.5" />
                      Quick View
                    </span>
                  </div>
                </div>

                {/* Minimalist Details Below Image (RaharDecors Style) */}
                <div className="mt-3 px-1 text-center sm:text-left">
                  <h3 className="font-bold text-xs sm:text-sm md:text-base text-zinc-900 dark:text-white truncate group-hover:text-[#138808] dark:group-hover:text-[#22B814] transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                    <span className="truncate font-medium text-[#FF7722]">
                      {item.tag}
                    </span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="hidden sm:inline-flex items-center gap-1 text-[#138808] font-bold hover:underline shrink-0"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-current shrink-0" size={14} />
                      <span>Book</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* ==================== CUSTOM REFERENCE THEME BANNER ==================== */}
        <div className="mt-14 sm:mt-20">
          <div className="bg-white dark:bg-[#12141a] rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-zinc-200/80 dark:border-white/10 text-center max-w-3xl mx-auto shadow-sm">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#138808]/15 text-[#138808] dark:text-emerald-400 mb-3">
              Seen on Pinterest or Instagram?
            </span>

            <h3 className="text-xl sm:text-3xl font-black text-zinc-950 dark:text-white mb-2 tracking-tight">
              Share Your Custom Reference Photo
            </h3>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-6 leading-relaxed">
              Send us any photo on WhatsApp. Our Hyderabad decor artists will replicate the exact colors, ring structures, and lighting at your venue.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                variant="primary"
                size="md"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={WhatsAppIcon}
                className="text-xs sm:text-sm"
              >
                Share on WhatsApp
              </Button>

              <Button
                variant="outline"
                size="md"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                icon={Phone}
                className="text-xs sm:text-sm"
              >
                Call +91 9509971603
              </Button>
            </div>
          </div>
        </div>

      </div>

      {/* ==================== QUICK VIEW LIGHTBOX MODAL ==================== */}
      {activeModalItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
          onClick={() => setActiveModalItem(null)}
        >
          <div 
            className="relative w-full max-w-sm sm:max-w-lg bg-white dark:bg-[#12141a] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-white/10 my-auto flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/70 text-white hover:bg-black transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto overscroll-contain flex-1">
              {/* Modal Image - responsive aspect so it never pushes buttons off-screen */}
              <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden bg-zinc-950">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md text-white bg-[#138808]/90">
                    {activeModalItem.badge}
                  </span>
                </div>
              </div>

              {/* Modal Details & Direct Booking Action */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-1.5 gap-2">
                  <h3 className="text-base sm:text-xl font-black text-zinc-950 dark:text-white tracking-tight truncate">
                    {activeModalItem.title}
                  </h3>
                  <span className="text-[11px] sm:text-xs font-semibold text-[#FF7722] shrink-0">
                    {activeModalItem.tag}
                  </span>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                  Full setup customized for your venue in Hyderabad. Includes metallic & chrome balloons, setup & timely teardown crew.
                </p>

                {/* WhatsApp & Call Action Buttons */}
                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={`https://wa.me/919509971603?text=${encodeURIComponent(`Hi Magical Balloon Decor, I want to book "${activeModalItem.title}" setup in Hyderabad.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white active:scale-95 transition-all shadow-md shadow-[#25D366]/30"
                  >
                    <WhatsAppIcon className="w-4.5 h-4.5 fill-current shrink-0" size={18} />
                    <span>Book on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="flex items-center justify-center gap-1.5 py-3 px-3.5 rounded-xl font-bold text-xs sm:text-sm border border-zinc-200 dark:border-white/15 bg-zinc-100 hover:bg-zinc-200 dark:bg-white/10 dark:text-white active:scale-95 transition-all shrink-0"
                  >
                    <Phone className="w-4 h-4 text-[#FF7722] fill-current" />
                    <span>Call</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
