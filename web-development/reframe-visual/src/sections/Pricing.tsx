import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  { name: "Marketplace Ready", price: "0.49", services: ["BG Removal", "Shadow", "Color Correction"] },
  { name: "Ghost Mannequin", price: "1.54", services: ["Ghost + Garment", "Color", "BG"], popular: true },
  { name: "Jewelry Essentials", price: "1.54", services: ["BG Removal", "Jewelry Retouch", "Shadow"] },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white border-b border-black">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col gap-6 mb-24 max-w-3xl border-l-[3px] border-black pl-8">
          <h2 className="text-5xl md:text-7xl font-outfit font-black text-black leading-none uppercase">
            Pricing built <br />differently.
          </h2>
          <p className="text-sm font-bold tracking-widest text-[#6366F1] uppercase leading-relaxed">
            The industry built its pricing for resellers. Reframe pricing is built for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 px-2">
          {plans.map((plan, i) => (
            <div key={i} className={`relative p-10 rounded-xl border-2 ${plan.popular ? 'border-[#6366F1] bg-[#6366F1]/5 shadow-[8px_8px_0px_#6366F1]' : 'border-black bg-white shadow-[8px_8px_0px_#121212]'} flex flex-col gap-8 transition-transform hover:-translate-y-1`}>
              {plan.popular && <div className="absolute -top-3 right-6 bg-black text-white text-[10px] font-black px-4 py-1.5 rounded-xl uppercase tracking-widest">Most Popular</div>}
              <div>
                <h3 className="text-lg font-outfit font-black text-black uppercase mb-4 tracking-tight leading-none">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-outfit font-black text-black tracking-tighter">${plan.price}</span>
                  <span className="text-black font-bold text-[10px] uppercase tracking-widest">/ image</span>
                </div>
              </div>
              <div className={`h-[2px] w-full ${plan.popular ? 'bg-[#6366F1]' : 'bg-black'} opacity-20`}></div>
              <ul className="space-y-5 flex-grow">
                {plan.services.map((svc, j) => (
                  <li key={j} className="flex items-center gap-4 text-[11px] font-black uppercase text-black tracking-widest">
                    <Check className={`w-4 h-4 ${plan.popular ? 'text-[#6366F1]' : 'text-black'}`} strokeWidth={3} /> {svc}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.15em] transition-all border-2 ${plan.popular ? 'bg-[#6366F1] text-white border-[#6366F1] hover:bg-black hover:border-black' : 'bg-white text-black border-black hover:bg-black hover:text-white'} active:scale-95 duration-200 mt-4`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
