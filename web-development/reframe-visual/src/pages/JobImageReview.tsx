import React from 'react';
import { Navigation } from '../components/Navigation';

export const JobImageReview: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col font-inter text-white">
      <div className="px-6 py-4 flex justify-between items-center bg-[#0A0A0A] border-b border-white/10">
        <div>
          <span className="text-[12px] font-bold uppercase tracking-widest text-white/40 mb-1 block">Review</span>
          <h1 className="text-xl font-outfit font-bold tracking-tight uppercase">Spring Collection 2026</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[12px] font-bold uppercase tracking-widest text-[#6366F1]">18 / 42 Ready</span>
          <a href="/jobs/9482/payment" className="bg-[#6366F1] text-white px-6 py-2 text-[12px] rounded-full font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
            Approve All & Pay
          </a>
        </div>
      </div>
      
      <main className="flex-grow flex">
        {/* Main Viewer */}
        <div className="flex-grow flex flex-col">
          <div className="flex-grow flex items-center justify-center p-8 relative">
            
            {/* Split Screen Placeholder */}
            <div className="w-full max-w-4xl h-[600px] bg-[#1A1A1A] border border-white/10 relative overflow-hidden bg-[url('/grid-pattern-dark.svg')] flex items-center justify-center">
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border border-white/20 text-[12px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">Before</div>
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/20 text-[12px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">After — Reframe</div>
              
              <div className="text-white/20 font-outfit font-black text-4xl uppercase tracking-widest">Image Viewport</div>
              
              {/* Fake slider handle */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#6366F1] flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-[#6366F1] border-2 border-white flex flex-col gap-1 items-center justify-center shadow-lg cursor-ew-resize">
                  <div className="w-[2px] h-3 bg-white"></div>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Thumbnails */}
          <div className="h-24 bg-[#0A0A0A] border-t border-white/10 flex items-center px-6 gap-4 overflow-x-auto">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className={`w-16 h-16 bg-[#1A1A1A] border-2 flex-shrink-0 cursor-pointer ${i === 1 ? 'border-[#6366F1]' : 'border-transparent'}`}></div>
            ))}
          </div>
        </div>
        
        {/* Sidebar Tools */}
        <div className="w-80 bg-[#0A0A0A] border-l border-white/10 flex flex-col">
          <div className="p-6 flex-grow">
            <h3 className="text-[12px] font-bold uppercase tracking-widest text-white/50 mb-6 border-b border-white/10 pb-2">Review Actions</h3>
            
            <button className="w-full bg-[#6366F1] text-white py-4 text-[13.5px] font-bold tracking-widest uppercase mb-4 hover:bg-white hover:text-black transition-colors">
              Approve Image
            </button>
            <button className="w-full bg-transparent text-white border border-white/30 py-4 text-[13.5px] font-bold tracking-widest uppercase mb-8 hover:bg-white/10 transition-colors">
              Request Revision
            </button>
            
            <h3 className="text-[12px] font-bold uppercase tracking-widest text-white/50 mb-4 border-b border-white/10 pb-2">Annotation Tools</h3>
            <div className="flex gap-2">
              <button className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/10">◯</button>
              <button className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/10">↖</button>
              <button className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/10">T</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
