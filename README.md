# Little Jonnys Catering Site

A refreshed single-page site for Little Jonnys that spotlights wedding, wake, corporate and private event catering across Hampshire and West Sussex.

## Structure
- `index.html` – content and section layout for Home, About, Services, Weddings, Wakes, Corporate and Book Now.
- `style.css` – typography, layout and responsive styling.
- `script.js` – navigation toggle, smooth scrolling and booking form handling with a Stripe payment link hand-off placeholder.

## Running locally / previewing
Quick preview locally:
- Run `./preview.sh` (or `PORT=3000 ./preview.sh` if you prefer another port).
- Then open `http://localhost:8000` (or your chosen port) in your browser.

Alternatively, open `index.html` directly in your browser or serve the folder with any static server, e.g. `python -m http.server`.

Live GitHub Pages URL (once Pages is enabled on `main`):
- `https://littlejohnny.github.io/`

If you type `https://littlejonnys.github.io/` (extra “s”), GitHub will return 404 because that belongs to a different account. Double-check the exact URL in Settings → Pages.


## Running locally / previewing
Quick preview:
- Run `./preview.sh` (or `PORT=3000 ./preview.sh` if you prefer another port).
- Then open `http://localhost:8000` (or your chosen port) in your browser.

Alternatively, open `index.html` directly in your browser or serve the folder with any static server, e.g. `python -m http.server`.

## Running locally
Open `index.html` directly in your browser or serve the folder with any static server (for example `python -m http.server`).

## Stripe hand-off
Replace the `STRIPE_PAYMENT_LINK` and publishable key in `script.js` with your live Stripe details. For full Checkout sessions, wire the commented fetch call to your backend endpoint that returns a `sessionId`.
