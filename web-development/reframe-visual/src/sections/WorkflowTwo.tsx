import React from 'react';

export const WorkflowTwo: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white border-b border-black/5">
      <div className="container mx-auto px-6 md:px-20 grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        <div className="bg-black text-white rounded-md h-[400px] border border-black/5 rounded-3xl flex flex-col items-center justify-center text-[11px] font-black uppercase tracking-widest shadow-[0_20px_40px_rgba(99,102,241,0.2)] p-8 text-center">
           Industry Villain Placeholder
           <p className="font-normal tracking-wide opacity-50 text-[10px] mt-4 max-w-[200px]">Insert an asset demonstrating a bad workflow here.</p>
        </div>
        <div className="flex flex-col gap-8 border-l-[3px] border-black pl-8">
          <h2 className="text-5xl md:text-6xl font-outfit font-black tracking-tight text-black leading-[0.9] uppercase">
            The industry <br/>standard is broken.
          </h2>
          <p className="text-sm font-bold tracking-widest text-[#6366F1] leading-relaxed uppercase">
            Outsourcing to unregulated marketplaces means inconsistent quality, slow communication, 
            and paying upfront for work you haven't seen. It doesn't scale.
          </p>
          <a href="/services" className="w-fit text-[11px] font-black tracking-wider uppercase text-black hover:text-[#6366F1] hover:underline underline-offset-4 cursor-pointer mt-4">
            See how Reframe scales →
          </a>
        </div>
      </div>
    </section>
  );
};
