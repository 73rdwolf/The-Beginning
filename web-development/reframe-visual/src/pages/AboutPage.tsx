import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col font-inter">
      <Navigation />
      <main className="flex-grow py-24 px-10 md:px-20 lg:px-[10%] xl:px-[12%]">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-outfit font-black tracking-tight uppercase text-black mb-8">About Reframe</h1>
          <h2 className="text-2xl text-[#6366F1] font-outfit font-bold italic uppercase tracking-tighter mb-12">/ AI runs the workflow. Humans do the editing.</h2>
          
          <div className="prose prose-lg text-black/80 font-medium">
            <p className="mb-6">The industry standard for image editing was built for volume resellers, not the businesses doing the actual selling. We grew tired of the slow revision cycles, the upfront payment structures, and the black-box workflow.</p>
            <p className="mb-6">Reframe Visual was built specifically for eCommerce brands, photographers, and marketing agencies that require absolute precision.</p>
            
            <div className="grid grid-cols-2 gap-8 my-16">
              <div className="border-l-4 border-[#6366F1] pl-6">
                <div className="text-4xl font-black font-outfit mb-2">10M+</div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-black/60">Images Processed</div>
              </div>
              <div className="border-l-4 border-[#6366F1] pl-6">
                <div className="text-4xl font-black font-outfit mb-2">99.8%</div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-black/60">Approval Rate</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
