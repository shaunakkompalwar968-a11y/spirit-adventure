'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Star, 
  Clock, 
  MapPin, 
  ArrowUpRight,
  ShieldCheck,
  CalendarCheck
} from 'lucide-react';
import { TourPackage } from '@/types';

interface PackageCardProps {
  packageData?: TourPackage;
  pkg?: TourPackage;
  priorityIndex?: number;
  onBookNow: (pkg: TourPackage) => void;
}

export default function PackageCard({ packageData, pkg, priorityIndex, onBookNow }: PackageCardProps) {
  const currentTour = pkg || packageData;
  if (!currentTour) return null;

  const {
    title,
    slug,
    destination_name,
    category_name,
    duration_days,
    price,
    discount_price,
    rating,
    reviews_count,
    hero_image,
    tagline,
  } = currentTour;

  const currentPrice = discount_price ?? price;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="rounded-2xl overflow-hidden flex flex-col h-full border border-slate-100 bg-white transition-all duration-300"
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 20px 30px -10px rgba(7, 135, 232, 0.15), 0 10px 15px -5px rgba(11, 27, 61, 0.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Card Image Banner */}
      <div className="relative h-60 w-full overflow-hidden group">
        <img
          src={hero_image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Subtle Image Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold text-white bg-[#0B1B3D]/90 backdrop-blur-md border border-white/20">
            {duration_days}D {duration_days > 1 ? `${duration_days - 1}N` : 'Day Trip'}
          </span>
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold text-white bg-[#0066FF]/90 backdrop-blur-md">
            {category_name || 'Getaway'}
          </span>
        </div>

        {/* Destination & Location */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-semibold drop-shadow">
          <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span>{destination_name || 'India'}</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating and Duration */}
          <div className="flex items-center justify-between text-xs mb-3">
            <div className="flex items-center gap-1.5 font-bold text-[#0B1B3D]">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#FF9D42] text-[#FF9D42]"
                  />
                ))}
              </div>
              <span>{rating.toFixed(1)}</span>
              <span className="text-slate-400 font-normal">({reviews_count}+)</span>
            </div>

            <div className="flex items-center gap-1 text-[#2563EB] font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>{duration_days} Days Trip</span>
            </div>
          </div>

          {/* Package Title */}
          <Link href={`/packages/${slug}`}>
            <h3 className="text-lg sm:text-xl font-bold leading-snug line-clamp-2 text-[#0B1B3D] hover:text-[#0787E8] transition-colors">
              {title}
            </h3>
          </Link>

          {/* Tagline */}
          <p className="mt-2 text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
            {tagline}
          </p>

          {/* Highlights Row */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0787E8]" />
              <span className="font-medium">Hyd / Blr Pickups</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarCheck className="w-3.5 h-3.5 text-[#0787E8]" />
              <span className="font-medium">Weekend Batches</span>
            </div>
          </div>
        </div>

        {/* Pricing and Action Footer */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <div>
            <span className="block text-[11px] text-slate-400 font-medium">Starting from</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-black text-[#0787E8]">
                ₹{currentPrice.toLocaleString()}
              </span>
              {discount_price && discount_price < price && (
                <span className="text-xs text-slate-400 line-through">
                  ₹{price.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/packages/${slug}`}
              className="p-2.5 rounded-full border border-slate-200 text-slate-700 hover:bg-blue-50 hover:text-[#0787E8] transition-colors"
              title="View Itinerary & Details"
            >
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            {/* Book Now button */}
            <button
              onClick={() => onBookNow(currentTour)}
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white transition-all duration-200 shadow-md bg-gradient-to-r from-[#0066FF] to-[#0787E8] hover:from-[#0052cc] hover:to-[#056dbb] active:scale-95"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
