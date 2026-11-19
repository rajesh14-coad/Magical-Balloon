import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './utils/theme';
import { NavigationProvider } from './utils/navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Services from './pages/Services';
import TrustHighlights from './components/TrustHighlights';
import Contact from './pages/Contact';
import WhatsAppIcon from './components/WhatsAppIcon';
import { BUSINESS_INFO } from './utils/constants';

/**
 * Root Application Component
 * Architecture:
 * - One-Page Smooth Scroll Single Page Application (SPA)
 * - Native Mobile App-like Bottom Navigation Dock (md:hidden)
 * - Sticky Glassmorphic Header & Subtle Tricolor Footer
 * - Mobile Safe Spacing (pb-24 md:pb-0)
 * - ThemeProvider (defaulting to 'light' mode with dark toggle)
 * - Live ScrollSpy & Smooth Section Scrolling
 * - STRICTLY ZERO BLUE
 */
export default function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-[#FCFCFD] dark:bg-[#0A0B0E] text-zinc-900 dark:text-zinc-100 relative transition-colors duration-300 selection:bg-[#138808] selection:text-white flex flex-col justify-between">
            
            {/* Ambient Lighting Gradients (Strictly NO BLUE: Saffron & Indian Green only) */}
            <div className="fixed top-0 left-0 w-[550px] h-[550px] bg-[#138808]/5 dark:bg-[#138808]/[0.03] rounded-full blur-[140px] pointer-events-none -z-10" />
            <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-[#FF7722]/5 dark:bg-[#FF7722]/[0.03] rounded-full blur-[160px] pointer-events-none -z-10" />

            {/* Sticky Header */}
            <Header />

            {/* One-Page Stacking with Safe-area padding for mobile bottom nav */}
            <main className="flex-grow pb-24 md:pb-0 space-y-12 sm:space-y-20">
              <section id="home" className="scroll-mt-20">
                <Home />
              </section>

              <section id="services" className="scroll-mt-20">
                <Services />
              </section>

              <section id="why-us">
                <TrustHighlights />
              </section>

              <section id="contact" className="scroll-mt-20">
                <Contact />
              </section>
            </main>

            {/* Clean Modern Footer */}
            <Footer />

            {/* Desktop Floating WhatsApp Button (Hidden on Mobile because Mobile has bottom action buttons) */}
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Booking"
              className="hidden md:flex fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20bd5a] hover:scale-110 active:scale-95 transition-all duration-300 items-center justify-center shadow-[#25D366]/40 cursor-pointer"
            >
              <WhatsAppIcon className="w-6 h-6 fill-current" />
            </a>

            {/* Native Mobile App Bottom Navigation Bar */}
            <BottomNav />

          </div>
        </BrowserRouter>
      </NavigationProvider>
    </ThemeProvider>
  );
}
