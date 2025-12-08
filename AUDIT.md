# Deployment & Preview Audit

## Why the site may not appear on GitHub Pages
- The repository name here is `littlejohnny.github.io`, so GitHub Pages will publish to `https://littlejohnny.github.io/` by default. Visiting `https://littlejonnys.github.io/` (with an extra “s”) will 404 because that URL would require a different GitHub account/repo name. Update bookmarks/links to the exact repo name.
- Confirm Pages is enabled: in **Settings → Pages**, set **Source** to `Deploy from a branch` and **Branch** to `main` (root). Without this toggle the site won’t publish even though the files are present.

## Code health
- The site is a static single page (`index.html`, `style.css`, `script.js`) with only external assets (fonts, Stripe JS, hosted images). All assets are loaded over HTTPS so there are no mixed-content blocks on GitHub Pages.
- Navigation, smooth scrolling and form handling run without build tooling. There are no missing asset paths or absolute URLs that would break on GitHub Pages.
- Stripe is optional and currently uses placeholder keys and links; this does not block rendering. Replace the placeholders when ready to take payments.

## Quick checks run
- Opened `index.html`, `style.css`, and `script.js` to verify relative paths, external assets and JS hooks. No broken references were found.
- Confirmed there are no repository-level `AGENTS.md` or extra configuration files that could interfere with Pages.

## Next steps
1. Enable GitHub Pages for `main` (root) and use `https://littlejohnny.github.io/` as the canonical preview URL.
2. If you need a custom domain, add a `CNAME` via Pages settings and place the generated `CNAME` file in the repo root.
3. Swap in live Stripe publishable key and payment link when ready to accept online payments.
