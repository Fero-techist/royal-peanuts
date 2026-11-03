import React from 'react';
import { Quote, Crown, CheckCircle } from 'lucide-react';
import { ASSETS } from '../data/peanutData';

export default function BrandStory() {
  return (
    <section id="story" className="py-16 sm:py-24 bg-[#FAF5F0] border-t border-[#EFE6DE] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          <div className="lg:col-span-7 flex flex-col items-start">


            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF9EE] border border-[#F1D688] text-[#8F590A] text-xs font-bold uppercase tracking-widest mb-4">
              <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Our Artisan Craft</span>
            </div>


            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A170F] tracking-tight mb-6">
              A Taste Fit for <span className="text-[#C2542D]">Royalty</span>
            </h2>

            {/* Paragraphs with User's Exact Brand Description */}
            <p className="text-base sm:text-lg text-[#5F4E44] leading-relaxed mb-6">
              At King’s Peanut, we craft premium peanut creations made for every kind of craving. From sweet honey and creamy milk peanuts to spiced, chocolate and crunchy combinations, each King’s Treat has its own unique flavour and pairing.
            </p>

            <p className="text-sm sm:text-base text-[#6F5B51] leading-relaxed mb-8">
              Freshly made, carefully packed and crafted to give you that irresistible crunch in every bite. Every batch undergoes a meticulous triple-selection process and small-batch roasting to ensure unmatched royal taste and sealed freshness.
            </p>

            {/* Quote Card: Gold accent border & Gold Quote Icon */}
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#EFE6DE] border-l-4 border-l-[#D4AF37] shadow-xs mb-8 w-full">
              <div className="w-9 h-9 rounded-full bg-[#FFF9EE] text-[#D4AF37] border border-[#F1D688] flex items-center justify-center mb-3">
                <Quote className="w-4 h-4 fill-current" />
              </div>
              <blockquote className="font-serif italic text-base sm:text-lg text-[#2A170F] font-medium leading-relaxed mb-3">
                “Freshly made, carefully packed and crafted to give you that irresistible crunch in every bite — a taste fit for royalty.”
              </blockquote>
              <div className="text-xs text-[#C2542D] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-4 h-0.5 bg-[#D4AF37] inline-block"></span>
                <span>The King’s Peanut Kitchen</span>
              </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#4A3B33] font-medium w-full">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#C2542D] shrink-0" />
                <span>100% Naturally Sourced Nigerian Peanuts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Preservative-free, artisanal roasting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#C2542D] shrink-0" />
                <span>Airtight seals lock in maximum crunch</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Hygienically packaged with certified care</span>
              </div>
            </div>

          </div>


          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">

              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-xl bg-white ring-1 ring-[#D4AF37]/40">
                <img
                  src={ASSETS.artisanStory}
                  alt="Artisan pouring freshly roasted peanuts into glass jars"
                  className="w-full h-[360px] sm:h-[440px] object-cover hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />


                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-[#F1D688] flex items-center justify-center text-center gap-2">
                  <Crown className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <p className="text-xs sm:text-sm font-semibold text-[#2A170F]">
                    Handcrafted in Small Batches for Maximum Freshness
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
