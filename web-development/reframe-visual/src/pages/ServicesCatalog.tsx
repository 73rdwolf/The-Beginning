import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const services = [
  { category: 'Core Services', items: [
    { name: 'Background Removal', price: 'from $0.31', time: '12h / 24h / 48h / 72h / 7d', desc: 'Precise extraction. Starts at Simple/7d.' },
    { name: 'Clipping Path', price: 'from $0.31', time: '12h / 24h / 48h / 72h / 7d', desc: 'Hand-drawn multi-point vector clipping. Starts at Simple/7d.' },
    { name: 'Color Correction (Single)', price: 'from $0.28', time: '12h / 24h / 48h / 72h / 7d', desc: 'Exact hex-value color replacement. Starts at Simple/7d.' },
    { name: 'Shadow Creation', price: 'from $0.47', time: '12h / 24h / 48h / 72h / 7d', desc: 'Natural drop, cast, or reflection shadows. Medium complexity baseline.' }
  ]},
  { category: 'Retouching & Specialized', items: [
    { name: 'High-End Retouch (Editorial)', price: 'from $3.20', time: '12h / 24h / 48h / 72h / 7d', desc: 'Blemish removal, frequency separation, high-fashion polishing.' },
    { name: 'Raster to Vector (Complex)', price: 'from $3.99', time: '12h / 24h / 48h / 72h / 7d', desc: 'Complex scaling and path generation.' },
    { name: 'Garment Retouch', price: 'Variable', time: '12h / 24h / 48h / 72h / 7d', desc: 'Professional smoothing and crease removal.' },
    { name: 'Jewelry Retouch', price: 'Variable', time: '12h / 24h / 48h / 72h / 7d', desc: 'Specular highlight and multi-path stone extraction.' }
  ]}
];

export const ServicesCatalog: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col font-inter">
      <Navigation />
      <main className="flex-grow py-24 px-10 md:px-20 lg:px-[10%] xl:px-[12%]">
        <div className="flex justify-between items-end mb-4">
          <h1 className="text-4xl md:text-5xl font-outfit font-black tracking-tight uppercase text-black">Service Catalog</h1>
          <span className="bg-[#6366F1] text-white px-3 py-1 font-bold tracking-widest uppercase text-[10px]">Updated Pricing v2.1</span>
        </div>
        <p className="text-black/60 font-medium max-w-2xl mb-16">All 19 core, retouching, and specialized services. Featuring 5 Turnaround Speeds from 12h (Rush) down to 7 Days.</p>
        
        {services.map((group, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="text-2xl font-outfit font-bold uppercase tracking-tight text-[#6366F1] mb-8 border-b-2 border-black pb-4">{group.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.items.map((svc, sIdx) => (
                <a href={`/services/${svc.name.toLowerCase().replace(/\s+/g, '-').replace(/\(.*\)/g, '').trim()}`} key={sIdx} className="bg-white border-2 border-black p-8 rounded-3xl shadow-[4px_4px_0px_#121212] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#121212] transition-all flex flex-col group cursor-pointer block">
                  <div className="flex flex-col mb-4">
                    <h3 className="text-lg font-bold uppercase tracking-tight mb-2">{svc.name}</h3>
                    <span className="bg-black/5 text-[#121212] text-[9px] uppercase font-bold tracking-tight px-2 py-1 self-start">{svc.time}</span>
                  </div>
                  <p className="text-black/70 text-sm font-medium mb-8 flex-grow">{svc.desc}</p>
                  <div className="flex justify-between items-center border-t-2 border-black/10 pt-4 mt-auto">
                    <div className="text-xl font-black font-outfit">{svc.price} <span className="text-[10px] text-black/50 font-medium">/ IMG</span></div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-black/50 group-hover:text-[#6366F1] transition-colors">Deep Dive —</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};
