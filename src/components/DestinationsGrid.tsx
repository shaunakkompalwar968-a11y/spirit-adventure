'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, Compass } from 'lucide-react';
import { Destination } from '@/types';

interface DestinationsGridProps {
  destinations: Destination[];
}

export default function DestinationsGrid({ destinations }: DestinationsGridProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E5EFE5] text-[#183B2A] mb-3">
              <Compass className="w-3.5 h-3.5 text-[#0787E8]" />
              <span>Iconic Ranges</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#183B2A] tracking-tight">
              Explore Our Destinations
            </h2>
            <p className="mt-3 text-base text-[#426D4A] max-w-xl">
              From high Himalayan passes to granite spires at the ends of the earth.
            </p>
          </div>
          <Link
            href="/destinations"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-[#0787E8] hover:text-[#056DBB] transition-colors"
          >
            <span>View All Destinations</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                href={`/packages?destination=${dest.slug}`}
                className="group relative h-80 rounded-2xl overflow-hidden block shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={dest.image_url}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#183B2A]/90 via-[#183B2A]/30 to-black/20" />

                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold border border-white/30">
                  {dest.treks_count} Expeditions
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center gap-1 text-[#0787E8] text-xs font-bold uppercase tracking-wider mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{dest.country}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#0787E8] transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-[#D5E2D7] mt-1 line-clamp-2">
                    {dest.description}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-[#E5EFE5] border-t border-white/20 pt-2 font-medium">
                    <span>Season: {dest.best_season}</span>
                    <span className="text-[#0787E8] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                      Explore &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
