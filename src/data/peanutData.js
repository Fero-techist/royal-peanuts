import heroImg from "../assets/crops/peanut.jpeg";
import prodRegular from "../assets/crops/relar.jpeg";
import prodCoconut from "../assets/crops/coconut.jpeg";
import prodPeppered from "../assets/crops/peppered.jpeg";
import prodMilk from "../assets/crops/prod-milk.jpg";
import prodChocolate from "../assets/crops/coclate.jpeg";
import prodConfectionery from "../assets/crops/prod-confectionery.jpg";
import artisanStoryImg from "../assets/crops/artisan-story.jpg";

export const ASSETS = {
  hero: heroImg,
  prodRegular,
  prodCoconut,
  prodPeppered,
  prodMilk,
  prodChocolate,
  prodConfectionery,
  artisanStory: artisanStoryImg,
};

export const FEATURES = [
  {
    id: "quality",
    title: "Premium Quality",
    desc: "Carefully sorted top-grade peanuts roasted to royal standards.",
    icon: "Crown",
  },
  {
    id: "taste",
    title: "Super Taste",
    desc: "Golden crisp roast with an irresistible aroma and rich crunch.",
    icon: "Flame",
  },
  {
    id: "customer",
    title: "Customer Focus",
    desc: "Attentive service, custom packs, and speedy order fulfillment.",
    icon: "HeartHandshake",
  },
  {
    id: "variety",
    title: "Endless Variety",
    desc: "From classic salted to fiery peppered, coconut, milk & chocolate.",
    icon: "Sparkles",
  },
];

export const PRODUCTS = [
  {
    id: "regular",
    name: "Regular Peanut",
    category: "classic",
    tag: "BEST SELLER",
    tagVariant: "primary",
    image: prodRegular,
    desc: "Hand roasted golden crunch peanuts, gently salted to perfection for pure enjoyment.",
    availableSizes: [
      "120g Pouch",
      "250g Pouch",
      "500g Jar",
      "1kg Bag",
      "2kg Bucket",
      "Bulk Carton",
    ],
    startingPrice: 1200,
    priceDisplay: "From ₦1,200",
    isBestSeller: true,
  },
  {
    id: "coconut",
    name: "Coconut Peanut",
    category: "flavored",
    tag: "TROPICAL CRISP",
    tagVariant: "secondary",
    image: prodCoconut,
    desc: "Crunchy golden roasted peanuts infused with rich, toasted coconut shreds.",
    availableSizes: ["150g Pouch", "300g Jar", "500g Jar", "1kg Pack"],
    startingPrice: 1500,
    priceDisplay: "From ₦1,500",
    isBestSeller: false,
  },
  {
    id: "peppered",
    name: "Peppered Peanut",
    category: "spicy",
    tag: "SPICY DELIGHT",
    tagVariant: "secondary",
    image: prodPeppered,
    desc: "Toasted peanuts tossed in a fiery, savory native pepper blend for bold flavor lovers.",
    availableSizes: ["150g Pouch", "300g Jar", "500g Jar", "Party Bucket"],
    startingPrice: 1500,
    priceDisplay: "From ₦1,500",
    isBestSeller: false,
  },
  {
    id: "milk",
    name: "Milk Peanut",
    category: "sweet",
    tag: "SWEET & CRISP",
    tagVariant: "secondary",
    image: prodMilk,
    desc: "Sweet roasted peanut clusters rolled in a smooth, creamy vanilla milk glaze.",
    availableSizes: ["180g Pouch", "350g Jar", "500g Jar", "Gift Box"],
    startingPrice: 1800,
    priceDisplay: "From ₦1,800",
    isBestSeller: false,
  },
  {
    id: "chocolate",
    name: "Chocolate Peanut",
    category: "sweet",
    tag: "INDULGENT LUXE",
    tagVariant: "secondary",
    image: prodChocolate,
    desc: "Decadent cocoa-dusted roasted peanuts crafted for the ultimate chocolate lovers crunch.",
    availableSizes: ["180g Pouch", "350g Jar", "Gift Tin"],
    startingPrice: 2000,
    priceDisplay: "From ₦2,000",
    isBestSeller: false,
  },
  {
    id: "confectionery",
    name: "Special Confectionery",
    category: "gift",
    tag: "GIFT BOX & EVENTS",
    tagVariant: "amber",
    image: prodConfectionery,
    desc: "Curated peanut treat hampers, celebratory party cones, and festive souvenir packages.",
    availableSizes: [
      "Mini Cones (50pcs)",
      "Gift Hamper Box",
      "Celebration Basket",
      "Custom Event Packs",
    ],
    startingPrice: 5000,
    priceDisplay: "Custom Pricing",
    isBestSeller: false,
  },
];

export const REGULAR_PRICE_LIST = [
  {
    size: "120g Pouch",
    packaging: "Resealable everyday snack pouch",
    price: "₦1,200",
    priceNum: 1200,
    badge: null,
  },
  {
    size: "250g Pouch",
    packaging: "Portable resealable stand-up pouch",
    price: "₦2,400",
    priceNum: 2400,
    badge: null,
  },
  {
    size: "500g Bottle",
    packaging: "Transparent jar with airtight seal",
    price: "₦4,500",
    priceNum: 4500,
    badge: "Popular",
  },
  {
    size: "1kg Pouch",
    packaging: "Extra-value family & party size pack",
    price: "₦8,500",
    priceNum: 8500,
    badge: null,
  },
  {
    size: "2kg Bucket",
    packaging: "Party & event tub with sturdy handle",
    price: "₦16,000",
    priceNum: 16000,
    badge: null,
  },
  {
    size: "5kg Tub",
    packaging: "Commercial & bulk catering tub",
    price: "₦38,000",
    priceNum: 38000,
    badge: null,
  },
  {
    size: "Bulk Carton (24x 120g)",
    packaging: "Retail-ready display carton box",
    price: "₦26,000",
    priceNum: 26000,
    badge: "RECOMMENDED",
  },
];

export const TARGET_AUDIENCES = [
  {
    id: "retail",
    title: "Retail Customers",
    desc: "Hand-roasted snacks for movie nights, work desks, and everyday family treats.",
    cta: "Order Online",
    actionText: "Order Single Packs →",
    icon: "ShoppingBag",
  },
  {
    id: "bulk",
    title: "Bulk Buyers",
    desc: "Wholesale prices for supermarkets, party caterers, hampers, and retail outlets.",
    cta: "Request Bulk Deals",
    actionText: "Request Bulk Deals →",
    icon: "PackageCheck",
  },
  {
    id: "resellers",
    title: "Resellers",
    desc: "Profitable margins and dependable supply for kiosks, office supply, and snack vendors.",
    cta: "Become a Reseller",
    actionText: "Become a Reseller →",
    icon: "TrendingUp",
  },
  {
    id: "souvenirs",
    title: "Custom Souvenirs",
    desc: "Custom-branded mini packs and hampers for weddings, birthdays, and corporate events.",
    cta: "Make Custom Order",
    actionText: "Make Custom Order →",
    icon: "Gift",
  },
];

export const CONTACT_INFO = {
  phone: "+234 812 345 6789",
  phoneDisplay: "+234 812 345 6789",
  whatsappNumber: "2348123456789",
  location: "Lagos, Nigeria (Nationwide Courier Delivery)",
  hours: "Mon – Sat: 8:00 AM – 6:00 PM",
  email: "orders@royalpeanuts.com",
};
