import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export const FaqPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col font-inter">
      <Navigation />
      <main className="flex-grow py-24 px-10 md:px-20 lg:px-[10%] xl:px-[12%] max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-outfit font-black tracking-tight uppercase text-black mb-16">FAQ</h1>
        <div className="bg-white border-2 border-black p-8 shadow-[4px_4px_0px_#121212] prose prose-lg text-black/80 font-medium space-y-8">
          
          <div>
            <h3 className="text-[#6366F1] font-bold uppercase tracking-tight text-xl mb-2">Do you use AI to edit images?</h3>
            <p>No. AI strictly orchestrates our backend workflow (routing, QA detection, notifications). Humans manually path and extract every single pixel.</p>
          </div>
          
          <div>
            <h3 className="text-[#6366F1] font-bold uppercase tracking-tight text-xl mb-2">How do revisions work?</h3>
            <p>Every single service applied to an image is entitled to 1 free human revision out-of-the-box. Revisions are executed within 12-24 hours.</p>
          </div>
          
        </div>
      </main>
      <Footer />
    </div>
  );
};
