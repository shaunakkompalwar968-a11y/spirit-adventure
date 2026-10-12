'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Star, 
  Clock, 
  Mountain, 
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
    difficulty,
    max_altitude,
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
      className="rounded-2xl overflow-hidden flex flex-col h-full border border-gray-100 transition-all duration-300"
      style={{
        backgroundColor: '#FFFFFF',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 20px 30px -10px rgba(24, 59, 42, 0.15), 0 10px 15px -5px rgba(24, 59, 42, 0.08)';
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
          <span className="px-3 py-1 rounded-full text-[11px] font-bold text-white bg-[#183B2A]/90 backdrop-blur-md border border-white/20">
            {duration_days}D {duration_days > 1 ? `${duration_days - 1}N` : 'Day Trip'}
          </span>
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold text-white bg-emerald-700/90 backdrop-blur-md">
            {category_name || 'Getaway'}
          </span>
        </div>

        {/* Destination & Location */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-semibold drop-shadow">
          <MapPin className="w-3.5 h-3.5 text-[#0787E8]" />
          <span>{destination_name || 'India'}</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating and Duration */}
          <div className="flex items-center justify-between text-xs mb-3">
            <div className="flex items-center gap-1.5 font-bold" style={{ color: '#183B2A' }}>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#FF9D42] text-[#FF9D42]"
                  />
                ))}
              </div>
              <span>{rating.toFixed(1)}</span>
              <span className="text-gray-400 font-normal">({reviews_count}+)</span>
            </div>

            <div className="flex items-center gap-1 text-[#426D4A] font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>{duration_days} Days Trip</span>
            </div>
          </div>

          {/* Package Title: #183B2A */}
          <Link href={`/packages/${slug}`}>
            <h3 
              className="text-lg sm:text-xl font-bold leading-snug line-clamp-2 hover:text-[#0787E8] transition-colors"
              style={{ color: '#183B2A' }}
            >
              {title}
            </h3>
          </Link>

          {/* Tagline */}
          <p className="mt-2 text-xs sm:text-sm text-[#426D4A] line-clamp-2 leading-relaxed">
            {tagline}
          </p>

          {/* Highlights Row */}
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600">
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
        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
          <div>
            <span className="block text-[11px] text-gray-500 font-medium">Starting from</span>
            <div className="flex items-baseline gap-1.5">
              <span 
                className="text-2xl font-black"
                style={{ color: '#0787E8' }}
              >
                ₹{currentPrice.toLocaleString()}
              </span>
              {discount_price && discount_price < price && (
                <span className="text-xs text-gray-400 line-through">
                  ₹{price.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/packages/${slug}`}
              className="p-2.5 rounded-full border border-gray-200 text-[#183B2A] hover:bg-[#E5EFE5] hover:text-[#0787E8] transition-colors"
              title="View Itinerary & Details"
            >
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            {/* Book Now button: #0787E8 */}
            <button
              onClick={() => onBookNow(currentTour)}
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white transition-all duration-200 shadow-md active:scale-95"
              style={{ backgroundColor: '#0787E8' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#056DBB')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0787E8')}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
