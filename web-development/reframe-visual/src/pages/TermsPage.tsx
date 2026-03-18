import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col font-inter">
      <Navigation />
      <main className="flex-grow py-24 px-10 md:px-20 lg:px-[10%] xl:px-[12%]">
        <h1 className="text-4xl md:text-5xl font-outfit font-black tracking-tight uppercase text-black mb-16">Terms of Service</h1>
        <div className="bg-white border-2 border-black p-8 rounded-3xl shadow-[4px_4px_0px_#121212] prose prose-lg text-black/80 font-medium max-w-4xl">
          <p className="mb-4">By utilizing Reframe Visual's editing platform, you agree strictly to our operational rules:</p>
          <p className="mb-4">1. The '100% Refund Guarantee' applies strictly to the 1 free revision provided within your base tier and requires valid communication of rejection prior to file download.</p>
          <p className="mb-4">2. Turnaround timers begin strictly following in-house complexity approval.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
