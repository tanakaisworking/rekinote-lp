# rekinote-lp

Reki note LP for Cloudflare Pages.

## Stack

- Next.js 14 App Router
- Static export via `next build`
- Cloudflare Pages hosting
- `trailingSlash: true`

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3002`.

## Build

```bash
npm run build
```

Static files are exported to `out/`.

## Cloudflare Pages

This project is deployed from `main`.

Recommended Pages settings:

- Production branch: `main`
- Root directory: `app`
- Build command: `npm run build`
- Build output directory: `out`
- Node version: `20`

Routing assumptions:

- `/` redirects to `/ja/lp/`
- `/ja/lp/` serves Japanese LP
- `/en/lp/` serves English LP
- `public/_redirects` is required for Cloudflare routing

## Why The Root Page Has A Fallback

`app/page.tsx` includes a `meta refresh` fallback in addition to Cloudflare redirects.

Reason:

- Cloudflare static hosting may still serve generated `index.html`
- if server-side redirect output leaks into static artifacts, users can get a blank screen
- the fallback makes `/` move to `/ja/lp/` even if edge redirect behavior is inconsistent

## Smoke Check

Local:

```bash
npm run smoke
```

Production:

```bash
npm run smoke:prod
```

Custom host:

```bash
bash ./scripts/smoke-check.sh https://example.com
```

The smoke check validates:

- `/` redirects or lands correctly
- `/ja/lp/` returns expected content
- `/en/lp/` returns expected content
- static assets are referenced correctly
- localized primary CTA text is present

## Release Checklist

Before push:

1. `npm run build`
2. `npm run smoke`

After production deploy:

1. Open `/`
2. Open `/ja/lp/`
3. Open `/en/lp/`
4. Confirm language toggle works both ways
5. Confirm no blank screen
6. Confirm browser console has no fatal errors

## Incident Note

2026-05-02:

- `/ja/lp/` and `/en/lp/` had duplicate route definitions under both `[lang]/lp` and fixed `ja/en` paths
- the static export picked up redirect-shaped output for the fixed routes
- Cloudflare then served HTML containing `NEXT_REDIRECT`, which caused the black screen

Fix:

- keep LP routes only under `app/[lang]/lp/page.tsx`
- remove duplicate `ja/en` LP pages and layouts
- keep a static fallback on `/`
