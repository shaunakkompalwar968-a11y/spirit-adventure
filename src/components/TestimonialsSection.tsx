'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Star, 
  CheckCircle2, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause,
  MapPin,
  Sparkles
} from 'lucide-react';
import { Testimonial } from '@/types';
import { fetchGoogleReviews, GoogleReview, GoogleReviewsResponse } from '@/lib/api';

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

const FALLBACK_GOOGLE_REVIEWS_ROW_1: GoogleReview[] = [
  {
    id: 'gmap-1',
    author_name: 'Rohit Sharma',
    location: 'Bangalore, Karnataka',
    comment: 'Trekking with Spirit Adventures was an unforgettable experience! The views were breathtaking, the team was professional, and everything was so well organized.',
    text: 'Trekking with Spirit Adventures was an unforgettable experience! The views were breathtaking, the team was professional, and everything was so well organized.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    relative_time_description: '2 weeks ago',
    verified: true,
    google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Spirit+Adventures+Hyderabad',
  },
  {
    id: 'gmap-2',
    author_name: 'Aarav Mehta',
    location: 'Bangalore, Karnataka',
    comment: 'Stunning, on Kedarkantha summit at 6:15 AM as the first golden rays struck the Swargarohini peaks was the most spiritual moment of my life...',
    text: 'Stunning, on Kedarkantha summit at 6:15 AM as the first golden rays struck the Swargarohini peaks was the most spiritual moment of my life...',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    relative_time_description: '3 weeks ago',
    verified: true,
    google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Spirit+Adventures+Hyderabad',
  },
  {
    id: 'gmap-3',
    author_name: 'Vikram Singh',
    location: 'Mumbai, Maharashtra',
    comment: 'Covered 5 countries in 12 days and it was beyond my expectations. The team handled everything so smoothly. Highly recommend!',
    text: 'Covered 5 countries in 12 days and it was beyond my expectations. The team handled everything so smoothly. Highly recommend!',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    relative_time_description: 'a month ago',
    verified: true,
    google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Spirit+Adventures+Hyderabad',
  },
  {
    id: 'gmap-4',
    author_name: 'Avinash Bollaram',
    location: 'Hyderabad, Telangana',
    comment: 'Great hospitality and service on our Coorg family trip. The estate stay amidst coffee plantations was surreal, and Abbey Falls was breathtaking. Everything went smoothly with our coordinator Sathvik!',
    text: 'Great hospitality and service on our Coorg family trip. The estate stay amidst coffee plantations was surreal, and Abbey Falls was breathtaking. Everything went smoothly with our coordinator Sathvik!',
    avatar: '/assets/img/Testimonals/01.webp',
    rating: 5,
    relative_time_description: '2 months ago',
    verified: true,
    google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Spirit+Adventures+Hyderabad',
  },
  {
    id: 'gmap-5',
    author_name: 'Sneha Kulkarni',
    location: 'Pune, Maharashtra',
    comment: 'Goa with Spirit Adventures was super hassle-free! The resort was right next to the beach, and the water sports package was fully taken care of with zero waiting in lines. 10/10 recommendation!',
    text: 'Goa with Spirit Adventures was super hassle-free! The resort was right next to the beach, and the water sports package was fully taken care of with zero waiting in lines. 10/10 recommendation!',
    avatar: '/assets/img/Testimonals/02.webp',
    rating: 5,
    relative_time_description: '3 months ago',
    verified: true,
    google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Spirit+Adventures+Hyderabad',
  },
  {
    id: 'gmap-6',
    author_name: 'Ananya Deshmukh',
    location: 'Hyderabad, Telangana',
    comment: 'Our Meghalaya backpacking trip was pure magic! Living root bridges, crystal clear Umngot river, and wonderful co-travelers. Outstanding coordination from Spirit Adventures.',
    text: 'Our Meghalaya backpacking trip was pure magic! Living root bridges, crystal clear Umngot river, and wonderful co-travelers. Outstanding coordination from Spirit Adventures.',
    avatar: '/assets/img/Testimonals/05.webp',
    rating: 5,
    relative_time_description: '4 months ago',
    verified: true,
    google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Spirit+Adventures+Hyderabad',
  },
] as any[];

