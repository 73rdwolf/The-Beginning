import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-black/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.88)_0%,_rgba(242,244,255,0.96)_100%)] py-24">
      <div className="page-wrap">
        <div className="surface-card-strong grid gap-16 p-8 md:p-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex max-w-xl flex-col gap-8">
            <div className="inline-flex w-fit rounded-full border border-black bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] shadow-[4px_4px_0px_#121212]">
              AI runs the workflow. Humans do the editing.
            </div>
            <h2 className="text-4xl font-outfit font-black uppercase leading-[1.02] tracking-tight text-black sm:text-5xl">
              Built for brands that take their visuals seriously.
            </h2>
            <Link to="/jobs/new/services" className="cta-primary w-fit px-8 py-4 text-[11px] font-black uppercase tracking-[0.16em]">
              Start for Free â€”
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-outfit font-black uppercase text-black">Reframe</h4>
              <p className="text-xs font-semibold uppercase tracking-wider text-black/72">AI runs the workflow.</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-black/72">Humans do the editing.</p>
              <p className="border-t border-black/10 pt-4 text-xs font-bold uppercase text-[#6366F1]">Since 2024.</p>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="border-b border-black/10 pb-2 text-[10px] font-black uppercase tracking-[0.2em] text-black/60">
                Quick Links
              </h4>
              <Link to="/services" className="text-[11px] font-bold uppercase tracking-[0.16em] text-black/72 hover:text-[#6366F1]">
                Services
              </Link>
              <Link to="/pricing" className="text-[11px] font-bold uppercase tracking-[0.16em] text-black/72 hover:text-[#6366F1]">
                Pricing
              </Link>
              <Link to="/about" className="text-[11px] font-bold uppercase tracking-[0.16em] text-black/72 hover:text-[#6366F1]">
                How It Works
              </Link>
              <Link to="/faq" className="text-[11px] font-bold uppercase tracking-[0.16em] text-black/72 hover:text-[#6366F1]">
                FAQ
              </Link>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="border-b border-black/10 pb-2 text-[10px] font-black uppercase tracking-[0.2em] text-black/60">
                All Pages
              </h4>
              <Link to="/about" className="text-[11px] font-bold uppercase tracking-[0.16em] text-black/72 hover:text-[#6366F1]">
                About
              </Link>
              <Link to="/insights" className="text-[11px] font-bold uppercase tracking-[0.16em] text-black/72 hover:text-[#6366F1]">
                Insights
              </Link>
              <Link to="/contact" className="text-[11px] font-bold uppercase tracking-[0.16em] text-black/72 hover:text-[#6366F1]">
                Contact
              </Link>
              <Link to="/privacy" className="text-[11px] font-bold uppercase tracking-[0.16em] text-black/72 hover:text-[#6366F1]">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 px-2 text-[10px] font-bold uppercase tracking-[0.18em] text-black/52 md:flex-row">
          <p>Â© 2024 REFRAME. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-[#6366F1]">
              PRIVACY
            </Link>
            <Link to="/terms" className="hover:text-[#6366F1]">
              TERMS
            </Link>
            <Link to="/contact" className="hover:text-[#6366F1]">
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
