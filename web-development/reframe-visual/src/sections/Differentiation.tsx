import React from 'react';
import { X, Check } from 'lucide-react';

const comparisons = [
  { feature: "Editing Method", industry: "Mass outsourcing / AI automation", reframe: "100% In-house human experts" },
  { feature: "Job Tracking", industry: "Black box (no updates for 48h)", reframe: "Real-time pipeline updates" },
  { feature: "Payment", industry: "Pay upfront before seeing results", reframe: "Review images, pay after approval" },
  { feature: "Revision Cycle", industry: "Email-based and imprecise", reframe: "In-app annotation tools" },
  { feature: "Turnaround", industry: "Opaque or unpredictable", reframe: "Guaranteed 24h/48h/72h" },
  { feature: "Pricing", industry: "Flat per-image regardless of work", reframe: "Tiered by complexity and speed" },
];

export const Differentiation: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white border-b border-black/5">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col gap-8 mb-20 max-w-2xl border-l-[3px] border-black pl-8">
          <h2 className="text-5xl md:text-8xl font-outfit font-black text-black leading-none uppercase">
            The <br />shift.
          </h2>
          <p className="text-sm font-bold tracking-widest text-black uppercase leading-relaxed max-w-lg">
            Image editing hasn't changed much in 20 years. Reframe started over 
            with a focus on transparency and human expertise.
          </p>
        </div>

        <div className="border-t-[3px] border-l-[3px] border-black bg-white rounded-tr-md overflow-hidden shadow-[8px_8px_0px_#6366F1]">
          <div className="grid grid-cols-3 border-r-[3px] border-black bg-black text-white py-8 px-10">
            <div className="text-[10px] font-black uppercase tracking-widest">Capabilities</div>
            <div className="text-[10px] font-black uppercase tracking-widest opacity-60">The Industry Standard</div>
            <div className="text-[10px] font-black uppercase tracking-widest text-[#6366F1]">Reframe Visual</div>
          </div>
          {comparisons.map((row, i) => (
            <div key={i} className="grid grid-cols-3 border-r-[3px] border-b-[3px] border-black bg-white hover:bg-gray-100 transition-colors">
              <div className="px-10 py-8 font-black text-[11px] uppercase tracking-widest border-r-[3px] border-black flex items-center text-black">{row.feature}</div>
              <div className="px-10 py-8 text-[11px] font-black uppercase text-gray-400 flex items-center gap-4 border-r-[3px] border-black tracking-widest">
                <X className="w-5 h-5" strokeWidth={3} /> {row.industry}
              </div>
              <div className="px-10 py-8 text-[11px] font-black uppercase text-black flex items-center gap-4 tracking-widest">
                <Check className="w-5 h-5 text-[#6366F1]" strokeWidth={3} /> {row.reframe}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
