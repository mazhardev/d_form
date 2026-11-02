import Link from "next/link";
import PageShell from "@/app/PageShell";
import Breadcrumbs from "@/app/Breadcrumbs";
import RelatedLinks from "@/app/RelatedLinks";
import { SITE_URL } from "@/lib/config";

const PATH = "/what-is-danedar-ghee/";

export const metadata = {
  title: "What Is Danedar Ghee? The Grainy Texture Explained | Muhammad Dairy",
  description:
    "Danedar ghee has a grainy, granular texture that forms as pure desi ghee cools. Here's what causes it and why it's a sign of traditionally made ghee.",
  alternates: { canonical: PATH },
  openGraph: { title: "What Is Danedar Ghee?", description: "The grainy texture of pure desi ghee, explained.", type: "article", url: PATH },
};

const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "What is danedar ghee?", url: new URL(PATH, SITE_URL).href, publisher: { "@id": `${SITE_URL}#business` } };

export default function Page() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Desi Ghee", path: "/" }, { name: "What is danedar ghee", path: PATH }]} />
      <main className="article">
        <h1>What is danedar ghee?</h1>
        <p className="lede">
          “Danedar” means grainy or granular. Danedar ghee has a grainy texture that forms
          naturally as pure desi ghee cools — and it is one of the clearest signs of traditionally
          made ghee.
        </p>

        <h2>Why ghee turns danedar</h2>
        <p>
          Ghee is mostly butterfat. When makhan is slow-cooked and then left to cool gently, the
          fat crystallises into tiny grains instead of setting into a smooth, waxy block. That
          granular set is what people call danedar. It comes from the method —{" "}
          <Link href="/how-desi-ghee-is-made/">slow cooking and unhurried cooling</Link> — not from
          anything added.
        </p>

        <h2>Is danedar ghee better?</h2>
        <p>
          A danedar texture usually means the ghee was made the traditional way from real cream, so
          many people look for it. Perfectly smooth ghee is not always bad, but ghee that stays
          oily or waxy can be a sign of vegetable oil mixed in — which is one of the things you
          check when you <Link href="/how-to-check-pure-desi-ghee/">test ghee for purity</Link>.
        </p>
        <p>
          Ours sets danedar because that is simply what pure, slow-cooked ghee does. You can{" "}
          <Link href="/">order it here</Link>, couriered anywhere in Pakistan.
        </p>

        <div className="page-cta">
          <Link className="btn btn-primary btn-lg" href="/">Buy pure desi ghee</Link>
        </div>

        <RelatedLinks
          links={[
            { href: "/how-desi-ghee-is-made/", label: "How our desi ghee is made" },
            { href: "/how-to-check-pure-desi-ghee/", label: "How to tell if desi ghee is pure" },
            { href: "/", label: "Buy pure desi ghee online" },
          ]}
        />
      </main>
    </PageShell>
  );
}
