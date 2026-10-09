import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';

// Setting Metadata SEO
export const metadata: Metadata = {
  title: 'LuxLiving - Marketplace Properti Premium',
  description: 'Temukan rumah, apartemen, dan villa impian Anda dengan pilihan terbaik dan lokasi strategis.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="bg-slate-950 text-white min-h-screen flex flex-col justify-between antialiased">
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}