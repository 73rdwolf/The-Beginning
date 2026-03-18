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
    <section className="py-24 md:py-32 bg-white border-t border-border-primary">
      <div className="container mx-auto px-4 md:px-20 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-16">
          Questions worth asking.
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border-primary rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-soft-white transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.q}</span>
                {open === i ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {open === i && (
                <div className="p-6 pt-0 text-text-secondary leading-relaxed bg-surface-soft-white/30">
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
