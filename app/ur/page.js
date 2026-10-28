import Site from "../Site";
import { buildMetadata } from "@/lib/i18n";

export const metadata = buildMetadata("ur");

export default function Page() {
  return <Site locale="ur" />;
}
