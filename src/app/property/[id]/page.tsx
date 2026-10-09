import { DUMMY_PROPERTIES } from '@/data/properties';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Fungsi agar Next.js tahu ID properti mana saja yang harus di-prerender saat build
export async function generateStaticParams() {
  return DUMMY_PROPERTIES.map((property) => ({
    id: property.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { id } = await params;

  // Cari data properti berdasarkan ID dari URL
  const property = DUMMY_PROPERTIES.find((item) => item.id === id);

  // Jika ID tidak ditemukan di data dummy, tampilkan halaman 404
  if (!property) {
    notFound();
  }

  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Tombol Kembali */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 mb-6 transition-colors"
        >
          ← Kembali ke Beranda
        </Link>

        {/* Gambar Utama */}
        <div className="relative h-72 sm:h-[450px] w-full rounded-2xl overflow-hidden border border-slate-800">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-emerald-400 text-xs font-semibold px-4 py-1.5 rounded-full border border-emerald-500/20">
            {property.type}
          </span>
        </div>

        {/* Informasi Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Sisi Kiri: Detail Deskripsi */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <p className="text-2xl font-extrabold text-emerald-400 mb-2">{formattedPrice}</p>
              <h1 className="text-3xl font-bold text-white">{property.title}</h1>
              <p className="text-slate-400 text-sm mt-2 flex items-center gap-1">
                📍 {property.location}
              </p>
            </div>

            {/* Fasilitas Utama */}
            <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <div>
                <p className="text-xs text-slate-400">Kamar Tidur</p>
                <p className="text-lg font-bold text-white mt-1">🛏️ {property.bedrooms}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Kamar Mandi</p>
                <p className="text-lg font-bold text-white mt-1">🚿 {property.bathrooms}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Luas Bangunan</p>
                <p className="text-lg font-bold text-white mt-1">📐 {property.area} m²</p>
              </div>
            </div>

            {/* Deskripsi Tambahan */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Deskripsi Properti</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Hunian eksklusif ini dirancang dengan gaya arsitektur modern minimalis yang menyatukan kenyamanan dan kemewahan. Terletak di lokasi yang sangat strategis dengan akses mudah menuju pusat kota, pusat perbelanjaan, dan fasilitas umum lainnya. Cocok untuk investasi jangka panjang maupun hunian keluarga idaman.
              </p>
            </div>
          </div>

          {/* Sisi Kanan: Card Kontak Agen */}
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 h-fit space-y-4">
            <h3 className="text-lg font-semibold text-white">Tertarik Properti Ini?</h3>
            <p className="text-xs text-slate-400">
              Hubungi agen resmi kami untuk penjadwalan survei lokasi atau negosiasi harga.
            </p>

            <button className="w-full py-3 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold rounded-xl transition shadow-lg shadow-emerald-400/20 text-sm">
              Hubungi via WhatsApp
            </button>

            <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition text-sm">
              Jadwalkan Survei
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}