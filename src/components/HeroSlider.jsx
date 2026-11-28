import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Verified Balloon Decoration Images
import slideHero from '../assets/hero-balloon.jpg';
import slideHaldi from '../assets/haldi-decor.jpg';
import slideAnniversary from '../assets/anniversary-balloon.jpg';
import slideCorporate from '../assets/corporate-opening-decor.jpg';
import slidePastel from '../assets/pexels-mlkbnl-10651684.jpg';

/**
 * Pure Visual Hero Banner Carousel
 */
export default function HeroSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slides = [
    { id: 1, image: slideHero, title: "Grand Banquet Entrance Balloon Arch in Hyderabad" },
    { id: 2, image: slideHaldi, title: "Traditional Haldi and Mehendi Balloon & Marigold Backdrop" },
    { id: 3, image: slideAnniversary, title: "Crimson and Silver Heart Balloon Arch for Anniversaries" },
    { id: 4, image: slideCorporate, title: "Storefront and Office Grand Opening Balloon Entrance Arch" },
    { id: 5, image: slidePastel, title: "Pastel Sage and Peach Organic Balloon Arch Setup" }
  ];

  return (
    <div className="relative w-full h-[220px] sm:h-[320px] lg:h-[380px] overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg border border-zinc-200/80 dark:border-white/10 bg-zinc-900 group">
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
        navigation={true}
        onInit={(swiper) => {
          if (prevRef.current && nextRef.current) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        className="hero-banner-swiper w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full overflow-hidden select-none bg-zinc-900">
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover object-center select-none"
              loading={idx === 0 ? 'eager' : 'lazy'}
              fetchPriority={idx === 0 ? 'high' : 'auto'}
              decoding={idx === 0 ? 'sync' : 'async'}
            />
          </SwiperSlide>
        ))}
      </Swiper>

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
