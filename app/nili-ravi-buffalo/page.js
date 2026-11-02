import Link from "next/link";
import PageShell from "@/app/PageShell";
import Breadcrumbs from "@/app/Breadcrumbs";
import RelatedLinks from "@/app/RelatedLinks";
import { SITE_URL } from "@/lib/config";

const PATH = "/nili-ravi-buffalo/";

export const metadata = {
  title: "Nili-Ravi Buffalo — The Buffalo Behind Our Ghee | Muhammad Dairy",
  description:
    "The Nili-Ravi buffalo of Punjab gives rich, high-butterfat milk — the best start for desi ghee. Meet the breed behind Muhammad Dairy's ghee in Okara.",
  alternates: { canonical: PATH },
  openGraph: { title: "The Nili-Ravi Buffalo", description: "Punjab's famous dairy buffalo, and why its milk is ideal for ghee.", type: "article", url: PATH },
};

const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "The Nili-Ravi buffalo", url: new URL(PATH, SITE_URL).href, publisher: { "@id": `${SITE_URL}#business` } };

export default function Page() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Our Dairy", path: "/our-dairy/" }, { name: "Nili-Ravi Buffalo", path: PATH }]} />
      <main className="article">
        <h1>The Nili-Ravi buffalo</h1>
        <p className="lede">
          The Nili-Ravi is the buffalo of Punjab — named after the Ravi river and known across the
          region for rich, creamy, high-butterfat milk. It is the milk our desi ghee begins with.
        </p>

        <h2>About the breed</h2>
        <p>
          The Nili-Ravi is one of South Asia's best dairy buffalo breeds, found through central
          Punjab, including around Okara and neighbouring Sahiwal. It is recognised by its deep body
          and the white markings on its legs and face. Most of all, it is prized for milk that is
          high in butterfat — exactly what you want for ghee.
        </p>

        <h2>Why it matters for ghee</h2>
        <p>
          Ghee is butterfat, so the richer and creamier the milk, the better the start. High-
          butterfat Nili-Ravi milk gives more makhan, and more makhan means a fuller-flavoured
          ghee. That is why this breed sits at the heart of{" "}
          <Link href="/our-dairy/">our dairy</Link>, alongside the{" "}
          <Link href="/sahiwal-cow/">Sahiwal cow</Link>.
        </p>
        <p>
          You can see the milk become ghee in{" "}
          <Link href="/how-desi-ghee-is-made/">how desi ghee is made</Link>, then{" "}
          <Link href="/">order ours here</Link>.
        </p>

        <RelatedLinks
          links={[
            { href: "/our-dairy/", label: "Our dairy & herd" },
            { href: "/sahiwal-cow/", label: "The Sahiwal cow" },
            { href: "/", label: "Buy pure desi ghee online" },
          ]}
        />
      </main>
    </PageShell>
  );
}
