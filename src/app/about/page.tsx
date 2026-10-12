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
  PhoneCall,
  MapPin,
  Sparkles
} from 'lucide-react';
import AboutSection from '@/components/AboutSection';
import { FALLBACK_STATS } from '@/data/fallbackData';

const TEAM_LEADERS = [
  {
    name: 'Shaunak & Team Leads',
    role: 'Founder & Head of Operations',
    bio: 'Passionate travel architects who founded Spirit Adventures with the mission to give travelers breathtaking, well-organized weekend getaways and wilderness trails without burning a hole in their pockets.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    speciality: 'Western Ghats & Coastal Trails',
  },
  {
    name: 'Vikram R.',
    role: 'Lead Tour Coordinator & Logistics',
    bio: 'Over 8 years managing interstate transport, group campfires, estate homestay partnerships, and safety protocols across Karnataka, Goa, and Tamil Nadu circuits.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    speciality: 'Hampi, Dandeli & Coorg Operations',
  },
  {
    name: 'Ananya S.',
    role: 'Experience Curator & Guest Relations',
    bio: 'Ensures every female traveler, college student batch, and family feels completely safe, pampered, and comfortable from boarding to final drop-off.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    speciality: 'Custom Private Tours & Hospitality',
  },
  {
    name: 'Karthik Gowda',
    role: 'Wilderness & Adventure Sports Specialist',
    bio: 'Certified whitewater safety marshal in Dandeli and Western Ghats trekking guide. Leads river rafting expeditions, rappelling, and night camping under starry skies.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80',
    speciality: 'Kali River Rafting & High Treks',
  },
];

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
          style={{ backgroundColor: 'rgba(12, 35, 27, 0.72)' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 mb-4 text-[#0787E8]">
            <Mountain className="w-3.5 h-3.5" />
            <span className="text-white">Our Story & Heritage</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Explore the World, <br />
            <span className="text-[#0787E8]">Without Limits</span>
          </h1>
          <p className="mt-4 text-base sm:text-xl text-[#F3F5F4] font-light leading-relaxed">
            Spirit Adventure is Hyderabad and Bangalore's premier travel agency dedicated to unforgettable group getaways, beach retreats, heritage trails, and custom holidays.
          </p>
        </div>
      </div>

      {/* Embedded Main About Section with Exact Brand Specification */}
      <AboutSection stats={FALLBACK_STATS} />

      {/* Team Leaders Section */}
      <section id="guides" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E5EFE5] text-[#183B2A] mb-3">
              <Award className="w-3.5 h-3.5 text-[#0787E8]" />
              <span>Certified Travel Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#183B2A] tracking-tight">
              Meet Our Trip Captains
            </h2>
            <p className="mt-3 text-base text-[#426D4A]">
              Every Spirit Adventures trip is accompanied by verified trip coordinators and certified local experts who ensure your journey is safe, joyful, and seamless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_LEADERS.map((g, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-2xl overflow-hidden bg-[#F3F5F4] border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="h-64 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={g.image}
                    alt={g.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#183B2A]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0787E8] block">
                      Trip Captain
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
                    <span className="font-bold text-[#426D4A] block">Speciality:</span>
                    <span className="font-semibold">{g.speciality}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Safety Section: #183B2A */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#183B2A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0787E8]">
                Travel Guarantee
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mt-2 mb-6">
                Why Over 12,000 Travelers Choose Spirit Adventures
              </h2>
              <p className="text-sm sm:text-base text-[#D5E2D7] leading-relaxed mb-6">
                From comfortable AC pushback buses and handpicked coffee estate resorts to authentic campfires and verified safety measures, we take the stress out of holiday planning.
              </p>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0787E8] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#E5EFE5]">
                    <strong>Verified Stays:</strong> We inspect every estate homestay, beach resort, and riverside camp to ensure top cleanliness, hot water, and delicious meals.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0787E8] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#E5EFE5]">
                    <strong>Sanitized AC Coaches:</strong> Dedicated commercial tempo travellers and pushback coaches driven by vetted, experienced highway captains.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0787E8] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#E5EFE5]">
                    <strong>24/7 Dedicated Trip Coordinator:</strong> A friendly, professional tour lead travels with the group to handle entries, schedules, campfires, and music.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-white">
                <h3 className="text-xl font-bold mb-4">Plan a Custom Group Tour</h3>
                <p className="text-xs sm:text-sm text-[#D5E2D7] leading-relaxed mb-6">
                  Want a private bus for your college batch, family get-together, or corporate retreat? We organize fully customized weekend and holiday itineraries.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/customize"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white transition-all shadow-md"
                    style={{ backgroundColor: '#0787E8' }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#056DBB')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0787E8')}
                  >
                    <span>Customize Your Trip</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="https://wa.me/919666567551"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white transition-all shadow-md"
                    style={{ backgroundColor: '#25D366' }}
                  >
                    <span>WhatsApp Support</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
