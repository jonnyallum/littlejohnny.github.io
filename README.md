# Little Jonny's Catering

A static, single-page site for Little Jonny's hog roast, pizza van, mobile bar, buffets, and personal chef services.

## Running locally

```bash
python -m http.server 8000
```

Then browse to http://localhost:8000.

## Customising
- Update contact details, bio, and menu copy in `index.html`.
- Swap the Google Sheet link in the booking section with your live schedule URL.
- Replace the gallery SVGs in `/images` with your own event photos (keep filenames or update `index.html`).
- Update payment links (e.g., Stripe) in the hog roast and menu call-to-actions.
- QR code uses `https://wa.me/447723959178`—change the number or destination to suit.
- Edit the flyer-style price list and order form selections in `index.html` to tweak packages or pricing; the mailto logic will auto-fill chosen items.
# Little Jonnys Catering Site

A refreshed single-page site for Little Jonnys that spotlights wedding, wake, corporate and private event catering across Hampshire and West Sussex.

## Structure
- `index.html` – content and section layout for Home, About, Services, Weddings, Wakes, Corporate and Book Now.
- `style.css` – typography, layout and responsive styling.
- `script.js` – navigation toggle, smooth scrolling and booking form handling with a Stripe payment link hand-off placeholder.

## Running locally / previewing
Quick preview:
- Run `./preview.sh` (or `PORT=3000 ./preview.sh` if you prefer another port).
- Then open `http://localhost:8000` (or your chosen port) in your browser.

Alternatively, open `index.html` directly in your browser or serve the folder with any static server, e.g. `python -m http.server`.

## Running locally
Open `index.html` directly in your browser or serve the folder with any static server (for example `python -m http.server`).

## Stripe hand-off
Replace the `STRIPE_PAYMENT_LINK` and publishable key in `script.js` with your live Stripe details. For full Checkout sessions, wire the commented fetch call to your backend endpoint that returns a `sessionId`.
