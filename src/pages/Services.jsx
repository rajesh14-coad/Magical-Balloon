import React, { useState } from 'react';
import { 
  Sparkles, 
  MessageCircle, 
  Check, 
  ArrowRight, 
  Gift, 
  Heart, 
  Baby, 
  Briefcase, 
  Flower2, 
  Car, 
  Home, 
  Layers 
} from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';

// 8 High-definition balloon decoration images (Zero Blue)
import birthdayImg from '../assets/birthday-balloon.jpg';
import anniversaryImg from '../assets/anniversary-balloon.jpg';
import haldiImg from '../assets/haldi-balloon.jpg';
import babyshowerImg from '../assets/babyshower-balloon.jpg';
import carbootImg from '../assets/carboot-balloon.jpg';
import roomDecorImg from '../assets/room-decor-balloon.jpg';
import corporateImg from '../assets/corporate-balloon.jpg';
import stageBackdropImg from '../assets/hero-balloon.jpg';

/**
 * Production-Ready Expanded Services Page
 * Features:
 * - 8 Comprehensive Decoration Categories
 * - Responsive 3-Column Desktop Grid (1 col mobile, 2 col tablet, 3 col desktop)
 * - Green (#138808) primary interactive styling & Saffron (#FF7722) accents
 * - Pre-filled WhatsApp direct booking enquiry per package
 * - STRICTLY ZERO BLUE
 */
