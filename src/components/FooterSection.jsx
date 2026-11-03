import React from 'react';
import {
  Sparkles,
  MessageCircle,
  PhoneCall,
  MapPin,
  Clock,
  CheckCircle2,
  Crown,
  Heart,
  ArrowUp
} from 'lucide-react';
import { CONTACT_INFO } from '../data/peanutData';

export default function FooterSection() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Royal Peanuts! I would like to place an order or make an enquiry.'
  )}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#24130B] text-[#E8DFD8] pt-16 sm:pt-24 pb-12 border-t border-[#3D2517]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Contacts, CTA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3D2315] border border-[#52311E] text-[#E88C68] text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
              Place Your Order or Make an Enquiry
            </h2>

            <p className="text-sm sm:text-base text-[#B5A499] mb-8">
              We're here to serve you promptly. Send us a message for personal snacks, wholesale orders, or custom event packages.
            </p>

            {/* Contact details cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8">
              
              <div className="bg-[#2E1A10] border border-[#442819] rounded-2xl p-4 flex items-center gap-3.5 hover:border-[#6B3F27] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#3D2315] text-[#E88C68] flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-[#A39287] uppercase tracking-wider font-semibold">
                    Phone / Call Line
                  </div>
                  <div className="text-sm font-bold text-white">
                    {CONTACT_INFO.phoneDisplay}
                  </div>
                </div>
              </div>

              <div className="bg-[#2E1A10] border border-[#442819] rounded-2xl p-4 flex items-center gap-3.5 hover:border-[#6B3F27] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#3D2315] text-[#E88C68] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-[#A39287] uppercase tracking-wider font-semibold">
                    Location
                  </div>
                  <div className="text-sm font-bold text-white">
                    {CONTACT_INFO.location}
                  </div>
                </div>
              </div>

              <div className="bg-[#2E1A10] border border-[#442819] rounded-2xl p-4 flex items-center gap-3.5 hover:border-[#6B3F27] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#3D2315] text-[#E88C68] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-[#A39287] uppercase tracking-wider font-semibold">
                    WhatsApp Order Desk
                  </div>
                  <div className="text-sm font-bold text-white">
                    Instant Replies & Ordering
                  </div>
                </div>
              </div>

              <div className="bg-[#2E1A10] border border-[#442819] rounded-2xl p-4 flex items-center gap-3.5 hover:border-[#6B3F27] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#3D2315] text-[#E88C68] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-[#A39287] uppercase tracking-wider font-semibold">
                    Working Hours
                  </div>
                  <div className="text-sm font-bold text-white">
                    {CONTACT_INFO.hours}
                  </div>
                </div>
              </div>

            </div>

            {/* Direct buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C2542D] hover:bg-[#A9421C] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg shadow-[#C2542D]/20 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chat Direct on WhatsApp</span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#3D271B] hover:bg-[#4D3223] text-[#F3EAE3] border border-[#5A3824] font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Our Support Line</span>
              </a>
            </div>

          </div>

          {/* Right Column: "What You Can Enquire About" Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#2C180E] border border-[#462817] rounded-3xl p-7 sm:p-9 shadow-xl relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C2542D]/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-6">
                What You Can Enquire About:
              </h3>

              <ul className="space-y-4 text-xs sm:text-sm text-[#DDD1C8]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E88C68] shrink-0 mt-0.5" />
                  <span>Fresh product inventory and flavor batch availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E88C68] shrink-0 mt-0.5" />
                  <span>Bulk & wholesale tier pricing for retailers and supermarkets</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E88C68] shrink-0 mt-0.5" />
                  <span>Custom branded souvenir jars, pouches & wedding gift hampers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E88C68] shrink-0 mt-0.5" />
                  <span>Same-day and scheduled doorstep courier delivery across Lagos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E88C68] shrink-0 mt-0.5" />
                  <span>Becoming an accredited reseller or regional distributor partner</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-[#462817] flex items-center justify-between text-xs text-[#9E8C80]">
                <span>100% Quality Guaranteed</span>
                <span className="text-[#E88C68] font-semibold">Fast Nationwide Dispatch</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="mt-16 pt-8 border-t border-[#381F12] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E8C80]">
          <div className="flex items-center gap-2">
            <Crown className="w-4 h-4 text-[#C2542D]" />
            <span className="font-semibold text-white">ROYAL PEANUTS</span>
            <span>— Handcrafted Artisanal Peanuts in Lagos, Nigeria.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} Royal Peanuts. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#321B10] hover:bg-[#432415] text-[#E8DFD8] transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
