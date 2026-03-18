import React from 'react';
import { Navigation } from '../components/Navigation';

export const NewJobServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col font-inter">
      <Navigation />
      <main className="flex-grow py-12 px-10 md:px-20 lg:px-[10%] xl:px-[12%]">
        <div className="mb-12 border-b border-black/5 pb-6">
          <div className="flex gap-4 mb-4 text-[10px] font-bold tracking-widest uppercase">
            <span className="text-[#6366F1]">Step 1: Services</span>
            <span className="text-black/30">Step 2: Upload</span>
            <span className="text-black/30">Step 3: Review</span>
          </div>
          <h1 className="text-3xl font-outfit font-black tracking-tight uppercase text-black">Select Services</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white border border-indigo-200 rounded-3xl shadow-[0_8px_30px_rgba(99,102,241,0.1)] ring-2 ring-indigo-50 ring-offset-2 p-6 shadow-[0_8px_30px_rgba(99,102,241,0.15)]">
            <input type="checkbox" defaultChecked className="mb-4 w-5 h-5 accent-[#6366F1]" />
            <h3 className="text-xl font-outfit font-black uppercase mb-2">Background Removal</h3>
            <p className="text-sm font-medium text-black/70 mb-4">Precise extraction. Starts at Simple/7d.</p>
            <div className="text-xl font-bold font-outfit">$0.31 <span className="text-[10px] uppercase font-bold tracking-widest text-black/40">/ IMG</span></div>
          </div>
          
          <div className="bg-white border border-black/5 rounded-3xl/20 p-6 hover:border-black cursor-pointer transition-colors">
            <input type="checkbox" className="mb-4 w-5 h-5 accent-[#6366F1]" />
            <h3 className="text-xl font-outfit font-black uppercase mb-2">Shadow Creation</h3>
            <p className="text-sm font-medium text-black/70 mb-4">Natural drop, cast, or reflection shadows. Medium complexity baseline.</p>
            <div className="text-xl font-bold font-outfit">$0.47 <span className="text-[10px] uppercase font-bold tracking-widest text-black/40">/ IMG</span></div>
          </div>
          
          <div className="bg-white border border-black/5 rounded-3xl/20 p-6 hover:border-black cursor-pointer transition-colors">
            <input type="checkbox" className="mb-4 w-5 h-5 accent-[#6366F1]" />
            <h3 className="text-xl font-outfit font-black uppercase mb-2">Color Correction</h3>
            <p className="text-sm font-medium text-black/70 mb-4">Exact hex-value color replacement. Starts at Simple/7d.</p>
            <div className="text-xl font-bold font-outfit">$0.28 <span className="text-[10px] uppercase font-bold tracking-widest text-black/40">/ IMG</span></div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 w-full bg-[#121212] border-t-4 border-[#6366F1] py-4 px-10 md:px-20 lg:px-[10%] flex justify-between items-center z-50">
          <div className="text-white">
            <span className="text-xl font-bold font-outfit block">1 Service Selected</span>
            <span className="text-[10px] uppercase tracking-widest text-[#6366F1] font-bold">Estimated: $0.49 / image</span>
          </div>
          <a href="/jobs/new/upload" className="bg-[#6366F1] text-white px-8 py-4 text-[11px] rounded-full font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors">Continue to Upload —</a>
        </div>
      </main>
    </div>
  );
};
