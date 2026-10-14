'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mountain, 
  Award, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import AboutSection from '@/components/AboutSection';
import { FALLBACK_STATS } from '@/data/fallbackData';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div 
        className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2200&q=90')`
        }}
      >
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(11, 27, 61, 0.75)' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 mb-4 text-[#38BDF8]">
            <Mountain className="w-3.5 h-3.5" />
            <span className="text-white">Our Story & Heritage</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Explore the World, <br />
            <span className="text-[#38BDF8]">Without Limits</span>
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-200 font-light leading-relaxed">
            Spirit Adventure is Hyderabad and Bangalore's premier travel agency dedicated to unforgettable group getaways, beach retreats, heritage trails, and custom holidays.
          </p>
        </div>
      </div>

      {/* Embedded Main About Section */}
      <AboutSection stats={FALLBACK_STATS} />

      {/* Trust & Safety Section: Deep Navy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B1B3D] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                Travel Guarantee
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mt-2 mb-6">
                Why Over 22,000 Travelers Choose Spirit Adventures
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                From comfortable AC pushback buses and handpicked coffee estate resorts to authentic campfires and verified safety measures, we take the stress out of holiday planning.
              </p>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#38BDF8] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Verified Stays:</strong> We inspect every estate homestay, beach resort, and riverside camp to ensure top cleanliness, hot water, and delicious meals.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#38BDF8] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Sanitized AC Coaches:</strong> Dedicated commercial tempo travellers and pushback coaches driven by vetted, experienced highway captains.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#38BDF8] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>100% Women & Solo-Traveler Friendly:</strong> Zero awkwardness, transparent safety checks, and inclusive campfire vibes for everyone.
                  </span>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/packages"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white transition-all shadow-lg bg-gradient-to-r from-[#0066FF] to-[#0787E8] hover:from-[#0052cc] hover:to-[#056dbb]"
                >
                  <span>Explore Tour Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white transition-all bg-white/10 hover:bg-white/20 border border-white/20"
                >
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg h-48 sm:h-64">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80"
                    alt="Beach Campfire"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg h-36 sm:h-44">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                    alt="Western Ghats Trek"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden shadow-lg h-36 sm:h-44">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80"
                    alt="Hampi Stone Chariot"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg h-48 sm:h-64">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?auto=format&fit=crop&w=800&q=80"
                    alt="Waterfall Expedition"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
