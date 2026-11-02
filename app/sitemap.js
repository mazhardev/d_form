import { SITE_URL } from "@/lib/config";
import { LOCALES } from "@/lib/i18n";
import { CITIES } from "@/lib/cities";

export const dynamic = "force-static";

const urlFor = (code) => `${SITE_URL}${code === "en" ? "" : code + "/"}`;

// Phase 1 English content pages (no hreflang cluster until they are translated).
const PAGES = [
  "how-desi-ghee-is-made/",
  "how-to-check-pure-desi-ghee/",
  "desi-ghee-vs-banaspati/",
  "desi-ghee-price-in-pakistan/",
  "desi-ghee/",
  "benefits-of-desi-ghee/",
  "what-is-danedar-ghee/",
  "fresh-makhan-okara/",
  "doodh-dahi-okara/",
  "daily-milk-delivery-okara/",
  "doodh-dahi-for-weddings-okara/",
  "milk-supplier-for-hotels-okara/",
  "our-dairy/",
  "nili-ravi-buffalo/",
  "sahiwal-cow/",
];

export default function sitemap() {
  const languages = {};
  LOCALES.forEach((l) => { languages[l.htmlLang] = urlFor(l.code); });
  const now = new Date();

  const homes = LOCALES.map((l) => ({
    url: urlFor(l.code),
    lastModified: now,
    changeFrequency: "weekly",
    priority: l.code === "en" ? 1 : 0.9,
    alternates: { languages },
  }));

  const pages = PAGES.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const cityPages = CITIES.map((c) => ({
    url: `${SITE_URL}desi-ghee/${c.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...homes, ...pages, ...cityPages];
}
