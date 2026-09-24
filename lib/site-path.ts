const githubPagesBase = process.env.GITHUB_PAGES === 'true' ? '/YLand' : '';

export function sitePath(path: string) {
  if (path === '/') {
    return `${githubPagesBase}/`;
  }

  return `${githubPagesBase}${path}`;
}
