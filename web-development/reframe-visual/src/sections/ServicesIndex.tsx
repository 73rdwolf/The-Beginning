import React from 'react';
import { ArrowRight, Image as ImageIcon, Maximize, Scissors, Sparkles, Layers, Frame, Focus, Palette, User } from 'lucide-react';

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
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col items-center text-center gap-6 mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#101012]">
            What we offer
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
            19 specialized editing services — from background removal to high-end retouching. 
            All performed by expert human editors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc, i) => (
            <div key={i} className="group p-8 rounded-3xl border border-border-primary hover:border-brand-primary/20 hover:bg-surface-soft-white transition-all duration-300">
              <div className="w-12 h-12 bg-surface-atmosphere rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-primary/10 transition-all duration-300">
                <svc.icon className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-lg font-bold text-[#101012] mb-2">{svc.name}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="/services" className="inline-flex items-center gap-2 text-brand-primary font-semibold text-lg hover:underline underline-offset-4">
            Explore All 19 Services <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
