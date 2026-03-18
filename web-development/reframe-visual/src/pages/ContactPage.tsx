import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col font-inter">
      <Navigation />
      <main className="flex-grow py-24 px-10 md:px-20 lg:px-[10%] xl:px-[12%]">
        <h1 className="text-4xl md:text-5xl font-outfit font-black tracking-tight uppercase text-black mb-4">Contact Us</h1>
        <p className="text-black/60 font-medium max-w-2xl mb-16">Enterprise volume? Custom integration? Let's talk scale.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">First Name</label>
                <input type="text" className="w-full p-4 border border-black/5 rounded-3xl outline-none font-medium focus:border-[#6366F1]" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">Last Name</label>
                <input type="text" className="w-full p-4 border border-black/5 rounded-3xl outline-none font-medium focus:border-[#6366F1]" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">Company Email</label>
              <input type="email" className="w-full p-4 border border-black/5 rounded-3xl outline-none font-medium focus:border-[#6366F1]" />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">Monthly Volume (Images)</label>
              <select className="w-full p-4 border border-black/5 rounded-3xl outline-none font-medium text-black focus:border-[#6366F1] bg-white">
                <option>0 - 500</option>
                <option>500 - 2,000</option>
                <option>2,000 - 10,000</option>
                <option>10,000+</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">Message</label>
              <textarea rows={5} className="w-full p-4 border border-black/5 rounded-3xl outline-none font-medium focus:border-[#6366F1] resize-none"></textarea>
            </div>
            <button type="button" className="bg-black text-white py-4 uppercase text-[11px] font-bold tracking-wider border border-black/5 rounded-3xl hover:-translate-y-1 shadow-[0_8px_30px_rgba(99,102,241,0.15)] transition-all self-start px-12">
              Send Message —
            </button>
          </form>

          <div className="bg-[#121212] text-white p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-outfit font-black uppercase tracking-tight mb-8">Direct Lines</h3>
            <div className="space-y-8">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#6366F1] block mb-1">General Support</span>
                <span className="text-lg font-medium">support@reframevisual.com</span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#6366F1] block mb-1">API & Enterprise Link</span>
                <span className="text-lg font-medium">enterprise@reframevisual.com</span>
              </div>
              <div className="pt-8 border-t border-white/20">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 block mb-1">Global Headquarters</span>
                <span className="text-sm font-medium text-white/80 leading-relaxed block max-w-[200px]">1130 NY Metropolitan Pl.<br/>New York, NY 10013<br/>United States</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
