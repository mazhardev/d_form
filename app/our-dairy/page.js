import Link from "next/link";
import PageShell from "@/app/PageShell";
import Breadcrumbs from "@/app/Breadcrumbs";
import RelatedLinks from "@/app/RelatedLinks";
import { BUSINESS, SITE_URL, waLink } from "@/lib/config";

const PATH = "/our-dairy/";
const YEARS = new Date().getFullYear() - BUSINESS.since;

export const metadata = {
  title: `Our Dairy & Herd — ${BUSINESS.name}, Okara Since ${BUSINESS.since}`,
  description:
    "Meet Muhammad Dairy: a family dairy in Okara since 1975. Pure desi ghee from fresh cream, and milk from the Nili-Ravi buffalo and Sahiwal cow of Punjab.",
  alternates: { canonical: PATH },
  openGraph: { title: "Our Dairy & Herd — Muhammad Dairy", description: `A family dairy in Okara since ${BUSINESS.since}.`, type: "article", url: PATH },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${BUSINESS.name}`,
  url: new URL(PATH, SITE_URL).href,
  mainEntity: { "@id": `${SITE_URL}#business` },
};

const contactMsg = `Assalam o Alaikum ${BUSINESS.name}, I'd like to know more about your dairy.`;

export default function Page() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Our Dairy", path: PATH }]} />
      <main className="article">
        <h1>Our dairy and herd</h1>
        <p className="lede">
          {BUSINESS.name} is a family dairy in Okara, serving the city since {BUSINESS.since}.
          For more than {YEARS} years we have kept one promise: give people the same pure dairy
          we would serve at our own table.
        </p>

        <h2>A family dairy since {BUSINESS.since}</h2>
        <p>
          You will find us on GT Road, Sheikh Basti, opposite Azhar Residences in Okara.
          Generations of customers come back to us because we have never changed how we work:
          real fresh cream, patient hands and slow heat. If you have never seen it done, watch{" "}
          <Link href="/how-desi-ghee-is-made/">how our desi ghee is made</Link>, step by step.
        </p>

        <h2>The herd behind the milk</h2>
        <p>
          Okara sits in the heart of Punjab's dairy country. Our milk comes from the breeds this
          region is famous for:
        </p>
        <ul>
          <li><strong>Nili-Ravi buffalo</strong> — named after the Ravi river and known across Punjab for rich, creamy, high-butterfat milk, the best possible start for desi ghee.</li>
          <li><strong>Sahiwal cow</strong> — Pakistan's best-known dairy cow: hardy, calm and prized for good, wholesome milk.</li>
        </ul>
        <p>
          The animals are fed, watered and looked after every day, because pure ghee starts with
          healthy animals. That same milk becomes our{" "}
          <Link href="/doodh-dahi-okara/">khalis doodh and dahi</Link>, supplied fresh across
          Okara city.
        </p>

        <h2>What we make</h2>
        <p>
          Pure desi ghee and fresh makhan, which we{" "}
          <Link href="/">sell online and courier anywhere in Pakistan</Link>, and khalis doodh and
          dahi for Okara city. Every order, large or small, is confirmed by us personally.
        </p>

        <div className="page-cta">
          <a className="btn btn-wa btn-lg" href={waLink(contactMsg)} target="_blank" rel="noopener">Message us on WhatsApp</a>
          <Link className="btn btn-light btn-lg" href="/">Shop desi ghee</Link>
        </div>

        <RelatedLinks
          links={[
            { href: "/how-desi-ghee-is-made/", label: "How our desi ghee is made" },
            { href: "/doodh-dahi-okara/", label: "Khalis doodh & dahi in Okara" },
            { href: "/", label: "Buy pure desi ghee online" },
          ]}
        />
      </main>
    </PageShell>
  );
}
