import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';
import { 
  Sparkles, 
  MessageCircle, 
  Phone, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Star,
  CheckCircle2
} from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';
import Button from './Button';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// Widescreen High-Definition Balloon Decoration Images (Strictly Zero Blue)
import slideHero from '../assets/hero-balloon.jpg';
import slideBirthday from '../assets/birthday-balloon.jpg';
import slideAnniversary from '../assets/anniversary-balloon.jpg';
import slideStage from '../assets/gallery-celebration.jpg';
import slideEntrance from '../assets/gallery-party.jpg';
import slideHaldi from '../assets/haldi-balloon.jpg';

/**
 * Full-Width Luxury Hero Banner Carousel
 * Features:
 * - Expansive widescreen auto-slider (Fills the hero full-width)
 * - Removed bulky side-column text as requested
 * - Elegant glassmorphic floating captions & direct WhatsApp CTA
 * - Smooth fade transition every 3.5s with Indian Green progress dots
 * - STRICTLY ZERO BLUE
 */
export default function HeroSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: slideHero,
      badge: "Premier Stage Setup",
      badgeColor: "saffron",
      title: "Opulent Golden Saffron & Emerald Arch",
      subtitle: "Bespoke organic balloon styling for grand celebrations & receptions"
    },
    {
      id: 2,
      image: slideBirthday,
      badge: "Birthday Special",
      badgeColor: "saffron",
      title: "Grand Circular Birthday Ring & Neon Lights",
      subtitle: "Custom metallic gold, cream & warm spotlighting for milestone ages"
    },
    {
      id: 3,
      image: slideAnniversary,
      badge: "Romantic Canopies",
      badgeColor: "green",
      title: "Fairytale Candlelight Cabana & Red Roses",
      subtitle: "Intimate surprise setup with fairy lights, candles & helium balloons"
    },
    {
      id: 4,
      image: slideStage,
      badge: "Corporate & Galas",
      badgeColor: "green",
      title: "Royal Stage Backdrop & Dense Clustering",
      subtitle: "High-density organic balloon artistry designed for upscale venues"
    },
    {
      id: 5,
      image: slideEntrance,
      badge: "Grand Openings",
      badgeColor: "saffron",
      title: "Massive Sparkling Entrance Balloon Arch",
      subtitle: "High-impact metallic chrome pillars for inaugurations and parties"
    },
    {
      id: 6,
      image: slideHaldi,
      badge: "Traditional Haldi",
      badgeColor: "saffron",
      title: "Festive Marigold & Yellow Balloon Drapes",
      subtitle: "Traditional wedding celebration setups blending balloons with fresh florals"
    }
  ];

  return (
    <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl border border-zinc-200/80 dark:border-white/10 bg-zinc-950 group">
      
      {/* -------------------- MAIN SWIPER FULL-WIDTH BANNER -------------------- */}
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: true
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="hero-banner-swiper h-[460px] sm:h-[580px] lg:h-[680px] w-full"
      >
        {slides.map((slide) => {
          const whatsappUrl = `https://wa.me/919509971603?text=${encodeURIComponent(
            `Hi Magical Balloon Decor, I am interested in booking "${slide.title}". Please share pricing and availability for Hyderabad.`
          )}`;

          return (
            <SwiperSlide key={slide.id} className="relative w-full h-full overflow-hidden">
              
              {/* Full-bleed Widescreen Slide Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center select-none"
                loading="eager"
              />

              {/* Multi-Stop Luxury Gradient Overlay for pristine text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent hidden sm:block" />

              {/* Top Floating Brand Badge */}
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#138808] animate-pulse"></span>
                  <span>Magical Balloon Decoration Hyderabad</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#FF7722]" />
                </div>
              </div>

              {/* Bottom Caption & Action Area */}
              <div className="absolute bottom-12 sm:bottom-14 left-0 right-0 px-6 sm:px-10 lg:px-14 z-20">
                <div className="max-w-4xl">
                  
                  {/* Category Pill */}
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md mb-2.5 ${
                    slide.badgeColor === 'green'
                      ? 'bg-[#138808]/90 text-white border border-[#138808]'
                      : 'bg-[#FF7722]/90 text-white border border-[#FF7722]'
                  }`}>
                    {slide.badge}
                  </span>

                  {/* Main Slide Title */}
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-lg mb-2">
                    {slide.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-base text-zinc-200 max-w-2xl leading-relaxed drop-shadow-md mb-6 font-normal">
                    {slide.subtitle}
                  </p>

                  {/* Direct CTAs on Slide */}
                  <div className="flex flex-wrap items-center gap-3.5">
                    <Button
                      variant="primary"
                      size="md"
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={MessageCircle}
                      className="shadow-xl shadow-[#138808]/40 hover:scale-105"
                    >
                      Book on WhatsApp
                    </Button>

                    <Button
                      variant="outline"
                      size="md"
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      icon={Phone}
                      className="bg-black/40 text-white border-white/30 hover:border-white hover:bg-white/20"
                    >
                      Call {BUSINESS_INFO.phone}
                    </Button>
                  </div>

                </div>
              </div>

            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* -------------------- MINIMALIST NEXT/PREV NAVIGATION ARROWS -------------------- */}
      <button
        ref={prevRef}
        type="button"
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-[#138808] text-white border border-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg hidden sm:flex"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        ref={nextRef}
        type="button"
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-[#138808] text-white border border-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg hidden sm:flex"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

    </div>
  );
}
