import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each project is a Markdown file in src/content/projects.
// The frontmatter drives the homepage card; the body is the project breakdown page.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      year: z.string().optional(),
      // Context shown on the card and CV, e.g. "Bachelor End Project" or "TU/e group project".
      context: z.string().optional(),
      tags: z.array(z.string()).default([]),
      // Key results, shown as a highlight strip on the project page and as bullets on the CV.
      highlights: z.array(z.string()).default([]),
      // What you personally did, shown as "My contribution" on the project page and CV. Matters most for team projects.
      role: z.string().optional(),
      // Featured projects appear on the printable CV page.
      featured: z.boolean().default(false),
      // Put images in src/assets/projects and reference them relatively, e.g. ../../assets/projects/foo.jpg
      cover: image().optional(),
      link: z.url().optional(),
      repo: z.url().optional(),
      // Lower numbers show first on the homepage.
      order: z.number().default(99),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
