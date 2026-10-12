'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Star, 
  Sparkles, 
  Bot, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  ThumbsUp,
  User,
  ExternalLink
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

const FAQ_SUGGESTIONS = [
  "What tour packages do you offer?",
  "Where are the pickup points?",
  "How much does the Coorg trip cost?",
  "What is included in the Hampi & Gokarna trip?",
  "How can I customize a private group tour?",
  "What is your contact number and office address?"
];

export default function FloatingActions() {
  // Modal states
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  // Rating form state
  const [rating, setRating] = useState(5);
  const [ratingHover, setRatingHover] = useState(0);
  const [reviewerName, setReviewerName] = useState('');
  const [reviewerTour, setReviewerTour] = useState('Coorg Getaway');
  const [reviewerComments, setReviewerComments] = useState('');
  const [ratingSubmitted, setRatingSubmitted] = useState(false);

  // Chatbot state
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Namaste! 🙏 Welcome to Spirit Adventures. I'm your AI Travel Guide. How can I help plan your upcoming weekend getaway or adventure tour?",
      timestamp: 'Just now'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (showChatbot) {
      scrollToBottom();
    }
  }, [chatMessages, showChatbot]);

  // Handle rating submission
  const handleRatingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRatingSubmitted(true);
    setTimeout(() => {
      setShowRatingModal(false);
      setRatingSubmitted(false);
      setReviewerName('');
      setReviewerComments('');
    }, 2400);
  };

  // Generate bot responses based on inquiry
  const getBotResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('package') || q.includes('tours') || q.includes('destinations') || q.includes('trips')) {
      return "We offer 6 top-rated tour packages across South India:\n\n• Coorg Getaway (2D/1N) - ₹4,499\n• Goa Beach Trip (3D/2N) - ₹7,999\n• Hampi, Gokarna & Dandeli (4D/3N) - ₹8,999\n• Kodaikanal, Ooty & Mysore (4D/3N) - ₹13,499\n• Chikmagalur Coffee Trail (2D/1N) - ₹5,999\n• Dandeli River Rafting (2D/1N) - ₹3,999\n\nAll include comfortable AC transport, stays, breakfast, and campfires!";
    }

    if (q.includes('pickup') || q.includes('hyderabad') || q.includes('bangalore') || q.includes('boarding')) {
      return "🚌 Our primary departures start from:\n\n1. Hyderabad: KPHB Colony, Gachibowli ORR, Begumpet, and Paradise Metro.\n2. Bangalore: Majestic, Silk Board Junction, and Electronic City Toll Plaza.\n\nCustom private pickups are also available for groups of 6 or more!";
    }

    if (q.includes('coorg')) {
      return "🌲 The Coorg Getaway is priced at ₹4,499/person (Special Offer). It features stays inside a coffee estate resort, Abbey Falls hanging bridge, Raja's Seat golden sunset, Dubare Elephant Camp, Bylakuppe Tibetan Golden Temple, and an evening campfire with music!";
    }

    if (q.includes('hampi') || q.includes('gokarna')) {
      return "🏛️ The Hampi, Gokarna & Dandeli 4-Day circuit is our most popular 3-in-1 trip (₹8,999/person). You get UNESCO ruins of Vijayanagara, the serene cliffs of Om Beach in Gokarna, and Kali river rafting & riverside camp in Dandeli!";
    }

    if (q.includes('goa')) {
      return "🏖️ The Goa Beach Trip (3D/2N) starts from ₹7,999/person. It includes 3-star beach resort stay with swimming pool, parasailing, jet ski, banana rides, Aguada Fort, Mandovi River Sunset Cruise with DJ & folk dance, and nightlife at Baga!";
    }

    if (q.includes('customize') || q.includes('custom') || q.includes('private') || q.includes('corporate') || q.includes('college')) {
      return "✨ Yes! We specialize in custom group trips for college friends, families, and corporate teams. You can customize dates, luxury level, pickup location, and activities on our Customize Trip Planner page or call us directly at +91 966 656 7551.";
    }

    if (q.includes('contact') || q.includes('address') || q.includes('phone') || q.includes('call') || q.includes('office') || q.includes('number')) {
      return "📞 Contact Spirit Adventures:\n• Phone: +91 966 656 7551\n• WhatsApp: +91 9666567551\n• Email: info@spiritadventures.in\n• Office: Vasantha Sai Apartments, Opposite Rishi Towers, KPHB, Kukatpally - 500085, Hyderabad, India.";
    }

    if (q.includes('price') || q.includes('cost') || q.includes('discount')) {
      return "Our weekend group packages start from just ₹3,999 to ₹8,999 per person, which includes round-trip AC transport, resort/homestay accommodation, campfire meals, sightseeing, and tour coordinator assistance. Group discounts apply for 4+ travelers!";
    }

    return "Thank you for asking! For detailed date confirmations, seat bookings, or personalized itinerary tailoring, you can message our trip leads on WhatsApp at +91 966 656 7551 or submit the booking form on any package page.";
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponseText = getBotResponse(text);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Floating Buttons Bar (Bottom-Right: elevated on mobile to avoid bottom navbar) */}
      <div className="fixed bottom-22 md:bottom-6 right-4 md:right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Rate Us Pill Button */}
        <button
          onClick={() => setShowRatingModal(true)}
          className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-white text-[#183B2A] shadow-lg border border-[#426D4A]/20 hover:border-[#0787E8] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          title="Rate Your Spirit Adventure Experience"
        >
          <div className="w-6 h-6 rounded-full bg-[#FF9D42]/15 flex items-center justify-center text-[#FF9D42]">
            <Star className="w-3.5 h-3.5 fill-[#FF9D42]" />
          </div>
          <span className="text-xs font-bold text-[#183B2A] group-hover:text-[#0787E8] transition-colors">
            Rate Us
          </span>
        </button>

        {/* WhatsApp Direct Chat Button */}
        <a
          href="https://wa.me/919666567551?text=Hello%20Spirit%20Adventures%2C%20I%20would%20like%20to%20inquire%20about%20a%20tour%20package."
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg hover:shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 group relative"
          title="Chat with us on WhatsApp (+91 9666567551)"
        >
          <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>
          <span className="absolute right-15 bg-[#183B2A] text-white text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            WhatsApp Support
          </span>
        </a>

        {/* Spirit AI Guide Floating Trigger */}
        <button
          onClick={() => setShowChatbot(prev => !prev)}
          className="w-14 h-14 rounded-full text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 relative"
          style={{ backgroundColor: '#0787E8' }}
          title="Open Spirit AI Assistant"
        >
          {showChatbot ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <div className="relative flex items-center justify-center">
              <Bot className="w-7 h-7 text-white" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#FF9D42] border-2 border-white rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#FF9D42] border-2 border-white rounded-full" />
            </div>
          )}
        </button>
      </div>

      {/* Spirit AI Guide Chatbot Modal Window */}
      {showChatbot && (
        <div className="fixed bottom-24 md:bottom-24 right-4 md:right-6 z-50 w-[92vw] sm:w-[410px] h-[520px] sm:h-[560px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Chat Header: #183B2A with #0787E8 accents */}
          <div className="p-4 flex items-center justify-between text-white" style={{ backgroundColor: '#183B2A' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <Bot className="w-6 h-6 text-[#0787E8]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm text-white">Spirit AI Guide</h3>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-[#0787E8] text-white">
                    LIVE
                  </span>
                </div>
                <p className="text-[11px] text-[#D5E2D7]">Instant Tour & Itinerary Answers</p>
              </div>
            </div>
            <button
              onClick={() => setShowChatbot(false)}
              className="p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs bg-[#F3F5F4]/60">
            {chatMessages.map(msg => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-[#183B2A] flex items-center justify-center text-[#0787E8] flex-shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] rounded-2xl p-3.5 leading-relaxed shadow-sm whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-[#0787E8] text-white rounded-br-xs'
                      : 'bg-white text-[#183B2A] border border-gray-100 rounded-bl-xs'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className={`block text-[9px] mt-1 text-right ${msg.sender === 'user' ? 'text-white/70' : 'text-gray-400'}`}>
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-gray-500">
                <div className="w-7 h-7 rounded-full bg-[#183B2A] flex items-center justify-center text-[#0787E8] flex-shrink-0">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                </div>
                <div className="bg-white px-3 py-2 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick FAQ Chips */}
          <div className="px-3 py-2 bg-white border-t border-gray-100 overflow-x-auto whitespace-nowrap flex gap-1.5 no-scrollbar">
            {FAQ_SUGGESTIONS.map((faq, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(faq)}
                className="inline-block px-2.5 py-1 rounded-full text-[11px] bg-[#E5EFE5] text-[#183B2A] hover:bg-[#0787E8] hover:text-white transition-colors flex-shrink-0 font-medium"
              >
                {faq}
              </button>
            ))}
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about packages, prices, pickups..."
              className="flex-1 px-3.5 py-2.5 rounded-full border border-gray-200 text-xs text-[#183B2A] focus:outline-none focus:border-[#0787E8] bg-gray-50"
            />
            <button
              onClick={() => handleSendMessage()}
              className="p-2.5 rounded-full text-white transition-colors"
              style={{ backgroundColor: '#0787E8' }}
              title="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Rate Us Modal */}
      {showRatingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowRatingModal(false)}
              className="absolute top-5 right-5 p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {ratingSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#E5EFE5] text-[#183B2A] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-[#0787E8]" />
                </div>
                <h3 className="text-xl font-bold text-[#183B2A]">Review Submitted!</h3>
                <p className="text-sm text-[#426D4A] max-w-xs mx-auto">
                  Thank you for sharing your experience with Spirit Adventures. Your feedback helps fellow travelers explore with confidence.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRatingSubmit} className="space-y-4">
                <div className="text-center">
                  <div className="inline-flex p-2 rounded-2xl bg-[#E5EFE5] text-[#183B2A] mb-3">
                    <Star className="w-6 h-6 text-[#FF9D42] fill-[#FF9D42]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#183B2A]">Rate Spirit Adventures</h3>
                  <p className="text-xs text-[#426D4A] mt-1">
                    How was your journey, tour coordinator support, and accommodation?
                  </p>
                </div>

                {/* Interactive Star Selection */}
                <div className="flex items-center justify-center gap-2 py-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setRatingHover(star)}
                      onMouseLeave={() => setRatingHover(0)}
                      onClick={() => setRating(star)}
                      className="p-1 focus:outline-none transition-transform hover:scale-125"
                    >
                      <Star
                        className={`w-8 h-8 transition-colors ${
                          (ratingHover || rating) >= star
                            ? 'text-[#FF9D42] fill-[#FF9D42]'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#183B2A] mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={reviewerName}
                    onChange={(e) => setReviewerName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#0787E8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#183B2A] mb-1">Tour Package Attended</label>
                  <select
                    value={reviewerTour}
                    onChange={(e) => setReviewerTour(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#0787E8] bg-white"
                  >
                    <option value="Coorg Getaway">Coorg Getaway</option>
                    <option value="Goa Beach Trip">Goa Beach Trip</option>
                    <option value="Hampi, Gokarna & Dandeli">Hampi, Gokarna & Dandeli</option>
                    <option value="Kodaikanal, Ooty & Mysore">Kodaikanal, Ooty & Mysore</option>
                    <option value="Chikmagalur Coffee Trail">Chikmagalur Coffee Trail</option>
                    <option value="Dandeli River Rafting">Dandeli River Rafting</option>
                    <option value="Custom Group Tour">Custom Group Tour</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#183B2A] mb-1">Your Experience & Feedback</label>
                  <textarea
                    rows={3}
                    required
                    value={reviewerComments}
                    onChange={(e) => setReviewerComments(e.target.value)}
                    placeholder="Tell us about the bonfire night, transportation, meals, sightseeing..."
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#0787E8]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full text-xs font-bold text-white transition-colors shadow-md"
                  style={{ backgroundColor: '#0787E8' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#056DBB')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0787E8')}
                >
                  Submit Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
