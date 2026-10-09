export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // dalam m2
  type: 'Rumah' | 'Apartemen' | 'Villa';
  imageUrl: string;
  isFeatured?: boolean;
}

export const DUMMY_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Modern Minimalis Villa Sleman',
    price: 2500000000,
    location: 'Sleman, D.I. Yogyakarta',
    bedrooms: 4,
    bathrooms: 3,
    area: 180,
    type: 'Rumah',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Elegance Suite Luxury Apartment',
    price: 1800000000,
    location: 'Bantul, D.I. Yogyakarta',
    bedrooms: 2,
    bathrooms: 2,
    area: 85,
    type: 'Apartemen',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
  },
  {
    id: '3',
    title: 'Tropical Private Resort Villa',
    price: 5200000000,
    location: 'Kuta, Bali',
    bedrooms: 5,
    bathrooms: 5,
    area: 350,
    type: 'Villa',
    imageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
  },
];