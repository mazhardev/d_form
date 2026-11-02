import Link from "next/link";
import PageShell from "@/app/PageShell";
import Breadcrumbs from "@/app/Breadcrumbs";
import RelatedLinks from "@/app/RelatedLinks";
import { CITIES } from "@/lib/cities";

const PATH = "/desi-ghee/";

export const metadata = {
  title: "Desi Ghee Delivery Across Pakistan — From Okara | Muhammad Dairy",
  description:
    "We courier pure khalis desi ghee from our Okara dairy to Lahore, Karachi, Islamabad, Faisalabad, Multan, Rawalpindi and every other city in Pakistan.",
  alternates: { canonical: PATH },
  openGraph: { title: "Desi Ghee Delivery Across Pakistan", description: "Khalis desi ghee couriered from Okara to cities across Pakistan.", type: "website", url: PATH },
};

export default function Page() {
  return (
    <PageShell>
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Desi ghee delivery", path: PATH }]} />
      <main className="article">
        <h1>Desi ghee delivery across Pakistan</h1>
        <p className="lede">
          Our khalis desi ghee is made from fresh cream in Okara — and because pure ghee keeps
          without refrigeration, we courier it anywhere in Pakistan. Pick your city below, or just
          message us.
        </p>

        <h2>Cities we deliver to</h2>
        <ul>
          {CITIES.map((c) => (
            <li key={c.slug}><Link href={`/desi-ghee/${c.slug}/`}>Desi ghee in {c.name}</Link></li>
          ))}
        </ul>
        <p>
          Not listed? We deliver to <strong>every other city in Pakistan</strong> too — tell us
          where you are on WhatsApp and we confirm the courier charge and timing.
        </p>

        <h2>How delivery works</h2>
        <p>
          Add your packs to the <Link href="/">cart</Link> or message us, we confirm the{" "}
          <Link href="/desi-ghee-price-in-pakistan/">price and courier charges</Link>, you pay by
          bank transfer or a mobile wallet, and your ghee ships. In Okara itself, it is cash on
          delivery. Everything is cooked from fresh cream — see{" "}
          <Link href="/how-desi-ghee-is-made/">how it is made</Link>.
        </p>

        <div className="page-cta">
          <Link className="btn btn-primary btn-lg" href="/">Order desi ghee</Link>
          <Link className="btn btn-light btn-lg" href="/desi-ghee-price-in-pakistan/">See prices</Link>
        </div>

        <RelatedLinks
          links={[
            { href: "/desi-ghee-price-in-pakistan/", label: "Desi ghee price in Pakistan" },
            { href: "/how-desi-ghee-is-made/", label: "How our desi ghee is made" },
            { href: "/", label: "Buy pure desi ghee online" },
          ]}
        />
      </main>
    </PageShell>
  );
}
