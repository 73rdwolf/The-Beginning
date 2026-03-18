import React from 'react';

export const BottomCTA: React.FC = () => {
  return (
    <section className="py-32 md:py-48 bg-black border-t border-b border-black relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-20 relative z-10 flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-7xl lg:text-[100px] font-outfit font-black tracking-tight mb-8 leading-[0.9] text-white uppercase">
          Start editing. <br />
          See the difference.
        </h2>
        <p className="text-xs font-bold text-gray-400 max-w-2xl mb-12 uppercase tracking-[0.2em] leading-relaxed">
          3 free edits. No credit card. Your first real order gets 20% off. 
          <br/>Experience the Reframe workflow today.
        </p>
        <button className="bg-white text-black px-10 py-5 rounded-2xl border-2 border-black text-[12px] font-black tracking-[0.15em] uppercase hover:bg-[#6366F1] hover:border-[#6366F1] hover:text-white transition-all shadow-[6px_6px_0px_#6366F1] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_#F9F9F9]">
          Start with 3 Free Edits —
        </button>
        <p className="mt-12 text-[10px] text-white font-black uppercase tracking-[0.2em] opacity-50 bg-white/10 px-4 py-2 rounded-xl border border-white/20">
          Your first real order gets 20% off — automatically.
        </p>
      </div>
    </section>
  );
};
