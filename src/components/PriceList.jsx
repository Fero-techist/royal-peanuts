import React, { useState } from 'react';
import { Sparkles, MessageCircle, Info, CheckCircle2, Crown } from 'lucide-react';
import { REGULAR_PRICE_LIST, FLAVORED_PRICE_LIST, CONTACT_INFO } from '../data/peanutData';

const FLAVOR_OPTIONS = [
  {
    id: 'regular',
    name: 'Regular Coated Peanut',
    shortName: 'Regular Coated',
    emoji: '🧡',
    priceList: REGULAR_PRICE_LIST,
    startingPrice: 'From ₦500',
    note: 'Our signature crisp coated recipe roasted fresh daily.',
  },
  {
    id: 'chocolate',
    name: 'Chocolate-Coated Peanut',
    shortName: 'Chocolate-Coated',
    emoji: '🍫',
    priceList: FLAVORED_PRICE_LIST,
    startingPrice: 'From ₦700',
    note: 'Indulgent cocoa glaze. Same price list applies to Peppered & Coconut.',
  },
  {
    id: 'peppered',
    name: 'Peppered Peanut',
    shortName: 'Peppered Peanut',
    emoji: '🌶️',
    priceList: FLAVORED_PRICE_LIST,
    startingPrice: 'From ₦700',
    note: 'Fiery native spice blend. Same price list applies to Chocolate & Coconut.',
  },
  {
    id: 'coconut',
    name: 'Coconut Peanut',
    shortName: 'Coconut Peanut',
    emoji: '🥥',
    priceList: FLAVORED_PRICE_LIST,
    startingPrice: 'From ₦700',
    note: 'Infused toasted coconut crisp. Same price list applies to Chocolate & Peppered.',
  },
];

export default function PriceList({ onOpenOrderModal }) {
  const [activeTab, setActiveTab] = useState('regular');

  const currentFlavor = FLAVOR_OPTIONS.find((f) => f.id === activeTab) || FLAVOR_OPTIONS[0];

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello King's Peanut! I am viewing your ${currentFlavor.name} Price List and would like to place an order.`
  )}`;

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-[#FAF5F0] border-t border-[#EFE6DE] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF9EE] border border-[#F1D688] text-[#8F590A] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Transparent Pricing</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A170F] tracking-tight mb-4">
            Official King’s Peanut <span className="text-[#C2542D]">Price List</span>
          </h2>

          <p className="text-sm sm:text-base text-[#6F5B51]">
            Clear, honest pricing across all packaging options from 100g snacking pouches to wholesale 1-Paint buckets.
          </p>
        </div>

        {/* Flavor Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {FLAVOR_OPTIONS.map((flavor) => (
            <button
              key={flavor.id}
              onClick={() => setActiveTab(flavor.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${activeTab === flavor.id
                ? 'bg-[#C2542D] text-white shadow-md shadow-[#C2542D]/25 ring-2 ring-[#D4AF37]/60 scale-102'
                : 'bg-white hover:bg-[#FFF9EE] text-[#5F4E44] hover:text-[#8F590A] border border-[#EFE6DE] hover:border-[#F1D688]'
                }`}
            >
              <span>{flavor.emoji}</span>
              <span>{flavor.shortName}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full ${activeTab === flavor.id
                  ? 'bg-black/20 text-[#FDE68A]'
                  : 'bg-[#FAF5F0] text-[#8F590A]'
                  }`}
              >
                {flavor.startingPrice}
              </span>
            </button>
          ))}
        </div>

        {/* Notice Banner */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-[#FFF9EE] border border-[#F1D688] flex items-start gap-3.5 shadow-xs">
          <div className="w-8 h-8 rounded-full bg-white text-[#D4AF37] border border-[#F1D688] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
            <Info className="w-4 h-4 text-[#C2542D]" />
          </div>
          <div className="text-xs sm:text-sm text-[#6F5B51] leading-relaxed">
            <strong className="text-[#2A170F] font-semibold">{currentFlavor.name}: </strong>
            {currentFlavor.note} Contact us for special discounts on bulk wholesale cartons (5+ paints or wholesale packs).
          </div>
        </div>

        {/* Pricing Table Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#EFE6DE] hover:border-[#F1D688]/60 overflow-hidden shadow-sm transition-colors">

          {/* Table Header: Dark Brown with Gold Bottom Accent */}
          <div className="bg-[#2A170F] text-white px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between text-xs sm:text-sm font-bold uppercase tracking-wider border-b-2 border-[#D4AF37]">
            <div className="w-1/3 text-left flex items-center gap-2">
              <Crown className="w-4 h-4 text-[#FDE68A]" />
              <span>{currentFlavor.shortName}</span>
            </div>
            <div className="hidden sm:block w-1/2 text-left text-[#DDD1C8]">Package / Packaging Details</div>
            <div className="w-1/3 sm:w-1/6 text-right text-[#FDE68A]">Price</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#F2EAE3]">
            {currentFlavor.priceList.map((item, index) => {
              const isRecommended = item.badge === 'RECOMMENDED';
              return (
                <div
                  key={index}
                  className={`px-5 sm:px-8 py-4 sm:py-4.5 flex items-center justify-between transition-colors ${isRecommended
                    ? 'bg-[#FFF9EE]/70 hover:bg-[#FFF3D6]'
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
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${isRecommended
                            ? 'bg-gradient-to-r from-[#D4AF37] to-[#B38016] text-white shadow-xs border border-[#FDE68A]/30'
                            : 'bg-[#FCEFEA] text-[#8C3A1A] border border-[#F6D7CB]'
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
                    <span className="font-serif text-base sm:text-lg font-bold text-[#C2542D]">
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
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>All sizes packed fresh with safety tamper-evident seals.</span>
            </div>
            <button
              onClick={() => onOpenOrderModal()}
              className="text-xs font-bold text-[#C2542D] hover:text-[#A9421C] hover:underline"
            >
              Open Interactive Order Calculator →
            </button>
          </div>

        </div>

        {/* CTA Button: Burnt Orange with Gold Ring */}
        <div className="mt-8 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#C2542D] hover:bg-[#A9421C] text-white font-semibold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-[#C2542D]/25 ring-1 ring-[#D4AF37]/50 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 fill-current text-[#FDE68A]" />
            <span>Order {currentFlavor.shortName} on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
