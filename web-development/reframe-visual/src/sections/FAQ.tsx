import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { q: "How fast can I get my images back?", a: "We offer three guaranteed turnaround options: 24h, 48h, and 72h. Pricing varies based on the speed you select during job creation." },
  { q: "Do humans or AI do the editing?", a: "Humans do ALL the editing. AI is used exclusively for workflow operations—job routing, QA flagging, progress tracking, and file management. AI does not touch your images." },
  { q: "What is the 100% refund guarantee?", a: "If you're unsatisfied with the results even after a revision, we'll issue a full refund. No questions asked. We stand by the quality of our human retouchers." },
  { q: "What file formats do you support?", a: "We support JPG, PNG, and TIFF files up to 50MB each. RAW support is on our post-MVP roadmap." },
  { q: "Is Reframe for photographers too?", a: "Yes! While built with eCommerce in mind, photographers and agencies use Reframe for specialized retouching and high-volume catalog work." },
];

export const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-white border-b border-black/5">
      <div className="container mx-auto px-6 md:px-20 max-w-4xl border-l-[3px] border-black pl-8">
        <h2 className="text-4xl md:text-6xl font-outfit font-black tracking-tight text-black mb-16 uppercase leading-none">
          Questions <br/>worth asking.
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-black/5 rounded-3xl rounded-md overflow-hidden shadow-[0_20px_40px_rgb(0,0,0,0.06)] bg-white transition-all hover:-translate-y-1">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-black hover:text-white transition-colors group"
              >
                <span className="text-base font-outfit font-black uppercase tracking-wide group-hover:text-white">{faq.q}</span>
                {open === i ? <ChevronUp className="w-6 h-6 shrink-0" strokeWidth={3} /> : <ChevronDown className="w-6 h-6 shrink-0" strokeWidth={3} />}
              </button>
              {open === i && (
                <div className="p-6 border-t-2 border-black text-sm font-semibold text-black leading-relaxed bg-[#F8F9FA]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