export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');

  const allServices = [
    {
      id: "birthdays",
      title: "Magical Birthday Decors",
      categoryGroup: "family",
      badge: "Bestseller",
      accent: "saffron",
      icon: Gift,
      image: birthdayImg,
      subtitle: "Kids, Milestones & Adult Celebrations",
      description: "Organic circular balloon arches, customized neon age/name boards, warm spotlights, and dessert table styling in warm saffron, gold & ivory.",
      features: [
        "Organic circular balloon ring or archway",
        "Personalized neon 'Happy Birthday' board",
        "Dessert & cake table ambient spotlighting",
        "Full setup & prompt teardown crew"
      ],
      whatsappMsg: "Hi Magical Balloon Decoration, I want to enquire about Magical Birthday Decors package in Hyderabad."
    },
    {
      id: "anniversaries",
      title: "Romantic Anniversary Cabanas",
      categoryGroup: "couples",
      badge: "Couples Choice",
      accent: "green",
      icon: Heart,
      image: anniversaryImg,
      subtitle: "Cabana Canopies, Proposals & Surprises",
      description: "Fairytale chiffon canopy setups, glossy ruby red & pearl white balloons, fairy light curtains, and aromatic LED candles for romantic milestones.",
      features: [
        "Luxurious white chiffon cabana tent",
        "Ruby red, pearl white & silver balloons",
        "Twinkling LED fairy lights & candle pathway",
        "Customized anniversary name cutout"
      ],
      whatsappMsg: "Hi Magical Balloon Decoration, I want to enquire about Romantic Anniversary Cabana setup in Hyderabad."
    },
    {
      id: "haldi-mehendi",
      title: "Haldi & Mehendi Setup",
      categoryGroup: "traditional",
      badge: "Traditional Special",
      accent: "saffron",
      icon: Flower2,
      image: haldiImg,
      subtitle: "Marigold, Saffron & Emerald Themes",
      description: "Festive traditional wedding celebration setups blending vibrant yellow, gold, and green balloons with marigold florals, brass urlis, and cultural drapes.",
      features: [
        "Yellow, gold & leaf green organic arch",
        "Marigold floral strings & hanging tassels",
        "Traditional seating backdrop & drapes",
        "Waterproof on-site setup for outdoor lawns"
      ],
      whatsappMsg: "Hi Magical Balloon Decoration, I want to enquire about Haldi & Mehendi Balloon & Floral setup in Hyderabad."
    },
    {
      id: "baby-showers",
      title: "Welcome Baby Decor",
      categoryGroup: "family",
      badge: "Trending Decor",
      accent: "green",
      icon: Baby,
      image: babyshowerImg,
      subtitle: "Baby Shower & Cradle Ceremony",
      description: "Soothing pastel sage green, soft gold, and warm ivory balloon garlands with adorable teddy bear cutouts, cloud props, and customized welcome boards.",
      features: [
        "Pastel organic balloon backdrop arch",
        "Teddy bear & cloud thematic cutouts",
        "Welcome baby custom easel board",
        "Non-toxic, premium biodegradable balloons"
      ],
      whatsappMsg: "Hi Magical Balloon Decoration, I want to enquire about Welcome Baby / Baby Shower Decor in Hyderabad."
    },
    {
      id: "car-boot",
      title: "Car Boot Surprises",
      categoryGroup: "couples",
      badge: "Midnight Surprise",
      accent: "saffron",
      icon: Car,
      image: carbootImg,
      subtitle: "Mobile Birthday & Anniversary Surprises",
      description: "Discreet and high-impact car trunk decoration featuring fairy lights, helium heart balloons, photo clips, and personalized banner surprises.",
      features: [
        "SUV / Sedan trunk organic balloon styling",
        "Battery-operated twinkling fairy lights",
        "Hanging polaroid photo strings & bunting",
        "Discreet setup anywhere in Hyderabad"
      ],
      whatsappMsg: "Hi Magical Balloon Decoration, I want to enquire about Car Boot Surprise decoration in Hyderabad."
    },
    {
      id: "room-decor",
      title: "Romantic Room Decoration",
      categoryGroup: "couples",
      badge: "Intimate Decor",
      accent: "green",
      icon: Home,
      image: roomDecorImg,
      subtitle: "Bedrooms, Hotel Rooms & Suites",
      description: "Surprise room transformations with ceiling floating helium balloons with curling ribbons, floor balloons, LED candles, and rose petal arrangements.",
      features: [
        "Ceiling floating helium balloons with ribbons",
        "LED flame candles & rose petal decor",
        "Foil heart balloons & personalized message",
        "Setup completed in 60-90 minutes"
      ],
      whatsappMsg: "Hi Magical Balloon Decoration, I want to enquire about Romantic Room Decoration in Hyderabad."
    },
    {
      id: "corporate",
      title: "Corporate & Grand Openings",
      categoryGroup: "commercial",
      badge: "Commercial / B2B",
      accent: "green",
      icon: Briefcase,
      image: corporateImg,
      subtitle: "Store Openings, Product Launches & Galas",
      description: "Prestigious entrance pillars, ribbon-cutting balloon arches, and customized corporate color palettes designed for maximum brand impact.",
      features: [
        "Grand entrance balloon arches & pillars",
        "Exact corporate brand color matching",
        "High-volume durable foil & metallic decor",
        "Fast commercial setup across IT corridors"
      ],
      whatsappMsg: "Hi Magical Balloon Decoration, I want to enquire about Corporate / Grand Opening balloon setup in Hyderabad."
    },
    {
      id: "ring-backdrops",
      title: "Grand Ring & Stage Backdrops",
      categoryGroup: "family",
      badge: "Luxury Stage",
      accent: "saffron",
      icon: Layers,
      image: stageBackdropImg,
      subtitle: "7ft-8ft Circular Metallic Frame Styling",
      description: "Magnificent 7-8 ft metallic ring frames enveloped in thick organic balloon garlands, custom 3D acrylic signage, and warm ambient backlighting.",
      features: [
        "Heavy-duty 7ft/8ft metallic ring structure",
        "Dual-density organic balloon clustering",
        "Custom laser-cut 3D acrylic text",
        "Professional stage backlighting & stands"
      ],
      whatsappMsg: "Hi Magical Balloon Decoration, I want to enquire about Grand Ring & Stage Backdrop setup in Hyderabad."
    }
  ];

  const filterTabs = [
    { label: "All Packages", value: "All" },
    { label: "Family & Birthdays", value: "family" },
    { label: "Romantic & Couples", value: "couples" },
    { label: "Traditional & Haldi", value: "traditional" },
    { label: "Corporate & B2B", value: "commercial" }
  ];

  const filteredServices = activeCategory === 'All'
    ? allServices
    : allServices.filter(s => s.categoryGroup === activeCategory);

  return (
    <div className="py-12 sm:py-20 relative">
      
      {/* Ambient Lighting Gradients (Strictly NO BLUE: Indian Green & Saffron) */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[450px] bg-gradient-to-b from-[#138808]/10 via-[#FF7722]/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-white/[0.06] border border-zinc-200/80 dark:border-white/10 text-xs font-bold uppercase tracking-wider text-[#138808] dark:text-emerald-400 shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Event Decoration Catalog</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-zinc-950 dark:text-white tracking-tight leading-tight mb-4">
            Bespoke <span className="text-[#138808]">Decoration</span> Packages
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            Every celebration in Hyderabad deserves a unique aesthetic. Explore our 8 signature decoration services or request a customized setup tailored to your venue and budget.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveCategory(tab.value)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#138808] to-[#1cb80e] text-white shadow-md shadow-[#138808]/25 scale-105'
                    : 'glass-panel text-zinc-700 dark:text-zinc-300 hover:text-[#138808] hover:border-[#138808]/40'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 3-Column Desktop Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            const whatsappLink = `https://wa.me/919509971603?text=${encodeURIComponent(service.whatsappMsg)}`;

            return (
              <GlassCard
                key={service.id}
                title={service.title}
                subtitle={service.subtitle}
                image={service.image}
                imageAlt={service.title}
                badge={service.badge}
                accent={service.accent}
                padding="p-6"
                className="flex flex-col justify-between group"
              >
                <div>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Checklist of Features */}
                  <div className="space-y-2.5 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-2">
                      Package Includes:
                    </span>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                        <div className="p-0.5 rounded-full mt-0.5 shrink-0 bg-[#138808]/15 text-[#138808]">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom WhatsApp CTA Button in Premium Green */}
                <div className="pt-4 border-t border-zinc-200/60 dark:border-white/[0.08] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 font-medium">
                    <Icon className="w-3.5 h-3.5 text-[#138808]" />
                    <span>Hyderabad Wide</span>
                  </div>

                  <Button
                    variant="primary"
                    size="sm"
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={MessageCircle}
                    className="shrink-0"
                  >
                    Enquire Now
                  </Button>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Custom Pinterest/Instagram Request Banner */}
        <div className="mt-20 sm:mt-28">
          <GlassCard accent="green" padding="p-8 sm:p-14" className="text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="relative z-10">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#138808]/15 text-[#138808] dark:text-emerald-400 mb-4">
                Have a Specific Theme in Mind?
              </span>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white mb-3 tracking-tight">
                Seen a Design on Pinterest or Instagram?
              </h2>

              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                Send us your reference photo on WhatsApp. Our Hyderabad decor specialists will customize the exact color palettes, lighting, and balloon density to fit your venue.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={MessageCircle}
                >
                  Share Photo on WhatsApp
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                >
                  Call +91 9509971603
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>

      </div>
    </div>
  );
}
