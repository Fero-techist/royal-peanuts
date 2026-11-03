import React from 'react';
import { ArrowRight, Crown } from 'lucide-react';

export default function ProductCard({ product, onSelectProduct }) {
  const isPrimary = product.isBestSeller;

  // Burnt Orange & Gold Tag Styling
  const badgeColorClass =
    product.tagVariant === 'primary' || product.isBestSeller
      ? 'bg-gradient-to-r from-[#D4AF37] via-[#E5A93C] to-[#B38016] text-white shadow-xs font-bold border border-[#FDE68A]/30'
      : product.tagVariant === 'amber'
        ? 'bg-[#FFF9EE] text-[#8F590A] border border-[#F1D688] font-bold'
        : 'bg-[#FCEFEA] text-[#8C3A1A] border border-[#F6D7CB] font-bold';

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#EFE6DE] hover:border-[#F1D688] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Product Image Box */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#FBF7F2]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
          loading="lazy"
        />

        {/* Floating Category / Best Seller Badge */}
        {product.tag && (
          <div className="absolute top-3 right-3">
            <span
              className={`inline-flex items-center gap-1 text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full uppercase tracking-wider ${badgeColorClass}`}
            >
              {product.isBestSeller && <Crown className="w-3 h-3 text-white drop-shadow-xs" />}
              <span>{product.tag}</span>
            </span>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2A170F] mb-1.5 group-hover:text-[#C2542D] transition-colors">
          {product.name}
        </h3>

        <p className="text-xs sm:text-sm text-[#6F5B51] leading-relaxed mb-4 flex-1">
          {product.desc}
        </p>

        {/* Pricing / Sizes line */}
        <div className="pt-3 border-t border-[#F2EAE3] flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-wider text-[#9E897E] font-medium">
              Starting at
            </span>
            <span className="text-sm sm:text-base font-bold text-[#2A170F]">
              {product.priceDisplay}
            </span>
          </div>
          <span className="text-[11px] text-[#8F590A] font-semibold bg-[#FFF9EE] border border-[#F1D688] px-2.5 py-0.5 rounded-md">
            {product.availableSizes?.length} Sizes
          </span>
        </div>

        {/* Action Button: Burnt Orange & Gold accents */}
        <button
          type="button"
          onClick={() => onSelectProduct(product)}
          className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${isPrimary
              ? 'bg-[#C2542D] hover:bg-[#A9421C] text-white shadow-md shadow-[#C2542D]/20 ring-1 ring-[#D4AF37]/50'
              : 'bg-[#FFF9EE] hover:bg-[#FDF3D8] text-[#8F590A] border border-[#F1D688] hover:border-[#D4AF37]'
            }`}
        >
          <span>Choose Your Size</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 text-current" />
        </button>
      </div>
    </div>
  );
}
