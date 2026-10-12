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
  ShieldCheck, 
  Star, 
  Award, 
  ArrowRight, 
  Sparkles, 
  Users,
  Flame,
  Play,
  X
} from 'lucide-react';

export default function HeroSection() {
  const router = useRouter();
  const [selectedDestination, setSelectedDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [travelersCount, setTravelersCount] = useState('1 Person');
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (selectedDestination) params.set('destination', selectedDestination);
    router.push(`/packages?${params.toString()}`);
  };

  return (
    <div className="relative min-h-[96vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-36 pb-20">
      {/* Background Cinematic Travel Video with Poster fallback */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/img/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/assets/video/travel-mountains-hero.mp4" type="video/mp4" />
        <source src="/assets/video/travel-adventure-bg.mp4" type="video/mp4" />
        <source src="/assets/video/travel-new-hero.mp4" type="video/mp4" />
        <source src="/assets/video/Bgvideo.mp4" type="video/mp4" />
      </video>

      {/* Specified Overlay: rgba(12, 35, 27, 0.58) */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(12, 35, 27, 0.58)' }}
      />

      {/* Subtle Depth Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#183B2A] via-transparent to-black/40 opacity-80 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Eyebrow Badge from Screenshot 1 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-[#F59E0B] text-xs font-bold uppercase tracking-wider mb-5 shadow-lg"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-ping" />
          <span>Your Next Adventure Awaits</span>
        </motion.div>

        {/* Main Heading Matching Screenshot 1 */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-1 relative"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] max-w-5xl mx-auto text-white drop-shadow-md">
            Explore the World <br />
            <span 
              className="text-[#F59E0B] drop-shadow-lg"
              style={{
                textShadow: '0 4px 20px rgba(245, 158, 11, 0.3)'
              }}
            >
              One Journey at a Time
            </span>
          </h1>

          {/* Cursive Tagline "Adventure Changes You" like Screenshot 1 */}
          <div className="hidden lg:block absolute -right-28 top-8 transform rotate-6 pointer-events-none">
            <span className="font-serif italic text-2xl text-[#F59E0B] font-extrabold drop-shadow-md tracking-wide">
              Adventure <br />
              <span className="text-3xl text-white">Changes You ~</span>
            </span>
          </div>
        </motion.div>

        {/* Description from Screenshot 1 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ color: '#F3F5F4' }}
          className="mt-5 text-sm sm:text-lg lg:text-xl max-w-3xl mx-auto font-normal leading-relaxed drop-shadow"
        >
          Discover breathtaking destinations, thrilling experiences and unforgettable memories with Spirit Adventure. Pickups from Hyderabad and Bangalore.
        </motion.p>

        {/* Action Buttons: Explore Packages (#0787E8) & Discover More (Transparent with white border) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
        >
          <Link
            href="/packages"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 shadow-xl hover:shadow-[#0787E8]/40 active:scale-95"
            style={{ backgroundColor: '#0787E8' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#056DBB')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0787E8')}
          >
            <span>Explore Tour Packages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/customize"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 bg-transparent border-2 border-white hover:bg-white/15 backdrop-blur-sm active:scale-95"
          >
            Customize Your Tour
          </Link>

          <button
            type="button"
            onClick={() => setShowVideoModal(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 bg-black/40 hover:bg-black/60 border border-white/30 backdrop-blur-md active:scale-95 shadow-lg"
          >
            <span className="w-5 h-5 rounded-full bg-[#0787E8] flex items-center justify-center">
              <Play className="w-2.5 h-2.5 fill-white text-white translate-x-0.5" />
            </span>
            <span>Watch Welcome Film</span>
          </button>
        </motion.div>

        {/* Cinematic Floating Search Bar from Screenshot 1 */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 w-full max-w-4xl bg-black/45 backdrop-blur-xl rounded-2xl sm:rounded-full shadow-2xl p-3 sm:p-2.5 sm:pl-6 border border-white/20 text-left"
        >
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-2">
            {/* Where to? */}
            <div className="w-full sm:flex-1 flex items-center gap-3 px-3 py-1.5 sm:border-r sm:border-white/20">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#F59E0B] flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <span className="block text-[10px] font-bold text-white/60 uppercase tracking-wider">
                  Where to?
                </span>
                <select
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                  className="w-full bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer"
                >
                  <option value="" className="bg-[#0C231B] text-white">Choose Tour Circuit</option>
                  <option value="wayanad" className="bg-[#0C231B] text-white">Wayanad Adventure Trip (3D/2N)</option>
                  <option value="coorg-wayanad" className="bg-[#0C231B] text-white">Coorg & Wayanad Circuit (4D/3N)</option>
                  <option value="gokarna-dandeli-udupi" className="bg-[#0C231B] text-white">Gokarna, Dandeli & Udupi (4D/3N)</option>
                  <option value="gokarna-murudeshwar-udupi-jogfalls" className="bg-[#0C231B] text-white">Gokarna, Murudeshwar & Jog Falls (4D/3N)</option>
                  <option value="hampi-gokarna-dandeli" className="bg-[#0C231B] text-white">Hampi, Gokarna & Dandeli (4D/3N)</option>
                  <option value="isha-ooty-coonoor" className="bg-[#0C231B] text-white">Isha Foundation, Ooty & Coonoor (4D/3N)</option>
                  <option value="manali-kullu-kasol" className="bg-[#0C231B] text-white">Manali, Kullu & Kasol Snow Trip (4D/3N)</option>
                  <option value="munnar-thekkady" className="bg-[#0C231B] text-white">Munnar & Thekkady Kerala Escape (4D/3N)</option>
                  <option value="munnar-alleppey" className="bg-[#0C231B] text-white">Munnar & Alleppey Houseboat (4D/3N)</option>
                  <option value="ooty-coonoor-mysore" className="bg-[#0C231B] text-white">Ooty, Coonoor & Mysore (4D/3N)</option>
                  <option value="darjeeling-gangtok" className="bg-[#0C231B] text-white">Gangtok & Darjeeling Package (5D/4N)</option>
                  <option value="coastal-karnataka-temples" className="bg-[#0C231B] text-white">Gokarna, Dandeli, Kukke & Dharmasthala (5D/4N)</option>
                  <option value="kashmir-paradise" className="bg-[#0C231B] text-white">Kashmir Paradise Group Trip (5D/4N)</option>
                  <option value="kerala-varkala-alleppey" className="bg-[#0C231B] text-white">Kerala Grand Escape: Munnar, Alleppey & Varkala (5D/4N)</option>
                  <option value="manali-delhi-hyd" className="bg-[#0C231B] text-white">Manali, Kullu & Kasol (Ex-HYD via Delhi) (5D/4N)</option>
                  <option value="meghalaya" className="bg-[#0C231B] text-white">Meghalaya Group Trip: Shillong & Cherrapunji (5D/4N)</option>
                  <option value="ooty-kodaikanal" className="bg-[#0C231B] text-white">Ooty & Kodaikanal Group Trip (5D/4N)</option>
                  <option value="shimla-manali" className="bg-[#0C231B] text-white">Delhi, Shimla & Manali Group Trip (5D/4N)</option>
                  <option value="coorg-weekend" className="bg-[#0C231B] text-white">Coorg Weekend Backpacking Trip (2D/1N)</option>
                  <option value="dandeli-weekend" className="bg-[#0C231B] text-white">Dandeli Weekend Adventure Trip (2D/1N)</option>
                  <option value="gokarna-murudeshwar-2d" className="bg-[#0C231B] text-white">Gokarna & Murudeshwar Trip (2D/1N)</option>
                  <option value="hampi-weekend" className="bg-[#0C231B] text-white">Hampi Adventure Trip (2D/1N)</option>
                  <option value="munnar-2d" className="bg-[#0C231B] text-white">Munnar Adventure Escape (3D/2N)</option>
                  <option value="chikmagalur" className="bg-[#0C231B] text-white">Chikmagalur Adventure Trip (3D/2N)</option>
                  <option value="coorg-chikmagalur" className="bg-[#0C231B] text-white">Coorg & Chikmagalur Adventure (3D/2N)</option>
                  <option value="coorg-3d" className="bg-[#0C231B] text-white">Coorg Scotland of India Trip (3D/2N)</option>
                  <option value="goa" className="bg-[#0C231B] text-white">Go Goa Adventure Trip (3D/2N)</option>
                  <option value="gokarna-dandeli-3d" className="bg-[#0C231B] text-white">Gokarna & Dandeli Express (3D/2N)</option>
                  <option value="gokarna-jogfalls-3d" className="bg-[#0C231B] text-white">Gokarna & Jog Falls Express (3D/2N)</option>
                  <option value="gokarna-udupi-3d" className="bg-[#0C231B] text-white">Gokarna & Udupi Express (3D/2N)</option>
                  <option value="isha-ooty-3d" className="bg-[#0C231B] text-white">Ooty & Isha Foundation (3D/2N)</option>
                  <option value="lonavala-andharban" className="bg-[#0C231B] text-white">Lonavala, Andharban & Devkund (3D/2N)</option>
                  <option value="ooty-coonoor-3d" className="bg-[#0C231B] text-white">Ooty, Coonoor & Mysore (3D/2N)</option>
                  <option value="pondicherry-mahabalipuram" className="bg-[#0C231B] text-white">Pondicherry & Mahabalipuram (3D/2N)</option>
                </select>
              </div>
            </div>

            {/* When? */}
            <div className="w-full sm:flex-1 flex items-center gap-3 px-3 py-1.5 sm:border-r sm:border-white/20">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#F59E0B] flex-shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <span className="block text-[10px] font-bold text-white/60 uppercase tracking-wider">
                  When?
                </span>
                <input
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer"
                />
              </div>
            </div>

            {/* Travelers */}
            <div className="w-full sm:flex-1 flex items-center gap-3 px-3 py-1.5">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#F59E0B] flex-shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <span className="block text-[10px] font-bold text-white/60 uppercase tracking-wider">
                  Travelers
                </span>
                <select
                  value={travelersCount}
                  onChange={(e) => setTravelersCount(e.target.value)}
                  className="w-full bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer"
                >
                  <option value="1 Person" className="bg-[#0C231B] text-white">1 Person</option>
                  <option value="2 Persons" className="bg-[#0C231B] text-white">2 Persons (Couple/Duo)</option>
                  <option value="4 Persons" className="bg-[#0C231B] text-white">4 Persons (Friends)</option>
                  <option value="6+ Persons" className="bg-[#0C231B] text-white">6+ Persons (Group)</option>
                </select>
              </div>
            </div>

            {/* Yellow Circle Search Button from Screenshot 1 */}
            <button
              type="submit"
              className="w-full sm:w-12 h-12 rounded-xl sm:rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 flex-shrink-0 font-bold"
              title="Search Expeditions"
            >
              <Search className="w-5 h-5 text-slate-950 stroke-[2.5]" />
              <span className="sm:hidden ml-2 text-xs font-bold">Search Expeditions</span>
            </button>
          </form>
        </motion.div>

        {/* Trust Metrics Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-white/90"
        >
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-[#0787E8]">
              <ShieldCheck className="w-4 h-4 text-white" />
            </div>
            <div className="text-left">
              <span className="text-base font-black block leading-none text-white">100%</span>
              <span className="text-[11px] text-[#F3F5F4] opacity-80">Verified Stays & Cabs</span>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-[#0787E8]">
              <Star className="w-4 h-4 text-[#FF9D42] fill-[#FF9D42]" />
            </div>
            <div className="text-left">
              <span className="text-base font-black block leading-none text-white">4.9 / 5.0</span>
              <span className="text-[11px] text-[#F3F5F4] opacity-80">1,500+ Happy Explorers</span>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-[#0787E8]">
              <Award className="w-4 h-4 text-white" />
            </div>
            <div className="text-left">
              <span className="text-base font-black block leading-none text-white">Certified</span>
              <span className="text-[11px] text-[#F3F5F4] opacity-80">Trip Coordinators</span>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-[#0787E8]">
              <Flame className="w-4 h-4 text-[#FF9D42]" />
            </div>
            <div className="text-left">
              <span className="text-base font-black block leading-none text-white">Campfires</span>
              <span className="text-[11px] text-[#F3F5F4] opacity-80">Music Nights Included</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Welcome Video Modal */}
      {showVideoModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setShowVideoModal(false)}
        >
          <div 
            className="relative w-full max-w-4xl bg-[#183B2A] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/80 to-transparent absolute top-0 left-0 right-0 z-10">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0787E8] animate-ping" />
                <span className="text-white text-sm font-bold tracking-wide">Spirit Adventures • Official Film</span>
              </div>
              <button
                type="button"
                onClick={() => setShowVideoModal(false)}
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <video
              autoPlay
              controls
              playsInline
              className="w-full max-h-[75vh] object-contain aspect-video bg-black pt-12"
            >
              <source src="/assets/video/Openingvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
