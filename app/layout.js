import "./globals.css";
import { CartProvider } from "./cart";
import { SITE_URL } from "@/lib/config";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "./" },
  keywords: [
    "desi ghee Okara", "pure desi ghee in Okara", "khalis desi ghee", "desi ghee price in Okara", "asli desi ghee",
    "danedar desi ghee", "makhan Okara", "khalis doodh Okara", "fresh milk Okara", "dahi Okara", "milk supplier Okara",
    "daily milk supply Okara", "milk and dahi for weddings", "milk supplier for hotels Okara", "dairy in Okara",
    "Muhammad Dairy", "دیسی گھی اوکاڑہ", "خالص دیسی گھی", "دودھ دہی اوکاڑہ",
  ],
  title: "Desi Ghee, Doodh & Dahi in Okara | Muhammad Dairy since 1975",
  description:
    "Pure desi ghee from fresh cream, plus khalis doodh and dahi in Okara since 1975. Daily supply in Okara city, bulk orders for weddings and hotels. Cash on delivery.",
  openGraph: {
    title: "Muhammad Dairy, Okara | Khalis Desi Ghee, Doodh & Dahi",
    description: "Fresh cream se khalis desi ghee, plus doodh and dahi daily in Okara. Order on WhatsApp: 0305 684 7007",
    type: "website",
    siteName: "Muhammad Dairy",
    locale: "en_PK",
    images: [{ url: "media/ghee-1kg.jpg", width: 600, height: 600, alt: "Pure desi ghee from Muhammad Dairy, Okara" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = { themeColor: "#fbf8f2" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800&family=Noto+Nastaliq+Urdu:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
