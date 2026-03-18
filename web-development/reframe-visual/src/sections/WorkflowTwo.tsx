import React from 'react';
import { motion } from 'framer-motion';

export const WorkflowTwo: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white border-b border-black/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-20 lg:px-24 grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#121212] rounded-3xl h-[400px] border border-black/5 flex flex-col items-center justify-center text-[13.5px] font-black uppercase tracking-widest shadow-[0_30px_60px_rgba(0,0,0,0.1)] p-12 text-center relative overflow-hidden"
        >
           <div className="absolute inset-0 bg-[#6366F1]/5 opacity-20 bg-[url('/grid-pattern.svg')]"></div>
           <div className="relative z-10 text-white flex flex-col items-center gap-6">
              <span className="bg-red-500/20 text-red-500 border border-red-500/20 px-4 py-1.5 rounded-full text-[13.5px] font-bold tracking-widest uppercase">The Breakdown</span>
              <h3 className="text-3xl font-outfit font-black uppercase tracking-tight text-white leading-tight">Inefficient <br/>Outsourcing.</h3>
              <p className="font-medium tracking-wide opacity-50 text-[13.5px] normal-case max-w-[280px]">Automated filters, disjointed communication loops, and opaque delivery timelines result in massive margin loss for enterprise production teams.</p>
           </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 border-l-4 border-red-500/30 pl-8"
        >
          <h2 className="text-5xl md:text-6xl font-outfit font-black tracking-tight text-black leading-[0.9] uppercase">
            The industry <br/>standard is broken.
          </h2>
          <p className="text-[15px] font-bold tracking-widest text-red-500/80 leading-relaxed uppercase">
            Outsourcing to unregulated marketplaces means inconsistent quality, slow communication, 
            and paying upfront for work you haven't seen. <br/> <span className="text-black/40">It cannot scale.</span>
          </p>
          <a href="/services" className="w-fit text-[13.5px] font-black tracking-wider uppercase text-black hover:text-[#6366F1] hover:underline underline-offset-4 cursor-pointer mt-4">
            See how Reframe scales →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
