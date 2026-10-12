'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  Menu, 
  X, 
  PhoneCall, 
  ShieldCheck, 
  Mountain,
  ChevronRight
} from 'lucide-react';
import BookingModal from './BookingModal';
import { TourPackage } from '@/types';

interface NavbarProps {
  featuredPackages?: TourPackage[];
}

export default function Navbar({ featuredPackages = [] }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tour Packages', href: '/packages' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-[#183B2A] text-[#D5E2D7] text-xs py-2 px-4 border-b border-[#426D4A]/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#0787E8]/20 text-[#0787E8] border border-[#0787E8]/30">
              2026/2027 Season Open
            </span>
            <span>Early Bird Savings: Up to 15% off high-altitude Himalayan treks</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <a 
              href="tel:+18005557748" 
              className="flex items-center gap-1.5 hover:text-[#0787E8] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#0787E8]" />
              <span>+1 (800) 555-SPIRIT</span>
            </a>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="hidden sm:flex items-center gap-1 text-[#E5EFE5]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0787E8]" />
              <span>IFMGA Certified Guides</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FFFFFF] shadow-md py-3' 
            : 'bg-[#FFFFFF] shadow-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-[#183B2A] to-[#426D4A] p-2 flex items-center justify-center text-white shadow-md shadow-[#183B2A]/20 transition-transform duration-300 group-hover:scale-105">
                <Mountain className="w-7 h-7 text-white stroke-[2.2]" />
                <Compass className="w-4 h-4 text-[#0787E8] absolute bottom-1 right-1 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#183B2A] group-hover:text-[#0787E8] transition-colors font-sans">
                  SPIRIT<span className="text-[#0787E8]">.</span>ADVENTURE
                </span>
                <span className="text-[10px] tracking-widest uppercase font-bold text-[#426D4A]">
                  Beyond Boundaries
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                      isActive 
                        ? 'text-[#0787E8]' 
                        : 'text-[#183B2A] hover:text-[#0787E8]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#0787E8] rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Book Now Button & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setBookingModalOpen(true)}
                className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-bold text-white bg-[#0787E8] hover:bg-[#056DBB] transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
              >
                Book Now
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-[#183B2A] hover:text-[#0787E8] hover:bg-[#F3F5F4] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-[#FFFFFF] border-b border-[#F3F5F4] px-4 pt-3 pb-6 shadow-xl"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                        isActive
                          ? 'bg-[#E5EFE5] text-[#0787E8]'
                          : 'text-[#183B2A] hover:bg-[#F3F5F4] hover:text-[#0787E8]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 opacity-60" />
                    </Link>
                  );
                })}
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setBookingModalOpen(true);
                    }}
                    className="w-full py-3 rounded-full text-center text-base font-bold text-white bg-[#0787E8] hover:bg-[#056DBB] transition-colors shadow-md"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Interactive Global Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        packages={featuredPackages}
      />
    </>
  );
}
