import { SITE_URL } from "@/lib/config";
import { LOCALES } from "@/lib/i18n";

export const dynamic = "force-static";

const urlFor = (code) => `${SITE_URL}${code === "en" ? "" : code + "/"}`;

export default function sitemap() {
  const languages = {};
  LOCALES.forEach((l) => { languages[l.htmlLang] = urlFor(l.code); });
  const now = new Date();
  return LOCALES.map((l) => ({
    url: urlFor(l.code),
    lastModified: now,
    changeFrequency: "weekly",
    priority: l.code === "en" ? 1 : 0.9,
    alternates: { languages },
  }));
}
