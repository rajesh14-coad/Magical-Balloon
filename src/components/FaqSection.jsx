import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';
import GlassCard from './GlassCard';

/**
 * Transparent FAQ & Policy Summary visible directly on the main landing page.
 * Ensures visitors and automated ad reviewers see pricing, advance, refund, and service terms without extra clicks.
 */
export default function FaqSection() {
  const faqs = [
    {
      question: "How is balloon decoration pricing calculated?",
      answer:
        "Pricing depends on balloon count, balloon type (matte, pastel, metallic, or chrome), backdrop or ring frames, custom neon/name boards, and your Hyderabad venue locality. You always receive an itemised written quote before confirming."
    },
    {
      question: "Is an advance payment required, and can bookings be cancelled or rescheduled?",
      answer:
        "Any applicable booking advance is clearly stated in your written quotation prior to payment. Rescheduling is free with 24+ hours notice (subject to slot availability), and cancellations 48+ hours ahead qualify for an advance refund under our Cancellation & Refund Policy."
    },
    {
      question: "Which locations in Hyderabad do you cover?",
      answer:
        "From our Balanagar workshop, our decoration team serves Balanagar, Kukatpally, Madhapur, Hitec City, Gachibowli, Banjara Hills, Jubilee Hills, Secunderabad, Miyapur, Begumpet, Kondapur, and nearby areas across Hyderabad."
    },
    {
      question: "How long does setup take, and are frames/lights included on rent?",
      answer:
        "Setup generally takes 45 minutes to 3 hours depending on package scale. Reusable hardware such as metallic ring stands, backdrop panels, neon signs, pedestals, and curtain lights are provided on a rental basis and picked up after your event."
    },
    {
      question: "Can I inquire or book directly without using WhatsApp?",
      answer: `Yes. You can call us directly at ${BUSINESS_INFO.phone} (Open 24 Hours, Mon–Sun), email us at ${BUSINESS_INFO.email}, or use the on-page inquiry form below.`
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF7722]/10 text-[#FF7722] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 border border-[#FF7722]/20">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
          Clear Pricing, Terms &amp; Support
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2">
          Key details on estimates, cancellations, and service coverage. Read full{' '}
          <Link to="/terms" className="text-[#138808] font-semibold underline">
            Terms &amp; Conditions
          </Link>{' '}
          and{' '}
          <Link to="/refund-policy" className="text-[#138808] font-semibold underline">
            Refund Policy
          </Link>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {faqs.map((item, idx) => (
          <GlassCard
            key={item.question}
            accent={idx % 2 === 0 ? 'green' : 'saffron'}
            padding="p-5 sm:p-6"
            className="rounded-2xl sm:rounded-3xl"
          >
            <h3 className="text-sm sm:text-base font-bold text-zinc-950 dark:text-white mb-2">
              {item.question}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {item.answer}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
