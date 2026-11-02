import Link from "next/link";
import PageShell from "@/app/PageShell";
import Breadcrumbs from "@/app/Breadcrumbs";
import RelatedLinks from "@/app/RelatedLinks";
import { SITE_URL } from "@/lib/config";

const PATH = "/how-to-check-pure-desi-ghee/";

export const metadata = {
  title: "How to Tell if Desi Ghee Is Pure — 5 Simple Tests | Muhammad Dairy",
  description:
    "Simple home tests to check if desi ghee is pure: how it melts, smells and sets danedar, the fridge test and more — and how pure ghee differs from banaspati.",
  alternates: { canonical: PATH },
  openGraph: { title: "How to Tell if Desi Ghee Is Pure", description: "Five simple ways to check whether your desi ghee is really pure.", type: "article", url: PATH },
};

const faqs = [
  { q: "Does pure desi ghee freeze solid in the fridge?", a: "Pure desi ghee sets firm and grainy in the fridge. Ghee cut with vegetable oil often stays softer and separates into layers, because oil and ghee set at different temperatures." },
  { q: "Should pure ghee smell strong?", a: "Yes — real desi ghee has a rich, nutty aroma from slow-cooked makhan. A flat or oily smell is a sign it has been mixed with banaspati or vegetable oil." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: new URL(PATH, SITE_URL).href,
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function Page() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Desi Ghee", path: "/" }, { name: "How to check purity", path: PATH }]} />
      <main className="article">
        <h1>How to tell if desi ghee is pure</h1>
        <p className="lede">
          Pure desi ghee melts clear and golden, smells nutty, and sets with a grainy, danedar
          texture at room temperature. Here are five simple checks you can do at home.
        </p>

        <h2>Five simple tests</h2>
        <ul>
          <li><strong>The look.</strong> Melted pure ghee is clear and golden, not cloudy. As it cools it turns <Link href="/what-is-danedar-ghee/">grainy (danedar)</Link>, not smooth and waxy.</li>
          <li><strong>The smell.</strong> Real ghee has a rich, nutty aroma. A flat or plain oily smell suggests vegetable oil or banaspati has been mixed in.</li>
          <li><strong>The fridge test.</strong> Put a spoon of ghee in the fridge. Pure ghee sets firm and even; adulterated ghee often separates into layers because oil sets differently.</li>
          <li><strong>The palm test.</strong> A little pure ghee melts on your warm palm. Ghee that stays stubbornly solid at body temperature has likely been blended with cheaper fats.</li>
          <li><strong>The pan test.</strong> Heat a little in a pan — pure ghee melts quickly and smells sweet and nutty; banaspati melts slower and smells flat.</li>
        </ul>

        <h2>Why pure ghee behaves this way</h2>
        <p>
          All of this comes from how it is made. When makhan is{" "}
          <Link href="/how-desi-ghee-is-made/">slow-cooked the traditional way</Link>, you get that
          colour, smell and grainy set naturally. The clearest contrast is with hydrogenated
          vegetable oil — see <Link href="/desi-ghee-vs-banaspati/">desi ghee vs banaspati</Link>.
        </p>
        <p>
          The honest answer, though, is that the best test is seeing it made. That is why we show
          every step of ours on video and <Link href="/">sell our khalis desi ghee</Link> directly,
          couriered across Pakistan.
        </p>

        <div className="page-cta">
          <Link className="btn btn-primary btn-lg" href="/">Order pure desi ghee</Link>
        </div>

        <RelatedLinks
          links={[
            { href: "/what-is-danedar-ghee/", label: "What is danedar ghee?" },
            { href: "/desi-ghee-vs-banaspati/", label: "Desi ghee vs banaspati" },
            { href: "/how-desi-ghee-is-made/", label: "How our desi ghee is made" },
          ]}
        />
      </main>
    </PageShell>
  );
}
