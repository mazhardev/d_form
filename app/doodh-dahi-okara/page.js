import Link from "next/link";
import PageShell from "@/app/PageShell";
import Breadcrumbs from "@/app/Breadcrumbs";
import RelatedLinks from "@/app/RelatedLinks";
import { BUSINESS, waLink } from "@/lib/config";

const PATH = "/doodh-dahi-okara/";

export const metadata = {
  title: "Khalis Doodh & Dahi in Okara — Daily & Bulk | Muhammad Dairy",
  description:
    "Fresh khalis doodh and dahi supplied daily across Okara city — homes, shops and hotels — plus bulk orders for weddings and functions. Order on WhatsApp.",
  alternates: { canonical: PATH },
  openGraph: { title: "Khalis Doodh & Dahi in Okara", description: "Daily fresh milk and dahi in Okara city, and bulk supply for weddings, functions and hotels.", type: "website", url: PATH },
};

const orderMsg = `Assalam o Alaikum ${BUSINESS.name}, I'd like to order doodh / dahi in Okara.`;

export default function Page() {
  return (
    <PageShell>
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Doodh & Dahi", path: PATH }]} />
      <main className="article">
        <h1>Khalis doodh and dahi in Okara</h1>
        <p className="lede">
          Alongside our desi ghee, {BUSINESS.name} supplies pure khalis doodh and fresh dahi
          every day across Okara city — to homes, shops and hotels — and in bulk for weddings
          and functions. Nothing is mixed in, and every order is confirmed with you personally.
        </p>

        <h2>Why doodh and dahi are Okara-only</h2>
        <p>
          Fresh milk and dahi are perishable, so we keep them local: they go out the same day,
          within Okara city, where we can get them to you fresh. Our{" "}
          <Link href="/">khalis desi ghee</Link> keeps and travels well, so that we courier
          anywhere in Pakistan — but milk and dahi stay close to home on purpose.
        </p>

        <h2>Who we supply</h2>
        <ul>
          <li><strong>Homes</strong> — a daily jug of fresh doodh and a pot of dahi for the family.</li>
          <li><strong>Shops & tea stalls</strong> — a steady daily quantity you can count on.</li>
          <li><strong>Hotels & restaurants</strong> — several of Okara city's well-known hotels already take their doodh and dahi from us.</li>
          <li><strong>Weddings & functions</strong> — mehndi, barat, walima and other events, in the quantity you need, ordered ahead.</li>
        </ul>

        <h2>Two ways to order</h2>
        <p>
          For a regular arrangement, see{" "}
          <Link href="/daily-milk-delivery-okara/">daily milk delivery in Okara</Link> — tell us
          your area and how much you need each day, and we settle the timing and price. For a
          one-time event, message us the date and quantity as early as you can and we will reserve it.
        </p>
        <p>
          In Okara you pay cash on delivery. To learn how we make everything we sell, read{" "}
          <Link href="/our-dairy/">about our dairy and herd</Link>.
        </p>

        <div className="page-cta">
          <a className="btn btn-wa btn-lg" href={waLink(orderMsg)} target="_blank" rel="noopener">Order doodh &amp; dahi on WhatsApp</a>
          <Link className="btn btn-light btn-lg" href="/daily-milk-delivery-okara/">Daily delivery details</Link>
        </div>

        <RelatedLinks
          links={[
            { href: "/daily-milk-delivery-okara/", label: "Daily milk delivery in Okara" },
            { href: "/our-dairy/", label: "Our dairy & herd" },
            { href: "/", label: "Buy pure desi ghee online" },
          ]}
        />
      </main>
    </PageShell>
  );
}
