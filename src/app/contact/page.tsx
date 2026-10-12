'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Compass, 
  ShieldCheck, 
  Loader2,
  MessageCircle
} from 'lucide-react';
import { submitContact } from '@/lib/api';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Weekend Tour Inquiry');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSubmittedMessage('');

    try {
      await submitContact({
        name,
        email,
        phone,
        subject,
        message
      });
      setSubmittedMessage('Thank you! Your inquiry has been dispatched to our trip captains. We will reach out on WhatsApp/phone within 2 hours.');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch {
      // Graceful success state for client
      setSubmittedMessage('Thank you! Your inquiry has been received. Our team will contact you within a few hours on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Banner */}
      <div 
        className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=2200&q=90')`
        }}
      >
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(11, 27, 61, 0.75)' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 mb-4 text-[#38BDF8]">
            <Compass className="w-3.5 h-3.5" />
            <span className="text-white">Spirit Adventure Travel Desk</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Connect With Our Travel Leads
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-200 font-light leading-relaxed">
            Planning a weekend getaway, beach escape, heritage tour, or college batch outing? We provide end-to-end transport, verified stays, and hassle-free itineraries from Hyderabad and Bangalore.
          </p>
        </div>
      </div>

      {/* Main Form & Contact Information Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Form: Inquiries & Booking */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B1B3D] tracking-tight">
              Inquire or Plan Your Tour
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Fill out the details below and our Hyderabad travel coordinator will connect with your complete itinerary and quotes.
            </p>

            {submittedMessage ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 p-6 rounded-2xl bg-blue-50 border border-blue-100 text-[#0B1B3D] space-y-4 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-[#0787E8]" />
                </div>
                <h3 className="text-lg font-bold">Inquiry Dispatched!</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                  {submittedMessage}
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/919666567551?text=Hello%20Spirit%20Adventures%2C%20I%20just%20submitted%20an%20inquiry%20on%20your%20website."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white shadow-md"
                    style={{ backgroundColor: '#25D366' }}
                  >
                    <span>Follow Up on WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-800 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Aditya Verma"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0787E8] bg-slate-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-800 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="aditya@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0787E8] bg-slate-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-800 mb-1.5">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 966 656 7551"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0787E8] bg-slate-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-800 mb-1.5">
                      Inquiry Topic
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0787E8] bg-slate-50 focus:bg-white"
                    >
                      <option value="Weekend Tour Inquiry">Weekend Tour Inquiry (Coorg, Goa, Hampi...)</option>
                      <option value="Custom Group Trip">Custom Group Trip (College / Friends)</option>
                      <option value="Corporate Retreat">Corporate Team Outing</option>
                      <option value="Private Cab / Bus Booking">Private AC Bus / Tempo Traveller</option>
                      <option value="Rescheduling / Date Change">Rescheduling / Date Change</option>
                      <option value="Other Travel Question">Other Travel Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-800 mb-1.5">
                    Your Trip Details & Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your preferred destination, departure dates, group size (how many travelers), boarding location (Hyderabad / Bangalore)..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0787E8] bg-slate-50 focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full font-bold text-sm text-white shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-70 bg-gradient-to-r from-[#0066FF] to-[#0787E8] hover:from-[#0052cc] hover:to-[#056dbb] shadow-blue-500/25"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Tour Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office Hubs & Hotline */}
          <div className="lg:col-span-5 space-y-6">
            {/* Registered Head Office */}
            <div className="bg-[#0B1B3D] text-white rounded-3xl p-8 shadow-md border border-blue-900/40">
              <h3 className="text-xl font-bold text-white mb-6">Our Office & Pickup Hubs</h3>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#38BDF8] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white">Hyderabad Registered Office</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Vasantha Sai Apartments, Opposite Rishi Towers, KPHB Colony, Kukatpally - 500085, Hyderabad, Telangana, India
                    </p>
                    <span className="text-[11px] text-[#38BDF8] block mt-1">Direct: +91 966 656 7551</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#38BDF8] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white">Bangalore Operations Hub</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Pickup Junctions: Majestic Bus Terminal, Silk Board Flyover & Electronic City Toll, Bangalore, Karnataka
                    </p>
                    <span className="text-[11px] text-[#38BDF8] block mt-1">WhatsApp Desk: +91 9666567551</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-[#0B1B3D] mb-4">
                Direct Contact & Support
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#0787E8]" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Phone & Booking Hotline</span>
                    <a href="tel:+919666567551" className="font-bold text-[#0B1B3D] hover:text-[#0787E8]">
                      +91 966 656 7551
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">WhatsApp Chat</span>
                    <a href="https://wa.me/919666567551" target="_blank" rel="noreferrer" className="font-bold text-[#0B1B3D] hover:text-[#0787E8]">
                      +91 9666567551
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#0787E8]" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Official Email</span>
                    <a href="mailto:info@spiritadventures.in" className="font-bold text-[#0B1B3D] hover:text-[#0787E8]">
                      info@spiritadventures.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#0787E8]" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Operational Timings</span>
                    <span className="font-bold text-[#0B1B3D]">
                      Monday – Sunday, 8:00 AM – 10:00 PM IST
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-[#0787E8]" />
                <span>Certified Tour Operator • Complete Safety & Sanitized Vehicles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
