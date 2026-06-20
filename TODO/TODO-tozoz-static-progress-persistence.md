# TODO-tozoz - Make lesson and drill progress persist on a normal static host

The lesson and drill pages currently rely on a nonstandard `window.storage`
API, then fall back to in-memory state that disappears on reload. Track a fix
so browser-local progress actually persists on a normal static site.

## Decision Intent Log

ID: DI-tozoz
Date: 2026-06-20 00:00:00
Status: active
Decision: Add a focused TODO for static-site progress persistence across the lesson and drill pages.
Intent: The home page says progress is saved in the browser, but the current fallback path only keeps state in memory for the current page session. Readers should not lose progress on reload when running the site as ordinary static HTML.
Constraints: Keep the site standalone and `file://` friendly. Prefer standard browser storage with graceful fallback behavior. Preserve existing per-page state shapes unless there is a clear simplification path.
Affects: `layperson.html`; `app-dev.html`; `kernel-dev.html`; `on-the-spot.html`; `layperson-on-the-spot.html`; possibly `index.html` if any explanatory copy changes.

## Notes

- Current pages use `window.storage` when present.
- When `window.storage` is absent, they fall back to in-memory objects such as `memoryFallback` or `mem`.
- That means progress vanishes on reload on a normal static host.

## Subtasks

- [ ] tozoz.1 Inventory each page's current persistence key and state shape.
- [ ] tozoz.2 Replace the in-memory fallback with standard browser-local persistence.
- [ ] tozoz.3 Verify reload persistence on the three lesson pages and the two manual drill pages.
- [ ] tozoz.4 Recheck the home-page wording so it matches the implemented behavior exactly.
