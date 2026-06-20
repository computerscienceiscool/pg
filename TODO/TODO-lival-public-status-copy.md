# TODO-lival - Remove internal DR references from public status copy

Clean up the remaining public-facing `DR-*` references and adjacent "blocked /
provisional" status wording so outside readers are not exposed to internal
decision handles or repo-local status labels.

## Decision Intent Log

ID: DI-lival
Date: 2026-06-20 00:00:00
Status: active
Decision: Track a focused pass that removes the remaining public `DR-*` references and rewrites their surrounding status copy in plain external-facing language.
Intent: App-dev and kernel-dev pages still expose internal upstream handles such as `DR-tuhaz` and `DR-davod` in footers, lesson text, and decoder/glossary entries. Those labels are useful internally but leak stale and confusing status language to outside readers.
Constraints: Preserve the real meaning that some material is still evolving upstream. Do not hide uncertainty; translate it into plain public wording such as "still evolving", "current guidance", or "not frozen yet". Keep internal decision logs intact inside `TODO/` and comments where they are actually needed for maintenance.
Affects: `app-dev.html`; `kernel-dev.html`; `index.html`; `questionable-terms.md`.

## Remaining public hotspots

- `app-dev.html`: footer still says `much here is provisional (DR-tuhaz)`.
- `app-dev.html`: lesson copy still names `DR-tuhaz` directly.
- `app-dev.html`: decoder/glossary still contains a `DR-tuhaz` entry.
- `kernel-dev.html`: footer still says `porting is still blocked under DR-davod`.
- `kernel-dev.html`: decoder/glossary still contains a `DR-davod` entry.
- `index.html`: still frames deeper levels as provisional, and should be checked after the page-level rewrites are finished.

## Subtasks

- [x] lival.1 Replace the app-dev footer `DR-tuhaz` reference with plain public wording.
- [x] lival.2 Replace the app-dev lesson-text `DR-tuhaz` reference with plain public wording.
- [x] lival.3 Replace the app-dev decoder `DR-tuhaz` entry with a public-facing status explanation.
- [x] lival.4 Replace the kernel-dev footer `DR-davod` reference with plain public wording.
- [x] lival.5 Replace the kernel-dev decoder `DR-davod` entry with a public-facing status explanation.
- [x] lival.6 Recheck `index.html` and `questionable-terms.md` after the edits so the public status wording stays consistent.
