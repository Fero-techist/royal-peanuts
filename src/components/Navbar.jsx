import React, { useState } from 'react';
import { Crown, MessageCircle, Menu, X, PhoneCall } from 'lucide-react';
import { CONTACT_INFO } from '../data/peanutData';

export default function Navbar({ onOpenOrderModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Royal Peanuts! I would like to place an order or make an enquiry.'
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-[#FAF5F0]/90 backdrop-blur-md border-b border-[#EFE6DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Emblem */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-[#C2542D] text-white flex items-center justify-center shadow-md shadow-[#C2542D]/20 transition-transform group-hover:scale-105">
              <Crown className="w-6 h-6 text-[#FEE6D6]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2A170F] leading-tight">
                ROYAL PEANUTS
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#C2542D] font-semibold">
                Artisanal Roasted
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#5B463B]">
            <a href="#collection" className="hover:text-[#C2542D] transition-colors">
              Collection
            </a>
            <a href="#pricing" className="hover:text-[#C2542D] transition-colors">
              Price List
            </a>
            <a href="#audience" className="hover:text-[#C2542D] transition-colors">
              Wholesale & Events
            </a>
            <a href="#story" className="hover:text-[#C2542D] transition-colors">
              Our Story
            </a>
            <a href="#contact" className="hover:text-[#C2542D] transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenOrderModal()}
              className="text-xs font-semibold px-4 py-2.5 rounded-full border border-[#C2542D] text-[#C2542D] hover:bg-[#FCEFEA] transition-colors"
            >
              Quick Order
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C2542D] hover:bg-[#A9421C] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full shadow-md shadow-[#C2542D]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#C2542D] text-white shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2A170F] rounded-lg hover:bg-[#F3ECE6]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF5F0] border-b border-[#EFE6DE] px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-base font-medium text-[#3D2E26]">
            <a
              href="#collection"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#F3ECE6]"
            >
              Collection
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#F3ECE6]"
            >
              Price List
            </a>
            <a
              href="#audience"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#F3ECE6]"
            >
              Wholesale & Events
            </a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#F3ECE6]"
            >
              Our Story
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#F3ECE6]"
            >
              Contact
            </a>
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full text-center py-2.5 rounded-full border border-[#C2542D] text-[#C2542D] font-semibold text-sm hover:bg-[#FCEFEA]"
            >
              Quick Order Calculator
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#C2542D] text-white py-3 rounded-full font-semibold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
