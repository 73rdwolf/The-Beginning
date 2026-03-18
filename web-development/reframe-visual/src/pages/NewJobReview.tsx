import React from 'react';
import { Navigation } from '../components/Navigation';

export const NewJobReview: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col font-inter">
      <Navigation />
      <main className="flex-grow py-12 px-10 md:px-20 lg:px-[10%] xl:px-[12%] pb-32">
        <div className="mb-12 border-b-2 border-black pb-6">
          <div className="flex gap-4 mb-4 text-[10px] font-bold tracking-widest uppercase">
            <span className="text-black/60">Step 1: Done</span>
            <span className="text-black/60">Step 2: Done</span>
            <span className="text-[#6366F1]">Step 3: Review</span>
          </div>
          <h1 className="text-3xl font-outfit font-black tracking-tight uppercase text-black">Order Summary</h1>
        </div>
        
        <div className="max-w-4xl bg-white border-2 border-black p-8 shadow-[6px_6px_0px_#121212]">
          <h2 className="text-xl font-outfit font-bold uppercase tracking-tighter mb-8 border-b-2 border-black/10 pb-4">Spring Collection 2026</h2>
          
          <div className="flex justify-between items-end mb-4 border-b border-black/10 pb-4">
            <div>
              <h3 className="font-bold uppercase tracking-tight">Background Removal</h3>
              <p className="text-sm font-medium text-black/60">Medium Complexity (24h Turnaround)</p>
            </div>
            <div className="text-right">
              <span className="block text-sm font-medium">42 Images x $0.49</span>
              <span className="font-bold font-outfit text-xl">$20.58</span>
            </div>
          </div>
          
          <div className="flex justify-between items-end mb-6 pt-4">
            <h3 className="font-bold uppercase tracking-widest text-[#6366F1]">First Order Discount (20%)</h3>
            <div className="text-right font-bold font-outfit text-xl text-green-600">-$4.12</div>
          </div>

          <div className="bg-[#121212] text-white p-6 flex justify-between items-center mt-8">
            <span className="font-bold tracking-widest uppercase text-[11px]">Total Estimated Price</span>
            <span className="font-black font-outfit text-3xl">$16.46</span>
          </div>
          
          <p className="text-[10px] uppercase font-bold tracking-widest text-black/50 text-center mt-6">
            1 Free Revision Included / Pay Only After Review
          </p>
        </div>

        <div className="fixed bottom-0 left-0 w-full bg-[#121212] border-t-4 border-[#6366F1] py-4 px-10 md:px-20 lg:px-[10%] flex justify-end items-center z-50">
          <a href="/dashboard" className="bg-[#6366F1] text-white px-8 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors">Submit Job — Pay After Review</a>
        </div>
      </main>
    </div>
  );
};
