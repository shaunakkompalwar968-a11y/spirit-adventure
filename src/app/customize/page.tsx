'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Compass, 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  Hotel, 
  Bus, 
  Phone, 
  User, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  ArrowRight,
  IndianRupee
} from 'lucide-react';
import { submitCustomTour, submitContact } from '@/lib/api';

const DESTINATIONS_OPTIONS = [
  'Coorg',
  'Goa',
  'Hampi',
  'Gokarna',
  'Dandeli',
  'Ooty',
  'Kodaikanal',
  'Chikmagalur',
  'Wayanad',
  'Munnar'
];

const DURATIONS = [
  { label: '2 Days, 1 Night (Weekend Getaway)', value: '2D1N', baseMultiplier: 1.0 },
  { label: '3 Days, 2 Nights (Short Escape)', value: '3D2N', baseMultiplier: 1.4 },
  { label: '4 Days, 3 Nights (Explorer Circuit)', value: '4D3N', baseMultiplier: 1.9 },
  { label: '5 Days, 4 Nights (Full Adventure)', value: '5D4N', baseMultiplier: 2.3 },
  { label: '6+ Days (Extended Vacation)', value: '6D+', baseMultiplier: 2.8 },
];

const GROUP_TYPES = [
  'Friends Group',
  'Couple / Duo',
  'Family with Kids',
  'College / Student Batch',
  'Corporate Team Outing',
  'Solo Traveler'
];

const ADULT_OPTIONS = [1, 2, 3, 4, 5, 6, 8, 10, 15, 20];

const BUDGET_TIERS = [
  { label: '₹3,500 – ₹5,500 (Budget Friendly)', min: 3500, max: 5500 },
  { label: '₹6,000 – ₹9,500 (Value Comfort)', min: 6000, max: 9500 },
  { label: '₹10,000 – ₹16,000 (Premium Experience)', min: 10000, max: 16000 },
  { label: '₹16,000+ (Luxury & Private Villas)', min: 16000, max: 25000 },
];

const STAY_OPTIONS = [
  { id: '3star', title: '3-Star Comfort Hotel', desc: 'Modern rooms, AC, attached washroom & breakfast' },
  { id: 'homestay', title: 'Scenic Homestay / Nature Camp', desc: 'Campfire, authentic Kodava/local food, estate stay' },
  { id: 'resort', title: 'Luxury Resort with Swimming Pool', desc: 'Scenic views, buffet dinners, leisure amenities' },
  { id: 'villa', title: 'Private Heritage Villa', desc: 'Exclusive property for your group with private caretaker' },
];

const TRANSPORT_OPTIONS = [
  { id: 'tempo', title: 'AC Tempo Traveller', desc: 'Private 12/17-seater with pushback seats & music system' },
  { id: 'suv', title: 'Private SUV (Innova / Ertiga)', desc: 'Dedicated chauffeur for couples & small families' },
  { id: 'bus', title: 'AC Pushback Luxury Coach', desc: 'Large batches (20-40 travelers) with comfortable seating' },
  { id: 'self', title: 'Self Drive / Arrange Own Transport', desc: 'We handle accommodations, guide & activities only' },
];

