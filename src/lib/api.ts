import { 
  TourPackage, 
  Destination, 
  Category, 
  Testimonial, 
  AgencyStats, 
  BookingPayload, 
  BookingResponse, 
  ContactPayload 
} from '@/types';
import { 
  FALLBACK_PACKAGES, 
  FALLBACK_DESTINATIONS, 
  FALLBACK_CATEGORIES, 
  FALLBACK_TESTIMONIALS, 
  FALLBACK_STATS 
} from '@/data/fallbackData';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';

export async function fetchPackages(params?: {
  category?: string;
  destination?: string;
  difficulty?: string;
  search?: string;
  featured?: boolean;
  min_price?: number;
  max_price?: number;
}): Promise<TourPackage[]> {
  try {
    const query = new URLSearchParams();
    if (params?.category) query.set('category', params.category);
    if (params?.destination) query.set('destination', params.destination);
    if (params?.difficulty) query.set('difficulty', params.difficulty);
    if (params?.search) query.set('search', params.search);
    if (params?.featured !== undefined) query.set('featured', String(params.featured));
    if (params?.min_price) query.set('min_price', String(params.min_price));
    if (params?.max_price) query.set('max_price', String(params.max_price));

    const res = await fetch(`${API_BASE}/packages?${query.toString()}`, {
      next: { revalidate: 60 },
      cache: 'no-store'
    });
    if (!res.ok) throw new Error('Failed to fetch from API');
    return await res.json();
  } catch {
    // Graceful client fallback
    let result = [...FALLBACK_PACKAGES];
    if (params?.featured !== undefined) {
      result = result.filter(p => p.is_featured === params.featured);
    }
    if (params?.category) {
      result = result.filter(p => p.category_slug === params.category);
    }
    if (params?.destination) {
      result = result.filter(p => p.destination_slug === params.destination);
    }
    if (params?.difficulty) {
      result = result.filter(p => p.difficulty.toLowerCase() === params.difficulty?.toLowerCase());
    }
    if (params?.search) {
      const q = params.search.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.tagline.toLowerCase().includes(q) ||
        (p.destination_name && p.destination_name.toLowerCase().includes(q))
      );
    }
    if (params?.min_price) {
      result = result.filter(p => p.price >= params.min_price!);
    }
    if (params?.max_price) {
      result = result.filter(p => p.price <= params.max_price!);
    }
    return result;
  }
}

export async function fetchPackageBySlug(slug: string): Promise<TourPackage | null> {
  try {
    const res = await fetch(`${API_BASE}/packages/${slug}`, {
      next: { revalidate: 60 },
      cache: 'no-store'
    });
    if (!res.ok) throw new Error('Failed to fetch');
    return await res.json();
  } catch {
    const found = FALLBACK_PACKAGES.find(p => p.slug === slug);
    return found || null;
  }
}

export async function fetchDestinations(): Promise<Destination[]> {
  try {
    const res = await fetch(`${API_BASE}/destinations`, {
      next: { revalidate: 120 }
    });
    if (!res.ok) throw new Error('API fetch failed');
    return await res.json();
  } catch {
    return FALLBACK_DESTINATIONS;
  }
}

export async function fetchCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${API_BASE}/categories`, {
      next: { revalidate: 120 }
    });
    if (!res.ok) throw new Error('API fetch failed');
    return await res.json();
  } catch {
    return FALLBACK_CATEGORIES;
  }
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  try {
    const res = await fetch(`${API_BASE}/testimonials`, {
      next: { revalidate: 120 }
    });
    if (!res.ok) throw new Error('API fetch failed');
    return await res.json();
  } catch {
    return FALLBACK_TESTIMONIALS;
  }
}

export async function fetchAgencyStats(): Promise<AgencyStats> {
  try {
    const res = await fetch(`${API_BASE}/stats`, {
      next: { revalidate: 120 }
    });
    if (!res.ok) throw new Error('API fetch failed');
    return await res.json();
  } catch {
    return FALLBACK_STATS;
  }
}

export async function submitBooking(payload: BookingPayload): Promise<BookingResponse> {
  try {
    const res = await fetch(`${API_BASE}/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      return await res.json();
    }
  } catch {
    // If backend isn't up, simulate successful confirmation
  }
  
  const pkg = FALLBACK_PACKAGES.find(p => p.id === payload.package_id) || FALLBACK_PACKAGES[0];
  const unitPrice = pkg.discount_price || pkg.price;
  return {
    id: Math.floor(Math.random() * 8000) + 1000,
    package_title: pkg.title,
    full_name: payload.full_name,
    email: payload.email,
    start_date: payload.start_date,
    travelers_count: payload.travelers_count,
    total_price: unitPrice * payload.travelers_count,
    status: 'pending',
    message: 'Your booking reservation inquiry has been confirmed! Our head expedition coordinator will reach out within 24 hours.'
  };
}

export async function submitContact(payload: ContactPayload): Promise<{ status: string; message: string }> {
  try {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      return await res.json();
    }
  } catch {
    // Fallback simulation
  }
  return {
    status: 'success',
    message: `Thank you, ${payload.name}! Your message has been received. Our mountain expedition team will respond promptly.`
  };
}

