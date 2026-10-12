'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mountain, ShieldCheck, PhoneCall } from 'lucide-react';
import BookingModal from './BookingModal';
import { TourPackage } from '@/types';

interface CtaBannerProps {
  packages?: TourPackage[];
}

export default function CtaBanner({ packages = [] }: CtaBannerProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=2000&q=85')`
          }}
        />
        {/* Deep Navy Overlay */}
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(11, 27, 61, 0.85)' }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#38BDF8] text-xs font-bold uppercase tracking-wider mb-6">
            <Mountain className="w-4 h-4" />
            <span className="text-white">Begin Your Next Great Chapter</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
            The Mountains Are Calling. <br />
            Are You Ready to Answer?
          </h2>

          <p className="mt-6 text-base sm:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            Reserve your spot on upcoming 2026/2027 departures or connect with our master expedition planners.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-white transition-all shadow-xl bg-gradient-to-r from-[#0066FF] to-[#0787E8] hover:from-[#0052cc] hover:to-[#056dbb] shadow-blue-500/25 active:scale-95"
            >
              Book Your Expedition Now
            </button>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-white border-2 border-white bg-transparent hover:bg-white/15 transition-all backdrop-blur-sm"
            >
              Request Custom Itinerary
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
              Guaranteed Departures
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
              No Hidden Fees
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <PhoneCall className="w-4 h-4 text-[#38BDF8]" />
              24/7 Expedition Assistance
            </span>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        packages={packages}
      />
    </>
  );
}
