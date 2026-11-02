import Link from "next/link";
import PageShell from "@/app/PageShell";
import Breadcrumbs from "@/app/Breadcrumbs";
import RelatedLinks from "@/app/RelatedLinks";

const PATH = "/desi-ghee-vs-banaspati/";

export const metadata = {
  title: "Desi Ghee vs Banaspati — What's the Difference? | Muhammad Dairy",
  description:
    "Desi ghee is made from real cream; banaspati is hydrogenated vegetable oil. How they differ in taste, smell, cooking and what's really inside each one.",
  alternates: { canonical: PATH },
  openGraph: { title: "Desi Ghee vs Banaspati", description: "Real cream vs hydrogenated vegetable oil — the honest comparison.", type: "article", url: PATH },
};

const ROWS = [
  ["Made from", "Fresh cream / makhan", "Hydrogenated vegetable oil"],
  ["Smell", "Rich, nutty", "Flat or plain"],
  ["Texture when cool", "Grainy, danedar", "Smooth, waxy"],
  ["Colour", "Clear golden", "Pale, uniform"],
  ["Traditional cooking", "The original ghee", "A 20th-century substitute"],
];

export default function Page() {
  return (
    <PageShell>
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Desi Ghee", path: "/" }, { name: "Desi ghee vs banaspati", path: PATH }]} />
      <main className="article">
        <h1>Desi ghee vs banaspati</h1>
        <p className="lede">
          They can look similar on a shelf, but they are not the same thing. Desi ghee is made
          from real dairy cream. Banaspati is hydrogenated vegetable oil, created as a cheaper
          substitute. Here is how they actually differ.
        </p>

        <h2>Side by side</h2>
        <table className="ptable">
          <thead>
            <tr><th></th><th>Desi ghee</th><th>Banaspati</th></tr>
          </thead>
          <tbody>
            {ROWS.map(([k, a, b]) => (
              <tr key={k}><td>{k}</td><td>{a}</td><td>{b}</td></tr>
            ))}
          </tbody>
        </table>

        <h2>What that means in the kitchen</h2>
        <p>
          Real desi ghee is simply slow-cooked makhan — you can see exactly{" "}
          <Link href="/how-desi-ghee-is-made/">how desi ghee is made</Link>. Banaspati is oil that
          has been chemically hardened to behave like a solid fat. The two cook, smell and set
          differently, which is why you can usually{" "}
          <Link href="/how-to-check-pure-desi-ghee/">tell pure ghee from a mix</Link> with a few
          simple tests at home.
        </p>
        <p>
          We make only pure desi ghee from fresh cream — never banaspati, never vegetable oil. You
          can <Link href="/">order it online</Link>, couriered anywhere in Pakistan.
        </p>

        <div className="page-cta">
          <Link className="btn btn-primary btn-lg" href="/">Buy pure desi ghee</Link>
        </div>

        <RelatedLinks
          links={[
            { href: "/how-to-check-pure-desi-ghee/", label: "How to tell if desi ghee is pure" },
            { href: "/benefits-of-desi-ghee/", label: "Benefits of desi ghee" },
            { href: "/", label: "Buy pure desi ghee online" },
          ]}
        />
      </main>
    </PageShell>
  );
}
