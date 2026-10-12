'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Mountain, 
  Compass, 
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
      className="pt-16 pb-10 border-t border-[#426D4A]/40"
      style={{ backgroundColor: '#183B2A' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#426D4A]/30">
          {/* Brand & Agency Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-2 flex items-center justify-center text-white">
                <Mountain className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white font-sans">
                  SPIRIT<span className="text-[#0787E8]">.</span>ADVENTURE
                </span>
                <span className="text-[10px] tracking-widest uppercase font-bold text-[#D5E2D7]">
                  Beyond Boundaries
                </span>
              </div>
            </Link>

            {/* Paragraph: #D5E2D7 */}
            <p 
              className="mt-4 text-sm leading-relaxed max-w-sm"
              style={{ color: '#D5E2D7' }}
            >
              Certified premier mountaineering and wilderness trekking operator. Delivering safe, ethical, and soul-stirring high-altitude expeditions across the world’s greatest ranges since 2012.
            </p>

            {/* Social Media Icons: #FFFFFF */}
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

              {/* Twitter / X */}
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0787E8] transition-colors flex items-center justify-center text-white"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
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
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
                </svg>
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-[#D5E2D7]">
              <ShieldCheck className="w-4 h-4 text-[#0787E8]" />
              <span>Signatory: IPPG & Leave No Trace Alliance</span>
            </div>
          </div>

          {/* Column 2: Expeditions */}
          <div className="lg:col-span-2">
            {/* Headings: #FFFFFF */}
            <h4 
              className="text-sm font-bold uppercase tracking-wider mb-4"
              style={{ color: '#FFFFFF' }}
            >
              Expeditions
            </h4>
            {/* Links: #E5EFE5, Link hover: #0787E8 */}
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link 
                  href="/packages/everest-base-camp-kala-patthar" 
                  className="transition-colors"
                  style={{ color: '#E5EFE5' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0787E8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E5EFE5')}
                >
                  Everest Base Camp
                </Link>
              </li>
              <li>
                <Link 
                  href="/packages/annapurna-circuit-thorong-la-pass" 
                  className="transition-colors"
                  style={{ color: '#E5EFE5' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0787E8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E5EFE5')}
                >
                  Annapurna Circuit
                </Link>
              </li>
              <li>
                <Link 
                  href="/packages/patagonia-w-trek-grey-glacier" 
                  className="transition-colors"
                  style={{ color: '#E5EFE5' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0787E8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E5EFE5')}
                >
                  Patagonia W-Trek
                </Link>
              </li>
              <li>
                <Link 
                  href="/packages/swiss-alps-haute-route" 
                  className="transition-colors"
                  style={{ color: '#E5EFE5' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0787E8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E5EFE5')}
                >
                  Swiss Haute Route
                </Link>
              </li>
              <li>
                <Link 
                  href="/packages/kilimanjaro-lemosho-route" 
                  className="transition-colors"
                  style={{ color: '#E5EFE5' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0787E8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E5EFE5')}
                >
                  Mount Kilimanjaro
                </Link>
              </li>
              <li>
                <Link 
                  href="/packages/markha-valley-ladakh" 
                  className="transition-colors"
                  style={{ color: '#E5EFE5' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0787E8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E5EFE5')}
                >
                  Markha Valley Ladakh
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2">
            {/* Headings: #FFFFFF */}
            <h4 
              className="text-sm font-bold uppercase tracking-wider mb-4"
              style={{ color: '#FFFFFF' }}
            >
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link 
                  href="/about" 
                  className="transition-colors"
                  style={{ color: '#E5EFE5' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0787E8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E5EFE5')}
                >
                  About Our Agency
                </Link>
              </li>
              <li>
                <Link 
                  href="/destinations" 
                  className="transition-colors"
                  style={{ color: '#E5EFE5' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0787E8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E5EFE5')}
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link 
                  href="/packages" 
                  className="transition-colors"
                  style={{ color: '#E5EFE5' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0787E8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E5EFE5')}
                >
                  All Packages
                </Link>
              </li>
              <li>
                <Link 
                  href="/about#guides" 
                  className="transition-colors"
                  style={{ color: '#E5EFE5' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0787E8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E5EFE5')}
                >
                  UIAGM Mountain Guides
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="transition-colors"
                  style={{ color: '#E5EFE5' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0787E8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E5EFE5')}
                >
                  Custom Trip Planner
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div className="lg:col-span-4">
            {/* Headings: #FFFFFF */}
            <h4 
              className="text-sm font-bold uppercase tracking-wider mb-2"
              style={{ color: '#FFFFFF' }}
            >
              Mountain Dispatch
            </h4>
            {/* Paragraphs: #D5E2D7 */}
            <p 
              className="text-xs sm:text-sm leading-relaxed mb-4"
              style={{ color: '#D5E2D7' }}
            >
              Subscribe for season opening alerts, high-altitude gear guides, and exclusive early booking perks.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-white/10 rounded-xl text-white text-xs border border-white/20">
                <CheckCircle2 className="w-4 h-4 text-[#0787E8]" />
                <span>You're subscribed! Welcome to the Spirit Expedition Club.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:outline-none focus:border-[#0787E8]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-white transition-colors flex items-center gap-1 flex-shrink-0"
                  style={{ backgroundColor: '#0787E8' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#056DBB')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0787E8')}
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="mt-6 pt-5 border-t border-[#426D4A]/30 space-y-2 text-xs">
              <div className="flex items-center gap-2" style={{ color: '#D5E2D7' }}>
                <MapPin className="w-3.5 h-3.5 text-[#0787E8]" />
                <span>Expedition HQ: Thamel Marg, Kathmandu / European Ops: Chamonix, France</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: '#D5E2D7' }}>
                <Phone className="w-3.5 h-3.5 text-[#0787E8]" />
                <span>Direct Hotline: +1 (800) 555-SPIRIT / +977 1 442-9988</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: '#D5E2D7' }}>
                <Mail className="w-3.5 h-3.5 text-[#0787E8]" />
                <span>expeditions@spiritadventure.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p style={{ color: '#D5E2D7' }}>
            © {new Date().getFullYear()} Spirit Adventure Travel Agency. All rights reserved. Registered Alpine Operator #7829-NP.
          </p>
          <div className="flex items-center gap-4">
            <Link 
              href="/about" 
              className="transition-colors"
              style={{ color: '#E5EFE5' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0787E8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#E5EFE5')}
            >
              Privacy Policy
            </Link>
            <span style={{ color: '#426D4A' }}>•</span>
            <Link 
              href="/about" 
              className="transition-colors"
              style={{ color: '#E5EFE5' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0787E8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#E5EFE5')}
            >
              Expedition Terms
            </Link>
            <span style={{ color: '#426D4A' }}>•</span>
            <Link 
              href="/contact" 
              className="transition-colors"
              style={{ color: '#E5EFE5' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0787E8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#E5EFE5')}
            >
              Safety Standards
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
