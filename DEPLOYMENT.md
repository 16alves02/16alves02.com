# Deployment notes

## Cloudflare Pages

- **Project:** `16alves02`
- **Repository:** `16alves02/16alves02.com`
- **Production branch:** `main`
- **Production URL:** https://16alves02.pages.dev
- **Framework:** Vite + React
- **Root directory:** `/`
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Environment variables:** none required for the static site

Cloudflare Pages is connected to GitHub. Merges into `main` trigger production deployments; pull requests create preview deployments. The canonical URL, Open Graph URL, sitemap and public portfolio links must use `https://16alves02.pages.dev`.

The contact form uses FormSubmit as a third-party form relay and sends enquiries to `16alves02@gmail.com`. The first submission may require confirming the destination email address with FormSubmit. No custom backend, database, CMS, admin area, Supabase project or Pages Functions are required.

No Wrangler configuration file is needed for this static Vite deployment.

## Local validation

```bash
npm ci
npm run build
npm run verify:theme
npm run verify:production
npm run preview
```

The production build is generated in `dist/`. Before release, verify the homepage, privacy page, terms page and 404 page in both themes. Check keyboard navigation, reduced-motion behavior, mobile and desktop layouts, CV downloads, external project links and the contact form.

## Production checklist

- [ ] Confirm the latest `main` commit has a successful Cloudflare Pages production deployment.
- [ ] Verify `/`, `/privacy.html`, `/terms.html`, `/sitemap.xml`, `/robots.txt`, both CV downloads and a deliberately missing path in production. The missing path must return HTTP 404.
- [ ] Submit a real contact-form test and complete the initial FormSubmit email confirmation if requested.
- [ ] Run Lighthouse on the deployed production URL for Performance, Accessibility, Best Practices and SEO. Record the actual results; do not claim 100/100 without a completed test.
- [ ] Re-submit `/sitemap.xml` in Google Search Console after deployment and inspect the sitemap report.
