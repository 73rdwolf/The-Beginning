import React from 'react';
import { Menu } from 'lucide-react';

export const Navigation: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black px-8 md:px-16 lg:px-[5%] py-4 flex items-center justify-between text-black">
      <div className="flex items-center gap-4">
        <div className="text-2xl md:text-3xl font-outfit font-black tracking-tight uppercase">Reframe</div>
        <div className="hidden md:block text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mt-1">
          |&nbsp;&nbsp;&nbsp;&nbsp;Elevating every visual
        </div>
      </div>
      
      <nav className="hidden lg:flex items-center gap-12">
        <a href="#services" className="text-[11px] font-black tracking-[0.15em] hover:text-brand-primary transition-colors uppercase">Services</a>
        <a href="#pricing" className="text-[11px] font-black tracking-[0.15em] hover:text-brand-primary transition-colors uppercase">Pricing</a>
        <a href="#about" className="text-[11px] font-black tracking-[0.15em] hover:text-brand-primary transition-colors uppercase">About</a>
      </nav>

      <div className="flex items-center gap-8">
        <button className="hidden md:flex items-center gap-2 text-[11px] font-black tracking-[0.15em] uppercase hover:text-brand-primary transition-colors">
          Login
        </button>
        <button className="bg-black text-white px-6 py-3 rounded-md text-[10px] font-black tracking-[0.15em] uppercase border border-black shadow-[4px_4px_0px_#6366F1] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#6366F1] transition-all">
          Start for Free —
        </button>
        <div className="lg:hidden p-2">
          <Menu className="w-6 h-6" />
        </div>
      </div>
    </header>
  );
};
