import React from 'react';
import { Menu } from 'lucide-react';

export const Navigation: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-primary px-4 md:px-12 py-4 flex items-center justify-between text-[#101012]">
      <div className="flex items-center gap-6">
        <div className="text-2xl font-bold tracking-tight">Reframe</div>
        <div className="hidden md:block text-sm text-text-secondary">Elevating every visual</div>
      </div>
      
      <nav className="hidden lg:flex items-center gap-8 bg-surface-soft-white px-6 py-2 rounded-full border border-border-primary">
        <a href="#services" className="text-sm font-medium hover:text-brand-primary transition-colors">Services</a>
        <a href="#pricing" className="text-sm font-medium hover:text-brand-primary transition-colors">Pricing</a>
        <a href="#about" className="text-sm font-medium hover:text-brand-primary transition-colors">About</a>
        <a href="#insights" className="text-sm font-medium hover:text-brand-primary transition-colors">Insights</a>
      </nav>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 text-[13px] font-medium px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
          Login
        </button>
        <button className="bg-brand-primary text-white px-6 py-3 rounded-full text-[13px] font-medium hover:bg-[#5e49b8] transition-shadow shadow-sm active:scale-95 duration-200">
          Start for Free →
        </button>
        <div className="lg:hidden p-2">
          <Menu className="w-6 h-6" />
        </div>
      </div>
    </header>
  );
};
