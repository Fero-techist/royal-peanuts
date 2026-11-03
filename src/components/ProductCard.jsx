import React from 'react';
import { ArrowRight, ShoppingCart } from 'lucide-react';

export default function ProductCard({ product, onSelectProduct }) {
  const isPrimary = product.isBestSeller;

  const badgeColorClass =
    product.tagVariant === 'primary'
      ? 'bg-[#C2542D] text-white shadow-xs'
      : product.tagVariant === 'amber'
      ? 'bg-[#FDF3D8] text-[#8F590A] border border-[#F3DF99]'
      : 'bg-[#FCEFEA] text-[#8C3A1A] border border-[#F6D7CB]';

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#EFE6DE] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Product Image Box */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#FBF7F2]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
          loading="lazy"
        />

        {/* Floating Category Badge */}
        {product.tag && (
          <div className="absolute top-3 right-3">
            <span
              className={`text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${badgeColorClass}`}
            >
              {product.tag}
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
          <span className="text-[11px] text-[#8C3A1A] font-medium bg-[#FAF4EE] px-2 py-0.5 rounded-md">
            {product.availableSizes?.length} Sizes
          </span>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={() => onSelectProduct(product)}
          className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
            isPrimary
              ? 'bg-[#C2542D] hover:bg-[#A9421C] text-white shadow-md shadow-[#C2542D]/20'
              : 'bg-[#FCEFEA] hover:bg-[#F8E2D8] text-[#8C3A1A] border border-[#F6D7CB]'
          }`}
        >
          <span>Choose Your Size</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}
