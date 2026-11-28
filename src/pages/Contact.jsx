import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MapPin,
  Clock,
  Send,
  Sparkles,
  Calendar,
  User,
  Tag,
  CheckCircle2,
  Mail,
  ExternalLink
} from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import WhatsAppIcon from '../components/WhatsAppIcon';

/**
 * Contact & Quote Request Section
 * Includes Privacy/Terms consent, popup-safe WhatsApp inquiry fallback, physical address, and map link.
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Birthday Celebration',
    eventDate: '',
    message: '',
    consent: false
  });

  const [submitState, setSubmitState] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formattedMessage =
      `*New Booking Inquiry - ${BUSINESS_INFO.name}*\n` +
      `--------------------------------------\n` +
      `Name: ${formData.name.trim() || 'Not provided'}\n` +
      `Phone: ${formData.phone.trim() || 'Not provided'}\n` +
      `Event: ${formData.eventType}\n` +
      `Date: ${formData.eventDate || 'To be decided'}\n` +
      `Venue & Notes: ${formData.message.trim() || 'Standard package quote request'}\n` +
      `--------------------------------------\n` +
      `Sent via ${BUSINESS_INFO.websiteUrl}`;

    const encodedUrl = `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(formattedMessage)}`;
    const popupWindow = window.open(encodedUrl, '_blank', 'noopener,noreferrer');

    setSubmitState({
      url: encodedUrl,
      popupBlocked: !popupWindow
    });
  };

  return (
    <div className="py-12 sm:py-20 relative overflow-hidden">
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-12 left-1/3 -translate-x-1/2 w-[700px] max-w-full h-[450px] bg-gradient-to-r from-[#FF7722]/10 via-[#138808]/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-white/[0.06] border border-zinc-200/80 dark:border-white/10 text-xs font-semibold text-zinc-800 dark:text-zinc-200 shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7722]" />
            <span>Free Event Estimate &amp; Workshop Details</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 dark:text-white tracking-tight leading-tight mb-4">
            Get in <span className="gradient-tricolor-text">Touch</span>
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-lg leading-relaxed">
            Planning a celebration in Hyderabad? Share your event date and locality below or call us during operating hours ({BUSINESS_INFO.openingHours}) for a clear written quote.
          </p>
        </div>

        {/* Two-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Business Info */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard accent="saffron" padding="p-6 sm:p-8" className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF7722] block mb-1">
                  {BUSINESS_INFO.name}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
                  Book With Confidence
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                  Reach our Hyderabad booking desk by phone or WhatsApp to confirm date availability and receive a detailed decoration quotation.
                </p>
              </div>

              <div className="pt-1">
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 sm:py-4 px-3 sm:px-6 rounded-xl sm:rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 sm:gap-3 shadow-xl shadow-[#25D366]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-current shrink-0" />
                  <span className="whitespace-nowrap">Chat on WhatsApp</span>
                  <span className="hidden sm:inline text-xs opacity-90 font-medium">({BUSINESS_INFO.phone})</span>
                </a>
              </div>

              <div className="space-y-4 pt-2 border-t border-zinc-200/60 dark:border-white/[0.08]">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-zinc-100/70 hover:bg-[#FF7722]/10 dark:bg-white/[0.04] dark:hover:bg-[#FF7722]/15 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-[#FF7722]/15 text-[#FF7722] group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                      Booking Phone Line
                    </span>
                    <span className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-[#FF7722] dark:text-white dark:group-hover:text-[#FFA059] transition-colors">
                      {BUSINESS_INFO.phone}
                    </span>
                  </div>
                </a>

                {BUSINESS_INFO.email && (
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="flex items-center gap-4 p-3.5 rounded-xl bg-zinc-100/70 hover:bg-[#138808]/10 dark:bg-white/[0.04] dark:hover:bg-[#138808]/15 transition-colors group"
                  >
                    <div className="p-2.5 rounded-lg bg-[#138808]/15 text-[#138808]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                        Official Email
                      </span>
                      <span className="text-sm font-bold text-zinc-900 dark:text-white break-all">
                        {BUSINESS_INFO.email}
                      </span>
                    </div>
                  </a>
                )}

                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-zinc-100/70 dark:bg-white/[0.04]">
                  <div className="p-2.5 rounded-lg bg-[#138808]/15 text-[#138808] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                      Workshop &amp; Office Address
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed mt-1 font-medium select-all">
                      {BUSINESS_INFO.address}
                    </p>
                    <a
                      href={BUSINESS_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#138808] hover:underline mt-1.5"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-zinc-100/70 dark:bg-white/[0.04]">
                  <div className="p-2.5 rounded-lg bg-zinc-200/80 dark:bg-white/10 text-zinc-700 dark:text-zinc-300">
                    <Clock className="w-5 h-5 text-[#FF7722]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                      Operating Hours
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200">
                      {BUSINESS_INFO.openingHours}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-2.5">
                  Service Coverage in Hyderabad:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {BUSINESS_INFO.serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-zinc-200/60 dark:bg-white/[0.05] text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-white/[0.06]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Quote Inquiry Form */}
          <div className="lg:col-span-7">
            <GlassCard accent="green" padding="p-6 sm:p-10" className="relative">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#138808] dark:text-emerald-400 block mb-1">
                  Request Custom Quotation
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
                  Send Your Event Details
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  Fill in your event details below to prepare a formatted WhatsApp inquiry. Alternatively, call {BUSINESS_INFO.phone} directly without using WhatsApp.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5 flex items-center gap-1.5"
                    >
                      <User className="w-3.5 h-3.5 text-[#FF7722]" />
                      <span>Your Full Name *</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl glass-input text-sm placeholder:text-zinc-400 font-normal"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5 flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#138808]" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98XXXXXXXX"
                      className="w-full px-4 py-3 rounded-xl glass-input text-sm placeholder:text-zinc-400 font-normal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-event-type"
                      className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5 flex items-center gap-1.5"
                    >
                      <Tag className="w-3.5 h-3.5 text-[#FF7722]" />
                      <span>Event Type</span>
                    </label>
                    <select
                      id="contact-event-type"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl glass-input text-sm font-medium cursor-pointer"
                    >
                      <option value="Birthday Celebration" className="dark:bg-[#12141A]">Birthday Celebration</option>
                      <option value="Anniversary & Romantic Canopy" className="dark:bg-[#12141A]">Anniversary &amp; Romantic Setup</option>
                      <option value="Baby Shower / Welcome Baby" className="dark:bg-[#12141A]">Baby Shower / Welcome Baby</option>
                      <option value="Haldi & Traditional Ceremony" className="dark:bg-[#12141A]">Haldi &amp; Traditional Ceremony</option>
                      <option value="Corporate Event / Store Opening" className="dark:bg-[#12141A]">Corporate Event / Store Opening</option>
                      <option value="Grand Ring / Custom Stage Decor" className="dark:bg-[#12141A]">Grand Ring / Custom Stage Decor</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-event-date"
                      className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5 flex items-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#138808]" />
                      <span>Event Date</span>
                    </label>
                    <input
                      id="contact-event-date"
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl glass-input text-sm font-medium cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5 flex items-center gap-1.5"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#FF7722]" />
                    <span>Venue Area &amp; Requirements</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your area in Hyderabad (e.g. Balanagar, Kukatpally, Madhapur, Gachibowli), preferred theme colours, and setup timing..."
                    className="w-full px-4 py-3 rounded-xl glass-input text-sm placeholder:text-zinc-400 font-normal resize-none"
                  ></textarea>
                </div>

                {/* Mandatory Privacy & Terms Consent */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    id="contact-consent"
                    type="checkbox"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-zinc-300 text-[#138808] focus:ring-[#138808] cursor-pointer"
                  />
                  <label htmlFor="contact-consent" className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed cursor-pointer">
                    I agree to share my inquiry details with {BUSINESS_INFO.name} solely to receive a quotation and event coordination via phone or WhatsApp, in accordance with the{' '}
                    <Link to="/privacy-policy" className="text-[#138808] font-semibold underline">
                      Privacy Policy
                    </Link>
                    ,{' '}
                    <Link to="/terms" className="text-[#138808] font-semibold underline">
                      Terms &amp; Conditions
                    </Link>
                    , and{' '}
                    <Link to="/refund-policy" className="text-[#138808] font-semibold underline">
                      Cancellation &amp; Refund Policy
                    </Link>.
                  </label>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={Send}
                    className="w-full sm:w-auto shadow-lg shadow-[#FF7722]/20"
                  >
                    Send Inquiry on WhatsApp
                  </Button>

                  <span className="text-xs text-zinc-500 font-medium text-center sm:text-right">
                    Open 24 Hours (Mon – Sun)
                  </span>
                </div>

                {submitState && (
                  <div className="p-4 rounded-xl bg-[#138808]/10 border border-[#138808]/30 space-y-2 text-xs text-zinc-800 dark:text-zinc-200 animate-in fade-in duration-200">
                    <div className="flex items-center gap-2 font-semibold text-[#138808] dark:text-emerald-400">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>
                        {submitState.popupBlocked
                          ? 'Your inquiry message is ready. Click below to open WhatsApp:'
                          : 'Your formatted inquiry opened in WhatsApp.'}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <a
                        href={submitState.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] text-white font-bold hover:bg-[#20bd5a]"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                        <span>Open WhatsApp Inquiry</span>
                      </a>
                      <a
                        href={`tel:${BUSINESS_INFO.phoneRaw}`}
                        className="font-semibold text-[#138808] underline"
                      >
                        Or call {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </div>
                )}
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
