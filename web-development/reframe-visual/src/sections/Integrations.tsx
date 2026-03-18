import React from 'react';
import { motion } from 'framer-motion';

export const Integrations: React.FC = () => {
  const methods = ["Google Drive", "Dropbox", "Direct Upload", "External Link"];

  return (
    <section className="py-24 md:py-32 bg-white border-b border-black/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-20 lg:px-24 grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-2 gap-6 order-2 lg:order-1"
        >
          {methods.map((method, i) => (
            <motion.div 
              key={i} 
              variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}
              className="h-[80px] flex items-center justify-center border border-black/5 rounded-2xl bg-white text-black text-[13.5px] font-black uppercase tracking-widest hover:bg-[#6366F1] hover:border-[#6366F1] hover:text-white transition-all shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(99,102,241,0.1)] cursor-pointer"
            >
              {method}
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-10 order-1 lg:order-2 border-l-4 border-[#6366F1] pl-8"
        >
          <div className="flex flex-col gap-6">
            <h2 className="text-5xl md:text-7xl font-outfit font-black tracking-tight text-black leading-[0.9] uppercase">
              Your files. <br/>Your way.
            </h2>
            <p className="text-[15px] font-bold tracking-widest text-[#6366F1] leading-relaxed uppercase">
              Upload via Google Drive, Dropbox, direct upload, or paste any link. 
              <br/><span className="text-black/40">Shopify and Zapier integrations coming soon.</span>
            </p>
          </div>
          <a href="/about" className="w-fit text-[13.5px] font-black tracking-wider uppercase text-black hover:text-[#6366F1] hover:underline underline-offset-4 cursor-pointer">
            See how uploads work →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
