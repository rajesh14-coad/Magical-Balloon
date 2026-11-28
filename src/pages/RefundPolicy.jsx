import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, RotateCcw, CalendarClock, Phone, MapPin, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';

export default function RefundPolicy() {
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
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Transparent Booking Policy</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-zinc-950 dark:text-white tracking-tight">
              Cancellation &amp; Refund Policy
            </h1>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2">
              Last Updated: {BUSINESS_INFO.policyUpdatedDate} • {BUSINESS_INFO.name}
            </p>
          </header>

          <section className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <p>
              At <strong>{BUSINESS_INFO.name}</strong>, all decoration bookings and advance terms are communicated transparently in your written quote before confirmation. Because balloon styling requires dedicated time-slot allocation, crew scheduling, and custom colour/prop preparation, the following cancellation and refund rules apply:
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white flex items-center gap-2">
              <CalendarClock className="w-5 h-5 text-[#FF7722]" />
              <span>1. Event Rescheduling</span>
            </h2>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Need to change your celebration date or time? You may request rescheduling at least <strong>24 hours prior</strong> to the scheduled setup window at no additional fee (subject to slot availability and reuse of non-perishable standard items within 60 days).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white">
              2. Cancellation &amp; Refund Eligibility
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>
                <strong>48+ Hours Before Scheduled Setup:</strong> Eligible for a full refund of any standard booking advance paid (excluding actual costs already incurred for custom-printed flex/vinyl banners or personalised name cutouts already produced on client approval).
              </li>
              <li>
                <strong>24 to 48 Hours Before Scheduled Setup:</strong> 50% of the booking advance is refundable, or 100% of the amount can be applied as a credit toward a rescheduled event date within 60 days.
              </li>
              <li>
                <strong>Less Than 24 Hours / After Crew Dispatch:</strong> Standard booking advances are non-refundable once materials have been packed/inflated or our team has dispatched to the venue.
              </li>
              <li>
                <strong>Cancellations by Us:</strong> In the unlikely event that we are unable to fulfil a confirmed booking due to unavoidable emergencies, 100% of any advance paid will be refunded promptly.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white">
              3. Refund Processing Timeline
            </h2>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Approved refunds are processed to your original payment method (UPI / bank transfer) within <strong>5 to 7 business days</strong> from confirmation of cancellation.
            </p>
          </section>

          <section className="space-y-3 p-5 rounded-2xl bg-zinc-50 dark:bg-white/[0.04] border border-zinc-200/70 dark:border-white/10">
            <h2 className="text-lg font-bold text-zinc-950 dark:text-white">
              4. How to Request Cancellation or Rescheduling
            </h2>
            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <p>Please contact our Hyderabad desk directly with your booking name, phone number, and event date:</p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF7722] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-semibold hover:text-[#138808] underline">
                  {BUSINESS_INFO.phone}
                </a>
                <span className="text-xs text-zinc-500">({BUSINESS_INFO.openingHours})</span>
              </p>
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#138808] shrink-0 mt-1" />
                <span>{BUSINESS_INFO.address}</span>
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
