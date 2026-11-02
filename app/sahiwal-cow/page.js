import Link from "next/link";
import PageShell from "@/app/PageShell";
import Breadcrumbs from "@/app/Breadcrumbs";
import RelatedLinks from "@/app/RelatedLinks";
import { SITE_URL } from "@/lib/config";

const PATH = "/sahiwal-cow/";

export const metadata = {
  title: "Sahiwal Cow — Pakistan's Dairy Cow | Muhammad Dairy",
  description:
    "The Sahiwal cow is Pakistan's best-known dairy breed — hardy, calm and prized for wholesome milk. Meet the breed behind Muhammad Dairy in Okara.",
  alternates: { canonical: PATH },
  openGraph: { title: "The Sahiwal Cow", description: "Pakistan's best-known dairy cow, hardy and prized for wholesome milk.", type: "article", url: PATH },
};

const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "The Sahiwal cow", url: new URL(PATH, SITE_URL).href, publisher: { "@id": `${SITE_URL}#business` } };

export default function Page() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Our Dairy", path: "/our-dairy/" }, { name: "Sahiwal Cow", path: PATH }]} />
      <main className="article">
        <h1>The Sahiwal cow</h1>
        <p className="lede">
          The Sahiwal is Pakistan's best-known dairy cow — hardy, calm and prized for good,
          wholesome milk. It is one of the breeds behind Muhammad Dairy in Okara.
        </p>

        <h2>About the breed</h2>
        <p>
          Named after the Sahiwal district next to Okara, the Sahiwal is a reddish-brown cow with a
          loose dewlap and a shoulder hump, well suited to the Punjab climate. It tolerates heat
          well, stays healthy with simple care, and gives a steady supply of good milk — which is
          why it is one of the most respected dairy cows in Pakistan and beyond.
        </p>

        <h2>Its place in our dairy</h2>
        <p>
          The Sahiwal's wholesome milk works alongside the richer milk of the{" "}
          <Link href="/nili-ravi-buffalo/">Nili-Ravi buffalo</Link> in what we make. Both are looked
          after daily, because pure ghee and dahi start with healthy animals — read more{" "}
          <Link href="/our-dairy/">about our dairy</Link>.
        </p>
        <p>
          From that milk we make desi ghee, doodh and dahi. You can{" "}
          <Link href="/">order pure desi ghee</Link> online.
        </p>

        <RelatedLinks
          links={[
            { href: "/our-dairy/", label: "Our dairy & herd" },
            { href: "/nili-ravi-buffalo/", label: "The Nili-Ravi buffalo" },
            { href: "/", label: "Buy pure desi ghee online" },
          ]}
        />
      </main>
    </PageShell>
  );
}
