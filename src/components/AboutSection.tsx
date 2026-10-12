'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Hotel, 
  ArrowRight,
  Sparkles,
  Compass,
  Headphones,
  CalendarCheck
} from 'lucide-react';
import { AgencyStats } from '@/types';

interface AboutSectionProps {
  stats?: AgencyStats;
}

export default function AboutSection({ stats }: AboutSectionProps) {
  const defaultStats = {
    years_experience: 8,
    expeditions_completed: 1850,
    happy_explorers: 22400,
    expert_guides: 35,
    safety_record_percentage: 99.8
  };

  const currentStats = stats || defaultStats;

  const coreServices = [
    {
      title: 'Personalized Travel Planning',
      desc: 'Bespoke itineraries designed around your preferences, budget, and travel style for couples, friends, families, or corporate groups.',
      icon: Compass,
    },
    {
      title: 'Flight & Resort Bookings',
      desc: 'Handpicked 3-star and 4-star boutique resorts, estate homestays, private pool villas, and flight reservations at unbeatable rates.',
      icon: Hotel,
    },
    {
      title: 'All-Inclusive Holiday Packages',
      desc: 'All-in-one packages including guided sightseeing, campfire feasts, water sports, AC transfers, and entry permits.',
      icon: CalendarCheck,
    },
    {
      title: '24/7 Dedicated On-Trip Guidance',
      desc: 'Live trip coordinators tracking your transfers, safety, and check-ins every step of the journey so you travel stress-free.',
      icon: Headphones,
    },
  ];

  return (
    <section 
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative bg-[#EBF3FE]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Grid: Story + Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Mission & Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/80 backdrop-blur-sm border border-blue-200/60 mb-4 text-[#0787E8]">
              <Sparkles className="w-3.5 h-3.5 text-[#0787E8]" />
              <span className="text-[#0B1B3D]">ABOUT US • Your Trusted Travel Partner</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-[#0B1B3D]">
              Passionate Explorers, <br />
              Dedicated To Your Happiness
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600">
              We are passionate travel experts dedicated to creating unforgettable journeys across India and the globe. <strong className="font-bold text-[#0B1B3D]">Spirit Adventures</strong> makes domestic weekend getaways and international holidays easy, thrilling, and 100% hassle-free.
            </p>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
              From the misty coffee trails of Coorg and pristine waters of Gokarna, to romantic desert camps, Himalayan peaks, shopping in Dubai, and relaxing on tropical beaches in Bali and the Maldives — Spirit Adventures crafts customized itineraries tailored to your unique rhythm and budget.
            </p>

            {/* 4 Core Services Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {coreServices.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-white/90 backdrop-blur-sm border border-white/80 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5 text-[#0787E8]" />
                    </div>
                    <h3 className="text-base font-bold mb-1.5 text-[#0B1B3D]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/customize"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all shadow-md bg-gradient-to-r from-[#0066FF] to-[#0787E8] hover:from-[#0052cc] hover:to-[#056dbb] shadow-blue-500/25 active:scale-95"
              >
                <span>Customize Tour Package</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B1B3D] hover:text-[#0787E8] transition-colors"
              >
                <span>Read Full Agency Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Imagery with Floating Badge & Authentic Stamp Video */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/assets/img/hero-poster.jpg"
                className="w-full h-[520px] object-cover"
              >
                <source src="/assets/video/StampVideo.mp4" type="video/mp4" />
                <source src="/assets/video/travel-loop.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/90 via-black/20 to-transparent pointer-events-none" />

              {/* Stamp Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-[#0787E8]/30 flex items-center gap-1.5 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-[#0787E8] animate-ping" />
                <span className="text-[11px] font-black uppercase tracking-wider text-[#0B1B3D]">TOP RATED EXPERIENCE</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                  Verified Stays & Expert Guidance
                </span>
                <h4 className="text-xl font-bold text-white mt-1">
                  Spirit Adventures Travel Desk
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  KPHB, Kukatpally, Hyderabad • Serving 22,000+ happy explorers across South India & beyond
                </p>
              </div>
            </div>

            {/* Floating Trust Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-blue-100 hidden sm:flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#0787E8]" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 block">Best Price Guarantee</span>
                <span className="text-lg font-black text-[#0B1B3D]">
                  100% Transparent
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Statistics and Highlights Banner */}
        <div className="mt-20 pt-12 border-t border-blue-200/60">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 text-center">
            {/* Stat 1 */}
            <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/80 shadow-xs">
              <span className="text-3xl sm:text-4xl font-black block tracking-tight text-[#0787E8]">
                {currentStats.years_experience}+
              </span>
              <span className="text-xs sm:text-sm font-semibold mt-1 block text-slate-700">
                Years of Excellence
              </span>
            </div>

            {/* Stat 2 */}
            <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/80 shadow-xs">
              <span className="text-3xl sm:text-4xl font-black block tracking-tight text-[#0787E8]">
                {currentStats.expeditions_completed.toLocaleString()}+
              </span>
              <span className="text-xs sm:text-sm font-semibold mt-1 block text-slate-700">
                Trips Completed
              </span>
            </div>

            {/* Stat 3 */}
            <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/80 shadow-xs">
              <span className="text-3xl sm:text-4xl font-black block tracking-tight text-[#0787E8]">
                {currentStats.happy_explorers.toLocaleString()}+
              </span>
              <span className="text-xs sm:text-sm font-semibold mt-1 block text-slate-700">
                Happy Adventurers
              </span>
            </div>

            {/* Stat 4 */}
            <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/80 shadow-xs">
              <span className="text-3xl sm:text-4xl font-black block tracking-tight text-[#0787E8]">
                {currentStats.expert_guides}
              </span>
              <span className="text-xs sm:text-sm font-semibold mt-1 block text-slate-700">
                Expert Tour Leads
              </span>
            </div>

            {/* Stat 5 */}
            <div className="col-span-2 md:col-span-1 p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/80 shadow-xs">
              <span className="text-3xl sm:text-4xl font-black block tracking-tight text-[#0787E8]">
                {currentStats.safety_record_percentage}%
              </span>
              <span className="text-xs sm:text-sm font-semibold mt-1 block text-slate-700">
                Guest Satisfaction
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
