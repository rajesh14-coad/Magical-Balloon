import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './utils/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from './utils/constants';

/**
 * Root Application Component
 * Architecture:
 * - ThemeProvider (defaulting to 'light' mode with dark toggle)
 * - React Router v7 / v6 setup with '/', '/services', '/gallery', '/contact'
 * - Sticky Glassmorphic Header & Subtle Tricolor Footer
 * - Responsive layout with zero blue color anywhere
 */
export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#FCFCFD] dark:bg-[#0A0B0E] text-zinc-900 dark:text-zinc-100 relative transition-colors duration-300 selection:bg-[#FF7722] selection:text-white flex flex-col justify-between">
          
          {/* Ambient Lighting Gradients (Strictly NO BLUE: Saffron & Indian Green only) */}
          <div className="fixed top-0 left-0 w-[550px] h-[550px] bg-[#FF7722]/5 dark:bg-[#FF7722]/[0.03] rounded-full blur-[140px] pointer-events-none -z-10" />
          <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-[#138808]/5 dark:bg-[#138808]/[0.03] rounded-full blur-[160px] pointer-events-none -z-10" />

          {/* Sticky Glassmorphic Header */}
          <Header />

          {/* Page Routing */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* Clean Modern Footer with Tricolor Line */}
          <Footer />

          {/* Floating WhatsApp Quick Action Button */}
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct WhatsApp Booking"
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#138808] text-white shadow-xl hover:bg-[#16a34a] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center shadow-[#138808]/30 cursor-pointer"
          >
            <MessageCircle className="w-6 h-6 fill-current" />
          </a>

        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
