import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t-4 border-black py-24 px-6 md:px-20 font-inter">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 mb-16 pb-12 border-b-2 border-black">
          <div className="flex flex-col gap-10 max-w-lg">
            <h2 className="text-4xl sm:text-5xl font-outfit font-black tracking-tight text-black leading-[1.1] uppercase">
              Built for brands that take their visuals seriously.
            </h2>
            <p className="text-sm font-bold tracking-widest text-[#6366F1] uppercase">
              AI runs the workflow. Humans do the editing.
            </p>
            <button className="w-fit bg-black text-white px-8 py-4 rounded-md text-[11px] font-black tracking-[0.15em] uppercase border border-black shadow-[4px_4px_0px_#6366F1] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#6366F1] transition-all">
              Start for Free —
            </button>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-outfit font-black text-black uppercase">Reframe</h4>
              <p className="text-xs font-semibold text-black uppercase tracking-wider">AI runs the workflow.</p>
              <p className="text-xs font-semibold text-black uppercase tracking-wider">Humans do the editing.</p>
              <p className="text-xs font-bold text-[#6366F1] uppercase mt-2 border-t border-black pt-4">Since 2024.</p>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="text-[10px] font-black text-black uppercase tracking-[0.2em] mb-2 border-b border-black pb-2">Quick Links</h4>
              <a href="#services" className="text-[11px] font-bold text-black uppercase hover:text-[#6366F1] tracking-wider transition-colors">Services</a>
              <a href="#pricing" className="text-[11px] font-bold text-black uppercase hover:text-[#6366F1] tracking-wider transition-colors">Pricing</a>
              <a href="#how" className="text-[11px] font-bold text-black uppercase hover:text-[#6366F1] tracking-wider transition-colors">How It Works</a>
              <a href="#faq" className="text-[11px] font-bold text-black uppercase hover:text-[#6366F1] tracking-wider transition-colors">FAQ</a>
            </div>
            <div className="flex flex-col gap-5 mt-8 lg:mt-0">
              <h4 className="text-[10px] font-black text-black uppercase tracking-[0.2em] mb-2 border-b border-black pb-2">All Pages</h4>
              <a href="#about" className="text-[11px] font-bold text-black uppercase hover:text-[#6366F1] tracking-wider transition-colors">About</a>
              <a href="#insights" className="text-[11px] font-bold text-black uppercase hover:text-[#6366F1] tracking-wider transition-colors">Insights</a>
              <a href="#contact" className="text-[11px] font-bold text-black uppercase hover:text-[#6366F1] tracking-wider transition-colors">Contact</a>
              <a href="#privacy" className="text-[11px] font-bold text-black uppercase hover:text-[#6366F1] tracking-wider transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-black uppercase tracking-widest">
          <p>© 2024 REFRAME. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#6366F1] transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-[#6366F1] transition-colors">TERMS</a>
            <a href="#" className="hover:text-[#6366F1] transition-colors">CONTACT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
