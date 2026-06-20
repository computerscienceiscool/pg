# TODO-gimuh - Make the plain-English drill export only its 9 prompts

Fix the `copy answer sheet` export on `layperson-on-the-spot.html` so it copies
only the nine layperson prompts instead of all 35 prompts from the shared drill
data.

## Decision Intent Log

ID: DI-fubal
Date: 2026-06-19 20:27:35
Status: active
Decision: Track the layperson drill export as a regression bug against the new copy-answer-sheet feature, because the page promise is 9 prompts but the current export copies 35.
Intent: The layperson-only drill should export exactly what the page is for: the Level 1 prompt set. Copying all 35 prompts breaks the page contract and makes the study sheet misleading.
Constraints: Preserve the current shared `CONCEPTS` data approach unless there is a compelling reason to split the arrays. Keep the export plain-text and `file://` friendly.
Affects: `layperson-on-the-spot.html`; possibly related export helper logic on other drill pages.

ID: DI-sanus
Date: 2026-06-19 20:28:48
Status: active
Decision: Make drill-page exports respect the page's active prompt scope, using the same level-filter logic that drives the visible drill rather than the raw `CONCEPTS` array length.
Intent: The layperson drill must export only its nine visible prompts, and the all-level/manual/audio drill pages should align export scope with their current filter state for consistency.
Constraints: Keep the shared prompt arrays and derive scope at export time instead of duplicating the prompt data.
Affects: `layperson-on-the-spot.html`; `on-the-spot.html`; `on-the-spot-audio.html`.

## Observed Behavior

- The page says `9 layperson prompts`.
- The current `copy answer sheet` output reportedly includes 35 prompts.
- The page keeps a shared all-level `CONCEPTS` array while filtering the active drill to Level 1, so the export likely ignores the page's effective prompt scope.

## Subtasks

- [x] gimuh.1 Reproduce the copied output and confirm whether all 35 prompts are exported.
- [x] gimuh.2 Fix the export to respect the layperson-only scope instead of the raw full `CONCEPTS` length.
- [x] gimuh.3 Verify the other drill exports still copy the intended scope after the fix.
