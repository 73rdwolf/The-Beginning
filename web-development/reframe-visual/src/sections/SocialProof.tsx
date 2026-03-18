import React from 'react';

export const SocialProof: React.FC = () => {
  const stats = [
    { num: "9 / 10", desc: "shoppers say image quality is #1 purchase factor" },
    { num: "33%", desc: "avg conversion increase with professional images" },
    { num: "56%", desc: "look at images before titles, prices, or reviews" },
  ];

  return (
    <section className="py-24 bg-bg-secondary border-t border-border-primary">
      <div className="container mx-auto px-4 md:px-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 tracking-tight">The numbers speak.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#FDFDFF] border border-border-primary p-6 rounded-2xl flex flex-col items-center text-center gap-2">
              <div className="text-5xl font-bold text-brand-primary tracking-tighter">{stat.num}</div>
              <div className="text-sm text-text-secondary leading-relaxed font-normal">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
