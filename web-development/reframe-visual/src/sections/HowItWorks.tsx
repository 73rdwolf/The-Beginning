import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { n: '01', title: 'Upload', desc: 'Securely drop your RAW files into our encrypted portal via Web, API, or Google Drive.' },
  { n: '02', title: 'Manual Craft', desc: 'Our senior retouchers path, mask, and refine every element by hand. Zero AI errors.' },
  { n: '03', title: 'Review & Done', desc: 'Approve your assets in high-res and only pay once you are 100% satisfied.' }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how" className="bg-[#121212] py-32 px-10 md:px-20 lg:px-[10%] xl:px-[12%] text-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <span className="text-[#6366F1] font-bold tracking-widest uppercase text-[12px] mb-4 block">The Pipeline</span>
        <h2 className="text-4xl md:text-5xl font-outfit font-black uppercase tracking-tight">The Frictionless <br/> Workflow.</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((st, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="group"
          >
            <div className="text-6xl font-outfit font-black mb-6 text-white/10 group-hover:text-[#6366F1] transition-colors">{st.n}</div>
            <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{st.title}</h3>
            <p className="text-white/40 font-medium leading-relaxed">{st.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
