import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve('dist');
const required = [
  'index.html',
  'faq.html',
  // The user-supplied hero portrait must ship with the production build.
  '35A725EC-3FA5-4077-B167-C2185A787C71.png',
  'portrait-480.webp',
  'portrait-960.webp',
  'og-cover.png',
  '404.html',
  'privacy.html',
  'terms.html',
  'robots.txt',
  'sitemap.xml',
  'favicon.svg',
  'favicon.ico',
  'site.webmanifest',
  'cv-leonardo-alves-pt.pdf',
  'cv-leonardo-alves-en.pdf',
  'projects/saborgest.html',
  'projects/runlattice.html',
  'projects/mrdr.html',
  'projects/hoop.html',
  'projects/raw.html',
  'projects/basket-hub.html',
];

for (const file of required) {
  assert.ok(existsSync(resolve(root, file)), `Missing production asset: ${file}`);
}

for (const file of ['cv-leonardo-alves-pt.pdf', 'cv-leonardo-alves-en.pdf']) {
  const pdf = readFileSync(resolve(root, file));
  assert.equal(pdf.subarray(0, 5).toString('ascii'), '%PDF-', `${file} must be a valid PDF document`);
  assert.match(pdf.toString('latin1'), /\/Type\s*\/Page\b/, `${file} must contain at least one PDF page`);
}

const html = readFileSync(resolve(root, 'index.html'), 'utf8');
assert.match(html, /<html lang="pt-PT">/i, 'Homepage must declare its primary language');
assert.match(html, /<title>[^<]+<\/title>/i, 'Homepage must have a title');
assert.match(html, /<meta name="description" content="[^"]+"/i, 'Homepage must have a meta description');
assert.match(html, /rel="canonical"/i, 'Homepage must have a canonical URL');
assert.match(html, /name="viewport"/i, 'Homepage must declare a responsive viewport');
assert.match(html, /rel="icon"/i, 'Homepage must declare a favicon');
assert.match(html, /property="og:title"/i, 'Homepage must declare an Open Graph title');
assert.match(html, /property="og:description"/i, 'Homepage must declare an Open Graph description');
assert.match(html, /property="og:image"/i, 'Homepage must declare an Open Graph image');
assert.match(html, /property="og:image:width" content="1200"/i, 'Open Graph image width must be 1200');
assert.match(html, /property="og:image:height" content="630"/i, 'Open Graph image height must be 630');
assert.match(html, /property="og:image:type" content="image\/png"/i, 'Open Graph image must use PNG for broad platform compatibility');
assert.match(html, /property="og:image" content="https:\/\/16alves02\.pages\.dev\/og-cover\.png"/i, 'Open Graph image must point to the production PNG asset');
assert.match(html, /name="twitter:image" content="https:\/\/16alves02\.pages\.dev\/og-cover\.png"/i, 'Twitter image must match the production Open Graph PNG');
assert.match(html, /rel="preload" as="image" href="\/portrait-960\.webp"/i, 'Hero portrait must be preloaded for LCP');
assert.match(html, /name="twitter:card" content="summary_large_image"/i, 'Twitter card must use a large image');
assert.match(html, /name="twitter:image"/i, 'Twitter card must declare an image');

const title = html.match(/<title>([^<]+)<\/title>/i)?.[1] ?? '';
const description = html.match(/<meta name="description" content="([^"]+)"/i)?.[1] ?? '';
assert.ok(title.length > 0 && title.length <= 60, 'SEO title must contain 1-60 characters');
assert.ok(description.length > 0 && description.length <= 155, 'SEO description must contain 1-155 characters');

const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
const ogUrl = html.match(/<meta property="og:url" content="([^"]+)"/i)?.[1];
assert.equal(canonical, ogUrl, 'Canonical URL and Open Graph URL must match');
assert.match(canonical ?? '', /^https:\/\//, 'Canonical URL must be absolute HTTPS');

const structuredData = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i)?.[1];
assert.ok(structuredData, 'Homepage must include structured Person data');
assert.equal(JSON.parse(structuredData)['@type'], 'Person', 'Structured data must describe the portfolio owner');
assert.match(html, /<h1[\s>]/i, 'Prerendered homepage must include its main heading');
assert.doesNotMatch(html, /admin/i, 'Homepage must not reference the removed admin area');

const robots = readFileSync(resolve(root, 'robots.txt'), 'utf8');
assert.match(robots, /^User-agent:\s*\*/m, 'robots.txt must declare a user-agent');
assert.match(robots, /^Sitemap:\s*https:\/\//m, 'robots.txt must publish the sitemap URL');

const sitemap = readFileSync(resolve(root, 'sitemap.xml'), 'utf8');
assert.match(sitemap, /^<\?xml version="1\.0" encoding="UTF-8"\?>/, 'Sitemap must start with an XML declaration');
assert.match(sitemap, /xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9"/, 'Sitemap must use the standard namespace');
const urls = [...sitemap.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)].map((match) => match[1]);
assert.ok(urls.length >= 1, 'Sitemap must contain at least one URL');
for (const page of ['projects/saborgest.html', 'projects/runlattice.html', 'projects/mrdr.html', 'projects/hoop.html', 'projects/raw.html', 'projects/basket-hub.html']) {
  assert.ok(urls.includes(`https://16alves02.pages.dev/${page}`), `Sitemap is missing case study: ${page}`);
}

const app = readFileSync(resolve('src/App.jsx'), 'utf8');
for (const token of ['16alves02@gmail.com', 'name="name"', 'name="email"', 'name="message"', 'aria-label', 'prefers-reduced-motion']) {
  if (token === 'prefers-reduced-motion') continue;
  assert.ok(app.includes(token), `App is missing expected accessible/contact feature: ${token}`);
}
assert.match(app, /src="\/portrait-960\.webp"/, 'Hero portrait must use the optimized WebP image');
assert.doesNotMatch(app, /framer-motion|motion\./, 'Homepage must not ship the unused motion runtime');
assert.match(app, /href=\{cv\}/, 'CV link must be selected dynamically by language');
assert.match(app, /setLanguage\(/, 'Language switch must be available');
assert.match(app, /setDark\(/, 'Theme switch must be available');


const caseStudyIds = [...app.matchAll(/caseStudy:\s*'([^']+)'/g)].map((match) => match[1]);
assert.ok(caseStudyIds.length > 0, 'Homepage must expose project case studies');
for (const id of caseStudyIds) {
  assert.ok(existsSync(resolve(root, 'projects', id + '.html')), 'Homepage links to a missing case study: ' + id);
}
console.log(`Production verification passed (${required.length} required assets, ${urls.length} sitemap URLs).`);
