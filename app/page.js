import { BUSINESS, PRODUCTS, HERD, DAIRY_ITEMS, SOCIAL, asset, formatPKR, waLink, mapsLink, SITE_URL } from "@/lib/config";
import ProcessVideo from "./ProcessVideo";
import ThemeToggle from "./ThemeToggle";
import { AddToCart, CartButton, WaIcon } from "./cart";

const YEARS = new Date().getFullYear() - BUSINESS.since;

// Social profile URLs that are actually set, for schema sameAs and the footer.
const SAME_AS = [SOCIAL.facebook, SOCIAL.instagram, SOCIAL.tiktok, SOCIAL.youtube].filter(Boolean);

const PRICE_LIST = PRODUCTS.map(
  (p) => `${p.name} ${p.size}: ${typeof p.price === "number" ? formatPKR(p.price) : "price on WhatsApp"}`
).join("; ");

// Shown on the page and sent to Google as FAQPage data, so both always match.
const FAQS = [
  {
    q: "Where can I buy pure desi ghee in Okara?",
    a: `At ${BUSINESS.name} on GT Road, Sheikh Basti, opposite Azhar Residences in Okara. We have made khalis desi ghee here since ${BUSINESS.since}. Visit the dairy, or order on WhatsApp at ${BUSINESS.whatsappDisplay} and pay cash on delivery.`,
  },
  {
    q: "What is the price of desi ghee in Pakistan?",
    a: `Our current prices are ${PRICE_LIST}. To other cities in Pakistan, courier charges are added on top. For bulk and event orders, message us on WhatsApp for a quote.`,
  },
  {
    q: "Can I order desi ghee online from other cities in Pakistan?",
    a: `Yes. We courier our khalis desi ghee anywhere in Pakistan — Lahore, Karachi, Islamabad, Faisalabad, Multan and beyond. Message us on WhatsApp at ${BUSINESS.whatsappDisplay} with your city and how many packs you want, and we confirm the price, courier charges and payment. Fresh milk and dahi are perishable, so those are Okara city only.`,
  },
  {
    q: "How can I tell if desi ghee is pure?",
    a: "Pure desi ghee melts clear and golden, smells rich and nutty, and sets with a grainy, danedar texture at room temperature. Ghee mixed with vegetable oil or banaspati usually smells flat and feels oily. Ours is made only from fresh cream, and you can watch every step in the video on this page.",
  },
  {
    q: "Do you supply fresh milk and dahi daily in Okara?",
    a: "Yes. We supply khalis doodh and fresh dahi every day to homes, shops and hotels in Okara city. Send us your area and daily quantity on WhatsApp and we will confirm the price and timing.",
  },
  {
    q: "Can I order doodh and dahi for a wedding or event?",
    a: "Yes. We take bulk orders of doodh and dahi for weddings, mehndi, walima and other functions, and well-known hotels in Okara city already buy from us. Tell us the date and quantity on WhatsApp as early as you can.",
  },
  {
    q: "Do you deliver, and how do I pay?",
    a: "In Okara we deliver to your door and you pay cash on delivery. For desi ghee couriered to other cities in Pakistan, we confirm the total and courier charges on WhatsApp, and you pay by bank transfer or a mobile wallet like Easypaisa or JazzCash before we ship. Every order is confirmed with you personally first.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: BUSINESS.name,
      inLanguage: "en-PK",
      publisher: { "@id": `${SITE_URL}#business` },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}#business`,
      name: BUSINESS.name,
      description: "Family dairy in Okara serving since 1975. Pure desi ghee made from fresh cream, churned and slow-cooked in small batches and couriered anywhere in Pakistan. Khalis doodh and dahi supplied daily in Okara city, and in bulk for weddings, functions and hotels.",
      foundingDate: String(BUSINESS.since),
      url: SITE_URL,
      telephone: "+" + BUSINESS.whatsappIntl,
      image: `${SITE_URL}media/ghee-1kg.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.street,
        addressLocality: "Okara",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      hasMap: mapsLink(),
      areaServed: [
        { "@type": "City", name: "Okara" },
        { "@type": "Country", name: "Pakistan" },
      ],
      paymentAccepted: "Cash on delivery, Bank transfer, Easypaisa, JazzCash",
      currenciesAccepted: "PKR",
      knowsAbout: ["Desi ghee", "Makhan", "Milk", "Dahi"],
      logo: `${SITE_URL}icon.svg`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+" + BUSINESS.whatsappIntl,
        contactType: "sales",
        areaServed: "PK",
        availableLanguage: ["Urdu", "English"],
      },
      ...(SAME_AS.length && { sameAs: SAME_AS }),
      makesOffer: DAIRY_ITEMS.map((d) => ({
        "@type": "Offer",
        description: "Daily supply in Okara city, and bulk orders for weddings, functions and hotels",
        itemOffered: { "@type": "Product", name: d.name, description: d.text },
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    ...PRODUCTS.map((p) => ({
      "@type": "Product",
      name: `${p.name} ${p.size}`,
      description: p.note,
      image: `${SITE_URL}${p.image.replace(/^\//, "")}`,
      brand: { "@type": "Brand", name: BUSINESS.name },
      ...(typeof p.price === "number" && {
        offers: {
          "@type": "Offer",
          price: p.price,
          priceCurrency: "PKR",
          availability: "https://schema.org/InStock",
          seller: { "@id": `${SITE_URL}#business` },
        },
      }),
    })),
  ],
};

