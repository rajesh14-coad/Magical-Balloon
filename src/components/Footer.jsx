import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail, Sparkles, ArrowUpRight, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS, LEGAL_LINKS } from '../utils/constants';
import { useNavigation } from '../utils/navigation';
import WhatsAppIcon from './WhatsAppIcon';

const COPYRIGHT_YEAR = new Date().getFullYear();

/**
 * Footer with full business identity, direct support channels, physical address, and policy links.
 */
export default function Footer() {
  const { scrollToSection } = useNavigation();

  return (
    <footer className="w-full relative mt-20 sm:mt-28 bg-zinc-50/90 dark:bg-[#0A0B0E] border-t border-zinc-200/60 dark:border-white/[0.08] transition-colors duration-300">
      {/* Subtle Tricolor Accent Line */}
      <div className="w-full h-[1.5px] bg-gradient-to-r from-[#FF7722] via-zinc-300 to-[#138808] dark:from-[#FF7722] dark:via-white/70 dark:to-[#138808]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              to="/"
              className="flex items-center gap-3 group inline-flex text-left cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF7722] via-white to-[#138808] p-[1.5px]">
                <div className="w-full h-full bg-white dark:bg-[#0A0B0E] rounded-[9px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#FF7722]" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-[#FF7722] via-[#E67E22] to-[#138808] bg-clip-text text-transparent">
                {BUSINESS_INFO.name}
              </span>
            </Link>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed">
              {BUSINESS_INFO.tagline}. Upfront quotes, custom colour themes, and scheduled on-site setup across Hyderabad.
            </p>

            <div className="flex items-center gap-2.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
              <Clock className="w-4 h-4 text-[#FF7722] shrink-0" />
              <span>{BUSINESS_INFO.openingHours}</span>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7722]"></span>
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.filter((l) => l.id !== 'about').map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-zinc-600 hover:text-[#FF7722] dark:text-zinc-400 dark:hover:text-[#FFA059] transition-colors inline-flex items-center gap-1 group cursor-pointer text-left"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-[#FF7722]" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Policies & Legal (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#138808]"></span>
              Company &amp; Policies
            </h4>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-zinc-600 hover:text-[#138808] dark:text-zinc-400 dark:hover:text-[#22B814] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Contact & Workshop (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500"></span>
              Contact &amp; Workshop
            </h4>

            <div className="space-y-2.5">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 text-sm text-zinc-700 hover:text-[#FF7722] dark:text-zinc-300 dark:hover:text-[#FFA059] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FF7722] shrink-0" />
                <span className="font-medium text-xs sm:text-sm">{BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-zinc-700 hover:text-[#138808] dark:text-zinc-300 dark:hover:text-[#22B814] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#138808] fill-current shrink-0" />
                <span className="font-medium text-xs sm:text-sm">WhatsApp Inquiry</span>
              </a>

              {BUSINESS_INFO.email && (
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-2.5 text-sm text-zinc-700 hover:text-[#138808] dark:text-zinc-300 dark:hover:text-[#22B814] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#138808] shrink-0" />
                  <span className="font-medium text-xs sm:text-sm break-all">{BUSINESS_INFO.email}</span>
                </a>
              )}
            </div>

            <div className="flex items-start gap-2.5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 pt-1">
              <MapPin className="w-4 h-4 text-[#138808] shrink-0 mt-0.5" />
              <div>
                <p className="select-all">{BUSINESS_INFO.address}</p>
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#138808] font-semibold hover:underline mt-1"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 pt-6 border-t border-zinc-200/70 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <p>© {COPYRIGHT_YEAR} {BUSINESS_INFO.legalEntityName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link to="/privacy-policy" className="hover:text-[#138808] underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#138808] underline">
              Terms &amp; Conditions
            </Link>
            <Link to="/refund-policy" className="hover:text-[#138808] underline">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
