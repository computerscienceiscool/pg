# TODO-pajah - Add shared Home links to all HTML pages

Add a consistent shared header so every page has an obvious route back to the
home page.

## Decision Intent Log

ID: DI-vuhor
Date: 2026-06-19 14:08:28
Status: active
Decision: Add shared Home navigation through a reusable `shared/site-header.js` custom element and mount it on every tracked HTML page.
Intent: Static and dynamically-rendered quiz pages should share one navigation implementation instead of accumulating repeated per-page header markup.
Constraints: Use a classic browser script so pages work when opened directly from disk. Do not use `fetch()` to load partial HTML. Keep the header outside dynamic quiz stage containers so rerenders do not remove it.
Affects: `shared/site-header.js`; `index.html`; `layperson.html`; `app-dev.html`; `kernel-dev.html`; `on-the-spot.html`; `on-the-spot-audio.html`; `dispatch.html`; `pg-note-dispatch.html`; `layperson-on-the-spot.html`.

## Subtasks

- [x] pajah.1 Add the shared site-header custom element.
- [x] pajah.2 Mount the header on every tracked HTML page.
- [x] pajah.3 Verify dynamic quiz and drill rerenders preserve the header.
