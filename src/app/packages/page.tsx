'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  MapPin, 
  Compass, 
  SlidersHorizontal, 
  ArrowUpDown, 
  X,
  Sparkles
} from 'lucide-react';
import PackageCard from '@/components/PackageCard';
import BookingModal from '@/components/BookingModal';
import { TourPackage, Category, Destination } from '@/types';
import { 
  FALLBACK_PACKAGES, 
  FALLBACK_CATEGORIES, 
  FALLBACK_DESTINATIONS 
} from '@/data/fallbackData';

function PackagesCatalogContent() {
  const searchParams = useSearchParams();
  
  const [packages, setPackages] = useState<TourPackage[]>(FALLBACK_PACKAGES);
  const [categories] = useState<Category[]>(FALLBACK_CATEGORIES);
  const [destinations] = useState<Destination[]>(FALLBACK_DESTINATIONS);

  // Filters state initialized from URL search params if present
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestination, setSelectedDestination] = useState(searchParams.get('destination') || 'all');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedDifficulty, setSelectedDifficulty] = useState(searchParams.get('difficulty') || 'all');
  const [maxPrice, setMaxPrice] = useState(20000);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'duration'>('featured');
  
  const [selectedForBooking, setSelectedForBooking] = useState<TourPackage | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  useEffect(() => {
    const dest = searchParams.get('destination');
    if (dest) setSelectedDestination(dest);
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
    const diff = searchParams.get('difficulty');
    if (diff) setSelectedDifficulty(diff);
  }, [searchParams]);

  const filteredAndSortedPackages = useMemo(() => {
    let result = [...packages];

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        (p.destination_name && p.destination_name.toLowerCase().includes(q)) ||
        (p.overview && p.overview.toLowerCase().includes(q))
      );
    }

    // Destination
    if (selectedDestination !== 'all') {
      result = result.filter(p => p.destination_slug === selectedDestination);
    }

    // Category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category_slug === selectedCategory);
    }

    // Difficulty
    if (selectedDifficulty !== 'all') {
      result = result.filter(p => p.difficulty.toLowerCase() === selectedDifficulty.toLowerCase());
    }

    // Max Price
    result = result.filter(p => (p.discount_price ?? p.price) <= maxPrice);

    // Sorting
    result.sort((a, b) => {
      const priceA = a.discount_price ?? a.price;
      const priceB = b.discount_price ?? b.price;
      if (sortBy === 'price-asc') return priceA - priceB;
      if (sortBy === 'price-desc') return priceB - priceA;
      if (sortBy === 'duration') return a.duration_days - b.duration_days;
      return (b.is_featured ? 1 : 0) - (a.is_featured ? 1 : 0);
    });

    return result;
  }, [packages, searchQuery, selectedDestination, selectedCategory, selectedDifficulty, maxPrice, sortBy]);

  const handleBookNow = (pkg: TourPackage) => {
    setSelectedForBooking(pkg);
    setBookingModalOpen(true);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedDestination('all');
    setSelectedCategory('all');
    setSelectedDifficulty('all');
    setMaxPrice(20000);
    setSortBy('featured');
  };

  return (
    <div className="bg-[#F3F5F4] min-h-screen pb-24">
      {/* Header Banner: Overlay rgba(12, 35, 27, 0.58) */}
      <div 
        className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=2200&q=90')`
        }}
      >
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(12, 35, 27, 0.58)' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 mb-4 text-[#0787E8]">
            <Compass className="w-3.5 h-3.5" />
            <span className="text-white">Official Spirit Adventures Circuits</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Tour Packages & <span className="text-[#0787E8]">Backpacking Trips</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#F3F5F4] font-light max-w-2xl mx-auto leading-relaxed">
            Departures every Thursday & Friday from Hyderabad (Nampally, Begumpet, Lingampally, Kacheguda) with pickups in Bangalore & Chennai. Includes train tickets, resort stays & beach camping, watersports, and certified trip captains.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Coorg, Goa, Hampi, Ooty..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0787E8] text-[#183B2A] font-medium"
              />
            </div>

            {/* Destination Dropdown */}
            <div>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-[#183B2A] focus:outline-none focus:border-[#0787E8] bg-white"
              >
                <option value="all">All Destinations</option>
                {destinations.map(d => (
                  <option key={d.id} value={d.slug}>{d.name}</option>
                ))}
              </select>
            </div>

            {/* Tour Style Dropdown */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-[#183B2A] focus:outline-none focus:border-[#0787E8] bg-white"
              >
                <option value="all">All Tour Styles</option>
                {categories.map(c => (
                  <option key={c.id} value={c.slug}>{c.name}</option>
                ))}
              </select>
            </div>

            {/* Difficulty Dropdown */}
            <div>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-[#183B2A] focus:outline-none focus:border-[#0787E8] bg-white"
              >
                <option value="all">All Difficulty Levels</option>
                <option value="easy">Easy (Leisure & Family)</option>
                <option value="moderate">Moderate (Hikes & Sightseeing)</option>
                <option value="active">Active (Rafting & Treks)</option>
              </select>
            </div>
          </div>

          {/* Secondary Filter Row: Price Slider & Sorting */}
          <div className="mt-5 pt-5 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="w-full md:w-auto flex items-center gap-4">
              <span className="text-xs font-bold text-[#183B2A] uppercase flex-shrink-0">
                Max Budget: <strong className="text-[#0787E8] font-black text-sm">₹{maxPrice.toLocaleString()}</strong>
              </span>
              <input
                type="range"
                min="3500"
                max="20000"
                step="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full md:w-48 accent-[#0787E8]"
              />
            </div>

            <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-3">
              <div className="flex items-center gap-2">
                <ArrowUpDown className="w-4 h-4 text-gray-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-2 rounded-xl border border-gray-200 text-xs font-bold text-[#183B2A] focus:outline-none focus:border-[#0787E8] bg-white"
                >
                  <option value="featured">Featured / Recommended</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="duration">Trip Duration</option>
                </select>
              </div>

              {(searchQuery || selectedDestination !== 'all' || selectedCategory !== 'all' || selectedDifficulty !== 'all' || maxPrice < 20000) && (
                <button
                  onClick={handleResetFilters}
                  className="px-3.5 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-xs font-bold text-[#183B2A] flex items-center gap-1 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm font-bold text-[#183B2A]">
            Showing <span className="text-[#0787E8]">{filteredAndSortedPackages.length}</span> Verified Packages
          </p>
          <span className="text-xs text-[#426D4A]">
            Hyderabad & Bangalore Departures
          </span>
        </div>

        {/* Package Cards Grid */}
        {filteredAndSortedPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedPackages.map((pkg, idx) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                priorityIndex={idx}
                onBookNow={handleBookNow}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl p-8 border border-gray-200/80">
            <Compass className="w-12 h-12 text-[#0787E8] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#183B2A]">No tour packages match your filters</h3>
            <p className="text-xs text-[#426D4A] max-w-sm mx-auto mt-2">
              Try adjusting your price slider or clear your filters to view all weekend getaways.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-6 px-6 py-2.5 rounded-full text-xs font-bold text-white transition-colors"
              style={{ backgroundColor: '#0787E8' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#056DBB')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0787E8')}
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedPackage={selectedForBooking}
        packages={packages}
      />
    </div>
  );
}

export default function PackagesCatalogPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#F3F5F4]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0787E8]"></div>
      </div>
    }>
      <PackagesCatalogContent />
    </Suspense>
  );
}
