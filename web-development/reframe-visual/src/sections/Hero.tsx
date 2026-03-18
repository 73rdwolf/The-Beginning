import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-surface-atmosphere overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40 text-[#101012]">
      <div className="container mx-auto px-4 md:px-20 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Side: Copy */}
        <div className="flex flex-col gap-8 max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 bg-white border border-border-primary text-text-secondary px-4 py-1.5 rounded-full text-sm font-medium w-fit">
            ✦ Professional image editing from $0.19
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-[64px] font-normal tracking-tight text-gray-900 leading-[1.1]">
              Your product is great. <br />
              Do your images prove it?
            </h1>
            <h2 className="text-4xl md:text-[46px] font-normal italic tracking-tight text-gray-900/60 leading-[1.1]">
              Now make it impossible to scroll past.
            </h2>
          </div>
          
          <p className="text-xl text-text-secondary leading-relaxed max-w-lg font-normal">
            Elite, catalog-ready product photography delivered with absolute precision. 
            Pure craftsmanship for brands that demand perfection.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
            <button className="w-full sm:w-auto bg-brand-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#5e49b8] transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/10 active:scale-95 duration-200">
              ✦ Get 3 Images Edited Free
            </button>
            <button className="w-full sm:w-auto bg-transparent text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100/50 transition-all flex items-center justify-center gap-2 active:scale-95 duration-200">
              See the difference →
            </button>
          </div>

          <div className="flex flex-col gap-2 pt-6">
            <div className="flex items-center gap-3 text-[15px] text-text-secondary">
              <CheckCircle2 className="w-4 h-4 text-brand-primary" /> ISO 9001 Certified Quality
            </div>
            <div className="flex items-center gap-3 text-[15px] text-text-secondary">
              <CheckCircle2 className="w-4 h-4 text-brand-primary" /> 24h Guaranteed Turnaround
            </div>
            <div className="flex items-center gap-3 text-[15px] text-text-secondary">
              <CheckCircle2 className="w-4 h-4 text-brand-primary" /> Review Before You Pay
            </div>
          </div>
        </div>

        {/* Right Side: Before/After Comparison */}
        <div className="relative flex h-[360px] w-full gap-[2px] overflow-hidden rounded-[24px]">
          <div className="relative h-full flex-1 bg-[url('/Concepts/FWdWZ.png')] bg-cover bg-center">
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="text-sm text-text-muted bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">Before</span>
            </div>
          </div>
          <div className="relative h-full flex-1 bg-[url('/images/generated-1773485820304.png')] bg-cover bg-center">
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="text-sm text-[#3B6D11] bg-[#EAF3DE]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#3B6D11]/20">After — Reframe</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
