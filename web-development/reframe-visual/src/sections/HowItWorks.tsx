import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    { id: "01. Select Services", title: "Pick what you need. See the price instantly.", desc: "Choose from 19 specialized services and select your desired turnaround time." },
    { id: "02. We Edit", title: "Expert humans go to work.", desc: "Our in-house team handles your images with precision while you track progress live." },
    { id: "03. Review & Pay", title: "Only pay for what you approve.", desc: "Inspect every detail in our before/after viewer. Request revisions or approve and pay." },
  ];

  return (
    <section className="py-24 md:py-32 bg-white border-t border-border-primary">
      <div className="container mx-auto px-4 md:px-20 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 tracking-tight text-center">Three steps to perfect images.</h2>
        <div className="grid md:grid-cols-3 gap-6 w-full">
          {steps.map((step, i) => (
            <div key={i} className="bg-surface-soft-white border border-border-primary p-8 rounded-[24px] flex flex-col gap-4">
              <span className="text-brand-primary text-sm font-bold tracking-tight uppercase">{step.id}</span>
              <h3 className="text-[20px] font-bold text-gray-900 leading-tight">{step.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <button className="mt-16 bg-brand-primary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-900/10 active:scale-95 duration-200">
           Create a Job →
        </button>
      </div>
    </section>
  );
};
