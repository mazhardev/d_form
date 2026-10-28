import { LOCALES, localeHome, localeByCode } from "@/lib/i18n";
import { asset } from "@/lib/config";

// Links between the English, Urdu and Punjabi pages. A small dropdown so it
// stays compact on phones.
export default function LangSwitcher({ locale }) {
  const current = localeByCode(locale);
  return (
    <details className="lang">
      <summary aria-label="Language / زبان">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.5 3.8 5.6 3.8 9S14.5 18.5 12 21C9.5 18.5 8.2 15.4 8.2 12S9.5 5.5 12 3z" />
        </svg>
        <span>{current.short}</span>
      </summary>
      <ul className="lang-menu">
        {LOCALES.map((l) => (
          <li key={l.code}>
            <a
              href={asset(localeHome(l.code))}
              className={l.code === locale ? "on" : ""}
              lang={l.htmlLang}
              dir={l.dir}
              hrefLang={l.code}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
