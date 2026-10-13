'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  MapPin, 
  CalendarCheck, 
  Users, 
  UserCog, 
  BarChart3, 
  FileText, 
  Bell, 
  Settings, 
  Search, 
  Calendar, 
  IndianRupee, 
  Coins, 
  TrendingUp, 
  CreditCard, 
  Mail, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Check, 
  ChevronRight, 
  RefreshCw, 
  Plus, 
  Eye, 
  EyeOff,
  UserCheck, 
  Filter, 
  Download, 
  Phone, 
  Sparkles, 
  Compass, 
  ShieldCheck, 
  Mountain,
  MoreVertical,
  Activity,
  ArrowUpRight,
  Radio,
  Lock,
  User,
  LogOut,
  Loader2
} from 'lucide-react';
import { 
  fetchAdminDashboard, 
  fetchAdminBookings, 
  updateAdminBooking, 
  assignBookingEmployee, 
  fetchAdminEnquiries, 
  updateAdminEnquiry, 
  convertEnquiryToBooking, 
  fetchAdminEmployees, 
  createAdminEmployee, 
  fetchAdminClients,
  adminLogin
} from '@/lib/api';

// Types
type AdminTab = 
  | 'dashboard' 
  | 'packages' 
  | 'bookings' 
  | 'clients' 
  | 'employees' 
  | 'analytics' 
  | 'reports' 
  | 'notifications' 
  | 'settings';

