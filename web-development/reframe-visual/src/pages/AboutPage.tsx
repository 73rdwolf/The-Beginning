import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col font-inter">
      <Navigation />
      <main className="flex-grow">
        <div className="py-24 px-10 md:px-20 lg:px-[10%] xl:px-[12%]">
          <h1 className="text-5xl md:text-7xl font-outfit font-black uppercase tracking-tight mb-8">The Reframe Engine</h1>
          <p className="text-xl font-medium max-w-3xl text-black/70 leading-relaxed mb-16">
            We are a hybrid team of master retouchers and workflow automation engineers. 
            We built Reframe Visual to solve the single largest bottleneck in global e-commerce: 
            Scaling ultra-premium image output without losing the human artisan touch.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
             <div className="bg-white border-2 border-black p-8 rounded-3xl shadow-[4px_4px_0px_#121212]">
                <h3 className="font-outfit font-black text-2xl uppercase mb-4">No AI Magic Wands.</h3>
                <p className="font-medium text-sm text-black/80">Every single curve, drop shadow, and stray hair is hand-pathed by humans. We strictly use automated technology for routing, QA validation, and tracking, not pixel manipulation.</p>
             </div>
             <div className="bg-white border-2 border-black p-8 rounded-3xl shadow-[4px_4px_0px_#121212]">
                <h3 className="font-outfit font-black text-2xl uppercase mb-4">Zero Compromises.</h3>
                <p className="font-medium text-sm text-black/80">E-commerce shouldn't mean 'low quality'. We deliver editorial-level frequency separation and vectorization at marketplace-level volumes.</p>
             </div>
             <div className="bg-white border-2 border-black p-8 rounded-3xl shadow-[4px_4px_0px_#121212]">
                <h3 className="font-outfit font-black text-2xl uppercase mb-4">Guaranteed QC.</h3>
                <p className="font-medium text-sm text-black/80">Our 4-Agent proprietary framework scans the uploaded assets structurally. We offer a 100% refund guarantee if it fails to hit original complexity marks upon review.</p>
             </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
