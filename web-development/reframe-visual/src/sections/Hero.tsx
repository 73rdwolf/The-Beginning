import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-white w-full border-b border-black">
      <div className="grid lg:grid-cols-2 min-h-[85vh]">
        
        {/* Left Side: Copy */}
        <div className="flex flex-col justify-center px-8 sm:px-12 md:px-20 py-16 text-black bg-white">
          <div className="bg-black text-white rounded-xl text-[10px] font-black tracking-[0.15em] uppercase px-3 py-1.5 w-fit mb-10">
            + Professional editing from $0.19
          </div>
          
          <div className="flex flex-col gap-1">
            <h1 className="text-[52px] sm:text-[64px] lg:text-[76px] xl:text-[88px] font-outfit font-black uppercase text-black leading-[0.95] tracking-tight">
              Your product <br />
              is great. <br />
              Do your images <br />
              prove it?
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-outfit font-black italic tracking-tight text-brand-primary uppercase mt-4 leading-[1.1]">
              / Now make it impossible to scroll past.
            </h2>
          </div>
          
          <div className="border-l-[3px] border-black pl-5 my-8 max-w-md">
            <p className="text-sm md:text-base font-medium leading-relaxed">
              Elite, catalog-ready product photography delivered with absolute precision. 
              Pure craftsmanship for brands that demand perfection.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-4">
            <button onClick={() => window.location.href='/jobs/new/services'} className="bg-black text-white rounded-2xl px-10 py-5 text-[11px] rounded-full font-black tracking-[0.15em] uppercase shadow-[6px_6px_0px_#6366F1] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_#6366F1] transition-all">
              Get 3 Images Edited Free —
            </button>
            <button onClick={() => window.location.href='/services'} className="text-[11px] font-black tracking-[0.15em] uppercase hover:underline underline-offset-4 cursor-pointer text-gray-600 hover:text-black">
              See the difference
            </button>
          </div>
        </div>

        {/* Right Side: Before/After Comparison Placeholder Area */}
        <div className="relative bg-[#1A1A1A] h-full min-h-[400px] w-full border-l border-black overflow-hidden flex items-center justify-center bg-[url('/grid-pattern.svg')] bg-center">
          
          {/* Top BEFORE Badge Label (Pill) */}
          <div className="absolute top-6 left-6 z-20">
            <span className="bg-black/40 backdrop-blur-md text-white border border-white/20 rounded-full px-4 py-2 text-[10px] rounded-full font-black tracking-[0.2em] uppercase shadow-sm">
              Before
            </span>
          </div>
          
          {/* Top AFTER Badge Label (Pill) */}
          <div className="absolute top-6 right-6 z-20">
            <span className="bg-black/40 backdrop-blur-md text-white border border-white/20 rounded-full px-4 py-2 text-[10px] rounded-full font-black tracking-[0.2em] uppercase shadow-sm">
              After — Reframe
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
