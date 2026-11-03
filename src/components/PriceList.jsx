import React from 'react';
import { Sparkles, MessageCircle, Info, CheckCircle2 } from 'lucide-react';
import { REGULAR_PRICE_LIST, CONTACT_INFO } from '../data/peanutData';

export default function PriceList({ onOpenOrderModal }) {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Royal Peanuts! I am viewing your Regular Peanut Price List and would like to place an order.'
  )}`;

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-[#FAF5F0] border-t border-[#EFE6DE] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCEFEA] border border-[#F6D7CB] text-[#C2542D] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Pricing</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A170F] tracking-tight mb-4">
            Regular Peanut Price List
          </h2>

          <p className="text-sm sm:text-base text-[#6F5B51]">
            Clear, honest pricing across all packaging options from single snack pouches to wholesale cartons.
          </p>
        </div>

        {/* Notice Banner */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-[#FCEFEA] border border-[#F6D7CB] flex items-start gap-3.5 shadow-xs">
          <div className="w-8 h-8 rounded-full bg-white text-[#C2542D] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
            <Info className="w-4 h-4" />
          </div>
          <div className="text-xs sm:text-sm text-[#6F5B51] leading-relaxed">
            <strong className="text-[#2A170F] font-semibold">Price note / Bulk Discount: </strong>
            Great rates for wholesale and retail packs. Contact us for custom bulk orders or special event discounts on 5+ cartons.
          </div>
        </div>

        {/* Pricing Table Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#EFE6DE] overflow-hidden shadow-sm">
          
          {/* Table Header */}
          <div className="bg-[#2A170F] text-white px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between text-xs sm:text-sm font-bold uppercase tracking-wider">
            <div className="w-1/3 text-left">Product & Size</div>
            <div className="hidden sm:block w-1/2 text-left">Packaging / Details</div>
            <div className="w-1/3 sm:w-1/6 text-right">Price</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#F2EAE3]">
            {REGULAR_PRICE_LIST.map((item, index) => {
              const isRecommended = item.badge === 'RECOMMENDED';
              return (
                <div
                  key={index}
                  className={`px-5 sm:px-8 py-4 sm:py-4.5 flex items-center justify-between transition-colors ${
                    isRecommended
                      ? 'bg-[#FDF6F2] hover:bg-[#FBECE4]'
                      : index % 2 === 0
                      ? 'bg-white hover:bg-[#FAF6F2]'
                      : 'bg-[#FCF9F6] hover:bg-[#FAF6F2]'
                  }`}
                >
                  {/* Left: Size & Recommended Badge */}
                  <div className="w-1/2 sm:w-1/3 flex flex-col items-start pr-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-sm sm:text-base text-[#2A170F]">
                        {item.size}
                      </span>
                      {item.badge && (
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                            isRecommended
                              ? 'bg-[#C2542D] text-white'
                              : 'bg-[#FCEFEA] text-[#8C3A1A]'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                    {/* Mobile only packaging subtitle */}
                    <span className="sm:hidden text-[11px] text-[#7C6A60] mt-0.5">
                      {item.packaging}
                    </span>
                  </div>

                  {/* Middle: Packaging (Desktop) */}
                  <div className="hidden sm:block w-1/2 text-left text-xs sm:text-sm text-[#6F5B51]">
                    {item.packaging}
                  </div>

                  {/* Right: Price */}
                  <div className="w-1/2 sm:w-1/6 text-right">
                    <span className="font-serif text-base sm:text-lg font-bold text-[#2A170F]">
                      {item.price}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Table Footer Action Row */}
          <div className="bg-[#FAF6F2] p-5 sm:p-6 border-t border-[#EFE6DE] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#6F5B51]">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              <span>All sizes packed fresh with safety tamper-evident seals.</span>
            </div>
            <button
              onClick={() => onOpenOrderModal()}
              className="text-xs font-semibold text-[#C2542D] hover:underline"
            >
              Open Interactive Order Calculator →
            </button>
          </div>

        </div>

        {/* CTA Button */}
        <div className="mt-8 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#C2542D] hover:bg-[#A9421C] text-white font-semibold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-[#C2542D]/25 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Order Regular Peanuts on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
