import React from 'react';
import { ArrowRight } from 'lucide-react';

export const BottomCTA: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-20 relative z-10 flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
          Start editing. <br />
          See the difference.
        </h2>
        <p className="text-xl text-text-muted max-w-2xl mb-12">
          3 free edits. No credit card. Your first real order gets 20% off. 
          Experience the Reframe workflow today.
        </p>
        <button className="bg-brand-primary text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-[#155490] transition-all flex items-center gap-3 shadow-2xl shadow-blue-900/50 active:scale-95 duration-200">
          Start with 3 Free Edits <ArrowRight className="w-6 h-6" />
        </button>
        <p className="mt-8 text-sm text-text-muted font-medium uppercase tracking-widest opacity-60">
          Your first real order gets 20% off — automatically.
        </p>
      </div>
    </section>
  );
};
