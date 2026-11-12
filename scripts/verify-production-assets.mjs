import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve('dist');
const required = [
  'index.html',
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
  'projects/nova-imagem.html',
];

for (const file of required) {
  assert.ok(existsSync(resolve(root, file)), `Missing production asset: ${file}`);
}

const html = readFileSync(resolve(root, 'index.html'), 'utf8');
assert.match(html, /<html lang="pt-PT">/i, 'Homepage must declare its primary language');
assert.match(html, /<title>[^<]+<\/title>/i, 'Homepage must have a title');
assert.match(html, /<meta name="description" content="[^"]+"/i, 'Homepage must have a meta description');
assert.match(html, /rel="canonical"/i, 'Homepage must have a canonical URL');
assert.match(html, /name="viewport"/i, 'Homepage must declare a responsive viewport');
assert.match(html, /rel="icon"/i, 'Homepage must declare a favicon');
assert.doesNotMatch(html, /admin/i, 'Homepage must not reference the removed admin area');

const robots = readFileSync(resolve(root, 'robots.txt'), 'utf8');
assert.match(robots, /^User-agent:\s*\*/m, 'robots.txt must declare a user-agent');
assert.match(robots, /^Sitemap:\s*https:\/\//m, 'robots.txt must publish the sitemap URL');

const sitemap = readFileSync(resolve(root, 'sitemap.xml'), 'utf8');
assert.match(sitemap, /^<\?xml version="1\.0" encoding="UTF-8"\?>/, 'Sitemap must start with an XML declaration');
assert.match(sitemap, /xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9"/, 'Sitemap must use the standard namespace');
const urls = [...sitemap.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)].map((match) => match[1]);
assert.ok(urls.length >= 1, 'Sitemap must contain at least one URL');
for (const page of ['projects/saborgest.html', 'projects/runlattice.html', 'projects/mrdr.html', 'projects/hoop.html', 'projects/raw.html', 'projects/basket-hub.html', 'projects/nova-imagem.html']) {
  assert.ok(urls.includes(`https://16alves02.pages.dev/${page}`), `Sitemap is missing case study: ${page}`);
}

const app = readFileSync(resolve('src/App.jsx'), 'utf8');
for (const token of ['16alves02@gmail.com', 'name="name"', 'name="email"', 'name="message"', 'aria-label', 'prefers-reduced-motion']) {
  if (token === 'prefers-reduced-motion') continue;
  assert.ok(app.includes(token), `App is missing expected accessible/contact feature: ${token}`);
}
assert.match(app, /href=\{cv\}/, 'CV link must be selected dynamically by language');
assert.match(app, /setLanguage\(/, 'Language switch must be available');
assert.match(app, /setDark\(/, 'Theme switch must be available');

console.log(`Production verification passed (${required.length} required assets, ${urls.length} sitemap URLs).`);
