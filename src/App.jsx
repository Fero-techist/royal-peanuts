import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureBar from "./components/FeatureBar";
import ProductCollection from "./components/ProductCollection";
import PriceList from "./components/PriceList";
import TargetAudience from "./components/TargetAudience";
import BrandStory from "./components/BrandStory";
import FooterSection from "./components/FooterSection";
import OrderModal from "./components/OrderModal";
import { MessageCircle } from "lucide-react";
import { CONTACT_INFO, PRODUCTS } from "./data/peanutData";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(PRODUCTS[0]);

  const handleOpenModal = (product = PRODUCTS[0]) => {
    setModalProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const floatingWhatsAppUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hello Royal Peanuts! I would like to place an order or make an enquiry.",
  )}`;

  return (
    <div className="min-h-screen bg-[#FAF5F0] text-[#3B2A22] flex flex-col font-sans selection:bg-[#C2542D] selection:text-white">
      <Navbar onOpenOrderModal={() => handleOpenModal(PRODUCTS[0])} />

      {/* Main Page Flow Matching Design */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenOrderModal={() => handleOpenModal(PRODUCTS[0])} />

        {/* 2. Key Value Propositions Bar */}
        <FeatureBar />

        {/* 3. Product Collection (6 cards) */}
        <ProductCollection onSelectProduct={(prod) => handleOpenModal(prod)} />

        {/* 4. Regular Peanut Price List */}
        <PriceList onOpenOrderModal={() => handleOpenModal(PRODUCTS[0])} />

        {/* 5. Target Audience Segments */}
        <TargetAudience
          onSelectAudience={(item) => handleOpenModal(PRODUCTS[0])}
        />

        {/* 6. Brand Story & Craft Process */}
        <BrandStory />
      </main>

      {/* 7. Footer Contact & Order Details */}
      <FooterSection />

      {/* Interactive Order & Size Selector Modal */}
      <OrderModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialProduct={modalProduct}
      />

      {/* Floating Sticky WhatsApp Button */}
      <aside
        aria-label="Quick contact"
        className="fixed bottom-6 right-6 z-40"
      >
        <a
          href={floatingWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-[#25D366]/40 transition-all duration-300 transform hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <span className="flex h-3 w-3 absolute -top-1 -right-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline font-bold text-xs sm:text-sm tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </aside>
    </div>
  );
}
