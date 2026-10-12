'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Camera, Play, ArrowRight, MapPin } from 'lucide-react';
import { FALLBACK_GALLERY_ITEMS } from '@/data/fallbackData';

export default function MediaGalleryPreview() {
  const featuredItems = [
    FALLBACK_GALLERY_ITEMS[0], // Mountain Escapade
    FALLBACK_GALLERY_ITEMS[1], // Sun & Beaches
    FALLBACK_GALLERY_ITEMS[3], // Ancient Hampi
    FALLBACK_GALLERY_ITEMS[18], // Coastal Breeze Reel (video)
    FALLBACK_GALLERY_ITEMS[8], // Campfire & Stargazing
    FALLBACK_GALLERY_ITEMS[9], // Dandeli Water Rafting
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0787E8] mb-3 border border-blue-100">
              <Camera className="w-3.5 h-3.5 text-[#0787E8]" />
              <span>Real Travel Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1B3D] tracking-tight">
              Moments from the Wild & Roads
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              Authentic glimpses of summit sunrises, coastal shores, ancient stone boulders, and campfire nights captured by Spirit Adventure explorers.
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white transition-all shadow-md active:scale-95 flex-shrink-0 bg-gradient-to-r from-[#0066FF] to-[#0787E8] hover:from-[#0052cc] hover:to-[#056dbb] shadow-blue-500/25"
          >
            <span>Explore All Photos & Reels</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-black h-64 sm:h-72 border border-slate-100"
            >
              {item.type === 'video' ? (
                <>
                  <video
                    muted
                    loop
                    playsInline
                    poster={item.poster}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-100"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform">
                    <div className="w-11 h-11 rounded-full bg-[#0787E8] text-white flex items-center justify-center shadow-lg backdrop-blur-sm">
                      <Play className="w-4 h-4 fill-white translate-x-0.5" />
                    </div>
                  </div>
                </>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              )}

              {/* Gradient & Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Tag Badge */}
              <div className="absolute top-3 left-3 pointer-events-none">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/50 text-white backdrop-blur-md">
                  {item.category}
                </span>
              </div>

              {/* Content bottom */}
              <div className="absolute bottom-3 left-4 right-4 text-white pointer-events-none">
                <div className="flex items-center gap-1 text-[11px] text-[#38BDF8] font-semibold mb-0.5">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-[#38BDF8] transition-colors truncate">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
