import React from 'react';
import { motion } from 'framer-motion';

const questions = [
  { q: "How fast is delivery?", a: "We offer 5 tiers ranging from 12-hour rush delivery to standard 7-day turnaround for massive catalog batching." },
  { q: "Do you use automated AI tools?", a: "No. Every pixel is hand-pathed by senior retouchers. We use AI only for internal workflow orchestration and QA validation." },
  { q: "What is the refund policy?", a: "Every service includes 1 free human revision. If we cannot meet the structural complexity requirement, we offer a 100% refund." }
];

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-32 px-10 md:px-20 lg:px-[10%] xl:px-[12%] bg-white border-b border-black/5 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#6366F1] font-bold tracking-widest uppercase text-[10px] mb-4 block">Information Desk</span>
          <h2 className="text-4xl md:text-5xl font-outfit font-black uppercase tracking-tight text-black">Common Queries.</h2>
        </motion.div>

        <div className="space-y-6">
          {questions.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50/50 border border-black/5 p-8 rounded-3xl"
            >
              <h3 className="text-lg font-bold uppercase tracking-tight mb-4 flex gap-4">
                <span className="text-[#6366F1]">Q:</span> {item.q}
              </h3>
              <p className="text-black/60 font-medium text-sm leading-relaxed pl-8 border-l-2 border-black/5">
                {item.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
