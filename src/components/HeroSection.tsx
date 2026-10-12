'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Compass, 
  MapPin, 
  Calendar, 
  Search, 
  Shield, 
  Star, 
  Award,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function HeroSection() {
  const router = useRouter();
  const [selectedDestination, setSelectedDestination] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (selectedDestination) params.set('destination', selectedDestination);
    if (selectedCategory) params.set('category', selectedCategory);
    if (selectedDifficulty) params.set('difficulty', selectedDifficulty);
    router.push(`/packages?${params.toString()}`);
  };

  return (
    <div className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Photograph */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transform motion-safe:animate-subtle-zoom"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=90')`
        }}
      />

      {/* Specified Overlay: rgba(12, 35, 27, 0.58) */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(12, 35, 27, 0.58)' }}
      />

      {/* Decorative Gradient Shading */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#183B2A] via-transparent to-black/30 opacity-70 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F3F5F4] text-xs sm:text-sm font-semibold mb-6 shadow-lg"
        >
          <Sparkles className="w-4 h-4 text-[#0787E8]" />
          <span>Awarded Premier Himalayan & Alpine Expeditions 2026</span>
        </motion.div>

        {/* Main Heading & Highlighted Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] max-w-5xl mx-auto"
        >
          <span style={{ color: '#FFFFFF' }}>Conquer Peaks, </span>
          <br className="hidden sm:inline" />
          <span style={{ color: '#FFFFFF' }}>Awaken Your </span>
          <span style={{ color: '#0787E8' }} className="drop-shadow-md">
            Untamed Spirit
          </span>
        </motion.h1>

        {/* Description: #F3F5F4 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ color: '#F3F5F4' }}
          className="mt-6 text-base sm:text-xl lg:text-2xl max-w-3xl mx-auto font-normal leading-relaxed drop-shadow"
        >
          Curated high-altitude treks, legendary summit expeditions, and transformative wilderness journeys guided by world-certified UIAGM mountain experts.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Explore Packages button: #0787E8 */}
          <Link
            href="/packages"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white transition-all duration-300 shadow-xl hover:shadow-[#0787E8]/40 active:scale-95"
            style={{ backgroundColor: '#0787E8' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#056DBB')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0787E8')}
          >
            <span>Explore Packages</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Discover More button: Transparent with a white border */}
          <Link
            href="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-white transition-all duration-300 bg-transparent border-2 border-white hover:bg-white/15 backdrop-blur-sm active:scale-95"
          >
            Discover More
          </Link>
        </motion.div>

        {/* Quick Search & Filter Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 w-full max-w-4xl bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 sm:p-5 border border-white/40 text-left"
        >
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center">
            {/* Destination */}
            <div className="p-2 bg-gray-50 rounded-xl border border-gray-200">
              <label className="block text-[11px] font-bold text-[#183B2A] uppercase mb-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#0787E8]" />
                  Destination
                </span>
              </label>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#183B2A] focus:outline-none"
              >
                <option value="">All Regions</option>
                <option value="everest-khumbu">Everest Khumbu (Nepal)</option>
                <option value="annapurna-sanctuary">Annapurna Sanctuary</option>
                <option value="torres-del-paine">Torres del Paine (Patagonia)</option>
                <option value="swiss-alps">Swiss Alps & Zermatt</option>
                <option value="ladakh-himalayas">Ladakh & Zanskar Range</option>
                <option value="mount-kilimanjaro">Mount Kilimanjaro</option>
              </select>
            </div>

            {/* Trip Type */}
            <div className="p-2 bg-gray-50 rounded-xl border border-gray-200">
              <label className="block text-[11px] font-bold text-[#183B2A] uppercase mb-1">
                <span className="flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-[#0787E8]" />
                  Adventure Style
                </span>
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#183B2A] focus:outline-none"
              >
                <option value="">All Adventure Styles</option>
                <option value="trekking">High Altitude Trekking</option>
                <option value="mountaineering">Mountaineering Expedition</option>
                <option value="alpine-hikes">Alpine & Glacier Hikes</option>
                <option value="wilderness">Wilderness Safari</option>
                <option value="adventure-trails">Adventure Trails</option>
              </select>
            </div>

            {/* Difficulty */}
            <div className="p-2 bg-gray-50 rounded-xl border border-gray-200">
              <label className="block text-[11px] font-bold text-[#183B2A] uppercase mb-1">
                <span className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-[#0787E8]" />
                  Difficulty Level
                </span>
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#183B2A] focus:outline-none"
              >
                <option value="">Any Grade</option>
                <option value="Moderate">Moderate</option>
                <option value="Challenging">Challenging</option>
                <option value="Strenuous">Strenuous</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-1 sm:pt-0">
              <button
                type="submit"
                className="w-full h-full min-h-[52px] rounded-xl flex items-center justify-center gap-2 font-bold text-white text-sm transition-all duration-200 shadow-md"
                style={{ backgroundColor: '#0787E8' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#056DBB')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0787E8')}
              >
                <Search className="w-4 h-4" />
                <span>Find Adventure</span>
              </button>
            </div>
          </form>
        </motion.div>

        {/* Highlights / Trust Metrics Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-white/90"
        >
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-[#0787E8]">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <span className="text-lg font-black block leading-none text-white">99.8%</span>
              <span className="text-xs text-[#F3F5F4] opacity-80">Safety Protocol</span>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-[#0787E8]">
              <Star className="w-5 h-5 text-[#FF9D42] fill-[#FF9D42]" />
            </div>
            <div className="text-left">
              <span className="text-lg font-black block leading-none text-white">4.9 / 5.0</span>
              <span className="text-xs text-[#F3F5F4] opacity-80">1,500+ Reviews</span>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-[#0787E8]">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <span className="text-lg font-black block leading-none text-white">100%</span>
              <span className="text-xs text-[#F3F5F4] opacity-80">UIAGM Certified</span>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-[#0787E8]">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <span className="text-lg font-black block leading-none text-white">14+ Years</span>
              <span className="text-xs text-[#F3F5F4] opacity-80">Mountain Legacy</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
