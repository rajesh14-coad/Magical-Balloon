import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sun, Moon, MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '../utils/constants';
import { useTheme } from '../utils/theme';
import Button from './Button';

/**
 * Sticky Glassmorphic Header Component
 * Design:
 * - Ultra-premium frosted glass bar
 * - Left: Logo with Saffron-to-Green text gradient
 * - Center: Desktop nav links with smooth animated underline
 * - Right: Theme Toggle (Sun/Moon) + Saffron "Book on WhatsApp" CTA
 * - Responsive mobile drawer
 * - STRICTLY ZERO BLUE
 */
export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-header transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Brand Logo with Saffron-to-Green Gradient */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Magical Balloon Decoration Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF7722] via-white to-[#138808] p-[1.5px] shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
              <div className="w-full h-full bg-white dark:bg-[#0A0B0E] rounded-[10px] flex items-center justify-center transition-colors">
                <Sparkles className="w-5 h-5 text-[#FF7722]" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#FF7722] via-[#E67E22] to-[#138808] bg-clip-text text-transparent">
                Magical Balloon Decoration
              </span>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-zinc-500 dark:text-zinc-400">
                Hyderabad • Premium Events
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Links with animated underlines */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-1 text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-[#FF7722] font-semibold'
                      : 'text-zinc-700 hover:text-[#FF7722] dark:text-zinc-300 dark:hover:text-[#FFA059]'
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-[#FF7722] after:to-[#138808] after:transition-all after:duration-300 ${
                    isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: Theme Toggle & WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3.5">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2.5 rounded-xl border border-zinc-200/80 bg-white/70 text-zinc-700 hover:text-[#FF7722] hover:border-[#FF7722]/50 hover:bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.05] dark:text-zinc-300 dark:hover:text-[#FFA059] dark:hover:border-[#FF7722]/40 transition-all duration-300 cursor-pointer active:scale-95"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-600 transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>

            {/* Saffron CTA Button with scaling effect */}
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

          {/* Mobile Right Controls: Theme Toggle & Menu Hamburger */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-xl border border-zinc-200/80 bg-white/80 text-zinc-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-zinc-300"
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
              className="p-2 rounded-xl border border-zinc-200/80 bg-white/80 text-zinc-700 hover:text-black dark:border-white/10 dark:bg-white/[0.05] dark:text-zinc-300 dark:hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass-panel border-t border-zinc-200/60 dark:border-white/10 px-4 pt-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#FF7722]/10 text-[#FF7722] font-semibold dark:bg-[#FF7722]/15'
                      : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="pt-3 border-t border-zinc-200/60 dark:border-white/10 flex flex-col gap-2.5">
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
          </div>
        </div>
      )}
    </header>
  );
}
