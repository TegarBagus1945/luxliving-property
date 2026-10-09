import { DUMMY_PROPERTIES } from '@/data/properties';
import PropertyCard from './PropertyCard';

export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Pilihan Terbaik
          </span>
          <h2 className="text-3xl font-bold text-white mt-1">
            Properti Unggulan Minggu Ini
          </h2>
        </div>
        <p className="text-slate-400 text-sm mt-2 md:mt-0 max-w-md">
          Rekomendasi hunian eksklusif dengan fasilitas terbaik dan lokasi paling strategis.
        </p>
      </div>

      {/* Grid Card Properti */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DUMMY_PROPERTIES.map((item) => (
          <PropertyCard key={item.id} property={item} />
        ))}
      </div>
    </section>
  );
}