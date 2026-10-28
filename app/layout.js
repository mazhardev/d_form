import "./globals.css";
import { CartProvider } from "./cart";
import { SITE_URL } from "@/lib/config";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "./" },
  keywords: [
    // Desi ghee, couriered across Pakistan (the growth target)
    "desi ghee online Pakistan", "buy desi ghee online", "pure desi ghee Pakistan", "khalis desi ghee delivery",
    "order desi ghee online Pakistan", "asli desi ghee", "danedar desi ghee", "desi ghee price in Pakistan",
    // Okara and nearby (where we deliver in person)
    "desi ghee in Okara", "khalis doodh Okara", "fresh milk Okara", "dahi Okara", "makhan Okara",
    "milk supplier Okara", "dairy in Okara", "milk and dahi for weddings Okara",
    // Brand and Urdu
    "Muhammad Dairy", "خالص دیسی گھی", "دیسی گھی آن لائن پاکستان",
  ],
  title: "Pure Desi Ghee Online in Pakistan | Muhammad Dairy Okara",
  description:
    "Khalis desi ghee from fresh cream, couriered anywhere in Pakistan. Plus doodh and dahi daily in Okara. A family dairy since 1975 — order on WhatsApp.",
  openGraph: {
    title: "Muhammad Dairy | Khalis Desi Ghee, Delivered Across Pakistan",
    description: "Khalis desi ghee from fresh cream, couriered anywhere in Pakistan. Doodh and dahi daily in Okara. Order on WhatsApp: 0305 684 7007",
    type: "website",
    siteName: "Muhammad Dairy",
    locale: "en_PK",
    images: [{ url: "media/ghee-1kg.jpg", width: 600, height: 600, alt: "Pure desi ghee from Muhammad Dairy, Okara" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf8f2" },
    { media: "(prefers-color-scheme: dark)", color: "#15110b" },
  ],
};

// Applies the saved theme before the page paints, so there is no light flash.
const themeScript = `(function(){try{var t=localStorage.getItem('md-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
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
