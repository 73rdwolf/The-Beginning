import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col font-inter">
      <Navigation />
      <main className="flex-grow py-24 px-10 md:px-20 lg:px-[10%] flex flex-col lg:flex-row gap-16">
        <div className="flex-1">
          <h1 className="text-5xl md:text-7xl font-outfit font-black uppercase tracking-tight mb-8">Reach Out</h1>
          <p className="font-medium text-lg text-black/70 mb-12">Looking for API integrations, batch discounts out of the catalog, or enterprise SLA contracts? Drop a direct line to our operations desk.</p>
          
          <div className="bg-black text-white p-8 rounded-3xl border-2 border-[#6366F1] shadow-[8px_8px_0px_#6366F1] mb-8">
            <h4 className="text-[10px] font-bold tracking-widest uppercase mb-4 text-[#6366F1]">Operation HQ</h4>
            <p className="font-bold text-xl mb-1">hello@reframevisual.com</p>
            <p className="text-sm font-medium text-white/50">Average response time: &lt;2 hours.</p>
          </div>
        </div>
        
        <div className="flex-1 bg-white border-2 border-black rounded-3xl shadow-[6px_6px_0px_#121212] p-8 md:p-12">
          <form className="flex flex-col gap-6" onSubmit={(e)=>e.preventDefault()}>
            <div><label className="text-[10px] font-bold uppercase tracking-widest text-[#121212]">Full Name</label><input type="text" className="w-full border-b-2 border-black/20 focus:border-[#6366F1] outline-none py-3 font-medium transition-colors" placeholder="Agency / Brand Contact" /></div>
            <div><label className="text-[10px] font-bold uppercase tracking-widest text-[#121212]">Work Email</label><input type="email" className="w-full border-b-2 border-black/20 focus:border-[#6366F1] outline-none py-3 font-medium transition-colors" placeholder="name@company.com" /></div>
            <div><label className="text-[10px] font-bold uppercase tracking-widest text-[#121212]">Message Scope</label><textarea rows={4} className="w-full border-b-2 border-black/20 focus:border-[#6366F1] outline-none py-3 font-medium transition-colors resize-none" placeholder="We upload around 5,000 apparel SKUs per month..."></textarea></div>
            <button className="bg-[#6366F1] text-white w-full py-5 rounded-full text-[11px] font-black uppercase tracking-widest hover:-translate-y-1 shadow-[4px_4px_0px_#121212] transition-transform mt-4">Send Priority Inquiry —</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};
