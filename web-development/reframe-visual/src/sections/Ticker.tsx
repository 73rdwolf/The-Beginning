import React from 'react';
import { Users, Eye, Zap, DollarSign, Activity } from 'lucide-react';

const tickerItems = [
  { text: "For eCommerce brands, photographers, agencies.", icon: Users },
  { text: "Review before you pay — not after.", icon: Eye },
  { text: "24h turnaround. Set by you.", icon: Zap },
  { text: "Starting at $0.19/image.", icon: DollarSign },
  { text: "Real-time tracking. No black box.", icon: Activity },
];

export const Ticker: React.FC = () => {
  return (
    <div className="bg-black py-5 overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap items-center">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
          <div key={i} className="flex items-center gap-4 px-12 group last:pr-0">
            <item.icon className="w-4 h-4 text-white opacity-80" strokeWidth={2.5} />
            <span className="text-[11px] font-black uppercase tracking-wider text-white">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
