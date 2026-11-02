// Breadcrumb trail + BreadcrumbList JSON-LD. Used by Phase 1 content pages
// (e.g. app/how-desi-ghee-is-made/page.js). Pass `trail` as [{ name, path }].
import Link from "next/link";
import { SITE_URL } from "@/lib/config";

export default function Breadcrumbs({ trail }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: new URL(t.path, SITE_URL).href,
    })),
  };
  return (
    <nav aria-label="Breadcrumb" className="crumbs">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol>
        {trail.map((t, i) => (
          <li key={t.path}>
            {i < trail.length - 1 ? (
              <Link href={t.path}>{t.name}</Link>
            ) : (
              <span aria-current="page">{t.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
