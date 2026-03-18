import React from 'react';

export const Integrations: React.FC = () => {
  const methods = ["Google Drive", "Dropbox", "Direct Upload", "External Link"];

  return (
    <section className="py-24 md:py-32 bg-white border-b border-black">
      <div className="container mx-auto px-6 md:px-20 grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        <div className="grid grid-cols-2 gap-6 order-2 lg:order-1">
          {methods.map((method, i) => (
            <div key={i} className="h-[80px] flex items-center justify-center border-2 border-black rounded-md bg-white text-black text-[11px] font-black uppercase tracking-widest hover:bg-[#6366F1] hover:border-[#6366F1] hover:text-white transition-all shadow-[4px_4px_0px_#121212] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#121212] cursor-pointer">
              {method}
            </div>
          ))}
        </div>
        
        <div className="flex flex-col gap-10 order-1 lg:order-2 border-l-[3px] border-black pl-8">
          <div className="flex flex-col gap-6">
            <h2 className="text-5xl md:text-7xl font-outfit font-black tracking-tight text-black leading-[0.9] uppercase">
              Your files. <br/>Your way.
            </h2>
            <p className="text-sm font-bold tracking-widest text-[#6366F1] leading-relaxed uppercase">
              Upload via Google Drive, Dropbox, direct upload, or paste any link. 
              <br/>Shopify and Zapier integrations coming soon.
            </p>
          </div>
          <a href="#how" className="w-fit text-[11px] font-black tracking-[0.15em] uppercase text-black hover:text-[#6366F1] hover:underline underline-offset-4 cursor-pointer">
            See how uploads work →
          </a>
        </div>
      </div>
    </section>
  );
};
