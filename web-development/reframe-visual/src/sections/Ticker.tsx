import React from 'react';
import { Sparkles, Users, Eye, Zap, DollarSign, Activity } from 'lucide-react';

const tickerItems = [
  { text: "AI runs workflow. Humans do the editing.", icon: Sparkles },
  { text: "For eCommerce brands, photographers, agencies.", icon: Users },
  { text: "Review before you pay — not after.", icon: Eye },
  { text: "24h turnaround. Set by you.", icon: Zap },
  { text: "Starting at $0.19/image.", icon: DollarSign },
  { text: "Real-time tracking. No black box.", icon: Activity },
];

export const Ticker: React.FC = () => {
  return (
    <div className="bg-black py-4 border-b border-black overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap">
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <div key={i} className="flex items-center gap-3 px-12 border-r border-white/20 last:border-0">
            <item.icon className="w-4 h-4 text-white" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-white">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
