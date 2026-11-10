import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const portraitBase64 = await readFile(resolve(root, 'assets/leonardo-portrait.jpg.base64'), 'utf8');
await writeFile(resolve(root, 'dist/leonardo-portrait.jpg'), Buffer.from(portraitBase64.trim(), 'base64'));
const server = await createServer({
  configFile: resolve(root, 'vite.config.js'),
  root,
  server: { middlewareMode: true },
  appType: 'custom',
});

try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx');
  const markup = renderToString(createElement(App));
  const outputPath = resolve(root, 'dist/index.html');
  const document = await readFile(outputPath, 'utf8');
  const rootElement = '<div id="root"></div>';

  if (!document.includes(rootElement)) {
    throw new Error('Could not find the empty React root in dist/index.html');
  }

  let output = document.replace(rootElement, '<div id="root">' + markup + '</div>');
  const stylesheetLink = output.match(/<link\b(?=[^>]*\brel="stylesheet")(?=[^>]*\bhref="([^"]+)")[^>]*>/);

  if (stylesheetLink) {
    const stylesheetPath = resolve(root, 'dist', stylesheetLink[1].replace(/^\/+/, ''));
    const stylesheet = await readFile(stylesheetPath, 'utf8');
    output = output.replace(stylesheetLink[0], '<style>' + stylesheet + '</style>');
  }

  await writeFile(outputPath, output, 'utf8');
} finally {
  await server.close();
}
