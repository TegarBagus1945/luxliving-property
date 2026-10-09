import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PropertyList from '@/components/PropertyList';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <PropertyList />
      </main>
    </div>
  );
}