// ============================================================
//  CONFIG — the ONLY file you need to edit to update the site.
//  Replace the values below, then re-upload to Hostinger.
// ============================================================
window.SITE = {
  name: "Lover's Luxury",
  tagline: "Nails · Beauty · Glam",
  city: "North Miami Beach, FL 33162",
  address: "North Miami Beach, FL 33162",     // full street address once public
  mapsQuery: "North Miami Beach, FL 33162",   // used for the Google Maps embed
  phoneDisplay: "(786) 459-7612",
  whatsapp: "17864597612",                    // digits only, with country code
  instagram: "loversluxury1",
  tiktok: "loverluxury",                      // TikTok handle (no @)
  hours: [
    ["Mon – Fri", "10:00 AM – 7:00 PM"],
    ["Saturday", "10:00 AM – 5:00 PM"],
    ["Sunday", "Closed"]
  ],
  // ---- Getting paid -------------------------------------------------
  depositAmount: 15,                          // $ deposit to lock a booking
  depositLink: "",                            // Stripe Payment Link / Square / PayPal.me URL (optional)
  zelle: "",                                  // e.g. "786-459-7612"
  cashApp: "",                                // e.g. "$loversluxury"
  promo: "NOVEMBER & DECEMBER SPECIAL — Acrylic or Gel-X, any style, any length: $50 + FREE lipstick!"
};

// ---- Nail services (price in $) ----
window.SERVICES = [
  { id: "acrylic",  name: "Acrylic Full Set",        price: 50, note: "Any style, any length — holiday special" },
  { id: "gelx",     name: "Gel-X Full Set",          price: 50, note: "Any style, any length — holiday special" },
  { id: "fill",     name: "Fill / Refill",           price: 35, note: "Within 3 weeks" },
  { id: "toes",     name: "Toes (gel polish)",       price: 30, note: "French, color or art" },
  { id: "art",      name: "Nail Art / Rhinestones",  price: 10, note: "Add-on, from — price by design" },
  { id: "combo",    name: "Hands + Toes Combo",      price: 80, note: "Best value" }
];

// ---- Boutique products ----
// image: put the file in /images and write "images/name.jpg". Leave "" for a placeholder.
// PRICES BELOW ARE PLACEHOLDERS ($18 lipstick, $14 gloss): replace with the real ones.
window.PRODUCTS = [
  { id: "lip-01",  name: "Lipstick 01 · Purple",         price: 18, image: "images/shop/lip-01-purple.jpg",       note: "Bold, creamy finish" },
  { id: "lip-05",  name: "Lipstick 05 · Plum",           price: 18, image: "images/shop/lip-05-plum.jpg",         note: "Deep berry, long-wear" },
  { id: "lip-06",  name: "Lipstick 06 · Burgundy",       price: 18, image: "images/shop/lip-06-burgundy.jpg",     note: "Classic dark red" },
  { id: "lip-12",  name: "Lipstick 12 · Raspberry",      price: 18, image: "images/shop/lip-12-raspberry.jpg",    note: "Vivid pink-red" },
  { id: "lip-red", name: "Lipstick · Coral Red",         price: 18, image: "images/shop/lip-coral-red.jpg",       note: "Bright, glossy red" },
  { id: "lip-mau", name: "Lipstick · Mauve Pink",        price: 18, image: "images/shop/lip-mauve.jpg",           note: "Soft everyday pink" },
  { id: "lip-ros", name: "Lipstick · Dusty Rose",        price: 18, image: "images/shop/lip-dusty-rose.jpg",      note: "Warm rosy nude" },
  { id: "lip-nud", name: "Lipstick · Nude",              price: 18, image: "images/shop/lip-nude.jpg",            note: "Creamy neutral" },
  { id: "gl-29",   name: "Shiny Gloss #29 · Cherry",     price: 14, image: "images/shop/gloss-29-cherry.jpg",     note: "High shine, deep red" },
  { id: "gl-57",   name: "Shiny Gloss #57 · Pink",       price: 14, image: "images/shop/gloss-57-pink.jpg",       note: "Pink shimmer gloss" }
];

// ---- Gallery (your work) ----
// src: put files in /images/work and list them here. tag: Acrylic | Gel-X | French | Toes | Art
window.GALLERY = [
  { src: "images/work/10-neon-butterfly-xl.jpg",   tag: "Acrylic", alt: "XL coffin nails with neon yellow and 3D butterfly" },
  { src: "images/work/11-red-black-stiletto.jpg",    tag: "Art",     alt: "Red and black chrome stiletto nails with crystals" },
  { src: "images/work/02-leopard-stiletto.jpg",     tag: "Art",     alt: "Leopard print stiletto nails with red accents" },
  { src: "images/work/04-red-french-chrome.jpg",    tag: "French",  alt: "Red French tips with chrome moon and pearls" },
  { src: "images/work/08-blue-french-stiletto.jpg", tag: "French",  alt: "Blue French tip stiletto nails" },
  { src: "images/work/09-polka-flower.jpg",         tag: "Art",     alt: "Polka dot French with 3D flower" },
  { src: "images/work/07-chrome-swirls.jpg",        tag: "Art",     alt: "Pink nails with chrome swirls and studs" },
  { src: "images/work/03-white-french-paw.jpg",     tag: "French",  alt: "White French tips with paw print" },
  { src: "images/work/06-red-glitter.jpg",          tag: "Acrylic", alt: "Deep red glitter square set" },
  { src: "images/work/05-pearl-coffin.jpg",         tag: "Acrylic", alt: "Soft pink coffin nails with pearls" },
  { src: "images/work/12-cow-print-flower.jpg",      tag: "French",  alt: "Pink French with cow print and 3D flower" },
  { src: "images/work/01-pink-glitter-almond.jpg",  tag: "Gel-X",   alt: "Pink almond nails with silver glitter tips" }
];

// ---- Reviews (replace with real ones from clients) ----
window.REVIEWS = [
  { name: "Client name", text: "Add a real review here — ask each client for one after her set.", stars: 5 },
  { name: "Client name", text: "Second review. Paste screenshots of DMs/Google reviews as text.", stars: 5 },
  { name: "Client name", text: "Third review.", stars: 5 }
];
