import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const plans = [
  { name: "Marketplace Ready", price: "0.49", services: ["BG Removal", "Shadow", "Color Correction"] },
  { name: "Ghost Mannequin", price: "1.54", services: ["Ghost + Garment", "Color", "BG"], popular: true },
  { name: "Jewelry Essentials", price: "1.54", services: ["BG Removal", "Jewelry Retouch", "Shadow"] },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white border-b border-black">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col gap-6 mb-24 max-w-2xl border-l-8 border-black pl-12">
          <h2 className="text-5xl md:text-7xl font-black text-black leading-none uppercase">
            Pricing built <br />differently.
          </h2>
          <p className="text-xl text-text-secondary font-medium leading-relaxed">
            The industry built its pricing for resellers. Reframe pricing is built for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`relative p-10 rounded-2xl border-2 ${plan.popular ? 'border-brand-primary bg-bg-secondary/30' : 'border-black bg-white'} flex flex-col gap-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1`}>
              {plan.popular && <div className="absolute top-0 right-10 -translate-y-1/2 bg-brand-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Most Popular</div>}
              <div>
                <h3 className="text-xl font-black text-black uppercase mb-4 tracking-tight leading-none">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-black tracking-tighter">${plan.price}</span>
                  <span className="text-text-secondary font-bold text-xs uppercase tracking-widest">/ image</span>
                </div>
              </div>
              <div className="h-[2px] bg-black w-full opacity-10"></div>
              <ul className="space-y-4 flex-grow">
                {plan.services.map((svc, j) => (
                  <li key={j} className="flex items-center gap-3 text-xs font-bold uppercase text-black tracking-wide">
                    <Check className="w-4 h-4 text-brand-primary" /> {svc}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-lg font-black text-xs uppercase tracking-widest transition-all ${plan.popular ? 'bg-brand-primary text-white hover:bg-black' : 'bg-black text-white hover:bg-brand-primary'} active:scale-95 duration-200`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
