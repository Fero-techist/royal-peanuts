import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Plus, Minus, Check, Crown, Sparkles } from 'lucide-react';
import { PRODUCTS, REGULAR_PRICE_LIST, CONTACT_INFO } from '../data/peanutData';

export default function OrderModal({ isOpen, onClose, initialProduct }) {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [deliveryNote, setDeliveryNote] = useState('');

  useEffect(() => {
    if (initialProduct) {
      setSelectedProduct(initialProduct);
      setSelectedSizeIndex(0);
      setQuantity(1);
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  // Derive pricing
  const currentSizes = selectedProduct.id === 'regular'
    ? REGULAR_PRICE_LIST.map((item) => ({
        label: item.size,
        desc: item.packaging,
        priceNum: item.priceNum,
        priceStr: item.price,
      }))
    : (selectedProduct.availableSizes || ['Standard Pack']).map((sizeName, idx) => {
        const base = selectedProduct.startingPrice || 1500;
        const multiplier = idx === 0 ? 1 : idx === 1 ? 1.8 : idx === 2 ? 3.2 : 5;
        const priceNum = Math.round(base * multiplier);
        return {
          label: sizeName,
          desc: 'Freshly sealed batch',
          priceNum,
          priceStr: `₦${priceNum.toLocaleString()}`,
        };
      });

  const activeSize = currentSizes[selectedSizeIndex] || currentSizes[0];
  const totalPrice = activeSize ? activeSize.priceNum * quantity : 0;

  const handleSendWhatsApp = () => {
    const message = `👑 *NEW ROYAL PEANUTS ORDER*
--------------------------------
• *Product:* ${selectedProduct.name}
• *Selected Size:* ${activeSize.label} (${activeSize.desc})
• *Quantity:* ${quantity}
• *Unit Price:* ${activeSize.priceStr}
• *Total Estimate:* ₦${totalPrice.toLocaleString()}
${deliveryNote ? `• *Special Notes:* ${deliveryNote}\n` : ''}--------------------------------
Please confirm availability and delivery to my address. Thank you!`;

    const url = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      <div className="relative bg-[#FAF5F0] w-full max-w-xl rounded-3xl shadow-2xl border border-[#EFE6DE] overflow-hidden flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-[#2A170F] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-[#E88C68]" />
            <span className="font-serif font-bold text-lg text-white">
              Choose Your Royal Batch
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Step 1: Select Flavor / Product */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#6F5B51] mb-2.5">
              1. Select Flavor / Peanut Variety
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {PRODUCTS.map((prod) => (
                <button
                  key={prod.id}
                  type="button"
                  onClick={() => {
                    setSelectedProduct(prod);
                    setSelectedSizeIndex(0);
                  }}
                  className={`p-2.5 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all ${
                    selectedProduct.id === prod.id
                      ? 'border-[#C2542D] bg-[#FCEFEA] text-[#8C3A1A] shadow-xs'
                      : 'border-[#E5DCD4] bg-white text-[#5F4E44] hover:bg-[#F7EFE9]'
                  }`}
                >
                  <span className="truncate">{prod.name}</span>
                  {selectedProduct.id === prod.id && (
                    <Check className="w-3.5 h-3.5 text-[#C2542D] shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Size */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#6F5B51] mb-2.5">
              2. Select Size & Packaging
            </label>
            <div className="space-y-2">
              {currentSizes.map((sizeItem, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedSizeIndex(idx)}
                  className={`w-full p-3 rounded-2xl border flex items-center justify-between text-left transition-all ${
                    selectedSizeIndex === idx
                      ? 'border-[#C2542D] bg-[#FCEFEA] shadow-xs'
                      : 'border-[#E5DCD4] bg-white hover:bg-[#F9F3ED]'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm text-[#2A170F]">
                      {sizeItem.label}
                    </span>
                    <span className="text-xs text-[#7F6B60]">
                      {sizeItem.desc}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif font-bold text-sm text-[#2A170F]">
                      {sizeItem.priceStr}
                    </span>
                    {selectedSizeIndex === idx && (
                      <div className="w-4 h-4 rounded-full bg-[#C2542D] text-white flex items-center justify-center">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Quantity */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#6F5B51] mb-2.5">
              3. Quantity
            </label>
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center bg-white border border-[#E5DCD4] rounded-2xl p-1.5 shadow-xs">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-xl bg-[#FAF5F0] hover:bg-[#F2EAE3] text-[#2A170F] flex items-center justify-center transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-bold text-base text-[#2A170F]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-xl bg-[#FAF5F0] hover:bg-[#F2EAE3] text-[#2A170F] flex items-center justify-center transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <div className="text-xs text-[#7F6B60]">
                {quantity > 10 ? '🔥 Bulk discount applied upon checkout!' : 'Ready for instant dispatch'}
              </div>
            </div>
          </div>

          {/* Optional Note */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#6F5B51] mb-2">
              Delivery Location or Special Request (Optional)
            </label>
            <input
              type="text"
              value={deliveryNote}
              onChange={(e) => setDeliveryNote(e.target.value)}
              placeholder="e.g. Delivery to Lekki Phase 1, or custom wedding label request..."
              className="w-full px-4 py-2.5 rounded-xl border border-[#E5DCD4] bg-white text-xs sm:text-sm text-[#2A170F] focus:outline-none focus:border-[#C2542D] placeholder-[#A8988F]"
            />
          </div>

          {/* Price Calculation Summary */}
          <div className="bg-[#FAF0E7] border border-[#F0DFD3] rounded-2xl p-4 flex items-center justify-between">
            <div>
              <div className="text-xs text-[#8E786B] uppercase font-bold tracking-wider">
                Total Estimate
              </div>
              <div className="text-xs text-[#6F5B51]">
                {quantity}x {selectedProduct.name} ({activeSize?.label})
              </div>
            </div>
            <div className="text-right">
              <div className="font-serif text-2xl font-bold text-[#2A170F]">
                ₦{totalPrice.toLocaleString()}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer / WhatsApp Send */}
        <div className="p-6 bg-white border-t border-[#EFE6DE] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[#6F5B51]">
            <Sparkles className="w-4 h-4 text-[#C2542D]" />
            <span>Opens directly in WhatsApp with order details filled</span>
          </div>

          <button
            type="button"
            onClick={handleSendWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C2542D] hover:bg-[#A9421C] text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-[#C2542D]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Send Order via WhatsApp</span>
          </button>
        </div>

      </div>

    </div>
  );
}
