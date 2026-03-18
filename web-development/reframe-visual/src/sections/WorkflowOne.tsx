import React from 'react';
import { MousePointer2, Clock, CheckCircle } from 'lucide-react';

export const WorkflowOne: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-border-primary">
      <div className="container mx-auto px-4 md:px-20 grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-[36px] font-bold tracking-tight text-gray-900 leading-[1.2] max-w-md">
              Your product is great. Now make it impossible to scroll past.
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed max-w-lg font-normal">
              Three steps. That's it.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex gap-4 py-6 border-b border-border-primary">
              <div className="w-7 h-7 rounded-full border-[1.5px] border-accent-blue flex items-center justify-center text-xs font-bold text-accent-blue">1</div>
              <div className="flex flex-col gap-1">
                <h4 className="text-[17px] font-bold text-gray-900">Upload Your Catalog</h4>
                <p className="text-text-secondary text-sm">Drag and drop or sync via Google Drive/Dropbox.</p>
              </div>
            </div>

            <div className="flex gap-4 py-6 border-b border-border-primary">
              <div className="w-7 h-7 rounded-full border-[1.5px] border-accent-blue flex items-center justify-center text-xs font-bold text-accent-blue">2</div>
              <div className="flex flex-col gap-1">
                <h4 className="text-[17px] font-bold text-gray-900">Select Services</h4>
                <p className="text-text-secondary text-sm">Pick from 19 specialized human-editing services.</p>
              </div>
            </div>

            <div className="flex gap-4 py-6">
              <div className="w-7 h-7 rounded-full bg-[#EAF3DE] border-[1.5px] border-[#3B6D11] flex items-center justify-center text-xs font-bold text-[#3B6D11]">3</div>
              <div className="flex flex-col gap-1">
                <h4 className="text-[17px] font-bold text-gray-900">Review & Pay</h4>
                <p className="text-text-secondary text-sm">Inspect watermarked previews. Pay only after you approve.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="relative bg-white border border-border-primary rounded-[40px] p-4 shadow-xl overflow-hidden aspect-[4/3] lg:h-[400px]">
            <div className="absolute inset-0 bg-[url('/images/generated-1773485847782.png')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-black/5"></div>
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/40 backdrop-blur-md rounded-2xl border border-white/20">
               <div className="text-sm text-text-muted">The Reframe Platform</div>
               <div className="text-[13px] text-text-muted">Dashboard — order tracking</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
