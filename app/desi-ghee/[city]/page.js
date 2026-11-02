import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/app/PageShell";
import Breadcrumbs from "@/app/Breadcrumbs";
import RelatedLinks from "@/app/RelatedLinks";
import { CITIES, cityBySlug } from "@/lib/cities";
import { BUSINESS, SITE_URL, waLink } from "@/lib/config";

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  const c = cityBySlug(city);
  if (!c) return {};
  const PATH = `/desi-ghee/${c.slug}/`;
  return {
    title: `Buy Desi Ghee in ${c.name} — Couriered from Okara | Muhammad Dairy`,
    description: `Pure khalis desi ghee couriered to ${c.name} from our family dairy in Okara. Order on WhatsApp; we confirm the price and courier charges before we ship.`,
    alternates: { canonical: PATH },
    openGraph: { title: `Desi Ghee in ${c.name}`, description: `Khalis desi ghee couriered to ${c.name} from Okara.`, type: "website", url: PATH },
  };
}

export default async function Page({ params }) {
  const { city } = await params;
  const c = cityBySlug(city);
  if (!c) notFound();

  const PATH = `/desi-ghee/${c.slug}/`;
  const orderMsg = `Assalam o Alaikum ${BUSINESS.name}, I'd like to order desi ghee couriered to ${c.name}.`;
  const faqs = [
    {
      q: `How long does desi ghee take to reach ${c.name}?`,
      a: `From our dairy in Okara (about ${c.km} km away), couriered desi ghee ${c.transit} to reach ${c.name}. We confirm the exact timing and courier charge with you on WhatsApp before we ship.`,
    },
    {
      q: `How do I pay for an order to ${c.name}?`,
      a: `For courier orders to ${c.name}, we confirm the total and courier charges on WhatsApp, then you pay by bank transfer or a mobile wallet like Easypaisa or JazzCash before we ship.`,
    },
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: new URL(PATH, SITE_URL).href,
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Desi ghee delivery", path: "/desi-ghee/" }, { name: c.name, path: PATH }]} />
      <main className="article">
        <h1>Buy desi ghee in {c.name}</h1>
        <p className="lede">
          {c.intro} We courier our khalis desi ghee, made from fresh cream, to {c.name} — order on WhatsApp.
        </p>

        <h2>Delivery to {c.name}</h2>
        <p>
          {c.name} is about {c.km} km from our dairy in Okara, and couriered desi ghee {c.transit} to
          arrive. We confirm the courier charge and timing with you on WhatsApp, and you pay before
          we ship. See our current <Link href="/desi-ghee-price-in-pakistan/">pack prices</Link>.
        </p>

        <h2>Why it arrives fresh</h2>
        <p>
          Pure desi ghee is shelf-stable and keeps without refrigeration, so it travels well — even
          the long way to far cities. Every pack is cooked from fresh cream, strained and sealed;
          you can see exactly <Link href="/how-desi-ghee-is-made/">how it is made</Link> and{" "}
          <Link href="/how-to-check-pure-desi-ghee/">how to tell it is pure</Link>.
        </p>

        <h2>Questions about delivery to {c.name}</h2>
        {faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}

        <div className="page-cta">
          <a className="btn btn-wa btn-lg" href={waLink(orderMsg)} target="_blank" rel="noopener">Order to {c.name} on WhatsApp</a>
          <Link className="btn btn-light btn-lg" href="/">Go to the shop</Link>
        </div>

        <RelatedLinks
          links={[
            { href: "/desi-ghee/", label: "Desi ghee delivery across Pakistan" },
            { href: "/desi-ghee-price-in-pakistan/", label: "Desi ghee price in Pakistan" },
            { href: "/", label: "Buy pure desi ghee online" },
          ]}
        />
      </main>
    </PageShell>
  );
}
