import Link from "next/link";
import PageShell from "@/app/PageShell";
import Breadcrumbs from "@/app/Breadcrumbs";
import RelatedLinks from "@/app/RelatedLinks";
import { BUSINESS, waLink } from "@/lib/config";

const PATH = "/doodh-dahi-for-weddings-okara/";

export const metadata = {
  title: "Doodh & Dahi for Weddings in Okara — Bulk Supply | Muhammad Dairy",
  description:
    "Bulk khalis doodh and dahi for weddings, mehndi, barat and walima in Okara. Tell us your date and quantity on WhatsApp and we reserve it for your function.",
  alternates: { canonical: PATH },
  openGraph: { title: "Doodh & Dahi for Weddings in Okara", description: "Bulk milk and dahi for weddings and functions in Okara.", type: "website", url: PATH },
};

const orderMsg = [
  `Assalam o Alaikum ${BUSINESS.name}, I'd like to order doodh / dahi for an event in Okara.`,
  "", "Function (mehndi / barat / walima / other): ", "Event date: ", "Doodh quantity: ", "Dahi quantity: ", "Venue area: ",
].join("\n");

export default function Page() {
  return (
    <PageShell>
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Doodh & Dahi", path: "/doodh-dahi-okara/" }, { name: "Weddings & functions", path: PATH }]} />
      <main className="article">
        <h1>Doodh and dahi for weddings in Okara</h1>
        <p className="lede">
          Planning a shaadi, mehndi, barat or walima in Okara? We supply khalis doodh and fresh
          dahi in bulk for weddings and functions — tell us the date and quantity, and we reserve it.
        </p>

        <h2>Bulk supply for your function</h2>
        <ul>
          <li><strong>Weddings</strong> — mehndi, barat and walima.</li>
          <li><strong>Family functions</strong> — aqeeqa, gatherings and dawats.</li>
          <li><strong>Caterers &amp; event kitchens</strong> — a reliable bulk quantity on the day.</li>
        </ul>
        <p>
          It is the same pure doodh and dahi we supply{" "}
          <Link href="/daily-milk-delivery-okara/">daily across the city</Link> — nothing mixed in —
          just in the quantity your event needs. Dahi for raita and lassi, milk for cooking and sweets.
        </p>

        <h2>Order ahead</h2>
        <p>
          Events need planning, so message us the date and how much doodh and dahi you will need as
          early as you can, and we will confirm the price and delivery. We also supply{" "}
          <Link href="/milk-supplier-for-hotels-okara/">hotels and restaurants</Link> in the city.
          Everything we make starts with our own herd — read about{" "}
          <Link href="/our-dairy/">our dairy</Link>.
        </p>

        <div className="page-cta">
          <a className="btn btn-wa btn-lg" href={waLink(orderMsg)} target="_blank" rel="noopener">Reserve for your event on WhatsApp</a>
        </div>

        <RelatedLinks
          links={[
            { href: "/doodh-dahi-okara/", label: "Khalis doodh & dahi in Okara" },
            { href: "/daily-milk-delivery-okara/", label: "Daily milk delivery in Okara" },
            { href: "/milk-supplier-for-hotels-okara/", label: "Milk supplier for hotels in Okara" },
          ]}
        />
      </main>
    </PageShell>
  );
}
