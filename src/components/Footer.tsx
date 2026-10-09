import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="text-center md:text-left">
          <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
            LuxLiving.
          </span>
          <p className="text-xs text-slate-500 mt-1">
            © {new Date().getFullYear()} LuxLiving Property Marketplace. All rights reserved.
          </p>
        </div>

        {/* Link Navigasi Cepat */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400">
          <Link href="/" className="hover:text-emerald-400 transition-colors">
            Beranda
          </Link>
          <Link href="/#properties" className="hover:text-emerald-400 transition-colors">
            Properti
          </Link>
          <Link href="#" className="hover:text-emerald-400 transition-colors">
            Tentang Kami
          </Link>
          <Link href="#" className="hover:text-emerald-400 transition-colors">
            Kontak
          </Link>
        </div>
      </div>
    </footer>
  );
}