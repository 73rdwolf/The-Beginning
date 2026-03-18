import React from 'react';
import { ArrowRight, Image as ImageIcon, Maximize, Scissors, Sparkles, Layers, Frame, Palette, User } from 'lucide-react';

const services = [
  { name: "Background Removal", icon: Scissors, desc: "Clean, precise cutouts for any product image." },
  { name: "High-End Retouching", icon: Sparkles, desc: "Flawless skin, texture, and detail enhancement." },
  { name: "Ghost Mannequin", icon: User, desc: "Invisible mannequin effect for apparel brands." },
  { name: "Color Correction", icon: Palette, desc: "Accurate, consistent color matching." },
  { name: "Shadow Creation", icon: Layers, desc: "Natural, realistic shadows for depth." },
  { name: "Image Masking", icon: Maximize, desc: "Detailed masking for complex edges." },
  { name: "Product Cleanup", icon: ImageIcon, desc: "Removing dust, scratches, and imperfections." },
  { name: "Clipping Path", icon: Frame, desc: "Hand-drawn paths for total control." },
];

export const ServicesIndex: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-white border-b border-black">
      <div className="container mx-auto px-6 md:px-20 border-l-[3px] border-black pl-8 lg:px-24">
        
        <div className="flex flex-col gap-6 mb-16 md:mb-24 mt-8">
          <h2 className="text-4xl md:text-6xl lg:text-[72px] font-outfit font-black tracking-tight text-black uppercase leading-[0.9]">
            What <br/>we offer.
          </h2>
          <p className="text-sm font-bold tracking-widest text-[#6366F1] uppercase max-w-2xl leading-relaxed">
            19 specialized editing services — from background removal to high-end retouching. 
            All performed by expert human editors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc, i) => (
            <div key={i} className="group p-8 rounded-lg border-2 border-black bg-white hover:bg-[#F9F9F9] shadow-[6px_6px_0px_#6366F1] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_#6366F1] duration-200">
              <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mb-8 border border-black">
                <svc.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-base font-outfit font-black text-black uppercase mb-3 tracking-wide">{svc.name}</h3>
              <p className="text-xs font-medium text-black leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <a href="/services" className="inline-flex items-center justify-center gap-3 bg-white text-black border-2 border-black rounded-2xl px-8 py-4 text-[11px] font-black tracking-[0.15em] uppercase hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_#121212]">
            Explore All 19 Services <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
