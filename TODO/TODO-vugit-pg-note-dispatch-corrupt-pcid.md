# TODO-vugit - Restore corrupt-pCID ignore behavior in pg-note-dispatch

Fix `pg-note-dispatch.html` so ticking `corrupt the pCID` actually corrupts slot
0 and causes the message to be ignored, matching the documented behavior in
`dispatch.html`.

## Decision Intent Log

ID: DI-lanik
Date: 2026-06-19 20:27:35
Status: active
Decision: Track the broken corrupt-pCID control in `pg-note-dispatch.html` as a dedicated demo regression, anchored to the behavior already documented on `dispatch.html`.
Intent: The dispatch demo should demonstrate the same recognition-and-ignore path that the explainer promises. If the corrupt-pCID toggle does nothing, the live demo no longer teaches the slot-0 dispatch rule correctly.
Constraints: Preserve the existing demo structure and local event-log behavior. Match the documented behavior on `dispatch.html`, where a mismatched pCID should be ignored and leave a local trace.
Affects: `pg-note-dispatch.html`; `dispatch.html`.

ID: DI-runad
Date: 2026-06-19 20:28:48
Status: active
Decision: Corrupt slot 0 directly inside the outbound envelope bytes for the demo, so the recognizer sees a definite pCID mismatch on loopback and cross-tab receive.
Intent: The control should visibly and deterministically mutate the protocol fingerprint carried in slot 0, not rely on a separate alternate CID constant whose effect is less obvious in the live demo.
Constraints: Keep the rest of the envelope valid so the receive path demonstrates `ignored` rather than `couldn't decode`.
Affects: `pg-note-dispatch.html`.

## Observed Behavior

- The user reported that the `corrupt the pCID` box in `pg-note-dispatch.html` does not work.
- `dispatch.html` explicitly says that when `corrupt the pCID` is enabled, slot 0 should no longer match and the message should be ignored.
- `pg-note-dispatch.html` already renders an `ignored` verdict path, so the bug is likely in the corruption or recognition plumbing rather than the display vocabulary alone.

## Subtasks

- [ ] vugit.1 Reproduce the corrupt-pCID path in `pg-note-dispatch.html`.
- [ ] vugit.2 Compare the intended behavior described on `dispatch.html` with the live demo's slot-0 mutation logic.
- [ ] vugit.3 Fix the corruption path so the demo emits the expected ignored outcome and local trace.
- [ ] vugit.4 Verify the normal non-corrupt loopback path still dispatches correctly.
