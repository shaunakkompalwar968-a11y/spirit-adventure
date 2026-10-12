'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  Video, 
  MapPin, 
  Play, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Compass, 
  Maximize2,
  ArrowRight
} from 'lucide-react';
import { FALLBACK_GALLERY_ITEMS } from '@/data/fallbackData';
import { GalleryItem } from '@/types';

type CategoryFilter = 'All' | 'Mountains' | 'Beaches' | 'Camping' | 'Adventure' | 'Videos';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filterTabs: { label: string; value: CategoryFilter; count: number }[] = [
    { label: 'All Moments', value: 'All', count: FALLBACK_GALLERY_ITEMS.length },
    { label: 'Mountains & Trails', value: 'Mountains', count: FALLBACK_GALLERY_ITEMS.filter(i => i.category === 'Mountains').length },
    { label: 'Beaches & Oceans', value: 'Beaches', count: FALLBACK_GALLERY_ITEMS.filter(i => i.category === 'Beaches').length },
    { label: 'Adventure & Ruins', value: 'Adventure', count: FALLBACK_GALLERY_ITEMS.filter(i => i.category === 'Adventure').length },
    { label: 'Camps & Starry Nights', value: 'Camping', count: FALLBACK_GALLERY_ITEMS.filter(i => i.category === 'Camping').length },
    { label: 'Cinematic Reels', value: 'Videos', count: FALLBACK_GALLERY_ITEMS.filter(i => i.category === 'Videos').length },
  ];

  const filteredItems = activeFilter === 'All'
    ? FALLBACK_GALLERY_ITEMS
    : FALLBACK_GALLERY_ITEMS.filter(item => item.category === activeFilter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === 'Escape') setActiveItem(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, filteredItems]);

  const handleNext = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveItem(filteredItems[prevIndex]);
  };

  return (
    <div className="bg-[#F3F5F4] min-h-screen pb-24">
      {/* Cinematic Hero Banner */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#183B2A]">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/img/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        >
          <source src="/assets/video/travel-coast.mp4" type="video/mp4" />
          <source src="/assets/video/Bgvideo.mp4" type="video/mp4" />
        </video>

        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(12, 35, 27, 0.75)' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 mb-4 text-[#FF9D42]"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Official Spirit Adventure Vault</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight"
          >
            Expedition Gallery & Travel Reels
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#F3F5F4] font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Real moments from real journeys. Explore authentic photos and cinematic drone reels captured across Coorg, Goa, Hampi, Dandeli, Ooty, and beyond.
          </motion.p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {/* Filter Tabs Pills */}
        <div className="bg-white rounded-2xl p-2.5 shadow-xl border border-gray-200/80 flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-[#183B2A] text-white shadow-md'
                    : 'text-[#426D4A] hover:bg-[#E5EFE5] hover:text-[#183B2A]'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-[#0787E8] text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/80 cursor-pointer"
                onClick={() => setActiveItem(item)}
              >
                {/* Media Container */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-black">
                  {item.type === 'video' ? (
                    <>
                      <video
                        muted
                        loop
                        playsInline
                        poster={item.poster}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        }}
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform">
                        <div className="w-12 h-12 rounded-full bg-[#0787E8]/90 text-white flex items-center justify-center shadow-lg backdrop-blur-sm">
                          <Play className="w-5 h-5 fill-white translate-x-0.5" />
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

                  {/* Badges Overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md">
                      {item.category}
                    </span>
                    {item.type === 'video' && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#FF9D42] text-[#183B2A] shadow">
                        <Video className="w-3 h-3" />
                        <span>Reel</span>
                      </span>
                    )}
                  </div>

                  {/* Gradient & Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Caption & Info */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="flex items-center gap-1 text-[11px] text-[#0787E8] font-semibold mb-1">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#FF9D42] transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Expand icon on hover */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Sub-card details */}
                <div className="p-4 bg-white">
                  <p className="text-xs text-[#426D4A] line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md"
            onClick={() => setActiveItem(null)}
          >
            <div 
              className="relative w-full max-w-5xl bg-[#183B2A] rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0787E8] animate-ping" />
                  <div>
                    <h4 className="text-white text-base sm:text-lg font-bold">
                      {activeItem.title}
                    </h4>
                    <span className="text-xs text-[#0787E8] flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {activeItem.location} • {activeItem.category}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveItem(null)}
                  className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Media Display */}
              <div className="relative bg-black flex items-center justify-center min-h-[50vh] max-h-[70vh] overflow-hidden">
                {activeItem.type === 'video' ? (
                  <video
                    key={activeItem.src}
                    autoPlay
                    controls
                    playsInline
                    className="w-full max-h-[70vh] object-contain"
                  >
                    <source src={activeItem.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={activeItem.src}
                    alt={activeItem.title}
                    className="w-full max-h-[70vh] object-contain"
                  />
                )}

                {/* Left / Right Nav Arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#0787E8] text-white flex items-center justify-center backdrop-blur-md transition-colors"
                  aria-label="Previous item"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#0787E8] text-white flex items-center justify-center backdrop-blur-md transition-colors"
                  aria-label="Next item"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Footer */}
              <div className="p-5 bg-[#183B2A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-[#D5E2D7] leading-relaxed max-w-2xl">
                  {activeItem.caption}
                </p>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Link
                    href="/customize"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white transition-all shadow-md active:scale-95"
                    style={{ backgroundColor: '#0787E8' }}
                  >
                    <span>Plan Trip Here</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom CTA Banner */}
      <div className="max-w-5xl mx-auto px-4 mt-20">
        <div className="rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden bg-gradient-to-r from-[#183B2A] via-[#1f4a35] to-[#183B2A] shadow-2xl border border-white/20">
          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF9D42] mb-2 block">
              READY FOR YOUR NEXT ADVENTURE?
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mb-4">
              Capture Your Own Memories with Spirit Adventure
            </h2>
            <p className="text-[#D5E2D7] text-sm sm:text-base max-w-2xl mx-auto mb-8">
              Join our upcoming weekend batches or let our travel designers curate a personalized custom getaway with private resort stays and campfire nights.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/packages"
                className="px-8 py-3.5 rounded-full font-bold text-sm text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
                style={{ backgroundColor: '#0787E8' }}
              >
                Browse Tour Packages
              </Link>
              <Link
                href="/customize"
                className="px-8 py-3.5 rounded-full font-bold text-sm text-white border-2 border-white/40 hover:bg-white/10 transition-colors"
              >
                Customize Private Trip
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
