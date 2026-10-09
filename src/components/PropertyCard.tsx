import Link from 'next/link';
import { Property } from '@/data/properties';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <Link href={`/property/${property.id}`} className="block">
      <div className="group bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg h-full">
        {/* Gambar Properti */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-800">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-500/20">
            {property.type}
          </span>
        </div>

        {/* Konten Detail */}
        <div className="p-5">
          <p className="text-xl font-bold text-emerald-400 mb-1">{formattedPrice}</p>
          <h3 className="text-lg font-semibold text-white line-clamp-1 group-hover:text-emerald-300 transition-colors">
            {property.title}
          </h3>
          <p className="text-slate-400 text-xs mt-1 flex items-center gap-1">
            📍 {property.location}
          </p>

          <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-slate-300 text-xs font-medium">
            <span>🛏️ {property.bedrooms} K. Tidur</span>
            <span>🚿 {property.bathrooms} K. Mandi</span>
            <span>📐 {property.area} m²</span>
          </div>
        </div>
      </div>
    </Link>
  );
}