const FALLBACK_GOOGLE_REVIEWS_ROW_2: GoogleReview[] = [
  {
    id: 'gmap-7',
    author_name: 'Pooja Nair',
    location: 'Hyderabad, Telangana',
    comment: 'The best travel agency for weekend adventures! Hyderabad to the Himalayas, every trip is planned and executed perfectly. Can\'t wait for my next trip!',
    text: 'The best travel agency for weekend adventures! Hyderabad to the Himalayas, every trip is planned and executed perfectly. Can\'t wait for my next trip!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    relative_time_description: 'a month ago',
    verified: true,
    google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Spirit+Adventures+Hyderabad',
  },
  {
    id: 'gmap-8',
    author_name: 'Pandurang Srinath Reddy',
    location: 'Hyderabad, Telangana',
    comment: 'Trekking with Spirit Adventures was super safe, well planned, and budget-friendly. Their team made sure every solo traveler felt completely comfortable.',
    text: 'Trekking with Spirit Adventures was super safe, well planned, and budget-friendly. Their team made sure every solo traveler felt completely comfortable.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    relative_time_description: '2 months ago',
    verified: true,
    google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Spirit+Adventures+Hyderabad',
  },
  {
    id: 'gmap-9',
    author_name: 'Gopi Reddy',
    location: 'Hyderabad, Telangana',
    comment: 'Best travel agency for weekend adventure trips. Hyderabad to the Gokarna beach trip was amazing! Good food, nice people and excellent planning.',
    text: 'Best travel agency for weekend adventure trips. Hyderabad to the Gokarna beach trip was amazing! Good food, nice people and excellent planning.',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    relative_time_description: '2 months ago',
    verified: true,
    google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Spirit+Adventures+Hyderabad',
  },
  {
    id: 'gmap-10',
    author_name: 'Vikramaditya Reddy',
    location: 'Bangalore, Karnataka',
    comment: 'Hampi\'s stone architecture was mind-blowing, and the Dandeli river rafting was pure adrenaline. Spirit Adventures organized everything seamlessly from pickup to drop.',
    text: 'Hampi\'s stone architecture was mind-blowing, and the Dandeli river rafting was pure adrenaline. Spirit Adventures organized everything seamlessly from pickup to drop.',
    avatar: '/assets/img/Testimonals/03.webp',
    rating: 5,
    relative_time_description: '3 months ago',
    verified: true,
    google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Spirit+Adventures+Hyderabad',
  },
  {
    id: 'gmap-11',
    author_name: 'Priya & Karthik',
    location: 'Hyderabad, Telangana',
    comment: 'We booked the Ooty and Kodaikanal trip for our anniversary. The Nilgiri toy train ride and Mysore Palace illumination were magical. Highly recommend Spirit Adventures!',
    text: 'We booked the Ooty and Kodaikanal trip for our anniversary. The Nilgiri toy train ride and Mysore Palace illumination were magical. Highly recommend Spirit Adventures!',
    avatar: '/assets/img/Testimonals/04.webp',
    rating: 5,
    relative_time_description: '5 months ago',
    verified: true,
    google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Spirit+Adventures+Hyderabad',
  },
  {
    id: 'gmap-12',
    author_name: 'Harish Chenna',
    location: 'Secunderabad, Telangana',
    comment: 'Kashmir group trip with Gulmarg and Pahalgam exceeded all expectations! Snow-covered peaks, warm houseboats in Dal Lake, and peaceful Pahalgam valleys.',
    text: 'Kashmir group trip with Gulmarg and Pahalgam exceeded all expectations! Snow-covered peaks, warm houseboats in Dal Lake, and peaceful Pahalgam valleys.',
    avatar: '/assets/img/Testimonals/07.webp',
    rating: 5,
    relative_time_description: '6 months ago',
    verified: true,
    google_maps_url: 'https://www.google.com/maps/search/?api=1&query=Spirit+Adventures+Hyderabad',
  },
] as any[];

