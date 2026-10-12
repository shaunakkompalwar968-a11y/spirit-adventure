'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'What level of fitness is required for high-altitude treks like Everest Base Camp or Thorong La?',
    a: 'You do not need to be an ultra-marathoner, but good cardiovascular endurance and leg strength are essential. We recommend 2 to 3 months of consistent aerobic training (hiking with an 8kg backpack, stair-climbing, jogging, or cycling 3-4 times a week). Our itineraries feature built-in acclimatization rest days to allow natural physiological adaptation.'
  },
  {
    q: 'How does Spirit Adventure manage altitude sickness and medical emergencies?',
    a: 'Safety is our absolute cornerstone. Every expedition guide carries portable pulse oximeters for mandatory twice-daily blood oxygen & pulse checks, portable oxygen cylinders, comprehensive trauma kits, and satellite communications (Garmin inReach). In the rare event of acute mountain sickness (AMS), our 24/7 emergency team coordinates immediate helicopter evacuation with international medical insurers.'
  },
  {
    q: 'What is your ethical Sherpa and porter welfare policy?',
    a: 'We are strict signatories to the International Porter Protection Group (IPPG). All our Sherpa guides, cooks, and porters receive industry-leading living wages, comprehensive medical insurance, warm high-altitude clothing and mountain boots, balanced hot meals, and a strict 20kg maximum carry load limit.'
  },
  {
    q: 'What gear and clothing do I need to bring, and what does Spirit Adventure provide?',
    a: 'We provide high-grade expedition duffel bags and -20°C sleeping bags for use during your trek, plus all shared camping gear. You will need broken-in waterproof hiking boots, moisture-wicking base layers, an insulated down jacket, waterproof shell jacket/pants, trekking poles, sunglasses with UV400 protection, and personal toiletries. We send a comprehensive expedition packing checklist upon booking.'
  },
  {
    q: 'What is your booking cancellation and rescheduling policy?',
    a: 'We offer maximum flexibility. You can reschedule your expedition dates free of charge up to 45 days prior to departure. If an unforeseen event arises, cancellations up to 30 days before departure qualify for full credit toward any future Spirit Adventure trip valid for 24 months.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F3F5F4]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0787E8] border border-gray-200 shadow-sm mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#183B2A] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#426D4A]">
            Everything you need to know about preparing for your high-altitude expedition.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#183B2A] hover:text-[#0787E8] transition-colors"
                >
                  <span>{faq.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-[#0787E8]" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#426D4A] leading-relaxed border-t border-gray-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
