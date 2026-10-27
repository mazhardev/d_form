import "./globals.css";
import { CartProvider } from "./cart";
import { SITE_URL } from "@/lib/config";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "./" },
  keywords: [
    "desi ghee", "pure desi ghee", "desi ghee Okara", "makhan", "fresh cream ghee", "Muhammad Dairy",
    "khalis doodh", "dahi", "daily milk Okara", "daily dahi Okara", "milk for weddings Okara", "dahi for weddings", "milk supplier for hotels Okara",
  ],
  title: "Muhammad Dairy | Pure Desi Ghee in Okara since 1975",
  description:
    "Serving Okara since 1975, Muhammad Dairy makes pure desi ghee from fresh cream in Okara (Sheikh Basti, GT Road), Pakistan, and supplies khalis doodh and dahi daily in Okara city and in bulk for weddings, functions and hotels. Order on WhatsApp.",
  openGraph: {
    title: "Muhammad Dairy | Pure Desi Ghee",
    description: "Fresh cream se khalis desi ghee. Order on WhatsApp: 0305 684 7007",
    type: "website",
    images: [{ url: "media/poster.jpg", width: 540, height: 972 }],
  },
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
