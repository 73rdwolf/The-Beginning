import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export const InsightsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col font-inter">
      <Navigation />
      <main className="flex-grow py-24 px-10 md:px-20 lg:px-[10%] xl:px-[12%]">
        <h1 className="text-4xl md:text-5xl font-outfit font-black tracking-tight uppercase text-black mb-16">Intelligence Hub</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1,2,3,4,5,6].map(i => (
             <div key={i} className="group cursor-pointer">
               <div className="bg-black/10 aspect-video w-full mb-4 border-2 border-transparent group-hover:border-[#6366F1] transition-colors relative overflow-hidden">
                 <div className="absolute inset-0 bg-[#6366F1]/0 group-hover:bg-[#6366F1]/10 transition-colors"></div>
               </div>
               <span className="text-[12px] font-bold tracking-widest text-[#6366F1] uppercase mb-2 block">Case Study</span>
               <h3 className="text-xl font-outfit font-black tracking-tight uppercase mb-2 group-hover:text-[#6366F1] transition-colors">How Vogue Studios reduced post-production latency by 45%</h3>
               <p className="text-[15px] font-medium text-black/60">Exploring the architectural workflow shifts that save enterprise photo studios hundreds of editing hours.</p>
             </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};
