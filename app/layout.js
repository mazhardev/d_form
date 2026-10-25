import "./globals.css";
import { CartProvider } from "./cart";
import { SITE_URL } from "@/lib/config";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "./" },
  keywords: ["desi ghee", "pure desi ghee", "desi ghee Okara", "makhan", "fresh cream ghee", "Muhammad Dairy"],
  title: "Muhammad Dairy | Pure Desi Ghee in Okara since 1975",
  description:
    "Serving Okara since 1975, Muhammad Dairy makes pure desi ghee from fresh cream in Okara (Sheikh Basti, GT Road), Pakistan. Watch how it's made and order on WhatsApp.",
  openGraph: {
    title: "Muhammad Dairy | Pure Desi Ghee",
    description: "Fresh cream se khalis desi ghee. Order on WhatsApp: 0305 684 7007",
    type: "website",
    images: [{ url: "media/poster.jpg", width: 540, height: 972 }],
  },
};

export const viewport = { themeColor: "#1f2a1c" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
