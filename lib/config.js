// ─── Edit your business details here ────────────────────────────────
export const BUSINESS = {
  name: "Muhammad Dairy",
  tagline: "Khalis Desi Ghee, made from fresh cream",
  since: 1975,
  city: "Okara, Punjab, Pakistan",
  street: "Opposite Azhar Residences, Sheikh Basti, GT Road",
  address: "Opposite Azhar Residences, Sheikh Basti, GT Road, Okara, Punjab, Pakistan",
  whatsappDisplay: "0305 684 7007",
  whatsappIntl: "923056847007", // international format, no + or spaces
};

// TEMPORARY sample prices — replace with real prices.
// Set `price` to a number (in PKR) to show prices and order totals.
// Leave it as null to show "Price on WhatsApp".
export const PRODUCTS = [
  {
    id: "ghee-1kg",
    name: "Desi Ghee",
    size: "1 kg",
    price: 3200,
    note: "Our everyday pack, slow-cooked from fresh cream",
    image: "/media/ghee-1kg.jpg",
  },
  {
    id: "ghee-2-5kg",
    name: "Desi Ghee",
    size: "2.5 kg",
    price: 7800,
    note: "Family pack for the month's cooking",
    image: "/media/ghee-2-5kg.jpg",
  },
  {
    id: "ghee-5kg",
    name: "Desi Ghee",
    size: "5 kg",
    price: 15200,
    note: "Bulk pack for big families, shops and events",
    image: "/media/ghee-5kg.jpg",
  },
  {
    id: "makhan-1kg",
    name: "Fresh Makhan",
    size: "1 kg",
    price: 2400,
    note: "Hand-churned white butter, made to order",
    image: "/media/step3.jpg",
  },
];

export const STEPS = [
  { img: "/media/step1.jpg", title: "Fresh cream", text: "We start with fresh cream collected from milk." },
  { img: "/media/step2.jpg", title: "Churning", text: "The cream is churned by hand until the makhan separates." },
  { img: "/media/step3.jpg", title: "Makhan", text: "Soft white butter is gathered, washed and kept clean." },
  { img: "/media/step4.jpg", title: "Slow cooking", text: "The makhan is melted and cooked slowly in a large degchi." },
  { img: "/media/step5.jpg", title: "Clarifying", text: "It simmers until the water cooks off and the ghee turns golden." },
  { img: "/media/step6.jpg", title: "Filtering", text: "The hot ghee is strained to remove every bit of residue." },
  { img: "/media/step7.jpg", title: "Packed", text: "Golden ghee is sealed and packed, ready for your kitchen." },
];

const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const asset = (p) => `${BP}${p}`;

export const waLink = (text) =>
  `https://wa.me/${BUSINESS.whatsappIntl}?text=${encodeURIComponent(text)}`;

export const mapsLink = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address)}`;

export const formatPKR = (n) => "Rs " + Number(n).toLocaleString("en-PK");

// Public site URL (with trailing slash). Change to "https://muhammaddairy.online/" once the domain is connected.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mazhardev.github.io/muhammaddairy.online/";
