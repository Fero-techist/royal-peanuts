import React from 'react';
import { Sparkles, ShoppingBag, PackageCheck, TrendingUp, Gift } from 'lucide-react';
import { TARGET_AUDIENCES, CONTACT_INFO } from '../data/peanutData';

const iconMap = {
  ShoppingBag,
  PackageCheck,
  TrendingUp,
  Gift,
};

// Alternating Burnt Orange & Royal Gold Styles
const audienceStyles = {
  retail: {
    iconBg: 'bg-[#FCEFEA]',
    iconText: 'text-[#C2542D]',
    iconBorder: 'border-[#F6D7CB]',
    linkText: 'text-[#C2542D] hover:text-[#A9421C]',
  },
  bulk: {
    iconBg: 'bg-[#FFF9EE]',
    iconText: 'text-[#B38016]',
    iconBorder: 'border-[#F1D688]',
    linkText: 'text-[#8F590A] hover:text-[#6D4205]',
  },
  resellers: {
    iconBg: 'bg-[#FCEFEA]',
    iconText: 'text-[#C2542D]',
    iconBorder: 'border-[#F6D7CB]',
    linkText: 'text-[#C2542D] hover:text-[#A9421C]',
  },
  souvenirs: {
    iconBg: 'bg-[#FFF9EE]',
    iconText: 'text-[#B38016]',
    iconBorder: 'border-[#F1D688]',
    linkText: 'text-[#8F590A] hover:text-[#6D4205]',
  },
};

export default function TargetAudience({ onSelectAudience: _onSelectAudience }) {
  return (
    <section id="audience" className="py-16 sm:py-24 bg-[#FAF5F0] border-t border-[#EFE6DE] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF9EE] border border-[#F1D688] text-[#8F590A] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>For Every Celebration</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A170F] tracking-tight mb-4">
            Something Special for <span className="text-[#C2542D]">Everyone</span>
          </h2>

          <p className="text-sm sm:text-base text-[#6F5B51] max-w-xl mx-auto">
            Whether you need a quick desk snack, hampers for a corporate retreat, or bulk supply for your retail chain.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TARGET_AUDIENCES.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles;
            const style = audienceStyles[item.id] || audienceStyles.retail;
            const waMessage = `Hello King's Peanut! I am interested in ${item.title} options (${item.cta}).`;
            const waLink = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(waMessage)}`;

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#EFE6DE] hover:border-[#F1D688] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  {/* Icon badge */}
                  <div className={`w-12 h-12 rounded-2xl ${style.iconBg} ${style.iconText} border ${style.iconBorder} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-[#2A170F] mb-3 group-hover:text-[#C2542D] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#6F5B51] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Action Link */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold ${style.linkText} group-hover:translate-x-1 transition-all pt-3 border-t border-[#F2EAE3]`}
                >
                  <span>{item.actionText}</span>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
