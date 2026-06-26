# TODO-buvag - Give pg-note-dispatch per-tab color identity

The live dispatch demo currently uses one fixed palette, so two copies of the
same page can look indistinguishable in separate browser tabs. Track a small UI
change so each tab can carry its own visible color identity.

## Decision Intent Log

ID: DI-buvag
Date: 2026-06-26 00:00:00
Status: active
Decision: Add per-tab theme controls to `pg-note-dispatch.html`, backed by tab-scoped browser state, along with a visible banner and browser `theme-color` cue.
Intent: When two copies of the live dispatch demo are open at once, the reader should be able to make them look obviously different without changing the explainer page or introducing cross-tab coupling.
Constraints: Keep the behavior local to `pg-note-dispatch.html`. Theme choice must be independent per browser tab, not shared across all copies. Preserve the demo's existing dispatch behavior and terminology.
Affects: `pg-note-dispatch.html`.

## Notes

- `sessionStorage` is the right scope here because it is tab-local rather than
  shared across every copy of the page.
- A visible in-page marker matters more than subtle palette shifts alone.

## Subtasks

- [x] buvag.1 Add a visible tab-identity marker to `pg-note-dispatch.html`.
- [x] buvag.2 Store theme choice in per-tab browser state so separate tabs can diverge.
- [x] buvag.3 Update the browser-facing cues such as page title and `theme-color`.
