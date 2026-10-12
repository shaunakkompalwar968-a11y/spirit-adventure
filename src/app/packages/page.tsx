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
  const [maxPrice, setMaxPrice] = useState(3000);
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
    setMaxPrice(3000);
    setSortBy('featured');
  };

  return (
    <div className="min-h-screen bg-[#F3F5F4]">
      {/* Catalog Header Banner */}
      <div 
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=85')`
        }}
      >
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(12, 35, 27, 0.72)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 mb-3 text-[#0787E8]">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-white">All Tour Packages & Expeditions</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Find Your Mountain Calling
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#F3F5F4] max-w-2xl mx-auto font-light">
            Browse our hand-crafted collection of high-altitude treks, technical mountaineering summits, and remote alpine traverses.
          </p>
        </div>
      </div>

      {/* Main Catalog Section */}
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
                placeholder="Search treks, peaks, valleys..."
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

            {/* Adventure Style Dropdown */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-[#183B2A] focus:outline-none focus:border-[#0787E8] bg-white"
              >
                <option value="all">All Styles</option>
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
                <option value="all">All Difficulties</option>
                <option value="moderate">Moderate</option>
                <option value="challenging">Challenging</option>
                <option value="strenuous">Strenuous</option>
              </select>
            </div>
          </div>

          {/* Secondary Filter Row: Price Slider & Sorting */}
          <div className="mt-5 pt-5 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="w-full md:w-auto flex items-center gap-4">
              <span className="text-xs font-bold text-[#183B2A] uppercase flex-shrink-0">
                Max Price: <strong className="text-[#0787E8] font-black text-sm">${maxPrice}</strong>
              </span>
              <input
                type="range"
                min="900"
                max="3000"
                step="50"
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
                  className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-[#183B2A] focus:outline-none bg-white"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="duration">Duration (Days)</option>
                </select>
              </div>

              {(searchQuery || selectedDestination !== 'all' || selectedCategory !== 'all' || selectedDifficulty !== 'all' || maxPrice < 3000) && (
                <button
                  onClick={handleResetFilters}
                  className="flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-semibold text-[#426D4A]">
            Showing <strong className="text-[#183B2A]">{filteredAndSortedPackages.length}</strong> expeditions matching your criteria
          </p>
        </div>

        {/* Packages Grid */}
        {filteredAndSortedPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                packageData={pkg}
                onBookNow={handleBookNow}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 max-w-lg mx-auto">
            <Compass className="w-12 h-12 text-[#0787E8] mx-auto mb-3 opacity-60" />
            <h3 className="text-xl font-bold text-[#183B2A]">No Expeditions Found</h3>
            <p className="text-sm text-[#426D4A] mt-2">
              No tour packages matched your current filter combinations. Try adjusting the price range, difficulty, or search terms.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-6 px-6 py-2.5 rounded-full bg-[#0787E8] text-white text-xs font-bold hover:bg-[#056DBB] transition-colors"
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

export default function PackagesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F3F5F4] p-12 text-center text-[#183B2A]">Loading expeditions...</div>}>
      <PackagesCatalogContent />
    </Suspense>
  );
}
