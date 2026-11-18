// ============================================================
//  CONFIG — the ONLY file you need to edit to update the site.
//  Change the values, then re-upload the folder to Hostinger.
//  Items marked  ⚠ CONFIRM  are placeholders to replace with real info.
// ============================================================
window.SITE = {
  name: "Lover's Luxury",
  city: "North Miami Beach, FL 33162",
  address: "North Miami Beach, FL 33162",      // ⚠ CONFIRM: full street address once public
  mapsQuery: "North Miami Beach, FL 33162",
  phoneDisplay: "(786) 459-7612",
  whatsapp: "17864597612",                     // digits only, with country code
  instagram: "loversluxury1",
  tiktok: "loverluxury",                       // ⚠ CONFIRM: TikTok handle (no @)
  hours: [                                     // ⚠ CONFIRM: real opening hours
    ["Mon – Fri", "10:00 AM – 7:00 PM"],
    ["Saturday", "10:00 AM – 5:00 PM"],
    ["Sunday", "Closed"]
  ],
  slots: ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM"],
  // ---- Getting paid ------------------------------------------------
  depositAmount: 15,                           // $ deposit to lock a booking
  depositLink: "",                             // Stripe / Square / PayPal.me link (optional)
  zelle: "",                                   // e.g. "786-459-7612"
  cashApp: "",                                 // e.g. "$loversluxury"
  // ---- Holiday offer -----------------------------------------------
  offer: { price: 50, until: "December 31", text: "Acrylic or Gel-X full set, any style, any length. Free lipstick with every set." }
};

// ---- Nail menu (price in $) ----   ⚠ CONFIRM every price except the $50 holiday sets
window.SERVICES = [
  { id: "acrylic", name: "Acrylic full set",       price: 50, note: "Any style, any length",       hot: true, set: true },
  { id: "gelx",    name: "Gel-X full set",         price: 50, note: "Any style, any length",       hot: true, set: true },
  { id: "combo",   name: "Hands + toes",           price: 80, note: "Full set + gel toes" },
  { id: "fill",    name: "Fill / refill",          price: 35, note: "Within three weeks" },
  { id: "toes",    name: "Toes, gel polish",       price: 30, note: "Color, French or art" },
  { id: "art",     name: "Nail art & rhinestones", price: 10, note: "Add-on, price by design", from: true }
];

// ---- Boutique ----   ⚠ CONFIRM: prices ($18 lipstick / $14 gloss are placeholders) and
// the names of shades without a number. `shade` = the number printed on the box.
// `color` is only used for the small swatch dot.
window.PRODUCTS = [
  { id: "lip-01",  kind: "Lipstick", shade: "01", name: "Purple",      price: 18, color: "#6a0f63", image: "images/shop/lip-01-purple.jpg" },
  { id: "lip-05",  kind: "Lipstick", shade: "05", name: "Plum",        price: 18, color: "#7d1f6a", image: "images/shop/lip-05-plum.jpg" },
  { id: "lip-06",  kind: "Lipstick", shade: "06", name: "Burgundy",    price: 18, color: "#5b0a1c", image: "images/shop/lip-06-burgundy.jpg" },
  { id: "lip-12",  kind: "Lipstick", shade: "12", name: "Raspberry",   price: 18, color: "#b0124f", image: "images/shop/lip-12-raspberry.jpg" },
  { id: "lip-red", kind: "Lipstick", shade: "",   name: "Coral red",   price: 18, color: "#e3331f", image: "images/shop/lip-coral-red.jpg" },
  { id: "lip-mau", kind: "Lipstick", shade: "",   name: "Mauve pink",  price: 18, color: "#b05d7c", image: "images/shop/lip-mauve.jpg" },
  { id: "lip-ros", kind: "Lipstick", shade: "",   name: "Dusty rose",  price: 18, color: "#b4695a", image: "images/shop/lip-dusty-rose.jpg" },
  { id: "lip-nud", kind: "Lipstick", shade: "",   name: "Nude",        price: 18, color: "#c08a6c", image: "images/shop/lip-nude.jpg" },
  { id: "gl-29",   kind: "Shiny gloss", shade: "29", name: "Cherry",   price: 14, color: "#8a0f12", image: "images/shop/gloss-29-cherry.jpg" },
  { id: "gl-57",   kind: "Shiny gloss", shade: "57", name: "Pink shimmer", price: 14, color: "#c43d8a", image: "images/shop/gloss-57-pink.jpg" }
];

// ---- Portfolio ----  tag: Acrylic | Gel-X | French | Art
window.GALLERY = [
  { src: "images/work/10-neon-butterfly-xl.jpg",   tag: "Acrylic", title: "Neon XL coffin, 3D butterfly" },
  { src: "images/work/11-red-black-stiletto.jpg",  tag: "Art",     title: "Red and black chrome stiletto" },
  { src: "images/work/02-leopard-stiletto.jpg",    tag: "Art",     title: "Leopard stiletto, red spots" },
  { src: "images/work/04-red-french-chrome.jpg",   tag: "French",  title: "Red French, chrome moon" },
  { src: "images/work/08-blue-french-stiletto.jpg",tag: "French",  title: "Blue French stiletto" },
  { src: "images/work/09-polka-flower.jpg",        tag: "Art",     title: "Polka dot French, 3D flower" },
  { src: "images/work/07-chrome-swirls.jpg",       tag: "Art",     title: "Pink with chrome swirls" },
  { src: "images/work/03-white-french-paw.jpg",    tag: "French",  title: "White French, paw print" },
  { src: "images/work/06-red-glitter.jpg",         tag: "Acrylic", title: "Deep red glitter square" },
  { src: "images/work/05-pearl-coffin.jpg",        tag: "Acrylic", title: "Soft pink coffin, pearls" },
  { src: "images/work/12-cow-print-flower.jpg",    tag: "French",  title: "Pink French, cow print" },
  { src: "images/work/01-pink-glitter-almond.jpg", tag: "Gel-X",   title: "Pink almond, silver tips" }
];

// ---- Reviews ----  Leave empty until you have real ones: the section stays hidden.
// Example: { name: "Jasmine R.", text: "Best set I've had in Miami.", stars: 5 }
window.REVIEWS = [];
