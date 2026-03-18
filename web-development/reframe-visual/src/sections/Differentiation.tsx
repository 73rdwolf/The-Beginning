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
    <section className="py-24 md:py-32 bg-white border-b border-black">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col gap-12 mb-24 max-w-2xl">
          <h2 className="text-5xl md:text-8xl font-black text-black leading-none uppercase">
            The <br />shift.
          </h2>
          <p className="text-xl text-black font-medium leading-relaxed max-w-lg border-l-4 border-black pl-8">
            Image editing hasn't changed much in 20 years. Reframe started over 
            with a focus on transparency and human expertise.
          </p>
        </div>

        <div className="border-t border-l border-black bg-white">
          <div className="grid grid-cols-3 border-r border-black bg-black text-white py-8 px-10">
            <div className="text-xs font-black uppercase tracking-widest">Capabilities</div>
            <div className="text-xs font-black uppercase tracking-widest opacity-40">The Industry Standard</div>
            <div className="text-xs font-black uppercase tracking-widest text-brand-primary">Reframe Visual</div>
          </div>
          {comparisons.map((row, i) => (
            <div key={i} className="grid grid-cols-3 border-r border-b border-black group hover:bg-bg-secondary transition-colors">
              <div className="px-10 py-10 font-black text-xs uppercase tracking-widest border-r border-black">{row.feature}</div>
              <div className="px-10 py-10 text-xs font-bold uppercase text-gray-400 flex items-center gap-3 border-r border-black">
                <X className="w-4 h-4" /> {row.industry}
              </div>
              <div className="px-10 py-10 text-xs font-black uppercase text-black flex items-center gap-3">
                <Check className="w-4 h-4 text-brand-primary" /> {row.reframe}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
