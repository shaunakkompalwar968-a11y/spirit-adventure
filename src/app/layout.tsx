import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
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
  title: 'Spirit Adventure | Explore the World, Without Limits',
  description: 'Premier travel and adventure agency based in Hyderabad. Curated weekend getaways, hill station retreats, beach adventures, and custom group holidays across South India with pickups in Hyderabad and Bangalore.',
  keywords: ['Spirit Adventures', 'travel agency Hyderabad', 'Coorg weekend getaway', 'Goa trip from Hyderabad', 'Hampi Gokarna Dandeli tour', 'Chikmagalur trip', 'Kodaikanal Ooty package', 'adventure tours India'],
  icons: {
    icon: '/logohead.png',
    shortcut: '/logohead.png',
    apple: '/logohead.png',
  },
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
        <FloatingActions />
      </body>
    </html>
  );
}
