import { BUSINESS, PRODUCTS, HERD, DAIRY_ITEMS, SOCIAL, asset, formatPKR, waLink, mapsLink, SITE_URL } from "@/lib/config";
import { STR, localeByCode } from "@/lib/i18n";
import ProcessVideo from "./ProcessVideo";
import ThemeToggle from "./ThemeToggle";
import LangSwitcher from "./LangSwitcher";
import { CartProvider, AddToCart, CartButton, WaIcon } from "./cart";

const YEARS = new Date().getFullYear() - BUSINESS.since;
const SAME_AS = [SOCIAL.facebook, SOCIAL.instagram, SOCIAL.tiktok, SOCIAL.youtube].filter(Boolean);

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

function ArtImage({ item, name, photoLabel }) {
  if (item.image) {
    return (
      <>
        <img src={asset(item.image)} alt={item.alt || name} loading="lazy" width="600" height="450" />
        {item.credit && (
          <a className="photo-credit" href={item.credit.url} target="_blank" rel="noopener">
            {photoLabel}: {item.credit.by} · {item.credit.license}
          </a>
        )}
      </>
    );
  }
  return (
    <div className="art-placeholder" role="img" aria-label={name}>
      <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {ART[item.icon]}
      </svg>
    </div>
  );
}

const PROMISE_ICONS = ["drop", "flame", "filter", "shield"];
const HOW_ICONS = ["cart", "wa", "truck"];

const SOCIAL_BRAND = {
  facebook: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7h2.3l.4-2.9h-2.7V9.3c0-.8.3-1.4 1.5-1.4H16V5.3c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H7.7V14h2.4v7z" />
    </svg>
  ),
  instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  tiktok: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.5 3h-2.6v12.4a2.3 2.3 0 1 1-2.3-2.3c.2 0 .4 0 .6.1v-2.7a5 5 0 1 0 4.3 5V8.8a6.3 6.3 0 0 0 3.5 1.1V7.2a3.6 3.6 0 0 1-3.5-3.2z" />
    </svg>
  ),
  youtube: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 8.3a2.6 2.6 0 0 0-1.8-1.8C19.6 6 12 6 12 6s-7.6 0-9.2.5A2.6 2.6 0 0 0 1 8.3 27 27 0 0 0 .6 12 27 27 0 0 0 1 15.7a2.6 2.6 0 0 0 1.8 1.8c1.6.5 9.2.5 9.2.5s7.6 0 9.2-.5a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 23.4 12 27 27 0 0 0 23 8.3zM9.8 15.3V8.7l5.7 3.3z" />
    </svg>
  ),
};

const SOCIAL_LINKS = [
  { key: "whatsapp", label: "WhatsApp", href: SOCIAL.whatsapp, icon: <WaIcon size={18} /> },
  { key: "facebook", label: "Facebook", href: SOCIAL.facebook, icon: SOCIAL_BRAND.facebook },
  { key: "instagram", label: "Instagram", href: SOCIAL.instagram, icon: SOCIAL_BRAND.instagram },
  { key: "tiktok", label: "TikTok", href: SOCIAL.tiktok, icon: SOCIAL_BRAND.tiktok },
  { key: "youtube", label: "YouTube", href: SOCIAL.youtube, icon: SOCIAL_BRAND.youtube },
].filter((s) => s.href);

