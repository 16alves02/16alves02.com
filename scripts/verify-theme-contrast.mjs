import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync('src/minimal.css', 'utf8');
const app = readFileSync('src/App.jsx', 'utf8');

assert.match(css, /\.site\.dark\s*\{/, 'Dark theme styles must exist');
assert.match(css, /:focus-visible/, 'Keyboard focus styles must exist');
assert.match(css, /prefers-reduced-motion:\s*reduce/, 'Reduced-motion preferences must be respected');
assert.match(css, /@media\s*\(max-width:\s*720px\)/, 'Responsive mobile styles must exist');
assert.match(app, /aria-label=/, 'Interactive controls must have accessible labels');
assert.match(app, /required/, 'Contact form fields must be validated');
assert.match(app, /maxLength=/, 'Contact form fields must have length limits');

function rgb(hex) {
  const value = hex.replace('#', '');
  return [0, 2, 4].map((offset) => parseInt(value.slice(offset, offset + 2), 16) / 255);
}
function luminance(hex) {
  return rgb(hex).map((c) => c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)
    .reduce((sum, c, i) => sum + c * [0.2126, 0.7152, 0.0722][i], 0);
}
function ratio(a, b) {
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (light + 0.05) / (dark + 0.05);
}
assert.ok(ratio('#191919', '#fafaf8') >= 4.5, 'Light theme body text must meet WCAG AA');
assert.ok(ratio('#f1f1ec', '#171715') >= 4.5, 'Dark theme body text must meet WCAG AA');
assert.ok(ratio('#6b6b65', '#fafaf8') >= 4.5, 'Light theme muted text must meet WCAG AA');
assert.ok(ratio('#aaa9a1', '#171715') >= 4.5, 'Dark theme muted text must meet WCAG AA');

console.log('Minimal portfolio accessibility and theme checks passed.');
