import React from 'react';
import { Menu } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

export const Navigation: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-white/78 backdrop-blur-xl">
      <div className="page-wrap flex items-center justify-between py-4 text-black">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-outfit font-black uppercase tracking-tight md:text-3xl">
            Reframe
          </Link>
          <div className="mt-1 hidden text-[10px] font-bold uppercase tracking-[0.2em] text-black/34 md:block">
            |&nbsp;&nbsp;&nbsp;&nbsp;Elevating every visual
          </div>
        </div>

        <nav className="hidden items-center gap-3 rounded-full border border-black/8 bg-white/76 p-2 shadow-[0_18px_45px_rgba(18,18,18,0.06)] lg:flex">
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] ${
                isActive ? 'bg-black text-white' : 'text-black/60 hover:bg-black/5 hover:text-black'
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] ${
                isActive ? 'bg-black text-white' : 'text-black/60 hover:bg-black/5 hover:text-black'
              }`
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] ${
                isActive ? 'bg-black text-white' : 'text-black/60 hover:bg-black/5 hover:text-black'
              }`
            }
          >
            About
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/login" className="hidden rounded-full px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-black/64 hover:bg-black/5 hover:text-black md:inline-flex">
            Login
          </Link>
          <Link to="/jobs/new/services" className="cta-primary px-6 py-3 text-[10px] font-bold uppercase tracking-[0.16em]">
            Start for Free â€”
          </Link>
          <button type="button" className="inline-flex rounded-full border border-black/10 bg-white/82 p-3 text-black lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
