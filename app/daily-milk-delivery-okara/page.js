import Link from "next/link";
import PageShell from "@/app/PageShell";
import Breadcrumbs from "@/app/Breadcrumbs";
import RelatedLinks from "@/app/RelatedLinks";
import { BUSINESS, waLink } from "@/lib/config";

const PATH = "/daily-milk-delivery-okara/";

export const metadata = {
  title: "Daily Milk Delivery in Okara — Fresh Doodh & Dahi | Muhammad Dairy",
  description:
    "Daily fresh milk and dahi delivered to homes, shops and hotels in Okara city. Tell us your area and quantity on WhatsApp — cash on delivery.",
  alternates: { canonical: PATH },
  openGraph: { title: "Daily Milk Delivery in Okara", description: "Fresh doodh and dahi delivered every day across Okara city, cash on delivery.", type: "website", url: PATH },
};

const orderMsg = [
  `Assalam o Alaikum ${BUSINESS.name}, I'd like daily milk / dahi delivery in Okara.`,
  "", "Area: ", "Doodh per day: ", "Dahi per day: ", "Start date: ",
].join("\n");

export default function Page() {
  return (
    <PageShell>
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Doodh & Dahi", path: "/doodh-dahi-okara/" }, { name: "Daily Milk Delivery", path: PATH }]} />
      <main className="article">
        <h1>Daily milk delivery in Okara</h1>
        <p className="lede">
          Want fresh doodh and dahi at your door every day? {BUSINESS.name} runs a daily supply
          round across Okara city for homes, shops and hotels. You set the quantity, we bring it
          fresh each day, and you pay cash on delivery.
        </p>

        <h2>How the daily service works</h2>
        <ul>
          <li><strong>Tell us your area and quantity</strong> — for example two litres of doodh and half a kilo of dahi each day.</li>
          <li><strong>We agree a time</strong> — a morning or evening drop that suits your home, shop or kitchen.</li>
          <li><strong>You pay cash on delivery</strong> — settle daily, weekly or monthly, whatever is easier.</li>
        </ul>
        <p>
          It is the same pure milk and dahi we would keep for our own table — nothing mixed in.
          You can pause or change your quantity any day with a quick WhatsApp message.
        </p>

        <h2>Also for events and hotels</h2>
        <p>
          Besides daily home supply, we take bulk orders for{" "}
          <Link href="/doodh-dahi-for-weddings-okara/">weddings and functions</Link>, and are a{" "}
          <Link href="/milk-supplier-for-hotels-okara/">milk supplier for hotels</Link> in the
          city. See the full picture on our{" "}
          <Link href="/doodh-dahi-okara/">doodh and dahi in Okara</Link> page. For pure ghee that
          we courier beyond Okara, visit our <Link href="/">desi ghee shop</Link>.
        </p>

        <div className="page-cta">
          <a className="btn btn-wa btn-lg" href={waLink(orderMsg)} target="_blank" rel="noopener">Start daily delivery on WhatsApp</a>
        </div>

        <RelatedLinks
          links={[
            { href: "/doodh-dahi-okara/", label: "Khalis doodh & dahi in Okara" },
            { href: "/doodh-dahi-for-weddings-okara/", label: "Doodh & dahi for weddings" },
            { href: "/milk-supplier-for-hotels-okara/", label: "Milk supplier for hotels in Okara" },
          ]}
        />
      </main>
    </PageShell>
  );
}
