import Link from "next/link";
import PageShell from "@/app/PageShell";
import Breadcrumbs from "@/app/Breadcrumbs";
import RelatedLinks from "@/app/RelatedLinks";
import { BUSINESS, PRODUCTS, formatPKR, waLink } from "@/lib/config";

const PATH = "/desi-ghee-price-in-pakistan/";

export const metadata = {
  title: "Desi Ghee Price in Pakistan (1kg, 2.5kg, 5kg) | Muhammad Dairy",
  description:
    "Current desi ghee prices from Muhammad Dairy Okara — 1kg, 2.5kg and 5kg packs. Couriered anywhere in Pakistan. Order on WhatsApp, cash on delivery in Okara.",
  alternates: { canonical: PATH },
  openGraph: { title: "Desi Ghee Price in Pakistan", description: "Current 1kg, 2.5kg and 5kg desi ghee prices from Muhammad Dairy, Okara.", type: "website", url: PATH },
};

const orderMsg = `Assalam o Alaikum ${BUSINESS.name}, I'd like to know the price and order desi ghee.`;

export default function Page() {
  return (
    <PageShell>
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Desi Ghee", path: "/" }, { name: "Price in Pakistan", path: PATH }]} />
      <main className="article">
        <h1>Desi ghee price in Pakistan</h1>
        <p className="lede">
          Here are our current pack prices for pure desi ghee, made from fresh cream in Okara.
          We courier anywhere in Pakistan; courier charges are confirmed with you on WhatsApp
          before we ship.
        </p>

        <table className="ptable">
          <thead>
            <tr><th>Pack</th><th>Price</th></tr>
          </thead>
          <tbody>
            {PRODUCTS.map((p) => (
              <tr key={p.id}>
                <td>{p.name} — {p.size}</td>
                <td>{typeof p.price === "number" ? formatPKR(p.price) : "Price on WhatsApp"}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>What the price reflects</h2>
        <p>
          Our ghee is cooked slowly from real cream, in small batches — not made from vegetable
          oil. If you are comparing, it helps to understand{" "}
          <Link href="/how-desi-ghee-is-made/">how desi ghee is made</Link> and{" "}
          <Link href="/desi-ghee-vs-banaspati/">how it differs from banaspati</Link>, so you know
          what you are paying for.
        </p>

        <h2>Delivery, courier and bulk</h2>
        <ul>
          <li><strong>In Okara:</strong> pay cash on delivery.</li>
          <li><strong>Other cities:</strong> we courier Pakistan-wide; the courier charge is added and confirmed on WhatsApp first.</li>
          <li><strong>Bulk & events:</strong> message us for a quote on larger quantities.</li>
        </ul>
        <p>Prices can change with the market, so we always confirm the final total with you before any order is placed.</p>

        <div className="page-cta">
          <a className="btn btn-wa btn-lg" href={waLink(orderMsg)} target="_blank" rel="noopener">Confirm price &amp; order on WhatsApp</a>
          <Link className="btn btn-light btn-lg" href="/">Go to the shop</Link>
        </div>

        <RelatedLinks
          links={[
            { href: "/", label: "Buy pure desi ghee online" },
            { href: "/how-desi-ghee-is-made/", label: "How our desi ghee is made" },
            { href: "/desi-ghee-vs-banaspati/", label: "Desi ghee vs banaspati" },
          ]}
        />
      </main>
    </PageShell>
  );
}
