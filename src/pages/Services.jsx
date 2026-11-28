import React, { useState } from 'react';
import {
  Sparkles,
  Phone,
  Eye,
  X,
  Clock,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';
import { useNavigation } from '../utils/navigation';
import Button from '../components/Button';
import WhatsAppIcon from '../components/WhatsAppIcon';

// Verified, authentic balloon decoration photography
import imgBirthdayRing from '../assets/birthday-balloon.jpg';
import imgBirthdayNeon from '../assets/pexels-rebornfilmes-36704177.jpg';
import imgBirthdayMinimal from '../assets/pexels-nikitaxnikitin-14774949.jpg';
import imgRomanticHeart from '../assets/anniversary-balloon.jpg';
import imgBabyNursery from '../assets/pexels-pavel-danilyuk-7180850.jpg';
import imgBabyPastelArch from '../assets/pexels-mlkbnl-10651684.jpg';
import imgHaldiDecor from '../assets/haldi-decor.jpg';
import imgCorporateOpening from '../assets/corporate-opening-decor.jpg';
import imgGrandBanquet from '../assets/hero-balloon.jpg';
import imgGoldGreenery from '../assets/pexels-basungavisual-37382220.jpg';

/**
 * Decoration Services & Theme Catalogue
 * Every image accurately matches its category, includes clear package scope, setup time, and transparent quote policy.
 */
export default function Services() {
  const { scrollToSection } = useNavigation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeModalItem, setActiveModalItem] = useState(null);

  const allItems = [
    {
      id: "bday-ring",
      title: "Golden Ring Milestone Birthday",
      category: "birthdays",
      image: imgBirthdayRing,
      badge: "Birthday Ring",
      tag: "Circular Arch & Lights",
      setupTime: "90 – 120 mins",
      inclusions: "Metallic gold & saffron latex balloons, circular ring frame (rental), backdrop curtain, warm LED lights, and on-site installation.",
      pricingNote: "Custom quote based on backdrop size & add-on props (shared upfront before booking).",
      whatsappMsg: "Hi Magical Balloon Decoration, I would like a quote for 'Golden Ring Milestone Birthday' in Hyderabad."
    },
    {
      id: "bday-neon",
      title: "Neon Milestone Birthday Arch",
      category: "birthdays",
      image: imgBirthdayNeon,
      badge: "Neon Theme",
      tag: "Arch Panel & Neon Sign",
      setupTime: "90 – 120 mins",
      inclusions: "Pastel & silver chrome balloon garland, arched backdrop panel (rental), warm Happy Birthday neon sign, and pedestal stands.",
      pricingNote: "Custom quote based on venue & personalised number props (shared upfront before booking).",
      whatsappMsg: "Hi Magical Balloon Decoration, I would like a quote for 'Neon Milestone Birthday Arch' in Hyderabad."
    },
    {
      id: "bday-minimal",
      title: "Minimalist Home Birthday Setup",
      category: "birthdays",
      image: imgBirthdayMinimal,
      badge: "Home Setup",
      tag: "Organic Wall Garland",
      setupTime: "45 – 60 mins",
      inclusions: "Pastel & ivory balloon wall garland, Happy Birthday bunting banner, and clean wall-safe indoor mounting.",
      pricingNote: "Budget-friendly home package; exact estimate shared upfront with zero hidden charges.",
      whatsappMsg: "Hi Magical Balloon Decoration, I would like a quote for 'Minimalist Home Birthday Setup' in Hyderabad."
    },
    {
      id: "rom-heart",
      title: "Crimson & Silver Heart Canopy",
      category: "couples",
      image: imgRomanticHeart,
      badge: "Anniversary",
      tag: "Heart Arch & Fairy Lights",
      setupTime: "90 – 120 mins",
      inclusions: "Heart-shaped crimson, pearl white & silver balloon arch, warm curtain lights, artificial rose accents, and LED candle styling.",
      pricingNote: "Custom quote based on indoor/banquet room dimensions (shared upfront before booking).",
      whatsappMsg: "Hi Magical Balloon Decoration, I would like a quote for 'Crimson & Silver Heart Canopy' in Hyderabad."
    },
    {
      id: "baby-pastel",
      title: "Sage & Peach Welcome Baby Arch",
      category: "kids",
      image: imgBabyPastelArch,
      badge: "Baby Shower",
      tag: "Pastel Arch & Pedestals",
      setupTime: "90 – 120 mins",
      inclusions: "Sage green, peach, cream & metallic gold organic balloon arch, white backdrop panel, and display plinths (rental).",
      pricingNote: "Custom quote based on custom name board & balloon density (shared upfront before booking).",
      whatsappMsg: "Hi Magical Balloon Decoration, I would like a quote for 'Sage & Peach Welcome Baby Arch' in Hyderabad."
    },
    {
      id: "baby-nursery",
      title: "Nursery Pastel Balloon Cluster",
      category: "kids",
      image: imgBabyNursery,
      badge: "Welcome Home",
      tag: "Room & Foil Cluster",
      setupTime: "45 – 60 mins",
      inclusions: "Rose gold, blush & confetti balloon bouquets with foil number/letter balloons and ribbon weights for home nurseries.",
      pricingNote: "Ideal for compact rooms & naming ceremonies; exact quote shared before booking.",
      whatsappMsg: "Hi Magical Balloon Decoration, I would like a quote for 'Nursery Pastel Balloon Cluster' in Hyderabad."
    },
    {
      id: "haldi-decor",
      title: "Traditional Haldi & Mehendi Setup",
      category: "traditional",
      image: imgHaldiDecor,
      badge: "Haldi Special",
      tag: "Marigold & Balloon Mix",
      setupTime: "2 – 3 hours",
      inclusions: "Yellow, emerald & white balloon columns paired with marigold garlands, traditional fabric drapes, and seating backdrop styling.",
      pricingNote: "Custom quote based on terrace/courtyard size and floral requirements (shared upfront).",
      whatsappMsg: "Hi Magical Balloon Decoration, I would like a quote for 'Traditional Haldi & Mehendi Setup' in Hyderabad."
    },
    {
      id: "corp-opening",
      title: "Storefront & Office Opening Arch",
      category: "stages",
      image: imgCorporateOpening,
      badge: "Grand Opening",
      tag: "Entrance Arch & Pillars",
      setupTime: "60 – 90 mins",
      inclusions: "Brand-colour overhead entrance balloon arch plus two freestanding metallic balloon pillars for shops, clinics, and offices.",
      pricingNote: "Custom quote based on entrance width & pillar count (GST-ready invoice details on request).",
      whatsappMsg: "Hi Magical Balloon Decoration, I would like a quote for 'Storefront & Office Opening Arch' in Hyderabad."
    },
    {
      id: "stage-banquet",
      title: "Grand Banquet Entrance Archway",
      category: "stages",
      image: imgGrandBanquet,
      badge: "Banquet Gala",
      tag: "Full-Scale Arch & Florals",
      setupTime: "2.5 – 3.5 hours",
      inclusions: "High-density saffron, champagne gold & ivory balloon arch blended with foliage/floral clusters for banquet halls & receptions.",
      pricingNote: "Custom site quote provided after reviewing hall entrance dimensions.",
      whatsappMsg: "Hi Magical Balloon Decoration, I would like a quote for 'Grand Banquet Entrance Archway' in Hyderabad."
    },
    {
      id: "stage-greenery",
      title: "Chrome Gold & Greenery Column",
      category: "stages",
      image: imgGoldGreenery,
      badge: "Corporate / Stage",
      tag: "Chrome Gold Garland",
      setupTime: "60 – 90 mins",
      inclusions: "Double-stuffed metallic chrome gold balloon garland styled beside greenery backdrop panels for stage & photo booths.",
      pricingNote: "Custom quote based on backdrop width and venue access timing.",
      whatsappMsg: "Hi Magical Balloon Decoration, I would like a quote for 'Chrome Gold & Greenery Column' in Hyderabad."
    }
  ];

  const filterTabs = [
    { label: "All Themes", value: "All" },
    { label: "Birthdays", value: "birthdays" },
    { label: "Anniversary", value: "couples" },
    { label: "Baby Shower & Kids", value: "kids" },
    { label: "Haldi & Traditional", value: "traditional" },
    { label: "Corporate & Stages", value: "stages" }
  ];

  const filteredItems =
    activeCategory === 'All'
      ? allItems
      : allItems.filter((item) => item.category === activeCategory);

  const handleRequestQuoteFromModal = () => {
    setActiveModalItem(null);
    scrollToSection('contact');
  };

  return (
    <div className="relative py-8 sm:py-16 overflow-hidden">
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/4 right-0 w-[500px] max-w-full h-[500px] bg-[#138808]/5 dark:bg-[#138808]/[0.03] rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 left-0 w-[500px] max-w-full h-[500px] bg-[#FF7722]/5 dark:bg-[#FF7722]/[0.03] rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#138808]/10 text-[#138808] dark:text-[#22B814] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 border border-[#138808]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Decoration Themes &amp; Package Scope</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-950 dark:text-white tracking-tight">
            Our Decoration Packages
          </h2>

          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
            Every setup is custom-priced upfront based on balloon count, backdrop props, and your Hyderabad venue location — with clear written inclusions and zero hidden charges.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar px-1">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.value;

            return (
              <button
                key={tab.value}
                type="button"
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

        {/* Responsive Card Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#12141a] rounded-2xl sm:rounded-3xl p-2.5 sm:p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-200/70 dark:border-white/10 flex flex-col justify-between group cursor-pointer"
              onClick={() => setActiveModalItem(item)}
            >
              <div className="relative aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                  loading="lazy"
                  decoding="async"
                />

                <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 z-10">
                  <span className="inline-block px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-black/65 backdrop-blur-md text-white border border-white/20">
                    {item.badge}
                  </span>
                </div>

                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-2">
                  <span className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#138808] text-white text-[11px] sm:text-xs font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <Eye className="w-3.5 h-3.5" />
                    View Package Details
                  </span>
                </div>
              </div>

              <div className="mt-3 px-1 space-y-1">
                <h3 className="font-bold text-xs sm:text-sm md:text-base text-zinc-900 dark:text-white truncate group-hover:text-[#138808] dark:group-hover:text-[#22B814] transition-colors">
                  {item.title}
                </h3>

                <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400">
                  <span className="truncate font-medium text-[#FF7722]">{item.tag}</span>
                  <span className="hidden sm:inline font-semibold text-[#138808]">Details →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Reference Banner */}
        <div className="mt-14 sm:mt-20">
          <div className="bg-white dark:bg-[#12141a] rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-zinc-200/80 dark:border-white/10 text-center max-w-3xl mx-auto shadow-sm">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#138808]/15 text-[#138808] dark:text-emerald-400 mb-3">
              Custom Colour &amp; Theme Styling
            </span>

            <h3 className="text-xl sm:text-3xl font-black text-zinc-950 dark:text-white mb-2 tracking-tight">
              Need a Custom Theme or Venue Quote?
            </h3>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-6 leading-relaxed">
              Share your event date, Hyderabad locality, and colour preferences via our inquiry form, phone, or WhatsApp. We provide a written quotation with exact inclusions before booking.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                variant="primary"
                size="md"
                icon={FileText}
                onClick={() => scrollToSection('contact')}
                className="text-xs sm:text-sm"
              >
                Request Written Quote
              </Button>

              <Button
                variant="outline"
                size="md"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                icon={Phone}
                className="text-xs sm:text-sm"
              >
                Call {BUSINESS_INFO.phone}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick View Modal with Full Scope & Multi-Channel Actions */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative w-full max-w-sm sm:max-w-lg bg-white dark:bg-[#12141a] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-white/10 my-auto flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModalItem(null)}
              className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/70 text-white hover:bg-black transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="overflow-y-auto overscroll-contain flex-1">
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

              <div className="p-4 sm:p-6 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base sm:text-xl font-black text-zinc-950 dark:text-white tracking-tight">
                    {activeModalItem.title}
                  </h3>
                  <span className="text-[11px] sm:text-xs font-semibold text-[#FF7722] shrink-0">
                    {activeModalItem.tag}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                  <Clock className="w-3.5 h-3.5 text-[#138808] shrink-0" />
                  <span>Typical Setup Time: <strong>{activeModalItem.setupTime}</strong></span>
                </div>

                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-white/[0.04] border border-zinc-200/70 dark:border-white/10 space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#138808] shrink-0 mt-0.5" />
                    <span><strong>Typical Inclusions:</strong> {activeModalItem.inclusions}</span>
                  </p>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 pl-5">
                    {activeModalItem.pricingNote}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleRequestQuoteFromModal}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs sm:text-sm bg-[#138808] hover:bg-[#0f6e06] text-white active:scale-95 transition-all cursor-pointer"
                  >
                    <FileText className="w-4 h-4 shrink-0" />
                    <span>Get Quote on Form</span>
                  </button>

                  <a
                    href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(activeModalItem.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-3 px-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white active:scale-95 transition-all shrink-0"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="flex items-center justify-center gap-1.5 py-3 px-3.5 rounded-xl font-bold text-xs sm:text-sm border border-zinc-200 dark:border-white/15 bg-zinc-100 hover:bg-zinc-200 dark:bg-white/10 dark:text-white active:scale-95 transition-all shrink-0"
                    aria-label="Call for quote"
                  >
                    <Phone className="w-4 h-4 text-[#FF7722]" />
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
