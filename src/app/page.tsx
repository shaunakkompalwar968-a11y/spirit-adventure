import React from 'react';
import HeroSection from '@/components/HeroSection';
import TourPackagesSection from '@/components/TourPackagesSection';
import AboutSection from '@/components/AboutSection';
import MediaGalleryPreview from '@/components/MediaGalleryPreview';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import CtaBanner from '@/components/CtaBanner';
import { 
  fetchPackages, 
  fetchCategories, 
  fetchTestimonials, 
  fetchAgencyStats 
} from '@/lib/api';

export default async function HomePage() {
  const [packages, categories, testimonials, stats] = await Promise.all([
    fetchPackages(),
    fetchCategories(),
    fetchTestimonials(),
    fetchAgencyStats(),
  ]);

  return (
    <div>
      {/* Homepage Hero Section */}
      <HeroSection />

      {/* Tour Packages Section (C) */}
      <TourPackagesSection 
        packages={packages} 
        categories={categories} 
      />

      {/* About Us Section (D) */}
      <AboutSection stats={stats} />

      {/* Authentic Expedition Gallery & Reels Preview */}
      <MediaGalleryPreview />

      {/* Verified Explorer Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Interactive FAQ */}
      <FAQSection />

      {/* Pre-Footer Action Banner */}
      <CtaBanner packages={packages} />
    </div>
  );
}
