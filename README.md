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
