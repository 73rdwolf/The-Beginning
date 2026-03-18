import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const comparisons = [
  { feature: "Editing Method", industry: "Mass outsourcing / AI automation", reframe: "100% In-house human experts" },
  { feature: "Job Tracking", industry: "Black box (no updates for 48h)", reframe: "Real-time pipeline updates" },
  { feature: "Payment", industry: "Pay upfront before seeing results", reframe: "Review images, pay after approval" },
  { feature: "Revision Cycle", industry: "Email-based and imprecise", reframe: "In-app annotation tools" },
  { feature: "Turnaround", industry: "Opaque or unpredictable", reframe: "Guaranteed 12h/24h/48h/72h/7d" }
];

export const Differentiation: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white border-b border-black/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-20 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 mb-20 max-w-2xl border-l-4 border-[#6366F1] pl-8"
        >
          <h2 className="text-5xl md:text-8xl font-outfit font-black text-black leading-none uppercase">
            The <br />shift.
          </h2>
          <p className="text-[15px] font-bold tracking-widest text-black/60 uppercase leading-relaxed max-w-lg">
            Image editing hasn't changed much in 20 years. Reframe started over 
            with a focus on transparency and human expertise.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-[0_30px_60px_rgba(0,0,0,0.06)]"
        >
          <div className="grid grid-cols-3 bg-black text-white py-8 px-10">
            <div className="text-[12px] font-black uppercase tracking-widest">Capabilities</div>
            <div className="text-[12px] font-black uppercase tracking-widest opacity-40">The Industry Standard</div>
            <div className="text-[12px] font-black uppercase tracking-widest text-[#6366F1]">Reframe Visual</div>
          </div>
          {comparisons.map((row, i) => (
            <div key={i} className="grid grid-cols-3 border-t border-black/5 bg-white hover:bg-gray-50 transition-colors">
              <div className="px-10 py-8 font-black text-[13.5px] uppercase tracking-widest border-r border-black/5 text-black">{row.feature}</div>
              <div className="px-10 py-8 text-[13.5px] font-bold uppercase text-gray-400 flex items-center gap-4 border-r border-black/5 tracking-widest italic opacity-60">
                <X className="w-5 h-5 flex-shrink-0" strokeWidth={3} /> {row.industry}
              </div>
              <div className="px-10 py-8 text-[13.5px] font-black uppercase text-black flex items-center gap-4 tracking-widest">
                <Check className="w-5 h-5 text-[#6366F1] flex-shrink-0" strokeWidth={3} /> {row.reframe}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
