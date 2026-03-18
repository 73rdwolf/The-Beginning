import React from 'react';
import { Navigation } from '../components/Navigation';

export const JobDetail: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col font-inter">
      <Navigation />
      <main className="flex-grow py-12 px-10 md:px-20 lg:px-[10%] xl:px-[12%]">
        <div className="flex justify-between items-end mb-8 border-b-2 border-black pb-6">
          <div>
            <span className="text-[12px] font-bold uppercase tracking-widest text-black/40 mb-2 block">JOB-9482</span>
            <h1 className="text-3xl font-outfit font-black tracking-tight uppercase text-black">Spring Collection 2026</h1>
          </div>
          <a href="/jobs/9482/review" className="bg-[#6366F1] text-white px-6 py-3 text-[12px] font-bold tracking-widest uppercase hover:-translate-y-1 border-2 border-black shadow-[4px_4px_0px_#121212] transition-all">
            Review Ready Images
          </a>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-outfit font-bold uppercase tracking-tighter mb-4">Pipeline Progress</h2>
            <div className="bg-white border-2 border-black p-8 rounded-3xl shadow-[4px_4px_0px_#121212] mb-8">
              <div className="flex justify-between items-end mb-2">
                <span className="text-[12px] font-bold uppercase tracking-widest text-[#6366F1]">In Progress</span>
                <span className="text-[12px] font-bold tracking-widest">60%</span>
              </div>
              <div className="w-full h-3 bg-black/10 rounded-full overflow-hidden mb-6">
                <div className="h-full bg-[#6366F1] w-[60%]"></div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[15px] font-medium">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="flex-grow text-black/60">Complexity Approved</span>
                  <span>100%</span>
                </div>
                <div className="flex items-center gap-4 text-[15px] font-medium">
                  <div className="w-3 h-3 bg-[#6366F1] rounded-full"></div>
                  <span className="flex-grow font-bold">Background Removal</span>
                  <span>24 / 42 Complete</span>
                </div>
                <div className="flex items-center gap-4 text-[15px] font-medium">
                  <div className="w-3 h-3 border-2 border-black/20 rounded-full"></div>
                  <span className="flex-grow text-black/40">QA Review</span>
                  <span className="text-black/40">Pending</span>
                </div>
              </div>
            </div>
            
            <h2 className="text-xl font-outfit font-bold uppercase tracking-tighter mb-4">Activity Log</h2>
            <div className="border-l-2 border-black/10 pl-6 space-y-6">
              <div>
                <span className="text-[12px] uppercase font-bold tracking-widest text-[#6366F1] block mb-1">Today, 10:45 AM</span>
                <p className="text-[15px] font-medium">18 images passed QA review. Ready for customer check.</p>
              </div>
              <div>
                <span className="text-[12px] uppercase font-bold tracking-widest text-black/40 block mb-1">Today, 08:00 AM</span>
                <p className="text-[15px] font-medium text-black/60">Job assigned to Editor team lead: M. Stevens.</p>
              </div>
              <div>
                <span className="text-[12px] uppercase font-bold tracking-widest text-black/40 block mb-1">Yesterday, 11:30 PM</span>
                <p className="text-[15px] font-medium text-black/60">Job Submitted. Awaiting Editor Pickup.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-outfit font-bold uppercase tracking-tighter mb-4">Job Details</h2>
            <div className="bg-white border-2 border-black p-6 rounded-3xl shadow-[4px_4px_0px_#121212] flex flex-col gap-4 text-[15px] font-medium">
              <div className="flex justify-between border-b border-black/10 pb-2">
                <span className="text-black/60">Images</span>
                <span className="font-bold">42</span>
              </div>
              <div className="flex justify-between border-b border-black/10 pb-2">
                <span className="text-black/60">Complexity</span>
                <span className="font-bold">Medium</span>
              </div>
              <div className="flex justify-between border-b border-black/10 pb-2">
                <span className="text-black/60">Turnaround</span>
                <span className="font-bold">24h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/60">Expected Delivery</span>
                <span className="font-bold text-[#6366F1]">Tomorrow, 4:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
