# TODO-saviz - Fix the broken pressure timer on On the Spot

Investigate why the `pressure timer` control on `on-the-spot.html` is not
behaving correctly during the all-level recall drill.

## Decision Intent Log

ID: DI-hakos
Date: 2026-06-19 20:27:35
Status: active
Decision: Track the On the Spot pressure-timer failure as a dedicated bug instead of folding it into the broader drill-copy or cue-text work.
Intent: The timer is part of the recall mechanic on `on-the-spot.html`, so a broken pressure toggle changes the page's core study behavior and needs its own investigation and fix.
Constraints: Keep the standalone drill flow and local retention behavior intact. Do not remove the pressure feature as a shortcut fix.
Affects: `on-the-spot.html`.

ID: DI-gidan
Date: 2026-06-19 20:28:48
Status: active
Decision: Make the pressure-timer toggle re-render the current drill state immediately and fix the scoped prompt-selection helper so timer behavior is not coupled to a broken level-scope lookup.
Intent: The pressure toggle should have an immediate visible effect on the On the Spot page instead of only re-rendering in one state or depending on a brittle scope helper.
Constraints: Preserve the retention-box scheduling and the current reveal/grade flow.
Affects: `on-the-spot.html`.

## Observed Behavior

- The user reported that the `pressure timer` on the main `On the Spot` page is not working.
- The control is rendered on `on-the-spot.html`, so the bug is on the all-level manual drill rather than the audio drill.

## Subtasks

- [ ] saviz.1 Reproduce exactly how the timer is failing: not starting, not counting down, not disabling, or not affecting the cue state.
- [ ] saviz.2 Trace the `pressure` toggle, `startTimer()`, and rerender flow on `on-the-spot.html`.
- [ ] saviz.3 Fix the timer behavior without breaking retention scheduling or reveal flow.
- [ ] saviz.4 Verify the timer both on initial load and after changing level filters.
