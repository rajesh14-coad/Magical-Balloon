import React, { useState } from 'react';
import { Sun, Moon, MessageCircle, Menu, X, Sparkles, Phone } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '../utils/constants';
import { useTheme } from '../utils/theme';
import { useNavigation } from '../utils/navigation';
import Button from './Button';

/**
 * Mobile-First Sticky Header for One-Page Smooth Scroll SPA
 * Features:
 * - Precision smooth scroll to #home, #services, #gallery, #contact
 * - Live active tab indicator matching current scroll position
 * - Direct 1-tap call button on mobile
 * - STRICTLY ZERO BLUE
 */
export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { activeSection, scrollToSection } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-header transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left: Brand Logo (Scrolls to top/home) */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none text-left cursor-pointer"
            aria-label="Magical Balloon Decoration Home"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#138808] via-white to-[#FF7722] p-[1.5px] shadow-sm group-hover:scale-105 transition-all duration-300">
              <div className="w-full h-full bg-white dark:bg-[#0A0B0E] rounded-[9px] sm:rounded-[10px] flex items-center justify-center transition-colors">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#138808]" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-base sm:text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#138808] via-[#1db50d] to-[#FF7722] bg-clip-text text-transparent">
                Magical Balloon
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-zinc-500 dark:text-zinc-400">
                Hyderabad • Decor
              </span>
            </div>
          </button>

          {/* Center: Desktop Navigation Links with Live Scrollspy */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#138808] font-bold'
                      : 'text-zinc-700 hover:text-[#138808] dark:text-zinc-300 dark:hover:text-[#22B814]'
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:bg-gradient-to-r after:from-[#138808] after:to-[#FF7722] after:transition-all after:duration-300 ${
                    isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Desktop Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2.5 rounded-xl border border-zinc-200/80 bg-white/70 text-zinc-700 hover:text-[#138808] hover:border-[#138808]/50 hover:bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.05] dark:text-zinc-300 dark:hover:text-[#22B814] dark:hover:border-[#138808]/40 transition-all duration-300 cursor-pointer active:scale-95"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-600 transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>

            {/* Indian Green WhatsApp CTA */}
            <Button
              variant="primary"
              size="md"
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={MessageCircle}
              className="shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              Book on WhatsApp
            </Button>
          </div>

          {/* Right Mobile Controls: Direct 1-Tap Call + Theme Toggle + Menu */}
          <div className="flex items-center gap-1.5 sm:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              aria-label="Call Now"
              className="p-2 rounded-xl bg-[#138808]/15 text-[#138808] border border-[#138808]/30 active:scale-90 transition-transform"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-xl border border-zinc-200/80 bg-white/80 text-zinc-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-zinc-300 active:scale-90 transition-transform cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-600" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-zinc-200/80 bg-white/80 text-zinc-700 active:scale-90 dark:border-white/10 dark:bg-white/[0.05] dark:text-zinc-300 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass-panel border-t border-zinc-200/60 dark:border-white/10 px-4 pt-3 pb-5 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors text-left cursor-pointer ${
                    isActive
                      ? 'bg-[#138808]/15 text-[#138808] font-bold'
                      : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-zinc-200/60 dark:border-white/10 flex flex-col gap-2">
            <Button
              variant="primary"
              size="md"
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={MessageCircle}
              className="w-full justify-center"
            >
              Book on WhatsApp
            </Button>
            <Button
              variant="outline"
              size="md"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              icon={Phone}
              className="w-full justify-center"
            >
              Call {BUSINESS_INFO.phone}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
