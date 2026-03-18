import React from 'react';

export const Integrations: React.FC = () => {
  const methods = ["Google Drive", "Dropbox", "Direct Upload", "External Link"];

  return (
    <section className="py-24 md:py-32 bg-white border-t border-border-primary">
      <div className="container mx-auto px-4 md:px-20 grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        <div className="grid grid-cols-2 gap-6 order-2 lg:order-1">
          {methods.map((method, i) => (
            <div key={i} className="h-[72px] flex items-center justify-center border border-border-primary text-text-secondary text-sm font-medium">
              {method}
            </div>
          ))}
        </div>
        
        <div className="flex flex-col gap-8 order-1 lg:order-2">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl md:text-[36px] font-bold tracking-tight text-gray-900 leading-[0.5] py-4">
              Your files. Your way.
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed max-w-lg font-normal">
              Upload via Google Drive, Dropbox, direct upload, or paste any link. 
              Shopify and Zapier integrations coming soon.
            </p>
          </div>
          <a href="#" className="text-brand-primary font-semibold hover:underline">
            See how uploads work →
          </a>
        </div>
      </div>
    </section>
  );
};
