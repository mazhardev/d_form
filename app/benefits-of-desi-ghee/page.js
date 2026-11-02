import Link from "next/link";
import PageShell from "@/app/PageShell";
import Breadcrumbs from "@/app/Breadcrumbs";
import RelatedLinks from "@/app/RelatedLinks";
import { SITE_URL } from "@/lib/config";

const PATH = "/benefits-of-desi-ghee/";

export const metadata = {
  title: "Benefits of Desi Ghee — Why People Choose Pure Ghee | Muhammad Dairy",
  description:
    "Why pure desi ghee is valued in Pakistani kitchens: rich flavour, a high smoke point for cooking, long keeping, and what sets real ghee apart from oil.",
  alternates: { canonical: PATH },
  openGraph: { title: "Benefits of Desi Ghee", description: "Why people choose pure desi ghee — flavour, cooking and keeping quality.", type: "article", url: PATH },
};

const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Benefits of desi ghee", url: new URL(PATH, SITE_URL).href, publisher: { "@id": `${SITE_URL}#business` } };

export default function Page() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Desi Ghee", path: "/" }, { name: "Benefits", path: PATH }]} />
      <main className="article">
        <h1>Benefits of desi ghee</h1>
        <p className="lede">
          Pure desi ghee has been part of Pakistani kitchens for generations — valued for its
          flavour, how it cooks and how long it keeps. Here is an honest look at why people choose it.
        </p>

        <h2>In the kitchen</h2>
        <ul>
          <li><strong>Rich flavour.</strong> Slow-cooked makhan gives a deep, nutty taste that plain oil cannot match.</li>
          <li><strong>High smoke point.</strong> Ghee handles high-heat frying, tarka and roasting without burning as quickly as many oils.</li>
          <li><strong>Keeps well.</strong> With the milk solids cooked off, pure ghee is shelf-stable and does not need refrigeration.</li>
          <li><strong>A little goes far.</strong> Its strong aroma means you use less for the same flavour.</li>
        </ul>

        <h2>A traditional kitchen staple</h2>
        <p>
          Across Punjab, desi ghee has long been the fat of choice for everything from daily rotis
          and parathas to festive dishes and sweets. We do not make medical claims — what we can
          promise is that ours is real, made only from fresh cream. You can see exactly{" "}
          <Link href="/how-desi-ghee-is-made/">how desi ghee is made</Link> and how it differs from{" "}
          <Link href="/desi-ghee-vs-banaspati/">banaspati</Link>.
        </p>

        <h2>The benefits only hold if it is pure</h2>
        <p>
          Ghee cut with vegetable oil loses the flavour, the smoke point and the keeping quality —
          so it is worth knowing <Link href="/how-to-check-pure-desi-ghee/">how to tell if ghee is
          pure</Link>. Ours is made the slow way and sold directly, so you know what you are getting.
        </p>

        <div className="page-cta">
          <Link className="btn btn-primary btn-lg" href="/">Order pure desi ghee</Link>
        </div>

        <RelatedLinks
          links={[
            { href: "/how-desi-ghee-is-made/", label: "How our desi ghee is made" },
            { href: "/desi-ghee-vs-banaspati/", label: "Desi ghee vs banaspati" },
            { href: "/", label: "Buy pure desi ghee online" },
          ]}
        />
      </main>
    </PageShell>
  );
}
