# Internal Linking & Topical Authority Plan — Muhammad Dairy

**Prepared as:** SEO strategy for muhammaddairy.online
**Goal:** Rank higher on Google by building *topical authority* around desi ghee + Okara dairy, using a deliberate internal linking structure.
**Stack it must fit:** Next.js 15 App Router, static export, 3 languages (`/`, `/ur/`, `/pa/`), WhatsApp checkout.

---

## 0. The honest diagnosis (read this first)

**Topical authority and internal linking are properties of a *multi-page* site.** You cannot build either on a single page — there is nothing to link *between*.

Right now the whole site is **one page, repeated in three languages**. Every keyword theme (buy ghee, ghee price, how it's made, purity, doodh & dahi, weddings, hotels, the herd) lives as a *section* of that one scroller. To Google this is **one URL = one topic cluster crammed together**, competing with itself for attention and unable to rank for more than a handful of terms.

So this plan is really two things bundled together, because you can't do one without the other:

1. **A content architecture** — split the themes into their own pages (a "pillar + cluster" / "hub-and-spoke" model).
2. **An internal linking structure** — the rules and the link map that tie those pages into one authoritative web Google can understand.

> **Expectation setting (as your SEO exec, not a salesperson):** internal linking is a *force multiplier*, not a magic ranking switch. On a brand-new small-business domain it works alongside (a) genuinely useful content, (b) a **Google Business Profile** for Okara, and (c) a few real backlinks. Internal linking is the piece fully in *your* control and it's the foundation the rest sits on — so it's the right place to start. It will not outrank established national ghee brands in weeks. It *will* steadily win long-tail and local queries and compound over months.

---

## 1. The model: pillar + cluster (hub-and-spoke)

```
                        ┌─────────────────────────┐
                        │      HOME  /  (brand)     │
                        │  "Muhammad Dairy, Okara"  │
                        └───────────┬───────────────┘
            links down to 3 pillars │ (and nav/footer link them sitewide)
        ┌───────────────────────────┼────────────────────────────┐
        ▼                            ▼                             ▼
┌───────────────┐          ┌──────────────────┐          ┌─────────────────┐
│  PILLAR A     │          │   PILLAR B        │          │   PILLAR C      │
│  Desi Ghee    │          │  Doodh & Dahi     │          │  Our Dairy /    │
│  (buy, PK-wide)│         │  (Okara, local)   │          │  Herd (trust)   │
└──────┬────────┘          └────────┬──────────┘          └───────┬─────────┘
       │ each pillar links DOWN to every spoke; each spoke links UP to its pillar
       ▼                            ▼                             ▼
  spokes (cluster pages)       spokes                        spokes
```

- **Pillar page** = broad page on a big topic; the "hub". It links out to every spoke and collects their authority.
- **Spoke (cluster) page** = narrow, specific page (one keyword intent). It links *up* to its pillar and *sideways* to its closest siblings.
- **The web of links** is what tells Google "this site is *the* authority on Okara desi ghee," not any single page.

**Three pillars for your business:**

| Pillar | Page | Intent | Reach |
|---|---|---|---|
| **A — Desi Ghee** | Home `/` doubles as this | Commercial: *buy pure desi ghee online* | Pakistan-wide (ghee ships) |
| **B — Doodh & Dahi** | `/doodh-dahi-okara/` | Local service: *milk & dahi supply* | Okara only (perishable) |
| **C — Our Dairy & Herd** | `/our-dairy/` | Trust / E-E-A-T: *who makes it* | Supports both above |

---

## 2. Keyword → cluster map (your real keywords, grouped)

These are pulled from your existing content (`lib/i18n.js`, `lib/config.js`, `app/layout.js`). Each **cluster = one future page = one primary keyword**.

### Pillar A — Desi Ghee (commercial + informational)

**Commercial / money pages** (transactional intent — closest to a sale):

| Page (slug) | Primary keyword | Supporting keywords |
|---|---|---|
| `/` (home) | buy pure desi ghee online Pakistan | khalis desi ghee, desi ghee online Pakistan |
| `/desi-ghee-price-in-pakistan/` | desi ghee price in Pakistan | 1kg/2.5kg/5kg ghee price, ghee rate |
| `/fresh-makhan-okara/` | fresh makhan Okara | hand-churned white butter, makhan online |
| `/desi-ghee/lahore/` *(+ karachi, islamabad, faisalabad, multan, rawalpindi)* | desi ghee in Lahore | buy desi ghee Lahore, ghee delivery Lahore |

**Informational pages** (these are the *authority engine* — they catch research queries and funnel to the money pages):

| Page (slug) | Primary keyword | Hooks existing content |
|---|---|---|
| `/how-desi-ghee-is-made/` | how is desi ghee made | your 7-step process + video |
| `/how-to-check-pure-desi-ghee/` | how to tell if desi ghee is pure | purity test (melts clear, nutty, danedar) |
| `/desi-ghee-vs-banaspati/` | desi ghee vs banaspati | "no vegetable oil, no banaspati" |
| `/what-is-danedar-ghee/` | what is danedar ghee | grainy texture as it cools |
| `/benefits-of-desi-ghee/` | benefits of desi ghee | *(new content — a genuine gap)* |

### Pillar B — Doodh & Dahi (local, Okara only)

| Page (slug) | Primary keyword | Supporting |
|---|---|---|
| `/doodh-dahi-okara/` *(pillar)* | khalis doodh and dahi Okara | fresh milk Okara, dahi Okara |
| `/daily-milk-delivery-okara/` | daily milk delivery Okara | doodh home delivery, milk supplier Okara |
| `/doodh-dahi-for-weddings-okara/` | milk and dahi for weddings Okara | shaadi, mehndi, walima, functions, bulk dahi |
| `/milk-supplier-for-hotels-okara/` | milk supplier for hotels Okara | hotel dahi supply, bulk milk Okara |

### Pillar C — Our Dairy & Herd (trust / E-E-A-T)

| Page (slug) | Primary keyword | Supporting |
|---|---|---|
| `/our-dairy/` *(pillar — about + story)* | Muhammad Dairy Okara | family dairy since 1975, our story |
| `/nili-ravi-buffalo/` | Nili-Ravi buffalo milk | buffalo of Okara, high butterfat milk |
| `/sahiwal-cow/` | Sahiwal cow | Pakistan dairy cow, wholesome milk |

> **Brand term** "Muhammad Dairy" is served by the home page + `/our-dairy/`. Every page's footer carries the brand, so brand authority accrues sitewide automatically.

---

## 3. Site architecture (phased — don't build all 20 pages at once)

A family dairy should not launch 20 thin pages. Build in waves; each wave is independently useful and correctly linked.

### Phase 0 — Fix the page you already have *(fastest win, do first)*
No new pages. Just make the existing single page link *within itself* properly and make sure nav/footer expose every section. (Details in §6.1.) This primes the structure and costs almost nothing.

### Phase 1 — The three pillars + top 4 spokes *(the real foundation)*
Build these 7 pages (English first):
1. `/doodh-dahi-okara/` (Pillar B)
2. `/our-dairy/` (Pillar C)
3. `/how-desi-ghee-is-made/`
4. `/how-to-check-pure-desi-ghee/`
5. `/desi-ghee-vs-banaspati/`
6. `/desi-ghee-price-in-pakistan/`
7. `/daily-milk-delivery-okara/`

(Home stays as Pillar A.) This alone gives Google a real cluster to understand.

### Phase 2 — Expand clusters
`/benefits-of-desi-ghee/`, `/what-is-danedar-ghee/`, `/fresh-makhan-okara/`, `/doodh-dahi-for-weddings-okara/`, `/milk-supplier-for-hotels-okara/`, `/nili-ravi-buffalo/`, `/sahiwal-cow/`.

### Phase 3 — City pages *(only with unique content — see warning)*
`/desi-ghee/lahore/`, `/karachi/`, etc.

> ⚠️ **Doorway-page warning:** city pages that are the same text with the city name swapped violate [Google's doorway-page policy](https://developers.google.com/search/docs/essentials/spam-policies#doorways) and can get you penalised. Build a city page **only** if it has genuinely unique content: that city's delivery time/courier, a local customer note, city-specific FAQ. If you can't write that, skip the city pages and rely on the Pakistan-wide home page instead.

### Language note (important for your 3-locale setup)
Launch new content pages in **English first** — that's where your Pakistan-wide and international reach lives. A new English-only page just needs a self-referential canonical and **no** hreflang cluster. Keep the existing hreflang set (`en`/`ur`/`pa`) on the **home pages only** until you translate a given page. When you *do* translate a page, add `/ur/<slug>/` + `/pa/<slug>/` and wire the hreflang alternates (see §5).

---

## 4. The internal linking rules (the actual "structure")

Seven rules. Apply them to every page.

1. **Spoke → Pillar (up).** Every cluster page links back up to its pillar, in the body, with a descriptive anchor. (e.g. `/daily-milk-delivery-okara/` → "our [khalis doodh and dahi in Okara](/doodh-dahi-okara/)".)
2. **Pillar → every Spoke (down).** Each pillar page has a section linking out to *all* its spokes. This is what makes it a hub.
3. **Spoke ↔ Spoke (sideways), only when relevant.** Link closely-related siblings in context — `/how-to-check-pure-desi-ghee/` ↔ `/desi-ghee-vs-banaspati/`. Don't cross-link unrelated pages just to add links.
4. **Informational → Money (funnel).** Every informational page ends with a contextual link to a commercial page: *"…or skip the guesswork and [order our khalis desi ghee](/)."* This is how authority pages convert.
5. **Home → 3 Pillars, prominently.** The home page must link all three pillars in-content (not only in the nav), because body links carry more weight than boilerplate nav links.
6. **Sitewide nav + footer link the pillars.** Every page, via the shared header/footer, links Home + the 3 pillar pages. Guarantees nothing is orphaned and spreads equity site-wide.
7. **Breadcrumbs on every non-home page.** `Home › Doodh & Dahi › Daily Milk Delivery`. Breadcrumbs are internal links *and* a structured-data signal (§6.4). They also keep **click depth ≤ 2** — every page reachable within two clicks of home.

**Two hard don'ts:**
- **No orphan pages.** If a page isn't linked from nav/footer *or* a pillar, Google may never find or value it. Every new page must be linked the moment it ships (and added to the sitemap, §6.5).
- **No anchor-text over-optimisation.** Don't make every link say the exact words "buy desi ghee online Pakistan." Vary it (next section). Identical exact-match anchors everywhere look manipulative.

---

## 5. Anchor text guide

Google reads the clickable words ("anchor text") as a strong hint about the target page's topic. Use **descriptive, varied** anchors — a mix of exact-match, partial-match, and natural phrases.

| Target page | ✅ Good anchor variations | ❌ Avoid |
|---|---|---|
| `/` (buy ghee) | "order our khalis desi ghee", "buy pure desi ghee online", "our desi ghee" | "click here", "buy desi ghee online Pakistan" on *every* link |
| `/desi-ghee-price-in-pakistan/` | "desi ghee price in Pakistan", "see current ghee prices", "what our ghee costs" | "price" |
| `/how-desi-ghee-is-made/` | "how we make our desi ghee", "our slow-cooked process", "watch how it's made" | "read more" |
| `/how-to-check-pure-desi-ghee/` | "how to tell if desi ghee is pure", "the purity test", "spot pure vs mixed ghee" | "here" |
| `/doodh-dahi-okara/` | "khalis doodh and dahi in Okara", "our milk and dahi supply", "daily doodh & dahi" | "milk page" |
| `/doodh-dahi-for-weddings-okara/` | "doodh and dahi for weddings", "bulk dahi for your shaadi", "milk for functions" | "events" |
| `/our-dairy/` | "our family dairy in Okara", "about Muhammad Dairy", "our story since 1975" | "about" |

**Rule of thumb:** write the sentence first so the link reads naturally; *then* check the anchor contains the target's topic words. Never bolt a keyword onto a sentence where it doesn't belong.

---

## 6. Implementation in *this* codebase

Everything below is specific to your Next.js App Router static-export setup.

### 6.1 Phase 0 — cross-link the existing single page (do this first)

Your one page already has these section IDs (from the nav in `lib/i18n.js`): `#process`, `#shop`, `#dairy`, `#story`, `#herd`, `#guide`, `#contact`. Right now the body text doesn't cross-reference them. Add **in-content anchor links** between sections, e.g. inside the `guide` copy:

- In `guide.pb` ("how to tell if pure") → link the phrase *"watch every step"* to `#process`.
- In `guide.pc` ("order anywhere in Pakistan") → link *"add desi ghee to your cart"* to `#shop`.
- In `guide.pd` ("doodh and dahi") → link to `#dairy`.

These are weak signals compared to real pages, but they cost nothing, improve UX, and establish the linking habit. Implement by putting `<a href="#shop">` inside the relevant strings (you'll need to render those strings as JSX/HTML rather than plain text — see how `Site.js` renders the guide section).

Also confirm the **footer** links every pillar/section, so no section is more than one click away.

### 6.2 Creating a new page (the repeatable recipe)

Each new page is a folder under `app/` with a `page.js`. Follow your existing thin-wrapper pattern.

**File:** `app/how-to-check-pure-desi-ghee/page.js`

```jsx
import Link from "next/link";
import Breadcrumbs from "@/app/Breadcrumbs";
import RelatedLinks from "@/app/RelatedLinks";
import { SITE_URL } from "@/lib/config";

const PATH = "/how-to-check-pure-desi-ghee/";

export const metadata = {
  title: "How to Tell if Desi Ghee Is Pure | Muhammad Dairy",
  description:
    "Simple ways to check if desi ghee is pure: how it melts, smells and sets danedar — and how pure ghee differs from banaspati.",
  alternates: { canonical: PATH }, // English-only page → self-canonical, no hreflang yet
};

export default function Page() {
  return (
    <main className="article">
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Desi Ghee", path: "/" },           // Pillar A
          { name: "How to check purity", path: PATH }, // current
        ]}
      />

      <h1>How to tell if desi ghee is pure</h1>

      <p>
        Pure desi ghee melts clear and golden, smells nutty, and sets with a
        grainy, <Link href="/what-is-danedar-ghee/">danedar texture</Link> at
        room temperature. Ghee cut with oil or{" "}
        <Link href="/desi-ghee-vs-banaspati/">banaspati</Link> smells flat and
        feels oily.
      </p>

      {/* …more content… */}

      {/* RULE 4: informational → money funnel */}
      <p>
        Rather than guess, watch{" "}
        <Link href="/how-desi-ghee-is-made/">how we make our desi ghee</Link>,
        then <Link href="/">order our khalis desi ghee</Link> couriered
        anywhere in Pakistan.
      </p>

      {/* RULE 1 + 3: up to pillar + sideways to siblings */}
      <RelatedLinks
        links={[
          { href: "/how-desi-ghee-is-made/", label: "How our desi ghee is made" },
          { href: "/desi-ghee-vs-banaspati/", label: "Desi ghee vs banaspati" },
          { href: "/", label: "Buy pure desi ghee online" }, // up to Pillar A
        ]}
      />
    </main>
  );
}
```

**Use Next's `<Link>`** for internal links (client-side nav + crawlable `<a>`). For a plain `<a>` to static assets you still use `asset()`; for page routes `<Link href="/slug/">` is correct and base-path-safe in your config.

### 6.3 Two small reusable components

**`app/Breadcrumbs.js`** — renders the visible trail *and* emits `BreadcrumbList` JSON-LD:

```jsx
import Link from "next/link";
import { SITE_URL } from "@/lib/config";

export default function Breadcrumbs({ trail }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: new URL(t.path, SITE_URL).href,
    })),
  };
  return (
    <nav aria-label="Breadcrumb" className="crumbs">
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol>
        {trail.map((t, i) => (
          <li key={t.path}>
            {i < trail.length - 1
              ? <Link href={t.path}>{t.name}</Link>
              : <span aria-current="page">{t.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

**`app/RelatedLinks.js`** — the "read next" block that enforces linking rules 1 & 3:

```jsx
import Link from "next/link";

export default function RelatedLinks({ links, heading = "Read next" }) {
  return (
    <aside className="related">
      <h2>{heading}</h2>
      <ul>
        {links.map((l) => (
          <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
        ))}
      </ul>
    </aside>
  );
}
```

### 6.4 Structured data on the new pages
- **Informational pages:** add `Article` JSON-LD (or `FAQPage` where you include Q&As) + the `BreadcrumbList` above.
- **Pillar B / local pages:** reuse your existing `LocalBusiness` pattern with `areaServed: "Okara"`.
- Keep the home page's existing `LocalBusiness` + `WebSite` + `FAQPage` + `Product` JSON-LD as-is; it's the anchor of the whole entity.

### 6.5 Sitemap — add every new URL (non-negotiable)
A new page that isn't in `app/sitemap.js` is half-invisible. Your current sitemap only lists the 3 home locales. Extend it with the new pages:

```js
// app/sitemap.js
const PAGES = [
  "/how-desi-ghee-is-made/",
  "/how-to-check-pure-desi-ghee/",
  "/desi-ghee-vs-banaspati/",
  "/desi-ghee-price-in-pakistan/",
  "/doodh-dahi-okara/",
  "/daily-milk-delivery-okara/",
  "/our-dairy/",
  // …add each page as you ship it
];

export default function sitemap() {
  const now = new Date();
  // existing 3 locale home entries, then:
  const extra = PAGES.map((p) => ({
    url: `${SITE_URL}${p.replace(/^\//, "")}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  return [/* …locale homes… */, ...extra];
}
```

Then **resubmit the sitemap in Google Search Console** after each wave.

### 6.6 Keep the nav/footer in sync
When a pillar page ships, add it to the shared header/footer in `app/Site.js` so it's linked sitewide (rule 6). Spokes don't all need nav links — they're reached via their pillar + breadcrumbs — but they must be linked from *somewhere* (their pillar) and be in the sitemap.

---

## 7. The master internal link map (Phase 1)

Who links to whom, once Phase 1 is live:

| Page | Links OUT to (in body) | Linked FROM |
|---|---|---|
| `/` (Home / Pillar A) | `/doodh-dahi-okara/`, `/our-dairy/`, `/how-desi-ghee-is-made/`, `/how-to-check-pure-desi-ghee/`, `/desi-ghee-price-in-pakistan/` | nav, footer, **every** spoke (funnel-up) |
| `/how-desi-ghee-is-made/` | `/how-to-check-pure-desi-ghee/`, `/` (order) | Home, nav, siblings |
| `/how-to-check-pure-desi-ghee/` | `/desi-ghee-vs-banaspati/`, `/what-is-danedar-ghee/`, `/how-desi-ghee-is-made/`, `/` | Home, siblings |
| `/desi-ghee-vs-banaspati/` | `/how-to-check-pure-desi-ghee/`, `/` | Home, siblings |
| `/desi-ghee-price-in-pakistan/` | `/` (shop), `/how-desi-ghee-is-made/` | Home, nav |
| `/doodh-dahi-okara/` (Pillar B) | `/daily-milk-delivery-okara/`, `/doodh-dahi-for-weddings-okara/`, `/milk-supplier-for-hotels-okara/`, `/our-dairy/` | Home, nav, footer, its spokes |
| `/daily-milk-delivery-okara/` | `/doodh-dahi-okara/` (up), `/doodh-dahi-for-weddings-okara/` | Pillar B, nav |
| `/our-dairy/` (Pillar C) | `/nili-ravi-buffalo/`, `/sahiwal-cow/`, `/how-desi-ghee-is-made/`, `/` | Home, nav, footer, its spokes |

**Equity flow:** Home (most authority) → pushes down to pillars & money pages. Informational spokes catch long-tail searches → funnel visitors + authority **up to Home** (the money page). Pillars distribute to their spokes. Nothing is orphaned; everything is ≤2 clicks from Home.

---

## 8. Multilingual rule (don't break hreflang)

- **Within a language, link to the same language.** An Urdu page (`/ur/...`) links only to other `/ur/...` pages. Never link `/ur/doodh-dahi-okara/` to the English `/how-desi-ghee-is-made/` — it dumps RTL users into English and muddies the language signal.
- A page that exists in only one language carries a **self-canonical** and *no* hreflang alternates. Only add an hreflang alternate when the translated URL actually exists.
- When you translate a page into Urdu/Punjabi, mirror the link map in that language and add the 3-way hreflang set (same pattern as `buildMetadata` in `lib/i18n.js`).

---

## 9. Priority order (what to do, in sequence)

1. **Phase 0** — cross-link inside the existing page + verify footer covers all sections. *(1 session, no new pages.)*
2. **Build `Breadcrumbs.js` + `RelatedLinks.js`** once; reuse everywhere.
3. **Phase 1 pages** in this order of value: `/doodh-dahi-okara/` → `/how-to-check-pure-desi-ghee/` → `/how-desi-ghee-is-made/` → `/desi-ghee-vs-banaspati/` → `/desi-ghee-price-in-pakistan/` → `/daily-milk-delivery-okara/` → `/our-dairy/`.
4. **Wire the link map (§7)** as each page ships — never leave a page orphaned.
5. **Update `sitemap.js`** + resubmit in Search Console after each wave.
6. **Phase 2 & 3** as capacity allows (city pages only with unique content).
7. **Translate** the best performers into Urdu/Punjabi (check with a native speaker) and extend hreflang.

## 10. How to measure it's working
- **Google Search Console** → *Pages* (indexed count should climb as pages ship), *Performance* (impressions/clicks per query — watch for the new informational keywords appearing), and *Links* report (internal links per page — your pillars should show the most).
- **Click depth / coverage:** every page should appear in the sitemap and be "Indexed."
- Give it **8–12 weeks** per wave before judging; topical authority compounds slowly.

---

### One-line summary
Split your single page into a **3-pillar, cluster-based structure**, link spokes **up** to pillars and **into** your money pages with **descriptive, varied anchors**, add **breadcrumbs + sitemap entries** for every page, keep links **within each language**, and build it in **phases** — starting with cross-linking the page you already have.
