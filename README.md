# Mangomix website (demo mockup)

Free mockup for Mangomix, a Colombian fruit bar in Tampa Bay (Instagram @mangomix_).
Plain HTML, CSS and JavaScript. No build step, no framework. Open `index.html` in a browser to run it.

## Files

```
index.html              page structure and all sections
css/style.css           all styling (colours and fonts at the top, in :root)
js/app.js               menu data, prices, translations, cup builder, mood picker, demo ordering
assets/img/             web-ready images used by the site (die-cut stickers + founder photo)
assets/source/          bigger source images, for re-cutting or re-exporting
```

## Everything is DEMO

- **Ordering:** add to order, cart, pickup location, pickup time, name and phone, confirmation screen.
  Nothing is sent anywhere and nothing is charged. The order number is random.
  To make it real: connect `placeBtn` in `js/app.js` (function `renderDrawer`) to a real ordering
  backend (Square, Toast, Clover, or a Google Sheet + Apps Script like our other dashboards).
- **Prices are placeholders.** Edit `p:` on each item in `FAVS`, `MENU` and `EXTRA` in `js/app.js`.
  Cup builder price is in `cupPrice()`. Sales tax is set to 7.5% (Tampa) in `totals()`.
- **No outside links.** Directions and Instagram buttons were replaced with "Pick up here" and
  "Start a pickup order", which open the order panel. Add real links back when going live.
- **Opening hours are not on the site.** We could not find them publicly.

## Things to confirm with the owner

1. Real prices and full menu (their English and Spanish menus are in their Instagram story highlights).
2. Opening hours for both locations.
3. Fruit and topping options in the cup builder (`FRUITS` and `TOPS` in `js/app.js`).
4. Permission to use their Instagram photos, and ideally the original photo files.
5. Item descriptions were written by us from standard Colombian recipes. Check wording.
6. Founder name, if they want it shown (section "¡Mira ve!").

## Photos

- From the Mangomix Instagram. Mango cup, açaí, sandía con mango and chocolate shake are full-size originals.
- Fresas con crema, piña loca and the founder photo only exist as small video covers, so they were
  AI-upscaled (`*-ai-upscaled.jpg`). The founder photo is still a bit soft: replace when the owner sends originals.
- Fresas con crema and piña loca came from Halloween posts. Backgrounds were removed.
- Stickers have a cream outline baked into the image. To make new ones: remove background, add a
  cream (#FFF4D6) outline about 24px wide, export as .webp around 1100px tall.

## Facts used on the site

- Two locations: 6804 N Armenia Ave, Tampa FL and KRATE at The Grove, 5903 Goldview Pkwy, Wesley Chapel FL.
- "Since 2017": printed on their cups ("EST. 2017").
- "Top 3 Tampa 2026" badge: from their own Instagram post of a BusinessRate award.
- Dogs on the patio and the Jenga table: from public reviews.

## Design rules (keep these when redeveloping)

- Colours, each with one job:
  - `#FFB21E` mango: light section background
  - `#0E3B22` green: dark section background and text on mango
  - `#A6E03D` lime: big headline words on green only
  - `#FFF4D6` cream: small text on green
  - `#D9361F` chili: buttons only
- Font: Bricolage Grotesque (Google Fonts). Headlines at weight 800, condensed, uppercase, tight line-height.
  Leckerli One is used only for the "Mangomix" wordmark.
- No drop shadows. Buttons and chips are full pills, everything else has square corners.
- One animation only: stickers "slap" onto the hero on page load.
- English / Spanish switch: all text lives in the `T` object in `js/app.js` (`en` and `es`).
- Includes Terms and Privacy pages (open from the footer), plus loading placeholders for the menu.

## Deploy

Drag the whole folder into a new Vercel project (or push to GitHub and import). No settings needed.
