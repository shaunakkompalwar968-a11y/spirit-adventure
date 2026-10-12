import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FALLBACK_PACKAGES } from '@/data/fallbackData';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Spirit Adventure | Premier Mountain & Trekking Expeditions',
  description: 'Specializing in high-altitude Himalayan treks, Swiss Alpine routes, Patagonia circuits, and Mount Kilimanjaro expeditions with certified UIAGM/IFMGA guides.',
  keywords: ['trekking agency', 'Everest Base Camp', 'Annapurna Circuit', 'Kilimanjaro', 'Patagonia W Trek', 'Swiss Alps Haute Route', 'adventure travel'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-[#183B2A]">
        <Navbar featuredPackages={FALLBACK_PACKAGES} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
