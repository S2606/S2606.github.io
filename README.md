# shagunkhemka

Personal site of Shagun Khemka. Built with [Astro](https://astro.build) and deployed to GitHub Pages on every push to `main`.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Edit content

- `src/pages/index.astro`: intro, experience, projects
- `src/pages/background.astro`: open source, education, certifications
- `src/pages/contact.astro`: contact cards
- `public/resume.pdf`: the downloadable résumé

## Analytics (optional)

Create a Cloudflare Web Analytics site and save its token as the repository variable `CF_BEACON_TOKEN`. The beacon is only included when the variable is set.

## Custom domain

Add the domain in the repository's Pages settings, then set `site` in `astro.config.mjs` and the sitemap URL in `public/robots.txt` to the new domain.
