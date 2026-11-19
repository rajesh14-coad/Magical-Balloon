import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './utils/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from './utils/constants';

/**
 * Root Application Component
 * Architecture:
 * - Native Mobile App-like Bottom Navigation Dock (md:hidden)
 * - Sticky Glassmorphic Header & Subtle Tricolor Footer
 * - Mobile Safe Spacing (pb-20 md:pb-0)
 * - ThemeProvider (defaulting to 'light' mode with dark toggle)
 * - STRICTLY ZERO BLUE
 */
export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#FCFCFD] dark:bg-[#0A0B0E] text-zinc-900 dark:text-zinc-100 relative transition-colors duration-300 selection:bg-[#138808] selection:text-white flex flex-col justify-between">
          
          {/* Ambient Lighting Gradients (Strictly NO BLUE: Saffron & Indian Green only) */}
          <div className="fixed top-0 left-0 w-[550px] h-[550px] bg-[#138808]/5 dark:bg-[#138808]/[0.03] rounded-full blur-[140px] pointer-events-none -z-10" />
          <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-[#FF7722]/5 dark:bg-[#FF7722]/[0.03] rounded-full blur-[160px] pointer-events-none -z-10" />

          {/* Sticky Header */}
          <Header />

          {/* Page Routing with Safe-area padding for mobile bottom nav */}
          <main className="flex-grow pb-24 md:pb-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* Clean Modern Footer */}
          <Footer />

          {/* Desktop Floating WhatsApp Button (Hidden on Mobile because Mobile has BottomNav center button) */}
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct WhatsApp Booking"
            className="hidden md:flex fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#138808] text-white shadow-xl hover:bg-[#16a34a] hover:scale-110 active:scale-95 transition-all duration-300 items-center justify-center shadow-[#138808]/30 cursor-pointer"
          >
            <MessageCircle className="w-6 h-6 fill-current" />
          </a>

          {/* Native Mobile App Bottom Navigation Bar */}
          <BottomNav />

        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
