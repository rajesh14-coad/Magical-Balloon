import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileCheck2, AlertCircle, Phone, MapPin, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';

export default function Terms() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7722]/10 text-[#FF7722] text-xs font-bold uppercase tracking-wider mb-3">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Service Agreement</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-zinc-950 dark:text-white tracking-tight">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2">
              Last Updated: {BUSINESS_INFO.policyUpdatedDate} • {BUSINESS_INFO.name}
            </p>
          </header>

          <section className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <p>
              By accessing <strong>{BUSINESS_INFO.websiteUrl}</strong> or booking balloon and event styling services with <strong>{BUSINESS_INFO.name}</strong>, you agree to the following service terms. Please read them carefully before confirming your event booking.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white">
              1. Service Area &amp; Quotes
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>We provide on-site balloon and celebration decoration services across Hyderabad (including Balanagar, Kukatpally, Madhapur, Hitec City, Gachibowli, Banjara Hills, Jubilee Hills, Secunderabad, and nearby areas).</li>
              <li>Every booking receives a written quotation specifying included items (balloon type/count, backdrop/ring props, lighting, and travel/installation charges, if any) prior to confirmation.</li>
              <li>There are no hidden fees; any additional add-ons requested at the venue are billed only after client approval.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white">
              2. Booking Confirmation &amp; Venue Readiness
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Bookings are confirmed only after slot availability is verified and any agreed booking advance (clearly mentioned in your written estimate) is received.</li>
              <li>The client must ensure timely venue access (typically 60 to 150 minutes prior to the event depending on setup scale), standard electrical power access for balloon inflators/lights, and venue/apartment management permissions where applicable.</li>
              <li>Photos displayed on this website illustrate style categories and colour palettes; exact shades, floral substitutes, or backdrop dimensions may vary slightly depending on room layout and custom client requests.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white">
              3. Balloon Care, Weather &amp; Wall Surfaces
            </h2>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Latex and foil balloons are naturally sensitive to direct sunlight, high outdoor heat, wind, rain, and sharp fixtures. While we use quality metallic, chrome, and pastel balloons and low-tack mounting methods where requested, we cannot guarantee outdoor longevity during rain or extreme midday heat, nor can we accept responsibility for delicate/peeling wall paint where adhesive tape mounting is requested by the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white">
              4. Rental Props &amp; Equipment
            </h2>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Reusable structural props—including metallic ring frames, backdrop stands, neon LED signs, cake pedestals, fairy light curtains, and artificial floral stands—are provided on a rental basis for the event duration unless explicitly purchased. Clients are responsible for safe keeping of rental hardware at the venue until scheduled pickup/teardown.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white">
              5. Cancellations, Rescheduling &amp; Governing Law
            </h2>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Cancellations and rescheduling are governed by our{' '}
              <Link to="/refund-policy" className="text-[#138808] font-semibold underline">
                Cancellation &amp; Refund Policy
              </Link>
              . Any disputes arising from services provided by {BUSINESS_INFO.name} are subject to the jurisdiction of the courts in Hyderabad, Telangana, India.
            </p>
          </section>

          <section className="space-y-3 p-5 rounded-2xl bg-zinc-50 dark:bg-white/[0.04] border border-zinc-200/70 dark:border-white/10">
            <div className="flex items-center gap-2 text-base font-bold text-zinc-950 dark:text-white">
              <AlertCircle className="w-4 h-4 text-[#FF7722]" />
              <span>Support &amp; Enquiries</span>
            </div>
            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#138808] shrink-0 mt-1" />
                <span>{BUSINESS_INFO.address}</span>
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
