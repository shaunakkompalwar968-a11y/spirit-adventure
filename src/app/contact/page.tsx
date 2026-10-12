'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Loader2, 
  Send,
  Compass,
  AlertCircle
} from 'lucide-react';
import { submitContact } from '@/lib/api';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Custom Itinerary Request');
  const [packageInterest, setPackageInterest] = useState('Everest Base Camp & Kala Patthar');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await submitContact({
        name,
        email,
        phone,
        subject,
        package_interest: packageInterest,
        message,
      });
      setSubmittedMessage(res.message);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch {
      setErrorMessage('Failed to send message. Please try again or contact us directly via phone.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F3F5F4] min-h-screen pb-24">
      {/* Banner */}
      <div 
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=90')`
        }}
      >
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(12, 35, 27, 0.72)' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 mb-4 text-[#0787E8]">
            <Compass className="w-3.5 h-3.5" />
            <span className="text-white">Direct Expedition Concierge</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Connect With Our Alpinists
          </h1>
          <p className="mt-4 text-base sm:text-xl text-[#F3F5F4] font-light leading-relaxed">
            Planning a custom private trek, corporate wilderness retreat, or have questions regarding gear and medical safety? We're here for you.
          </p>
        </div>
      </div>

      {/* Main Form & Contact Information Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Form: Custom Trip Planner */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-200/80">
            <h2 className="text-2xl sm:text-3xl font-black text-[#183B2A] tracking-tight">
              Design Your Custom Expedition
            </h2>
            <p className="mt-2 text-sm text-[#426D4A]">
              Fill out the form below and one of our chief mountain expedition planners will contact you within 24 hours.
            </p>

            {submittedMessage ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 p-6 rounded-2xl bg-[#E5EFE5] border border-[#426D4A]/30 text-center space-y-3"
              >
                <CheckCircle2 className="w-12 h-12 text-[#0787E8] mx-auto" />
                <h3 className="text-xl font-bold text-[#183B2A]">Inquiry Received!</h3>
                <p className="text-sm text-[#426D4A] max-w-md mx-auto">{submittedMessage}</p>
                <button
                  onClick={() => setSubmittedMessage('')}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#0787E8] text-white text-xs font-bold hover:bg-[#056DBB] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {errorMessage && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#183B2A] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Johnathan Cruz"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#0787E8] text-[#183B2A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#183B2A] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="johnathan@domain.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#0787E8] text-[#183B2A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#183B2A] mb-1.5">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 392-1084"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#0787E8] text-[#183B2A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-[#183B2A] mb-1.5">
                      Expedition / Region of Interest
                    </label>
                    <select
                      value={packageInterest}
                      onChange={(e) => setPackageInterest(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#0787E8] text-[#183B2A] bg-white font-medium"
                    >
                      <option value="Everest Base Camp & Kala Patthar">Everest Base Camp (Nepal)</option>
                      <option value="Annapurna Circuit & Thorong La">Annapurna Circuit (Nepal)</option>
                      <option value="Patagonia W-Trek & Grey Glacier">Torres del Paine (Patagonia)</option>
                      <option value="Swiss Alps Haute Route">Swiss Alps Haute Route (Switzerland)</option>
                      <option value="Mount Kilimanjaro Lemosho">Mount Kilimanjaro (Tanzania)</option>
                      <option value="Markha Valley Trek">Markha Valley (Ladakh, India)</option>
                      <option value="Custom Private Expedition">Custom Private Expedition</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#183B2A] mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Inquiring for private group of 6 in October"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#0787E8] text-[#183B2A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#183B2A] mb-1.5">
                    Your Message, Fitness Level & Dates *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your prior hiking experience, target months, group size, or any specific questions..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#0787E8] text-[#183B2A]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full font-bold text-sm text-white shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-70"
                  style={{ backgroundColor: '#0787E8' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#056DBB')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0787E8')}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Expedition Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office Hubs & Hotline */}
          <div className="lg:col-span-5 space-y-6">
            {/* Global Operations Hubs */}
            <div className="bg-[#183B2A] text-white rounded-3xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-white mb-6">Our Expedition Hubs</h3>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0787E8] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white">Kathmandu HQ (Himalayan Base)</h4>
                    <p className="text-xs text-[#D5E2D7] mt-0.5">
                      Thamel Marg, Post Box 1442, Kathmandu, Nepal
                    </p>
                    <span className="text-[11px] text-[#0787E8] block mt-1">Tel: +977 1 442-9988</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0787E8] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white">Chamonix Hub (European Alps)</h4>
                    <p className="text-xs text-[#D5E2D7] mt-0.5">
                      12 Rue du Mont-Blanc, 74400 Chamonix-Mont-Blanc, France
                    </p>
                    <span className="text-[11px] text-[#0787E8] block mt-1">Tel: +33 4 50 53 00 24</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0787E8] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white">Boulder Office (Americas Support)</h4>
                    <p className="text-xs text-[#D5E2D7] mt-0.5">
                      Pearl Street Mall, Boulder, CO 80302, USA
                    </p>
                    <span className="text-[11px] text-[#0787E8] block mt-1">Toll-Free: +1 (800) 555-SPIRIT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200/80">
              <h3 className="text-lg font-bold text-[#183B2A] mb-4">
                Immediate Assistance
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E5EFE5] flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#0787E8]" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block">Toll-Free Hotline</span>
                    <a href="tel:+18005557748" className="font-bold text-[#183B2A] hover:text-[#0787E8]">
                      +1 (800) 555-7748
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E5EFE5] flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#0787E8]" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block">General Inquiries</span>
                    <a href="mailto:expeditions@spiritadventure.com" className="font-bold text-[#183B2A] hover:text-[#0787E8]">
                      expeditions@spiritadventure.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E5EFE5] flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#0787E8]" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block">Operational Hours</span>
                    <span className="font-bold text-[#183B2A]">
                      Monday – Saturday, 8:00 AM – 8:00 PM (Local)
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-2 text-xs text-[#426D4A]">
                <ShieldCheck className="w-4 h-4 text-[#0787E8]" />
                <span>24/7 High-Altitude Emergency Response Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
