'use client';

import React from 'react';
import { Star, CheckCircle2, ExternalLink, Compass } from 'lucide-react';
import { Testimonial } from '@/types';

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

const DEFAULT_REVIEWS_ROW_1 = [
  {
    name: 'Rohit Sharma',
    location: 'Bangalore, Karnataka',
    comment: 'Trekking with Spirit Adventures was an unforgettable experience! The views were breathtaking, the team was professional, and everything was so well organized.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    name: 'Aarav Mehta',
    location: 'Bangalore, Karnataka',
    comment: 'Stunning, on Kedarkantha summit at 6:15 AM as the first golden rays struck the Swargarohini peaks was the most spiritual moment of my life...',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    location: 'Mumbai, Maharashtra',
    comment: 'Covered 5 countries in 12 days and it was beyond my expectations. The team handled everything so smoothly. Highly recommend!',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    name: 'Avinash Bollaram',
    location: 'Hyderabad, Telangana',
    comment: 'Great hospitality and service on our Coorg family trip. The estate stay amidst coffee plantations was surreal, and Abbey Falls was breathtaking. Everything went smoothly with our coordinator Sathvik!',
    avatar: '/assets/img/Testimonals/01.webp',
    rating: 5,
  },
  {
    name: 'Sneha Kulkarni',
    location: 'Pune, Maharashtra',
    comment: 'Goa with Spirit Adventures was super hassle-free! The resort was right next to the beach, and the water sports package was fully taken care of with zero waiting in lines. 10/10 recommendation!',
    avatar: '/assets/img/Testimonals/02.webp',
    rating: 5,
  },
  {
    name: 'Ananya Deshmukh',
    location: 'Hyderabad, Telangana',
    comment: 'Our Meghalaya backpacking trip was pure magic! Living root bridges, crystal clear Umngot river, and wonderful co-travelers. Outstanding coordination from Spirit Adventures.',
    avatar: '/assets/img/Testimonals/05.webp',
    rating: 5,
  },
];

const DEFAULT_REVIEWS_ROW_2 = [
  {
    name: 'Pooja Nair',
    location: 'Hyderabad, Telangana',
    comment: 'The best travel agency for weekend adventures! Hyderabad to the Himalayas, every trip is planned and executed perfectly. Can\'t wait for my next trip!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    name: 'Pandurang Srinath Reddy',
    location: 'Hyderabad, Telangana',
    comment: 'Trekking with Spirit Adventures was super safe, well planned, and budget-friendly. Their team made sure every solo traveler felt completely comfortable.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    name: 'Gopi Reddy',
    location: 'Hyderabad, Telangana',
    comment: 'Best travel agency for weekend adventure trips. Hyderabad to the Gokarna beach trip was amazing! Good food, nice people and excellent planning.',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    name: 'Vikramaditya Reddy',
    location: 'Bangalore, Karnataka',
    comment: 'Hampi\'s stone architecture was mind-blowing, and the Dandeli river rafting was pure adrenaline. Spirit Adventures organized everything seamlessly from pickup to drop.',
    avatar: '/assets/img/Testimonals/03.webp',
    rating: 5,
  },
  {
    name: 'Priya & Karthik',
    location: 'Hyderabad, Telangana',
    comment: 'We booked the Ooty and Kodaikanal trip for our anniversary. The Nilgiri toy train ride and Mysore Palace illumination were magical. Highly recommend Spirit Adventures!',
    avatar: '/assets/img/Testimonals/04.webp',
    rating: 5,
  },
  {
    name: 'Harish Chenna',
    location: 'Secunderabad, Telangana',
    comment: 'Kashmir group trip with Gulmarg and Pahalgam exceeded all expectations! Snow-covered peaks, warm houseboats in Dal Lake, and peaceful Pahalgam valleys.',
    avatar: '/assets/img/Testimonals/07.webp',
    rating: 5,
  },
];

function ReviewCard({ review }: { review: typeof DEFAULT_REVIEWS_ROW_1[0] }) {
  return (
    <div className="w-[330px] sm:w-[370px] p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shrink-0 select-none text-left group">
      <div>
        {/* Top: 5 Stars + Brand Pill */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            {[...Array(review.rating || 5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0066FF] text-[10px] font-extrabold uppercase tracking-wide border border-blue-100/70">
            <Compass className="w-2.5 h-2.5 text-[#0066FF]" />
            SPIRIT ADVENTURE
          </span>
        </div>

        {/* Comment */}
        <p className="text-xs text-slate-600 leading-relaxed font-medium mt-3.5 line-clamp-3">
          &ldquo;{review.comment}&rdquo;
        </p>
      </div>

      {/* Bottom: Reviewer details & Verified check */}
      <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={review.avatar}
            alt={review.name}
            className="w-9 h-9 rounded-full object-cover border border-slate-200 shrink-0"
          />
          <div className="min-w-0">
            <h4 className="font-bold text-xs text-slate-900 truncate">
              {review.name}
            </h4>
            <p className="text-[10px] text-slate-500 font-medium truncate">
              {review.location}
            </p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 shrink-0">
          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
          Verified
        </span>
      </div>
    </div>
  );
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  // Merge any dynamic testimonials if provided with fallback reviews
  const row1Data = [...DEFAULT_REVIEWS_ROW_1];
  const row2Data = [...DEFAULT_REVIEWS_ROW_2];

  if (testimonials && testimonials.length > 0) {
    testimonials.forEach((t, i) => {
      const item = {
        name: t.name,
        location: t.location,
        comment: t.comment,
        avatar: t.avatar,
        rating: t.rating || 5,
      };
      if (i % 2 === 0) row1Data.unshift(item);
      else row2Data.unshift(item);
    });
  }

  // Duplicate for seamless infinite loop
  const row1Loop = [...row1Data, ...row1Data];
  const row2Loop = [...row2Data, ...row2Data];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-t border-slate-100 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* ============================================================== */}
          {/* LEFT COLUMN: GOOGLE VERIFIED HERO SUMMARY CARD                  */}
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
                    <span className="font-black text-slate-900 text-base">5.0/5.0</span>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                    120+ Verified Ratings on Google
                  </p>
                </div>
              </div>

              {/* View Google Reviews Button */}
              <a
                href="https://www.google.com/search?q=Spirit+Adventures+Hyderabad+Reviews"
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
            </div>
          </div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: FLOATING MARQUEE REVIEWS (2 ROWS)                */}
          {/* ============================================================== */}
          <div className="lg:col-span-8 xl:col-span-9 overflow-hidden flex flex-col justify-center gap-5 relative py-2">
            {/* Left & Right gradient edge masks for smooth fading */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-slate-50/90 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-slate-50/90 to-transparent z-10" />

            {/* Row 1: Floating Smoothly to the Left */}
            <div className="overflow-hidden">
              <div className="animate-marquee-left flex gap-4">
                {row1Loop.map((review, idx) => (
                  <ReviewCard key={`r1-${idx}`} review={review} />
                ))}
              </div>
            </div>

            {/* Row 2: Floating Smoothly to the Right */}
            <div className="overflow-hidden">
              <div className="animate-marquee-right flex gap-4">
                {row2Loop.map((review, idx) => (
                  <ReviewCard key={`r2-${idx}`} review={review} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
