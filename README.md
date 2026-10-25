# Muhammad Dairy: muhammaddairy.online

Website for Muhammad Dairy, Okara (est. 1975). Built with Next.js (static export) and deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Edit content
- **Prices, products, address, WhatsApp number:** `lib/config.js`
- **Homepage text:** `app/page.js`
- **Styles:** `app/globals.css`
- **Video and photos:** `public/media/`

## Run locally
```bash
npm install
npm run dev
```

## How orders work
The cart and checkout run in the browser. On checkout, the order (items, total, customer name, phone, address) opens in WhatsApp, addressed to 0305 684 7007.