const ICONS = {
  check: <path d="M20 6 9 17l-5-5" />,
  play: <path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none" />,
  drop: <path d="M12 3c-3 4-6.5 7.6-6.5 11.5a6.5 6.5 0 0 0 13 0C18.5 10.6 15 7 12 3z" />,
  flame: <path d="M12 22c3.9 0 7-2.6 7-6.6 0-3.3-2.2-5.6-3.6-7.4-.4 1.9-1.4 3-2.9 3.5.6-3.1-.8-6.3-3.6-8.5 0 4.1-4.9 6.6-4.9 12.4C4 19.4 8.1 22 12 22z" />,
  filter: <path d="M3 4h18l-7 8.5V19l-4 2v-8.5z" />,
  shield: <path d="M12 2.5 19 5v6c0 4.6-3 8.4-7 10.5C8 19.4 5 15.6 5 11V5z M9 11.5l2 2 4-4" />,
  pin: <><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  phone: <path d="M21 16.4v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 3.1 3.7 2 2 0 0 1 5.1 1.5h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L9 9.3a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />,
  cart: <><path d="M6 7h12l-1 13H7L6 7z" /><path d="M9 7a3 3 0 0 1 6 0" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4M8 14h2M14 14h2M8 17h2" /></>,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" /><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.3c2.2.7 3.5 2.8 3.5 5.7" /></>,
  hotel: <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 10h4a1 1 0 0 1 1 1v10M2 21h20M8 8h3M8 12h3M8 16h3" />,
  truck: <><path d="M3 6h11v10H3zM14 9h4l3 3.5V16h-7z" /><circle cx="7" cy="17.5" r="1.8" /><circle cx="17" cy="17.5" r="1.8" /></>,
};