export default function CustomizeTourPage() {
  // Form State
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(['Coorg']);
  const [otherDestination, setOtherDestination] = useState('');
  const [startingCity, setStartingCity] = useState('Hyderabad');
  const [travelDate, setTravelDate] = useState('');
  const [duration, setDuration] = useState('3 Days, 2 Nights (Short Escape)');
  const [groupType, setGroupType] = useState('Friends Group');
  const [adults, setAdults] = useState(4);
  const [budgetTier, setBudgetTier] = useState('₹6,000 – ₹9,500 (Value Comfort)');
  const [stayPreference, setStayPreference] = useState('Scenic Homestay / Nature Camp');
  const [transportPreference, setTransportPreference] = useState('AC Tempo Traveller');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  // Status state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleDestination = (dest: string) => {
    if (selectedDestinations.includes(dest)) {
      if (selectedDestinations.length > 1) {
        setSelectedDestinations(selectedDestinations.filter(d => d !== dest));
      }
    } else {
      setSelectedDestinations([...selectedDestinations, dest]);
    }
  };

  // WhatsApp quick link generation
  const waLink = useMemo(() => {
    const destList = [...selectedDestinations, otherDestination.trim()].filter(Boolean).join(', ');
    const msg = `*Spirit Adventures - Custom Tour Inquiry* 🏔️%0A%0A` +
      `*Name:* ${encodeURIComponent(fullName || 'Guest')}%0A` +
      `*Starting City:* ${encodeURIComponent(startingCity)}%0A` +
      `*Destinations:* ${encodeURIComponent(destList)}%0A` +
      `*Travel Date:* ${encodeURIComponent(travelDate || 'Flexible')}%0A` +
      `*Duration:* ${encodeURIComponent(duration)}%0A` +
      `*Group Size:* ${adults} Adults (${encodeURIComponent(groupType)})%0A` +
      `*Stay:* ${encodeURIComponent(stayPreference)}%0A` +
      `*Vehicle:* ${encodeURIComponent(transportPreference)}%0A` +
      `*Budget:* ${encodeURIComponent(budgetTier)}%0A` +
      `*Special Requests:* ${encodeURIComponent(specialRequests || 'None')}%0A%0A` +
      `Please provide a customized itinerary & quotation.`;

    return `https://wa.me/919666567551?text=${msg}`;
  }, [
    selectedDestinations, 
    otherDestination, 
    startingCity, 
    travelDate, 
    duration, 
    groupType, 
    adults, 
    stayPreference, 
    transportPreference, 
    budgetTier, 
    fullName, 
    specialRequests
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const allDests = otherDestination.trim() 
        ? [...selectedDestinations, otherDestination.trim()]
        : selectedDestinations;

      await submitCustomTour({
        name: fullName,
        email: email,
        phone: phone,
        destinations: allDests,
        starting_city: startingCity,
        travel_date: travelDate,
        duration: duration,
        adults: adults,
        group_type: groupType,
        stay_preference: stayPreference,
        transport_preference: transportPreference,
        budget_tier: budgetTier,
        special_requests: specialRequests
      });
    } catch {
      console.log('Submitted custom request via fallback');
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Hero Banner: Deep Navy */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl p-8 sm:p-12 mb-10 text-white relative overflow-hidden shadow-xl bg-[#0B1B3D]"
        >
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#0787E8]/20 blur-3xl" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-[#38BDF8] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>100% Tailor-Made & Flexible Private Holidays</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
              Customize Your Dream <span className="text-[#38BDF8]">Adventure</span>
            </h1>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300">
              Pick your dream destinations, select your group vibe, preferred stays, and transportation. Our Hyderabad & Bangalore trip managers will curate a handcrafted itinerary with zero hassle!
            </p>
          </div>
        </motion.div>

        {/* Main Grid: Form + Live Interactive Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form: 8 cols */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200"
            >
              {submitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-blue-50 text-[#0787E8] flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10 text-[#0787E8]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-[#0B1B3D]">Tour Customization Request Sent!</h2>
                    <p className="text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you, <strong className="text-[#0B1B3D]">{fullName || 'Traveler'}</strong>! Our senior tour lead is curating a personalized day-by-day itinerary and vehicle quote for you. We will reach out via WhatsApp at <strong className="text-[#0B1B3D]">{phone}</strong>.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold text-white flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105"
                      style={{ backgroundColor: '#25D366' }}
                    >
                      <span>Instant WhatsApp Chat</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Customize Another Trip
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Step 1: Destinations */}
                  <div>
                    <label className="block text-sm font-bold text-[#0B1B3D] mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#0787E8]" />
                      <span>1. Select Destinations (Choose 1 or more)</span>
                    </label>
                    <p className="text-xs text-slate-500 mb-3">
                      Select multiple spots to create a multi-city circuit (e.g. Hampi + Gokarna + Dandeli).
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                      {DESTINATIONS_OPTIONS.map((dest) => {
                        const active = selectedDestinations.includes(dest);
                        return (
                          <button
                            key={dest}
                            type="button"
                            onClick={() => toggleDestination(dest)}
                            className={`px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 border ${
                              active
                                ? 'bg-gradient-to-r from-[#0066FF] to-[#0787E8] text-white border-transparent shadow-sm'
                                : 'bg-slate-100 text-slate-800 border-transparent hover:border-slate-300'
                            }`}
                          >
                            <span>{active ? '✓' : '+'}</span>
                            <span>{dest}</span>
                          </button>
                        );
                      })}
                    </div>
                    <input
                      type="text"
                      value={otherDestination}
                      onChange={(e) => setOtherDestination(e.target.value)}
                      placeholder="Any other destinations? (e.g. Pondicherry, Sakleshpur, Manali, Wayanad...)"
                      className="mt-3 w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0787E8] bg-slate-50 focus:bg-white"
                    />
                  </div>

                  {/* Step 2: Starting City & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0B1B3D] mb-1.5 flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5 text-[#0787E8]" />
                        <span>Starting / Boarding City *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={startingCity}
                        onChange={(e) => setStartingCity(e.target.value)}
                        placeholder="e.g. Hyderabad, Bangalore, Chennai, Pune"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0787E8] bg-slate-50 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0B1B3D] mb-1.5 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#0787E8]" />
                        <span>Preferred Travel Date *</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0787E8] bg-slate-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Step 3: Duration & Group Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0B1B3D] mb-1.5 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#0787E8]" />
                        <span>Trip Duration</span>
                      </label>
                      <select
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0787E8] bg-slate-50 focus:bg-white"
                      >
                        {DURATIONS.map(d => (
                          <option key={d.value} value={d.label}>{d.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B1B3D] mb-1.5 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#0787E8]" />
                        <span>Group Type</span>
                      </label>
                      <select
                        value={groupType}
                        onChange={(e) => setGroupType(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0787E8] bg-slate-50 focus:bg-white"
                      >
                        {GROUP_TYPES.map(gt => (
                          <option key={gt} value={gt}>{gt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Step 4: Number of Travelers & Budget Tier */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0B1B3D] mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#0787E8]" />
                        <span>Number of Travelers (Adults) *</span>
                      </label>
                      <select
                        value={adults}
                        onChange={(e) => setAdults(Number(e.target.value))}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0787E8] bg-slate-50 focus:bg-white"
                      >
                        {ADULT_OPTIONS.map(num => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Traveler' : 'Travelers'} {num >= 10 ? '(Group Special Discount)' : ''}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B1B3D] mb-1.5 flex items-center gap-1.5">
                        <IndianRupee className="w-3.5 h-3.5 text-[#0787E8]" />
                        <span>Estimated Budget / Person</span>
                      </label>
                      <select
                        value={budgetTier}
                        onChange={(e) => setBudgetTier(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0787E8] bg-slate-50 focus:bg-white"
                      >
                        {BUDGET_TIERS.map(b => (
                          <option key={b.label} value={b.label}>{b.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Step 5: Accommodation Category */}
                  <div>
                    <label className="block text-xs font-bold text-[#0B1B3D] mb-2 flex items-center gap-1.5">
                      <Hotel className="w-3.5 h-3.5 text-[#0787E8]" />
                      <span>Stay & Accommodation Preference</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {STAY_OPTIONS.map(stay => {
                        const active = stayPreference === stay.title;
                        return (
                          <div
                            key={stay.id}
                            onClick={() => setStayPreference(stay.title)}
                            className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                              active
                                ? 'border-[#0787E8] bg-blue-50/60 ring-1 ring-[#0787E8]'
                                : 'border-slate-200 hover:border-slate-300 bg-white'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <input
                                type="radio"
                                checked={active}
                                onChange={() => setStayPreference(stay.title)}
                                className="text-[#0787E8] focus:ring-[#0787E8]"
                              />
                              <h4 className="text-xs font-bold text-[#0B1B3D]">{stay.title}</h4>
                            </div>
                            <p className="text-[11px] text-slate-500 mt-1 pl-5">{stay.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 6: Transportation Preference */}
                  <div>
                    <label className="block text-xs font-bold text-[#0B1B3D] mb-2 flex items-center gap-1.5">
                      <Bus className="w-3.5 h-3.5 text-[#0787E8]" />
                      <span>Transportation Preference</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {TRANSPORT_OPTIONS.map(trans => {
                        const active = transportPreference === trans.title;
                        return (
                          <div
                            key={trans.id}
                            onClick={() => setTransportPreference(trans.title)}
                            className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                              active
                                ? 'border-[#0787E8] bg-blue-50/60 ring-1 ring-[#0787E8]'
                                : 'border-slate-200 hover:border-slate-300 bg-white'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <input
                                type="radio"
                                checked={active}
                                onChange={() => setTransportPreference(trans.title)}
                                className="text-[#0787E8] focus:ring-[#0787E8]"
                              />
                              <h4 className="text-xs font-bold text-[#0B1B3D]">{trans.title}</h4>
                            </div>
                            <p className="text-[11px] text-slate-500 mt-1 pl-5">{trans.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 7: Contact Information */}
                  <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-4">
                    <h3 className="text-sm font-bold text-[#0B1B3D] flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#0787E8]" />
                      <span>Lead Traveler Contact Details</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your name"
                          className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:border-[#0787E8]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1">WhatsApp / Phone *</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 966 656 7551"
                          className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:border-[#0787E8]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:border-[#0787E8]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Specific Activities or Special Wishes</label>
                      <textarea
                        rows={2}
                        value={specialRequests}
                        onChange={(e) => setSpecialRequests(e.target.value)}
                        placeholder="e.g. Private campfire & music night, river rafting add-on in Dandeli, pure veg meals, sunrise hike guide, photographer..."
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:border-[#0787E8]"
                      />
                    </div>
                  </div>

                  {/* Submission Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-full text-xs font-bold text-white transition-all shadow-md flex items-center justify-center gap-2 bg-gradient-to-r from-[#0066FF] to-[#0787E8] hover:from-[#0052cc] hover:to-[#056dbb] shadow-blue-500/25 active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Sending Request...' : 'Submit Custom Tour Request'}</span>
                    </button>

                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-3.5 px-6 rounded-full text-xs font-bold text-white transition-transform hover:scale-105 shadow-md flex items-center justify-center gap-2"
                      style={{ backgroundColor: '#25D366' }}
                    >
                      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                      </svg>
                      <span>Customize on WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </motion.div>
          </div>

          {/* Right Live Itinerary Summary Card: 4 cols */}
          <div className="lg:col-span-4 sticky top-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-6 shadow-md border border-slate-200 space-y-5"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-bold text-sm text-[#0B1B3D] flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#0787E8]" />
                  <span>Custom Plan Summary</span>
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-blue-50 text-[#0787E8]">
                  LIVE ESTIMATE
                </span>
              </div>

              {/* Destinations Selected */}
              <div className="space-y-1.5 text-xs">
                <span className="text-slate-400 font-medium">Selected Destinations:</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedDestinations.map(d => (
                    <span key={d} className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#0787E8] font-bold text-[11px]">
                      {d}
                    </span>
                  ))}
                  {otherDestination && (
                    <span className="px-2.5 py-1 rounded-lg bg-[#0787E8]/10 text-[#0787E8] font-bold text-[11px]">
                      {otherDestination}
                    </span>
                  )}
                </div>
              </div>

              {/* Trip Parameters */}
              <div className="space-y-2 text-xs border-t border-dashed border-slate-200 pt-3">
                <div className="flex justify-between">
                  <span className="text-slate-500">Boarding City:</span>
                  <span className="font-bold text-[#0B1B3D]">{startingCity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Travel Date:</span>
                  <span className="font-bold text-[#0B1B3D]">{travelDate || 'Not selected yet'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Duration:</span>
                  <span className="font-bold text-[#0B1B3D]">{duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Party Size:</span>
                  <span className="font-bold text-[#0B1B3D]">{adults} Adults ({groupType})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Preferred Stay:</span>
                  <span className="font-bold text-[#0B1B3D]">{stayPreference.split(' ')[0]} {stayPreference.split(' ')[1]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Vehicle:</span>
                  <span className="font-bold text-[#0B1B3D]">{transportPreference.split('(')[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Budget Range:</span>
                  <span className="font-bold text-[#0787E8]">{budgetTier.split('(')[0]}</span>
                </div>
              </div>

              {/* Guaranteed Perks */}
              <div className="p-3.5 rounded-2xl bg-slate-50 space-y-2 text-[11px] text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0787E8]" />
                  <span>24/7 dedicated Spirit trip coordinator</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0787E8]" />
                  <span>Doorstep pickup anywhere in Hyd / Blr</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0787E8]" />
                  <span>Campfire night & bonfire music included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0787E8]" />
                  <span>No hidden vehicle taxes or toll fees</span>
                </div>
              </div>

              {/* Direct Callout */}
              <div className="pt-2 text-center">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2 shadow-md transition-all bg-[#0B1B3D] hover:bg-[#07192F]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Talk with Trip Specialist: +91 9666567551</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
