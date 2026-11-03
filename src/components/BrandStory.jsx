import React from 'react';
import { Sparkles, Quote, Award, Heart, CheckCircle } from 'lucide-react';
import { ASSETS } from '../data/peanutData';

export default function BrandStory() {
  return (
    <section id="story" className="py-16 sm:py-24 bg-[#FAF5F0] border-t border-[#EFE6DE] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Brand Story Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Kicker badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCEFEA] border border-[#F6D7CB] text-[#C2542D] text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Artisan Craft</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A170F] tracking-tight mb-6">
              A Little Taste of Royalty
            </h2>

            {/* Paragraphs */}
            <p className="text-base sm:text-lg text-[#5F4E44] leading-relaxed mb-6">
              Every single peanut in our kitchen undergoes a meticulous triple-selection process. We source plump, premium-grade kernels and slow-roast them in small batches over controlled heat to ensure consistent crunch, natural sweetness, and that unmistakable royal aroma.
            </p>

            <p className="text-sm sm:text-base text-[#6F5B51] leading-relaxed mb-8">
              We never cut corners with artificial flavorings or mass-industrial shortcuts. From our classic lightly salted recipe to our coconut and peppered batches, each pouch is sealed at peak freshness.
            </p>

            {/* Quote Card */}
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#EFE6DE] shadow-xs mb-8 w-full">
              <div className="w-9 h-9 rounded-full bg-[#FCEFEA] text-[#C2542D] flex items-center justify-center mb-3">
                <Quote className="w-4 h-4 fill-current" />
              </div>
              <blockquote className="font-serif italic text-base sm:text-lg text-[#2A170F] font-medium leading-relaxed mb-3">
                “Our goal is simple: to make every single peanut crunch a reflection of quality, royal freshness, and pure love.”
              </blockquote>
              <div className="text-xs text-[#8C3A1A] font-bold uppercase tracking-wider">
                — The Royal Peanuts Artisan Kitchen
              </div>
            </div>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#4A3B33] font-medium w-full">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#C2542D] shrink-0" />
                <span>100% Naturally Sourced Nigerian Peanuts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#C2542D] shrink-0" />
                <span>Preservative-free, artisanal roasting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#C2542D] shrink-0" />
                <span>Airtight seals lock in maximum crunch</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#C2542D] shrink-0" />
                <span>Hygienically packaged with certified care</span>
              </div>
            </div>

          </div>

          {/* Right Column: Artisan Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-xl bg-white">
                <img
                  src={ASSETS.artisanStory}
                  alt="Artisan pouring freshly roasted peanuts into glass jars"
                  className="w-full h-[360px] sm:h-[440px] object-cover hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Floating caption pill */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-[#F0E6DE] flex items-center justify-center text-center">
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
