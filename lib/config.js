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

// Our animals. Photos are breed photos from Wikimedia Commons, credited through `credit`
// as their licences require. To use your own photo, put it in public/media/herd/, point
// `image` at it and delete `credit`. With `image: null` an illustration is shown instead.
export const HERD = [
  {
    id: "nili-ravi",
    name: "Nili-Ravi Buffalo",
    label: "The buffalo of Okara & Sahiwal",
    text: "Named after the Ravi river and famous across Punjab for rich, creamy milk with high butterfat, the best start for desi ghee.",
    image: "/media/herd/nili-ravi.jpg",
    alt: "Nili-Ravi buffalo grazing, showing the breed's white leg markings",
    credit: { by: "Vallabhdhootwtn", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Animals_around_NAshik.jpg" },
    icon: "buffalo",
  },
  {
    id: "sahiwal",
    name: "Sahiwal Cow",
    label: "From neighbouring Sahiwal",
    text: "Pakistan's best-known dairy cow: hardy, calm and prized for good, wholesome milk.",
    image: "/media/herd/sahiwal.jpg",
    alt: "Red-brown Sahiwal cow with its hump and loose dewlap",
    credit: { by: "Pavanaja", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Sahiwala_02_(cropped).JPG" },
    icon: "cow",
  },
  {
    id: "care",
    name: "Cared for daily",
    label: "Healthy animals, pure milk",
    text: "Our animals are fed, watered and looked after every day, because pure ghee starts with healthy animals.",
    image: "/media/herd/care.jpg",
    alt: "A man bathing his buffalo in the water",
    credit: { by: "Shivamjoker", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Man-bathing-water-buffalo.jpg" },
    icon: "care",
  },
];

// Milk and dahi: daily supply in Okara city, and bulk orders for weddings, functions and hotels.
// Photos and credits work the same way as HERD.
export const DAIRY_ITEMS = [
  {
    id: "doodh",
    name: "Khalis Doodh",
    urdu: "خالص دودھ",
    text: "Pure milk from our dairy, nothing mixed in. Daily for your home or hotel, or in bulk for your function.",
    image: "/media/doodh.jpg",
    alt: "Fresh milk being taken from a buffalo into a steel pot",
    credit: { by: "Mike Prince", license: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Milking_the_Buffalo_(35403227412).jpg" },
    icon: "milk",
  },
  {
    id: "dahi",
    name: "Khalis Dahi",
    urdu: "خالص دہی",
    text: "Fresh dahi made from pure milk, ready for raita, lassi and serving your guests.",
    image: "/media/dahi.jpg",
    alt: "Fresh dahi set in a clay pot",
    credit: { by: "Kirti Poddar", license: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Mishti_Doi.jpg" },
    icon: "dahi",
  },
];

// `at` is where each step starts in the process video, in seconds.
export const STEPS = [
  { at: 0, img: "/media/step1.jpg", title: "Fresh cream", text: "We start with fresh cream collected from milk." },
  { at: 10.5, img: "/media/step2.jpg", title: "Churning", text: "The cream is churned by hand until the makhan separates." },
  { at: 34, img: "/media/step3.jpg", title: "Makhan", text: "Soft white butter is gathered, washed and kept clean." },
  { at: 43.5, img: "/media/step4.jpg", title: "Slow cooking", text: "The makhan is melted and cooked slowly in a large degchi." },
  { at: 49.5, img: "/media/step5.jpg", title: "Clarifying", text: "It simmers until the water cooks off and the ghee turns golden." },
  { at: 56.5, img: "/media/step6.jpg", title: "Filtering", text: "The hot ghee is strained to remove every bit of residue." },
  { at: 62.5, img: "/media/step7.jpg", title: "Weighed & packed", text: "Every pack is weighed and sealed, ready for your kitchen." },
];

const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const asset = (p) => `${BP}${p}`;

export const waLink = (text) =>
  `https://wa.me/${BUSINESS.whatsappIntl}?text=${encodeURIComponent(text)}`;

export const mapsLink = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address)}`;

export const formatPKR = (n) => "Rs " + Number(n).toLocaleString("en-PK");

// Public site URL (with trailing slash), used for SEO: canonical link, sitemap, Google business data.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://muhammaddairy.online/";