function Icon({ name, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

// Line drawings shown for a HERD or DAIRY_ITEMS entry until it has a real photo.
const ART = {
  buffalo: (
    <>
      <path d="M74 64 C52 66 30 58 22 38 C20 32 24 30 28 34 C38 46 52 50 72 52" />
      <path d="M126 64 C148 66 170 58 178 38 C180 32 176 30 172 34 C162 46 148 50 128 52" />
      <path d="M72 52 C84 46 116 46 128 52 C132 70 130 92 124 112 C120 128 118 146 112 156 C106 164 94 164 88 156 C82 146 80 128 76 112 C70 92 68 70 72 52 Z" />
      <path d="M73 72 C60 70 46 76 40 86 C52 92 66 88 76 82" />
      <path d="M127 72 C140 70 154 76 160 86 C148 92 134 88 124 82" />
      <circle cx="90" cy="93" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="110" cy="93" r="2.4" fill="currentColor" stroke="none" />
      <ellipse cx="93" cy="150" rx="3" ry="4.5" />
      <ellipse cx="107" cy="150" rx="3" ry="4.5" />
    </>
  ),
  cow: (
    <>
      <path d="M80 52 C76 42 72 36 66 34" />
      <path d="M120 52 C124 42 128 36 134 34" />
      <path d="M76 54 C88 46 112 46 124 54 C128 74 126 96 120 116 C116 132 116 146 110 156 C104 164 96 164 90 156 C84 146 84 132 80 116 C74 96 72 74 76 54 Z" />
      <path d="M77 70 C62 70 46 82 40 100 C40 106 46 106 50 102 C60 92 70 86 79 84" />
      <path d="M123 70 C138 70 154 82 160 100 C160 106 154 106 150 102 C140 92 130 86 121 84" />
      <circle cx="92" cy="95" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="108" cy="95" r="2.4" fill="currentColor" stroke="none" />
      <ellipse cx="94" cy="150" rx="3" ry="4.5" />
      <ellipse cx="106" cy="150" rx="3" ry="4.5" />
    </>
  ),
  care: (
    <>
      <path d="M100 160 V70" />
      <path d="M100 120 C80 118 64 104 60 84 C80 84 96 98 100 120" />
      <path d="M100 100 C120 98 136 84 140 64 C120 64 104 78 100 100" />
      <path d="M100 76 C92 66 92 52 100 40 C108 52 108 66 100 76" />
      <path d="M60 160 H140" />
      <path d="M148 128 C148 120 156 112 156 112 C156 112 164 120 164 128 a8 8 0 0 1 -16 0 Z" />
    </>
  ),
  milk: (
    <>
      <path d="M80 40 H120" />
      <path d="M92 40 C92 32 108 32 108 40" />
      <path d="M84 46 H116" />
      <path d="M86 46 V56 C86 64 70 68 70 80 V150 C70 157 75 162 82 162 H118 C125 162 130 157 130 150 V80 C130 68 114 64 114 56 V46" />
      <path d="M70 96 H130" />
      <path d="M70 140 H130" />
      <path d="M70 104 C58 104 54 110 54 118 C54 126 58 130 70 130" />
      <path d="M130 104 C142 104 146 110 146 118 C146 126 142 130 130 130" />
    </>
  ),
  dahi: (
    <>
      <path d="M44 96 H156" />
      <path d="M48 96 C48 134 72 156 100 156 C128 156 152 134 152 96" />
      <path d="M54 96 C60 82 78 74 100 74 C122 74 140 82 146 96" />
      <path d="M80 157 L76 166 H124 L120 157" />
      <path d="M78 88 C86 82 94 82 100 85" />
      <path d="M108 84 C116 80 124 82 130 88" />
      <path d="M62 116 H138" />
    </>
  ),
};

function ArtImage({ item }) {
  if (item.image) {
    return (
      <>
        <img src={asset(item.image)} alt={item.alt || item.name} loading="lazy" width="600" height="450" />
        {item.credit && (
          <a className="photo-credit" href={item.credit.url} target="_blank" rel="noopener">
            Photo: {item.credit.by} · {item.credit.license}
          </a>
        )}
      </>
    );
  }
  return (
    <div className="art-placeholder" role="img" aria-label={`${item.name} illustration`}>
      <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {ART[item.icon]}
      </svg>
    </div>
  );
}

const PROMISES = [
  { icon: "drop", title: "Real fresh cream", text: "Our ghee starts with cream, never vegetable oil or ready-made butter." },
  { icon: "flame", title: "Cooked slowly", text: "Low, patient heat brings out the deep golden colour and danedar texture." },
  { icon: "filter", title: "Strained clean", text: "Every batch is filtered before it is weighed, sealed and packed." },
  { icon: "shield", title: "A name you know", text: `${YEARS} years in Okara. Every order is confirmed by us personally.` },
];

// Only links with a URL set in SOCIAL render; WhatsApp is always available.
const SOCIAL_LINKS = [
  { key: "whatsapp", label: "WhatsApp", href: SOCIAL.whatsapp, icon: <WaIcon size={18} /> },
  {
    key: "facebook", label: "Facebook", href: SOCIAL.facebook,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-7h2.3l.4-2.9h-2.7V9.3c0-.8.3-1.4 1.5-1.4H16V5.3c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H7.7V14h2.4v7z" />
      </svg>
    ),
  },
  {
    key: "instagram", label: "Instagram", href: SOCIAL.instagram,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    key: "tiktok", label: "TikTok", href: SOCIAL.tiktok,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16.5 3h-2.6v12.4a2.3 2.3 0 1 1-2.3-2.3c.2 0 .4 0 .6.1v-2.7a5 5 0 1 0 4.3 5V8.8a6.3 6.3 0 0 0 3.5 1.1V7.2a3.6 3.6 0 0 1-3.5-3.2z" />
      </svg>
    ),
  },
  {
    key: "youtube", label: "YouTube", href: SOCIAL.youtube,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23 8.3a2.6 2.6 0 0 0-1.8-1.8C19.6 6 12 6 12 6s-7.6 0-9.2.5A2.6 2.6 0 0 0 1 8.3 27 27 0 0 0 .6 12 27 27 0 0 0 1 15.7a2.6 2.6 0 0 0 1.8 1.8c1.6.5 9.2.5 9.2.5s7.6 0 9.2-.5a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 23.4 12 27 27 0 0 0 23 8.3zM9.8 15.3V8.7l5.7 3.3z" />
      </svg>
    ),
  },
].filter((s) => s.href);

