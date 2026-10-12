'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Mountain, ArrowRight, Compass, Sparkles } from 'lucide-react';
import { FALLBACK_DESTINATIONS } from '@/data/fallbackData';

export default function DestinationsPage() {
  return (
    <div className="bg-[#F3F5F4] min-h-screen pb-24">
      {/* Banner */}
      <div 
        className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=2200&q=90')`
        }}
      >
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(12, 35, 27, 0.72)' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 mb-4 text-[#0787E8]">
            <Compass className="w-3.5 h-3.5" />
            <span className="text-white">Iconic South India Circuits</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Top Travel Destinations
          </h1>
          <p className="mt-4 text-base sm:text-xl text-[#F3F5F4] font-light leading-relaxed max-w-3xl mx-auto">
            From the misty coffee trails of Coorg and sunny shores of Goa to the boulder empire of Hampi and river rapids of Dandeli, explore handpicked weekend getaways with departures from Hyderabad and Bangalore.
          </p>
        </div>
      </div>

      {/* Destinations List / Detailed Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {FALLBACK_DESTINATIONS.map((dest, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/80 grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Photo Column */}
                <div className={`lg:col-span-6 relative h-72 sm:h-96 lg:h-auto overflow-hidden group ${isReversed ? 'lg:order-2' : ''}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={dest.image_url}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-white text-xs font-bold border border-white/20">
                    {dest.country}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white text-xs font-bold">
                    <span>{dest.treks_count} Curated Weekend Tours</span>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between ${isReversed ? 'lg:order-1' : ''}`}>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0787E8] mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{dest.country}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-[#183B2A] tracking-tight">
                      {dest.name}
                    </h2>

                    <p className="mt-4 text-sm sm:text-base text-[#426D4A] leading-relaxed">
                      {dest.description}
                    </p>

                    {/* Metadata Grid */}
                    <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-gray-400 font-bold uppercase block mb-1">
                          Prime Season
                        </span>
                        <div className="flex items-center gap-1.5 font-bold text-[#183B2A]">
                          <Calendar className="w-3.5 h-3.5 text-[#0787E8]" />
                          <span>{dest.best_season}</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-gray-400 font-bold uppercase block mb-1">
                          Altitude Range
                        </span>
                        <div className="flex items-center gap-1.5 font-bold text-[#183B2A]">
                          <Mountain className="w-3.5 h-3.5 text-[#0787E8]" />
                          <span>{dest.altitude}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-[#426D4A] font-medium">
                      Hyderabad & Bangalore Pickups
                    </span>
                    <Link
                      href={`/packages?destination=${dest.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white transition-all shadow-md active:scale-95"
                      style={{ backgroundColor: '#0787E8' }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#056DBB')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0787E8')}
                    >
                      <span>Explore {dest.name.split(' ')[0]} Tours</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
