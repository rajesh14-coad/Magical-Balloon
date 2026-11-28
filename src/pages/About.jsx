import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, MapPin, Phone, Clock, CheckCircle2, Mail, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';
import Button from '../components/Button';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function About() {
  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#138808] hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="bg-white/90 dark:bg-[#12141A]/90 rounded-3xl p-6 sm:p-10 border border-zinc-200/80 dark:border-white/10 shadow-sm space-y-10">
          <header className="space-y-4 border-b border-zinc-200/70 dark:border-white/10 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#138808]/10 text-[#138808] dark:text-[#22B814] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Our Hyderabad Studio</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-zinc-950 dark:text-white tracking-tight">
              About {BUSINESS_INFO.name}
            </h1>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Based in Balanagar, Hyderabad, <strong>{BUSINESS_INFO.name}</strong> provides customised on-site balloon and event decoration for birthdays, anniversaries, baby showers, welcome-baby celebrations, traditional Haldi functions, and corporate store openings across Hyderabad.
            </p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-white/[0.04] border border-zinc-200/60 dark:border-white/10 space-y-3">
              <h2 className="text-lg font-bold text-zinc-950 dark:text-white">What Sets Our Service Apart</h2>
              <ul className="space-y-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#138808] shrink-0 mt-1" />
                  <span><strong>Transparent Estimates:</strong> Every customer receives an itemised quote covering balloon count, props, lighting, and setup charges before booking.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#138808] shrink-0 mt-1" />
                  <span><strong>Quality Balloon Materials:</strong> We work with matte, pastel, chrome, and metallic natural latex balloons along with clean backdrop frames and warm LED accents.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#138808] shrink-0 mt-1" />
                  <span><strong>On-Site Hyderabad Team:</strong> Our decorators travel directly to your home, apartment party hall, banquet venue, or office across Hyderabad.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-white/[0.04] border border-zinc-200/60 dark:border-white/10 space-y-4">
              <h2 className="text-lg font-bold text-zinc-950 dark:text-white">Business &amp; Workshop Details</h2>
              <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#138808] shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white">{BUSINESS_INFO.legalEntityName}</p>
                    <p>{BUSINESS_INFO.address}</p>
                    <a
                      href={BUSINESS_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#138808] hover:underline mt-1"
                    >
                      <span>View Location on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#FF7722] shrink-0" />
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-semibold hover:text-[#138808]">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#FF7722] shrink-0" />
                  <span>{BUSINESS_INFO.openingHours}</span>
                </div>

                {BUSINESS_INFO.email && (
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#138808] shrink-0" />
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="font-semibold hover:text-[#138808]">
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-950 dark:text-white">Areas We Serve in Hyderabad</h2>
            <div className="flex flex-wrap gap-2">
              {BUSINESS_INFO.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium bg-zinc-100 dark:bg-white/[0.06] text-zinc-700 dark:text-zinc-300 border border-zinc-200/70 dark:border-white/10"
                >
                  {area}
                </span>
              ))}
            </div>
          </section>

          <section className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-200/70 dark:border-white/10">
            <Button
              variant="primary"
              size="md"
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={WhatsAppIcon}
            >
              Chat on WhatsApp
            </Button>
            <Button
              variant="outline"
              size="md"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              icon={Phone}
            >
              Call {BUSINESS_INFO.phone}
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
}
