// "Read next" block — enforces internal linking rules 1 & 3 (link up to the pillar
// and sideways to sibling pages). Used by Phase 1 content pages. Pass `links` as
// [{ href, label }]. Links within a page should stay in the same language.
import Link from "next/link";

export default function RelatedLinks({ links, heading = "Read next" }) {
  return (
    <aside className="related">
      <h2>{heading}</h2>
      <ul>
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
