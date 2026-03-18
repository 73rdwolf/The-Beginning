import React from 'react';

export const BeforeAfterGrid: React.FC = () => {
  const samples = ["BG Removal", "Jewelry Retouch", "Ghost Mannequin", "Model Retouch"];

  return (
    <section className="py-24 md:py-32 bg-white border-b border-black/5">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col gap-4 mb-16 border-l-[3px] border-black pl-8">
          <h2 className="text-5xl md:text-6xl font-outfit font-black text-black tracking-tight leading-none uppercase">See the results.</h2>
          <p className="text-sm font-bold tracking-widest text-[#6366F1] leading-relaxed uppercase">Every service. Every detail. Real samples from Reframe editors.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {samples.map((label, i) => (
            <div key={i} className="flex flex-col gap-4 group cursor-pointer">
              <div className="relative h-48 md:h-64 overflow-hidden rounded-md border border-black/5 rounded-3xl bg-black shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_20px_40px_rgba(99,102,241,0.2)] group-hover:-translate-y-1 transition-all">
                 <div className="absolute inset-0 bg-[#1A1A1A] flex items-center justify-center text-[10px] text-white/30 uppercase tracking-widest font-black">
                    Sample Plate
                 </div>
                 <div className="absolute inset-0 bg-[#6366F1]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="text-[11px] font-black text-black uppercase tracking-widest">{label}</span>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
           <a href="/services" className="inline-flex items-center justify-center gap-3 bg-white text-black border border-black/5 rounded-3xl rounded-md px-8 py-4 text-[11px] rounded-full font-black tracking-wider uppercase hover:bg-black hover:text-white transition-all shadow-[0_8px_30px_rgb(0,0,0,0.04)]">Explore All 19 Services —</a>
        </div>
      </div>
    </section>
  );
};
