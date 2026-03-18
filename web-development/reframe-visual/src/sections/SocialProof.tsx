import React from 'react';

export const SocialProof: React.FC = () => {
  const stats = [
    { num: "9 / 10", desc: "shoppers say image quality is #1 purchase factor" },
    { num: "33%", desc: "avg conversion increase with professional images" },
    { num: "56%", desc: "look at images before titles, prices, or reviews" },
  ];

  return (
    <section className="py-24 md:py-32 bg-white border-b border-black/5">
      <div className="container mx-auto px-6 md:px-20 border-l-[3px] border-black pl-8 lg:px-24">
        <h2 className="text-4xl md:text-6xl font-outfit font-black text-black mb-16 tracking-tight uppercase leading-none">
          The numbers <br/>speak.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white border border-black/5 rounded-3xl p-8 rounded-md flex flex-col items-start gap-4 shadow-[0_20px_40px_rgba(99,102,241,0.2)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#6366F1] transition-all">
              <div className="text-6xl font-outfit font-black text-black tracking-tighter">{stat.num}</div>
              <div className="text-[11px] font-bold text-black uppercase tracking-widest leading-relaxed">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
