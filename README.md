# Little Jonnys Catering Site

A refreshed single-page site for Little Jonnys that spotlights wedding, wake, corporate and private event catering across Hampshire and West Sussex.

## Structure
- `index.html` – content and section layout for Home, About, Services, Weddings, Wakes, Corporate and Book Now.
- `style.css` – typography, layout and responsive styling.
- `script.js` – navigation toggle, smooth scrolling and booking form handling with a Stripe payment link hand-off placeholder.

## Running locally
Open `index.html` directly in your browser or serve the folder with any static server (for example `python -m http.server`).

## Stripe hand-off
Replace the `STRIPE_PAYMENT_LINK` and publishable key in `script.js` with your live Stripe details. For full Checkout sessions, wire the commented fetch call to your backend endpoint that returns a `sessionId`.
