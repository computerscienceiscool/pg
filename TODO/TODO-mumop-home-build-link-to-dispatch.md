# TODO-mumop - Point the home build card at dispatch instead of recognition

Correct the home page so the build-experiment card links to the intended
dispatch explainer or demo target instead of `recognition.html`.

## Decision Intent Log

ID: DI-vusak
Date: 2026-06-19 20:27:35
Status: active
Decision: Log the home-page build-link mismatch as a navigation bug and verify the intended destination before changing the card target.
Intent: The user reported that the main page currently links to `recognition` when it should link to `dispatch`, so the home page is sending readers to the wrong artifact.
Constraints: Double-check whether the intended target is `dispatch.html` or `pg-note-dispatch.html` before editing, because both dispatch-related pages exist and describe related behavior.
Affects: `index.html`; potentially `dispatch.html`; potentially `pg-note-dispatch.html`.

ID: DI-nodig
Date: 2026-06-19 20:28:48
Status: active
Decision: Point the explainer-style build card on the home page to `dispatch.html`, leaving the live-demo card pointed at `pg-note-dispatch.html`.
Intent: The home page should expose both the explainer and the live demo, not link the explainer card to a missing or obsolete `recognition.html`.
Constraints: Keep the second card as the live demo so the two build cards remain complementary rather than redundant.
Affects: `index.html`.

## Observed Behavior

- `index.html` currently includes a build card linking to `recognition.html`.
- The user says that link should point to dispatch instead.
- The repo currently has both `dispatch.html` and `pg-note-dispatch.html`, so the fix should confirm which one is intended before updating the home page.

## Subtasks

- [ ] mumop.1 Confirm whether the build card should link to `dispatch.html` or `pg-note-dispatch.html`.
- [ ] mumop.2 Update the home-page card target and any nearby copy that describes the destination.
- [ ] mumop.3 Verify the remaining build card still points to the other intended artifact, so the two cards are not redundant or swapped accidentally.
