'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  MapPin, 
  Camera,
  Search, 
  ArrowRight, 
  ChevronDown, 
  Home, 
  User, 
  X
} from 'lucide-react';
import BookingModal from './BookingModal';
import { TourPackage } from '@/types';
import { FALLBACK_PACKAGES } from '@/data/fallbackData';

interface NavbarProps {
  featuredPackages?: TourPackage[];
}

export default function Navbar({ featuredPackages = FALLBACK_PACKAGES }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Hide public navbar on admin dashboard pages
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  // Navigation states
  const [isScrolled, setIsScrolled] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  
  // Dropdown states for Desktop
  const [toursDropdownOpen, setToursDropdownOpen] = useState(false);
  const [destinationsDropdownOpen, setDestinationsDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  // Search Modal state
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filtered packages for search modal
  const searchResults = searchQuery.trim()
    ? featuredPackages.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.destination_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : featuredPackages.slice(0, 4);

  return (
    <>
      {/* ========================================================= */}
      {/* 1. PC & DESKTOP USERS: MODERN CINEMATIC GLASS TOP NAVBAR  */}
      {/* (Style from Mockup: Frosted Glass, Amber Accents, Glow)   */}
      {/* ========================================================= */}
      <header className="hidden md:block fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-300">
        <div 
          className={`rounded-2xl lg:rounded-full px-6 py-2.5 lg:py-3 flex items-center justify-between text-white transition-all duration-300 border ${
            isScrolled
              ? 'bg-[#07192F]/85 backdrop-blur-2xl border-white/20 shadow-2xl py-2'
              : 'bg-[#07192F]/55 backdrop-blur-xl border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]'
          }`}
        >
          {/* Brand Logo - Styled as shown in Mockup: Mountain Crest + Spirit Adventure + Tagline */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/assets/img/logohead.png" 
              alt="Spirit Adventure" 
              className="h-8 lg:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md" 
            />
            <div className="flex flex-col">
              <span className="font-black text-sm lg:text-base tracking-wider text-white uppercase font-sans leading-tight group-hover:text-amber-400 transition-colors">
                SPIRIT ADVENTURE
              </span>
              <span className="text-[7.5px] lg:text-[8.5px] font-bold tracking-[0.22em] text-blue-200/80 uppercase">
                EXPLORE • DISCOVER • EXPERIENCE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm font-semibold">
            {/* Home */}
            <Link
              href="/"
              className={`px-3 py-1.5 transition-colors relative font-medium ${
                pathname === '/' 
                  ? 'text-amber-400 font-bold' 
                  : 'text-white/85 hover:text-white'
              }`}
            >
              <span>Home</span>
              {pathname === '/' && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-400 rounded-full" />
              )}
            </Link>

            {/* Tours Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setToursDropdownOpen(true)}
              onMouseLeave={() => setToursDropdownOpen(false)}
            >
              <button
                onClick={() => setToursDropdownOpen(prev => !prev)}
                className={`px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors font-medium ${
                  pathname.startsWith('/packages') 
                    ? 'text-amber-400 font-bold' 
                    : 'text-white/85 hover:text-white'
                }`}
              >
                <span>Tours</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${toursDropdownOpen ? 'rotate-180 text-amber-400' : ''}`} />
              </button>

              <AnimatePresence>
                {toursDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-[#07192F]/95 backdrop-blur-2xl border border-white/20 shadow-2xl p-3 z-50 space-y-1 text-white"
                  >
                    <div className="px-3 py-1.5 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-amber-400 border-b border-white/10">
                      <span>Featured Tours</span>
                      <span className="text-blue-200/70 font-semibold normal-case">Top 5 Expeditions</span>
                    </div>
                    {featuredPackages.slice(0, 5).map((pkg) => (
                      <Link
                        key={pkg.id}
                        href={`/packages/${pkg.slug}`}
                        onClick={() => setToursDropdownOpen(false)}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/10 transition-colors group/item"
                      >
                        <div className="pr-2">
                          <span className="text-xs font-bold text-white group-hover/item:text-amber-400 transition-colors block line-clamp-1">
                            {pkg.title}
                          </span>
                          <span className="text-[10px] text-blue-200/70">
                            {pkg.duration_days} Days • From ₹{(pkg.discount_price ?? pkg.price).toLocaleString()}
                          </span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-amber-400 group-hover/item:translate-x-0.5 transition-all flex-shrink-0" />
                      </Link>
                    ))}
                    <div className="pt-2 border-t border-white/10">
                      <Link
                        href="/packages"
                        onClick={() => setToursDropdownOpen(false)}
                        className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs transition-all shadow-md active:scale-98 group/btn"
                      >
                        <span>Show More Tours</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Destinations Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDestinationsDropdownOpen(true)}
              onMouseLeave={() => setDestinationsDropdownOpen(false)}
            >
              <button
                onClick={() => setDestinationsDropdownOpen(prev => !prev)}
                className={`px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors font-medium ${
                  pathname.startsWith('/destinations') 
                    ? 'text-amber-400 font-bold' 
                    : 'text-white/85 hover:text-white'
                }`}
              >
                <span>Destinations</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${destinationsDropdownOpen ? 'rotate-180 text-amber-400' : ''}`} />
              </button>

              <AnimatePresence>
                {destinationsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-[#07192F]/95 backdrop-blur-2xl border border-white/20 shadow-2xl p-2.5 z-50 space-y-1 text-white"
                  >
                    <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-400 border-b border-white/10">
                      Popular Circuits
                    </div>
                    {[
                      { name: 'Himalayas & Kedarkantha', sub: 'Summit Treks & Snow', href: '/packages?destination=Kedarkantha' },
                      { name: 'Goa Coastal Getaways', sub: 'Beaches & Water Sports', href: '/packages?destination=Goa' },
                      { name: 'Coorg & Western Ghats', sub: 'Estates & Waterfalls', href: '/packages?destination=Coorg' },
                      { name: 'Hampi & Dandeli Rafting', sub: 'Heritage & Whitewater', href: '/packages?destination=Hampi' },
                      { name: 'Kashmir & Pahalgam', sub: 'Dal Lake & Valleys', href: '/packages?destination=Kashmir' },
                    ].map((dest, i) => (
                      <Link
                        key={i}
                        href={dest.href}
                        onClick={() => setDestinationsDropdownOpen(false)}
                        className="block p-2 rounded-xl text-xs hover:bg-white/10 transition-colors group/dest"
                      >
                        <p className="font-bold text-white group-hover/dest:text-amber-400 transition-colors">{dest.name}</p>
                        <p className="text-[10px] text-blue-200/70">{dest.sub}</p>
                      </Link>
                    ))}
                    <div className="pt-2 border-t border-white/10">
                      <Link
                        href="/destinations"
                        onClick={() => setDestinationsDropdownOpen(false)}
                        className="block text-center py-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                      >
                        Explore All Destinations →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                onClick={() => setAboutDropdownOpen(prev => !prev)}
                className={`px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors font-medium ${
                  pathname === '/about' 
                    ? 'text-amber-400 font-bold' 
                    : 'text-white/85 hover:text-white'
                }`}
              >
                <span>About</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180 text-amber-400' : ''}`} />
              </button>

              <AnimatePresence>
                {aboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-[#07192F]/95 backdrop-blur-2xl border border-white/20 shadow-2xl p-2.5 z-50 space-y-1 text-white"
                  >
                    <Link
                      href="/about"
                      onClick={() => setAboutDropdownOpen(false)}
                      className="block p-2 rounded-xl text-xs font-bold text-white hover:bg-white/10 hover:text-amber-400 transition-colors"
                    >
                      Our Story & Agency
                    </Link>
                    <Link
                      href="/about"
                      onClick={() => setAboutDropdownOpen(false)}
                      className="block p-2 rounded-xl text-xs font-bold text-white hover:bg-white/10 hover:text-amber-400 transition-colors"
                    >
                      Safety & Travel Guarantee
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Gallery */}
            <Link
              href="/gallery"
              className={`px-3 py-1.5 transition-colors font-medium ${
                pathname === '/gallery' 
                  ? 'text-amber-400 font-bold' 
                  : 'text-white/85 hover:text-white'
              }`}
            >
              Gallery
            </Link>

            {/* Customize Trip Planner */}
            <Link
              href="/customize"
              className={`px-3 py-1.5 transition-colors font-medium ${
                pathname === '/customize' 
                  ? 'text-amber-400 font-bold' 
                  : 'text-white/85 hover:text-white'
              }`}
            >
              Customize
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`px-3 py-1.5 transition-colors font-medium ${
                pathname === '/contact' 
                  ? 'text-amber-400 font-bold' 
                  : 'text-white/85 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Icons & CTA Button */}
          <div className="flex items-center gap-3">
            {/* Search Icon */}
            <button
              onClick={() => setSearchModalOpen(true)}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20 shadow-xs"
              title="Search Tours"
            >
              <Search className="w-4 h-4 text-white" />
            </button>

            {/* Vertical Divider */}
            <div className="h-5 w-[1px] bg-white/20 mx-1" />

            {/* Plan Your Trip → Button (Vibrant Golden Amber Pill as in Mockup) */}
            <button
              onClick={() => setBookingModalOpen(true)}
              className="px-5 py-2.5 rounded-full text-xs lg:text-sm font-extrabold text-slate-950 shadow-lg flex items-center gap-1.5 transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-amber-500/25"
            >
              <span>Plan Your Trip</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================= */}
      {/* 2. SMALL SCREEN / MOBILE USERS: GLASS TOP HEADER          */}
      {/* ========================================================= */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 px-4 py-2.5 bg-[#07192F]/80 backdrop-blur-xl border-b border-white/15 flex items-center justify-between text-white shadow-md">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/assets/img/logohead.png" 
            alt="Spirit Adventures" 
            className="h-8 sm:h-9 w-auto object-contain drop-shadow" 
          />
          <div className="flex flex-col">
            <span className="font-black text-xs tracking-wider text-white uppercase font-sans leading-none">
              SPIRIT ADVENTURE
            </span>
            <span className="text-[7px] font-bold tracking-[0.18em] text-blue-200/80 uppercase">
              EXPLORE • EXPERIENCE
            </span>
          </div>
        </Link>

        {/* Right Action Icons: Search, Book Now */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSearchModalOpen(true)}
            className="w-8 h-8 rounded-full bg-white/10 text-white border border-white/20 flex items-center justify-center"
            title="Search"
          >
            <Search className="w-3.5 h-3.5" />
          </button>

          {/* Book Now Button */}
          <button
            onClick={() => setBookingModalOpen(true)}
            className="px-3.5 py-1.5 rounded-full text-[11px] font-extrabold text-slate-950 flex items-center gap-1 shadow-md bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400"
          >
            <span>Book Now</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </header>

      {/* ========================================================= */}
      {/* 2B. SMALL SCREEN / MOBILE USERS: FLOATING BOTTOM NAVBAR   */}
      {/* (Option 5 from Mockup: Dark Glass, Raised Mountain Icon)  */}
      {/* ========================================================= */}
      <nav className="md:hidden fixed bottom-4 left-4 right-4 max-w-sm mx-auto z-50 pointer-events-auto">
        <div className="bg-[#07192F]/90 backdrop-blur-2xl border border-white/20 rounded-full px-3 py-2 shadow-2xl flex items-center justify-around text-slate-300">
          {/* 1. Home */}
          <Link
            href="/"
            className={`flex flex-col items-center justify-center gap-0.5 px-3 py-1 rounded-full transition-all ${
              pathname === '/' 
                ? 'text-amber-400 font-bold' 
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <div className={`p-1 rounded-full ${pathname === '/' ? 'text-amber-400' : ''}`}>
              <Home className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold">Home</span>
          </Link>

          {/* 2. Tours */}
          <Link
            href="/packages"
            className={`flex flex-col items-center justify-center gap-0.5 px-3 py-1 rounded-full transition-all ${
              pathname.startsWith('/packages') 
                ? 'text-amber-400 font-bold' 
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <div className={`p-1 rounded-full ${pathname.startsWith('/packages') ? 'text-amber-400' : ''}`}>
              <Compass className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold">Tours</span>
          </Link>

          {/* 3. CENTER HERO BUTTON: Amber Circle with Mountain Icon from Mockup */}
          <button
            onClick={() => setBookingModalOpen(true)}
            className="w-13 h-13 rounded-full flex items-center justify-center text-slate-950 shadow-2xl transition-transform duration-300 transform -translate-y-3.5 border-3 border-[#07192F] hover:scale-105 active:scale-95 bg-gradient-to-r from-amber-400 to-amber-500 shadow-amber-500/30 font-bold"
            title="Book Your Tour"
          >
            {/* Custom Mountain Icon */}
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-slate-950 stroke-[2.4]" strokeLinecap="round" strokeLinejoin="round">
              <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
              <path d="M4.14 15.08 7.5 10l3.5 5.5" />
            </svg>
          </button>

          {/* 4. Destinations */}
          <Link
            href="/destinations"
            className={`flex flex-col items-center justify-center gap-0.5 px-3 py-1 rounded-full transition-all ${
              pathname.startsWith('/destinations') 
                ? 'text-amber-400 font-bold' 
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <div className={`p-1 rounded-full ${pathname.startsWith('/destinations') ? 'text-amber-400' : ''}`}>
              <MapPin className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold">Destinations</span>
          </Link>

          {/* 5. Profile / Contact */}
          <Link
            href="/contact"
            className={`flex flex-col items-center justify-center gap-0.5 px-3 py-1 rounded-full transition-all ${
              pathname === '/contact' 
                ? 'text-amber-400 font-bold' 
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <div className={`p-1 rounded-full ${pathname === '/contact' ? 'text-amber-400' : ''}`}>
              <User className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold">Profile</span>
          </Link>
        </div>
      </nav>

      {/* ========================================================= */}
      {/* 3. INTERACTIVE SEARCH MODAL                               */}
      {/* ========================================================= */}
      <AnimatePresence>
        {searchModalOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-6 text-slate-900 shadow-2xl relative"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Search className="w-5 h-5 text-[#0787E8]" />
                  <h3 className="font-bold text-sm text-slate-900">Search Expeditions & Places</h3>
                </div>
                <button
                  onClick={() => setSearchModalOpen(false)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 relative">
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type destination, e.g. Coorg, Goa, Hampi, Ooty, Rafting..."
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0787E8] focus:bg-white transition-colors"
                />
              </div>

              {/* Instant Search Results */}
              <div className="mt-4 max-h-72 overflow-y-auto space-y-2 pr-1">
                {searchResults.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => {
                      setSearchModalOpen(false);
                      router.push(`/packages/${pkg.slug}`);
                    }}
                    className="p-3 rounded-2xl bg-slate-50 hover:bg-blue-50/70 border border-slate-100 hover:border-blue-100 flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">{pkg.title}</h4>
                      <p className="text-[11px] text-slate-500">{pkg.destination_name} • {pkg.duration_days} Days</p>
                    </div>
                    <span className="text-xs font-extrabold text-[#0787E8]">
                      ₹{(pkg.discount_price ?? pkg.price).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Quick departures from Hyderabad & Bangalore</span>
                <Link
                  href="/packages"
                  onClick={() => setSearchModalOpen(false)}
                  className="text-[#0787E8] font-bold hover:underline"
                >
                  Explore All Packages →
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>



      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        packages={featuredPackages}
      />
    </>
  );
}
