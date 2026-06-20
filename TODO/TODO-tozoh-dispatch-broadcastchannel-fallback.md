# TODO-tozoh - Make the live dispatch demo explicit about BroadcastChannel support

The live two-tab dispatch demo currently assumes `BroadcastChannel` exists and
silently does nothing on browsers or environments where it does not. Track a
small fix so unsupported cases are visible instead of looking broken.

## Decision Intent Log

ID: DI-tozoh
Date: 2026-06-20 00:00:00
Status: active
Decision: Add a focused TODO for unsupported-`BroadcastChannel` handling in the live dispatch demo.
Intent: The current `send to grid` path only posts when `BroadcastChannel` exists. When it does not, the main action becomes a no-op with no visible explanation. Readers should either see a clear unsupported-state message or get a deliberate fallback.
Constraints: Keep the demo simple. Prefer a clear note or disabled-state UI over a heavyweight transport substitute unless a fallback materially improves the tutorial. Preserve loopback behavior because it is the simplest always-available path.
Affects: `pg-note-dispatch.html`; possibly `dispatch.html` if the explainer text also needs an availability note.

ID: DI-fubud
Date: 2026-06-20 00:00:00
Status: active
Decision: When `BroadcastChannel` is unavailable, detect `!bc`, show a visible note near the controls, disable `Send to grid`, and keep `Loopback once` enabled.
Intent: The two-tab demo should never fail silently. Unsupported browsers or restricted environments must explain that two-tab send is unavailable and point the reader at the always-available loopback path.
Constraints: Use the exact user-facing note `Two-tab send is not available in this browser. Use Loopback once instead.` Keep the unsupported state small and explicit rather than inventing a transport substitute.
Affects: `pg-note-dispatch.html`.

## Browser-support note

`BroadcastChannel` is broadly supported in modern browsers, but the code still
feature-detects it and should fail clearly rather than silently when absent.

## Subtasks

- [x] tozoh.1 Detect the unsupported-`BroadcastChannel` case and surface it in the demo UI.
- [x] tozoh.2 Decide whether `send to grid` should be disabled, downgraded to loopback, or accompanied by a note when unsupported.
- [x] tozoh.3 Update the explainer text if the live-demo path depends on `BroadcastChannel` support.
