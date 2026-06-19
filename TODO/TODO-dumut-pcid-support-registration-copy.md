# TODO-dumut - Correct pCID support registration teaching copy

Remove stale claims that apps publish pCID support promises in CHANGELOG.md, and
teach the current concrete mechanism: protocol roles register the pCIDs they
handle with the local kernel. Broader publication of supported pCIDs remains an
unsettled design question.

## Decision Intent Log

ID: DI-piput
Date: 2026-06-19 14:23:25
Status: active
Decision: Replace CHANGELOG and published support-promise language with local-kernel handled-pCID registration language, and state that public pCID support publication is unresolved.
Intent: The learning pages should not teach a support declaration mechanism that does not exist. The only concrete mechanism today is that a node or app registers the pCIDs it handles when registering with the local kernel.
Constraints: Do not imply a central registry. Do not imply that peers can discover supported pCIDs from CHANGELOG.md or any settled publication channel. Keep the frozen-spec-by-pCID discipline intact.
Affects: `index.html`; `app-dev.html`; `kernel-dev.html`; `layperson.html`; `on-the-spot.html`; `on-the-spot-audio.html`; `layperson-on-the-spot.html`; `TODO/TODO.md`.

## Subtasks

- [x] dumut.1 Replace app-dev support-promise lesson with handled-pCID registration.
- [x] dumut.2 Correct quiz prompt sets and audio prompt data.
- [x] dumut.3 Correct glossary/index/kernel-dev references.
- [x] dumut.4 Verify no stale CHANGELOG/support-promise teaching copy remains.
