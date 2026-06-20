# TODO-nukov - Add full HTML document wrappers to the static site pages

Most pages in the site still start as HTML fragments rather than complete HTML
documents. Track a cleanup pass that adds `<!DOCTYPE html>` and normal document
wrappers so the pages do not risk quirks-mode rendering.

## Decision Intent Log

ID: DI-nukov
Date: 2026-06-20 00:00:00
Status: active
Decision: Add a focused TODO for converting the fragment-style pages into full HTML documents.
Intent: The dispatch pages already use full document wrappers, but most lesson, drill, and vocabulary pages begin directly with meta tags and styles. That can produce cross-browser rendering differences and makes the site feel less intentionally structured.
Constraints: Preserve the current standalone-file architecture and current page behavior. Keep the edits mechanical where possible, without restructuring the inline scripts and styles unless necessary.
Affects: `index.html`; `layperson.html`; `app-dev.html`; `kernel-dev.html`; `on-the-spot.html`; `layperson-on-the-spot.html`; `on-the-spot-audio.html`; `promise-language.html`.

## Notes

- `dispatch.html` and `pg-note-dispatch.html` already use full HTML document wrappers.
- The remaining pages should be aligned to that baseline.

## Subtasks

- [ ] nukov.1 Add `<!DOCTYPE html>` and normal `<html>`, `<head>`, and `<body>` wrappers to the remaining fragment-style pages.
- [ ] nukov.2 Verify the shared header and inline scripts still mount correctly after the wrapper change.
- [ ] nukov.3 Recheck browser layout on desktop and mobile after the wrapper pass.
