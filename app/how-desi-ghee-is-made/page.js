import Link from "next/link";
import PageShell from "@/app/PageShell";
import Breadcrumbs from "@/app/Breadcrumbs";
import RelatedLinks from "@/app/RelatedLinks";
import { BUSINESS, SITE_URL } from "@/lib/config";

const PATH = "/how-desi-ghee-is-made/";

export const metadata = {
  title: "How Desi Ghee Is Made — Our Slow-Cooked Process | Muhammad Dairy",
  description:
    "See how pure desi ghee is made: fresh cream churned into makhan, then slow-cooked in a degchi until it turns golden. The traditional method, step by step.",
  alternates: { canonical: PATH },
  openGraph: { title: "How Desi Ghee Is Made", description: "The traditional, slow-cooked method, step by step.", type: "article", url: PATH },
};

const STEPS = [
  ["Fresh cream", "Every batch starts with fresh cream collected from pure milk — never vegetable oil or ready-made butter."],
  ["Churning", "The cream is churned until the makhan (white butter) separates from the buttermilk."],
  ["Makhan", "The soft white butter is gathered, washed and kept clean, ready to cook."],
  ["Slow cooking", "The makhan is melted and cooked slowly in a large degchi over low, patient heat."],
  ["Clarifying", "It simmers until the water cooks off and the ghee turns clear and golden."],
  ["Filtering", "The hot ghee is strained to remove every bit of residue."],
  ["Weighed & packed", "Each pack is weighed and sealed, ready for your kitchen."],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How desi ghee is made",
  description: "The traditional method for making pure desi ghee from fresh cream.",
  url: new URL(PATH, SITE_URL).href,
  step: STEPS.map(([name, text], i) => ({ "@type": "HowToStep", position: i + 1, name, text })),
};

export default function Page() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Desi Ghee", path: "/" }, { name: "How it's made", path: PATH }]} />
      <main className="article">
        <h1>How desi ghee is made</h1>
        <p className="lede">
          Pure desi ghee is nothing more than fresh cream, patience and slow heat. Here is exactly
          how we make ours at {BUSINESS.name} — the same traditional way, in small batches, since {BUSINESS.since}.
        </p>

        <h2>The seven steps, start to finish</h2>
        <ol>
          {STEPS.map(([name, text]) => (
            <li key={name}><strong>{name}.</strong> {text}</li>
          ))}
        </ol>

        <h2>Why the slow method matters</h2>
        <p>
          Cooking makhan slowly is what gives real ghee its deep golden colour, its nutty smell and
          its grainy, danedar texture as it cools. Nothing else goes in — no vegetable oil, no
          banaspati, no colour and no flavouring. That is the whole difference between pure desi
          ghee and the <Link href="/desi-ghee-vs-banaspati/">banaspati sold as ghee</Link>.
        </p>
        <p>
          Once you know how it is made, it is easy to{" "}
          <Link href="/how-to-check-pure-desi-ghee/">tell whether desi ghee is pure</Link>. And
          rather than take our word for it, you can watch every step in the short video on our{" "}
          <Link href="/#process">home page</Link>.
        </p>

        <div className="page-cta">
          <Link className="btn btn-primary btn-lg" href="/">Order our khalis desi ghee</Link>
        </div>

        <RelatedLinks
          links={[
            { href: "/how-to-check-pure-desi-ghee/", label: "How to tell if desi ghee is pure" },
            { href: "/desi-ghee-vs-banaspati/", label: "Desi ghee vs banaspati" },
            { href: "/", label: "Buy pure desi ghee online" },
          ]}
        />
      </main>
    </PageShell>
  );
}
