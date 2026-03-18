import React from 'react';
import { useParams } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export const SolutionDetailPage: React.FC = () => {
  const { industry } = useParams<{ industry: string }>();
  
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col font-inter">
      <Navigation />
      <main className="flex-grow">
        <section className="bg-white border-b-2 border-black py-32 px-10 md:px-20 lg:px-[10%] text-center">
          <span className="bg-[#6366F1] text-white px-3 py-1 text-[12px] font-bold tracking-widest uppercase rounded-full inline-block mb-6">Industry Architecture</span>
          <h1 className="text-5xl md:text-7xl font-outfit font-black uppercase tracking-tight text-black mb-8">{industry?.toUpperCase() || 'SOLUTION'} SCALING</h1>
          <p className="max-w-2xl mx-auto font-medium text-lg text-black/70 mb-12">Discover how Reframe Visual integrates entirely within your specific production ecosystem, enabling massive upload scaling without compromising pixel-quality.</p>
          <a href="/contact" className="bg-black text-white px-8 py-5 rounded-full text-[13.5px] font-black tracking-widest uppercase shadow-[6px_6px_0px_#121212] hover:-translate-y-1 transition-all inline-block">Book {industry} Consultation —</a>
        </section>
      </main>
      <Footer />
    </div>
  );
};