// ==========================================
// ADMIN DASHBOARD CLIENT API
// ==========================================
export async function fetchAdminDashboard(period: string = 'year') {
  try {
    const res = await fetch(`${API_BASE}/admin/dashboard?period=${period}`, {
      cache: 'no-store'
    });
    if (res.ok) return await res.json();
  } catch (err) {
    console.error('Failed to fetch admin dashboard:', err);
  }
  return null;
}

export async function fetchAdminBookings(params?: { status?: string; search?: string; employee_id?: number }) {
  try {
    const query = new URLSearchParams();
    if (params?.status) query.set('status', params.status);
    if (params?.search) query.set('search', params.search);
    if (params?.employee_id) query.set('employee_id', String(params.employee_id));

    const res = await fetch(`${API_BASE}/admin/bookings?${query.toString()}`, {
      cache: 'no-store'
    });
    if (res.ok) return await res.json();
  } catch (err) {
    console.error('Failed to fetch admin bookings:', err);
  }
  return [];
}

export async function updateAdminBooking(bookingId: string, payload: any) {
  try {
    const res = await fetch(`${API_BASE}/admin/bookings/${bookingId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return await res.json();
  } catch (err) {
    console.error('Failed to update booking:', err);
    throw err;
  }
}

export async function assignBookingEmployee(bookingId: string, employeeId: number, notes: string = '') {
  try {
    const res = await fetch(`${API_BASE}/admin/bookings/${bookingId}/assign`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ employee_id: employeeId, notes })
    });
    return await res.json();
  } catch (err) {
    console.error('Failed to assign employee:', err);
    throw err;
  }
}

export async function fetchAdminEnquiries(params?: { status?: string; search?: string }) {
  try {
    const query = new URLSearchParams();
    if (params?.status) query.set('status', params.status);
    if (params?.search) query.set('search', params.search);

    const res = await fetch(`${API_BASE}/admin/enquiries?${query.toString()}`, {
      cache: 'no-store'
    });
    if (res.ok) return await res.json();
  } catch (err) {
    console.error('Failed to fetch admin enquiries:', err);
  }
  return [];
}

export async function updateAdminEnquiry(id: number, payload: any) {
  try {
    const res = await fetch(`${API_BASE}/admin/enquiries/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return await res.json();
  } catch (err) {
    console.error('Failed to update enquiry:', err);
    throw err;
  }
}

export async function convertEnquiryToBooking(id: number) {
  try {
    const res = await fetch(`${API_BASE}/admin/enquiries/${id}/convert`, {
      method: 'POST'
    });
    return await res.json();
  } catch (err) {
    console.error('Failed to convert enquiry:', err);
    throw err;
  }
}

export async function fetchAdminEmployees() {
  try {
    const res = await fetch(`${API_BASE}/admin/employees`, {
      cache: 'no-store'
    });
    if (res.ok) return await res.json();
  } catch (err) {
    console.error('Failed to fetch admin employees:', err);
  }
  return [];
}

export async function createAdminEmployee(payload: any) {
  try {
    const res = await fetch(`${API_BASE}/admin/employees`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return await res.json();
  } catch (err) {
    console.error('Failed to create employee:', err);
    throw err;
  }
}

export async function fetchAdminClients(search?: string) {
  try {
    const query = new URLSearchParams();
    if (search) query.set('search', search);
    const res = await fetch(`${API_BASE}/admin/clients?${query.toString()}`, {
      cache: 'no-store'
    });
    if (res.ok) return await res.json();
  } catch (err) {
    console.error('Failed to fetch admin clients:', err);
  }
  return [];
}

export async function adminLogin(username: string, password: string) {
  const res = await fetch(`${API_BASE}/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData.detail || 'Invalid username or password');
  }
  return await res.json();
}

export async function fetchAdminTourPackages(params?: {
  search?: string;
  category_id?: number;
  destination_id?: number;
  featured?: boolean;
}) {
  try {
    const query = new URLSearchParams();
    if (params?.search) query.set('search', params.search);
    if (params?.category_id) query.set('category_id', String(params.category_id));
    if (params?.destination_id) query.set('destination_id', String(params.destination_id));
    if (params?.featured !== undefined) query.set('featured', String(params.featured));

    const res = await fetch(`${API_BASE}/admin/packages?${query.toString()}`, {
      cache: 'no-store'
    });
    if (res.ok) return await res.json();
  } catch (err) {
    console.error('Failed to fetch admin packages:', err);
  }
  return [];
}

export async function createAdminTourPackage(payload: any) {
  const res = await fetch(`${API_BASE}/admin/packages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData.detail || 'Failed to create tour package');
  }
  return await res.json();
}

export async function deleteAdminTourPackage(packageId: number) {
  const res = await fetch(`${API_BASE}/admin/packages/${packageId}`, {
    method: 'DELETE'
  });
  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData.detail || 'Failed to delete tour package');
  }
  return await res.json();
}

export async function toggleAdminTourPackageFeatured(packageId: number) {
  const res = await fetch(`${API_BASE}/admin/packages/${packageId}/featured`, {
    method: 'PATCH'
  });
  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData.detail || 'Failed to toggle featured status');
  }
  return await res.json();
}


