import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-border-primary py-24 px-4 md:px-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 mb-16 pb-12 border-b border-border-primary">
          <div className="flex flex-col gap-6 max-w-lg">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 leading-[1.2]">
              Built for brands that take their visuals seriously.
            </h2>
            <p className="text-lg text-text-secondary">
              AI runs the workflow. Humans do the editing.
            </p>
            <button className="w-fit bg-[#735CDD] text-white px-6 py-3 rounded-lg font-bold text-[16px]">
              Start for Free →
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold text-gray-900">Reframe</h4>
              <p className="text-sm text-text-secondary">AI runs the workflow.</p>
              <p className="text-sm text-text-secondary">Humans do the editing.</p>
              <p className="text-sm text-text-secondary">Since 2024.</p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-text-secondary uppercase">Quick Links</h4>
              <a href="#" className="text-sm text-text-secondary hover:text-brand-primary">Services</a>
              <a href="#" className="text-sm text-text-secondary hover:text-brand-primary">Pricing</a>
              <a href="#" className="text-sm text-text-secondary hover:text-brand-primary">How It Works</a>
              <a href="#" className="text-sm text-text-secondary hover:text-brand-primary">FAQ</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-text-secondary uppercase">All Pages</h4>
              <a href="#" className="text-sm text-text-secondary hover:text-brand-primary">About</a>
              <a href="#" className="text-sm text-text-secondary hover:text-brand-primary">Insights</a>
              <a href="#" className="text-sm text-text-secondary hover:text-brand-primary">Contact</a>
              <a href="#" className="text-sm text-text-secondary hover:text-brand-primary">Privacy Policy</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-text-muted font-normal">
          <p>© 2024 Reframe. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Privacy · Terms · Contact</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
