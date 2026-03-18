import React from 'react';
import { Navigation } from '../components/Navigation';

export const NewJobUpload: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col font-inter">
      <Navigation />
      <main className="flex-grow py-12 px-10 md:px-20 lg:px-[10%] xl:px-[12%] pb-32">
        <div className="mb-12 border-b-2 border-black pb-6">
          <div className="flex gap-4 mb-4 text-[10px] font-bold tracking-widest uppercase">
            <span className="text-black/60">Step 1: Done</span>
            <span className="text-[#6366F1]">Step 2: Upload</span>
            <span className="text-black/30">Step 3: Review</span>
          </div>
          <h1 className="text-3xl font-outfit font-black tracking-tight uppercase text-black">Upload & Configure</h1>
        </div>
        
        <div className="flex flex-col gap-8 max-w-4xl">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">Job Name</label>
            <input type="text" placeholder="E.g., Spring Collection 2026" className="w-full p-4 border-2 border-black outline-none font-medium focus:border-[#6366F1] transition-colors" />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest mb-4">Select Turnaround Speed (v2.1 Metric)</label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
               {['12h (Rush)', '24h', '48h', '72h', '7 Days'].map((t, idx) => (
                 <label key={idx} className={`border-2 p-4 cursor-pointer hover:border-[#6366F1] transition-colors ${idx === 1 ? 'border-black bg-black/5' : 'border-black/20 bg-white'}`}>
                   <input type="radio" name="turnaround" defaultChecked={idx===1} className="hidden" />
                   <span className="block text-center font-bold uppercase tracking-tight text-sm">{t}</span>
                 </label>
               ))}
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">Upload Images</label>
            <div className="border-2 border-dashed border-black/30 bg-white p-20 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#6366F1] hover:bg-[#6366F1]/5 transition-all">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-light">+</span>
              </div>
              <h3 className="text-xl font-outfit font-bold uppercase tracking-tight mb-2">Drag & Drop Images Here</h3>
              <p className="text-sm font-medium text-black/60">Upload directly or link Google Drive / Dropbox.</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mt-4">JPG, PNG, TIFF — Max 50MB per image</p>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 w-full bg-[#121212] border-t-4 border-[#6366F1] py-4 px-10 md:px-20 lg:px-[10%] flex justify-between items-center z-50">
          <div className="text-white">
            <span className="text-xl font-bold font-outfit block">0 Images Uploaded</span>
            <span className="text-[10px] uppercase tracking-widest text-[#6366F1] font-bold">Total updates based on Turnaround</span>
          </div>
          <a href="/jobs/new/review" className="bg-[#6366F1] text-white px-8 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors">Review & Submit —</a>
        </div>
      </main>
    </div>
  );
};
