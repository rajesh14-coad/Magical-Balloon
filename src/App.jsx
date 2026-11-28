import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './utils/theme';
import { NavigationProvider } from './utils/navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Services from './pages/Services';
import TrustHighlights from './components/TrustHighlights';
import FaqSection from './components/FaqSection';
import Contact from './pages/Contact';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import RefundPolicy from './pages/RefundPolicy';
import NotFound from './pages/NotFound';
import WhatsAppIcon from './components/WhatsAppIcon';
import { BUSINESS_INFO } from './utils/constants';

const ROUTE_META = {
  '/': {
    title: 'Magical Balloon Decoration Hyderabad | Birthday, Anniversary & Event Decor',
    description:
      'Custom birthday, anniversary, baby shower, Haldi, and corporate event balloon decoration in Hyderabad. Serving Balanagar, Kukatpally, Madhapur & city-wide. Call +91 9509971603.',
    canonical: 'https://magicalballoondecoration.com/'
  },
  '/services': {
    title: 'Decoration Packages & Themes | Magical Balloon Decoration Hyderabad',
    description:
      'Browse birthday, anniversary, baby shower, Haldi, and corporate balloon decoration packages in Hyderabad with upfront written estimates.',
    canonical: 'https://magicalballoondecoration.com/services'
  },
  '/gallery': {
    title: 'Decoration Themes & Portfolio | Magical Balloon Decoration Hyderabad',
    description:
      'Explore balloon decoration themes for birthdays, anniversaries, baby showers, and grand openings across Hyderabad.',
    canonical: 'https://magicalballoondecoration.com/gallery'
  },
  '/contact': {
    title: 'Contact & Free Quote | Magical Balloon Decoration Hyderabad',
    description:
      'Contact Magical Balloon Decoration in Balanagar, Hyderabad (+91 9509971603) for upfront balloon decoration quotes and availability.',
    canonical: 'https://magicalballoondecoration.com/contact'
  },
  '/about': {
    title: 'About Us | Magical Balloon Decoration Hyderabad',
    description:
      'Learn about Magical Balloon Decoration in Balanagar, Hyderabad — our decoration team, materials, service areas, and transparent booking workflow.',
    canonical: 'https://magicalballoondecoration.com/about'
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Magical Balloon Decoration Hyderabad',
    description:
      'Privacy Policy for Magical Balloon Decoration (magicalballoondecoration.com) explaining inquiry data handling, WhatsApp disclosure, cookies, and user rights.',
    canonical: 'https://magicalballoondecoration.com/privacy-policy'
  },
  '/terms': {
    title: 'Terms & Conditions | Magical Balloon Decoration Hyderabad',
    description:
      'Service Terms and Conditions for booking balloon and event decoration services with Magical Balloon Decoration in Hyderabad.',
    canonical: 'https://magicalballoondecoration.com/terms'
  },
  '/refund-policy': {
    title: 'Cancellation & Refund Policy | Magical Balloon Decoration Hyderabad',
    description:
      'Clear booking cancellation, rescheduling, and advance refund timelines for Magical Balloon Decoration Hyderabad.',
    canonical: 'https://magicalballoondecoration.com/refund-policy'
  }
};

function LandingPage({ focusSection }) {
  useEffect(() => {
    if (!focusSection || typeof document === 'undefined' || typeof window === 'undefined') return;
    const el = document.getElementById(focusSection);
    if (el) {
      const headerOffset = 76;
      const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'auto' });
    }
  }, [focusSection]);

  return (
    <div className="space-y-12 sm:space-y-20">
      <section id="home" className="scroll-mt-20">
        <Home />
      </section>

      <section id="services" className="scroll-mt-20">
        <Services />
      </section>

      <section id="why-us" className="scroll-mt-20">
        <TrustHighlights />
      </section>

      <section id="faq" className="scroll-mt-20">
        <FaqSection />
      </section>

      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </div>
  );
}

function RouteMetaSync() {
  const location = useLocation();

  useEffect(() => {
    const meta = ROUTE_META[location.pathname] || {
      title: `${BUSINESS_INFO.name} | Hyderabad`,
      description: BUSINESS_INFO.tagline,
      canonical: `${BUSINESS_INFO.websiteUrl}/`
    };
    document.title = meta.title;

    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute('content', meta.description);

    const canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) canonicalEl.setAttribute('href', meta.canonical);
  }, [location.pathname]);

  return null;
}

/**
 * Root Application Shell (Router is provided by main.jsx on client and entry-server.jsx for SSR pre-rendering)
 */
export default function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <RouteMetaSync />
        <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#FCFCFD] dark:bg-[#0A0B0E] text-zinc-900 dark:text-zinc-100 relative transition-colors duration-300 selection:bg-[#138808] selection:text-white flex flex-col justify-between">
          {/* Ambient Lighting Gradients (Saffron & Indian Green only) */}
          <div className="fixed top-0 left-0 w-[550px] max-w-full h-[550px] bg-[#138808]/5 dark:bg-[#138808]/[0.03] rounded-full blur-[140px] pointer-events-none -z-10 overflow-hidden" />
          <div className="fixed bottom-0 right-0 w-[600px] max-w-full h-[600px] bg-[#FF7722]/5 dark:bg-[#FF7722]/[0.03] rounded-full blur-[160px] pointer-events-none -z-10 overflow-hidden" />

          <Header />

          <main className="flex-grow pb-28 sm:pb-32 md:pb-0">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/services" element={<LandingPage focusSection="services" />} />
              <Route path="/gallery" element={<LandingPage focusSection="services" />} />
              <Route path="/contact" element={<LandingPage focusSection="contact" />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />

          {/* Desktop Floating WhatsApp Shortcut */}
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Inquiry"
            className="hidden md:flex fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20bd5a] hover:scale-110 active:scale-95 transition-all duration-300 items-center justify-center shadow-[#25D366]/40 cursor-pointer"
          >
            <WhatsAppIcon className="w-6 h-6 fill-current" />
          </a>

          <BottomNav />
        </div>
      </NavigationProvider>
    </ThemeProvider>
  );
}
