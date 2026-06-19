# TODO-nugog - Add layperson On the Spot module

Create a dedicated recall drill for only the Level 1 layperson concepts.

## Decision Intent Log

ID: DI-jizul
Date: 2026-06-19 14:08:28
Status: active
Decision: Add `layperson-on-the-spot.html` as a dedicated layperson-only recall drill, reusing the current On the Spot interaction pattern and linking it from `index.html`.
Intent: New readers should be able to rehearse plain-English PromiseGrid explanations without being mixed into App Dev or Kernel Dev prompts.
Constraints: Keep the page standalone and usable from `file://`. Preserve the current browser-storage fallback pattern. Do not remove the all-level `on-the-spot.html` drill.
Affects: `layperson-on-the-spot.html`; `index.html`.

## Subtasks

- [x] nugog.1 Create the layperson-only drill page.
- [x] nugog.2 Link the new drill from the home page.
- [x] nugog.3 Verify retention/progress behavior stays local to the new page.
