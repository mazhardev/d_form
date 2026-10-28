import { BUSINESS } from "@/lib/config";

export const dynamic = "force-static";

export default function manifest() {
  return {
    name: `${BUSINESS.name} — Pure Desi Ghee in Okara`,
    short_name: BUSINESS.name,
    description:
      "Khalis desi ghee from fresh cream, couriered anywhere in Pakistan. Doodh and dahi daily in Okara since 1975.",
    start_url: "./",
    scope: "./",
    display: "browser",
    background_color: "#fbf8f2",
    theme_color: "#fbf8f2",
    lang: "en-PK",
    icons: [{ src: "icon.svg", type: "image/svg+xml", sizes: "any", purpose: "any" }],
  };
}
