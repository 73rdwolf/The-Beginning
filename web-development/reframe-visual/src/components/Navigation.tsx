import React from 'react';
import { Menu } from 'lucide-react';

export const Navigation: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black px-8 md:px-16 lg:px-[5%] py-4 flex items-center justify-between text-black">
      <div className="flex items-center gap-4">
        <div className="text-2xl md:text-3xl font-outfit font-black tracking-tight uppercase">Reframe</div>
        <div className="hidden md:block text-[12px] font-bold tracking-[0.2em] text-gray-400 uppercase mt-1">
          |&nbsp;&nbsp;&nbsp;&nbsp;Elevating every visual
        </div>
      </div>
      
      <nav className="hidden lg:flex items-center gap-12">
        <a href="/services" className="text-[13.5px] font-bold tracking-widest text-black/60 hover:text-black transition-all duration-300 ease-out uppercase">Services</a>
        <a href="/pricing" className="text-[13.5px] font-bold tracking-widest text-black/60 hover:text-black transition-all duration-300 ease-out uppercase">Pricing</a>
        <a href="/about" className="text-[13.5px] font-bold tracking-widest text-black/60 hover:text-black transition-all duration-300 ease-out uppercase">About</a>
      </nav>

      <div className="flex items-center gap-8">
        <button onClick={() => window.location.href='/login'} className="hidden md:flex items-center gap-2 text-[13.5px] font-bold tracking-widest text-black/60 hover:text-black uppercase transition-all duration-300 ease-out">
          Login
        </button>
        <button onClick={() => window.location.href='/jobs/new/services'} className="bg-black text-white px-8 py-4 rounded-2xl text-[12px] font-bold tracking-widest uppercase hover:-translate-y-0.5 shadow-[0_8px_30px_rgba(124,58,237,0.06)] hover:shadow-[0_16px_40px_rgba(124,58,237,0.15)] transition-all duration-300 ease-out">
          Start for Free —
        </button>
        <div className="lg:hidden p-2">
          <Menu className="w-6 h-6" />
        </div>
      </div>
    </header>
  );
};
