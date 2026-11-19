import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Web-Optimized Lightweight Balloon Decoration Images (Strictly Zero Blue)
import slideHero from '../assets/hero-balloon.jpg';
import slideBirthday from '../assets/birthday-balloon.jpg';
import slideAnniversary from '../assets/anniversary-balloon.jpg';
import slideStage from '../assets/pexels-rebornfilmes-36704177.jpg';
import slideHaldi from '../assets/haldi-balloon.jpg';

/**
 * Pure Visual Clean Hero Banner Carousel (Zero Text Overlays)
 * Features:
 * - 100% Clean full-bleed balloon decoration photos without text, badges, or buttons
 * - Proportional Height: h-[220px] on mobile, h-[320px] on tablet, h-[380px] on desktop
 * - Glitch-free smooth auto-slider
 * - Subtle navigation arrows & pagination dots
 * - STRICTLY ZERO BLUE
 */
export default function HeroSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slides = [
    { id: 1, image: slideHero, title: "Opulent Golden Saffron Arch" },
    { id: 2, image: slideBirthday, title: "Grand Birthday Ring Decor" },
    { id: 3, image: slideAnniversary, title: "Romantic Candlelight Cabana" },
    { id: 4, image: slideStage, title: "Royal Stage Backdrop" },
    { id: 5, image: slideHaldi, title: "Traditional Festive Haldi Decor" }
  ];

  return (
    <div className="relative w-full h-[220px] sm:h-[320px] lg:h-[380px] overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg border border-zinc-200/80 dark:border-white/10 bg-zinc-900 group">
      
      {/* -------------------- MAIN SWIPER BANNER -------------------- */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        speed={700}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="hero-banner-swiper w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full overflow-hidden select-none bg-zinc-900">
            {/* 100% Full-bleed Pure Visual Image - Zero Text / Badges */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover object-center select-none"
              loading="eager"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows (Hidden on Mobile) */}
      <button
        ref={prevRef}
        type="button"
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-[#138808] text-white border border-white/20 backdrop-blur-md items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer shadow-md hidden md:flex"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        ref={nextRef}
        type="button"
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-[#138808] text-white border border-white/20 backdrop-blur-md items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer shadow-md hidden md:flex"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

    </div>
  );
}
