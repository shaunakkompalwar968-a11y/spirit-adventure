'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, ArrowRight, Sparkles } from 'lucide-react';
import { TourPackage, Category } from '@/types';
import PackageCard from './PackageCard';
import BookingModal from './BookingModal';

interface TourPackagesSectionProps {
  packages: TourPackage[];
  categories: Category[];
}

export default function TourPackagesSection({
  packages,
  categories
}: TourPackagesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedForBooking, setSelectedForBooking] = useState<TourPackage | null>(null);

  const filteredPackages = activeCategory === 'all'
    ? packages
    : packages.filter(p => p.category_slug === activeCategory);

  const handleBookNow = (pkg: TourPackage) => {
    setSelectedForBooking(pkg);
    setModalOpen(true);
  };

  return (
    <section 
      id="packages"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#F3F5F4' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0787E8] border border-gray-200 shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Expeditions</span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight"
            style={{ color: '#183B2A' }}
          >
            Official Adventure & Backpacking Tours
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#426D4A] leading-relaxed">
            Experience curated weekend getaways and Himalayan expeditions from Hyderabad, Bangalore & Chennai — featuring Chembra Peak treks, Dandeli river rafting, Gokarna beach treks, Isha Foundation & Nilgiri toy train, Munnar & Alleppey houseboats, and Manali snow adventures.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-[#183B2A] text-white shadow-md'
                  : 'bg-white text-[#183B2A] hover:bg-gray-100 border border-gray-200'
              }`}
            >
              All Expeditions ({packages.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeCategory === cat.slug
                    ? 'bg-[#183B2A] text-white shadow-md'
                    : 'bg-white text-[#183B2A] hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <PackageCard
                  packageData={pkg}
                  onBookNow={handleBookNow}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA to All Packages */}
        <div className="mt-14 text-center">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white transition-all duration-300 shadow-lg active:scale-95"
            style={{ backgroundColor: '#0787E8' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#056DBB')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0787E8')}
          >
            <span>View All Packages & Expeditions</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-3 text-xs text-[#426D4A]">
            Need a bespoke itinerary or private expedition? <Link href="/contact" className="font-bold underline text-[#183B2A] hover:text-[#0787E8]">Plan with our lead alpinists</Link>
          </p>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPackage={selectedForBooking}
        packages={packages}
      />
    </section>
  );
}
