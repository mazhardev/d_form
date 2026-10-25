import { BUSINESS, PRODUCTS, STEPS, asset, formatPKR, waLink, mapsLink, SITE_URL } from "@/lib/config";
import HeroVideo from "./HeroVideo";
import { AddToCart, WaIcon } from "./cart";

const YEARS = new Date().getFullYear() - BUSINESS.since;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}#business`,
      name: BUSINESS.name,
      description: "Family dairy in Okara serving since 1975. Pure desi ghee made from fresh cream, churned and slow-cooked in small batches.",
      foundingDate: String(BUSINESS.since),
      url: SITE_URL,
      telephone: "+" + BUSINESS.whatsappIntl,
      image: `${SITE_URL}media/poster.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.street,
        addressLocality: "Okara",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      areaServed: "PK",
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

function Ornament() {
  return (
    <svg className="ornament" width="120" height="14" viewBox="0 0 120 14" aria-hidden="true">
      <path d="M0 7h48M72 7h48" stroke="currentColor" strokeWidth="1" />
      <path d="M60 1l6 6-6 6-6-6z" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="60" cy="7" r="1.6" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  const contactMsg = `Assalam o Alaikum ${BUSINESS.name}, I'd like to know more about your desi ghee.`;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="topbar">
        <div className="wrap topbar-inner">
          <span>Serving Okara since {BUSINESS.since}</span>
          <span className="topbar-sep" aria-hidden="true">·</span>
          <span>Orders on WhatsApp: <a href={waLink(contactMsg)} target="_blank" rel="noopener">{BUSINESS.whatsappDisplay}</a></span>
        </div>
      </div>

      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="logo" aria-label={`${BUSINESS.name}, home`}>
            <span className="logo-seal" aria-hidden="true"><span>M</span></span>
            <span className="logo-text">
              <span className="logo-name">Muhammad Dairy</span>
              <span className="logo-est">Est. {BUSINESS.since} · Okara</span>
            </span>
          </a>
          <nav className="nav-links" aria-label="Main">
            <a href="#heritage">Our story</a>
            <a href="#process">Process</a>
            <a href="#shop">Shop</a>
            <a href="#contact">Visit us</a>
          </nav>
          <a className="btn btn-gold btn-sm nav-cta" href="#shop">Order now</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Family dairy · Est. {BUSINESS.since}</p>
              <h1>
                Pure desi ghee,
                <br />
                <em>crafted since {BUSINESS.since}.</em>
              </h1>
              <p className="lede">
                For over {YEARS} years, families in Okara have trusted us for honest dairy. Our ghee begins with fresh
                cream, is churned by hand into makhan, and is slow-cooked until golden, the same way it always has been.
              </p>
              <div className="hero-ctas">
                <a className="btn btn-gold btn-lg" href="#shop">Shop desi ghee</a>
                <a className="btn btn-outline-light btn-lg" href="#process">See how it&apos;s made</a>
              </div>
              <dl className="hero-stats">
                <div><dt>{YEARS}+</dt><dd>years of dairy</dd></div>
                <div><dt>100%</dt><dd>fresh cream</dd></div>
                <div><dt>Small</dt><dd>batches, slow-cooked</dd></div>
              </dl>
            </div>
            <HeroVideo />
          </div>
        </section>

        <section id="heritage" className="section heritage">
          <div className="wrap heritage-grid">
            <div className="heritage-year" aria-hidden="true">
              <span className="since">since</span>
              <span className="year">{BUSINESS.since}</span>
            </div>
            <div className="heritage-copy">
              <p className="eyebrow dark">Our story</p>
              <h2>Five decades of trust, one batch at a time.</h2>
              <Ornament />
              <p>
                Muhammad Dairy has served the families of Okara since {BUSINESS.since}. Through all these years we have
                kept one simple promise: give people the same pure dairy we would serve at our own table.
              </p>
              <p>
                Generations of customers still come back to us for that reason. We have never changed how we make our
                desi ghee: fresh cream, patient hands and slow heat.
              </p>
              <p className="signature">The Muhammad Dairy family</p>
            </div>
          </div>
        </section>

        <section id="process" className="section process">
          <div className="wrap">
            <div className="section-head center">
              <p className="eyebrow dark">From cream to ghee</p>
              <h2>Seven honest steps. Nothing added.</h2>
              <Ornament />
              <p className="section-lede">
                Everything in our video happens in our own kitchen, by hand, the way we have done it for {YEARS} years.
              </p>
            </div>
            <ol className="steps">
              {STEPS.map((s, i) => (
                <li key={s.title} className="step">
                  <div className="step-img">
                    <img src={asset(s.img)} alt={s.title} loading="lazy" width="480" height="549" />
                  </div>
                  <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="shop" className="section shop">
          <div className="wrap">
            <div className="section-head center">
              <p className="eyebrow dark">The shop</p>
              <h2>Order fresh, delivered to your door</h2>
              <Ornament />
              <p className="section-lede">
                Add to your cart and check out. Your order comes straight to us on WhatsApp, and we confirm it personally.
              </p>
            </div>
            <div className="products">
              {PRODUCTS.map((p) => (
                <article key={p.id} className="product">
                  <div className="product-img">
                    <img src={asset(p.image)} alt={`${p.name} ${p.size}`} loading="lazy" width="480" height="549" />
                  </div>
                  <div className="product-body">
                    <p className="product-size">{p.size}</p>
                    <h3>{p.name}</h3>
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
            <p className="shop-note">Cash on delivery · Bulk and event orders welcome</p>
          </div>
        </section>

        <section className="section promise">
          <div className="wrap">
            <div className="section-head center">
              <p className="eyebrow">Our promise</p>
              <h2>Why Okara has trusted us since {BUSINESS.since}</h2>
              <Ornament />
            </div>
            <ul className="promise-grid">
              <li>
                <span className="promise-num">I</span>
                <h3>Real fresh cream</h3>
                <p>Our ghee starts with cream, never vegetable oil or ready-made butter.</p>
              </li>
              <li>
                <span className="promise-num">II</span>
                <h3>Cooked slowly</h3>
                <p>Low, patient heat brings out the deep golden colour and danedar texture.</p>
              </li>
              <li>
                <span className="promise-num">III</span>
                <h3>Strained clean</h3>
                <p>Every batch is filtered before it is sealed and packed.</p>
              </li>
              <li>
                <span className="promise-num">IV</span>
                <h3>A name you know</h3>
                <p>{YEARS} years in Okara. Every order is confirmed by us personally.</p>
              </li>
            </ul>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="wrap contact-grid">
            <div className="contact-copy">
              <p className="eyebrow dark">Visit or message us</p>
              <h2>Come by the dairy, or order from home.</h2>
              <Ornament />
              <dl className="contact-list">
                <div>
                  <dt>Address</dt>
                  <dd><a href={mapsLink()} target="_blank" rel="noopener">{BUSINESS.address}</a></dd>
                </div>
                <div>
                  <dt>WhatsApp &amp; phone</dt>
                  <dd><a href={`tel:+${BUSINESS.whatsappIntl}`}>{BUSINESS.whatsappDisplay}</a></dd>
                </div>
                <div>
                  <dt>Serving since</dt>
                  <dd>{BUSINESS.since}</dd>
                </div>
              </dl>
              <div className="hero-ctas">
                <a className="btn btn-wa btn-lg" href={waLink(contactMsg)} target="_blank" rel="noopener">
                  <WaIcon size={20} /> Chat on WhatsApp
                </a>
                <a className="btn btn-outline btn-lg" href={mapsLink()} target="_blank" rel="noopener">Get directions</a>
              </div>
            </div>
            <div className="contact-photo">
              <img src={asset("/media/step7.jpg")} alt="Freshly packed Muhammad Dairy desi ghee" loading="lazy" width="480" height="549" />
              <div className="contact-photo-tag"><span>Est.</span>{BUSINESS.since}</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <div className="footer-brand">
            <span className="logo-name">Muhammad Dairy</span>
            <span>Pure desi ghee · Okara · Est. {BUSINESS.since}</span>
          </div>
          <p>{BUSINESS.address}</p>
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
