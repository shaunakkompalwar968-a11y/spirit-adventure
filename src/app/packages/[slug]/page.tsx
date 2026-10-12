'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Clock, 
  Mountain, 
  MapPin, 
  Users, 
  Calendar, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  ChevronDown, 
  PhoneCall, 
  ArrowLeft,
  Share2,
  FileText
} from 'lucide-react';
import { FALLBACK_PACKAGES } from '@/data/fallbackData';
import BookingModal from '@/components/BookingModal';

export default function PackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const pkg = FALLBACK_PACKAGES.find((p) => p.slug === slug);

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [activeDayAccordion, setActiveDayAccordion] = useState<number | null>(1);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  if (!pkg) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 bg-[#F3F5F4] text-center">
        <h2 className="text-3xl font-black text-[#183B2A]">Expedition Not Found</h2>
        <p className="mt-2 text-sm text-[#426D4A]">The tour package you were looking for does not exist or has been archived.</p>
        <Link
          href="/packages"
          className="mt-6 px-6 py-3 rounded-full bg-[#0787E8] text-white font-bold text-sm hover:bg-[#056DBB] transition-colors"
        >
          Back to Tour Packages
        </Link>
      </div>
    );
  }

  const currentPrice = pkg.discount_price ?? pkg.price;
  const galleryImages = pkg.gallery && pkg.gallery.length > 0 
    ? pkg.gallery 
    : [pkg.hero_image];

  return (
    <div className="bg-[#F3F5F4] min-h-screen pb-24">
      {/* Top Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-[#426D4A] overflow-hidden">
            <Link href="/" className="hover:text-[#0787E8] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/packages" className="hover:text-[#0787E8] transition-colors">Packages</Link>
            <span>/</span>
            <span className="font-bold text-[#183B2A] truncate">{pkg.title}</span>
          </div>

          <Link
            href="/packages"
            className="hidden sm:inline-flex items-center gap-1.5 font-bold text-[#0787E8] hover:text-[#056DBB] transition-colors text-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Packages</span>
          </Link>
        </div>
      </div>

      {/* Hero Visual Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="relative rounded-3xl overflow-hidden h-[420px] sm:h-[500px] shadow-2xl">
          <img
            src={galleryImages[activeGalleryIndex]}
            alt={pkg.title}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(12, 35, 27, 0.45)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#183B2A]/90 via-transparent to-black/30" />

          {/* Badges on Top */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#183B2A]/90 backdrop-blur-md border border-white/20 shadow">
                {pkg.category_name || 'High Altitude Trekking'}
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-emerald-700/90 backdrop-blur-md shadow">
                Grade: {pkg.difficulty}
              </span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-bold border border-white/20">
              <MapPin className="w-3.5 h-3.5 text-[#0787E8]" />
              <span>{pkg.destination_name}</span>
            </div>
          </div>

          {/* Bottom Heading & Key Badges */}
          <div className="absolute bottom-6 left-6 right-6 text-white max-w-4xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#FF9D42] text-[#FF9D42]"
                  />
                ))}
              </div>
              <span className="font-bold text-sm">{pkg.rating.toFixed(1)}</span>
              <span className="text-white/80 text-xs">({pkg.reviews_count} verified reviews)</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              {pkg.title}
            </h1>

            <p className="mt-2 text-sm sm:text-base text-[#F3F5F4] font-light max-w-3xl line-clamp-2">
              {pkg.tagline}
            </p>
          </div>
        </div>

        {/* Thumbnail Selector */}
        {galleryImages.length > 1 && (
          <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveGalleryIndex(i)}
                className={`relative w-24 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                  activeGalleryIndex === i 
                    ? 'border-[#0787E8] scale-105 shadow-md' 
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Overview Fast Facts Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#E5EFE5] flex items-center justify-center">
              <Clock className="w-6 h-6 text-[#0787E8]" />
            </div>
            <div>
              <span className="text-xs text-[#426D4A] font-bold uppercase block">Duration</span>
              <span className="text-base sm:text-lg font-black text-[#183B2A]">{pkg.duration_days} Days</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#E5EFE5] flex items-center justify-center">
              <Mountain className="w-6 h-6 text-[#0787E8]" />
            </div>
            <div>
              <span className="text-xs text-[#426D4A] font-bold uppercase block">Max Altitude</span>
              <span className="text-base sm:text-lg font-black text-[#183B2A]">{pkg.max_altitude}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#E5EFE5] flex items-center justify-center">
              <Users className="w-6 h-6 text-[#0787E8]" />
            </div>
            <div>
              <span className="text-xs text-[#426D4A] font-bold uppercase block">Group Size</span>
              <span className="text-base sm:text-lg font-black text-[#183B2A]">{pkg.group_size}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#E5EFE5] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-[#0787E8]" />
            </div>
            <div>
              <span className="text-xs text-[#426D4A] font-bold uppercase block">Lead Guides</span>
              <span className="text-base sm:text-lg font-black text-[#183B2A]">UIAGM / IFMGA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Body: Details + Sticky Booking Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Itinerary, Highlights, Inclusions */}
          <div className="lg:col-span-8 space-y-10">
            {/* Expedition Overview */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200/80">
              <h2 className="text-2xl font-black text-[#183B2A] mb-4">
                Expedition Overview
              </h2>
              <p className="text-base text-[#426D4A] leading-relaxed">
                {pkg.overview}
              </p>

              {/* Highlights Checklist */}
              {pkg.highlights && pkg.highlights.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-[#183B2A] mb-4">
                    Trip Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pkg.highlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-[#0787E8] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#183B2A] font-medium leading-snug">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Detailed Day-by-Day Itinerary */}
            {pkg.itinerary && pkg.itinerary.length > 0 && (
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200/80">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-black text-[#183B2A]">
                      Day-by-Day Itinerary
                    </h2>
                    <p className="text-xs sm:text-sm text-[#426D4A] mt-1">
                      Designed with gradual acclimatization protocols for maximum summit safety.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveDayAccordion(activeDayAccordion === -1 ? 1 : -1)}
                    className="text-xs font-bold text-[#0787E8] hover:underline"
                  >
                    {activeDayAccordion === -1 ? 'Collapse All' : 'Expand All'}
                  </button>
                </div>

                <div className="space-y-3">
                  {pkg.itinerary.map((day) => {
                    const isExpanded = activeDayAccordion === day.day || activeDayAccordion === -1;
                    return (
                      <div
                        key={day.day}
                        className="border border-gray-200 rounded-xl overflow-hidden transition-all"
                      >
                        <button
                          onClick={() => setActiveDayAccordion(isExpanded ? null : day.day)}
                          className="w-full p-4 text-left flex items-center justify-between gap-4 bg-gray-50/70 hover:bg-[#E5EFE5]/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-[#183B2A] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                              D{day.day}
                            </span>
                            <span className="font-bold text-sm sm:text-base text-[#183B2A]">
                              {day.title}
                            </span>
                          </div>
                          <ChevronDown className={`w-4 h-4 text-[#0787E8] transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="p-5 border-t border-gray-200 text-sm text-[#426D4A] leading-relaxed space-y-3 bg-white">
                                <p>{day.description}</p>
                                <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#183B2A]">
                                  {day.accommodation && (
                                    <span className="px-2.5 py-1 rounded-md bg-[#F3F5F4] border border-gray-200">
                                      🏠 Stay: {day.accommodation}
                                    </span>
                                  )}
                                  {day.meals && (
                                    <span className="px-2.5 py-1 rounded-md bg-[#F3F5F4] border border-gray-200">
                                      🍽️ Meals: {day.meals}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Included */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-lg font-black text-[#183B2A]">What's Included</h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#183B2A]">
                  {pkg.included?.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Excluded */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                  <XCircle className="w-5 h-5 text-red-500" />
                  <h3 className="text-lg font-black text-[#183B2A]">What's Excluded</h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#426D4A]">
                  {pkg.excluded?.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✕</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Reservation Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Booking Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <span className="text-xs text-gray-400 font-semibold uppercase block">Package Price Per Person</span>
                <div className="flex items-baseline gap-2 mt-1 mb-4">
                  <span className="text-3xl sm:text-4xl font-black text-[#0787E8]">
                    ${currentPrice.toLocaleString()}
                  </span>
                  {pkg.discount_price && (
                    <span className="text-base text-gray-400 line-through">
                      ${pkg.price.toLocaleString()}
                    </span>
                  )}
                  <span className="text-xs text-gray-500 font-medium">USD</span>
                </div>

                {/* Rating review snapshot */}
                <div className="flex items-center gap-1.5 p-3 rounded-xl bg-[#E5EFE5] text-xs font-semibold text-[#183B2A] mb-5">
                  <ShieldCheck className="w-4 h-4 text-[#0787E8]" />
                  <span>Guaranteed Departure • No Surcharges</span>
                </div>

                {/* Upcoming Departure Dates */}
                {pkg.upcoming_dates && pkg.upcoming_dates.length > 0 && (
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#183B2A] block mb-2">
                      Available 2026/2027 Batches:
                    </span>
                    <div className="space-y-1.5">
                      {pkg.upcoming_dates.map((d, i) => (
                        <div 
                          key={i}
                          className="flex items-center justify-between p-2 rounded-lg bg-gray-50 text-xs font-medium border border-gray-100"
                        >
                          <span className="flex items-center gap-1 text-[#183B2A]">
                            <Calendar className="w-3.5 h-3.5 text-[#0787E8]" />
                            {d}
                          </span>
                          <span className="text-[11px] font-bold text-emerald-700">Open (4 spots)</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Book Now Button: #0787E8, hover #056DBB */}
                <button
                  onClick={() => setBookingModalOpen(true)}
                  className="w-full py-4 rounded-full font-bold text-base text-white shadow-xl transition-all active:scale-95 text-center"
                  style={{ backgroundColor: '#0787E8' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#056DBB')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0787E8')}
                >
                  Book This Expedition
                </button>

                <p className="mt-3 text-center text-[11px] text-[#426D4A]">
                  Reserve now with 20% deposit • Free cancellation within 30 days
                </p>
              </div>

              {/* Specialist Assistance Box */}
              <div className="bg-[#183B2A] text-white rounded-2xl p-6 shadow-md">
                <h4 className="text-lg font-bold">Have Questions About This Trek?</h4>
                <p className="text-xs text-[#D5E2D7] mt-1.5 leading-relaxed">
                  Our certified high-altitude expedition specialists are available 24/7 to review your fitness profile and gear.
                </p>
                <div className="mt-4 pt-4 border-t border-[#426D4A]/40 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <PhoneCall className="w-5 h-5 text-[#0787E8]" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#D5E2D7] block font-medium">Direct Expedition Desk</span>
                    <a href="tel:+18005557748" className="text-sm font-bold text-white hover:text-[#0787E8] transition-colors">
                      +1 (800) 555-SPIRIT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedPackage={pkg}
        packages={FALLBACK_PACKAGES}
      />
    </div>
  );
}
