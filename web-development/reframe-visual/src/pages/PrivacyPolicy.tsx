import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col font-inter">
      <Navigation />
      <main className="flex-grow py-24 px-10 md:px-20 lg:px-[10%] xl:px-[12%]">
        <h1 className="text-4xl md:text-5xl font-outfit font-black tracking-tight uppercase text-black mb-16">Privacy Policy</h1>
        <div className="bg-white border border-black/5 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] prose prose-lg text-black/80 font-medium max-w-4xl">
          <p className="mb-4">We respect your absolute privacy across all proprietary photography uploaded to Reframe Visual.</p>
          <p className="mb-4">We do not train generalized AI models on customer images without explicit enterprise permission. Customer files are purged 30 days post-payment to ensure no lingering liability.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
