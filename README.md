# Velmoraine Villa

A Vite-powered static experience for the Velmoraine Villa scroll-world presentation.

## Requirements

- Node.js 18 or newer
- npm 9 or newer

## Reproducible local verification

Install the lockfile without lifecycle scripts, then run the offline smoke test and production build:

```bash
npm ci --ignore-scripts
npm test
npm run build
```

`npm test` validates the module entrypoint, required DOM hooks, all 100 local hero-sequence frames, `noopener` on `_blank` links, and the absence of obvious credential assignments in application source. It does not contact production services.

Run the local development server with `npm run dev`; the site is otherwise static and uses only bundled assets plus Google Fonts loaded by the browser.