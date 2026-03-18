import React from 'react';
import { useParams } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const serviceDatabase: Record<string, any> = {
  'background-removal': {
    title: 'Background Removal', tagline: 'Flawless extraction. Zero edge artifacts.', price: 'from $0.31/img',
    desc: 'Proprietary background removal process leveraging precise multi-point human clipping paths. Perfect for wispy hair, complex silhouettes, and translucent properties.',
    features: ['100% Hand-Drawn Paths', 'Hair Masking Included', 'Multiple Export Formats'],
    pricing: [{speed: '7 Days', simple: '$0.31', complex: '$1.30'}, {speed: '48 Hours', simple: '$0.35', complex: '$0.59'}, {speed: '12 Hours (Rush)', simple: '$0.51', complex: '$1.30'}]
  },
  'shadow-creation': {
    title: 'Shadow Creation', tagline: 'Give your products realistic depth.', price: 'from $0.47/img',
    desc: 'Hyper-realistic natural drop shadows, reflection shadows, and cast shadows that mimic standard studio lighting environments.',
    features: ['Natural Drop Shadows', 'Reflection / Mirror Shadows', 'Perspective Accuracies'],
    pricing: [{speed: '7 Days', simple: '$0.47', complex: '$1.40'}, {speed: '48 Hours', simple: '$0.53', complex: '$1.60'}, {speed: '12 Hours (Rush)', simple: '$0.77', complex: '$2.00'}]
  }
};

export const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = serviceDatabase[id || ''] || {
    title: id?.split('-').map(w => w.toUpperCase()).join(' ') || 'Premium Retouch',
    tagline: 'Professional High-End Pixel Craft.', price: 'from $0.31/img',
    desc: 'Detailed processing handled manually by professional retouchers for pixel-perfect brand assets.',
    features: ['Hand-drawn precision', 'Multiple layers provided', '1 Free Revision Included'],
    pricing: [{speed: '7 Days', simple: '$0.31', complex: '$1.30'}, {speed: '48 Hours', simple: '$0.35', complex: '$1.59'}, {speed: '12 Hours (Rush)', simple: '$0.51', complex: '$2.30'}]
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col font-inter">
      <Navigation />
      <main className="flex-grow pb-32">
        <section className="bg-white border-b-2 border-black py-24 px-10 md:px-20 lg:px-[10%]">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
               <span className="bg-black text-white px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full mb-6 inline-block">Service Deep Dive</span>
               <h1 className="text-5xl md:text-6xl lg:text-7xl font-outfit font-black uppercase tracking-tight text-black leading-none mb-6">{service.title}</h1>
               <h2 className="text-xl md:text-2xl font-bold italic text-[#6366F1] mb-8">{service.tagline}</h2>
               <p className="text-black/70 font-medium text-lg max-w-xl mb-10 leading-relaxed">{service.desc}</p>
               <div className="flex gap-4">
                 <a href="/jobs/new/services" className="bg-[#6366F1] text-white px-8 py-4 rounded-full text-[11px] font-bold tracking-widest uppercase hover:-translate-y-1 shadow-[4px_4px_0px_#121212] transition-transform">Start Job Now —</a>
               </div>
            </div>
            <div className="flex-1 w-full bg-[#121212] rounded-3xl min-h-[400px] border-2 border-black p-8 flex text-center items-center justify-center relative shadow-[6px_6px_0px_#121212]">
               <span className="bg-white border-2 border-black shadow-[4px_4px_0px_#121212] text-black font-black uppercase tracking-widest text-[10px] px-6 py-3 rounded-full relative z-10 transition-transform hover:scale-105 cursor-pointer">Interactive {service.title} Before/After</span>
            </div>
          </div>
        </section>

        <section className="py-24 px-10 md:px-20 lg:px-[10%] flex flex-col lg:flex-row gap-16">
           <div className="flex-1">
             <h3 className="text-3xl font-outfit font-black uppercase tracking-tight mb-8">Key Advantages</h3>
             <ul className="space-y-4">
               {service.features.map((f:string, i:number) => (
                 <li key={i} className="flex gap-4 items-center bg-white p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_#121212]">
                    <span className="bg-[#6366F1] text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-outfit">{i + 1}</span>
                    <span className="font-bold text-black">{f}</span>
                 </li>
               ))}
             </ul>
           </div>
           <div className="flex-1">
             <h3 className="text-3xl font-outfit font-black uppercase tracking-tight mb-8">Service Detail Matrices</h3>
             <div className="bg-white rounded-2xl border-2 border-black shadow-[6px_6px_0px_#121212] overflow-hidden">
                <table className="w-full text-left">
                  <thead><tr className="bg-black text-white uppercase tracking-widest text-[10px] font-bold"><th className="p-6">Speed Option</th><th className="p-6">Simple Tier</th><th className="p-6">Complex Tier</th></tr></thead>
                  <tbody>
                    {service.pricing.map((t:any, i:number) => (
                      <tr key={i} className="border-b-2 border-black hover:bg-black/5">
                        <td className="p-6 font-bold text-[11px] tracking-widest uppercase">{t.speed}</td>
                        <td className="p-6 font-black font-outfit text-xl">{t.simple}</td>
                        <td className="p-6 font-black font-outfit text-[#6366F1]">{t.complex}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
             </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
