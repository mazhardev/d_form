// Languages and all translated copy. English is the source; Urdu and Punjabi
// (Shahmukhi) are a first pass and should be checked by a native speaker.
import { BUSINESS } from "./config";

export const LOCALES = [
  { code: "en", label: "English", short: "EN", dir: "ltr", htmlLang: "en-PK", ogLocale: "en_PK" },
  { code: "ur", label: "اردو", short: "اردو", dir: "rtl", htmlLang: "ur-PK", ogLocale: "ur_PK" },
  { code: "pa", label: "پنجابی", short: "پنجابی", dir: "rtl", htmlLang: "pa-PK", ogLocale: "pa_PK" },
];

export const localeByCode = (code) => LOCALES.find((l) => l.code === code) || LOCALES[0];

// URL path for a locale's home page ("/", "/ur/", "/pa/").
export const localeHome = (code) => (code === "en" ? "/" : `/${code}/`);

const Y = new Date().getFullYear() - BUSINESS.since;

export const STR = {
  en: {
    brandName: "Muhammad Dairy",
    brandEst: `Est. ${BUSINESS.since} · Okara`,
    announce: { ghee: "Khalis desi ghee, couriered anywhere in Pakistan", doodh: "Doodh & dahi daily in Okara", wa: "WhatsApp" },
    nav: { process: "How it's made", shop: "Shop", dairy: "Doodh & dahi", story: "Our story", herd: "Our herd", contact: "Visit us" },
    hero: {
      pill: `Okara, Punjab · since ${BUSINESS.since}`,
      h1: "Pure desi ghee in Okara, made from fresh cream.",
      accent: "تازہ بالائی سے خالص دیسی گھی",
      lede: `For over ${Y} years, families in Okara have bought their ghee from us. We churn fresh cream into makhan and cook it slowly in our own kitchen, in small batches. Nothing else goes in — and now we courier it anywhere in Pakistan.`,
      shopCta: "Shop desi ghee",
      watchCta: "Watch how it's made",
      checks: ["100% fresh cream", "No vegetable oil", "Couriered across Pakistan"],
      filmTitle: "From cream to ghee",
      filmSub: "Watch the 1-minute video",
      badgeNum: `${Y}+`,
      badgeLabel: "years in Okara",
    },
    process: { kicker: "From cream to ghee", h2: "See exactly how your ghee is made", lede: "Real footage from our kitchen, start to finish in about a minute. Tap a step to jump to it." },
    shop: {
      kicker: "Shop", h2: "Buy pure desi ghee online in Pakistan",
      lede: "Add what you need to your cart and send the order on WhatsApp. We courier desi ghee anywhere in Pakistan; makhan, doodh and dahi are for Okara city. Every order is confirmed personally.",
      priceOnWa: "Price on WhatsApp",
      how: [
        { t: "1. Add to cart", d: "Pick your packs and how many you need." },
        { t: "2. Send on WhatsApp", d: "Checkout opens WhatsApp with your order already written." },
        { t: "3. We confirm & deliver", d: "Pay cash on delivery. Bulk and event orders welcome." },
      ],
    },
    products: {
      "ghee-1kg": { name: "Desi Ghee", size: "1 kg", note: "Our everyday pack, slow-cooked from fresh cream" },
      "ghee-2-5kg": { name: "Desi Ghee", size: "2.5 kg", note: "Family pack for the month's cooking" },
      "ghee-5kg": { name: "Desi Ghee", size: "5 kg", note: "Bulk pack for big families, shops and events" },
      "makhan-1kg": { name: "Fresh Makhan", size: "1 kg", note: "Hand-churned white butter, made to order" },
    },
    dairy: {
      kicker: "Doodh & dahi · daily or bulk", h2: "Khalis doodh and dahi, every day or for your shaadi",
      accent: "روزانہ اور شادی بیاہ کے لیے خالص دودھ اور دہی",
      trust: "Well-known hotels in Okara city already get their doodh and dahi from us.",
      opt1: { t: "Daily supply in Okara city", d: "Fresh doodh and dahi every day for your home, shop or hotel." },
      opt2: { t: "Weddings & functions", d: "Bulk quantities on order. Tell us the date and how much you need." },
      note: "Pure, nothing mixed in. We confirm the price and delivery with you personally on WhatsApp.",
      orderCta: "Order on WhatsApp", callCta: `Call ${BUSINESS.whatsappDisplay}`, tag: "Daily or bulk · price on WhatsApp",
      items: {
        doodh: { name: "Khalis Doodh", accent: "خالص دودھ", text: "Pure milk from our dairy, nothing mixed in. Daily for your home or hotel, or in bulk for your function." },
        dahi: { name: "Khalis Dahi", accent: "خالص دہی", text: "Fresh dahi made from pure milk, ready for raita, lassi and serving your guests." },
      },
    },
    story: {
      kicker: "Our story", h2: `A family dairy, serving Okara since ${BUSINESS.since}`,
      p1: `Muhammad Dairy has served the families of Okara since ${BUSINESS.since}. Through all these years we have kept one simple promise: give people the same pure dairy we would serve at our own table.`,
      p2: "Generations of customers still come back to us for that reason. We have never changed how we make our desi ghee: fresh cream, patient hands and slow heat.",
      promises: [
        { t: "Real fresh cream", d: "Our ghee starts with cream, never vegetable oil or ready-made butter." },
        { t: "Cooked slowly", d: "Low, patient heat brings out the deep golden colour and danedar texture." },
        { t: "Strained clean", d: "Every batch is filtered before it is weighed, sealed and packed." },
        { t: "A name you know", d: `${Y} years in Okara. Every order is confirmed by us personally.` },
      ],
    },
    herd: {
      kicker: "Our herd", h2: "Good ghee starts with healthy animals",
      lede: "Okara sits in the heart of Punjab's dairy country, home of the famous Nili-Ravi buffalo and the Sahiwal cow. Their rich, creamy milk is where every batch of our desi ghee begins.",
      items: {
        "nili-ravi": { label: "The buffalo of Okara & Sahiwal", name: "Nili-Ravi Buffalo", text: "Named after the Ravi river and famous across Punjab for rich, creamy milk with high butterfat, the best start for desi ghee." },
        sahiwal: { label: "From neighbouring Sahiwal", name: "Sahiwal Cow", text: "Pakistan's best-known dairy cow: hardy, calm and prized for good, wholesome milk." },
        care: { label: "Healthy animals, pure milk", name: "Cared for daily", text: "Our animals are fed, watered and looked after every day, because pure ghee starts with healthy animals." },
      },
    },
    guide: {
      kicker: "Desi ghee in Okara", h2: "Okara's trusted name for desi ghee, doodh and dahi",
      accent: "اوکاڑہ میں خالص دیسی گھی، دودھ اور دہی",
      p1: `${BUSINESS.name} is a family dairy on GT Road, Sheikh Basti, opposite Azhar Residences in Okara. Since ${BUSINESS.since} we have made pure desi ghee the slow, traditional way, and today we also supply khalis doodh and fresh dahi across Okara city.`,
      h3a: "What makes our desi ghee khalis",
      pa: "Every batch starts with fresh cream. The cream is churned into makhan, then cooked slowly in a degchi until the water is gone and the ghee turns golden. Nothing else goes in: no vegetable oil, no banaspati, no colour and no flavouring. That is why it smells rich, tastes of real makhan and sets danedar as it cools.",
      h3b: "How to tell if desi ghee is pure",
      pb: "Real desi ghee melts clear and golden, smells nutty and sets with a grainy texture at room temperature. Ghee mixed with oil or banaspati usually smells flat and feels oily. We would rather show you than ask you to trust us, so watch every step of how ours is made in the video above.",
      h3c: "Order desi ghee online, anywhere in Pakistan",
      pc: "You don't have to be in Okara to get our ghee. We courier khalis desi ghee across Pakistan — Lahore, Karachi, Islamabad, Faisalabad, Multan, Rawalpindi and every other city. Tell us your city and how many packs you want, we confirm the price and courier charges, and your ghee is on its way. Fresh milk and dahi stay in Okara, since they cannot travel.",
      h3d: "Doodh and dahi, daily or in bulk in Okara",
      pd: "We supply khalis doodh and dahi every day to homes, shops and hotels in Okara city, and some of the city's well-known hotels already buy from us. For weddings, mehndi, walima and other functions we take bulk orders.",
      pOrder: `Ordering is simple: add desi ghee to your cart or message us on WhatsApp at ${BUSINESS.whatsappDisplay}. In Okara you pay cash on delivery; for courier orders we confirm the total and charges, and you pay by bank transfer or a mobile wallet before we ship.`,
      faqTitle: "Questions people ask",
    },
    faqs: [
      { q: "Where can I buy pure desi ghee in Okara?", a: `At ${BUSINESS.name} on GT Road, Sheikh Basti, opposite Azhar Residences in Okara. We have made khalis desi ghee here since ${BUSINESS.since}. Visit the dairy, or order on WhatsApp at ${BUSINESS.whatsappDisplay} and pay cash on delivery.` },
      { q: "What is the price of desi ghee in Pakistan?", a: `Our current prices are {prices}. To other cities in Pakistan, courier charges are added on top. For bulk and event orders, message us on WhatsApp for a quote.` },
      { q: "Can I order desi ghee online from other cities in Pakistan?", a: `Yes. We courier our khalis desi ghee anywhere in Pakistan — Lahore, Karachi, Islamabad, Faisalabad, Multan and beyond. Message us on WhatsApp at ${BUSINESS.whatsappDisplay} with your city and how many packs you want, and we confirm the price, courier charges and payment. Fresh milk and dahi are perishable, so those are Okara city only.` },
      { q: "How can I tell if desi ghee is pure?", a: "Pure desi ghee melts clear and golden, smells rich and nutty, and sets with a grainy, danedar texture at room temperature. Ghee mixed with vegetable oil or banaspati usually smells flat and feels oily. Ours is made only from fresh cream, and you can watch every step in the video on this page." },
      { q: "Do you supply fresh milk and dahi daily in Okara?", a: "Yes. We supply khalis doodh and fresh dahi every day to homes, shops and hotels in Okara city. Send us your area and daily quantity on WhatsApp and we will confirm the price and timing." },
      { q: "Can I order doodh and dahi for a wedding or event?", a: "Yes. We take bulk orders of doodh and dahi for weddings, mehndi, walima and other functions, and well-known hotels in Okara city already buy from us. Tell us the date and quantity on WhatsApp as early as you can." },
      { q: "Do you deliver, and how do I pay?", a: "In Okara we deliver to your door and you pay cash on delivery. For desi ghee couriered to other cities in Pakistan, we confirm the total and courier charges on WhatsApp, and you pay by bank transfer or a mobile wallet like Easypaisa or JazzCash before we ship. Every order is confirmed with you personally first." },
    ],
    contact: {
      kicker: "Visit or message us", h2: "Visit our dairy in Okara, or order from home",
      addressLabel: "Address", phoneLabel: "WhatsApp & phone", chatCta: "Chat on WhatsApp", directionsCta: "Get directions",
    },
    footer: {
      urdu: "محمد ڈیری، اوکاڑہ",
      desc: `Pure desi ghee, makhan, khalis doodh and dahi, made in Okara since ${BUSINESS.since}.`,
      visitTitle: "Visit", orderTitle: "Order", wa: "WhatsApp", cod: "Cash on delivery", dairyLink: "Doodh & dahi: daily or for weddings",
      rights: "All rights reserved.",
    },
    cart: {
      open: "Open cart", cart: "Cart", addToCart: "Add to cart", title: "Your order", details: "Delivery details", close: "Close cart",
      empty: "Your cart is empty.", browse: "Browse products",
      totalItems: (n) => `Total (${n} ${n === 1 ? "item" : "items"})`,
      confirmedOnWa: "Confirmed on WhatsApp", checkout: "Checkout",
      fine: "You'll confirm your order with us on WhatsApp.",
      name: "Full name", phone: "Phone number", city: "City", address: "Delivery address", notes: "Notes",
      phonePh: "03xx xxxxxxx", notesPh: "Delivery time, special requests…",
      orderTotal: "Order total", send: "Send order on WhatsApp", back: "Back to cart",
      error: "Please fill in your name, phone number and address.",
      remove: (p) => `Remove one ${p}`, add: (p) => `Add one ${p}`,
    },
    photo: "Photo",
  },

  ur: {
    brandName: "محمد ڈیری",
    brandEst: `قائم ${BUSINESS.since} · اوکاڑہ`,
    announce: { ghee: "خالص دیسی گھی، پورے پاکستان میں کورئیر", doodh: "اوکاڑہ میں روزانہ دودھ اور دہی", wa: "واٹس ایپ" },
    nav: { process: "کیسے بنتا ہے", shop: "خریداری", dairy: "دودھ اور دہی", story: "ہماری کہانی", herd: "ہمارے مویشی", contact: "ملاقات" },
    hero: {
      pill: `اوکاڑہ، پنجاب · ${BUSINESS.since} سے`,
      h1: "اوکاڑہ کا خالص دیسی گھی، تازہ بالائی سے تیار۔",
      accent: null,
      lede: `${Y} سال سے زیادہ عرصے سے اوکاڑہ کے گھرانے اپنا گھی ہم سے لیتے آ رہے ہیں۔ ہم تازہ بالائی کو بلو کر مکھن بناتے ہیں اور اپنی رسوئی میں تھوڑی تھوڑی مقدار میں آہستہ آہستہ پکاتے ہیں۔ اس میں اور کچھ نہیں ملایا جاتا — اور اب ہم اسے پورے پاکستان میں کورئیر کرتے ہیں۔`,
      shopCta: "دیسی گھی خریدیں",
      watchCta: "دیکھیں کیسے بنتا ہے",
      checks: ["سو فیصد تازہ بالائی", "کوئی ویجیٹیبل آئل نہیں", "پورے پاکستان میں کورئیر"],
      filmTitle: "بالائی سے گھی تک",
      filmSub: "ایک منٹ کی ویڈیو دیکھیں",
      badgeNum: `${Y}+`,
      badgeLabel: "سال اوکاڑہ میں",
    },
    process: { kicker: "بالائی سے گھی تک", h2: "دیکھیں آپ کا گھی بالکل کیسے بنتا ہے", lede: "ہماری رسوئی کی اصل ویڈیو، شروع سے آخر تک تقریباً ایک منٹ میں۔ کسی بھی مرحلے پر جانے کے لیے اس پر ٹیپ کریں۔" },
    shop: {
      kicker: "خریداری", h2: "پاکستان میں خالص دیسی گھی آن لائن خریدیں",
      lede: "جو چاہیے وہ اپنی ٹوکری میں ڈالیں اور آرڈر واٹس ایپ پر بھیجیں۔ دیسی گھی پورے پاکستان میں کورئیر ہوتا ہے؛ مکھن، دودھ اور دہی صرف اوکاڑہ شہر کے لیے ہیں۔ ہر آرڈر ذاتی طور پر تصدیق کیا جاتا ہے۔",
      priceOnWa: "قیمت واٹس ایپ پر",
      how: [
        { t: "۱۔ ٹوکری میں ڈالیں", d: "اپنے پیک اور تعداد منتخب کریں۔" },
        { t: "۲۔ واٹس ایپ پر بھیجیں", d: "چیک آؤٹ واٹس ایپ کھولتا ہے جہاں آپ کا آرڈر پہلے سے لکھا ہوتا ہے۔" },
        { t: "۳۔ تصدیق اور ترسیل", d: "ڈلیوری پر نقد ادائیگی۔ بڑے اور تقریب کے آرڈر بھی خوش آمدید۔" },
      ],
    },
    products: {
      "ghee-1kg": { name: "دیسی گھی", size: "۱ کلو", note: "روزمرہ کا پیک، تازہ بالائی سے آہستہ پکایا ہوا" },
      "ghee-2-5kg": { name: "دیسی گھی", size: "۲.۵ کلو", note: "مہینے بھر کے کھانوں کے لیے فیملی پیک" },
      "ghee-5kg": { name: "دیسی گھی", size: "۵ کلو", note: "بڑے گھرانوں، دکانوں اور تقریبات کے لیے بلک پیک" },
      "makhan-1kg": { name: "تازہ مکھن", size: "۱ کلو", note: "ہاتھ سے بلویا ہوا سفید مکھن، آرڈر پر تیار" },
    },
    dairy: {
      kicker: "دودھ اور دہی · روزانہ یا بلک", h2: "خالص دودھ اور دہی، روزانہ یا آپ کی شادی کے لیے",
      accent: null,
      trust: "اوکاڑہ شہر کے مشہور ہوٹل پہلے ہی اپنا دودھ اور دہی ہم سے لیتے ہیں۔",
      opt1: { t: "اوکاڑہ شہر میں روزانہ ترسیل", d: "آپ کے گھر، دکان یا ہوٹل کے لیے روزانہ تازہ دودھ اور دہی۔" },
      opt2: { t: "شادیاں اور تقریبات", d: "آرڈر پر بڑی مقدار۔ ہمیں تاریخ اور مقدار بتا دیں۔" },
      note: "خالص، اس میں کچھ نہیں ملایا جاتا۔ قیمت اور ترسیل کی تصدیق ہم واٹس ایپ پر ذاتی طور پر کرتے ہیں۔",
      orderCta: "واٹس ایپ پر آرڈر کریں", callCta: `کال کریں ${BUSINESS.whatsappDisplay}`, tag: "روزانہ یا بلک · قیمت واٹس ایپ پر",
      items: {
        doodh: { name: "خالص دودھ", accent: null, text: "ہماری ڈیری کا خالص دودھ، اس میں کچھ نہیں ملایا جاتا۔ آپ کے گھر یا ہوٹل کے لیے روزانہ، یا تقریب کے لیے بلک میں۔" },
        dahi: { name: "خالص دہی", accent: null, text: "خالص دودھ سے بنی تازہ دہی، رائتہ، لسی اور مہمانوں کے لیے تیار۔" },
      },
    },
    story: {
      kicker: "ہماری کہانی", h2: `${BUSINESS.since} سے اوکاڑہ کی خدمت کرنے والی ایک خاندانی ڈیری`,
      p1: `محمد ڈیری ${BUSINESS.since} سے اوکاڑہ کے گھرانوں کی خدمت کر رہی ہے۔ ان تمام برسوں میں ہم نے ایک سادہ وعدہ نبھایا ہے: لوگوں کو وہی خالص دودھ دہی دیں جو ہم اپنے دسترخوان پر رکھیں۔`,
      p2: "اسی وجہ سے نسلوں سے گاہک ہمارے پاس واپس آتے ہیں۔ ہم نے اپنا دیسی گھی بنانے کا طریقہ کبھی نہیں بدلا: تازہ بالائی، محنتی ہاتھ اور آہستہ آنچ۔",
      promises: [
        { t: "اصل تازہ بالائی", d: "ہمارا گھی بالائی سے شروع ہوتا ہے، کبھی ویجیٹیبل آئل یا بنے بنائے مکھن سے نہیں۔" },
        { t: "آہستہ پکا ہوا", d: "ہلکی، محنتی آنچ گہرا سنہرا رنگ اور دانے دار ساخت لاتی ہے۔" },
        { t: "صاف چھانا ہوا", d: "ہر بیچ کو تولنے، بند کرنے اور پیک کرنے سے پہلے چھانا جاتا ہے۔" },
        { t: "جانا پہچانا نام", d: `اوکاڑہ میں ${Y} سال۔ ہر آرڈر ہم ذاتی طور پر تصدیق کرتے ہیں۔` },
      ],
    },
    herd: {
      kicker: "ہمارے مویشی", h2: "اچھا گھی صحت مند جانوروں سے شروع ہوتا ہے",
      lede: "اوکاڑہ پنجاب کے ڈیری علاقے کے دل میں واقع ہے، مشہور نیلی راوی بھینس اور ساہیوال گائے کا گھر۔ ان کا گاڑھا، ملائی دار دودھ ہی وہ جگہ ہے جہاں سے ہمارے دیسی گھی کا ہر بیچ شروع ہوتا ہے۔",
      items: {
        "nili-ravi": { label: "اوکاڑہ اور ساہیوال کی بھینس", name: "نیلی راوی بھینس", text: "دریائے راوی کے نام پر، پورے پنجاب میں گاڑھے، ملائی دار اور زیادہ چکنائی والے دودھ کے لیے مشہور — دیسی گھی کی بہترین بنیاد۔" },
        sahiwal: { label: "پڑوسی ساہیوال سے", name: "ساہیوال گائے", text: "پاکستان کی سب سے مشہور ڈیری گائے: مضبوط، پرسکون اور اچھے، صحت بخش دودھ کے لیے قابل قدر۔" },
        care: { label: "صحت مند جانور، خالص دودھ", name: "روزانہ دیکھ بھال", text: "ہمارے جانوروں کو روزانہ کھلایا، پلایا اور دیکھ بھال کی جاتی ہے، کیونکہ خالص گھی صحت مند جانوروں سے شروع ہوتا ہے۔" },
      },
    },
    guide: {
      kicker: "اوکاڑہ میں دیسی گھی", h2: "دیسی گھی، دودھ اور دہی کے لیے اوکاڑہ کا قابل اعتماد نام",
      accent: null,
      p1: `محمد ڈیری جی ٹی روڈ، شیخ بستی، اظہر ریزیڈنسز کے سامنے اوکاڑہ میں ایک خاندانی ڈیری ہے۔ ${BUSINESS.since} سے ہم خالص دیسی گھی روایتی، آہستہ طریقے سے بناتے آ رہے ہیں، اور آج ہم اوکاڑہ شہر بھر میں خالص دودھ اور تازہ دہی بھی فراہم کرتے ہیں۔`,
      h3a: "ہمارا دیسی گھی خالص کیوں ہے",
      pa: "ہر بیچ تازہ بالائی سے شروع ہوتا ہے۔ بالائی کو بلو کر مکھن بنایا جاتا ہے، پھر دیگچی میں اس وقت تک آہستہ پکایا جاتا ہے جب تک پانی ختم اور گھی سنہرا نہ ہو جائے۔ اس میں اور کچھ نہیں: نہ ویجیٹیبل آئل، نہ بناسپتی، نہ رنگ اور نہ خوشبو۔ اسی لیے اس کی خوشبو بھرپور، ذائقہ اصل مکھن جیسا اور ٹھنڈا ہو کر دانے دار جم جاتا ہے۔",
      h3b: "کیسے پہچانیں کہ دیسی گھی خالص ہے",
      pb: "اصل دیسی گھی صاف اور سنہرا پگھلتا ہے، اس میں مغز جیسی خوشبو ہوتی ہے اور کمرے کے درجہ حرارت پر دانے دار جم جاتا ہے۔ آئل یا بناسپتی ملا گھی عموماً پھیکی خوشبو اور چکنا محسوس ہوتا ہے۔ ہم کہنے کے بجائے دکھانا پسند کرتے ہیں، اس لیے اوپر دی گئی ویڈیو میں ہر مرحلہ دیکھیں۔",
      h3c: "پورے پاکستان میں دیسی گھی آن لائن منگوائیں",
      pc: "ہمارا گھی لینے کے لیے اوکاڑہ میں ہونا ضروری نہیں۔ ہم خالص دیسی گھی پورے پاکستان میں کورئیر کرتے ہیں — لاہور، کراچی، اسلام آباد، فیصل آباد، ملتان، راولپنڈی اور ہر دوسرے شہر میں۔ اپنا شہر اور تعداد بتائیں، ہم قیمت اور کورئیر چارجز کی تصدیق کرتے ہیں، اور آپ کا گھی روانہ۔ تازہ دودھ اور دہی اوکاڑہ میں ہی رہتے ہیں کیونکہ وہ سفر نہیں کر سکتے۔",
      h3d: "اوکاڑہ میں دودھ اور دہی، روزانہ یا بلک میں",
      pd: "ہم اوکاڑہ شہر میں گھروں، دکانوں اور ہوٹلوں کو روزانہ خالص دودھ اور دہی فراہم کرتے ہیں، اور شہر کے کچھ مشہور ہوٹل پہلے ہی ہم سے لیتے ہیں۔ شادیوں، مہندی، ولیمہ اور دیگر تقریبات کے لیے ہم بلک آرڈر لیتے ہیں۔",
      pOrder: `آرڈر کرنا آسان ہے: دیسی گھی اپنی ٹوکری میں ڈالیں یا واٹس ایپ ${BUSINESS.whatsappDisplay} پر ہمیں پیغام بھیجیں۔ اوکاڑہ میں ڈلیوری پر نقد ادائیگی؛ کورئیر آرڈر کے لیے ہم کل رقم اور چارجز کی تصدیق کرتے ہیں، اور بھیجنے سے پہلے آپ بینک ٹرانسفر یا موبائل والٹ سے ادائیگی کرتے ہیں۔`,
      faqTitle: "عام سوالات",
    },
    faqs: [
      { q: "اوکاڑہ میں خالص دیسی گھی کہاں سے خریدیں؟", a: `${BUSINESS.name}، جی ٹی روڈ، شیخ بستی، اظہر ریزیڈنسز کے سامنے اوکاڑہ میں۔ ہم یہاں ${BUSINESS.since} سے خالص دیسی گھی بناتے آ رہے ہیں۔ ڈیری پر آئیں، یا واٹس ایپ ${BUSINESS.whatsappDisplay} پر آرڈر کریں اور ڈلیوری پر نقد ادائیگی کریں۔` },
      { q: "پاکستان میں دیسی گھی کی قیمت کیا ہے؟", a: `ہماری موجودہ قیمتیں یہ ہیں: {prices}۔ پاکستان کے دوسرے شہروں کے لیے کورئیر چارجز الگ سے شامل ہوتے ہیں۔ بلک اور تقریب کے آرڈر کے لیے قیمت واٹس ایپ پر پوچھیں۔` },
      { q: "کیا میں پاکستان کے دوسرے شہروں سے دیسی گھی آن لائن منگوا سکتا ہوں؟", a: `جی ہاں۔ ہم اپنا خالص دیسی گھی پورے پاکستان میں کورئیر کرتے ہیں — لاہور، کراچی، اسلام آباد، فیصل آباد، ملتان اور ہر جگہ۔ واٹس ایپ ${BUSINESS.whatsappDisplay} پر اپنا شہر اور پیک کی تعداد بتائیں، ہم قیمت، کورئیر چارجز اور ادائیگی کی تصدیق کرتے ہیں۔ تازہ دودھ اور دہی جلد خراب ہونے والے ہیں، اس لیے وہ صرف اوکاڑہ شہر کے لیے ہیں۔` },
      { q: "کیسے پہچانیں کہ دیسی گھی خالص ہے؟", a: "خالص دیسی گھی صاف اور سنہرا پگھلتا ہے، اس کی خوشبو بھرپور اور مغز جیسی ہوتی ہے، اور کمرے کے درجہ حرارت پر دانے دار جم جاتا ہے۔ ویجیٹیبل آئل یا بناسپتی ملا گھی عموماً پھیکا اور چکنا محسوس ہوتا ہے۔ ہمارا گھی صرف تازہ بالائی سے بنتا ہے، اور آپ اس صفحے کی ویڈیو میں ہر مرحلہ دیکھ سکتے ہیں۔" },
      { q: "کیا آپ اوکاڑہ میں روزانہ تازہ دودھ اور دہی فراہم کرتے ہیں؟", a: "جی ہاں۔ ہم اوکاڑہ شہر میں گھروں، دکانوں اور ہوٹلوں کو روزانہ خالص دودھ اور تازہ دہی دیتے ہیں۔ واٹس ایپ پر اپنا علاقہ اور روزانہ مقدار بھیجیں، ہم قیمت اور وقت کی تصدیق کر دیں گے۔" },
      { q: "کیا شادی یا تقریب کے لیے دودھ اور دہی آرڈر کر سکتے ہیں؟", a: "جی ہاں۔ ہم شادیوں، مہندی، ولیمہ اور دیگر تقریبات کے لیے دودھ اور دہی کے بلک آرڈر لیتے ہیں، اور اوکاڑہ شہر کے مشہور ہوٹل پہلے ہی ہم سے لیتے ہیں۔ تاریخ اور مقدار واٹس ایپ پر جلد از جلد بتا دیں۔" },
      { q: "کیا آپ ڈلیور کرتے ہیں، اور ادائیگی کیسے ہوتی ہے؟", a: "اوکاڑہ میں ہم آپ کے دروازے پر پہنچاتے ہیں اور آپ ڈلیوری پر نقد ادائیگی کرتے ہیں۔ پاکستان کے دوسرے شہروں میں کورئیر ہونے والے دیسی گھی کے لیے ہم کل رقم اور کورئیر چارجز کی واٹس ایپ پر تصدیق کرتے ہیں، اور بھیجنے سے پہلے آپ بینک ٹرانسفر یا ایزی پیسہ/جاز کیش جیسے موبائل والٹ سے ادائیگی کرتے ہیں۔ ہر آرڈر پہلے آپ سے ذاتی طور پر تصدیق کیا جاتا ہے۔" },
    ],
    contact: {
      kicker: "ملاقات یا رابطہ", h2: "اوکاڑہ میں ہماری ڈیری پر آئیں، یا گھر بیٹھے آرڈر کریں",
      addressLabel: "پتہ", phoneLabel: "واٹس ایپ اور فون", chatCta: "واٹس ایپ پر بات کریں", directionsCta: "راستہ دیکھیں",
    },
    footer: {
      urdu: null,
      desc: `خالص دیسی گھی، مکھن، خالص دودھ اور دہی، ${BUSINESS.since} سے اوکاڑہ میں تیار۔`,
      visitTitle: "ملاقات", orderTitle: "آرڈر", wa: "واٹس ایپ", cod: "ڈلیوری پر نقد ادائیگی", dairyLink: "دودھ اور دہی: روزانہ یا شادیوں کے لیے",
      rights: "جملہ حقوق محفوظ ہیں۔",
    },
    cart: {
      open: "ٹوکری کھولیں", cart: "ٹوکری", addToCart: "ٹوکری میں ڈالیں", title: "آپ کا آرڈر", details: "ترسیل کی تفصیلات", close: "بند کریں",
      empty: "آپ کی ٹوکری خالی ہے۔", browse: "مصنوعات دیکھیں",
      totalItems: (n) => `کل (${n} اشیاء)`,
      confirmedOnWa: "واٹس ایپ پر طے", checkout: "چیک آؤٹ",
      fine: "آپ اپنے آرڈر کی تصدیق ہم سے واٹس ایپ پر کریں گے۔",
      name: "پورا نام", phone: "فون نمبر", city: "شہر", address: "ترسیل کا پتہ", notes: "نوٹس",
      phonePh: "03xx xxxxxxx", notesPh: "ترسیل کا وقت، خاص درخواستیں…",
      orderTotal: "کل رقم", send: "واٹس ایپ پر آرڈر بھیجیں", back: "ٹوکری پر واپس",
      error: "براہ کرم اپنا نام، فون نمبر اور پتہ درج کریں۔",
      remove: (p) => `${p} ایک کم کریں`, add: (p) => `${p} ایک زیادہ کریں`,
    },
    photo: "تصویر",
  },

  pa: {
    brandName: "محمد ڈیری",
    brandEst: `قائم ${BUSINESS.since} · اوکاڑہ`,
    announce: { ghee: "خالص دیسی گھیو، سارے پاکستان وچ کورئیر", doodh: "اوکاڑہ وچ روز دا دُدھ تے دہی", wa: "واٹس ایپ" },
    nav: { process: "کِداں بݨدا اے", shop: "خریداری", dairy: "دُدھ تے دہی", story: "ساڈی کہاݨی", herd: "ساڈے ڈنگر", contact: "ملݨ آؤ" },
    hero: {
      pill: `اوکاڑہ، پنجاب · ${BUSINESS.since} توں`,
      h1: "اوکاڑہ دا خالص دیسی گھیو، تازہ بالائی توں تیار۔",
      accent: null,
      lede: `${Y} سال توں وَدھ اوکاڑہ دے گھرانے اپݨا گھیو ساڈے کولوں لیندے آ رہے نیں۔ اَسی تازہ بالائی نوں رِڑک کے مکھݨ بݨاندے آں تے اپݨی رسوئی وچ تھوڑی تھوڑی کر کے ہولی ہولی پکاندے آں۔ ایہدے وچ ہور کُجھ نئیں پیندا — تے ہُݨ اَسی ایہنوں سارے پاکستان وچ کورئیر کردے آں۔`,
      shopCta: "دیسی گھیو خریدو",
      watchCta: "ویکھو کِداں بݨدا اے",
      checks: ["سو فیصد تازہ بالائی", "کوئی ویجیٹیبل آئل نئیں", "سارے پاکستان وچ کورئیر"],
      filmTitle: "بالائی توں گھیو تک",
      filmSub: "اِک منٹ دی ویڈیو ویکھو",
      badgeNum: `${Y}+`,
      badgeLabel: "سال اوکاڑہ وچ",
    },
    process: { kicker: "بالائی توں گھیو تک", h2: "ویکھو تُہاڈا گھیو بالکل کِداں بݨدا اے", lede: "ساڈی رسوئی دی اصلی ویڈیو، شروع توں آخر تک تقریباً اِک منٹ وچ۔ کسے وی مرحلے تے جاݨ لئی اوہدے تے ٹیپ کرو۔" },
    shop: {
      kicker: "خریداری", h2: "پاکستان وچ خالص دیسی گھیو آن لائن خریدو",
      lede: "جو چاہیدا اے اوہ اپݨی ٹوکری وچ پاؤ تے آرڈر واٹس ایپ تے بھیجو۔ دیسی گھیو سارے پاکستان وچ کورئیر ہوندا اے؛ مکھݨ، دُدھ تے دہی رڳ اوکاڑہ شہر لئی نیں۔ ہر آرڈر ذاتی طور تے پکا کیتا جاندا اے۔",
      priceOnWa: "قیمت واٹس ایپ تے",
      how: [
        { t: "۱۔ ٹوکری وچ پاؤ", d: "اپݨے پیک تے تعداد چُݨو۔" },
        { t: "۲۔ واٹس ایپ تے بھیجو", d: "چیک آؤٹ واٹس ایپ کھولدا اے جِتھے تُہاڈا آرڈر پہلے توں لکھیا ہوندا اے۔" },
        { t: "۳۔ پکا تے ترسیل", d: "ڈلیوری تے نقد۔ وڈے تے تقریب دے آرڈر وی خوش آمدید۔" },
      ],
    },
    products: {
      "ghee-1kg": { name: "دیسی گھیو", size: "۱ کلو", note: "روز دا پیک، تازہ بالائی توں ہولی پکایا ہویا" },
      "ghee-2-5kg": { name: "دیسی گھیو", size: "۲.۵ کلو", note: "مہینے بھر دے کھاݨیاں لئی فیملی پیک" },
      "ghee-5kg": { name: "دیسی گھیو", size: "۵ کلو", note: "وڈے گھرانیاں، دکاناں تے تقریباں لئی بلک پیک" },
      "makhan-1kg": { name: "تازہ مکھݨ", size: "۱ کلو", note: "ہتھ نال رِڑکیا سفید مکھݨ، آرڈر تے تیار" },
    },
    dairy: {
      kicker: "دُدھ تے دہی · روز یا بلک", h2: "خالص دُدھ تے دہی، روز یا تُہاڈی شادی لئی",
      accent: null,
      trust: "اوکاڑہ شہر دے مشہور ہوٹل پہلے ای اپݨا دُدھ تے دہی ساڈے کولوں لیندے نیں۔",
      opt1: { t: "اوکاڑہ شہر وچ روز ترسیل", d: "تُہاڈے گھر، دکان یا ہوٹل لئی روز تازہ دُدھ تے دہی۔" },
      opt2: { t: "شادیاں تے تقریباں", d: "آرڈر تے وڈی مقدار۔ سانوں تاریخ تے مقدار دَس دیو۔" },
      note: "خالص، ایہدے وچ کُجھ نئیں پیندا۔ قیمت تے ترسیل دی تصدیق اَسی واٹس ایپ تے ذاتی طور تے کردے آں۔",
      orderCta: "واٹس ایپ تے آرڈر کرو", callCta: `کال کرو ${BUSINESS.whatsappDisplay}`, tag: "روز یا بلک · قیمت واٹس ایپ تے",
      items: {
        doodh: { name: "خالص دُدھ", accent: null, text: "ساڈی ڈیری دا خالص دُدھ، ایہدے وچ کُجھ نئیں پیندا۔ تُہاڈے گھر یا ہوٹل لئی روز، یا تقریب لئی بلک وچ۔" },
        dahi: { name: "خالص دہی", accent: null, text: "خالص دُدھ توں بݨی تازہ دہی، رائتہ، لسی تے مہماناں لئی تیار۔" },
      },
    },
    story: {
      kicker: "ساڈی کہاݨی", h2: `${BUSINESS.since} توں اوکاڑہ دی خدمت کرن والی اِک خاندانی ڈیری`,
      p1: `محمد ڈیری ${BUSINESS.since} توں اوکاڑہ دے گھرانیاں دی خدمت کر رہی اے۔ ایہناں سارے سالاں وچ اَسی اِک سادہ وعدہ نبھایا اے: لوکاں نوں اوہی خالص دُدھ دہی دیو جیہڑا اَسی اپݨے دسترخوان تے رکھیے۔`,
      p2: "ایسے کرکے نسلاں توں گاہک ساڈے کول واپس آؤندے نیں۔ اَسی اپݨا دیسی گھیو بݨاؤݨ دا طریقہ کدے نئیں بدلیا: تازہ بالائی، محنتی ہتھ تے ہولی اَگ۔",
      promises: [
        { t: "اصلی تازہ بالائی", d: "ساڈا گھیو بالائی توں شروع ہوندا اے، کدے ویجیٹیبل آئل یا بݨے بݨائے مکھݨ توں نئیں۔" },
        { t: "ہولی پکایا", d: "مَدھم، محنتی اَگ ڈونگھا سنہری رنگ تے دانے دار ساخت لیاؤندی اے۔" },
        { t: "صاف چھاݨیا", d: "ہر بیچ نوں تولݨ، بند کرن تے پیک کرن توں پہلے چھاݨیا جاندا اے۔" },
        { t: "جاݨیا پچھاݨیا ناں", d: `اوکاڑہ وچ ${Y} سال۔ ہر آرڈر اَسی ذاتی طور تے پکا کردے آں۔` },
      ],
    },
    herd: {
      kicker: "ساڈے ڈنگر", h2: "چنگا گھیو تندرست ڈنگراں توں شروع ہوندا اے",
      lede: "اوکاڑہ پنجاب دے ڈیری علاقے دے دل وچ اے، مشہور نیلی راوی مَجھ تے ساہیوال گاں دا گھر۔ اوہناں دا گاڑھا، ملائی دار دُدھ ای اوہ تھاں اے جِتھوں ساڈے دیسی گھیو دا ہر بیچ شروع ہوندا اے۔",
      items: {
        "nili-ravi": { label: "اوکاڑہ تے ساہیوال دی مَجھ", name: "نیلی راوی مَجھ", text: "دریائے راوی دے ناں تے، سارے پنجاب وچ گاڑھے، ملائی دار تے وَدھ چکنائی والے دُدھ لئی مشہور — دیسی گھیو دی سبھ توں چنگی بنیاد۔" },
        sahiwal: { label: "گوانڈھی ساہیوال توں", name: "ساہیوال گاں", text: "پاکستان دی سبھ توں مشہور ڈیری گاں: مضبوط، ٹھنڈی مزاج تے چنگے، صحت بھرے دُدھ لئی قدر والی۔" },
        care: { label: "تندرست ڈنگر، خالص دُدھ", name: "روز دی دیکھ بھال", text: "ساڈے ڈنگراں نوں روز کھلایا، پلایا تے سنبھالیا جاندا اے، کیوں جے خالص گھیو تندرست ڈنگراں توں شروع ہوندا اے۔" },
      },
    },
    guide: {
      kicker: "اوکاڑہ وچ دیسی گھیو", h2: "دیسی گھیو، دُدھ تے دہی لئی اوکاڑہ دا بھروسے والا ناں",
      accent: null,
      p1: `محمد ڈیری جی ٹی روڈ، شیخ بستی، اظہر ریزیڈنسز دے سامنے اوکاڑہ وچ اِک خاندانی ڈیری اے۔ ${BUSINESS.since} توں اَسی خالص دیسی گھیو روایتی، ہولی طریقے نال بݨاندے آ رہے آں، تے اَج اَسی اوکاڑہ شہر وچ خالص دُدھ تے تازہ دہی وی دیندے آں۔`,
      h3a: "ساڈا دیسی گھیو خالص کیوں اے",
      pa: "ہر بیچ تازہ بالائی توں شروع ہوندا اے۔ بالائی نوں رِڑک کے مکھݨ بݨدا اے، فیر دیگچی وچ اوس ویلے تک ہولی پکایا جاندا اے جدوں تک پاݨی مُک تے گھیو سنہری نہ ہو جائے۔ ایہدے وچ ہور کُجھ نئیں: نہ ویجیٹیبل آئل، نہ بناسپتی، نہ رنگ تے نہ خوشبو۔ ایسے کرکے ایہدی خوشبو بھرپور، ذائقہ اصلی مکھݨ جیہا تے ٹھنڈا ہو کے دانے دار جم جاندا اے۔",
      h3b: "کِداں پچھاݨیے کہ دیسی گھیو خالص اے",
      pb: "اصلی دیسی گھیو صاف تے سنہری پگھلدا اے، ایہدے وچ مغز جیہی خوشبو ہوندی اے تے کمرے دے درجہ حرارت تے دانے دار جم جاندا اے۔ آئل یا بناسپتی رلیا گھیو عموماً پھِکی خوشبو تے چکنا لگدا اے۔ اَسی کہݨ نالوں ویکھاوݨ نوں چنگا سمجھدے آں، ایسے لئی اُتے دتی ویڈیو وچ ہر مرحلہ ویکھو۔",
      h3c: "سارے پاکستان وچ دیسی گھیو آن لائن منگواؤ",
      pc: "ساڈا گھیو لیݨ لئی اوکاڑہ وچ ہوݨا ضروری نئیں۔ اَسی خالص دیسی گھیو سارے پاکستان وچ کورئیر کردے آں — لاہور، کراچی، اسلام آباد، فیصل آباد، ملتان، راولپنڈی تے ہر دوجے شہر وچ۔ اپݨا شہر تے تعداد دَسو، اَسی قیمت تے کورئیر چارجز دی تصدیق کردے آں، تے تُہاڈا گھیو روانہ۔ تازہ دُدھ تے دہی اوکاڑہ وچ ای رہندے نیں کیوں جے اوہ سفر نئیں کر سکدے۔",
      h3d: "اوکاڑہ وچ دُدھ تے دہی، روز یا بلک وچ",
      pd: "اَسی اوکاڑہ شہر وچ گھراں، دکاناں تے ہوٹلاں نوں روز خالص دُدھ تے دہی دیندے آں، تے شہر دے کُجھ مشہور ہوٹل پہلے ای ساڈے کولوں لیندے نیں۔ شادیاں، مہندی، ولیمہ تے ہور تقریباں لئی اَسی بلک آرڈر لیندے آں۔",
      pOrder: `آرڈر کرنا سوکھا اے: دیسی گھیو اپݨی ٹوکری وچ پاؤ یا واٹس ایپ ${BUSINESS.whatsappDisplay} تے سانوں پیغام بھیجو۔ اوکاڑہ وچ ڈلیوری تے نقد؛ کورئیر آرڈر لئی اَسی کل رقم تے چارجز دی تصدیق کردے آں، تے بھیجݨ توں پہلے تُسی بینک ٹرانسفر یا موبائل والٹ نال ادائیگی کردے او۔`,
      faqTitle: "عام سوال",
    },
    faqs: [
      { q: "اوکاڑہ وچ خالص دیسی گھیو کِتھوں خریدیے؟", a: `${BUSINESS.name}، جی ٹی روڈ، شیخ بستی، اظہر ریزیڈنسز دے سامنے اوکاڑہ وچ۔ اَسی ایتھے ${BUSINESS.since} توں خالص دیسی گھیو بݨاندے آ رہے آں۔ ڈیری تے آؤ، یا واٹس ایپ ${BUSINESS.whatsappDisplay} تے آرڈر کرو تے ڈلیوری تے نقد ادائیگی کرو۔` },
      { q: "پاکستان وچ دیسی گھیو دی قیمت کیہ اے؟", a: `ساڈیاں ہُݨ دیاں قیمتاں ایہ نیں: {prices}۔ پاکستان دے دوجے شہراں لئی کورئیر چارجز وکھرے پیندے نیں۔ بلک تے تقریب دے آرڈر لئی قیمت واٹس ایپ تے پُچھو۔` },
      { q: "کیہ میں پاکستان دے دوجے شہراں توں دیسی گھیو آن لائن منگوا سکدا آں؟", a: `جی ہاں۔ اَسی اپݨا خالص دیسی گھیو سارے پاکستان وچ کورئیر کردے آں — لاہور، کراچی، اسلام آباد، فیصل آباد، ملتان تے ہر تھاں۔ واٹس ایپ ${BUSINESS.whatsappDisplay} تے اپݨا شہر تے پیک دی تعداد دَسو، اَسی قیمت، کورئیر چارجز تے ادائیگی دی تصدیق کردے آں۔ تازہ دُدھ تے دہی چھیتی خراب ہوندے نیں، ایسے لئی اوہ رڳ اوکاڑہ شہر لئی نیں۔` },
      { q: "کِداں پچھاݨیے کہ دیسی گھیو خالص اے؟", a: "خالص دیسی گھیو صاف تے سنہری پگھلدا اے، ایہدی خوشبو بھرپور تے مغز جیہی ہوندی اے، تے کمرے دے درجہ حرارت تے دانے دار جم جاندا اے۔ ویجیٹیبل آئل یا بناسپتی رلیا گھیو عموماً پھِکا تے چکنا لگدا اے۔ ساڈا گھیو رڳ تازہ بالائی توں بݨدا اے، تے تُسی ایس صفحے دی ویڈیو وچ ہر مرحلہ ویکھ سکدے او۔" },
      { q: "کیہ تُسی اوکاڑہ وچ روز تازہ دُدھ تے دہی دیندے او؟", a: "جی ہاں۔ اَسی اوکاڑہ شہر وچ گھراں، دکاناں تے ہوٹلاں نوں روز خالص دُدھ تے تازہ دہی دیندے آں۔ واٹس ایپ تے اپݨا علاقہ تے روز دی مقدار بھیجو، اَسی قیمت تے ویلے دی تصدیق کر دیاں گے۔" },
      { q: "کیہ شادی یا تقریب لئی دُدھ تے دہی آرڈر کر سکدے آں؟", a: "جی ہاں۔ اَسی شادیاں، مہندی، ولیمہ تے ہور تقریباں لئی دُدھ تے دہی دے بلک آرڈر لیندے آں، تے اوکاڑہ شہر دے مشہور ہوٹل پہلے ای ساڈے کولوں لیندے نیں۔ تاریخ تے مقدار واٹس ایپ تے چھیتی دَس دیو۔" },
      { q: "کیہ تُسی ڈلیور کردے او، تے ادائیگی کِداں ہوندی اے؟", a: "اوکاڑہ وچ اَسی تُہاڈے بوہے تے پہنچاندے آں تے تُسی ڈلیوری تے نقد دیندے او۔ پاکستان دے دوجے شہراں وچ کورئیر ہوݨ والے دیسی گھیو لئی اَسی کل رقم تے کورئیر چارجز دی واٹس ایپ تے تصدیق کردے آں، تے بھیجݨ توں پہلے تُسی بینک ٹرانسفر یا ایزی پیسہ/جاز کیش جیہے موبائل والٹ نال ادائیگی کردے او۔ ہر آرڈر پہلے تُہاڈے نال ذاتی طور تے پکا کیتا جاندا اے۔" },
    ],
    contact: {
      kicker: "ملݨ یا رابطہ", h2: "اوکاڑہ وچ ساڈی ڈیری تے آؤ، یا گھر بیٹھے آرڈر کرو",
      addressLabel: "پتہ", phoneLabel: "واٹس ایپ تے فون", chatCta: "واٹس ایپ تے گل کرو", directionsCta: "راہ ویکھو",
    },
    footer: {
      urdu: null,
      desc: `خالص دیسی گھیو، مکھݨ، خالص دُدھ تے دہی، ${BUSINESS.since} توں اوکاڑہ وچ تیار۔`,
      visitTitle: "ملݨ آؤ", orderTitle: "آرڈر", wa: "واٹس ایپ", cod: "ڈلیوری تے نقد", dairyLink: "دُدھ تے دہی: روز یا شادیاں لئی",
      rights: "سارے حق محفوظ نیں۔",
    },
    cart: {
      open: "ٹوکری کھولو", cart: "ٹوکری", addToCart: "ٹوکری وچ پاؤ", title: "تُہاڈا آرڈر", details: "ترسیل دیاں تفصیلاں", close: "بند کرو",
      empty: "تُہاڈی ٹوکری خالی اے۔", browse: "مصنوعات ویکھو",
      totalItems: (n) => `کل (${n} شیواں)`,
      confirmedOnWa: "واٹس ایپ تے طے", checkout: "چیک آؤٹ",
      fine: "تُسی اپݨے آرڈر دی تصدیق ساڈے نال واٹس ایپ تے کرو گے۔",
      name: "پورا ناں", phone: "فون نمبر", city: "شہر", address: "ترسیل دا پتہ", notes: "نوٹس",
      phonePh: "03xx xxxxxxx", notesPh: "ترسیل دا ویلا، خاص فرمائشاں…",
      orderTotal: "کل رقم", send: "واٹس ایپ تے آرڈر بھیجو", back: "ٹوکری تے واپس",
      error: "مہربانی کر کے اپݨا ناں، فون نمبر تے پتہ لکھو۔",
      remove: (p) => `${p} اِک گھٹ کرو`, add: (p) => `${p} اِک ودھ کرو`,
    },
    photo: "تصویر",
  },
};

