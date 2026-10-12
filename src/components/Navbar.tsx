'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  MapPin, 
  Camera,
  Search, 
  Heart, 
  ArrowRight, 
  ChevronDown, 
  Home, 
  User, 
  Phone, 
  X, 
  Mountain, 
  Sparkles,
  Calendar,
  CheckCircle2,
  Bookmark
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

  // Navigation states
  const [isScrolled, setIsScrolled] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  
  // Dropdown states for Desktop
  const [toursDropdownOpen, setToursDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  // Search Modal state
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Wishlist state
  const [wishlistModalOpen, setWishlistModalOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>(['coorg', 'goa']);

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

  const toggleWishlist = (slug: string) => {
    setWishlist(prev => 
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  };

  return (
    <>
      {/* ========================================================= */}
      {/* 1. PC & DESKTOP USERS: TRANSPARENT GLASS TOP NAVBAR       */}
      {/* (Modern & Cinematic - Floating Glass Pill)               */}
      {/* ========================================================= */}
      <header className="hidden md:block fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-300">
        <div 
          className={`rounded-full px-6 py-3 flex items-center justify-between text-white transition-all duration-300 border ${
            isScrolled
              ? 'bg-[#0c231b]/85 backdrop-blur-xl border-white/20 shadow-2xl py-2.5'
              : 'bg-black/40 backdrop-blur-lg border-white/15 shadow-xl'
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/assets/img/logo.png" 
              alt="Spirit Adventures" 
              className="h-10 lg:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm font-semibold">
            {/* Home */}
            <Link
              href="/"
              className={`px-3 py-1.5 rounded-full transition-colors relative ${
                pathname === '/' 
                  ? 'text-white font-bold' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>Home</span>
              {pathname === '/' && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#F59E0B] rounded-full" />
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
                className={`px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors ${
                  pathname.startsWith('/packages') 
                    ? 'text-white font-bold' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>Tours</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${toursDropdownOpen ? 'rotate-180 text-[#F59E0B]' : ''}`} />
              </button>

              <AnimatePresence>
                {toursDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-[#0c231b]/95 backdrop-blur-xl border border-white/20 shadow-2xl p-3 z-50 space-y-1"
                  >
                    <div className="px-3 py-1.5 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#F59E0B] border-b border-white/10">
                      <span>Featured Tours</span>
                      <span className="text-white/60 font-semibold normal-case">Top 5 Tours</span>
                    </div>
                    {featuredPackages.slice(0, 5).map((pkg) => (
                      <Link
                        key={pkg.id}
                        href={`/packages/${pkg.slug}`}
                        onClick={() => setToursDropdownOpen(false)}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/10 transition-colors group/item"
                      >
                        <div className="pr-2">
                          <span className="text-xs font-bold text-white group-hover/item:text-[#F59E0B] transition-colors block line-clamp-1">
                            {pkg.title}
                          </span>
                          <span className="text-[10px] text-white/65">
                            {pkg.duration_days} Days • From ₹{(pkg.discount_price ?? pkg.price).toLocaleString()}
                          </span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover/item:text-[#F59E0B] group-hover/item:translate-x-0.5 transition-all flex-shrink-0" />
                      </Link>
                    ))}
                    <div className="pt-2 border-t border-white/10">
                      <Link
                        href="/packages"
                        onClick={() => setToursDropdownOpen(false)}
                        className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] hover:from-[#F59E0B] hover:to-[#D97706] text-slate-950 font-bold text-xs transition-all shadow-md active:scale-98 group/btn"
                      >
                        <span>Show More Tours</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
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
                className={`px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors ${
                  pathname === '/about' 
                    ? 'text-white font-bold' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>About</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180 text-[#F59E0B]' : ''}`} />
              </button>

              <AnimatePresence>
                {aboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-[#0c231b]/95 backdrop-blur-xl border border-white/20 shadow-2xl p-2.5 z-50 space-y-1"
                  >
                    <Link
                      href="/about"
                      onClick={() => setAboutDropdownOpen(false)}
                      className="block p-2 rounded-xl text-xs font-bold text-white hover:bg-white/10 hover:text-[#F59E0B] transition-colors"
                    >
                      Our Story & Agency
                    </Link>
                    <Link
                      href="/about#guides"
                      onClick={() => setAboutDropdownOpen(false)}
                      className="block p-2 rounded-xl text-xs font-bold text-white hover:bg-white/10 hover:text-[#F59E0B] transition-colors"
                    >
                      Trip Captains & Guides
                    </Link>
                    <Link
                      href="/about"
                      onClick={() => setAboutDropdownOpen(false)}
                      className="block p-2 rounded-xl text-xs font-bold text-white hover:bg-white/10 hover:text-[#F59E0B] transition-colors"
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
              className={`px-3 py-1.5 rounded-full transition-colors ${
                pathname === '/gallery' 
                  ? 'text-white font-bold' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              Gallery
            </Link>

            {/* Customize Trip Planner */}
            <Link
              href="/customize"
              className={`px-3 py-1.5 rounded-full transition-colors ${
                pathname === '/customize' 
                  ? 'text-white font-bold' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              Customize
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`px-3 py-1.5 rounded-full transition-colors ${
                pathname === '/contact' 
                  ? 'text-white font-bold' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
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
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              title="Search Tours"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Wishlist Icon */}
            <button
              onClick={() => setWishlistModalOpen(true)}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors relative"
              title="View Saved Trips"
            >
              <Heart className="w-4 h-4" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#F59E0B] text-slate-950 font-black text-[9px] flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Vertical Divider */}
            <div className="h-5 w-[1px] bg-white/20 mx-1" />

            {/* Plan Your Trip → Button (Golden Amber Pill from Screenshot 1) */}
            <button
              onClick={() => setBookingModalOpen(true)}
              className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-950 shadow-lg flex items-center gap-1.5 transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
              }}
            >
              <span>Plan Your Trip</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================= */}
      {/* 2. SMALL SCREEN / MOBILE USERS: TOP HEADER               */}
      {/* (Matches Screenshot 5 Top Header)                        */}
      {/* ========================================================= */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 px-4 py-3 bg-[#0c231b]/80 backdrop-blur-xl border-b border-white/10 flex items-center justify-between text-white shadow-lg">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/assets/img/logo.png" 
            alt="Spirit Adventures" 
            className="h-8 sm:h-9 w-auto object-contain" 
          />
        </Link>

        {/* Right Action Icons: Search, Heart, Book Now */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSearchModalOpen(true)}
            className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center"
            title="Search"
          >
            <Search className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setWishlistModalOpen(true)}
            className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center relative"
            title="Wishlist"
          >
            <Heart className="w-3.5 h-3.5" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#F59E0B] text-slate-950 font-bold text-[8px] flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Book Now Button from Screenshot 5 */}
          <button
            onClick={() => setBookingModalOpen(true)}
            className="px-3.5 py-1.5 rounded-full text-[11px] font-bold text-slate-950 flex items-center gap-1 shadow-md"
            style={{
              background: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
            }}
          >
            <span>Book Now</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </header>

      {/* ========================================================= */}
      {/* 2B. SMALL SCREEN / MOBILE USERS: FLOATING BOTTOM NAVBAR   */}
      {/* (Matches Screenshot 5: Floating Bottom Navbar Mobile)     */}
      {/* ========================================================= */}
      <nav className="md:hidden fixed bottom-4 left-4 right-4 max-w-sm mx-auto z-50 pointer-events-auto">
        <div className="bg-[#0C231B]/95 backdrop-blur-2xl border border-white/20 rounded-full px-3 py-2 shadow-2xl flex items-center justify-around text-white">
          {/* 1. Home */}
          <Link
            href="/"
            className={`flex flex-col items-center justify-center gap-0.5 px-3 py-1 rounded-full transition-all ${
              pathname === '/' 
                ? 'text-[#F59E0B]' 
                : 'text-white/70 hover:text-white'
            }`}
          >
            <div className={`p-1 rounded-full ${pathname === '/' ? 'bg-[#F59E0B]/20 text-[#F59E0B]' : ''}`}>
              <Home className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold">Home</span>
          </Link>

          {/* 2. Tours */}
          <Link
            href="/packages"
            className={`flex flex-col items-center justify-center gap-0.5 px-3 py-1 rounded-full transition-all ${
              pathname.startsWith('/packages') 
                ? 'text-[#F59E0B]' 
                : 'text-white/70 hover:text-white'
            }`}
          >
            <div className={`p-1 rounded-full ${pathname.startsWith('/packages') ? 'bg-[#F59E0B]/20 text-[#F59E0B]' : ''}`}>
              <Compass className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold">Tours</span>
          </Link>

          {/* 3. CENTER HERO BUTTON: Raised Circular Mountain Action Button */}
          <button
            onClick={() => setBookingModalOpen(true)}
            className="w-13 h-13 rounded-full flex items-center justify-center text-slate-950 shadow-2xl transition-transform duration-300 transform -translate-y-3.5 border-3 border-[#0C231B] hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
            }}
            title="Book Your Tour"
          >
            {/* Custom Mountain Icon matching yellow circle in Screenshot 5 */}
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 stroke-slate-950 stroke-[2.4]" strokeLinecap="round" strokeLinejoin="round">
              <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
              <path d="M4.14 15.08 7.5 10l3.5 5.5" />
            </svg>
          </button>

          {/* 4. Gallery */}
          <Link
            href="/gallery"
            className={`flex flex-col items-center justify-center gap-0.5 px-3 py-1 rounded-full transition-all ${
              pathname.startsWith('/gallery') 
                ? 'text-[#F59E0B]' 
                : 'text-white/70 hover:text-white'
            }`}
          >
            <div className={`p-1 rounded-full ${pathname.startsWith('/gallery') ? 'bg-[#F59E0B]/20 text-[#F59E0B]' : ''}`}>
              <Camera className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold">Gallery</span>
          </Link>

          {/* 5. Profile / Contact */}
          <Link
            href="/contact"
            className={`flex flex-col items-center justify-center gap-0.5 px-3 py-1 rounded-full transition-all ${
              pathname === '/contact' 
                ? 'text-[#F59E0B]' 
                : 'text-white/70 hover:text-white'
            }`}
          >
            <div className={`p-1 rounded-full ${pathname === '/contact' ? 'bg-[#F59E0B]/20 text-[#F59E0B]' : ''}`}>
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
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="w-full max-w-xl bg-[#0c231b] border border-white/20 rounded-3xl p-6 text-white shadow-2xl relative"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-white">
                  <Search className="w-5 h-5 text-[#F59E0B]" />
                  <h3 className="font-bold text-sm">Search Expeditions & Places</h3>
                </div>
                <button
                  onClick={() => setSearchModalOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white"
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
                  className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-[#F59E0B]"
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
                    className="p-3 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-white">{pkg.title}</h4>
                      <p className="text-[11px] text-white/60">{pkg.destination_name} • {pkg.duration_days} Days</p>
                    </div>
                    <span className="text-xs font-extrabold text-[#F59E0B]">
                      ₹{pkg.discount_price ?? pkg.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
                <span>Quick departures from Hyderabad & Bangalore</span>
                <Link
                  href="/packages"
                  onClick={() => setSearchModalOpen(false)}
                  className="text-[#F59E0B] font-bold hover:underline"
                >
                  Explore All Packages →
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* 4. INTERACTIVE WISHLIST DRAWER                            */}
      {/* ========================================================= */}
      <AnimatePresence>
        {wishlistModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md bg-[#0c231b] border border-white/20 rounded-3xl p-6 text-white shadow-2xl relative"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-[#F59E0B] fill-[#F59E0B]" />
                  <h3 className="font-bold text-sm">Your Saved Expeditions ({wishlist.length})</h3>
                </div>
                <button
                  onClick={() => setWishlistModalOpen(false)}
                  className="p-1 rounded-full hover:bg-white/10 text-white/70 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-3 max-h-80 overflow-y-auto">
                {featuredPackages
                  .filter(p => wishlist.includes(p.slug))
                  .map(pkg => (
                    <div key={pkg.id} className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-white">{pkg.title}</h4>
                        <span className="text-[11px] text-[#F59E0B] font-bold">₹{pkg.discount_price ?? pkg.price}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/packages/${pkg.slug}`}
                          onClick={() => setWishlistModalOpen(false)}
                          className="px-3 py-1 rounded-full bg-[#F59E0B] text-slate-950 font-bold text-[10px]"
                        >
                          View
                        </Link>
                        <button
                          onClick={() => toggleWishlist(pkg.slug)}
                          className="p-1 text-white/50 hover:text-red-400"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 text-center">
                <button
                  onClick={() => {
                    setWishlistModalOpen(false);
                    setBookingModalOpen(true);
                  }}
                  className="w-full py-2.5 rounded-full text-xs font-bold text-slate-950 shadow-md"
                  style={{
                    background: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
                  }}
                >
                  Book Saved Expeditions Now
                </button>
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
