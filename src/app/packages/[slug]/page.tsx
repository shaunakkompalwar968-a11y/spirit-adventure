'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Clock, 
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
  Bus
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
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 bg-slate-50 text-center">
        <h2 className="text-3xl font-black text-[#0B1B3D]">Tour Package Not Found</h2>
        <p className="mt-2 text-sm text-slate-600">The tour package you were looking for does not exist or has been updated.</p>
        <Link
          href="/packages"
          className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#0066FF] to-[#0787E8] text-white font-bold text-sm shadow-md transition-transform hover:scale-105"
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
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Top Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200 pt-28 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-600 overflow-hidden">
            <Link href="/" className="hover:text-[#0787E8] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/packages" className="hover:text-[#0787E8] transition-colors">Packages</Link>
            <span>/</span>
            <span className="font-bold text-[#0B1B3D] truncate">{pkg.title}</span>
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={galleryImages[activeGalleryIndex]}
            alt={pkg.title}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(11, 27, 61, 0.60)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/95 via-transparent to-black/30" />

          {/* Badges on Top */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#0B1B3D]/90 backdrop-blur-md border border-white/20 shadow">
                {pkg.category_name || 'Curated Weekend Trip'}
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#FF9D42] text-slate-950 flex items-center gap-1 shadow">
                <Star className="w-3.5 h-3.5 fill-slate-950" />
                <span>{pkg.rating} ({pkg.reviews_count} reviews)</span>
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <button 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: pkg.title, url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Tour link copied to clipboard!');
                  }
                }}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 text-white flex items-center justify-center transition-colors"
                title="Share Package"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Content on Bottom */}
          <div className="absolute bottom-8 left-6 right-6 sm:left-10 sm:right-10 text-white">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-2">
              <MapPin className="w-4 h-4" />
              <span>{pkg.destination_name}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              {pkg.title}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-200 font-light max-w-3xl line-clamp-2">
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Overview Fast Facts Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
              <Clock className="w-6 h-6 text-[#0787E8]" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-bold uppercase block">Duration</span>
              <span className="text-base sm:text-lg font-black text-[#0B1B3D]">{pkg.duration_days} Days</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
              <Bus className="w-6 h-6 text-[#0787E8]" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-bold uppercase block">Pickups</span>
              <span className="text-base sm:text-lg font-black text-[#0B1B3D]">Hyd & Blr</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
              <Users className="w-6 h-6 text-[#0787E8]" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-bold uppercase block">Group Size</span>
              <span className="text-base sm:text-lg font-black text-[#0B1B3D]">{pkg.group_size}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-[#0787E8]" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-bold uppercase block">Coordination</span>
              <span className="text-base sm:text-lg font-black text-[#0B1B3D]">24/7 Trip Captain</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Body: Details + Sticky Booking Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Itinerary, Highlights, Inclusions */}
          <div className="lg:col-span-8 space-y-10">
            {/* Tour Overview */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80">
              <h2 className="text-2xl font-black text-[#0B1B3D] mb-4">
                Tour Overview
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {pkg.overview}
              </p>

              {/* Highlights Checklist */}
              {pkg.highlights && pkg.highlights.length > 0 && (
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h3 className="text-lg font-bold text-[#0B1B3D] mb-4">
                    Trip Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pkg.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-[#0787E8] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-800 leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Day-by-Day Itinerary Accordion */}
            {pkg.itinerary && pkg.itinerary.length > 0 && (
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-black text-[#0B1B3D]">
                      Detailed Day-by-Day Itinerary
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Designed with optimal relaxation, sightseeing spots & campfire fun.
                    </p>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-[#0787E8] rounded-full">
                    {pkg.itinerary.length} Days Schedule
                  </span>
                </div>

                <div className="space-y-4">
                  {pkg.itinerary.map((dayItem, index) => {
                    const dayNum = index + 1;
                    const isOpen = activeDayAccordion === dayNum;

                    return (
                      <div
                        key={dayNum}
                        className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                      >
                        <button
                          onClick={() => setActiveDayAccordion(isOpen ? null : dayNum)}
                          className={`w-full p-4 sm:p-5 flex items-center justify-between text-left transition-colors ${
                            isOpen ? 'bg-blue-50/50' : 'bg-white hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#0066FF] to-[#0787E8] text-white flex items-center justify-center font-black text-xs">
                              {dayNum}
                            </span>
                            <div>
                              <span className="text-xs font-bold text-[#0787E8] uppercase tracking-wider block">
                                {dayItem.day}
                              </span>
                              <h3 className="text-sm sm:text-base font-bold text-[#0B1B3D]">
                                {dayItem.title}
                              </h3>
                            </div>
                          </div>
                          <ChevronDown
                            className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${
                              isOpen ? 'transform rotate-180 text-[#0787E8]' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="p-5 border-t border-slate-100 bg-white"
                            >
                              {dayItem.meals && (
                                <div className="inline-block px-3 py-1 rounded-md bg-blue-50 text-[11px] font-bold text-[#0787E8] mb-3">
                                  Included: {dayItem.meals}
                                </div>
                              )}
                              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                                {dayItem.activities?.map((act, actIdx) => (
                                  <li key={actIdx} className="flex items-start gap-2">
                                    <span className="text-[#0787E8] font-bold mt-0.5">•</span>
                                    <span>{act}</span>
                                  </li>
                                ))}
                              </ul>
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
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-lg font-black text-[#0B1B3D]">What's Included</h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800">
                  {pkg.included?.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Excluded */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                  <XCircle className="w-5 h-5 text-red-500" />
                  <h3 className="text-lg font-black text-[#0B1B3D]">What's Excluded</h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
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
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <span className="text-xs text-slate-400 font-semibold uppercase block">Package Price Per Person</span>
                <div className="flex items-baseline gap-2 mt-1 mb-4">
                  <span className="text-3xl sm:text-4xl font-black text-[#0787E8]">
                    ₹{currentPrice.toLocaleString()}
                  </span>
                  {pkg.discount_price && (
                    <span className="text-base text-slate-400 line-through">
                      ₹{pkg.price.toLocaleString()}
                    </span>
                  )}
                  <span className="text-xs text-slate-500 font-medium">INR</span>
                </div>

                {/* Rating review snapshot */}
                <div className="flex items-center gap-1.5 p-3 rounded-xl bg-blue-50 text-xs font-semibold text-[#0787E8] mb-5">
                  <ShieldCheck className="w-4 h-4 text-[#0787E8]" />
                  <span>Guaranteed Weekend Departures • Hyd & Blr</span>
                </div>

                {/* Upcoming Departure Dates */}
                {pkg.upcoming_dates && pkg.upcoming_dates.length > 0 && (
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0B1B3D] block mb-2">
                      Upcoming Batches:
                    </span>
                    <div className="space-y-1.5">
                      {pkg.upcoming_dates.map((d, i) => (
                        <div 
                          key={i}
                          className="flex items-center justify-between p-2 rounded-lg bg-slate-50 text-xs font-medium border border-slate-100"
                        >
                          <span className="flex items-center gap-1 text-slate-800">
                            <Calendar className="w-3.5 h-3.5 text-[#0787E8]" />
                            {d}
                          </span>
                          <span className="text-[11px] font-bold text-emerald-700">Booking Open</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Book Now Button */}
                <button
                  onClick={() => setBookingModalOpen(true)}
                  className="w-full py-4 rounded-full font-bold text-base text-white shadow-xl transition-all active:scale-95 text-center bg-gradient-to-r from-[#0066FF] to-[#0787E8] hover:from-[#0052cc] hover:to-[#056dbb] shadow-blue-500/25"
                >
                  Book This Tour
                </button>

                {/* WhatsApp Quick Link */}
                <a
                  href={`https://wa.me/919666567551?text=Hello%20Spirit%20Adventures%2C%20I%20want%20to%20book%20the%20${encodeURIComponent(pkg.title)}%20(₹${currentPrice})`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 w-full py-3 rounded-full font-bold text-xs text-white shadow-md transition-all flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                  <span>Inquire on WhatsApp</span>
                </a>

                <p className="mt-3 text-center text-[11px] text-slate-500">
                  Lock seats with advance deposit • AC transport & stays included
                </p>
              </div>

              {/* Specialist Assistance Box */}
              <div className="bg-[#0B1B3D] text-white rounded-2xl p-6 shadow-md border border-blue-900/40">
                <h4 className="text-lg font-bold">Need Customization or Group Discount?</h4>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Traveling with a college batch, family or corporate team of 6+? We offer private buses and custom dates.
                </p>
                <div className="mt-4 pt-4 border-t border-blue-900/50 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <PhoneCall className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Spirit Adventures Helpline</span>
                    <a href="tel:+919666567551" className="text-sm font-bold text-white hover:text-[#38BDF8] transition-colors">
                      +91 966 656 7551
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
