import React from 'react';
import { motion } from 'framer-motion';

export const BeforeAfterGrid: React.FC = () => {
  return (
    <section className="bg-white py-32 px-10 md:px-20 lg:px-[10%] xl:px-[12%] overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="text-[#6366F1] font-bold tracking-widest uppercase text-[12px] mb-4 block">Proven Results</span>
        <h2 className="text-4xl md:text-5xl font-outfit font-black uppercase tracking-tight text-black flex flex-col sm:flex-row gap-4">
          Extreme Precision. <span>Every Pixel.</span>
        </h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {[1, 2].map((i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="aspect-video bg-gray-100 rounded-3xl border border-black/5 overflow-hidden relative shadow-lg group"
          >
             <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
             <div className="absolute bottom-6 left-6 flex gap-2">
                <span className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-[12px] font-black uppercase tracking-widest border border-black/5 shadow-sm">Before</span>
                <span className="bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-full text-[12px] font-black uppercase tracking-widest border border-white/10 shadow-sm">After</span>
             </div>
             <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-black px-6 py-3 rounded-full text-[12px] font-bold uppercase tracking-widest shadow-xl">Zoom Comparison</span>
             </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
         <a href="/services" className="inline-flex items-center justify-center gap-3 bg-white text-black border border-black/5 rounded-full px-8 py-4 text-[13.5px] font-black tracking-widest uppercase hover:bg-black hover:text-white transition-all shadow-[0_8px_30px_rgb(0,0,0,0.04)]">Explore All 19 Services —</a>
      </motion.div>
    </section>
  );
};
