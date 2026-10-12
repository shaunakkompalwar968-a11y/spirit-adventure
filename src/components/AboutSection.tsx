'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  HeartHandshake, 
  MountainSnow, 
  Award, 
  CheckCircle,
  ArrowRight,
  Flame,
  Users2
} from 'lucide-react';
import { AgencyStats } from '@/types';

interface AboutSectionProps {
  stats?: AgencyStats;
}

export default function AboutSection({ stats }: AboutSectionProps) {
  const defaultStats = {
    years_experience: 14,
    expeditions_completed: 1250,
    happy_explorers: 15400,
    expert_guides: 48,
    safety_record_percentage: 99.8
  };

  const currentStats = stats || defaultStats;

  const corePillars = [
    {
      title: 'Uncompromising Alpine Safety',
      desc: 'Daily medical pulse-oximeter monitoring, high-altitude hyperbaric chambers, portable oxygen, and 24/7 direct satellite emergency evacuation protocols on every expedition.',
      icon: ShieldCheck,
    },
    {
      title: 'UIAGM / IFMGA Certified Leadership',
      desc: 'Our lead expedition guides are internationally accredited alpine masters with an average of 12+ seasons traversing the Karakoram, Himalayas, and Swiss Alps.',
      icon: Award,
    },
    {
      title: 'Ethical Sherpa & Porter Welfare',
      desc: 'We are strict signatories to the International Porter Protection Group (IPPG) guidelines: living wages, medical insurance, quality high-altitude gear, and strict load limits.',
      icon: HeartHandshake,
    },
    {
      title: 'Leave No Trace Eco-Tourism',
      desc: 'Committed to zero single-use plastics on trails, solar-charged basecamp operations, and active participation in annual high-altitude glacier cleanups.',
      icon: MountainSnow,
    },
  ];

  return (
    <section 
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
      style={{ backgroundColor: '#E5EFE5' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Grid: Story + Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Mission & Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/70 backdrop-blur-sm border border-[#426D4A]/20 mb-4" style={{ color: '#0787E8' }}>
              <Flame className="w-3.5 h-3.5" style={{ color: '#0787E8' }} />
              <span style={{ color: '#183B2A' }}>Our Story & Philosophy</span>
            </div>

            {/* Headings: #183B2A */}
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15]"
              style={{ color: '#183B2A' }}
            >
              Born in the High Passes, <br />
              Driven by Mountain Reverence
            </h2>

            {/* Paragraphs: #426D4A */}
            <p 
              className="mt-6 text-base sm:text-lg leading-relaxed"
              style={{ color: '#426D4A' }}
            >
              Founded in 2012 by a brotherhood of veteran Sherpa mountaineers and international alpine explorers, <strong className="font-bold" style={{ color: '#183B2A' }}>Spirit Adventure</strong> was built on a simple conviction: true adventure is not about conquering peaks, but letting the wild transform you.
            </p>

            <p 
              className="mt-4 text-sm sm:text-base leading-relaxed"
              style={{ color: '#426D4A' }}
            >
              We craft small-group expeditions that delve deep into remote cultures, sacred mountain corridors, and pristine ecosystems. With meticulous acclimatization schedules and genuine human warmth, we turn intimidating summits into life-affirming journeys.
            </p>

            {/* 4 Pillars Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {corePillars.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Icons: #0787E8 */}
                    <div className="w-10 h-10 rounded-xl bg-[#E5EFE5] flex items-center justify-center mb-3">
                      <IconComponent className="w-6 h-6" style={{ color: '#0787E8' }} />
                    </div>
                    {/* Heading: #183B2A */}
                    <h3 
                      className="text-base font-bold mb-1.5"
                      style={{ color: '#183B2A' }}
                    >
                      {item.title}
                    </h3>
                    {/* Paragraph: #426D4A */}
                    <p 
                      className="text-xs sm:text-sm leading-relaxed"
                      style={{ color: '#426D4A' }}
                    >
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all shadow-md active:scale-95"
                style={{ backgroundColor: '#0787E8' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#056DBB')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0787E8')}
              >
                <span>Read Full Agency Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Imagery with Floating Stats Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=85"
                alt="Sherpa mountain guide looking out at Himalayan summit"
                className="w-full h-[540px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#183B2A]/80 via-transparent to-transparent" />

              {/* In-image caption */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0787E8]">
                  Chief Expedition Leader
                </span>
                <h4 className="text-xl font-bold text-white">
                  Tenzing Dawa Sherpa
                </h4>
                <p className="text-xs text-[#D5E2D7] mt-0.5">
                  11× Everest Summit, UIAGM / IFMGA Master Guide
                </p>
              </div>
            </div>

            {/* Floating Top Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-[#426D4A]/10 hidden sm:flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E5EFE5] flex items-center justify-center">
                <Users2 className="w-6 h-6" style={{ color: '#0787E8' }} />
              </div>
              <div>
                <span className="text-xs font-bold text-[#426D4A] block">Global Explorers</span>
                <span className="text-xl font-black" style={{ color: '#183B2A' }}>
                  15,400+ Summits
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Statistics and Highlights Banner: #183B2A */}
        <div className="mt-20 pt-12 border-t border-[#426D4A]/25">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 text-center">
            {/* Stat 1 */}
            <div className="p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/60">
              <span 
                className="text-3xl sm:text-4xl font-black block tracking-tight"
                style={{ color: '#183B2A' }}
              >
                {currentStats.years_experience}+
              </span>
              <span 
                className="text-xs sm:text-sm font-semibold mt-1 block"
                style={{ color: '#183B2A' }}
              >
                Years Experience
              </span>
            </div>

            {/* Stat 2 */}
            <div className="p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/60">
              <span 
                className="text-3xl sm:text-4xl font-black block tracking-tight"
                style={{ color: '#183B2A' }}
              >
                {currentStats.expeditions_completed.toLocaleString()}+
              </span>
              <span 
                className="text-xs sm:text-sm font-semibold mt-1 block"
                style={{ color: '#183B2A' }}
              >
                Expeditions Guided
              </span>
            </div>

            {/* Stat 3 */}
            <div className="p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/60">
              <span 
                className="text-3xl sm:text-4xl font-black block tracking-tight"
                style={{ color: '#183B2A' }}
              >
                {currentStats.happy_explorers.toLocaleString()}+
              </span>
              <span 
                className="text-xs sm:text-sm font-semibold mt-1 block"
                style={{ color: '#183B2A' }}
              >
                Happy Adventurers
              </span>
            </div>

            {/* Stat 4 */}
            <div className="p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/60">
              <span 
                className="text-3xl sm:text-4xl font-black block tracking-tight"
                style={{ color: '#183B2A' }}
              >
                {currentStats.expert_guides}
              </span>
              <span 
                className="text-xs sm:text-sm font-semibold mt-1 block"
                style={{ color: '#183B2A' }}
              >
                Certified Mountain Guides
              </span>
            </div>

            {/* Stat 5 */}
            <div className="col-span-2 md:col-span-1 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/60">
              <span 
                className="text-3xl sm:text-4xl font-black block tracking-tight"
                style={{ color: '#183B2A' }}
              >
                {currentStats.safety_record_percentage}%
              </span>
              <span 
                className="text-xs sm:text-sm font-semibold mt-1 block"
                style={{ color: '#183B2A' }}
              >
                Safety & Evac Record
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
