'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Calendar, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  Loader2, 
  Mountain,
  AlertCircle
} from 'lucide-react';
import { TourPackage, BookingResponse } from '@/types';
import { submitBooking } from '@/lib/api';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: TourPackage | null;
  packages?: TourPackage[];
}

export default function BookingModal({
  isOpen,
  onClose,
  selectedPackage,
  packages = []
}: BookingModalProps) {
  const [currentPackage, setCurrentPackage] = useState<TourPackage | null>(null);
  const [travelers, setTravelers] = useState(1);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState<BookingResponse | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (selectedPackage) {
      setCurrentPackage(selectedPackage);
      if (selectedPackage.upcoming_dates && selectedPackage.upcoming_dates.length > 0) {
        setDate(selectedPackage.upcoming_dates[0]);
      }
    } else if (packages.length > 0 && !currentPackage) {
      setCurrentPackage(packages[0]);
      if (packages[0].upcoming_dates && packages[0].upcoming_dates.length > 0) {
        setDate(packages[0].upcoming_dates[0]);
      }
    }
  }, [selectedPackage, packages]);

  const unitPrice = currentPackage 
    ? (currentPackage.discount_price ?? currentPackage.price) 
    : 1650;
  const totalPrice = unitPrice * travelers;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPackage) return;
    if (!date) {
      setErrorMsg('Please select a preferred expedition departure date');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    try {
      const res = await submitBooking({
        package_id: currentPackage.id,
        full_name: name,
        email: email,
        phone: phone,
        start_date: date,
        travelers_count: travelers,
        special_requests: specialRequests
      });
      setConfirmation(res);
    } catch {
      setErrorMsg('An error occurred. Please verify your details and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setConfirmation(null);
    setErrorMsg('');
    setName('');
    setEmail('');
    setPhone('');
    setSpecialRequests('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleResetAndClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden my-8 z-10"
          >
            {/* Header */}
            <div className="bg-[#183B2A] text-white p-6 relative">
              <button
                onClick={handleResetAndClose}
                className="absolute top-5 right-5 text-[#D5E2D7] hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 text-[#0787E8] text-xs font-bold uppercase tracking-wider mb-1">
                <Mountain className="w-4 h-4" />
                <span>Expedition Reservation</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">
                Book Your Spirit Adventure
              </h3>
              <p className="text-[#D5E2D7] text-xs sm:text-sm mt-1">
                Zero booking fees • Flexible rescheduling • 100% financial guarantee
              </p>
            </div>

            <div className="p-6">
              {confirmation ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#E5EFE5] text-[#0787E8] flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-10 h-10 text-[#0787E8]" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#183B2A]">
                    Reservation Inquiry Submitted!
                  </h4>
                  <p className="text-sm text-[#426D4A] max-w-md mx-auto">
                    {confirmation.message}
                  </p>
                  
                  <div className="bg-[#F3F5F4] rounded-xl p-4 max-w-md mx-auto text-left space-y-2 text-xs sm:text-sm border border-gray-200">
                    <div className="flex justify-between">
                      <span className="text-[#426D4A]">Expedition:</span>
                      <span className="font-bold text-[#183B2A]">{confirmation.package_title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#426D4A]">Departure:</span>
                      <span className="font-semibold text-[#183B2A]">{confirmation.start_date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#426D4A]">Travelers:</span>
                      <span className="font-semibold text-[#183B2A]">{confirmation.travelers_count} person(s)</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-2">
                      <span className="font-bold text-[#183B2A]">Estimated Total:</span>
                      <span className="font-black text-base text-[#0787E8]">${confirmation.total_price.toLocaleString()}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleResetAndClose}
                    className="mt-6 px-8 py-3 rounded-full bg-[#0787E8] hover:bg-[#056DBB] text-white font-bold text-sm shadow-md transition-colors"
                  >
                    Done & Back to Website
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMsg && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Selected Package Selector */}
                  <div>
                    <label className="block text-xs font-bold text-[#183B2A] uppercase mb-1.5">
                      Selected Expedition
                    </label>
                    <select
                      value={currentPackage?.id || ''}
                      onChange={(e) => {
                        const pkg = packages.find(p => p.id === Number(e.target.value));
                        if (pkg) {
                          setCurrentPackage(pkg);
                          if (pkg.upcoming_dates && pkg.upcoming_dates.length > 0) {
                            setDate(pkg.upcoming_dates[0]);
                          }
                        }
                      }}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-[#183B2A] font-semibold text-sm focus:outline-none focus:border-[#0787E8] bg-white"
                    >
                      {packages.map((pkg) => (
                        <option key={pkg.id} value={pkg.id}>
                          {pkg.title} ({pkg.duration_days} Days) - ${pkg.discount_price ?? pkg.price}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date and Travelers Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#183B2A] uppercase mb-1.5">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#0787E8]" />
                          Departure Date
                        </span>
                      </label>
                      {currentPackage?.upcoming_dates && currentPackage.upcoming_dates.length > 0 ? (
                        <select
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-[#183B2A] text-sm focus:outline-none focus:border-[#0787E8] bg-white font-medium"
                          required
                        >
                          <option value="">Select departure batch...</option>
                          {currentPackage.upcoming_dates.map((d) => (
                            <option key={d} value={d}>{d}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-[#183B2A] text-sm focus:outline-none focus:border-[#0787E8] bg-white font-medium"
                          required
                        />
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#183B2A] uppercase mb-1.5">
                        <span className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-[#0787E8]" />
                          Number of Travelers
                        </span>
                      </label>
                      <div className="flex items-center rounded-xl border border-gray-300 overflow-hidden bg-white">
                        <button
                          type="button"
                          onClick={() => setTravelers(Math.max(1, travelers - 1))}
                          className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-[#183B2A] font-bold transition-colors"
                        >
                          -
                        </button>
                        <span className="flex-1 text-center font-bold text-[#183B2A] text-sm">
                          {travelers} {travelers === 1 ? 'Person' : 'People'}
                        </span>
                        <button
                          type="button"
                          onClick={() => setTravelers(Math.min(16, travelers + 1))}
                          className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-[#183B2A] font-bold transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Traveler Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#183B2A] uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alexander Walker"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#0787E8]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#183B2A] uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alexander@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#0787E8]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#183B2A] uppercase mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 019-2834"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#0787E8]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#183B2A] uppercase mb-1">
                        Dietary / Altitude Experience
                      </label>
                      <input
                        type="text"
                        value={specialRequests}
                        onChange={(e) => setSpecialRequests(e.target.value)}
                        placeholder="e.g. Vegetarian, prior hiking to 4,000m"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#0787E8]"
                      />
                    </div>
                  </div>

                  {/* Price Summary Bar */}
                  <div className="bg-[#E5EFE5] rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 border border-[#426D4A]/20">
                    <div>
                      <span className="text-xs text-[#426D4A] font-semibold block">Total Package Price</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-[#0787E8]">
                          ${totalPrice.toLocaleString()}
                        </span>
                        <span className="text-xs text-[#183B2A]">
                          (${unitPrice.toLocaleString()} × {travelers} traveler{travelers > 1 ? 's' : ''})
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#426D4A] font-medium">
                      <ShieldCheck className="w-4 h-4 text-[#0787E8]" />
                      <span>Free cancellation up to 30 days prior</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleResetAndClose}
                      className="px-5 py-2.5 rounded-xl text-sm font-semibold text-[#183B2A] hover:bg-gray-100 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-bold text-white bg-[#0787E8] hover:bg-[#056DBB] transition-colors shadow-md disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Confirming...
                        </>
                      ) : (
                        'Confirm Reservation'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
