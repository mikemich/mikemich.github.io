# cvweb

Personal website and CV for Michalis Michalopoulos, built with [Astro](https://astro.build) from the
"Personal Website" Figma design.

Live at **https://mikemich.github.io/**. Every push to `main` rebuilds and deploys the site with
GitHub Actions (`.github/workflows/deploy.yml`).

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Edit the content

| What | Where |
| --- | --- |
| Name, intro, email, GitHub/LinkedIn links, about, goals, experience, education, skills | `src/data/cv.ts` |
| Projects (one Markdown file each; the body is the project's detail page) | `src/content/projects/*.md` |
| Project cover images | `src/assets/projects/`, then set `cover:` in the project's frontmatter |
| Photos for the gallery (filename sets order and caption, e.g. `02-night-alley__maastricht.jpg` → "Night alley · Maastricht") | `src/assets/photos/` |
| Your photo (homepage intro + CV header) | save as `src/assets/profile.jpg`; delete it to hide |
| Colors, fonts, spacing | `src/styles/global.css` |

The printable CV at `/cv` is generated from the same data. Projects with `featured: true` appear
on it, along with their first three `highlights`. Open it and click **Download PDF** (or print to PDF).
Switch to **One page** (or open `/cv?mode=one-page`) for a single A4 page: top 3 projects, 2 bullets each.

To add a project, copy one of the existing files in `src/content/projects/`, rename it (the filename
becomes the URL), and edit the frontmatter. Set `draft: true` to hide one.
