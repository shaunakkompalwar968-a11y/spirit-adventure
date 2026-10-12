'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { Testimonial } from '@/types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0787E8] mb-3">
            <Star className="w-3.5 h-3.5 fill-[#FF9D42] text-[#FF9D42]" />
            <span>Real Explorer Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1B3D] tracking-tight">
            Loved by Summits Seekers
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Over 22,000 adventurers have trusted Spirit Adventures for their unforgettable journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-slate-50 p-6 rounded-2xl flex flex-col justify-between border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-[#0787E8]/20 absolute top-4 right-4" />

              <div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#FF9D42] text-[#FF9D42]"
                    />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-white shadow"
                />
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-sm text-[#0B1B3D] truncate">
                      {t.name}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0787E8] flex-shrink-0" />
                  </div>
                  <span className="text-[11px] text-slate-500 block truncate">
                    {t.location}
                  </span>
                  <span className="text-[10px] text-[#0787E8] font-semibold block truncate">
                    {t.tour_title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
