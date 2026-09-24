import { copyFile, cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const clientDir = path.resolve('dist/client');
const directionsDir = path.join(clientDir, 'directions');
const nestedAssetsDir = path.join(clientDir, 'YLand', '_next');
const publicAssetsDir = path.join(clientDir, '_next');

if (process.env.GITHUB_PAGES === 'true') {
  // Vinext writes assetPrefix into the output path. GitHub Pages already mounts
  // the artifact at /YLand, so flatten the generated asset directory once.
  await cp(nestedAssetsDir, publicAssetsDir, { recursive: true });
  await rm(path.join(clientDir, 'YLand'), { recursive: true, force: true });

  // Keep build manifests aligned with the flattened physical asset directory.
  for (const manifestPath of [
    path.join(clientDir, '.vite', 'manifest.json'),
    path.join(clientDir, 'vinext-client-entry-manifest.json'),
  ]) {
    const manifest = await readFile(manifestPath, 'utf8');
    await writeFile(manifestPath, manifest.replaceAll('YLand/_next/', '_next/'));
  }
}

for (const entry of await readdir(directionsDir, { withFileTypes: true })) {
  if (!entry.isFile() || !entry.name.endsWith('.html')) {
    continue;
  }

  const slug = entry.name.slice(0, -'.html'.length);
  const routeDir = path.join(directionsDir, slug);
  await mkdir(routeDir, { recursive: true });
  await copyFile(path.join(directionsDir, entry.name), path.join(routeDir, 'index.html'));
  await rm(path.join(directionsDir, entry.name));
}

await writeFile(path.join(clientDir, '.nojekyll'), '');
