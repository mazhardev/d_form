// Shared header + footer for Phase 1 content pages (English). Reuses the home
// design-system classes (.header, .footer, .btn …). Its nav/footer links point to
// the three pillars + key pages, so every content page carries the sitewide links
// (internal-linking rule 6) and nothing is orphaned.
import Link from "next/link";
import { BUSINESS, waLink } from "@/lib/config";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { href: "/how-desi-ghee-is-made/", label: "How it's made" },
  { href: "/#shop", label: "Shop" },
  { href: "/doodh-dahi-okara/", label: "Doodh & dahi" },
  { href: "/our-dairy/", label: "Our dairy" },
];

const CONTACT_MSG = `Assalam o Alaikum ${BUSINESS.name}, I'd like to know more about your desi ghee.`;

function Drop() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3c-3 4-6.5 7.6-6.5 11.5a6.5 6.5 0 0 0 13 0C18.5 10.6 15 7 12 3z" />
    </svg>
  );
}

function Wa({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.7 15.6 2.2 13.8 2.2 12 2.2 6.6 6.6 2.2 12 2.2c2.6 0 5.1 1 6.9 2.9 1.8 1.8 2.9 4.3 2.9 6.9 0 5.4-4.4 9.8-9.8 9.8zm8.4-18.2C18.1 1.3 15.2.1 12 .1 5.5.1.1 5.4.1 12c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.6c1.7.9 3.7 1.4 5.7 1.4 6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.5-8.3z" />
    </svg>
  );
}

export default function PageShell({ children }) {
  return (
    <div className="site">
      <header className="header">
        <div className="wrap header-inner">
          <Link href="/" className="brand" aria-label={BUSINESS.name}>
            <span className="brand-mark" aria-hidden="true"><Drop /></span>
            <span className="brand-text">
              <span className="brand-name">{BUSINESS.name}</span>
              <span className="brand-sub">Est. {BUSINESS.since} · Okara</span>
            </span>
          </Link>
          <nav className="nav" aria-label="Main">
            {NAV.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
          </nav>
          <div className="header-actions">
            <a className="btn btn-wa btn-sm header-wa" href={waLink(CONTACT_MSG)} target="_blank" rel="noopener">
              <Wa /> {BUSINESS.whatsappDisplay}
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {children}

      <footer className="footer">
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <span className="brand-name">{BUSINESS.name}</span>
            <p>Pure desi ghee, makhan, khalis doodh and dahi, made in Okara since {BUSINESS.since}.</p>
          </div>
          <div>
            <h3>Learn</h3>
            <p>
              <Link href="/how-desi-ghee-is-made/">How desi ghee is made</Link><br />
              <Link href="/how-to-check-pure-desi-ghee/">How to check purity</Link><br />
              <Link href="/desi-ghee-vs-banaspati/">Desi ghee vs banaspati</Link><br />
              <Link href="/desi-ghee-price-in-pakistan/">Desi ghee price in Pakistan</Link>
            </p>
          </div>
          <div>
            <h3>Order</h3>
            <p>
              <Link href="/">Buy desi ghee online</Link><br />
              <Link href="/desi-ghee/">Delivery across Pakistan</Link><br />
              <Link href="/doodh-dahi-okara/">Doodh &amp; dahi in Okara</Link><br />
              <Link href="/daily-milk-delivery-okara/">Daily milk delivery</Link><br />
              <a href={waLink(CONTACT_MSG)} target="_blank" rel="noopener">WhatsApp {BUSINESS.whatsappDisplay}</a>
            </p>
          </div>
        </div>
        <div className="wrap footer-base">© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</div>
      </footer>
    </div>
  );
}
