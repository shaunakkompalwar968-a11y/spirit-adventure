'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Award, 
  HeartHandshake, 
  Mountain, 
  Compass, 
  Users2, 
  Flame, 
  ArrowRight,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import AboutSection from '@/components/AboutSection';
import { FALLBACK_STATS } from '@/data/fallbackData';

const GUIDES = [
  {
    name: 'Tenzing Dawa Sherpa',
    role: 'Chief Expedition Leader & Co-Founder',
    bio: '11-time Mount Everest summit master with 22 years of high-altitude Himalayan leadership. Certified UIAGM / IFMGA mountain guide and wilderness first responder.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    summits: 'Everest (11×), Lhotse (3×), Manaslu (4×)',
  },
  {
    name: 'Anja Lindqvist',
    role: 'Head of European Alpine Operations',
    bio: 'Former Swedish Alpine rescue technician and UIAGM guide. Specializes in Haute Route traverses, Mont Blanc ascents, and high glaciated ice craft.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    summits: 'Mont Blanc (24×), Matterhorn (8×), Eiger',
  },
  {
    name: 'Pemba Dorje Tamang',
    role: 'Lead High Altitude Expedition Doctor & Guide',
    bio: 'Trained in altitude physiology and wilderness medicine at Chamonix and Kathmandu. Oversees our comprehensive medical baseline testing and rescue operations.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    summits: 'Ama Dablam (6×), Annapurna IV (2×)',
  },
  {
    name: 'Mateo Calderón',
    role: 'Patagonia & Andes Technical Director',
    bio: 'Born in Punta Arenas, Chile. Expert in severe Patagonian wind tactics, big-wall granite approaches, and Grey Glacier crevasses exploration.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80',
    summits: 'Torres del Paine (30+), Fitz Roy, Aconcagua (5×)',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div 
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=2200&q=90')`
        }}
      >
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(12, 35, 27, 0.72)' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 mb-4 text-[#0787E8]">
            <Mountain className="w-3.5 h-3.5" />
            <span className="text-white">Our Heritage & Creed</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Guided by Passion, <br />
            Rooted in Reverence
          </h1>
          <p className="mt-4 text-base sm:text-xl text-[#F3F5F4] font-light leading-relaxed">
            Since 2012, Spirit Adventure has stood as a sanctuary for those drawn to high places. We believe adventure should be humble, ethical, and radically transformative.
          </p>
        </div>
      </div>

      {/* Embedded Main About Section with Exact Brand Specification */}
      <AboutSection stats={FALLBACK_STATS} />

      {/* Guides & Leaders Section */}
      <section id="guides" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E5EFE5] text-[#183B2A] mb-3">
              <Award className="w-3.5 h-3.5 text-[#0787E8]" />
              <span>Certified Mountain Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#183B2A] tracking-tight">
              Meet Our Chief Alpinists
            </h2>
            <p className="mt-3 text-base text-[#426D4A]">
              Every Spirit Adventure expedition is led by internationally accredited UIAGM / IFMGA master guides who call these mountains home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {GUIDES.map((g, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-2xl overflow-hidden bg-[#F3F5F4] border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={g.image}
                    alt={g.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#183B2A]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0787E8] block">
                      Certified IFMGA
                    </span>
                    <h3 className="text-lg font-bold text-white leading-snug">{g.name}</h3>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#0787E8] block mb-2">{g.role}</span>
                    <p className="text-xs text-[#426D4A] leading-relaxed mb-4">{g.bio}</p>
                  </div>
                  <div className="pt-3 border-t border-gray-200/70 text-[11px] text-[#183B2A]">
                    <span className="font-bold text-[#426D4A] block">Notable Summits:</span>
                    <span className="font-semibold">{g.summits}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Medical Protocols Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#183B2A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0787E8]">
                Medical Baseline
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mt-2 mb-6">
                Why Our 99.8% Safety Record Leads The World
              </h2>
              <p className="text-sm sm:text-base text-[#D5E2D7] leading-relaxed mb-6">
                At high altitude, safety is not an afterthought; it is engineering. We combine continuous clinical monitoring, slow-rate ascent profiles, and real-time satellite telemetry to protect every member of our expedition family.
              </p>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0787E8] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#E5EFE5]">
                    <strong>Twice-Daily Oximetry Logs:</strong> Heart rate and pulse oxygen saturation logged every morning and evening.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0787E8] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#E5EFE5]">
                    <strong>Comprehensive High Altitude Medical Kits:</strong> Portable Gamow hyperbaric chambers, bottled O2, and dexamethasone on all trips above 4,000m.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0787E8] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#E5EFE5]">
                    <strong>Satellite SOS Link:</strong> 24/7 direct GPS comms with mountain rescue helicopter squadrons in Lukla, Chamonix, and Punta Arenas.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-white">
                <h3 className="text-xl font-bold mb-4">Have Questions About Altitude or Fitness?</h3>
                <p className="text-xs sm:text-sm text-[#D5E2D7] leading-relaxed mb-6">
                  Schedule a complimentary 20-minute video consultation with our expedition medical advisory team before booking.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white transition-all shadow-md"
                  style={{ backgroundColor: '#0787E8' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#056DBB')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0787E8')}
                >
                  <span>Book Expedition Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
