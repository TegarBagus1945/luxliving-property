export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Ornamen Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge Intro */}
        <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
          Marketplace Properti Premium #1
        </span>

        {/* Headline Utama */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Temukan Hunian Mewah & Impian Masa Depan
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-slate-400 text-base sm:text-xl max-w-2xl mx-auto">
          Jelajahi ribuan pilihan rumah, apartemen, dan villa eksklusif di lokasi paling strategis dengan proses aman dan mudah.
        </p>

        {/* Search / Filter Box */}
        <div className="mt-10 max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 p-4 sm:p-6 rounded-2xl shadow-2xl backdrop-blur-xl">
          <form className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            
            {/* Input Lokasi */}
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                Lokasi
              </label>
              <input
                type="text"
                placeholder="Cari Jakarta, Bali, Bandung..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm transition"
              />
            </div>

            {/* Select Tipe Properti */}
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">
                Tipe Properti
              </label>
              <select className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 focus:outline-none focus:border-emerald-500 text-sm transition">
                <option value="">Semua Tipe</option>
                <option value="rumah">Rumah Minimalis</option>
                <option value="apartemen">Apartemen</option>
                <option value="villa">Villa Mewah</option>
              </select>
            </div>

            {/* Tombol Cari */}
            <div className="flex items-end">
              <button
                type="button"
                className="w-full py-3 px-6 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold rounded-xl transition shadow-lg shadow-emerald-400/20 text-sm"
              >
                Cari Properti
              </button>
            </div>

          </form>
        </div>

        {/* Stat Singkat */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto border-t border-slate-800/80 pt-8">
          <div>
            <h4 className="text-2xl font-bold text-white">1,200+</h4>
            <p className="text-xs text-slate-400 mt-1">Properti Terdaftar</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-white">450+</h4>
            <p className="text-xs text-slate-400 mt-1">Agen Profesional</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-2xl font-bold text-white">99%</h4>
            <p className="text-xs text-slate-400 mt-1">Klien Puas</p>
          </div>
        </div>

      </div>
    </section>
  );
}