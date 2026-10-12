'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer 
      className="pt-16 pb-10 border-t border-blue-900/40 bg-[#0B1B3D]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-blue-900/30">
          {/* Brand & Agency Column */}
          <div className="lg:col-span-4">
            {/* White card container so black text logo is crystal clear */}
            <Link href="/" className="inline-flex items-center group p-2.5 px-4 bg-white rounded-2xl shadow-md border border-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/assets/img/logo.png" 
                alt="Spirit Adventures" 
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>

            <p className="mt-4 text-sm leading-relaxed max-w-sm text-slate-300">
              Premier travel and adventure agency based in Hyderabad. Specialized in curated weekend getaways, hill station retreats, beach adventures, and custom group holidays across South India and beyond.
            </p>

            {/* Social Media Icons */}
            <div className="mt-6 flex items-center gap-3">
              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0787E8] transition-colors flex items-center justify-center text-white"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* Facebook */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0787E8] transition-colors flex items-center justify-center text-white"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/919666567551" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#128C7E] transition-colors flex items-center justify-center text-white"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0787E8] transition-colors flex items-center justify-center text-white"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
                </svg>
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#0787E8]" />
              <span>Certified Tour Operator • Hyderabad & Bangalore Pickups</span>
            </div>
          </div>

          {/* Column 2: Popular Tours */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-white">
              Popular Tours
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link 
                  href="/packages/manali-kullu-kasol" 
                  className="text-slate-300 hover:text-[#38BDF8] transition-colors"
                >
                  Manali, Kullu & Kasol (₹9,999)
                </Link>
              </li>
              <li>
                <Link 
                  href="/packages/isha-ooty-coonoor" 
                  className="text-slate-300 hover:text-[#38BDF8] transition-colors"
                >
                  Isha, Ooty & Coonoor (₹8,999)
                </Link>
              </li>
              <li>
                <Link 
                  href="/packages/munnar-alleppey" 
                  className="text-slate-300 hover:text-[#38BDF8] transition-colors"
                >
                  Munnar & Alleppey Houseboat
                </Link>
              </li>
              <li>
                <Link 
                  href="/packages/gokarna-dandeli-udupi" 
                  className="text-slate-300 hover:text-[#38BDF8] transition-colors"
                >
                  Gokarna, Dandeli & Udupi
                </Link>
              </li>
              <li>
                <Link 
                  href="/packages/wayanad-adventure" 
                  className="text-slate-300 hover:text-[#38BDF8] transition-colors"
                >
                  3D/2N Wayanad Adventure
                </Link>
              </li>
              <li>
                <Link 
                  href="/packages/coorg-wayanad" 
                  className="text-slate-300 hover:text-[#38BDF8] transition-colors"
                >
                  4D/3N Coorg & Wayanad
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link 
                  href="/about" 
                  className="text-slate-300 hover:text-[#38BDF8] transition-colors"
                >
                  About Spirit Adventures
                </Link>
              </li>
              <li>
                <Link 
                  href="/gallery" 
                  className="text-slate-300 hover:text-[#38BDF8] transition-colors"
                >
                  Adventure Gallery
                </Link>
              </li>
              <li>
                <Link 
                  href="/packages" 
                  className="text-slate-300 hover:text-[#38BDF8] transition-colors"
                >
                  All Tour Packages
                </Link>
              </li>
              <li>
                <Link 
                  href="/customize" 
                  className="text-slate-300 hover:text-[#38BDF8] transition-colors"
                >
                  Customize Your Trip
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-slate-300 hover:text-[#38BDF8] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-2 text-white">
              Stay Connected
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed mb-4 text-slate-300">
              Subscribe for weekend departure alerts, holiday discount codes, and new destination releases.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-white/10 rounded-xl text-white text-xs border border-white/20">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                <span>You are subscribed! Thank you for joining Spirit Adventures.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#0787E8]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-white transition-colors flex items-center gap-1 flex-shrink-0 bg-gradient-to-r from-[#0066FF] to-[#0787E8] hover:from-[#0052cc] hover:to-[#056dbb] shadow-md shadow-blue-500/25"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="mt-6 pt-5 border-t border-blue-900/40 space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-[#0787E8] flex-shrink-0 mt-0.5" />
                <span>Vasantha Sai Apartments, Opposite Rishi Towers, KPHB, Kukatpally - 500085, Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-[#0787E8] flex-shrink-0" />
                <a href="tel:+919666567551" className="hover:text-white transition-colors">+91 966 656 7551</a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-[#0787E8] flex-shrink-0" />
                <a href="mailto:info@spiritadventures.in" className="hover:text-white transition-colors">info@spiritadventures.in</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Spirit Adventure Travel Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link 
              href="/about" 
              className="text-slate-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-blue-900">•</span>
            <Link 
              href="/about" 
              className="text-slate-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <span className="text-blue-900">•</span>
            <Link 
              href="/contact" 
              className="text-slate-400 hover:text-white transition-colors"
            >
              Safety Guidelines
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
