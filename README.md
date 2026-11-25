# Incash website redesign demo

A static Astro frontend for Incash’s Nigerian employee and employer journeys. It includes Salary Advance, Earned Wage Access, Salary Top-Up, Payroll Financing, Working Capital, and a public HR Tools catalogue with browser-based calculators. The Ask Incash and HR Letter Generator interfaces show their pre-integration states.

**Preview:** https://obicollins.github.io/incash-website-demo/

## Run locally

```sh
npm ci
npm run dev
npm run build
```

The production build generates static files in `dist/`. To prepare the GitHub Pages project-site copy, run `node scripts/prepare-pages.mjs /incash-website-demo pages-output` after building. Publish the output from the root of the `gh-pages` branch. This step prefixes local URLs and marks the demo as noindex to distinguish it from the production website.
