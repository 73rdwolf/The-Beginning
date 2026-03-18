import React from 'react';
import { motion } from 'framer-motion';

export const WorkflowOne: React.FC = () => {
  return (
    <section className="py-32 px-10 md:px-20 lg:px-[10%] xl:px-[12%] bg-white border-b border-black/5 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#6366F1] font-bold tracking-widest uppercase text-[10px] mb-6 block">Phase 01 — Logistics</span>
          <h2 className="text-5xl md:text-7xl font-outfit font-black tracking-tight text-black uppercase leading-[0.9] mb-10">
            Frictionless <br />Asset Ingestion.
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
               <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-outfit font-black flex-shrink-0 shadow-lg">1</div>
               <p className="text-lg font-medium text-black/70 italic leading-relaxed">"Drop 10 images or 10,000. Our pipeline handles the extraction metadata automatically."</p>
            </div>
            <p className="text-sm font-medium text-black/50 leading-relaxed pl-16">Connect your S3 buckets, DAM systems, or direct Google Drive links. We route your files across the Reframe network in seconds.</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl border border-black/5 aspect-square shadow-inner flex items-center justify-center p-12 overflow-hidden"
        >
          <div className="bg-white w-full h-full rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.06)] border border-black/5 p-8 flex flex-col justify-center gap-6">
             <div className="h-4 w-1/3 bg-gray-100 rounded-full"></div>
             <div className="h-4 w-1/2 bg-[#6366F1]/10 rounded-full"></div>
             <div className="h-24 w-full bg-gray-50 rounded-2xl"></div>
             <div className="h-4 w-2/3 bg-gray-100 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
