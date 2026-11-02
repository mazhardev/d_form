import Link from "next/link";
import PageShell from "@/app/PageShell";
import Breadcrumbs from "@/app/Breadcrumbs";
import RelatedLinks from "@/app/RelatedLinks";
import { BUSINESS, waLink } from "@/lib/config";

const PATH = "/milk-supplier-for-hotels-okara/";

export const metadata = {
  title: "Milk Supplier for Hotels in Okara — Daily Doodh & Dahi | Muhammad Dairy",
  description:
    "Reliable daily doodh and dahi supply for hotels and restaurants in Okara city. Several well-known Okara hotels already buy from us. Order on WhatsApp.",
  alternates: { canonical: PATH },
  openGraph: { title: "Milk Supplier for Hotels in Okara", description: "Daily doodh and dahi for hotels and restaurants in Okara.", type: "website", url: PATH },
};

const orderMsg = [
  `Assalam o Alaikum ${BUSINESS.name}, I run a hotel / restaurant in Okara and would like a daily doodh / dahi supply.`,
  "", "Business name: ", "Doodh per day: ", "Dahi per day: ", "Area: ",
].join("\n");

export default function Page() {
  return (
    <PageShell>
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Doodh & Dahi", path: "/doodh-dahi-okara/" }, { name: "Hotels", path: PATH }]} />
      <main className="article">
        <h1>Milk supplier for hotels in Okara</h1>
        <p className="lede">
          We supply reliable daily doodh and dahi to hotels and restaurants in Okara city. Several
          of the city's well-known hotels already take their milk and dahi from us.
        </p>

        <h2>Why kitchens choose us</h2>
        <ul>
          <li><strong>A steady daily quantity</strong> you can count on.</li>
          <li><strong>Pure milk and dahi</strong>, nothing mixed in.</li>
          <li><strong>Fresh each day</strong>, delivered within the city.</li>
          <li><strong>One point of contact</strong> on WhatsApp.</li>
        </ul>
        <p>
          Whether it is dahi for raita and lassi or milk for chai, cooking and sweets, we keep the
          quality the same every day — the same{" "}
          <Link href="/doodh-dahi-okara/">doodh and dahi</Link> we supply to homes across Okara.
        </p>

        <h2>Set up a daily supply</h2>
        <p>
          Tell us your daily doodh and dahi quantity and we will agree timing and price. For events
          and large one-off orders, see{" "}
          <Link href="/doodh-dahi-for-weddings-okara/">doodh and dahi for weddings</Link>. For home
          delivery, see <Link href="/daily-milk-delivery-okara/">daily milk delivery</Link>.
        </p>

        <div className="page-cta">
          <a className="btn btn-wa btn-lg" href={waLink(orderMsg)} target="_blank" rel="noopener">Set up hotel supply on WhatsApp</a>
        </div>

        <RelatedLinks
          links={[
            { href: "/doodh-dahi-okara/", label: "Khalis doodh & dahi in Okara" },
            { href: "/daily-milk-delivery-okara/", label: "Daily milk delivery in Okara" },
            { href: "/doodh-dahi-for-weddings-okara/", label: "Doodh & dahi for weddings" },
          ]}
        />
      </main>
    </PageShell>
  );
}
