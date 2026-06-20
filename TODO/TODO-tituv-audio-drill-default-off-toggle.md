# TODO-tituv - Gate the audio drill behind a default-off toggle

Make the hands-free audio drill discoverable only when explicitly enabled,
instead of presenting it as a normal always-on page by default.

## Decision Intent Log

ID: DI-gisuk
Date: 2026-06-19 19:39:59
Status: active
Decision: Plan a default-off availability toggle for the audio drill so unfinished or platform-limited audio behavior does not read like a stable core lesson path.
Intent: Readers should not be funneled into an unreliable or experimental page accidentally. The site needs a deliberate "show audio drill" or equivalent gate that defaults to off.
Constraints: Keep the site static and `file://` friendly. Do not require a backend flag service. The off state should still leave a clear path for local testing or manual enablement.
Affects: `index.html`; `on-the-spot-audio.html`; `shared/site-header.js`.

ID: DI-mozuv
Date: 2026-06-19 19:49:29
Status: active
Decision: Gate the audio drill with a browser-local toggle stored in `localStorage`, show a default-off card on the home page, and block direct entry with an enable interstitial until the toggle is turned on.
Intent: The feature should be intentionally opt-in, reversible, and consistent whether the learner comes from Home or visits `on-the-spot-audio.html` directly.
Constraints: Keep the gate static-site friendly and usable under `file://`. Do not require shared build tooling or a server flag. Keep a manual enable path on the audio page itself so local testing is still straightforward.
Affects: `index.html`; `on-the-spot-audio.html`.

ID: DI-jagal
Date: 2026-06-19 20:43:40
Status: active
Decision: Remove the audio-drill toggle UI from the home page and keep the default-off enable/disable path only on `on-the-spot-audio.html`, while making page-local enablement work for the current visit even if browser storage is unavailable.
Intent: The home page should stay focused on content navigation instead of feature-flag controls, and the audio page itself should not fail silently when storage writes are blocked.
Constraints: Preserve the default-off behavior and the direct-link interstitial on the audio page. Keep a reversible on-page disable control.
Affects: `index.html`; `on-the-spot-audio.html`.

## Options To Evaluate

- Hide the home-page card entirely unless a local browser setting enables experimental drills.
- Show a disabled card with "off by default" copy and an explicit enable control.
- Let the page load directly, but show an "audio drill disabled" interstitial unless a local toggle is on.
- Support a URL flag for local testing while keeping the normal navigation path disabled.

## Subtasks

- [x] tituv.1 Choose the toggle surface: hidden card, disabled card, interstitial, or URL/local-storage gate.
- [x] tituv.2 Define where the enabled state lives locally and how it behaves under `file://`.
- [x] tituv.3 Update navigation and copy so the default-off state is obvious instead of feeling broken.
- [x] tituv.4 Verify that direct links and the Home path behave consistently when the feature is off.
