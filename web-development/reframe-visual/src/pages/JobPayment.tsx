import React from 'react';
import { Navigation } from '../components/Navigation';

export const JobPayment: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col font-inter">
      <Navigation />
      <main className="flex-grow py-24 px-10 flex items-center justify-center">
        <div className="bg-white border-2 border-black p-12 max-w-lg w-full shadow-[8px_8px_0px_#121212]">
          <h1 className="text-2xl font-outfit font-black tracking-tight uppercase text-black mb-2 text-center">Secure Payment</h1>
          <p className="text-center text-[15px] font-medium text-black/60 mb-8 pb-8 border-b-2 border-black/10">Job: Spring Collection 2026</p>
          
          <div className="flex justify-between items-center mb-8">
             <span className="font-bold tracking-widest uppercase text-[13.5px] text-black/60">Amount Due</span>
             <span className="font-black font-outfit text-4xl text-black">$16.46</span>
          </div>

          <button className="w-full bg-black text-white py-4 uppercase text-[13.5px] font-bold tracking-[0.15em] border-2 border-black hover:-translate-y-1 hover:shadow-[4px_4px_0px_#6366F1] transition-all mb-4">
            Pay via Credit Card
          </button>
          <button className="w-full bg-[#121212]/5 text-black py-4 uppercase text-[13.5px] font-bold tracking-[0.15em] border-2 border-black/20 hover:border-black transition-all">
            Pay via PayPal
          </button>
          
          <p className="text-[12px] uppercase font-bold tracking-widest text-black/40 text-center mt-8">
            Downloads unlock immediately after payment.
          </p>
        </div>
      </main>
    </div>
  );
};
