import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { name: 'Background Removal', price: 'from $0.31', desc: 'Flawless extraction. Precise multi-point vector clipping paths.', route: '/services/background-removal' },
  { name: 'Shadow Creation', price: 'from $0.47', desc: 'Natural drop, cast, or reflection shadows. Medium complexity baseline.', route: '/services/shadow-creation' },
  { name: 'Color Correction', price: 'from $0.28', desc: 'Exact hex-value color matching and global light correction.', route: '/services/color-correction' },
  { name: 'High-End Retouch', price: 'from $3.20', desc: 'Blemish removal, frequency separation, high-fashion polishing.', route: '/services/high-end-retouch' },
  { name: 'Raster to Vector', price: 'from $3.99', desc: 'Complex scaling and 100% clean path generation.', route: '/services/raster-to-vector' },
  { name: 'Jewelry Retouching', price: 'Variable', desc: 'Specular highlight cleaning and multi-path stone extraction.', route: '/services/jewelry-retouch' }
];

export const ServicesIndex: React.FC = () => {
  return (
    <section id="services" className="bg-[#F9F9F9] py-32 px-10 md:px-20 lg:px-[10%] xl:px-[12%] border-b border-black/5 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8"
      >
        <div>
          <span className="text-[#6366F1] font-bold tracking-widest uppercase text-[12px] mb-4 block">The Arsenal</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-black uppercase tracking-tight text-black">
            Pixel-Perfect <br />
            Scalability.
          </h2>
        </div>
        <p className="max-w-md text-black/60 font-medium">
          A dedicated global network of senior retouchers executing 19 extremely precise, catalog-ready manipulation services. Stop relying on automated filters that destroy edges.
        </p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((svc, idx) => (
          <motion.a 
            href={svc.route}
            key={idx} 
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 }
            }}
            className="group block bg-white border border-black/5 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-16">
              <h3 className="text-xl font-bold uppercase tracking-tight w-2/3">{svc.name}</h3>
              <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#6366F1] group-hover:text-white group-hover:border-transparent transition-colors">
                <span className="transform -rotate-45 group-hover:rotate-0 transition-transform">→</span>
              </div>
            </div>
            
            <div className="border-t border-black/5 pt-6">
              <p className="text-black/60 text-[15px] font-medium mb-4">{svc.desc}</p>
              <div className="flex justify-between items-end">
                <div className="font-outfit font-black text-xl">{svc.price}</div>
                <span className="text-[12px] uppercase font-bold tracking-widest text-[#6366F1]">Review Complexities</span>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 flex justify-center"
      >
        <a href="/services" className="inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-full text-[13.5px] font-bold tracking-wider uppercase hover:-translate-y-1 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all">
          Explore All 19 Services —
        </a>
      </motion.div>
    </section>
  );
};
