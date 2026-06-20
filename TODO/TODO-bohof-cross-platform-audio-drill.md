# TODO-bohof - Stabilize On the Spot audio across browsers and platforms

Investigate why `on-the-spot-audio.html` currently behaves as if the audio drill
only works reliably on Windows, then choose a support strategy that is explicit
about what browsers and operating systems are actually supported.

## Decision Intent Log

ID: DI-ruhob
Date: 2026-06-19 19:39:59
Status: active
Decision: Track the cross-platform audio drill problem as a dedicated bug, including concrete implementation options rather than assuming browser speech synthesis is uniformly available.
Intent: The current page depends on `window.speechSynthesis` and browser voice availability, which can vary sharply by browser, OS, install state, and `file://` behavior. The site should either support non-Windows platforms intentionally or narrow the feature and message it honestly.
Constraints: Keep the page standalone under `file://`. Do not introduce a fake microphone flow; the page is text-to-speech plus a timed response gap, not speech recognition. Preserve a no-network default.
Affects: `on-the-spot-audio.html`; `index.html`.

ID: DI-bubam
Date: 2026-06-19 19:42:38
Status: active
Decision: Keep the audio drill on browser speech synthesis for now, but treat it as a best-effort feature: stop silent failures, surface readiness and playback problems, and make the home-page copy explicit that support varies by browser and installed voices.
Intent: The immediate product risk is not only missing voices; it is that some browsers expose the API and then fail silently, which makes the page look broken and Windows-only. The shortest safe fix is honest capability messaging plus fail-fast behavior when speech never starts.
Constraints: Do not add network audio assets yet. Do not remove the page in this patch. Preserve the standalone `file://` flow and current drill structure.
Affects: `on-the-spot-audio.html`; `index.html`.

## Options To Evaluate

- Keep browser TTS, but add a tested support matrix, better capability detection, and a no-audio fallback when usable voices are missing.
- Keep browser TTS, but require explicit user voice selection and a one-line test phrase before starting the drill.
- Replace or supplement browser TTS with checked-in audio assets so playback does not depend on platform voice packs.
- Narrow support intentionally and mark the page experimental until non-Windows behavior is verified.

## Investigation Notes

- The page uses `window.speechSynthesis`, `SpeechSynthesisUtterance`, and runtime voice enumeration, so failure may be due to voice availability rather than total API absence.
- The current warning only handles the no-API case; it does not distinguish "API exists but no usable voices loaded yet" from "audio works."
- The index card currently advertises the page as a ready hands-free drill without mentioning platform limits.

## Subtasks

- [ ] bohof.1 Reproduce the current behavior matrix across major browsers and at least one non-Windows platform.
- [ ] bohof.2 Decide whether the product goal is "best effort with fallback," "fully supported cross-platform," or "experimental and hidden."
- [ ] bohof.3 Update capability detection and user-facing warnings to match the chosen support model.
- [ ] bohof.4 Verify the index copy does not over-promise beyond what the page can actually do.
