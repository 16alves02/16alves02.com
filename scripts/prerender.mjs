import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
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

  await writeFile(
    outputPath,
    document.replace(rootElement, '<div id="root">' + markup + '</div>'),
    'utf8',
  );
} finally {
  await server.close();
}
