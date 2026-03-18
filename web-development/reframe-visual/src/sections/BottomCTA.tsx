import React from 'react';
import { motion } from 'framer-motion';

export const BottomCTA: React.FC = () => {
  return (
    <section className="py-32 px-10 md:px-20 lg:px-[10%] xl:px-[12%] bg-[#121212] text-white overflow-hidden text-center relative">
      <div className="absolute inset-0 bg-[#6366F1]/5 opacity-20 bg-[url('/grid-pattern.svg')]"></div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', damping: 15 }}
        className="relative z-10"
      >
        <h2 className="text-5xl md:text-8xl font-outfit font-black uppercase tracking-tight mb-8">Ready to Scale?</h2>
        <p className="max-w-2xl mx-auto text-xl font-medium text-white/50 mb-12 italic">/ Join 250+ enterprise brands pushing the speed of pixels.</p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="/jobs/new/services" className="bg-[#6366F1] text-white px-10 py-5 rounded-full text-[11px] font-black uppercase tracking-widest shadow-[0_20px_40px_rgba(99,102,241,0.2)] hover:-translate-y-1 transition-all">
            Get 3 Images Free —
          </a>
          <a href="/pricing" className="border border-white/20 text-white px-10 py-5 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            View Enterprise Rates
          </a>
        </div>
      </motion.div>
    </section>
  );
};