// Per-locale page metadata (title/description) and hreflang alternates.
const META = {
  en: {
    title: "Pure Desi Ghee Online in Pakistan | Muhammad Dairy Okara",
    description: "Khalis desi ghee from fresh cream, couriered anywhere in Pakistan. Plus doodh and dahi daily in Okara. A family dairy since 1975 — order on WhatsApp.",
    ogTitle: "Muhammad Dairy | Khalis Desi Ghee, Delivered Across Pakistan",
    ogDesc: "Khalis desi ghee from fresh cream, couriered anywhere in Pakistan. Doodh and dahi daily in Okara. Order on WhatsApp: 0305 684 7007",
  },
  ur: {
    title: "پاکستان میں خالص دیسی گھی آن لائن | محمد ڈیری اوکاڑہ",
    description: "تازہ بالائی سے خالص دیسی گھی، پورے پاکستان میں کورئیر۔ ساتھ ہی اوکاڑہ میں روزانہ دودھ اور دہی۔ 1975 سے خاندانی ڈیری — واٹس ایپ پر آرڈر کریں۔",
    ogTitle: "محمد ڈیری | خالص دیسی گھی، پورے پاکستان میں ترسیل",
    ogDesc: "تازہ بالائی سے خالص دیسی گھی، پورے پاکستان میں کورئیر۔ اوکاڑہ میں روزانہ دودھ اور دہی۔ واٹس ایپ: 0305 684 7007",
  },
  pa: {
    title: "پاکستان وچ خالص دیسی گھیو آن لائن | محمد ڈیری اوکاڑہ",
    description: "تازہ بالائی توں خالص دیسی گھیو، سارے پاکستان وچ کورئیر۔ نال ای اوکاڑہ وچ روز دا دُدھ تے دہی۔ 1975 توں خاندانی ڈیری — واٹس ایپ تے آرڈر کرو۔",
    ogTitle: "محمد ڈیری | خالص دیسی گھیو، سارے پاکستان وچ ترسیل",
    ogDesc: "تازہ بالائی توں خالص دیسی گھیو، سارے پاکستان وچ کورئیر۔ اوکاڑہ وچ روز دا دُدھ تے دہی۔ واٹس ایپ: 0305 684 7007",
  },
};

export function buildMetadata(locale) {
  const m = META[locale] || META.en;
  const L = localeByCode(locale);
  const languages = {};
  LOCALES.forEach((l) => { languages[l.htmlLang] = localeHome(l.code); });
  languages["x-default"] = "/";
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: localeHome(locale), languages },
    openGraph: {
      title: m.ogTitle, description: m.ogDesc, type: "website", siteName: BUSINESS.name,
      locale: L.ogLocale, url: localeHome(locale),
      images: [{ url: "media/ghee-1kg.jpg", width: 600, height: 600, alt: m.ogTitle }],
    },
    twitter: { card: "summary_large_image" },
  };
}
