import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const bundles = [
  { name: 'Marketplace Ready', 
    priceSimple: '$1.29', priceComplex: '$3.15', 
    features: ['Background Removal', 'Shadow Creation', 'Color Correction'] 
  },
  { name: 'Catalog Essential', 
    priceSimple: '$1.63', priceComplex: '$4.19', 
    features: ['Background Removal', 'Clipping Path', 'Color Correction', 'Shadow Creation'] 
  },
  { name: 'Apparel Starter', 
    priceSimple: '$1.53', priceComplex: '$3.30', 
    features: ['Background Removal', 'Garment Retouch', 'Shadow Creation'] 
  },
  { name: 'Jewelry Essentials', 
    priceSimple: '$1.74', priceComplex: '$6.99', 
    features: ['Background Removal', 'Jewelry Retouch', 'Shadow Creation'] 
  }
];

export const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col font-inter">
      <Navigation />
      <main className="flex-grow py-24 px-10 md:px-20 lg:px-[10%] xl:px-[12%]">
        <div className="flex justify-between items-end mb-4">
          <h1 className="text-4xl md:text-5xl font-outfit font-black tracking-tight uppercase text-black">Prebuilt Packages</h1>
          <span className="bg-[#6366F1] text-white px-3 py-1 font-bold tracking-widest uppercase text-[12px]">Updated Pricing v2.1</span>
        </div>
        <p className="text-black/60 font-medium max-w-2xl mb-16">All bundle prices are calculated exactly as the sum of included services with no hidden fees. Pricing shown is based on standard 24h Turnaround.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bundles.map((bundle, idx) => (
            <div key={idx} className={`bg-white border-2 border-black p-8 rounded-3xl shadow-[6px_6px_0px_#121212] flex flex-col ${idx === 1 ? 'ring-4 ring-[#6366F1]' : ''}`}>
              {idx === 1 && <span className="bg-[#6366F1] text-white text-[12px] font-bold tracking-widest uppercase px-3 py-1 self-start mb-4">Most Popular</span>}
              <h3 className="text-2xl font-outfit font-black uppercase tracking-tight mb-6">{bundle.name}</h3>
              
              <div className="flex flex-col gap-2 mb-8 border-l-4 border-[#6366F1] pl-4">
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-black font-outfit">{bundle.priceSimple}</span>
                  <span className="text-[12px] font-bold uppercase tracking-widest mb-1 pb-1 text-black/50">/ IMG (Simple)</span>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-lg font-black font-outfit text-black/60">{bundle.priceComplex}</span>
                  <span className="text-[12px] font-bold uppercase tracking-widest text-black/40">/ IMG (Complex)</span>
                </div>
              </div>
              
              <ul className="mb-8 space-y-3 flex-grow">
                {bundle.features.map((f, i) => (
                  <li key={i} className="flex gap-2 items-start text-[15px] font-medium text-black/80">
                    <span className="text-[#6366F1]">✓</span> {f}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 uppercase text-[13.5px] font-bold tracking-widest border-2 border-black hover:-translate-y-1 transition-all ${idx === 1 ? 'bg-[#6366F1] text-white shadow-[4px_4px_0px_#121212]' : 'bg-transparent text-black'}`}>
                Select Package
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};
