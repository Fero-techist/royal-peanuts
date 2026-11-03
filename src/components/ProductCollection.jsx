import React, { useState } from 'react';
import { Crown, MessageCircle } from 'lucide-react';
import { PRODUCTS, CONTACT_INFO } from '../data/peanutData';
import ProductCard from './ProductCard';

export default function ProductCollection({ onSelectProduct }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Varieties' },
    { id: 'classic', label: 'Classic Roast' },
    { id: 'spicy', label: 'Spicy & Savory' },
    { id: 'sweet', label: 'Sweet Confectionery' },
    { id: 'gift', label: 'Gifts & Celebrations' },
  ];

  const filteredProducts =
    activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => {
        if (activeCategory === 'spicy') return p.category === 'spicy' || p.category === 'flavored';
        return p.category === activeCategory;
      });

  return (
    <section id="collection" className="py-16 sm:py-24 bg-[#FAF5F0] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF9EE] border border-[#F1D688] text-[#8F590A] text-xs font-bold uppercase tracking-widest mb-3">
            <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Our King’s Collection</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A170F] tracking-tight mb-4">
            Discover Our <span className="text-[#C2542D]">King’s Treats</span>
          </h2>

          <p className="text-sm sm:text-base text-[#6F5B51] max-w-xl mx-auto">
            Premium peanut creations made for every craving — from sweet honey and creamy milk to spiced, chocolate and crunchy combinations.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${activeCategory === cat.id
                    ? 'bg-[#C2542D] text-white shadow-sm shadow-[#C2542D]/30 ring-1 ring-[#D4AF37]/50'
                    : 'bg-white hover:bg-[#FFF9EE] hover:text-[#8F590A] hover:border-[#F1D688] text-[#6F5B51] border border-[#EFE6DE]'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>

        {/* Special Inquiry Banner: Burnt Orange & Gold Gradient */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#FCEFEA] via-[#FFF9EE] to-[#FCEFEA] border border-[#F1D688] text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8F590A] uppercase tracking-wider mb-1">
              <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Bespoke Orders</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-[#2A170F] mb-1">
              Looking for Custom Souvenirs or Hamper Boxes?
            </h4>
            <p className="text-xs sm:text-sm text-[#6F5B51]">
              We customize jars and pouches with personalized stickers for weddings, birthdays, and corporate events.
            </p>
          </div>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
              "Hello King's Peanut! I would like to inquire about custom souvenirs and hampers."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#C2542D] hover:bg-[#A9421C] text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-full shadow-md shadow-[#C2542D]/20 ring-1 ring-[#D4AF37]/40 transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 fill-current text-[#FDE68A]" />
            <span>Customize on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
