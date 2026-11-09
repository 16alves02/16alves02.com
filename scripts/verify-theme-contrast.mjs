import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const activeStyles = readFileSync('src/portfolio.css', 'utf8');
const themeStyles = readFileSync('src/theme-contrast.css', 'utf8');

function rule(source, selector) {
  const start = source.indexOf(selector);
  assert.ok(start >= 0, `Missing CSS rule: ${selector}`);
  const open = source.indexOf('{', start);
  const close = source.indexOf('}', open);
  assert.ok(open >= 0 && close > open, `Invalid CSS rule: ${selector}`);
  return source.slice(open + 1, close);
}

function variable(source, name) {
  const match = source.match(new RegExp(name + ':\\s*(#[0-9a-f]{6})', 'i'));
  assert.ok(match, `Missing hex color token: ${name}`);
  return match[1];
}

function luminance(hex) {
  const channels = hex.slice(1).match(/.{2}/g).map((part) => parseInt(part, 16) / 255);
  const linear = channels.map((value) => (
    value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
  ));
  return linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722;
}

function contrast(foreground, background) {
  const values = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
}

function assertReadable(label, foreground, background) {
  const ratio = contrast(foreground, background);
  assert.ok(
    ratio >= 4.5,
    `${label} contrast is ${ratio.toFixed(2)}:1; expected at least 4.5:1`
  );
}

const lightBase = rule(activeStyles, '.site-shell');
const darkBase = rule(activeStyles, 'html[data-theme="dark"] .site-shell');
const lightTheme = rule(themeStyles, '.site-shell');
const darkTheme = rule(themeStyles, 'html[data-theme="dark"] .site-shell');

const lightAccent = variable(lightTheme, '--accent');
const darkAccent = variable(darkTheme, '--accent');
const lightFill = variable(lightTheme, '--accent-fill');
const darkFill = variable(darkTheme, '--accent-fill');
const lightFillText = variable(lightTheme, '--accent-on-fill');
const darkFillText = variable(darkTheme, '--accent-on-fill');
const onDarkAccent = variable(lightTheme, '--accent-on-dark');

for (const token of ['--page', '--page-alt', '--surface', '--surface-2']) {
  assertReadable(`Light theme ${token} accent text`, lightAccent, variable(lightBase, token));
  assertReadable(`Dark theme ${token} accent text`, darkAccent, variable(darkBase, token));
}

assertReadable('Light theme filled controls', lightFillText, lightFill);
assertReadable('Dark theme filled controls', darkFillText, darkFill);
assertReadable('Accent on the dark internship panel', onDarkAccent, '#201f1f');

assert.match(themeStyles, /\.site-shell \.about-section\s*\{[^}]*background:\s*var\(--page-alt\)/s);
assert.match(themeStyles, /\.site-shell \.education-card\s*\{[^}]*background:\s*var\(--surface\)/s);
assert.match(themeStyles, /\.site-shell \.header-contact,[\s\S]*?color:\s*var\(--accent-on-fill\)/);
assert.match(themeStyles, /\.site-shell \.button-dark,[\s\S]*?color:\s*var\(--accent-on-fill\)/);

for (const page of ['public/404.html', 'public/privacy.html', 'public/terms.html']) {
  const html = readFileSync(page, 'utf8');
  assert.match(html, /16alves02-theme/, `${page} must read the saved theme preference`);
  assert.match(html, /data-theme/, `${page} must apply its theme to the document`);
}

const immersiveStyles = readFileSync('src/immersive-3d.css', 'utf8');
const immersiveLight = rule(immersiveStyles, '.site-shell');
const immersiveDark = rule(immersiveStyles, 'html[data-theme="dark"] .site-shell');

const immersiveTokens = [
  ['Light accent', variable(immersiveLight, '--accent'), ['--page', '--page-alt']],
  ['Light signal', variable(immersiveLight, '--signal'), ['--page', '--page-alt']],
  ['Dark accent', variable(immersiveDark, '--accent'), ['--page', '--page-alt', '--surface-2']],
  ['Dark signal', variable(immersiveDark, '--signal'), ['--page', '--page-alt', '--surface-2']],
];

for (const [label, foreground, backgrounds] of immersiveTokens) {
  const theme = label.startsWith('Light') ? immersiveLight : immersiveDark;
  for (const background of backgrounds) {
    assertReadable(label + ' on ' + background, foreground, variable(theme, background));
  }
}

assertReadable('Light 3D theme filled button', '#ffffff', variable(immersiveLight, '--accent-fill'));
assertReadable('Dark 3D theme filled button', '#ffffff', variable(immersiveDark, '--accent-fill'));
assertReadable('Dark 3D theme filled button hover', '#ffffff', variable(immersiveDark, '--accent-hover'));
assertReadable('Internship callout body copy', '#becbd2', '#09121c');
assertReadable('Internship callout heading', '#f0f5f7', '#09121c');

const scene = readFileSync('src/components/Scene3D.jsx', 'utf8');
assert.match(scene, /getContext\('(2d|webgl|experimental-webgl)'/, 'The 3D scene must use a canvas or WebGL renderer');
assert.match(scene, /scene3d-poster/, 'The scene must include a static fallback poster');
assert.match(scene, /IntersectionObserver/, 'The scene must pause when outside the viewport');
assert.match(scene, /prefers-reduced-motion/, 'The scene must respect reduced-motion preferences');
assert.match(scene, /ResizeObserver/, 'The scene must respond to container size changes');
assert.match(scene, /webglcontextlost/, 'The scene must handle WebGL context loss');
assert.match(scene, /Math\.min\(window\.devicePixelRatio/, 'The renderer must cap device pixel ratio');
assert.match(immersiveStyles, /@media \(prefers-reduced-motion: reduce\)/, '3D hover effects must respect reduced motion');

console.log('Theme and 3D contrast verification passed (WCAG AA 4.5:1 for theme accents, signals and filled controls).');
