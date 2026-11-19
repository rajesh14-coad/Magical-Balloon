import React, { useState } from 'react';
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
  MapPinOff 
} from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import WhatsAppIcon from '../components/WhatsAppIcon';

/**
 * Production-Ready Contact Page
 * Design Architecture:
 * - Two-column Split-Screen layout
 * - Left: Physical Hyderabad Address, Phone, Pulsing WhatsApp CTA, Operating Hours, Coverage
 * - Right: Direct WhatsApp URL-encoded Message Box with frosted .glass-input styling
 * - Light Mode by default + Dark Mode support + Indian Tricolor accents (Zero Blue)
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Birthday Celebration',
    eventDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const formattedMessage = 
      `*New Booking Inquiry - Magical Balloon Decor*\n` +
      `--------------------------------------\n` +
      `👤 *Name:* ${formData.name || 'Not provided'}\n` +
      `📞 *Phone:* ${formData.phone || 'Not provided'}\n` +
      `🎉 *Event:* ${formData.eventType}\n` +
      `📅 *Date:* ${formData.eventDate || 'To be decided'}\n` +
      `📍 *Details / Venue:* ${formData.message || 'Standard package enquiry'}\n` +
      `--------------------------------------\n` +
      `Sent via Magical Balloon Hyderabad Website`;

    const encodedUrl = `https://wa.me/919509971603?text=${encodeURIComponent(formattedMessage)}`;
    
    // Open WhatsApp in a new tab
    window.open(encodedUrl, '_blank');

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="py-12 sm:py-20 relative">
      
      {/* Ambient Lighting Gradients (Strictly NO BLUE: Saffron & Green) */}
      <div className="absolute top-12 left-1/3 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-r from-[#FF7722]/10 via-[#138808]/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-white/[0.06] border border-zinc-200/80 dark:border-white/10 text-xs font-semibold text-zinc-800 dark:text-zinc-200 shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7722]" />
            <span>Direct WhatsApp Booking & Workshop</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-zinc-950 dark:text-white tracking-tight leading-tight mb-4">
            Get in <span className="gradient-tricolor-text">Touch</span>
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            Planning a celebration in Hyderabad? We respond within minutes on WhatsApp and phone calls to finalize your themes, packages, and venue timings.
          </p>
        </div>

        {/* -------------------- TWO-COLUMN SPLIT-SCREEN LAYOUT -------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ==================== LEFT COLUMN: Contact Information ==================== */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard accent="saffron" padding="p-6 sm:p-8" className="space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF7722] block mb-1">
                  Connect Directly
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
                  Let's Make Your Event Magical
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                  Call our Hyderabad hotline or message us on WhatsApp for same-day bookings, customized theme mockups, and on-site visits.
                </p>
              </div>

              {/* Large Pulsing WhatsApp Button (High Visibility & 100% Responsive) */}
              <div className="pt-2">
                <a
                  href="https://wa.me/919509971603"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 sm:py-4 px-3 sm:px-6 rounded-xl sm:rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 sm:gap-3 shadow-xl shadow-[#25D366]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-current shrink-0" />
                  <span className="whitespace-nowrap">Chat on WhatsApp</span>
                  <span className="hidden sm:inline text-xs opacity-90 font-medium">(+91 9509971603)</span>
                </a>
              </div>

              {/* Direct Info Blocks */}
              <div className="space-y-4 pt-2 border-t border-zinc-200/60 dark:border-white/[0.08]">
                
                {/* Phone Support */}
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-zinc-100/70 hover:bg-[#FF7722]/10 dark:bg-white/[0.04] dark:hover:bg-[#FF7722]/15 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-[#FF7722]/15 text-[#FF7722] group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                      Call Hotline
                    </span>
                    <span className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-[#FF7722] dark:text-white dark:group-hover:text-[#FFA059] transition-colors">
                      +91 9509971603
                    </span>
                  </div>
                </a>

                {/* Physical Address (Exact Requirement) */}
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-zinc-100/70 dark:bg-white/[0.04]">
                  <div className="p-2.5 rounded-lg bg-[#138808]/15 text-[#138808] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                      Physical Workshop & Office
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed mt-1 font-medium select-all">
                      7-4-289, Navajeevan Nagar, Saraband Nagar, Balanagar, Hyderabad, Telangana 500042, भारत 🇮🇳
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
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

              {/* Service Areas Badge Pills */}
              <div className="pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-2.5">
                  Available Across Hyderabad:
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

          {/* ==================== RIGHT COLUMN: Direct Message Box ==================== */}
          <div className="lg:col-span-7">
            <GlassCard accent="green" padding="p-6 sm:p-10" className="relative">
              
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#138808] dark:text-emerald-400 block mb-1">
                  Instant WhatsApp Booking
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
                  Send Your Event Details
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  Fill in your requirements below. Clicking "Send Message" will instantly format your request and open WhatsApp ready to send!
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                
                {/* Row 1: Name and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#FF7722]" />
                      <span>Your Full Name *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full px-4 py-3 rounded-xl glass-input text-sm placeholder:text-zinc-400 font-normal"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#138808]" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl glass-input text-sm placeholder:text-zinc-400 font-normal"
                    />
                  </div>
                </div>

                {/* Row 2: Event Type and Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5 flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-[#FF7722]" />
                      <span>Event Type</span>
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl glass-input text-sm font-medium cursor-pointer"
                    >
                      <option value="Birthday Celebration" className="dark:bg-[#12141A]">Birthday Celebration</option>
                      <option value="Anniversary & Romantic Canopy" className="dark:bg-[#12141A]">Anniversary & Romantic Canopy</option>
                      <option value="Baby Shower / Welcome Baby" className="dark:bg-[#12141A]">Baby Shower / Welcome Baby</option>
                      <option value="Corporate Event / Shop Opening" className="dark:bg-[#12141A]">Corporate Event / Shop Opening</option>
                      <option value="Golden Ring / Backdrop Setup" className="dark:bg-[#12141A]">Golden Ring / Backdrop Setup</option>
                      <option value="Custom Themed Decor" className="dark:bg-[#12141A]">Custom Themed Decor</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#138808]" />
                      <span>Event Date</span>
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl glass-input text-sm font-medium cursor-pointer"
                    />
                  </div>
                </div>

                {/* Row 3: Venue Location & Specific Requirements */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#FF7722]" />
                    <span>Venue Location & Specific Preferences</span>
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us your area in Hyderabad (e.g. Balanagar, Kukatpally, Madhapur, Gachibowli), expected setup timing, or special color themes..."
                    className="w-full px-4 py-3 rounded-xl glass-input text-sm placeholder:text-zinc-400 font-normal resize-none"
                  ></textarea>
                </div>

                {/* Submission CTA */}
                <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={Send}
                    className="w-full sm:w-auto shadow-lg shadow-[#FF7722]/20"
                  >
                    Send Message on WhatsApp
                  </Button>

                  <span className="text-xs text-zinc-500 font-medium text-center sm:text-right">
                    ⚡ Instant reply guaranteed (8 AM - 10 PM)
                  </span>
                </div>

                {/* Toast feedback upon submit */}
                {submitted && (
                  <div className="p-3.5 rounded-xl bg-[#138808]/15 border border-[#138808]/30 flex items-center gap-2.5 text-xs text-[#138808] dark:text-emerald-400 animate-in fade-in duration-200">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Redirecting to WhatsApp with your details formatted...</span>
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
