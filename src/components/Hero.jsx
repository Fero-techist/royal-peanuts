import React from "react";
import { MessageCircle, ArrowRight, ShieldCheck, Crown } from "lucide-react";
import { ASSETS, CONTACT_INFO } from "../data/peanutData";

export default function Hero({ onOpenOrderModal: _onOpenOrderModal }) {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hello King's Peanut! I would like to order fresh roasted King's Treats.",
  )}`;

  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24">
      {/* Subtle brand decorative background glows: Burnt Orange & Radiant Gold */}
      <div className="absolute top-0 right-10 -z-10 w-96 h-96 bg-[#C2542D]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-10 -z-10 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -z-10 w-72 h-72 bg-[#C2542D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* King's Quality Badge: Burnt Orange & Gold Accent */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF9EE] border border-[#F1D688] text-[#8F590A] text-xs font-bold tracking-wider uppercase mb-6 shadow-xs">
              <Crown className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]/20" />
              <span>100% Quality King's Treats</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2A170F] leading-[1.12] mb-3">
              A Taste Fit for <span className="text-[#C2542D]">Royalty.</span>
            </h1>

            {/* Tagline */}
            <p className="font-serif italic text-lg sm:text-xl text-[#C2542D] font-medium mb-4 flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#D4AF37] inline-block"></span>
              <span>"Each King’s Treat has its own unique flavour and pairing."</span>
              <span className="w-6 h-[1.5px] bg-[#D4AF37] inline-block"></span>
            </p>

            {/* User's Exact Brand Description */}
            <p className="text-base sm:text-lg text-[#5F4E44] leading-relaxed max-w-2xl mb-3">
              Premium peanut creations made for every kind of craving. From sweet honey and creamy milk peanuts to spiced, chocolate and crunchy combinations, each King’s Treat has its own unique flavour and pairing.
            </p>

            <p className="text-sm sm:text-base text-[#7C675B] font-semibold leading-relaxed max-w-2xl mb-8">
              Freshly made, carefully packed and crafted to give you that irresistible crunch in every bite.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C2542D] hover:bg-[#A9421C] text-white text-base font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-[#C2542D]/25 ring-1 ring-[#D4AF37]/50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-current text-[#FDE68A]" />
                <span>Order on WhatsApp</span>
              </a>

              <a
                href="#collection"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFF9EE] hover:bg-[#FDF3D8] text-[#8F590A] border border-[#F1D688] hover:border-[#D4AF37] text-base font-semibold px-7 py-3.5 rounded-full transition-all duration-200 group shadow-xs"
              >
                <span>Explore King's Treats</span>
                <ArrowRight className="w-4 h-4 text-[#C2542D] transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Mini Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-[#EFE6DE] flex flex-wrap items-center gap-6 text-xs text-[#6F5B51]">
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#C2542D]" />
                <span>Small-batch freshly roasted</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#10B981] inline-block animate-pulse"></span>
                <span>Fast doorstep delivery</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <span className="text-[#D4AF37] font-extrabold text-sm">★ 4.9/5</span>
                <span>Customer Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Outer decorative ring in Burnt Orange & Royal Gold */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#C2542D]/30 via-[#D4AF37]/25 to-transparent rounded-[2.5rem] blur-xl opacity-75" />

              {/* Main Card */}
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl shadow-[#2A170F]/15 bg-white ring-1 ring-[#D4AF37]/30">
                <img
                  src={ASSETS.hero}
                  alt="King's Peanut freshly roasted batch in rustic ceramic bowl"
                  className="w-full h-[380px] sm:h-[420px] object-cover transition-transform duration-500 hover:scale-105"
                  loading="eager"
                />

                {/* Bottom floating badge: Burnt Orange & Gold Trim */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-[#F1D688] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C2542D] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C2542D]"></span>
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#2A170F] flex items-center gap-1.5">
                      <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Fresh King's Batch</span>
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-[#8F590A] bg-[#FFF9EE] border border-[#F1D688] px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Pure Crunch
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
