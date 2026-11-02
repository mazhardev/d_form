import Link from "next/link";
import PageShell from "@/app/PageShell";
import Breadcrumbs from "@/app/Breadcrumbs";
import RelatedLinks from "@/app/RelatedLinks";
import { BUSINESS, waLink } from "@/lib/config";

const PATH = "/fresh-makhan-okara/";

export const metadata = {
  title: "Fresh Makhan in Okara — Hand-Churned White Butter | Muhammad Dairy",
  description:
    "Fresh hand-churned makhan (white butter) made to order in Okara from pure cream — the same makhan we slow-cook into desi ghee. Order on WhatsApp.",
  alternates: { canonical: PATH },
  openGraph: { title: "Fresh Makhan in Okara", description: "Hand-churned white butter, made to order from pure cream.", type: "website", url: PATH },
};

const orderMsg = `Assalam o Alaikum ${BUSINESS.name}, I'd like to order fresh makhan in Okara.`;

export default function Page() {
  return (
    <PageShell>
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Desi Ghee", path: "/" }, { name: "Fresh Makhan", path: PATH }]} />
      <main className="article">
        <h1>Fresh makhan in Okara</h1>
        <p className="lede">
          Makhan is hand-churned white butter, made from fresh cream before it is ever cooked. We
          make it fresh to order in Okara — the same makhan we slow-cook into our desi ghee.
        </p>

        <h2>What makhan is</h2>
        <p>
          When fresh cream is churned, the fat separates out as soft white butter — makhan —
          leaving buttermilk behind. It is washed and kept clean, with nothing added. Cooked slowly,
          that same makhan becomes <Link href="/how-desi-ghee-is-made/">desi ghee</Link>.
        </p>

        <h2>How people use it</h2>
        <ul>
          <li>Fresh on hot paratha, naan or bread.</li>
          <li>Stirred into daal, saag and rice.</li>
          <li>Churned into lassi.</li>
          <li>Or cooked down at home into your own ghee.</li>
        </ul>

        <h2>Ordering makhan</h2>
        <p>
          Makhan is made to order and best used fresh, so we confirm the quantity and timing with
          you. In Okara you pay cash on delivery. Add it from the{" "}
          <Link href="/#shop">shop</Link>, or message us on WhatsApp. We also supply{" "}
          <Link href="/doodh-dahi-okara/">khalis doodh and dahi</Link> across the city.
        </p>

        <div className="page-cta">
          <a className="btn btn-wa btn-lg" href={waLink(orderMsg)} target="_blank" rel="noopener">Order makhan on WhatsApp</a>
          <Link className="btn btn-light btn-lg" href="/#shop">Go to the shop</Link>
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
