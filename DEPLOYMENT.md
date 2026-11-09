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
npm run preview
```

The production build is generated in `dist/`.
