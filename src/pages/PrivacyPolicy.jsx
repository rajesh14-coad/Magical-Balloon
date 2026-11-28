import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, FileText, Phone, MapPin, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';

export default function PrivacyPolicy() {
  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#138808] hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <article className="bg-white/90 dark:bg-[#12141A]/90 rounded-3xl p-6 sm:p-10 border border-zinc-200/80 dark:border-white/10 shadow-sm space-y-8">
          <header className="border-b border-zinc-200/70 dark:border-white/10 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#138808]/10 text-[#138808] dark:text-[#22B814] text-xs font-bold uppercase tracking-wider mb-3">
              <Shield className="w-3.5 h-3.5" />
              <span>Privacy & Data Protection</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-zinc-950 dark:text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2">
              Last Updated: {BUSINESS_INFO.policyUpdatedDate} • Applies to {BUSINESS_INFO.websiteUrl}
            </p>
          </header>

          <section className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <p>
              <strong>{BUSINESS_INFO.name}</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), operating from {BUSINESS_INFO.address}, respects your privacy and is committed to protecting the personal information you share when visiting <strong>{BUSINESS_INFO.websiteUrl}</strong> or requesting an event decoration estimate.
            </p>
            <p>
              This Privacy Policy explains what information we collect, why we collect it, how third-party communication channels such as WhatsApp are used when you initiate them, and how you can request updates or deletion of your information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#FF7722]" />
              <span>1. Information We Collect</span>
            </h2>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              We only collect information that you voluntarily provide when contacting us for a decoration quote or booking:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">
              <li><strong>Contact Details:</strong> Your full name and phone number so we can call or message you regarding availability and quotes.</li>
              <li><strong>Event &amp; Venue Information:</strong> Event category, preferred date, locality/area in Hyderabad, and design preferences.</li>
              <li><strong>Device Preferences:</strong> A minimal local browser setting (<code>magical_balloon_theme</code> in <code>localStorage</code>) strictly used to remember your Light/Dark display preference.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#138808]" />
              <span>2. How We Use Your Information</span>
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>To prepare and share an itemised decoration quotation and confirm slot availability for your event date.</li>
              <li>To coordinate venue access, setup timing, and on-site installation with our Hyderabad decoration crew.</li>
              <li>To provide customer support, handle rescheduling, or process cancellation and refund requests.</li>
            </ul>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              <strong>We do not sell, rent, trade, or distribute your phone number or personal details</strong> to third-party marketers or lead aggregators.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white">
              3. WhatsApp &amp; Direct Call Communication Disclosure
            </h2>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Our website gives you the option to submit a booking inquiry via WhatsApp or call us directly at <strong>{BUSINESS_INFO.phone}</strong>. When you click a WhatsApp button or submit the WhatsApp inquiry form, your browser opens WhatsApp (a service operated by WhatsApp LLC / Meta), and messages transmitted on WhatsApp are governed by WhatsApp&rsquo;s own privacy policy. If you prefer not to use WhatsApp, you may contact us directly via phone call or submit an inquiry without opening WhatsApp.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white">
              4. Cookies, Analytics &amp; Advertising Compliance
            </h2>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              This website does not run intrusive ad networks or pop-up trackers. Standard web server access logs (such as IP address, browser type, and requested URLs) may be processed temporarily by our hosting provider for security and reliability. If we measure advertising performance (such as Google Ads campaign visits or conversions), such measurement is used solely to understand service inquiries and improve website usability.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white">
              5. Data Retention &amp; Your Rights (India DPDP Act Aligned)
            </h2>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              We retain booking and inquiry records only as long as required to fulfil your event service, resolve disputes, or meet applicable Indian tax and accounting obligations. You have the right to request access to, correction of, or deletion of your personal contact details at any time.
            </p>
          </section>

          <section className="space-y-3 p-5 rounded-2xl bg-zinc-50 dark:bg-white/[0.04] border border-zinc-200/70 dark:border-white/10">
            <h2 className="text-lg font-bold text-zinc-950 dark:text-white">
              6. Contact Us Regarding Privacy
            </h2>
            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#138808] shrink-0 mt-1" />
                <span><strong>{BUSINESS_INFO.legalEntityName}</strong> — {BUSINESS_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF7722] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-semibold hover:text-[#138808] underline">
                  {BUSINESS_INFO.phone}
                </a>
              </p>
              {BUSINESS_INFO.email && (
                <p className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#138808] shrink-0" />
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="font-semibold hover:text-[#138808] underline">
                    {BUSINESS_INFO.email}
                  </a>
                </p>
              )}
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
