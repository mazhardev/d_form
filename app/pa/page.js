import Site from "../Site";
import { buildMetadata } from "@/lib/i18n";

export const metadata = buildMetadata("pa");

export default function Page() {
  return <Site locale="pa" />;
}
