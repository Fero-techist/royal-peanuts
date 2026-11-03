import React from 'react';
import { Crown, Flame, HeartHandshake, Sparkles } from 'lucide-react';
import { FEATURES } from '../data/peanutData';

const iconMap = {
  Crown,
  Flame,
  HeartHandshake,
  Sparkles,
};

export default function FeatureBar() {
  return (
    <section className="py-6 sm:py-8 border-y border-[#EFE6DE] bg-[#FAF3EC]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {FEATURES.map((feat) => {
            const IconComponent = iconMap[feat.icon] || Sparkles;
            return (
              <div
                key={feat.id}
                className="bg-white/80 hover:bg-white rounded-2xl p-4 sm:p-5 border border-[#EFE6DE] shadow-xs hover:shadow-md transition-all duration-200 flex items-start gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FCEFEA] text-[#C2542D] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold text-[#2A170F] mb-1">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[#6F5B51] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
