# 👑 Royal Peanuts — Artisanal Landing Page

A responsive landing page built with **React 19**, **Tailwind CSS v4**, and **Lucide Icons**, faithful to the design mockup provided.

---

## 📸 Component Breakdown & Architecture

The application has been decomposed into modular, reusable components:

| Component | File Path | Description & Design Mapping |
| :--- | :--- | :--- |
| **Navbar** | [`src/components/Navbar.jsx`](file:///C:/Users/HP/.gemini/antigravity/scratch/royal-peanuts-landing/src/components/Navbar.jsx) | Royal crown emblem, smooth-scroll links, and quick order triggers. |
| **Hero** | [`src/components/Hero.jsx`](file:///C:/Users/HP/.gemini/antigravity/scratch/royal-peanuts-landing/src/components/Hero.jsx) | Headline *"A Royal Treat in Every Bite"*, WhatsApp CTA, quality badge, and hero bowl card with live badge. |
| **Feature Bar** | [`src/components/FeatureBar.jsx`](file:///C:/Users/HP/.gemini/antigravity/scratch/royal-peanuts-landing/src/components/FeatureBar.jsx) | 4 horizontal benefit cards: Premium Quality, Super Taste, Customer Focus, Endless Variety. |
| **Product Collection** | [`src/components/ProductCollection.jsx`](file:///C:/Users/HP/.gemini/antigravity/scratch/royal-peanuts-landing/src/components/ProductCollection.jsx) | Product catalogue with category filter pills, custom souvenirs inquiry banner, and card grid. |
| **Product Card** | [`src/components/ProductCard.jsx`](file:///C:/Users/HP/.gemini/antigravity/scratch/royal-peanuts-landing/src/components/ProductCard.jsx) | Individual product card with badges (*BEST SELLER*, *SPICY HEAT*, etc.), starting price, and size selector. |
| **Price List** | [`src/components/PriceList.jsx`](file:///C:/Users/HP/.gemini/antigravity/scratch/royal-peanuts-landing/src/components/PriceList.jsx) | Transparent pricing table with notice alert banner, all 7 sizes/carton tiers, and WhatsApp order CTA. |
| **Target Audience** | [`src/components/TargetAudience.jsx`](file:///C:/Users/HP/.gemini/antigravity/scratch/royal-peanuts-landing/src/components/TargetAudience.jsx) | 4 segment cards: Retail Customers, Bulk Buyers, Resellers, and Custom Souvenirs with pre-filled WhatsApp links. |
| **Brand Story** | [`src/components/BrandStory.jsx`](file:///C:/Users/HP/.gemini/antigravity/scratch/royal-peanuts-landing/src/components/BrandStory.jsx) | *"A Little Taste of Royalty"* narrative, artisanal batch image, and highlight quote card. |
| **Footer & Contact** | [`src/components/FooterSection.jsx`](file:///C:/Users/HP/.gemini/antigravity/scratch/royal-peanuts-landing/src/components/FooterSection.jsx) | Deep espresso footer with contact cards, checklist *"What You Can Enquire About"*, and dual action buttons. |
| **Order Modal** | [`src/components/OrderModal.jsx`](file:///C:/Users/HP/.gemini/antigravity/scratch/royal-peanuts-landing/src/components/OrderModal.jsx) | Interactive order builder: select flavor, packaging size, adjust quantity, and generate WhatsApp message. |
| **Data Config** | [`src/data/peanutData.js`](file:///C:/Users/HP/.gemini/antigravity/scratch/royal-peanuts-landing/src/data/peanutData.js) | Centralized single source of truth for products, pricing list, contact details, and feature copy. |

---

## 🎨 Color Palette & Typography

- **Background:** `#FAF5F0` (warm ivory cream)
- **Primary Accent:** `#C2542D` / `#BA4820` (warm terracotta / burnt orange)
- **Deep Espresso:** `#2A170F` / `#24130B` (rich chocolate brown for headings & footer)
- **Soft Peach:** `#FCEFEA` / `#FBECE5` (badges & subtle button fills)
- **Display Font:** *Playfair Display* (Google Fonts serif)
- **Body Font:** *Plus Jakarta Sans*

---

## 🚀 How to Run & Build

```bash
# Navigate to project folder
cd C:\Users\HP\.gemini\antigravity\scratch\royal-peanuts-landing

# Start Vite dev server (Live at http://localhost:5174/)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
