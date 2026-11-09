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
  'logo.png',
  'site.webmanifest',
];

for (const file of required) {
  assert.ok(existsSync(resolve(root, file)), `Missing production asset: ${file}`);
}

const html = readFileSync(resolve(root, 'index.html'), 'utf8');
assert.match(html, /<title>[^<]+<\/title>/i, 'Homepage must have a title');
assert.match(html, /<meta name="description" content="[^"]+"/i, 'Homepage must have a meta description');
assert.match(html, /rel="canonical"/i, 'Homepage must have a canonical URL');
assert.match(html, /rel="manifest" href="\/site\.webmanifest"/i, 'Homepage must link the web manifest');

const robots = readFileSync(resolve(root, 'robots.txt'), 'utf8');
assert.match(robots, /^User-agent:\s*\*/m, 'robots.txt must declare a user-agent');
assert.match(robots, /^Sitemap:\s*https:\/\//m, 'robots.txt must publish the sitemap URL');

const sitemap = readFileSync(resolve(root, 'sitemap.xml'), 'utf8');
assert.match(sitemap, /^<\?xml version="1\.0" encoding="UTF-8"\?>/, 'Sitemap must start with an XML declaration');
assert.match(sitemap, /xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9"/, 'Sitemap must use the standard namespace');
const urls = [...sitemap.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)].map((match) => match[1]);
assert.ok(urls.length >= 1, 'Sitemap must contain at least one URL');
for (const url of urls) {
  const pathname = new URL(url).pathname;
  const target = pathname === '/' ? 'index.html' : pathname.replace(/^\//, '');
  assert.ok(existsSync(resolve(root, target)), `Sitemap URL has no matching production file: ${url}`);
}

const privacy = readFileSync(resolve(root, 'privacy.html'), 'utf8');
const terms = readFileSync(resolve(root, 'terms.html'), 'utf8');
assert.match(privacy, /<title>Política de Privacidade/i);
assert.match(terms, /<title>Termos de Utilização/i);

const notFound = readFileSync(resolve(root, '404.html'), 'utf8');
assert.match(notFound, /name="robots" content="noindex, follow"/i, '404 page must not be indexed');

console.log(`Production asset verification passed (${required.length} required assets, ${urls.length} sitemap URLs).`);
