import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync('src/styles/global.css', 'utf8');
const app = readFileSync('src/App.jsx', 'utf8');

assert.match(css, /\.site\.dark\s*\{/, 'Dark theme styles must exist');
assert.match(css, /:focus-visible/, 'Keyboard focus styles must exist');
assert.match(css, /prefers-reduced-motion:\s*reduce/, 'Reduced-motion preferences must be respected');
assert.match(css, /@media\s*\(max-width:\s*720px\)/, 'Responsive mobile styles must exist');
assert.match(app, /aria-label=/, 'Interactive controls must have accessible labels');
assert.match(app, /required/, 'Contact form fields must be validated');
assert.match(app, /maxLength=/, 'Contact form fields must have length limits');

function blockFor(selector) {
  const index = css.indexOf(selector);
  assert.notEqual(index, -1, `Missing CSS selector: ${selector}`);
  const start = css.indexOf('{', index);
  const end = css.indexOf('}', start);
  assert.ok(start !== -1 && end !== -1, `Invalid CSS block: ${selector}`);
  return css.slice(start + 1, end);
}

function variable(block, name) {
  const match = block.match(new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{6})`));
  assert.ok(match, `Missing --${name} color token`);
  return match[1];
}

function rgb(hex) {
  const value = hex.replace('#', '');
  return [0, 2, 4].map((offset) => parseInt(value.slice(offset, offset + 2), 16) / 255);
}

function luminance(hex) {
  return rgb(hex)
    .map((channel) => channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4)
    .reduce((sum, channel, index) => sum + channel * [0.2126, 0.7152, 0.0722][index], 0);
}

function contrast(first, second) {
  const [light, dark] = [luminance(first), luminance(second)].sort((a, b) => b - a);
  return (light + 0.05) / (dark + 0.05);
}

const light = blockFor('.site{');
const dark = blockFor('.site.dark{');

for (const [name, theme] of [['light', light], ['dark', dark]]) {
  const background = variable(theme, 'bg');
  const text = variable(theme, 'text');
  const muted = variable(theme, 'muted');

  assert.ok(contrast(text, background) >= 4.5, `${name} theme body text must meet WCAG AA`);
  assert.ok(contrast(muted, background) >= 4.5, `${name} theme muted text must meet WCAG AA`);
}

const allAccentTokens = [...css.matchAll(/--accent:\s*(#[0-9a-fA-F]{6})/g)].map((match) => match[1]);
assert.ok(allAccentTokens.length > 0, 'At least one accent token must be defined');
for (const accent of allAccentTokens) {
  assert.ok(contrast('#FFFFFF', accent) >= 4.5, `White text on accent ${accent} must meet WCAG AA`);
  assert.ok(contrast(accent, '#FDFDF1') >= 3, `Accent ${accent} must meet 3:1 contrast on light surfaces`);
  assert.ok(contrast(accent, '#02020E') >= 3, `Accent ${accent} must meet 3:1 contrast on dark surfaces`);
}

console.log(`Theme contrast checks passed across ${allAccentTokens.length} accent declarations and both themes.`);
