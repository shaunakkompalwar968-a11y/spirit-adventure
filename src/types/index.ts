export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
  description: string;
}

export interface Destination {
  id: number;
  name: string;
  country: string;
  slug: string;
  image_url: string;
  description: string;
  best_season: string;
  altitude: string;
  treks_count: number;
}

export interface ItineraryDay {
  day: number | string;
  title: string;
  description?: string;
  accommodation?: string;
  meals?: string;
  activities?: string[];
}

export interface TourPackage {
  id: number;
  title: string;
  slug: string;
  tagline: string;
  destination_name?: string;
  destination_slug?: string;
  destination?: Destination;
  category_name?: string;
  category_slug?: string;
  category?: Category;
  duration_days: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Strenuous' | 'Extreme' | string;
  max_altitude: string;
  group_size: string;
  price: number;
  discount_price?: number | null;
  rating: number;
  reviews_count: number;
  is_featured: boolean;
  hero_image: string;
  gallery?: string[];
  overview?: string;
  highlights?: string[];
  itinerary?: ItineraryDay[];
  included?: string[];
  excluded?: string[];
  upcoming_dates?: string[];
}

export interface BookingPayload {
  package_id: number;
  full_name: string;
  email: string;
  phone: string;
  start_date: string;
  travelers_count: number;
  special_requests?: string;
}

export interface BookingResponse {
  id?: number | string;
  booking_id?: string;
  package_title: string;
  full_name: string;
  email: string;
  phone?: string;
  start_date: string;
  travelers_count: number;
  total_price: number;
  status: string;
  message: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  package_interest?: string;
  message: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  role: string;
  rating: number;
  comment: string;
  tour_title: string;
}

export interface AgencyStats {
  years_experience: number;
  expeditions_completed: number;
  happy_explorers: number;
  expert_guides: number;
  safety_record_percentage: number;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: 'All' | 'Mountains' | 'Beaches' | 'Camping' | 'Adventure' | 'Videos';
  type: 'image' | 'video';
  src: string;
  poster?: string;
  caption?: string;
  location?: string;
}