export default function Home() {
  const contactMsg = `Assalam o Alaikum ${BUSINESS.name}, I'd like to know more about your desi ghee.`;
  const dairyMsg = [
    `Assalam o Alaikum ${BUSINESS.name}, I'd like to order doodh / dahi.`,
    "",
    "Daily supply or one-time order: ",
    "For (home / shop / hotel / wedding / function): ",
    "Start date or event date: ",
    "Doodh quantity: ",
    "Dahi quantity: ",
    "Area: ",
  ].join("\n");
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="announce">
        <div className="wrap announce-inner">
          <a href="#shop">Khalis desi ghee, couriered anywhere in Pakistan</a>
          <span className="announce-dot announce-wide" aria-hidden="true" />
          <span className="announce-wide">Doodh &amp; dahi daily in Okara</span>
          <span className="announce-dot announce-wide" aria-hidden="true" />
          <span className="announce-wide">
            WhatsApp <a href={waLink(contactMsg)} target="_blank" rel="noopener">{BUSINESS.whatsappDisplay}</a>
          </span>
        </div>
      </div>

      <header className="header">
        <div className="wrap header-inner">
          <a href="#top" className="brand" aria-label={`${BUSINESS.name}, home`}>
            <span className="brand-mark" aria-hidden="true">
              <Icon name="drop" size={22} />
            </span>
            <span className="brand-text">
              <span className="brand-name">{BUSINESS.name}</span>
              <span className="brand-sub">Est. {BUSINESS.since} · Okara</span>
            </span>
          </a>
          <nav className="nav" aria-label="Main">
            <a href="#process">How it&apos;s made</a>
            <a href="#shop">Shop</a>
            <a href="#doodh-dahi">Doodh &amp; dahi</a>
            <a href="#story">Our story</a>
            <a href="#herd">Our herd</a>
            <a href="#contact">Visit us</a>
          </nav>
          <div className="header-actions">
            <a className="btn btn-wa btn-sm header-wa" href={waLink(contactMsg)} target="_blank" rel="noopener">
              <WaIcon size={16} /> {BUSINESS.whatsappDisplay}
            </a>
            <ThemeToggle />
            <CartButton />
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="pill">
                <span className="pill-dot" aria-hidden="true" /> Okara, Punjab · since {BUSINESS.since}
              </p>
              <h1>Pure desi ghee in Okara, made from fresh cream.</h1>
              <p className="hero-urdu" lang="ur" dir="rtl">تازہ بالائی سے خالص دیسی گھی</p>
              <p className="lede">
                For over {YEARS} years, families in Okara have bought their ghee from us. We churn fresh cream into
                makhan and cook it slowly in our own kitchen, in small batches. Nothing else goes in — and now we
                courier it anywhere in Pakistan.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary btn-lg" href="#shop">Shop desi ghee</a>
                <a className="btn btn-light btn-lg" href="#process">
                  <Icon name="play" size={16} /> Watch how it&apos;s made
                </a>
              </div>
              <ul className="checks">
                <li><Icon name="check" size={16} /> 100% fresh cream</li>
                <li><Icon name="check" size={16} /> No vegetable oil</li>
                <li><Icon name="check" size={16} /> Couriered across Pakistan</li>
              </ul>
            </div>

            <div className="hero-media">
              <div className="hero-photos">
                <img src={asset("/media/ghee-1kg.jpg")} alt="Pure desi ghee cooking in a steel pot at Muhammad Dairy, Okara" width="600" height="600" />
                <img src={asset("/media/step2.jpg")} alt="Makhan being churned by hand for desi ghee" width="480" height="549" />
                <img src={asset("/media/step4.jpg")} alt="Makhan slow-cooking into khalis desi ghee" width="480" height="549" />
              </div>
              <a className="hero-film" href="#process">
                <img src={asset("/media/poster.jpg")} alt="" width="54" height="72" />
                <span className="hero-film-text">
                  <strong>From cream to ghee</strong>
                  <span>Watch the 1-minute video</span>
                </span>
                <span className="hero-film-play" aria-hidden="true"><Icon name="play" size={14} /></span>
              </a>
              <div className="hero-badge">
                <strong>{YEARS}+</strong>
                <span>years in Okara</span>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="section film-section">
          <div className="wrap">
            <ProcessVideo>
              <div className="section-head">
                <p className="kicker">From cream to ghee</p>
                <h2>See exactly how your ghee is made</h2>
                <p className="section-lede">
                  Real footage from our kitchen, start to finish in about a minute. Tap a step to jump to it.
                </p>
              </div>
            </ProcessVideo>
          </div>
        </section>

        <section id="shop" className="section shop">
          <div className="wrap">
            <div className="section-head split">
              <div>
                <p className="kicker">Shop</p>
                <h2>Buy pure desi ghee online in Pakistan</h2>
              </div>
              <p className="section-lede">
                Add what you need to your cart and send the order on WhatsApp. We courier desi ghee anywhere in
                Pakistan; makhan, doodh and dahi are for Okara city. Every order is confirmed personally.
              </p>
            </div>
            <div className="products">
              {PRODUCTS.map((p) => (
                <article key={p.id} className="product">
                  <div className="product-img">
                    <img src={asset(p.image)} alt={`${p.name} ${p.size} from Muhammad Dairy, Okara`} loading="lazy" width="480" height="480" />
                    <span className="product-size">{p.size}</span>
                  </div>
                  <div className="product-body">
                    <h3>{p.name} <span>{p.size}</span></h3>
                    <p className="product-note">{p.note}</p>
                    <div className="product-foot">
                      <span className="price">
                        {typeof p.price === "number" ? formatPKR(p.price) : "Price on WhatsApp"}
                      </span>
                      <AddToCart id={p.id} />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <ol className="how">
              <li>
                <span className="how-icon"><Icon name="cart" /></span>
                <div><strong>1. Add to cart</strong><p>Pick your packs and how many you need.</p></div>
              </li>
              <li>
                <span className="how-icon"><WaIcon size={20} /></span>
                <div><strong>2. Send on WhatsApp</strong><p>Checkout opens WhatsApp with your order already written.</p></div>
              </li>
              <li>
                <span className="how-icon"><Icon name="truck" /></span>
                <div><strong>3. We confirm &amp; deliver</strong><p>Pay cash on delivery. Bulk and event orders welcome.</p></div>
              </li>
            </ol>
          </div>
        </section>

        <section id="doodh-dahi" className="section dairy">
          <div className="wrap dairy-grid">
            <div className="dairy-copy">
              <p className="kicker">Doodh &amp; dahi · daily or bulk</p>
              <h2>Khalis doodh and dahi, every day or for your shaadi</h2>
              <p className="dairy-urdu" lang="ur" dir="rtl">روزانہ اور شادی بیاہ کے لیے خالص دودھ اور دہی</p>
              <p className="dairy-trust">
                <span className="dairy-trust-icon"><Icon name="hotel" /></span>
                Well-known hotels in Okara city already get their doodh and dahi from us.
              </p>
              <ul className="dairy-options">
                <li>
                  <span className="dairy-option-icon"><Icon name="calendar" /></span>
                  <div>
                    <strong>Daily supply in Okara city</strong>
                    <p>Fresh doodh and dahi every day for your home, shop or hotel.</p>
                  </div>
                </li>
                <li>
                  <span className="dairy-option-icon"><Icon name="users" /></span>
                  <div>
                    <strong>Weddings &amp; functions</strong>
                    <p>Bulk quantities on order. Tell us the date and how much you need.</p>
                  </div>
                </li>
              </ul>
              <p className="dairy-note">
                Pure, nothing mixed in. We confirm the price and delivery with you personally on WhatsApp.
              </p>
              <div className="cta-row">
                <a className="btn btn-wa btn-lg" href={waLink(dairyMsg)} target="_blank" rel="noopener">
                  <WaIcon size={20} /> Order on WhatsApp
                </a>
                <a className="btn btn-light btn-lg" href={`tel:+${BUSINESS.whatsappIntl}`}>
                  <Icon name="phone" size={18} /> Call {BUSINESS.whatsappDisplay}
                </a>
              </div>
            </div>
            <ul className="dairy-items">
              {DAIRY_ITEMS.map((b) => (
                <li key={b.id} className="dairy-card">
                  <div className="dairy-img">
                    <ArtImage item={b} />
                  </div>
                  <div className="dairy-body">
                    <h3>{b.name}</h3>
                    <p className="dairy-item-urdu" lang="ur" dir="rtl">{b.urdu}</p>
                    <p className="dairy-text">{b.text}</p>
                    <span className="dairy-tag">Daily or bulk · price on WhatsApp</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="story" className="section story">
          <div className="wrap story-grid">
            <div className="story-photos">
              <img src={asset("/media/step1.jpg")} alt="Fresh cream being collected from milk" loading="lazy" width="480" height="549" />
              <img src={asset("/media/step7.jpg")} alt="Packs of fresh desi ghee" loading="lazy" width="480" height="549" />
            </div>
            <div className="story-copy">
              <p className="kicker">Our story</p>
              <h2>A family dairy, serving Okara since {BUSINESS.since}</h2>
              <p>
                Muhammad Dairy has served the families of Okara since {BUSINESS.since}. Through all these years we have
                kept one simple promise: give people the same pure dairy we would serve at our own table.
              </p>
              <p>
                Generations of customers still come back to us for that reason. We have never changed how we make our
                desi ghee: fresh cream, patient hands and slow heat.
              </p>
              <ul className="promises">
                {PROMISES.map((p) => (
                  <li key={p.title}>
                    <span className="promise-icon"><Icon name={p.icon} /></span>
                    <div>
                      <strong>{p.title}</strong>
                      <p>{p.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="herd" className="section herd">
          <div className="wrap">
            <div className="section-head split">
              <div>
                <p className="kicker">Our herd</p>
                <h2>Good ghee starts with healthy animals</h2>
              </div>
              <p className="section-lede">
                Okara sits in the heart of Punjab&apos;s dairy country, home of the famous Nili-Ravi buffalo and the
                Sahiwal cow. Their rich, creamy milk is where every batch of our desi ghee begins.
              </p>
            </div>
            <ul className="herd-grid">
              {HERD.map((h) => (
                <li key={h.id} className="herd-card">
                  <div className="herd-img">
                    <ArtImage item={h} />
                  </div>
                  <div className="herd-body">
                    <p className="herd-label">{h.label}</p>
                    <h3>{h.name}</h3>
                    <p className="herd-text">{h.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="okara" className="section guide">
          <div className="wrap guide-grid">
            <article className="guide-article">
              <p className="kicker">Desi ghee in Okara</p>
              <h2>Okara&apos;s trusted name for desi ghee, doodh and dahi</h2>
              <p className="guide-urdu" lang="ur" dir="rtl">اوکاڑہ میں خالص دیسی گھی، دودھ اور دہی</p>
              <p>
                {BUSINESS.name} is a family dairy on GT Road, Sheikh Basti, opposite Azhar Residences in Okara. Since{" "}
                {BUSINESS.since} we have made <strong>pure desi ghee</strong> the slow, traditional way, and today we
                also supply <strong>khalis doodh and fresh dahi</strong> across Okara city.
              </p>
              <h3>What makes our desi ghee khalis</h3>
              <p>
                Every batch starts with fresh cream. The cream is churned into makhan, then cooked slowly in a degchi
                until the water is gone and the ghee turns golden. Nothing else goes in: no vegetable oil, no banaspati,
                no colour and no flavouring. That is why it smells rich, tastes of real makhan and sets{" "}
                <strong>danedar</strong> as it cools.
              </p>
              <h3>How to tell if desi ghee is pure</h3>
              <p>
                Real desi ghee melts clear and golden, smells nutty and sets with a grainy texture at room temperature.
                Ghee mixed with oil or banaspati usually smells flat and feels oily. We would rather show you than ask
                you to trust us, so <a href="#process">watch every step of how ours is made</a>.
              </p>
              <h3>Order desi ghee online, anywhere in Pakistan</h3>
              <p>
                You don&apos;t have to be in Okara to get our ghee. We <strong>courier khalis desi ghee across
                Pakistan</strong> — Lahore, Karachi, Islamabad, Faisalabad, Multan, Rawalpindi and every other city.
                Tell us your city and how many packs you want, we confirm the price and courier charges, and your
                ghee is on its way. Fresh milk and dahi stay in Okara, since they cannot travel.
              </p>
              <h3>Doodh and dahi, daily or in bulk in Okara</h3>
              <p>
                We supply khalis doodh and dahi every day to homes, shops and hotels in Okara city, and some of the
                city&apos;s well-known hotels already buy from us. For weddings, mehndi, walima and other functions we
                take bulk orders. <a href="#doodh-dahi">See daily and bulk options</a>.
              </p>
              <p>
                Ordering is simple: <a href="#shop">add desi ghee to your cart</a> or message us on WhatsApp at{" "}
                {BUSINESS.whatsappDisplay}. In Okara you pay cash on delivery; for courier orders we confirm the
                total and charges, and you pay by bank transfer or a mobile wallet before we ship.
              </p>
            </article>

            <div className="faq">
              <h2 className="faq-title">Questions people ask</h2>
              {FAQS.map((f, i) => (
                <details key={f.q} className="faq-item" open={i === 0}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section visit">
          <div className="wrap visit-grid">
            <div className="visit-copy">
              <p className="kicker">Visit or message us</p>
              <h2>Visit our dairy in Okara, or order from home</h2>
              <ul className="visit-list">
                <li>
                  <span className="visit-icon"><Icon name="pin" /></span>
                  <div>
                    <span>Address</span>
                    <a href={mapsLink()} target="_blank" rel="noopener">{BUSINESS.address}</a>
                  </div>
                </li>
                <li>
                  <span className="visit-icon"><Icon name="phone" /></span>
                  <div>
                    <span>WhatsApp &amp; phone</span>
                    <a href={`tel:+${BUSINESS.whatsappIntl}`}>{BUSINESS.whatsappDisplay}</a>
                  </div>
                </li>
              </ul>
              <div className="cta-row">
                <a className="btn btn-wa btn-lg" href={waLink(contactMsg)} target="_blank" rel="noopener">
                  <WaIcon size={20} /> Chat on WhatsApp
                </a>
                <a className="btn btn-light btn-lg" href={mapsLink()} target="_blank" rel="noopener">Get directions</a>
              </div>
            </div>
            <div className="visit-map">
              <iframe
                title={`Map showing ${BUSINESS.name}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.address)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <span className="brand-name">{BUSINESS.name}</span>
            <span className="footer-urdu" lang="ur" dir="rtl">محمد ڈیری، اوکاڑہ</span>
            <p>Pure desi ghee, makhan, khalis doodh and dahi, made in Okara since {BUSINESS.since}.</p>
            {SOCIAL_LINKS.length > 0 && (
              <ul className="footer-social">
                {SOCIAL_LINKS.map((s) => (
                  <li key={s.key}>
                    <a href={s.href} target="_blank" rel="noopener" aria-label={`${BUSINESS.name} on ${s.label}`}>
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h3>Visit</h3>
            <p>{BUSINESS.address}</p>
          </div>
          <div>
            <h3>Order</h3>
            <p>
              <a href={waLink(contactMsg)} target="_blank" rel="noopener">WhatsApp {BUSINESS.whatsappDisplay}</a>
              <br />
              Cash on delivery
              <br />
              <a href="#doodh-dahi">Doodh &amp; dahi: daily or for weddings</a>
            </p>
          </div>
        </div>
        <div className="wrap footer-base">
          © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </div>
      </footer>
    </>
  );
}
