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
      className="pt-16 pb-10 border-t border-[#426D4A]/40"
      style={{ backgroundColor: '#183B2A' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#426D4A]/30">
          {/* Brand & Agency Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="Spirit Adventures Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white font-sans">
                  SPIRIT<span className="text-[#0787E8]">.</span>ADVENTURE
                </span>
                <span className="text-[10px] tracking-widest uppercase font-bold text-[#D5E2D7]">
                  Explore the World, Without Limits
                </span>
              </div>
            </Link>

            {/* Paragraph: #D5E2D7 */}
            <p 
              className="mt-4 text-sm leading-relaxed max-w-sm"
              style={{ color: '#D5E2D7' }}
            >
              Premier travel and adventure agency based in Hyderabad. Specialized in curated weekend getaways, hill station retreats, beach adventures, and custom group holidays across South India and beyond.
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

            <div className="mt-6 flex items-center gap-2 text-xs text-[#D5E2D7]">
              <ShieldCheck className="w-4 h-4 text-[#0787E8]" />
              <span>Certified Tour Operator • Hyderabad & Bangalore Pickups</span>
            </div>
          </div>

          {/* Column 2: Popular Tours */}
          <div className="lg:col-span-2">
            {/* Headings: #FFFFFF */}
            <h4 
              className="text-sm font-bold uppercase tracking-wider mb-4"
              style={{ color: '#FFFFFF' }}
            >
              Popular Tours
            </h4>
            {/* Links: #E5EFE5, Link hover: #0787E8 */}
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link 
                  href="/packages/coorg" 
                  className="transition-colors"
                  style={{ color: '#E5EFE5' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0787E8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E5EFE5')}
                >
                  Coorg Getaway
                </Link>
              </li>
              <li>
                <Link 
                  href="/packages/goa" 
                  className="transition-colors"
                  style={{ color: '#E5EFE5' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0787E8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E5EFE5')}
                >
                  Goa Beach Trip
                </Link>
              </li>
              <li>
                <Link 
                  href="/packages/hampi" 
                  className="transition-colors"
                  style={{ color: '#E5EFE5' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0787E8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E5EFE5')}
                >
                  Hampi & Gokarna
                </Link>
              </li>
              <li>
                <Link 
                  href="/packages/ooty" 
                  className="transition-colors"
                  style={{ color: '#E5EFE5' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0787E8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E5EFE5')}
                >
                  Kodaikanal & Ooty
                </Link>
              </li>
              <li>
                <Link 
                  href="/packages/chikmagalur" 
                  className="transition-colors"
                  style={{ color: '#E5EFE5' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0787E8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E5EFE5')}
                >
                  Chikmagalur Trail
                </Link>
              </li>
              <li>
                <Link 
                  href="/packages/dandeli" 
                  className="transition-colors"
                  style={{ color: '#E5EFE5' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0787E8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E5EFE5')}
                >
                  Dandeli Rafting
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
              Quick Links
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
                  About Spirit Adventures
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
                  All Tour Packages
                </Link>
              </li>
              <li>
                <Link 
                  href="/customize" 
                  className="transition-colors"
                  style={{ color: '#E5EFE5' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0787E8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E5EFE5')}
                >
                  Customize Your Trip
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
                  Contact Us
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
              Stay Connected
            </h4>
            {/* Paragraphs: #D5E2D7 */}
            <p 
              className="text-xs sm:text-sm leading-relaxed mb-4"
              style={{ color: '#D5E2D7' }}
            >
              Subscribe for weekend departure alerts, holiday discount codes, and new destination releases.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-white/10 rounded-xl text-white text-xs border border-white/20">
                <CheckCircle2 className="w-4 h-4 text-[#0787E8]" />
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
              <div className="flex items-start gap-2" style={{ color: '#D5E2D7' }}>
                <MapPin className="w-4 h-4 text-[#0787E8] flex-shrink-0 mt-0.5" />
                <span>Vasantha Sai Apartments, Opposite Rishi Towers, KPHB, Kukatpally - 500085, Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: '#D5E2D7' }}>
                <Phone className="w-3.5 h-3.5 text-[#0787E8] flex-shrink-0" />
                <a href="tel:+919666567551" className="hover:text-white transition-colors">+91 966 656 7551</a>
              </div>
              <div className="flex items-center gap-2" style={{ color: '#D5E2D7' }}>
                <Mail className="w-3.5 h-3.5 text-[#0787E8] flex-shrink-0" />
                <a href="mailto:info@spiritadventures.in" className="hover:text-white transition-colors">info@spiritadventures.in</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p style={{ color: '#D5E2D7' }}>
            © {new Date().getFullYear()} Spirit Adventure Travel Agency. All rights reserved.
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
              Terms of Service
            </Link>
            <span style={{ color: '#426D4A' }}>•</span>
            <Link 
              href="/contact" 
              className="transition-colors"
              style={{ color: '#E5EFE5' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0787E8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#E5EFE5')}
            >
              Safety Guidelines
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
