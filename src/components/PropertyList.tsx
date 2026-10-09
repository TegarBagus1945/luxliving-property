'use client';

import { useState } from 'react';
import { DUMMY_PROPERTIES } from '@/data/properties';
import PropertyCard from './PropertyCard';

export default function PropertyList() {
  // State untuk menyimpan keyword pencarian & kategori yang dipilih
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('Semua');

  // Logika penyaringan data secara instan
  const filteredProperties = DUMMY_PROPERTIES.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = selectedType === 'Semua' || property.type === selectedType;

    return matchesSearch && matchesType;
  });

  return (
    <section id="properties" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Section & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Eksplorasi Katalog
          </span>
          <h2 className="text-3xl font-bold text-white mt-1">
            Daftar Properti Tersedia
          </h2>
        </div>

        {/* Input Pencarian Real-Time */}
        <div className="w-full md:w-80">
          <input
            type="text"
            placeholder="Cari berdasarkan judul atau lokasi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition"
          />
        </div>
      </div>

      {/* Filter Tab Kategori (Semua, Rumah, Apartemen, Villa) */}
      <div className="flex flex-wrap gap-2 mb-8">
        {['Semua', 'Rumah', 'Apartemen', 'Villa'].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedType === type
                ? 'bg-emerald-400 text-slate-950 shadow-md shadow-emerald-400/20 font-bold'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Tampilan Grid Card atau Pesan Kosong */}
      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((item) => (
            <PropertyCard key={item.id} property={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800/80">
          <p className="text-slate-400 text-sm">
            Tidak ada properti yang cocok dengan kriteria pencarian kamu.
          </p>
        </div>
      )}

    </section>
  );
}