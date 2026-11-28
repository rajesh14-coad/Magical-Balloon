import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sun, Moon, Menu, X, Phone, FileText } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '../utils/constants';
import { useTheme } from '../utils/theme';
import { useNavigation } from '../utils/navigation';
import Button from './Button';

/**
 * Sticky Header supporting both multi-page legal/about routes and one-page section scrolling.
 */
export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { activeSection, scrollToSection } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (link) => {
    setMobileMenuOpen(false);
    if (link.id === 'about') {
      navigate('/about');
      return;
    }
    scrollToSection(link.id);
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-header transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none text-left cursor-pointer"
            aria-label="Magical Balloon Decoration Home"
          >
            <img
              src="/favicon.svg"
              alt="Magical Balloon Decoration logo"
              width={40}
              height={40}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300 shrink-0"
            />

            <div className="flex flex-col">
              <span className="text-base sm:text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#138808] via-[#1db50d] to-[#FF7722] bg-clip-text text-transparent">
                Magical Balloon
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-zinc-500 dark:text-zinc-400">
                Hyderabad • Decor
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link)}
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

            <Button
              variant="primary"
              size="md"
              onClick={() => scrollToSection('contact')}
              icon={FileText}
              className="shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              Get Free Quote
            </Button>
          </div>

          {/* Right Mobile Controls */}
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
                  type="button"
                  onClick={() => handleNavClick(link)}
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
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToSection('contact');
              }}
              icon={FileText}
              className="w-full justify-center"
            >
              Get Free Quote
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
