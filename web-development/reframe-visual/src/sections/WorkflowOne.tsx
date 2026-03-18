import React from 'react';

export const WorkflowOne: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white border-b border-black/5">
      <div className="container mx-auto px-6 md:px-20 grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        
        <div className="flex flex-col gap-10 order-2 lg:order-1 border-l-[3px] border-black pl-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-outfit font-black tracking-tight text-black leading-[0.9] uppercase">
              Your product is great. <br/>Now make it impossible to scroll past.
            </h2>
            <p className="text-sm font-bold tracking-widest text-[#6366F1] uppercase mt-2">
              Three steps. That's it.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex gap-6 py-6 border-b border-black/5">
              <div className="w-8 h-8 rounded-sm bg-black border border-black/5 rounded-3xl flex items-center justify-center text-xs font-black text-white shrink-0">1</div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[14px] font-black text-black uppercase tracking-widest">Upload Your Catalog</h4>
                <p className="text-black text-xs font-semibold leading-relaxed">Drag and drop or sync via Google Drive/Dropbox.</p>
              </div>
            </div>

            <div className="flex gap-6 py-6 border-b border-black/5">
              <div className="w-8 h-8 rounded-sm bg-black border border-black/5 rounded-3xl flex items-center justify-center text-xs font-black text-white shrink-0">2</div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[14px] font-black text-black uppercase tracking-widest">Select Services</h4>
                <p className="text-black text-xs font-semibold leading-relaxed">Pick from 19 specialized human-editing services.</p>
              </div>
            </div>

            <div className="flex gap-6 py-6">
              <div className="w-8 h-8 rounded-sm bg-[#6366F1] border border-black/5 rounded-3xl flex items-center justify-center text-xs font-black text-white shrink-0 shadow-[2px_2px_0px_#121212]">3</div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[14px] font-black text-black uppercase tracking-widest">Review & Pay</h4>
                <p className="text-black text-xs font-semibold leading-relaxed">Inspect watermarked previews. Pay only after you approve.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 lg:translate-x-4">
          <div className="relative bg-white border border-black/5 rounded-3xl rounded-lg p-3 shadow-[8px_8px_0px_#6366F1] overflow-hidden aspect-[4/3] lg:h-[450px]">
            <div className="absolute inset-0 bg-[url('/images/generated-1773485847782.png')] bg-cover bg-center rounded-sm"></div>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 border border-black/5 rounded-3xl rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
               <div className="text-[10px] font-black uppercase tracking-widest text-black mb-1">The Reframe Platform</div>
               <div className="text-xs font-bold text-black uppercase">Dashboard — order tracking</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
