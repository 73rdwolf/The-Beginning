import React from 'react';
import { motion } from 'framer-motion';

const tags = [
  "HUMAN-PATHED", "NO AUTOMATED WANDS", "EDITORIAL-GRADE", 
  "100% REFUND GUARANTEE", "PIXEL-PERFECT", "FLAWLESS TRANSITIONS", 
  "ENTERPRISE BATCHING", "AGENCY SCALING", "NO AI TRAINING"
];

export const Ticker: React.FC = () => {
  return (
    <div className="bg-[#6366F1] py-5 overflow-hidden border-y border-indigo-400 relative">
      {/* Gradient masks for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#6366F1] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#6366F1] to-transparent z-10 pointer-events-none"></div>
      
      <motion.div 
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
      >
        <div className="flex px-4">
          {tags.map((tag, idx) => (
            <div key={idx} className="flex items-center text-white mr-12 whitespace-nowrap">
              <span className="font-outfit font-black uppercase text-xs tracking-widest">{tag}</span>
              <span className="ml-12 text-white/40 font-bold">•</span>
            </div>
          ))}
        </div>
        <div className="flex px-4">
          {tags.map((tag, idx) => (
            <div key={'dup'+idx} className="flex items-center text-white mr-12 whitespace-nowrap">
              <span className="font-outfit font-black uppercase text-xs tracking-widest">{tag}</span>
              <span className="ml-12 text-white/40 font-bold">•</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
