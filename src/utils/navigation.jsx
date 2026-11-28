import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NavigationContext = createContext();

/**
 * Navigation Provider supporting both one-page smooth section scrolling on `/`
 * and multi-page routes (`/about`, `/privacy-policy`, `/terms`, `/refund-policy`).
 */
export function NavigationProvider({ children }) {
  const [scrollSection, setScrollSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const activeSection =
    location.pathname !== '/' ? location.pathname.replace('/', '') : scrollSection;

  const performScroll = useCallback((id) => {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }, []);

  const scrollToSection = useCallback(
    (id) => {
      setScrollSection(id);
      if (location.pathname !== '/') {
        navigate(`/#${id}`);
        setTimeout(() => performScroll(id), 80);
      } else {
        performScroll(id);
      }
    },
    [location.pathname, navigate, performScroll]
  );

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      setTimeout(() => performScroll(targetId), 80);
    }
  }, [location.pathname, location.hash, performScroll]);

  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = ['home', 'services', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setScrollSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <NavigationContext.Provider value={{ activeSection, scrollToSection }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
