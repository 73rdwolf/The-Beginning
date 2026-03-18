import React from 'react';
import { motion } from 'framer-motion';

const tiers = [
  { name: 'Marketplace Ready', price: '$1.29', services: ['Background Removal', 'Shadow Creation', 'Color Correction'] },
  { name: 'Catalog Essential', price: '$1.63', services: ['Clipping Path', 'Complex Shadow', 'Editorial Masking'], best: true },
  { name: 'Apparel Starter', price: '$1.53', services: ['Ghost Mannequin', 'Symmetry Fix', 'Blemish Removal'] }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="bg-[#F9F9F9] py-32 px-10 md:px-20 lg:px-[10%] xl:px-[12%] overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="text-[#6366F1] font-bold tracking-widest uppercase text-[12px] mb-4 block">Unified Rates</span>
        <h2 className="text-4xl md:text-6xl font-outfit font-black uppercase tracking-tight text-black mb-6">Simple Bundles. <br/> No Hidden Caps.</h2>
        <p className="max-w-xl mx-auto text-black/60 font-medium">All prices are calculated exactly as the sum of services at 24h speed. Select the pre-configured engine for your production.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tiers.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`bg-white border rounded-3xl p-10 flex flex-col ${t.best ? 'border-indigo-500 shadow-[0_30px_60px_rgba(99,102,241,0.1)] ring-2 ring-indigo-50' : 'border-black/5 shadow-xl shadow-black/5'}`}
          >
            {t.best && <span className="bg-[#6366F1] text-white px-3 py-1 text-[13.5px] font-bold uppercase tracking-widest mb-6 rounded-full self-start">Most Popular</span>}
            <h3 className="text-2xl font-outfit font-black uppercase tracking-tight mb-8">{t.name}</h3>
            <div className="flex items-end gap-2 mb-10">
              <span className="text-4xl font-black font-outfit">{t.price}</span>
              <span className="text-[12px] font-bold tracking-widest uppercase text-black/40 mb-1">/ Base Item</span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              {t.services.map((s, j) => (
                <li key={j} className="flex gap-3 text-[15px] font-medium items-center">
                  <span className="text-[#6366F1] font-bold">✓</span> {s}
                </li>
              ))}
            </ul>
            <button className={`w-full py-5 rounded-full uppercase text-[13.5px] font-black tracking-widest transition-all ${t.best ? 'bg-[#6366F1] text-white shadow-lg' : 'bg-black text-white hover:bg-gray-800'}`}>
              Select Bundle
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