export default function AdminPage() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authChecking, setAuthChecking] = useState<boolean>(true);
  const [loginUsername, setLoginUsername] = useState<string>('spirit_adventure');
  const [loginPassword, setLoginPassword] = useState<string>('spirit@12');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string>('');
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  // Navigation State
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [dateFilter, setDateFilter] = useState('Last 12 Months');
  const [trendMetric, setTrendMetric] = useState<'bookings' | 'revenue'>('bookings');
  const [globalSearch, setGlobalSearch] = useState('');
  
  // Real-time synchronization state
  const [isLiveSync, setIsLiveSync] = useState(true);
  const [lastSyncTime, setLastSyncTime] = useState<string>('Just now');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [toastNotification, setToastNotification] = useState<string | null>(null);

  // Data states (100% Genuine, strictly from Database)
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [bookings, setBookings] = useState<any[]>([]);
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [employees, setEmployees] = useState<any[]>([]);
  const [clients, setClients] = useState<any[]>([]);
  
  // Bookings filter states
  const [bookingStatusFilter, setBookingStatusFilter] = useState<string>('all');
  const [selectedBooking, setSelectedBooking] = useState<any | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  
  // Enquiries filter & modal
  const [enquiryStatusFilter, setEnquiryStatusFilter] = useState<string>('all');
  const [selectedEnquiry, setSelectedEnquiry] = useState<any | null>(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  // New Employee modal
  const [employeeModalOpen, setEmployeeModalOpen] = useState(false);
  const [newEmployeeName, setNewEmployeeName] = useState('');
  const [newEmployeeRole, setNewEmployeeRole] = useState('Tour Coordinator');
  const [newEmployeeEmail, setNewEmployeeEmail] = useState('');
  const [newEmployeePhone, setNewEmployeePhone] = useState('');

  // Check login session on mount
  useEffect(() => {
    const token = localStorage.getItem('spirit_adventure_admin_token');
    if (token) {
      setIsAuthenticated(true);
    }
    setAuthChecking(false);
  }, []);

  // Handle Login submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);

    try {
      // Validate credentials against backend or direct match
      if (loginUsername.trim() === 'spirit_adventure' && loginPassword.trim() === 'spirit@12') {
        localStorage.setItem('spirit_adventure_admin_token', 'spirit_adventure_verified_admin_session');
        setIsAuthenticated(true);
        loadData();
      } else {
        // Attempt backend verification
        await adminLogin(loginUsername.trim(), loginPassword.trim());
        localStorage.setItem('spirit_adventure_admin_token', 'spirit_adventure_verified_admin_session');
        setIsAuthenticated(true);
        loadData();
      }
    } catch {
      setLoginError('Invalid credentials. Username is "spirit_adventure" and password is "spirit@12"');
    } finally {
      setIsLoggingIn(false);
    }
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem('spirit_adventure_admin_token');
    setIsAuthenticated(false);
    setLoginPassword('');
  };

  // Fetch all admin data
  const loadData = useCallback(async (isBackground = false) => {
    if (!isBackground) setIsRefreshing(true);
    try {
      const [dash, bList, eList, empList, cList] = await Promise.all([
        fetchAdminDashboard(dateFilter),
        fetchAdminBookings(),
        fetchAdminEnquiries(),
        fetchAdminEmployees(),
        fetchAdminClients()
      ]);

      if (dash) setDashboardData(dash);
      if (bList) {
        // Detect new real-time entry
        if (bookings.length > 0 && bList.length > bookings.length) {
          const newest = bList[0];
          setToastNotification(`🔔 New Real-Time Booking: ${newest.client_name} booked ${newest.package_title} (${newest.booking_id})`);
        }
        setBookings(bList);
      }
      if (eList) {
        if (enquiries.length > 0 && eList.length > enquiries.length) {
          const newest = eList[0];
          setToastNotification(`📩 New Real-Time Enquiry: ${newest.name} sent "${newest.subject}"`);
        }
        setEnquiries(eList);
      }
      if (empList) setEmployees(empList);
      if (cList) setClients(cList);

      setLastSyncTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    } catch (err) {
      console.error('Error loading admin data:', err);
    } finally {
      if (!isBackground) setIsRefreshing(false);
    }
  }, [dateFilter, bookings.length, enquiries.length]);

  // Initial load when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated, loadData]);

  // Real-time polling every 4.5 seconds when Live Sync is ON
  useEffect(() => {
    if (!isAuthenticated || !isLiveSync) return;
    const interval = setInterval(() => {
      loadData(true);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAuthenticated, isLiveSync, loadData]);

  // Auto-dismiss toast
  useEffect(() => {
    if (toastNotification) {
      const timer = setTimeout(() => setToastNotification(null), 6000);
      return () => clearTimeout(timer);
    }
  }, [toastNotification]);

  // Handle booking status update
  const handleUpdateBookingStatus = async (bookingId: string, status: string) => {
    try {
      await updateAdminBooking(bookingId, { status });
      await loadData();
      if (selectedBooking) {
        setSelectedBooking((prev: any) => ({ ...prev, status }));
      }
      setToastNotification(`Booking ${bookingId} status updated to ${status.toUpperCase()}`);
    } catch {
      alert('Failed to update booking status');
    }
  };

  // Handle booking employee assignment
  const handleAssignBookingEmployee = async (bookingId: string, employeeId: number) => {
    try {
      await assignBookingEmployee(bookingId, employeeId);
      await loadData();
      const emp = employees.find(e => e.id === employeeId);
      if (selectedBooking) {
        setSelectedBooking((prev: any) => ({ 
          ...prev, 
          assigned_employee_id: employeeId, 
          assigned_employee_name: emp?.name || 'Assigned' 
        }));
      }
      setToastNotification(`Assigned ${emp?.name || 'Employee'} to booking ${bookingId}`);
    } catch {
      alert('Failed to assign employee');
    }
  };

  // Handle enquiry status update
  const handleUpdateEnquiryStatus = async (id: number, status: string, notes?: string, followUpDate?: string) => {
    try {
      await updateAdminEnquiry(id, { status, notes, follow_up_date: followUpDate });
      await loadData();
      if (selectedEnquiry) {
        setSelectedEnquiry((prev: any) => ({ ...prev, status, notes: notes ?? prev.notes, follow_up_date: followUpDate ?? prev.follow_up_date }));
      }
      setToastNotification(`Enquiry #${id} updated successfully`);
    } catch {
      alert('Failed to update enquiry');
    }
  };

  // Handle convert enquiry to booking
  const handleConvertEnquiry = async (id: number) => {
    try {
      const res = await convertEnquiryToBooking(id);
      await loadData();
      setEnquiryModalOpen(false);
      setToastNotification(`🎉 Converted Enquiry #${id} into confirmed booking ${res.booking_id}!`);
      setActiveTab('bookings');
    } catch {
      alert('Failed to convert enquiry to booking');
    }
  };

  // Handle add employee
  const handleAddEmployee = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmployeeName || !newEmployeeEmail) return;
    try {
      await createAdminEmployee({
        name: newEmployeeName,
        email: newEmployeeEmail,
        phone: newEmployeePhone,
        role: newEmployeeRole
      });
      setEmployeeModalOpen(false);
      setNewEmployeeName('');
      setNewEmployeeEmail('');
      setNewEmployeePhone('');
      await loadData();
      setToastNotification(`Team member ${newEmployeeName} successfully added!`);
    } catch {
      alert('Failed to add employee');
    }
  };

  // Filtered Bookings for Table
  const filteredBookings = useMemo(() => {
    return bookings.filter(b => {
      const matchesStatus = bookingStatusFilter === 'all' || b.status.toLowerCase() === bookingStatusFilter.toLowerCase();
      const q = globalSearch.toLowerCase().trim();
      const matchesSearch = !q || 
        b.booking_id?.toLowerCase().includes(q) ||
        b.client_name?.toLowerCase().includes(q) ||
        b.email?.toLowerCase().includes(q) ||
        b.phone?.toLowerCase().includes(q) ||
        b.package_title?.toLowerCase().includes(q);
      return matchesStatus && matchesSearch;
    });
  }, [bookings, bookingStatusFilter, globalSearch]);

  // Filtered Enquiries for Table
  const filteredEnquiries = useMemo(() => {
    return enquiries.filter(enq => {
      const matchesStatus = enquiryStatusFilter === 'all' || enq.status.toLowerCase() === enquiryStatusFilter.toLowerCase();
      const q = globalSearch.toLowerCase().trim();
      const matchesSearch = !q ||
        enq.name?.toLowerCase().includes(q) ||
        enq.email?.toLowerCase().includes(q) ||
        enq.phone?.toLowerCase().includes(q) ||
        enq.subject?.toLowerCase().includes(q) ||
        enq.destination_preference?.toLowerCase().includes(q);
      return matchesStatus && matchesSearch;
    });
  }, [enquiries, enquiryStatusFilter, globalSearch]);

  // KPI Metrics Data (Strictly Genuine)
  const kpis = dashboardData?.kpis || {
    total_bookings: bookings.length,
    total_bookings_formatted: `${bookings.length}`,
    bookings_change: 'Live',
    revenue: 0,
    revenue_formatted: '₹0',
    revenue_change: 'Live',
    active_clients: clients.length,
    active_clients_formatted: `${clients.length}`,
    clients_change: 'Live',
    team_members: employees.length,
    team_change: 'Live'
  };

  // Actions Required Data (Strictly Genuine)
  const actionsRequired = dashboardData?.actions_required || {
    pending_bookings: bookings.filter(b => b.status === 'pending').length,
    pending_payments: bookings.filter(b => b.payment_status === 'pending').length,
    new_enquiries: enquiries.filter(e => e.status === 'new').length,
    follow_ups_due: enquiries.filter(e => e.status === 'follow_up').length
  };

  // Trends Data
  const trendsData = dashboardData?.trends || [
    { month: 'Jan', bookings: 0, revenue: 0 },
    { month: 'Feb', bookings: 0, revenue: 0 },
    { month: 'Mar', bookings: 0, revenue: 0 },
    { month: 'Apr', bookings: 0, revenue: 0 },
    { month: 'May', bookings: 0, revenue: 0 },
    { month: 'Jun', bookings: 0, revenue: 0 },
    { month: 'Jul', bookings: 0, revenue: 0 },
    { month: 'Aug', bookings: 0, revenue: 0 },
    { month: 'Sep', bookings: 0, revenue: 0 },
    { month: 'Oct', bookings: bookings.length, revenue: kpis.revenue },
    { month: 'Nov', bookings: 0, revenue: 0 },
    { month: 'Dec', bookings: 0, revenue: 0 }
  ];

  // Top Packages Data
  const topPackages = dashboardData?.top_packages || [];

  // Recent Activity Data
  const recentActivity = dashboardData?.recent_activity || [];

  // SVG Chart Calculations
  const chartHeight = 160;
  const chartWidth = 500;
  const maxVal = Math.max(
    trendMetric === 'bookings' 
      ? Math.max(...trendsData.map((d: any) => d.bookings), 10)
      : Math.max(...trendsData.map((d: any) => d.revenue), 50000),
    1
  );
  
  const points = trendsData.map((d: any, i: number) => {
    const x = 30 + (i * (chartWidth - 60)) / (trendsData.length - 1);
    const val = trendMetric === 'bookings' ? d.bookings : d.revenue;
    const y = chartHeight - (val / maxVal) * (chartHeight - 30) - 15;
    return { x, y, ...d };
  });

  const pathD = points.reduce((acc: string, pt: any, i: number, arr: any[]) => {
    if (i === 0) return `M ${pt.x} ${pt.y}`;
    const prev = arr[i - 1];
    const cpX = (prev.x + pt.x) / 2;
    return `${acc} C ${cpX} ${prev.y}, ${cpX} ${pt.y}, ${pt.x} ${pt.y}`;
  }, '');

  const areaD = `${pathD} L ${points[points.length - 1].x} ${chartHeight} L ${points[0].x} ${chartHeight} Z`;

  // =========================================================================
  // 1. AUTHENTICATION GATE SCREEN: LOGIN REQUIRED
  // =========================================================================
  if (authChecking) {
    return (
      <div className="min-h-screen bg-[#07192F] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#0066FF] animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#07192F] flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* Ambient background decorative orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#0066FF]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-[#0787E8]/20 blur-3xl pointer-events-none" />

        {/* Login Box */}
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-slate-100 relative z-10 animate-in fade-in zoom-in-95 duration-300">
          {/* Logo from Home Page on elevated card */}
          <div className="flex justify-center mb-6">
            <div className="p-3 px-5 bg-white rounded-2xl shadow-md border border-slate-200/80 inline-flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/assets/img/logo.png" 
                alt="Spirit Adventure" 
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Admin Portal Login</h2>
            <p className="text-xs text-slate-500 font-medium mt-1">Please authenticate to monitor live bookings & team operations.</p>
          </div>

          {loginError && (
            <div className="mb-5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Username Input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Admin Username</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  placeholder="spirit_adventure"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="spirit@12"
                  className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:bg-white transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Hint Notice */}
            <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-200/80 text-[11px] text-[#0066FF] font-medium flex items-center justify-between">
              <span>Username: <strong className="font-bold">spirit_adventure</strong></span>
              <span>Password: <strong className="font-bold">spirit@12</strong></span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3.5 rounded-xl text-xs font-bold text-white shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 bg-gradient-to-r from-[#0066FF] to-[#0787E8] hover:from-[#0052cc] hover:to-[#056dbb]"
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Admin Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Footer Back Link */}
          <div className="mt-6 text-center">
            <Link href="/" className="text-xs font-bold text-slate-500 hover:text-[#0066FF] transition-colors">
              ← Return to Spirit Adventure Home Page
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 2. AUTHENTICATED ADMIN DASHBOARD
  // =========================================================================
  return (
    <div className="flex h-screen bg-[#F4F7FB] font-sans overflow-hidden text-slate-800">
      {/* ============================================================== */}
      {/* 2.1 LEFT SIDEBAR: LOGO FROM HOME PAGE ON WHITE CARD            */}
      {/* ============================================================== */}
      <aside className="w-64 bg-[#07192F] flex flex-col justify-between shrink-0 shadow-2xl relative z-30 select-none">
        <div>
          {/* Top Brand Logo - Fetched directly from Home Page */}
          <div className="p-5 border-b border-white/10 flex items-center justify-center">
            <Link href="/" title="Spirit Adventure Home" className="p-2.5 px-4 bg-white rounded-2xl shadow-md border border-slate-100 inline-flex items-center justify-center group hover:scale-105 transition-transform">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/assets/img/logo.png" 
                alt="Spirit Adventure" 
                className="h-8 w-auto object-contain" 
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="p-3 space-y-1.5 mt-3">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'packages', label: 'Tour Packages', icon: MapPin },
              { id: 'bookings', label: 'Bookings', icon: CalendarCheck, badge: actionsRequired.pending_bookings },
              { id: 'clients', label: 'Clients & Enquiries', icon: Users, badge: actionsRequired.new_enquiries },
              { id: 'employees', label: 'Employees', icon: UserCog },
              { id: 'analytics', label: 'Booking Analytics', icon: BarChart3 },
              { id: 'reports', label: 'Reports', icon: FileText },
              { id: 'notifications', label: 'Notifications', icon: Bell, badge: actionsRequired.pending_bookings + actionsRequired.new_enquiries },
              { id: 'settings', label: 'Settings', icon: Settings },
            ].map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as AdminTab)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-xs transition-all duration-200 group ${
                    isActive
                      ? 'bg-[#0066FF] text-white shadow-lg shadow-blue-600/30 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      isActive 
                        ? 'bg-white text-[#0066FF]' 
                        : 'bg-[#0066FF]/20 text-[#38BDF8] border border-blue-400/30'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Bottom Watermark Artwork & Logout */}
        <div className="p-5 border-t border-white/5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-semibold bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-800/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>Real-Time Engine Live</span>
            </div>

            <button
              onClick={handleLogout}
              className="p-1.5 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-white/5 transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[12px] italic font-serif text-blue-200/70 text-center">More Adventures • Less Ordinary</p>
        </div>
      </aside>

      {/* ============================================================== */}
      {/* 2.2 MAIN CONTENT AREA                                          */}
      {/* ============================================================== */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header Navbar */}
        <header className="h-16 bg-white border-b border-slate-200/80 flex items-center justify-between px-6 shrink-0 z-20">
          {/* Global Search Bar */}
          <div className="flex-1 max-w-xl relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
              placeholder="Search by booking ID, customer name, package or phone..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:bg-white transition-all"
            />
          </div>

          {/* Right Header Controls */}
          <div className="flex items-center gap-3.5">
            {/* Live Sync Status Pill */}
            <button
              onClick={() => setIsLiveSync(!isLiveSync)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                isLiveSync 
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100' 
                  : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
              }`}
              title="Toggle Live Sync"
            >
              <span className={`w-2 h-2 rounded-full ${isLiveSync ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
              <span>{isLiveSync ? 'Live Sync: ON' : 'Live Sync: Paused'}</span>
            </button>

            {/* Manual Refresh Button */}
            <button
              onClick={() => loadData()}
              disabled={isRefreshing}
              className="p-2 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors border border-slate-200"
              title={`Last refreshed at ${lastSyncTime}`}
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-[#0066FF]' : ''}`} />
            </button>

            {/* Notification Bell */}
            <button 
              onClick={() => setActiveTab('notifications')}
              className="relative p-2 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors border border-slate-200"
            >
              <Bell className="w-4 h-4" />
              {(actionsRequired.pending_bookings + actionsRequired.new_enquiries) > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#0066FF] text-white text-[9px] font-bold flex items-center justify-center shadow-sm">
                  {actionsRequired.pending_bookings + actionsRequired.new_enquiries}
                </span>
              )}
            </button>

            {/* Divider */}
            <div className="h-6 w-px bg-slate-200" />

            {/* Admin User Profile with Logout */}
            <div className="flex items-center gap-3 pl-1">
              <div className="w-9 h-9 rounded-full bg-blue-100 border border-blue-300 text-[#0066FF] font-black text-xs flex items-center justify-center">
                SA
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-xs font-bold text-slate-900 leading-tight">spirit_adventure</p>
                <p className="text-[10px] text-slate-500 font-medium leading-none">Super Admin</p>
              </div>
              <button
                onClick={handleLogout}
                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                title="Log Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Real-Time Live Toast Notification */}
        {toastNotification && (
          <div className="bg-gradient-to-r from-[#0066FF] to-[#0787E8] text-white px-6 py-2.5 text-xs font-semibold flex items-center justify-between shadow-lg animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>{toastNotification}</span>
            </div>
            <button 
              onClick={() => setToastNotification(null)}
              className="text-white/80 hover:text-white text-xs underline font-normal"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Scrollable Main Workspace */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6">
          {/* ============================================================== */}
          {/* VIEW: DASHBOARD OVERVIEW                                       */}
          {/* ============================================================== */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">Dashboard Overview</h2>
                  <p className="text-xs text-slate-500 font-medium">Real-time incoming reservations, active bookings, and genuine agency metrics.</p>
                </div>

                {/* Date Filter Dropdown */}
                <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-xs">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <select
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    className="bg-transparent text-xs font-semibold text-slate-700 focus:outline-none cursor-pointer"
                  >
                    <option value="Today">Today</option>
                    <option value="This Week">This Week</option>
                    <option value="This Month">This Month</option>
                    <option value="Last 12 Months">Last 12 Months</option>
                  </select>
                </div>
              </div>

              {/* 4 KPI Metrics Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* 1. Total Bookings */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-sky-50 text-[#0787E8] flex items-center justify-center">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <CalendarCheck className="w-5 h-5 text-slate-300" />
                  </div>
                  <div className="mt-4">
                    <p className="text-xs font-semibold text-slate-500">Total Bookings</p>
                    <h3 className="text-2xl font-black text-slate-900 mt-0.5">{kpis.total_bookings_formatted}</h3>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                    <span>● Live Count</span>
                    <span className="text-slate-400 font-normal">from active database</span>
                  </div>
                </div>

                {/* 2. Revenue */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center font-bold text-lg">
                      ₹
                    </div>
                    <Coins className="w-5 h-5 text-slate-300" />
                  </div>
                  <div className="mt-4">
                    <p className="text-xs font-semibold text-slate-500">Revenue</p>
                    <h3 className="text-2xl font-black text-slate-900 mt-0.5">{kpis.revenue_formatted}</h3>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                    <span>● Confirmed Payments</span>
                    <span className="text-slate-400 font-normal">genuine revenue</span>
                  </div>
                </div>

                {/* 3. Active Clients */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                    <Users className="w-5 h-5 text-slate-300" />
                  </div>
                  <div className="mt-4">
                    <p className="text-xs font-semibold text-slate-500">Active Clients</p>
                    <h3 className="text-2xl font-black text-slate-900 mt-0.5">{kpis.active_clients_formatted}</h3>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                    <span>● Unique Clients</span>
                    <span className="text-slate-400 font-normal">registered travelers</span>
                  </div>
                </div>

                {/* 4. Team Members */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center">
                      <UserCog className="w-5 h-5" />
                    </div>
                    <UserCheck className="w-5 h-5 text-slate-300" />
                  </div>
                  <div className="mt-4">
                    <p className="text-xs font-semibold text-slate-500">Team Members</p>
                    <h3 className="text-2xl font-black text-slate-900 mt-0.5">{kpis.team_members}</h3>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-blue-600">
                    <span>● Active Staff</span>
                    <span className="text-slate-400 font-normal">registered coordinators</span>
                  </div>
                </div>
              </div>

              {/* Middle Row: Actions Required & Booking & Revenue Trends */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Panel: Actions Required (2x2 Grid) */}
                <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-1.5 rounded-lg bg-blue-50 text-[#0066FF]">
                      <FileText className="w-4 h-4" />
                    </div>
                    <h3 className="font-extrabold text-sm text-slate-900">Actions Required</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3.5">
                    {/* 1. Pending Bookings */}
                    <div 
                      onClick={() => { setActiveTab('bookings'); setBookingStatusFilter('pending'); }}
                      className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:border-blue-300 hover:bg-blue-50/40 transition-all cursor-pointer group flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <div className="w-6 h-6 rounded-full bg-white text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="text-[11px] font-semibold text-slate-600">Pending Bookings</p>
                        <h4 className="text-xl font-black text-slate-900 mt-0.5">{actionsRequired.pending_bookings}</h4>
                        <p className="text-[10px] text-slate-400 mt-0.5">need confirmation</p>
                      </div>
                    </div>

                    {/* 2. Pending Payments */}
                    <div 
                      onClick={() => { setActiveTab('bookings'); setBookingStatusFilter('pending'); }}
                      className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:border-blue-300 hover:bg-blue-50/40 transition-all cursor-pointer group flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between">
                        <CreditCard className="w-4 h-4 text-blue-500" />
                        <div className="w-6 h-6 rounded-full bg-white text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="text-[11px] font-semibold text-slate-600">Pending Payments</p>
                        <h4 className="text-xl font-black text-slate-900 mt-0.5">{actionsRequired.pending_payments}</h4>
                        <p className="text-[10px] text-slate-400 mt-0.5">overdue payments</p>
                      </div>
                    </div>

                    {/* 3. New Enquiries */}
                    <div 
                      onClick={() => { setActiveTab('clients'); setEnquiryStatusFilter('new'); }}
                      className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:border-blue-300 hover:bg-blue-50/40 transition-all cursor-pointer group flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between">
                        <Mail className="w-4 h-4 text-blue-500" />
                        <div className="w-6 h-6 rounded-full bg-white text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="text-[11px] font-semibold text-slate-600">New Enquiries</p>
                        <h4 className="text-xl font-black text-slate-900 mt-0.5">{actionsRequired.new_enquiries}</h4>
                        <p className="text-[10px] text-slate-400 mt-0.5">need response</p>
                      </div>
                    </div>

                    {/* 4. Follow-up Due */}
                    <div 
                      onClick={() => { setActiveTab('clients'); setEnquiryStatusFilter('follow_up'); }}
                      className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:border-blue-300 hover:bg-blue-50/40 transition-all cursor-pointer group flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <div className="w-6 h-6 rounded-full bg-white text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="text-[11px] font-semibold text-slate-600">Follow-up Due</p>
                        <h4 className="text-xl font-black text-slate-900 mt-0.5">{actionsRequired.follow_ups_due}</h4>
                        <p className="text-[10px] text-slate-400 mt-0.5">today / this week</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Panel: Booking & Revenue Trends Chart */}
                <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-blue-50 text-[#0066FF]">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <h3 className="font-extrabold text-sm text-slate-900">Booking & Revenue Trends</h3>
                    </div>

                    {/* Toggle Metric Dropdown */}
                    <select
                      value={trendMetric}
                      onChange={(e) => setTrendMetric(e.target.value as any)}
                      className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 cursor-pointer focus:outline-none"
                    >
                      <option value="bookings">Bookings</option>
                      <option value="revenue">Revenue (₹)</option>
                    </select>
                  </div>

                  {/* SVG Chart Canvas */}
                  <div className="w-full relative pt-4">
                    <svg viewBox={`0 0 ${chartWidth} ${chartHeight + 30}`} className="w-full h-48 overflow-visible">
                      <defs>
                        <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0066FF" stopOpacity="0.22" />
                          <stop offset="100%" stopColor="#0066FF" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Horizontal Grid lines */}
                      {[0, 0.25, 0.5, 0.75, 1.0].map((ratio) => {
                        const val = Math.round(maxVal * ratio);
                        const y = chartHeight - ratio * (chartHeight - 30) - 15;
                        return (
                          <g key={ratio}>
                            <line x1="25" y1={y} x2={chartWidth - 15} y2={y} stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
                            <text x="5" y={y + 3} fill="#94A3B8" fontSize="9" fontWeight="600">
                              {trendMetric === 'bookings' ? val : `₹${Math.round(val / 1000)}k`}
                            </text>
                          </g>
                        );
                      })}

                      {/* Gradient Fill under line */}
                      <path d={areaD} fill="url(#blueGradient)" />

                      {/* Smooth curved trend line */}
                      <path d={pathD} fill="none" stroke="#0066FF" strokeWidth="2.5" strokeLinecap="round" />

                      {/* Data Dots & X-Axis Labels */}
                      {points.map((pt: any, i: number) => (
                        <g key={i} className="group cursor-pointer">
                          <circle
                            cx={pt.x}
                            cy={pt.y}
                            r="3.5"
                            fill="#0066FF"
                            stroke="#FFFFFF"
                            strokeWidth="2"
                            className="transition-transform group-hover:scale-150"
                          />
                          <text x={pt.x} y={chartHeight + 20} textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="600">
                            {pt.month}
                          </text>

                          <title>{`${pt.month}: ${trendMetric === 'bookings' ? `${pt.bookings} bookings` : `₹${pt.revenue.toLocaleString()}`}`}</title>
                        </g>
                      ))}
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Top Tour Packages & Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Top Tour Packages */}
                <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-blue-50 text-[#0066FF]">
                        <Mountain className="w-4 h-4" />
                      </div>
                      <h3 className="font-extrabold text-sm text-slate-900">Top Tour Packages</h3>
                    </div>

                    <span className="text-xs font-semibold text-slate-500">Live Popularity</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          <th className="pb-3 w-8">#</th>
                          <th className="pb-3">Package</th>
                          <th className="pb-3 text-center">Bookings</th>
                          <th className="pb-3 text-right">Revenue</th>
                          <th className="pb-3 w-6"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs">
                        {topPackages.length === 0 ? (
                          <tr>
                            <td colSpan={5} className="py-8 text-center text-slate-400">
                              No tour bookings recorded yet. New customer entries will rank here automatically.
                            </td>
                          </tr>
                        ) : (
                          topPackages.map((pkg: any) => (
                            <tr key={pkg.rank} className="hover:bg-slate-50/60 transition-colors group">
                              <td className="py-3 font-bold text-slate-400">{pkg.rank}</td>
                              <td className="py-3">
                                <div className="flex items-center gap-3">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img
                                    src={pkg.image}
                                    alt={pkg.title}
                                    className="w-10 h-10 rounded-xl object-cover shrink-0 shadow-xs border border-slate-200"
                                  />
                                  <div>
                                    <p className="font-bold text-slate-900">{pkg.title}</p>
                                    <p className="text-[10px] text-slate-400">{pkg.duration} • {pkg.destination}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="py-3 text-center font-bold text-slate-700">{pkg.bookings}</td>
                              <td className="py-3 text-right font-black text-slate-900">
                                ₹{pkg.revenue.toLocaleString()}
                              </td>
                              <td className="py-3 text-right">
                                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Right: Recent Activity Feed */}
                <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-blue-50 text-[#0066FF]">
                          <Bell className="w-4 h-4" />
                        </div>
                        <h3 className="font-extrabold text-sm text-slate-900">Recent Activity</h3>
                      </div>
                      <button 
                        onClick={() => setActiveTab('bookings')}
                        className="text-xs font-bold text-[#0066FF] hover:underline"
                      >
                        View All
                      </button>
                    </div>

                    <div className="space-y-3.5">
                      {recentActivity.length === 0 ? (
                        <div className="py-8 text-center text-slate-400 text-xs">
                          <Activity className="w-8 h-8 mx-auto text-slate-300 mb-2" />
                          <p>No recent activity logs yet.</p>
                          <p className="text-[10px] mt-1">Live customer bookings & enquiries will stream here in real-time.</p>
                        </div>
                      ) : (
                        recentActivity.map((act: any) => {
                          let iconBg = 'bg-emerald-50 text-emerald-600';
                          let IconComp = CheckCircle2;
                          if (act.action_type === 'payment_received') {
                            iconBg = 'bg-blue-50 text-blue-600';
                            IconComp = CreditCard;
                          } else if (act.action_type === 'enquiry_created') {
                            iconBg = 'bg-purple-50 text-purple-600';
                            IconComp = Mail;
                          } else if (act.action_type === 'follow_up_due') {
                            iconBg = 'bg-amber-50 text-amber-600';
                            IconComp = Clock;
                          } else if (act.action_type === 'booking_cancelled') {
                            iconBg = 'bg-rose-50 text-rose-600';
                            IconComp = XCircle;
                          }

                          return (
                            <div key={act.id} className="flex items-start justify-between gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors">
                              <div className="flex items-start gap-3">
                                <div className={`w-8 h-8 rounded-full ${iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
                                  <IconComp className="w-4 h-4" />
                                </div>
                                <div>
                                  <h4 className="font-bold text-xs text-slate-900 leading-tight">{act.title}</h4>
                                  <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{act.description}</p>
                                </div>
                              </div>
                              <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap shrink-0">{act.time_ago}</span>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Genuine DB live stream</span>
                    <span className="font-bold text-slate-600">Synced {lastSyncTime}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* VIEW: BOOKINGS MANAGEMENT (Full Table & Real-Time Entries)     */}
          {/* ============================================================== */}
          {activeTab === 'bookings' && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">Booking Management</h2>
                  <p className="text-xs text-slate-500 font-medium">Real-time incoming reservations with client assignments, status controls, and payment auditing.</p>
                </div>

                {/* Status Filter Tabs */}
                <div className="flex items-center gap-1.5 bg-white border border-slate-200 p-1 rounded-2xl shadow-xs">
                  {['all', 'pending', 'confirmed', 'completed', 'cancelled'].map(st => (
                    <button
                      key={st}
                      onClick={() => setBookingStatusFilter(st)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition-all ${
                        bookingStatusFilter === st
                          ? 'bg-[#0066FF] text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bookings Table */}
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        <th className="py-3.5 px-4">Booking ID</th>
                        <th className="py-3.5 px-4">Client</th>
                        <th className="py-3.5 px-4">Tour Package</th>
                        <th className="py-3.5 px-4">Travel Date</th>
                        <th className="py-3.5 px-4">Assigned To</th>
                        <th className="py-3.5 px-4 text-right">Amount</th>
                        <th className="py-3.5 px-4 text-center">Payment</th>
                        <th className="py-3.5 px-4 text-center">Status</th>
                        <th className="py-3.5 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs">
                      {filteredBookings.length === 0 ? (
                        <tr>
                          <td colSpan={9} className="py-12 text-center text-slate-400">
                            <CalendarCheck className="w-10 h-10 mx-auto text-slate-300 mb-2" />
                            <p className="font-bold">No real-time bookings recorded yet.</p>
                            <p className="text-[11px] mt-1">When customers submit bookings on the website, they will appear here live with sound & toast alerts.</p>
                          </td>
                        </tr>
                      ) : (
                        filteredBookings.map(b => (
                          <tr key={b.id} className="hover:bg-slate-50/70 transition-colors">
                            <td className="py-3.5 px-4 font-mono font-bold text-[#0066FF]">
                              {b.booking_id}
                            </td>

                            <td className="py-3.5 px-4">
                              <p className="font-bold text-slate-900">{b.client_name}</p>
                              <p className="text-[10px] text-slate-400">{b.phone} • {b.email}</p>
                            </td>

                            <td className="py-3.5 px-4">
                              <div className="flex items-center gap-2.5">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={b.package_image || '/assets/img/Testimonals/01.webp'}
                                  alt={b.package_title}
                                  className="w-8 h-8 rounded-lg object-cover shrink-0 border border-slate-200"
                                />
                                <span className="font-semibold text-slate-800 line-clamp-1 max-w-[180px]">
                                  {b.package_title}
                                </span>
                              </div>
                            </td>

                            <td className="py-3.5 px-4 text-slate-600 font-medium">
                              {b.start_date}
                              <span className="block text-[10px] text-slate-400">{b.travelers_count} Travelers</span>
                            </td>

                            <td className="py-3.5 px-4">
                              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-[11px]">
                                <UserCheck className="w-3 h-3 text-blue-600" />
                                <span>{b.assigned_employee_name}</span>
                              </div>
                            </td>

                            <td className="py-3.5 px-4 text-right font-black text-slate-900">
                              ₹{b.total_price.toLocaleString()}
                            </td>

                            <td className="py-3.5 px-4 text-center">
                              <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                b.payment_status === 'paid'
                                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                  : b.payment_status === 'partial'
                                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                  : b.payment_status === 'refunded'
                                  ? 'bg-slate-100 text-slate-600 border border-slate-200'
                                  : 'bg-amber-50 text-amber-700 border border-amber-200'
                              }`}>
                                {b.payment_status}
                              </span>
                            </td>

                            <td className="py-3.5 px-4 text-center">
                              <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold capitalize ${
                                b.status === 'confirmed'
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : b.status === 'completed'
                                  ? 'bg-blue-100 text-blue-800'
                                  : b.status === 'cancelled'
                                  ? 'bg-rose-100 text-rose-800'
                                  : 'bg-amber-100 text-amber-800 animate-pulse'
                              }`}>
                                {b.status}
                              </span>
                            </td>

                            <td className="py-3.5 px-4 text-right">
                              <button
                                onClick={() => { setSelectedBooking(b); setBookingModalOpen(true); }}
                                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#0066FF] font-bold text-slate-700 transition-colors"
                              >
                                Manage
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* VIEW: CLIENTS & ENQUIRIES                                      */}
          {/* ============================================================== */}
          {activeTab === 'clients' && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">Clients & Enquiries</h2>
                  <p className="text-xs text-slate-500 font-medium">Real-time incoming enquiries from website contact forms and the custom tour planner.</p>
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center gap-1.5 bg-white border border-slate-200 p-1 rounded-2xl shadow-xs">
                  {['all', 'new', 'in_progress', 'follow_up', 'converted'].map(st => (
                    <button
                      key={st}
                      onClick={() => setEnquiryStatusFilter(st)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition-all ${
                        enquiryStatusFilter === st
                          ? 'bg-[#0066FF] text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {st.replace('_', ' ')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Enquiries Grid Cards */}
              {filteredEnquiries.length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center text-slate-400 border border-slate-200">
                  <Mail className="w-10 h-10 mx-auto text-slate-300 mb-2" />
                  <p className="font-bold">No enquiries found.</p>
                  <p className="text-xs mt-1">When visitors submit inquiries on /contact or /customize, they will instantly land here.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredEnquiries.map(enq => (
                    <div key={enq.id} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                            enq.source === 'Custom Trip Planner'
                              ? 'bg-purple-100 text-purple-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {enq.source}
                          </span>

                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold capitalize ${
                            enq.status === 'new'
                              ? 'bg-emerald-100 text-emerald-800 animate-pulse'
                              : enq.status === 'converted'
                              ? 'bg-indigo-100 text-indigo-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}>
                            {enq.status.replace('_', ' ')}
                          </span>
                        </div>

                        <h3 className="font-extrabold text-slate-900 text-base">{enq.name}</h3>
                        <p className="text-xs text-slate-500 font-medium">{enq.phone || 'No phone'} • {enq.email}</p>

                        <div className="mt-3.5 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                          <p className="font-bold text-xs text-slate-800 line-clamp-1">{enq.subject}</p>
                          <p className="text-xs text-slate-600 mt-1 line-clamp-3 leading-relaxed whitespace-pre-line">{enq.message}</p>
                        </div>

                        {(enq.destination_preference || enq.budget) && (
                          <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-semibold text-slate-500">
                            {enq.destination_preference && (
                              <span className="px-2 py-1 rounded-lg bg-blue-50 text-[#0066FF] border border-blue-200">
                                📍 {enq.destination_preference}
                              </span>
                            )}
                            {enq.budget && (
                              <span className="px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                                💰 {enq.budget}
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs text-slate-500">
                          <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                          <span className="font-semibold text-slate-700">{enq.assigned_employee_name}</span>
                        </div>

                        <button
                          onClick={() => { setSelectedEnquiry(enq); setEnquiryModalOpen(true); }}
                          className="px-3.5 py-1.5 rounded-xl bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-colors"
                        >
                          Action
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ============================================================== */}
          {/* VIEW: EMPLOYEES & WORKLOAD                                     */}
          {/* ============================================================== */}
          {activeTab === 'employees' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">Employee & Coordinator Management</h2>
                  <p className="text-xs text-slate-500 font-medium">Add genuine tour coordinators and monitor real assigned clients and attributed revenue.</p>
                </div>

                <button
                  onClick={() => setEmployeeModalOpen(true)}
                  className="px-4 py-2 rounded-xl bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 flex items-center gap-2 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Team Member</span>
                </button>
              </div>

              {/* Employee Table */}
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        <th className="py-3.5 px-4">Employee</th>
                        <th className="py-3.5 px-4">Role</th>
                        <th className="py-3.5 px-4 text-center">Assigned Clients</th>
                        <th className="py-3.5 px-4 text-center">Active Bookings</th>
                        <th className="py-3.5 px-4 text-center">Confirmed</th>
                        <th className="py-3.5 px-4 text-center">Conversion</th>
                        <th className="py-3.5 px-4 text-right">Attributed Revenue</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs">
                      {employees.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="py-12 text-center text-slate-400">
                            <UserCog className="w-10 h-10 mx-auto text-slate-300 mb-2" />
                            <p className="font-bold">No employees added yet.</p>
                            <p className="text-[11px] mt-1">Click &ldquo;Add Team Member&rdquo; above to register your first coordinator or guide.</p>
                          </td>
                        </tr>
                      ) : (
                        employees.map(emp => (
                          <tr key={emp.id} className="hover:bg-slate-50/70 transition-colors">
                            <td className="py-3.5 px-4">
                              <div className="flex items-center gap-3">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={emp.avatar}
                                  alt={emp.name}
                                  className="w-9 h-9 rounded-full object-cover border border-slate-200"
                                />
                                <div>
                                  <p className="font-bold text-slate-900">{emp.name}</p>
                                  <p className="text-[10px] text-slate-400">{emp.email}</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 px-4 font-semibold text-slate-600">{emp.role}</td>
                            <td className="py-3.5 px-4 text-center font-bold text-slate-700">{emp.assigned_clients}</td>
                            <td className="py-3.5 px-4 text-center font-bold text-blue-600">{emp.active_bookings}</td>
                            <td className="py-3.5 px-4 text-center font-bold text-emerald-600">{emp.confirmed_bookings}</td>
                            <td className="py-3.5 px-4 text-center font-black text-slate-800">
                              {emp.conversion_rate.toFixed(1)}%
                            </td>
                            <td className="py-3.5 px-4 text-right font-black text-slate-900">
                              ₹{emp.revenue.toLocaleString()}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* VIEW: ANALYTICS & REPORTS                                      */}
          {/* ============================================================== */}
          {(activeTab === 'analytics' || activeTab === 'reports') && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">Booking Analytics & Reports</h2>
                  <p className="text-xs text-slate-500 font-medium">Real-time reports calculated strictly from confirmed customer submissions.</p>
                </div>

                <button
                  onClick={() => alert('Exporting live CSV report of reservations...')}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md flex items-center gap-2 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Export CSV Report</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Conversion Metric</p>
                  <h3 className="text-lg font-black text-slate-900 mt-2">Confirmed ÷ Enquiries</h3>
                  <p className="text-3xl font-black text-[#0066FF] mt-2">
                    {enquiries.length > 0 ? `${((bookings.filter(b => b.status === 'confirmed').length / enquiries.length) * 100).toFixed(1)}%` : '0%'}
                  </p>
                  <p className="text-xs text-slate-400 font-medium mt-1">Live customer conversion</p>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Average Deal Size</p>
                  <h3 className="text-lg font-black text-slate-900 mt-2">Per Booking Average</h3>
                  <p className="text-3xl font-black text-emerald-600 mt-2">
                    {bookings.length > 0 ? `₹${(kpis.revenue / bookings.length).toLocaleString()}` : '₹0'}
                  </p>
                  <p className="text-xs text-slate-400 font-medium mt-1">Real-time ticket value</p>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Clients</p>
                  <h3 className="text-lg font-black text-slate-900 mt-2">Unique Customers</h3>
                  <p className="text-3xl font-black text-violet-600 mt-2">{clients.length}</p>
                  <p className="text-xs text-slate-400 font-medium mt-1">Verified unique travelers</p>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* VIEW: TOUR PACKAGES                                            */}
          {/* ============================================================== */}
          {activeTab === 'packages' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Tour Packages Catalog</h2>
                <p className="text-xs text-slate-500 font-medium">Active travel packages available on the website.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {topPackages.map((pkg: any) => (
                  <div key={pkg.rank} className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={pkg.image} alt={pkg.title} className="w-full h-44 object-cover" />
                    <div className="p-5">
                      <h3 className="font-black text-slate-900 text-base">{pkg.title}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">{pkg.duration} • {pkg.destination}</p>
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] text-slate-400 font-bold uppercase">Real Bookings</p>
                          <p className="font-extrabold text-sm text-slate-800">{pkg.bookings}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] text-slate-400 font-bold uppercase">Revenue</p>
                          <p className="font-black text-sm text-[#0066FF]">₹{pkg.revenue.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* VIEW: NOTIFICATIONS & SETTINGS                                 */}
          {/* ============================================================== */}
          {(activeTab === 'notifications' || activeTab === 'settings') && (
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight capitalize">{activeTab}</h2>
              <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs max-w-2xl space-y-4">
                <p className="text-sm text-slate-600">
                  {activeTab === 'notifications' 
                    ? 'All operational alerts, incoming customer bookings, and payment notifications stream here in real time.' 
                    : 'System configuration, employee credentials, webhook callbacks, and production database controls.'}
                </p>
                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 text-xs text-[#0B1B3D] space-y-1">
                  <p className="font-bold">Production Configuration</p>
                  <p>Authenticated Admin: <strong>spirit_adventure</strong></p>
                  <p>Database: 100% Genuine Real-Time Entries (Zero Demo Data)</p>
                  <p>Real-Time Engine: Webhook & Polling active.</p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ============================================================== */}
      {/* 3. MODAL: MANAGE BOOKING RECORD                                */}
      {/* ============================================================== */}
      {bookingModalOpen && selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            <div className="px-6 py-4 bg-[#07192F] text-white flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-sm">Manage Booking {selectedBooking.booking_id}</h3>
                <p className="text-[11px] text-blue-200">{selectedBooking.package_title}</p>
              </div>
              <button
                onClick={() => setBookingModalOpen(false)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="font-bold text-slate-900">{selectedBooking.client_name}</p>
                <p className="text-slate-500 mt-0.5">{selectedBooking.phone} • {selectedBooking.email}</p>
                <p className="text-slate-600 mt-1 font-semibold">Travel Date: {selectedBooking.start_date} ({selectedBooking.travelers_count} Travelers)</p>
                <p className="text-slate-900 mt-1 font-black text-sm">Amount: ₹{selectedBooking.total_price.toLocaleString()}</p>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Booking Status</label>
                <div className="grid grid-cols-4 gap-2">
                  {['pending', 'confirmed', 'completed', 'cancelled'].map(st => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => handleUpdateBookingStatus(selectedBooking.booking_id, st)}
                      className={`py-2 rounded-xl text-center font-bold capitalize transition-all ${
                        selectedBooking.status === st
                          ? 'bg-[#0066FF] text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Assign Responsible Employee</label>
                <select
                  value={selectedBooking.assigned_employee_id || ''}
                  onChange={(e) => handleAssignBookingEmployee(selectedBooking.booking_id, Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-semibold text-slate-800"
                >
                  <option value="">Unassigned</option>
                  {employees.map(emp => (
                    <option key={emp.id} value={emp.id}>
                      {emp.name} ({emp.role})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setBookingModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 4. MODAL: MANAGE ENQUIRY RECORD                                */}
      {/* ============================================================== */}
      {enquiryModalOpen && selectedEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            <div className="px-6 py-4 bg-[#07192F] text-white flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-sm">Action Enquiry #{selectedEnquiry.id}</h3>
                <p className="text-[11px] text-blue-200">{selectedEnquiry.name}</p>
              </div>
              <button
                onClick={() => setEnquiryModalOpen(false)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="font-bold text-slate-900">{selectedEnquiry.subject}</p>
                <p className="text-slate-600 mt-1 whitespace-pre-line">{selectedEnquiry.message}</p>
                <p className="text-slate-500 mt-2 font-semibold">Contact: {selectedEnquiry.phone} • {selectedEnquiry.email}</p>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Update Status</label>
                <div className="grid grid-cols-3 gap-2">
                  {['new', 'follow_up', 'closed'].map(st => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => handleUpdateEnquiryStatus(selectedEnquiry.id, st)}
                      className={`py-2 rounded-xl text-center font-bold capitalize transition-all ${
                        selectedEnquiry.status === st
                          ? 'bg-[#0066FF] text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {st.replace('_', ' ')}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-emerald-900">Convert to Booking</h4>
                  <p className="text-[11px] text-emerald-700">Client agreed to package? Generate reservation now.</p>
                </div>
                <button
                  onClick={() => handleConvertEnquiry(selectedEnquiry.id)}
                  className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs"
                >
                  Convert
                </button>
              </div>
            </div>

            <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setEnquiryModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 5. MODAL: ADD NEW TEAM MEMBER                                  */}
      {/* ============================================================== */}
      {employeeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <form onSubmit={handleAddEmployee} className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            <div className="px-6 py-4 bg-[#07192F] text-white flex items-center justify-between">
              <h3 className="font-extrabold text-sm">Add Team Member</h3>
              <button
                type="button"
                onClick={() => setEmployeeModalOpen(false)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={newEmployeeName}
                  onChange={(e) => setNewEmployeeName(e.target.value)}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full p-2.5 rounded-xl border border-slate-200 font-semibold"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Role / Job Title</label>
                <input
                  type="text"
                  required
                  value={newEmployeeRole}
                  onChange={(e) => setNewEmployeeRole(e.target.value)}
                  placeholder="e.g. Senior Tour Coordinator"
                  className="w-full p-2.5 rounded-xl border border-slate-200 font-semibold"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={newEmployeeEmail}
                  onChange={(e) => setNewEmployeeEmail(e.target.value)}
                  placeholder="ramesh@spiritadventure.com"
                  className="w-full p-2.5 rounded-xl border border-slate-200 font-semibold"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Phone Number</label>
                <input
                  type="text"
                  value={newEmployeePhone}
                  onChange={(e) => setNewEmployeePhone(e.target.value)}
                  placeholder="+91 98480 00000"
                  className="w-full p-2.5 rounded-xl border border-slate-200 font-semibold"
                />
              </div>
            </div>

            <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setEmployeeModalOpen(false)}
                className="px-3.5 py-2 rounded-xl text-slate-600 font-bold text-xs"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-xs shadow-xs"
              >
                Save Member
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
