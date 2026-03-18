import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export const PortfolioPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111] flex flex-col font-inter text-white">
      <Navigation />
      <main className="flex-grow">
        <section className="py-32 px-10 md:px-20 lg:px-[10%] text-center border-b-[1px] border-white/10">
          <span className="text-[#6366F1] px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full inline-block mb-6 border border-[#6366F1]">Visual Excellence Engine</span>
          <h1 className="text-5xl md:text-8xl font-outfit font-black uppercase tracking-tight text-white mb-8">PORTFOLIO</h1>
          <p className="max-w-2xl mx-auto font-medium text-lg text-white/50">A strict visualization of structural modifications, pixel-accuracy, and high-fashion pathing completed by the Reframe network.</p>
        </section>
        
        <section className="py-24 px-10 md:px-20 lg:px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mocks of Portfolio Grids */}
          {[1,2,3,4,5,6].map((i) => (
             <div key={i} className="group relative overflow-hidden bg-white/5 rounded-3xl border border-white/10 min-h-[400px] flex items-center justify-center cursor-pointer">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col items-center justify-center">
                   <span className="bg-black text-white px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl">View Details —</span>
                </div>
                <div className="text-white/20 font-black font-outfit uppercase tracking-widest text-sm">Asset Preview {i}</div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex gap-2">
                    <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[9px] uppercase font-bold tracking-widest border border-white/20">Background Removal</span>
                    <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[9px] uppercase font-bold tracking-widest border border-white/20">Shadow</span>
                  </div>
                </div>
             </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};
