import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
            LuxLiving.
          </span>
        </Link>

        {/* Menu Navigasi */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-emerald-400 transition-colors">
            Beranda
          </Link>

          <Link href="#properties" className="hover:text-emerald-400 transition-colors">
            Properti
          </Link>

          <Link href="#about" className="hover:text-emerald-400 transition-colors">
            Tentang Kami
          </Link>

          <Link href="#contact" className="hover:text-emerald-400 transition-colors">
            Kontak
          </Link>
        </nav>

        {/* Tombol CTA (Call to Action) */}
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-sm font-medium text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all font-semibold shadow-lg shadow-emerald-400/20">
            Hubungi Agen
          </button>
        </div>

      </div>
    </header>
  );
}