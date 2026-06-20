# PromiseGrid Learning Site

This repo is a standalone static PromiseGrid learning site. It is organized as a small set of root-level HTML pages, two shared browser scripts, a local Go tool for minting proquint handles, and a `TODO/` directory for planning and decision logs.

The site is meant to be readable page-by-page. Level 1 is layperson framing, Level 2 is app-dev framing, Level 3 is kernel-porting framing, and the drill/demo pages reinforce the same ideas in different ways.

One teaching concept now used across the site is `Promise Chain`: linked promises across time, not blockchain mechanics. It is meant as a calming bridge term inside PromiseGrid, not as a rename of the project.

## What Teammates Should Know

- This is a static site. There is no build step for the HTML pages.
- Use a local server for realistic testing, especially when checking navigation, browser storage, clipboard behavior, and cross-page links. `python -m http.server 8000` from the repo root is enough.
- Shared UI behavior lives in `shared/`, not in a framework bundle.
- Planning artifacts and locked decisions live in `TODO/`. The site copy was cleaned in several passes, and `questionable-terms.md` records wording that was updated or intentionally deferred.
- `tools/mint-handle/` is the local utility used to mint proquint coordination handles for TODO and DI entries.

## File Guide

### Site entry and lesson pages

- `index.html`
  The public home page. It introduces the three learning levels, links to the drills and demos, and points readers to the vocabulary reference.

- `layperson.html`
  Level 1 of the guide. It explains PromiseGrid in plain English and includes its own concept drill/decoder sections in the page script.

- `app-dev.html`
  Level 2 of the guide. It reframes PromiseGrid for application developers, with lesson cards and a decoder focused on specs, pCIDs, protocol roles, and local assessment.

- `kernel-dev.html`
  Level 3 of the guide. It is the most provisional teaching page and focuses on porting, hosted roles, ingress, runtime boundaries, and kernel/app separation.

### Drill pages

- `on-the-spot.html`
  The all-level text drill. It mixes layperson, app-dev, and kernel prompts and uses browser-local progress plus an optional pressure timer.

- `layperson-on-the-spot.html`
  The Level 1-only text drill. It is the plain-English recall surface for the nine layperson concepts.

- `on-the-spot-audio.html`
  The experimental audio drill. It is browser-based, gated on the page itself, and is intentionally treated as a secondary drill mode rather than the primary study surface.

### Demo and explainer pages

- `dispatch.html`
  The prose explainer for protocol recognition. It walks through slot `0`, pCID matching, and why unrecognized envelopes are locally ignored rather than reinterpreted.

- `pg-note-dispatch.html`
  The live dispatch demo. It shows the bytes, the rendered envelope, and the local receive/recognize outcome so the explainer in `dispatch.html` can be tested directly in the browser.

### Vocabulary and review pages

- `promise-language.html`
  The public vocabulary reference. It lists flagged words, preferred replacements, and exceptions derived from the PromiseLens ruleset, and includes a copy/export action.

- `questionable-terms.md`
  Internal working document for the vocabulary pass. It records which sentences were updated, which were intentionally left for review, and the special note about drill language.

### Related external repo

- `ciwg/promise-lens`
  The PromiseLens repo is the upstream source for the vocabulary rules and wording guidance used by `promise-language.html`. It includes the browser extension and CLI used to flag wording that drifts away from Promise Theory framing.

### Shared browser code

- `shared/site-header.js`
  Defines the shared custom-element header used across the site. If navigation behavior changes, this is the first place to check.

- `shared/cbor-diagnostics.js`
  Shared rendering logic for annotated CBOR output. The dispatch demo uses this to keep the byte-level explanation consistent with the visible decoded view.

### Repo workflow and local tooling

- `AGENTS.md`
  Local repo instructions for coding agents. It includes conventions for TODO files, decision logging, testing expectations, and commit hygiene.

- `tools/mint-handle/main.go`
  Entry point for the proquint handle minting tool. Run this when you need a fresh coordination handle for a TODO file or DI entry.

- `tools/mint-handle/proquint.go`
  Core proquint encoding logic. This is the canonical encoding implementation used by the minting tool.

- `tools/mint-handle/corpus.go`
  Working-tree scan logic for collision avoidance. It prevents the tool from minting handles that already appear in filenames or DI owner lines.

- `tools/mint-handle/main_test.go`
  Tests for the minting command behavior and corpus scanning.

- `tools/mint-handle/proquint_test.go`
  Tests for the proquint encoding invariants and known vectors.

- `tools/mint-handle/go.mod`
  Module definition for the minting tool.

## TODO and Decision Tracking

- `TODO/`
  Planning and execution artifacts for the repo. This directory contains the priority index plus per-topic TODO files with append-only Decision Intent logs.

If you are changing behavior or wording, update the relevant TODO file first when the decision needs to be locked before editing code.

## Typical Workflows

### Review the site locally

1. Start a local server from the repo root.
2. Open `index.html` through the server.
3. Click through each level page, the drills, and the dispatch demo.
4. Check clipboard actions, progress persistence, and cross-page navigation in a real browser.

### Add or update a TODO decision

1. Mint a fresh handle with `tools/mint-handle`.
2. Add or update the relevant file in `TODO/`.
3. Record the decision in the file's Decision Intent Log before behavior-changing edits.

### Update shared wording

1. Check `promise-language.html` for the public vocabulary framing.
2. Check `questionable-terms.md` for prior review decisions.
3. Update the relevant lesson or drill page.
4. Re-test the affected page in a browser.
