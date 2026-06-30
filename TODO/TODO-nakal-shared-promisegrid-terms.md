# TODO-nakal - Create a shared PromiseGrid term source for lesson flash cards

Create a site-local structured term source seeded from the upstream dev-guide
glossary, then drive the lesson-page flash cards from it instead of maintaining
three separate hard-coded term lists in the HTML pages.

## Decision Intent Log

ID: DI-nakal
Date: 2026-06-20 00:00:00
Status: active
Decision: Add a shared `shared/promisegrid-terms.js` source seeded from the dev-guide glossary and use it to power lesson-page flash cards.
Intent: The PromiseGrid glossary should have an internal source of truth for the team without overloading the public Promise Theory vocabulary page. The lesson pages should consume filtered term sets from one shared source so the flash cards stay consistent.
Constraints: Keep `promise-language.html` focused on Promise Theory wording rather than becoming the team glossary source. Seed the new shared source from `~/lab/cswg/promisegrid-dev-guide/GLOSSARY.md`. Preserve the current lesson-page decoder UX.
Affects: `shared/promisegrid-terms.js`; `layperson.html`; `app-dev.html`; `kernel-dev.html`; `TODO/TODO.md`; `TODO/TODO-nakal-shared-promisegrid-terms.md`.

## Subtasks

- [x] nakal.1 Create the new TODO and lock the shared-term-source direction.
- [x] nakal.2 Create `shared/promisegrid-terms.js`.
- [x] nakal.3 Seed the shared term source from `GLOSSARY.md`.
- [x] nakal.4 Wire the lesson-page flash cards to use the shared term source.