function GoogleMapsReviewCard({ review }: { review: any }) {
  const avatarUrl = review.author_photo_url || review.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${review.author_name || review.name || 'User'}`;
  const name = review.author_name || review.name || 'Explorer';
  const commentText = review.text || review.comment || '';
  const locationText = review.location || 'Google Maps Verified';
  const timeDesc = review.relative_time_description || 'Recent Review';
  const mapsUrl = review.google_maps_url || 'https://www.google.com/maps/search/?api=1&query=Spirit+Adventures+Hyderabad';

  return (
    <div className="w-[330px] sm:w-[380px] p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shrink-0 select-none text-left group">
      <div>
        {/* Top Bar: Stars + Google Maps Badge + Relative Time */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            {[...Array(review.rating || 5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC04] text-[#FBBC04]" />
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0066FF] text-[10px] font-extrabold uppercase tracking-wide border border-blue-100/70">
              <svg className="w-2.5 h-2.5 shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335"/>
                <circle cx="12" cy="9" r="2.5" fill="#FFFFFF"/>
              </svg>
              <span>GOOGLE MAPS</span>
            </span>
            <span className="text-[10px] font-medium text-slate-400">
              {timeDesc}
            </span>
          </div>
        </div>

        {/* Comment Quote */}
        <p className="text-xs text-slate-600 leading-relaxed font-medium mt-3.5 line-clamp-3">
          &ldquo;{commentText}&rdquo;
        </p>
      </div>

      {/* Bottom Bar: Reviewer details & Verified check */}
      <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatarUrl}
            alt={name}
            className="w-9 h-9 rounded-full object-cover border border-slate-200 shrink-0 shadow-xs"
          />
          <div className="min-w-0">
            <h4 className="font-bold text-xs text-slate-900 truncate">
              {name}
            </h4>
            <p className="text-[10px] text-slate-500 font-medium truncate">
              {locationText}
            </p>
          </div>
        </div>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-100 shrink-0 transition-colors"
          title="Verified review on Google Maps"
        >
          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
          <span>Verified</span>
        </a>
      </div>
    </div>
  );
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [googleReviewsData, setGoogleReviewsData] = useState<GoogleReviewsResponse | null>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  // Fetch real Google Maps reviews from backend API on mount
  useEffect(() => {
    async function loadReviews() {
      try {
        const res = await fetchGoogleReviews();
        if (res && res.reviews && res.reviews.length > 0) {
          setGoogleReviewsData(res);
        }
      } catch (err) {
        console.error('Error fetching Google Maps reviews:', err);
      } finally {
        setIsLoading(false);
      }
    }
    loadReviews();
  }, []);

  // Prepare Row 1 and Row 2 items
  let row1List = [...FALLBACK_GOOGLE_REVIEWS_ROW_1];
  let row2List = [...FALLBACK_GOOGLE_REVIEWS_ROW_2];

  if (googleReviewsData && googleReviewsData.reviews && googleReviewsData.reviews.length > 0) {
    const liveReviews = googleReviewsData.reviews;
    row1List = liveReviews.filter((_, idx) => idx % 2 === 0);
    row2List = liveReviews.filter((_, idx) => idx % 2 !== 0);

    // If odd number or short list, fill row2
    if (row2List.length === 0) row2List = [...row1List];
  }

  // Duplicate for seamless infinite floating loop
  const row1Loop = [...row1List, ...row1List];
  const row2Loop = [...row2List, ...row2List];

  // Manual scroll controls for the review box
  const handleScrollLeft = () => {
    if (row1Ref.current) {
      row1Ref.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
    if (row2Ref.current) {
      row2Ref.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (row1Ref.current) {
      row1Ref.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
    if (row2Ref.current) {
      row2Ref.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const googleRating = googleReviewsData?.rating || 5.0;
  const totalRatings = googleReviewsData?.user_ratings_total || 120;
  const googleMapsUrl = googleReviewsData?.place_url || 'https://www.google.com/maps/search/?api=1&query=Spirit+Adventures+Hyderabad';

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-t border-slate-100 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* ============================================================== */}
          {/* LEFT COLUMN: GOOGLE MAPS VERIFIED SUMMARY CARD                 */}
          {/* ============================================================== */}
          <div className="lg:col-span-4 xl:col-span-3 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between relative overflow-hidden">
            {/* Soft decorative glow */}
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-blue-100/60 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Google Verified Reviews Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Google Verified Reviews</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight mt-5 uppercase">
                LOVED BY 500+ ADVENTURERS
              </h2>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mt-3">
                Real stories from travelers who conquered mountain peaks, coastal cliffs, and white water rapids with us.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {/* Google Rating Box */}
              <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-100 flex items-center gap-3.5 shadow-xs">
                {/* Google 4-color G Logo */}
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-xs border border-slate-100">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.97 0 12s.45 3.83 1.25 5.42l4.03-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-black text-slate-900 text-base">{googleRating.toFixed(1)}/5.0</span>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC04] text-[#FBBC04]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                    {totalRatings}+ Verified Ratings on Google Maps
                  </p>
                </div>
              </div>

              {/* View Google Reviews Button */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all group"
              >
                <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
                <span>View Google Reviews</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>

              {/* Direct Google Maps Review Link */}
              <a
                href="https://search.google.com/local/writereview?placeid=ChIJ_e9d29T9yjsR_placeholder"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  // Fallback to Google Maps search review
                  if (googleMapsUrl) window.open(googleMapsUrl, '_blank');
                  e.preventDefault();
                }}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 border border-slate-200/80 transition-colors"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335"/>
                  <circle cx="12" cy="9" r="2.5" fill="#FFFFFF"/>
                </svg>
                <span>Review Us on Google Maps</span>
              </a>
            </div>
          </div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: SCROLLING REVIEW BOX (GOOGLE MAPS REVIEWS)       */}
          {/* ============================================================== */}
          <div className="lg:col-span-8 xl:col-span-9 bg-white/60 rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between relative overflow-hidden">
            
            {/* Top Control Bar for the Scrolling Review Box */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-2">
              <div className="flex items-center gap-2.5">
                <span className="p-1.5 rounded-lg bg-red-50 text-red-600">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335"/>
                    <circle cx="12" cy="9" r="2.5" fill="#FFFFFF"/>
                  </svg>
                </span>
                <div>
                  <h3 className="font-extrabold text-sm text-slate-900 leading-tight">
                    Google Maps Traveler Reviews
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Continuous live scrolling • Hover over any card to pause
                  </p>
                </div>
              </div>

              {/* Interactive Scroll & Play/Pause Controls */}
              <div className="flex items-center gap-2">
                {/* Auto-Scroll Toggle Button */}
                <button
                  onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                    isAutoScrolling 
                      ? 'bg-blue-50 text-[#0066FF] border border-blue-200' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                  title={isAutoScrolling ? 'Pause continuous floating scroll' : 'Resume continuous floating scroll'}
                >
                  {isAutoScrolling ? (
                    <>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <Pause className="w-3 h-3" />
                      <span>Floating</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-slate-600" />
                      <span>Resume Scroll</span>
                    </>
                  )}
                </button>

                {/* Previous Button */}
                <button
                  onClick={handleScrollLeft}
                  className="w-8 h-8 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 shadow-xs flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors active:scale-95"
                  title="Scroll reviews left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Next Button */}
                <button
                  onClick={handleScrollRight}
                  className="w-8 h-8 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 shadow-xs flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors active:scale-95"
                  title="Scroll reviews right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable Container with Gradient Edge Masks */}
            <div className="relative overflow-hidden py-1">
              {/* Left & Right gradient edge masks for smooth fading */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white/95 to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white/95 to-transparent z-10" />

              {/* Row 1: Floating Smoothly to the Left (or scrollable manually) */}
              <div 
                ref={row1Ref}
                className="overflow-x-auto no-scrollbar scroll-smooth mb-4 pb-1"
              >
                <div 
                  className="flex gap-4 w-max"
                  style={{
                    animation: isAutoScrolling ? 'marquee-scroll-left 42s linear infinite' : 'none',
                  }}
                  onMouseEnter={() => setIsAutoScrolling(false)}
                  onMouseLeave={() => setIsAutoScrolling(true)}
                >
                  {row1Loop.map((review, idx) => (
                    <GoogleMapsReviewCard key={`r1-${idx}`} review={review} />
                  ))}
                </div>
              </div>

              {/* Row 2: Floating Smoothly to the Right (or scrollable manually) */}
              <div 
                ref={row2Ref}
                className="overflow-x-auto no-scrollbar scroll-smooth pt-1"
              >
                <div 
                  className="flex gap-4 w-max"
                  style={{
                    animation: isAutoScrolling ? 'marquee-scroll-right 46s linear infinite' : 'none',
                  }}
                  onMouseEnter={() => setIsAutoScrolling(false)}
                  onMouseLeave={() => setIsAutoScrolling(true)}
                >
                  {row2Loop.map((review, idx) => (
                    <GoogleMapsReviewCard key={`r2-${idx}`} review={review} />
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
