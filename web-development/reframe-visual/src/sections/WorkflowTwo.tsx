import React from 'react';

export const WorkflowTwo: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-border-primary">
      <div className="container mx-auto px-4 md:px-20 grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        <div className="bg-bg-secondary rounded-[44px] h-[400px] border border-border-primary flex items-center justify-center text-text-muted text-sm">
           Industry Villain Placeholder
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl md:text-[40px] font-bold tracking-tight text-gray-900 leading-[1.1]">
            The industry standard is broken.
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed font-normal">
            Outsourcing to unregulated marketplaces means inconsistent quality, slow communication, 
            and paying upfront for work you haven't seen. It doesn't scale.
          </p>
          <a href="#" className="text-brand-primary font-semibold hover:underline">
            See how Reframe scales →
          </a>
        </div>
      </div>
    </section>
  );
};
