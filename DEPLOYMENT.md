# Deployment notes

## Cloudflare Pages

- **Project:** `16alves02`
- **Repository:** `16alves02/16alves02.com`
- **Production branch:** `main`
- **Production URL:** https://16alves02.pages.dev
- **Framework preset:** None (Vite + React build configured manually)
- **Root directory:** `/`
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Environment variables:** none required by the current static portfolio

Cloudflare Pages is connected to GitHub. Changes merged into `main` trigger production deployments; pull requests create preview deployments. Use the stable project URL for canonical metadata and public portfolio links, never a hash-based preview URL.

No Wrangler configuration file is needed for this static Vite deployment.

## Local validation

```bash
npm ci
npm run build
npm run verify:theme
npm run verify:production
npm run preview
```

The production build is generated in `dist/`. Theme verification checks readable accent and signal colors, filled controls, the 3D scene fallback and reduced-motion handling. Before release, review the 3D hero and project-card depth on desktop and mobile, then check the homepage, privacy page, terms page and 404 page in both themes. Confirm that the canvas pauses when scrolled away and remains non-essential to navigation.

## Production readiness checklist

- [ ] In Cloudflare Pages, open the `16alves02` project > **Metrics** > **Web Analytics** > **Enable**. Cloudflare injects the privacy-focused beacon on the next deployment. Confirm real page-view data appears in the dashboard before describing analytics as active.
- [ ] Add a domain that the site owner controls under **Custom domains**. Do not change canonical URLs, sitemap URLs, or DNS until ownership and the target hostname are confirmed. After activation, update all canonical, Open Graph, sitemap, robots and legal-page URLs together.
- [ ] Verify `/privacy.html`, `/terms.html`, `/sitemap.xml`, `/robots.txt`, and a deliberately missing path in production. The missing path must return HTTP 404.
- [ ] Re-submit `/sitemap.xml` in Google Search Console after the production deployment and inspect the sitemap details. A successful browser render or URL live test does not itself prove that the Sitemaps report has processed the file.

## Portfolio CMS and contact service

The private admin interface is available at `/admin`. It uses Supabase Auth and the `portfolio_content` and `contact_messages` tables. See [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) for database, administrator-account and Cloudflare Pages variable setup. Pages Functions are restricted to `/api/*` through `public/_routes.json`; static portfolio pages continue to be served as assets.
