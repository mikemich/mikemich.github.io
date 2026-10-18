import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// A small hand-written sitemap, so search engines find every project page.
export const GET: APIRoute = async ({ site }) => {
  const projects = await getCollection('projects', ({ data }) => !data.draft);
  // Trailing slashes match how GitHub Pages serves the built directories (and the canonical links).
  const paths = ['/', '/cv/', '/photography/', ...projects.map((p) => `/projects/${p.id}/`)];
  const urls = paths.map((p) => `  <url><loc>${new URL(p, site).href}</loc></url>`).join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
