import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { num: "9 / 10", desc: "shoppers say image quality is #1 purchase factor" },
  { num: "33%", desc: "avg conversion increase with professional images" },
  { num: "56%", desc: "look at images before titles, prices, or reviews" },
];

export const SocialProof: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white border-b border-black/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-20 lg:px-24">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-outfit font-black text-black mb-16 tracking-tight uppercase leading-none border-l-4 border-[#6366F1] pl-8"
        >
          The numbers <br/>speak.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-black/5 p-8 rounded-3xl flex flex-col items-start gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-300"
            >
              <div className="text-6xl font-outfit font-black text-black tracking-tighter">{stat.num}</div>
              <div className="text-[13.5px] font-bold text-black uppercase tracking-widest leading-relaxed opacity-60">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
