import React from 'react';

export const BeforeAfterGrid: React.FC = () => {
  const samples = ["BG Removal", "Jewelry Retouch", "Ghost Mannequin", "Model Retouch"];

  return (
    <section className="py-24 md:py-32 bg-white border-t border-border-primary">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col gap-2 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight leading-tight">See the results.</h2>
          <p className="text-xl text-text-secondary leading-relaxed font-normal">Every service. Every detail. Real samples from Reframe editors.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {samples.map((label, i) => (
            <div key={i} className="flex flex-col gap-2 group cursor-pointer">
              <div className="relative h-40 overflow-hidden rounded-2xl border border-border-primary">
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#E8E8E8] to-[#D0D0D0]"></div>
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#EAF3DE] to-[#D4E5C7] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="text-[13px] text-text-secondary text-center font-normal">{label}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
           <a href="#" className="text-brand-primary font-semibold hover:underline">Explore All 19 Services →</a>
        </div>
      </div>
    </section>
  );
};