export default function Site({ locale = "en" }) {
  const t = STR[locale] || STR.en;
  const { dir, htmlLang } = localeByCode(locale);
  const pageUrl = `${SITE_URL}${locale === "en" ? "" : locale + "/"}`;

  // Owner-facing WhatsApp messages stay in English so the order is easy to read.
  const contactMsg = `Assalam o Alaikum ${BUSINESS.name}, I'd like to know more about your desi ghee.`;
  const dairyMsg = [
    `Assalam o Alaikum ${BUSINESS.name}, I'd like to order doodh / dahi.`, "",
    "Daily supply or one-time order: ", "For (home / shop / hotel / wedding / function): ",
    "Start date or event date: ", "Doodh quantity: ", "Dahi quantity: ", "Area: ",
  ].join("\n");

  const priceList = PRODUCTS.map(
    (p) => `${t.products[p.id].name} ${t.products[p.id].size}: ${typeof p.price === "number" ? formatPKR(p.price) : t.shop.priceOnWa}`
  ).join("; ");
  const faqs = t.faqs.map((f) => ({ q: f.q, a: f.a.replace("{prices}", priceList) }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": `${SITE_URL}#website`, url: SITE_URL, name: BUSINESS.name, inLanguage: htmlLang, publisher: { "@id": `${SITE_URL}#business` } },
      {
        "@type": "LocalBusiness", "@id": `${SITE_URL}#business`, name: BUSINESS.name,
        description: "Family dairy in Okara serving since 1975. Pure desi ghee made from fresh cream, churned and slow-cooked in small batches and couriered anywhere in Pakistan. Khalis doodh and dahi supplied daily in Okara city, and in bulk for weddings, functions and hotels.",
        foundingDate: String(BUSINESS.since), url: pageUrl, telephone: "+" + BUSINESS.whatsappIntl, image: `${SITE_URL}media/ghee-1kg.jpg`,
        address: { "@type": "PostalAddress", streetAddress: BUSINESS.street, addressLocality: "Okara", addressRegion: "Punjab", addressCountry: "PK" },
        hasMap: mapsLink(),
        areaServed: [{ "@type": "City", name: "Okara" }, { "@type": "Country", name: "Pakistan" }],
        paymentAccepted: "Cash on delivery, Bank transfer, Easypaisa, JazzCash", currenciesAccepted: "PKR",
        knowsAbout: ["Desi ghee", "Makhan", "Milk", "Dahi"], logo: `${SITE_URL}icon.svg`,
        contactPoint: { "@type": "ContactPoint", telephone: "+" + BUSINESS.whatsappIntl, contactType: "sales", areaServed: "PK", availableLanguage: ["Urdu", "Punjabi", "English"] },
        ...(SAME_AS.length && { sameAs: SAME_AS }),
      },
      { "@type": "FAQPage", inLanguage: htmlLang, mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
      ...PRODUCTS.map((p) => ({
        "@type": "Product", name: `${t.products[p.id].name} ${t.products[p.id].size}`, description: t.products[p.id].note,
        image: `${SITE_URL}${p.image.replace(/^\//, "")}`, brand: { "@type": "Brand", name: BUSINESS.name },
        ...(typeof p.price === "number" && { offers: { "@type": "Offer", price: p.price, priceCurrency: "PKR", availability: "https://schema.org/InStock", seller: { "@id": `${SITE_URL}#business` } } }),
      })),
    ],
  };

  return (
    <div className="site" lang={htmlLang} dir={dir}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CartProvider locale={locale}>
        <div className="announce">
          <div className="wrap announce-inner">
            <a href="#shop">{t.announce.ghee}</a>
            <span className="announce-dot announce-wide" aria-hidden="true" />
            <span className="announce-wide">{t.announce.doodh}</span>
            <span className="announce-dot announce-wide" aria-hidden="true" />
            <span className="announce-wide">
              {t.announce.wa} <a href={waLink(contactMsg)} target="_blank" rel="noopener">{BUSINESS.whatsappDisplay}</a>
            </span>
          </div>
        </div>

        <header className="header">
          <div className="wrap header-inner">
            <a href="#top" className="brand" aria-label={t.brandName}>
              <span className="brand-mark" aria-hidden="true"><Icon name="drop" size={22} /></span>
              <span className="brand-text">
                <span className="brand-name">{t.brandName}</span>
                <span className="brand-sub">{t.brandEst}</span>
              </span>
            </a>
            <nav className="nav" aria-label="Main">
              <a href="#process">{t.nav.process}</a>
              <a href="#shop">{t.nav.shop}</a>
              <a href="#doodh-dahi">{t.nav.dairy}</a>
              <a href="#story">{t.nav.story}</a>
              <a href="#herd">{t.nav.herd}</a>
              <a href="#contact">{t.nav.contact}</a>
            </nav>
            <div className="header-actions">
              <a className="btn btn-wa btn-sm header-wa" href={waLink(contactMsg)} target="_blank" rel="noopener">
                <WaIcon size={16} /> {BUSINESS.whatsappDisplay}
              </a>
              <LangSwitcher locale={locale} />
              <ThemeToggle />
              <CartButton />
            </div>
          </div>
        </header>

        <main id="top">
          <section className="hero">
            <div className="wrap hero-grid">
              <div className="hero-copy">
                <p className="pill"><span className="pill-dot" aria-hidden="true" /> {t.hero.pill}</p>
                <h1>{t.hero.h1}</h1>
                {t.hero.accent && <p className="hero-urdu" lang="ur" dir="rtl">{t.hero.accent}</p>}
                <p className="lede">{t.hero.lede}</p>
                <div className="cta-row">
                  <a className="btn btn-primary btn-lg" href="#shop">{t.hero.shopCta}</a>
                  <a className="btn btn-light btn-lg" href="#process"><Icon name="play" size={16} /> {t.hero.watchCta}</a>
                </div>
                <ul className="checks">
                  {t.hero.checks.map((c) => <li key={c}><Icon name="check" size={16} /> {c}</li>)}
                </ul>
              </div>
              <div className="hero-media">
                <div className="hero-photos">
                  <img src={asset("/media/ghee-1kg.jpg")} alt={`${t.products["ghee-1kg"].name} — ${t.brandName}, Okara`} width="600" height="600" />
                  <img src={asset("/media/step2.jpg")} alt={t.herd.items["nili-ravi"].name} width="480" height="549" />
                  <img src={asset("/media/step4.jpg")} alt={t.hero.filmTitle} width="480" height="549" />
                </div>
                <a className="hero-film" href="#process">
                  <img src={asset("/media/poster.jpg")} alt="" width="54" height="72" />
                  <span className="hero-film-text">
                    <strong>{t.hero.filmTitle}</strong>
                    <span>{t.hero.filmSub}</span>
                  </span>
                  <span className="hero-film-play" aria-hidden="true"><Icon name="play" size={14} /></span>
                </a>
                <div className="hero-badge"><strong>{t.hero.badgeNum}</strong><span>{t.hero.badgeLabel}</span></div>
              </div>
            </div>
          </section>

          <section id="process" className="section film-section">
            <div className="wrap">
              <ProcessVideo>
                <div className="section-head">
                  <p className="kicker">{t.process.kicker}</p>
                  <h2>{t.process.h2}</h2>
                  <p className="section-lede">{t.process.lede}</p>
                </div>
              </ProcessVideo>
            </div>
          </section>

          <section id="shop" className="section shop">
            <div className="wrap">
              <div className="section-head split">
                <div><p className="kicker">{t.shop.kicker}</p><h2>{t.shop.h2}</h2></div>
                <p className="section-lede">{t.shop.lede}</p>
              </div>
              <div className="products">
                {PRODUCTS.map((p) => {
                  const d = t.products[p.id];
                  return (
                    <article key={p.id} className="product">
                      <div className="product-img">
                        <img src={asset(p.image)} alt={`${d.name} ${d.size} — ${t.brandName}, Okara`} loading="lazy" width="480" height="480" />
                        <span className="product-size">{d.size}</span>
                      </div>
                      <div className="product-body">
                        <h3>{d.name} <span>{d.size}</span></h3>
                        <p className="product-note">{d.note}</p>
                        <div className="product-foot">
                          <span className="price">{typeof p.price === "number" ? formatPKR(p.price) : t.shop.priceOnWa}</span>
                          <AddToCart id={p.id} />
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
              <ol className="how">
                {t.shop.how.map((h, i) => (
                  <li key={h.t}>
                    <span className="how-icon">{HOW_ICONS[i] === "wa" ? <WaIcon size={20} /> : <Icon name={HOW_ICONS[i]} />}</span>
                    <div><strong>{h.t}</strong><p>{h.d}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section id="doodh-dahi" className="section dairy">
            <div className="wrap dairy-grid">
              <div className="dairy-copy">
                <p className="kicker">{t.dairy.kicker}</p>
                <h2>{t.dairy.h2}</h2>
                {t.dairy.accent && <p className="dairy-urdu" lang="ur" dir="rtl">{t.dairy.accent}</p>}
                <p className="dairy-trust"><span className="dairy-trust-icon"><Icon name="hotel" /></span>{t.dairy.trust}</p>
                <ul className="dairy-options">
                  <li><span className="dairy-option-icon"><Icon name="calendar" /></span><div><strong>{t.dairy.opt1.t}</strong><p>{t.dairy.opt1.d}</p></div></li>
                  <li><span className="dairy-option-icon"><Icon name="users" /></span><div><strong>{t.dairy.opt2.t}</strong><p>{t.dairy.opt2.d}</p></div></li>
                </ul>
                <p className="dairy-note">{t.dairy.note}</p>
                <div className="cta-row">
                  <a className="btn btn-wa btn-lg" href={waLink(dairyMsg)} target="_blank" rel="noopener"><WaIcon size={20} /> {t.dairy.orderCta}</a>
                  <a className="btn btn-light btn-lg" href={`tel:+${BUSINESS.whatsappIntl}`}><Icon name="phone" size={18} /> {t.dairy.callCta}</a>
                </div>
              </div>
              <ul className="dairy-items">
                {DAIRY_ITEMS.map((b) => {
                  const d = t.dairy.items[b.id];
                  return (
                    <li key={b.id} className="dairy-card">
                      <div className="dairy-img"><ArtImage item={b} name={d.name} photoLabel={t.photo} /></div>
                      <div className="dairy-body">
                        <h3>{d.name}</h3>
                        {d.accent && <p className="dairy-item-urdu" lang="ur" dir="rtl">{d.accent}</p>}
                        <p className="dairy-text">{d.text}</p>
                        <span className="dairy-tag">{t.dairy.tag}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>

          <section id="story" className="section story">
            <div className="wrap story-grid">
              <div className="story-photos">
                <img src={asset("/media/step1.jpg")} alt={t.herd.lede} loading="lazy" width="480" height="549" />
                <img src={asset("/media/step7.jpg")} alt={t.products["ghee-5kg"].name} loading="lazy" width="480" height="549" />
              </div>
              <div className="story-copy">
                <p className="kicker">{t.story.kicker}</p>
                <h2>{t.story.h2}</h2>
                <p>{t.story.p1}</p>
                <p>{t.story.p2}</p>
                <ul className="promises">
                  {t.story.promises.map((p, i) => (
                    <li key={p.t}><span className="promise-icon"><Icon name={PROMISE_ICONS[i]} /></span><div><strong>{p.t}</strong><p>{p.d}</p></div></li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="herd" className="section herd">
            <div className="wrap">
              <div className="section-head split">
                <div><p className="kicker">{t.herd.kicker}</p><h2>{t.herd.h2}</h2></div>
                <p className="section-lede">{t.herd.lede}</p>
              </div>
              <ul className="herd-grid">
                {HERD.map((h) => {
                  const d = t.herd.items[h.id];
                  return (
                    <li key={h.id} className="herd-card">
                      <div className="herd-img"><ArtImage item={h} name={d.name} photoLabel={t.photo} /></div>
                      <div className="herd-body"><p className="herd-label">{d.label}</p><h3>{d.name}</h3><p className="herd-text">{d.text}</p></div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>

          <section id="okara" className="section guide">
            <div className="wrap guide-grid">
              <article className="guide-article">
                <p className="kicker">{t.guide.kicker}</p>
                <h2>{t.guide.h2}</h2>
                {t.guide.accent && <p className="guide-urdu" lang="ur" dir="rtl">{t.guide.accent}</p>}
                <p>{t.guide.p1}</p>
                <h3>{t.guide.h3a}</h3><p>{t.guide.pa}</p>
                <h3>{t.guide.h3b}</h3><p>{t.guide.pb}</p>
                <h3>{t.guide.h3c}</h3><p>{t.guide.pc}</p>
                <h3>{t.guide.h3d}</h3><p>{t.guide.pd}</p>
                <p>{t.guide.pOrder}</p>
              </article>
              <div className="faq">
                <h2 className="faq-title">{t.guide.faqTitle}</h2>
                {faqs.map((f, i) => (
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
                <p className="kicker">{t.contact.kicker}</p>
                <h2>{t.contact.h2}</h2>
                <ul className="visit-list">
                  <li><span className="visit-icon"><Icon name="pin" /></span><div><span>{t.contact.addressLabel}</span><a href={mapsLink()} target="_blank" rel="noopener">{BUSINESS.address}</a></div></li>
                  <li><span className="visit-icon"><Icon name="phone" /></span><div><span>{t.contact.phoneLabel}</span><a href={`tel:+${BUSINESS.whatsappIntl}`}>{BUSINESS.whatsappDisplay}</a></div></li>
                </ul>
                <div className="cta-row">
                  <a className="btn btn-wa btn-lg" href={waLink(contactMsg)} target="_blank" rel="noopener"><WaIcon size={20} /> {t.contact.chatCta}</a>
                  <a className="btn btn-light btn-lg" href={mapsLink()} target="_blank" rel="noopener">{t.contact.directionsCta}</a>
                </div>
              </div>
              <div className="visit-map">
                <iframe title={t.brandName} src={`https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.address)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="wrap footer-grid">
            <div className="footer-brand">
              <span className="brand-name">{t.brandName}</span>
              {t.footer.urdu && <span className="footer-urdu" lang="ur" dir="rtl">{t.footer.urdu}</span>}
              <p>{t.footer.desc}</p>
              {SOCIAL_LINKS.length > 0 && (
                <ul className="footer-social">
                  {SOCIAL_LINKS.map((s) => (
                    <li key={s.key}><a href={s.href} target="_blank" rel="noopener" aria-label={`${t.brandName} · ${s.label}`}>{s.icon}</a></li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <h3>{t.footer.visitTitle}</h3>
              <p>{BUSINESS.address}</p>
            </div>
            <div>
              <h3>{t.footer.orderTitle}</h3>
              <p>
                <a href={waLink(contactMsg)} target="_blank" rel="noopener">{t.footer.wa} {BUSINESS.whatsappDisplay}</a><br />
                {t.footer.cod}<br />
                <a href="#doodh-dahi">{t.footer.dairyLink}</a>
              </p>
            </div>
          </div>
          <div className="wrap footer-base">© {new Date().getFullYear()} {t.brandName}. {t.footer.rights}</div>
        </footer>
      </CartProvider>
    </div>
  );
}
