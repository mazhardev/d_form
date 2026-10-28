import "./globals.css";
import { SITE_URL } from "@/lib/config";

// Per-page title, description, Open Graph and hreflang are set in each route
// (app/page.js, app/ur/page.js, app/pa/page.js). Here only the shared base.
export const metadata = {
  metadataBase: new URL(SITE_URL),
  keywords: [
    "desi ghee online Pakistan", "buy desi ghee online", "pure desi ghee Pakistan", "desi ghee in Okara",
    "khalis doodh Okara", "dahi Okara", "makhan Okara", "milk supplier Okara", "Muhammad Dairy",
    "خالص دیسی گھی", "دیسی گھی آن لائن پاکستان", "خالص دیسی گھیو",
  ],
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
      <body>{children}</body>
    </html>
  );
}
