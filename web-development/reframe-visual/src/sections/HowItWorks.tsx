import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    { id: "01. Select Services", title: "Pick what you need. See the price instantly.", desc: "Choose from 19 specialized services and select your desired turnaround time." },
    { id: "02. We Edit", title: "Expert humans go to work.", desc: "Our in-house team handles your images with precision while you track progress live." },
    { id: "03. Review & Pay", title: "Only pay for what you approve.", desc: "Inspect every detail in our before/after viewer. Request revisions or approve and pay." },
  ];

  return (
    <section className="py-24 md:py-32 bg-white border-b border-black/5">
      <div className="container mx-auto px-6 md:px-20 flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-outfit font-black text-black mb-16 tracking-tight text-center uppercase leading-none border-b-[3px] border-black pb-8 px-8">
          Three steps to <br/>perfect images.
        </h2>
        <div className="grid md:grid-cols-3 gap-8 w-full">
          {steps.map((step, i) => (
            <div key={i} className="bg-white border border-black/5 rounded-3xl p-8 rounded-md flex flex-col gap-6 shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#6366F1] transition-all">
              <span className="bg-black text-white w-fit px-3 py-1 rounded-sm text-[10px] font-black tracking-widest uppercase">{step.id}</span>
              <h3 className="text-xl font-outfit font-black text-black leading-tight uppercase">{step.title}</h3>
              <p className="text-xs font-bold tracking-wide text-gray-700 leading-relaxed uppercase">{step.desc}</p>
            </div>
          ))}
        </div>
        <button className="mt-20 bg-black text-white px-10 py-5 rounded-md text-[11px] font-black tracking-wider uppercase border border-black/5 rounded-3xl shadow-[5px_5px_0px_#6366F1] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)] transition-all">
           Create a Job —
        </button>
      </div>
    </section>
  );
};
