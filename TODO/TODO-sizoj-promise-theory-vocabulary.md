# TODO-sizoj - Align HTML vocabulary with Promise Theory cooperation framing

Review and revise learner-facing HTML copy so the site sounds more like Mark
Burgess's Promise Theory vocabulary: autonomous agents signalling intent through
voluntary promises, offer/acceptance, local assessment, trust, credibility, and
cooperation. The goal is to reduce command/control, hierarchy, compliance, and
courtroom-style language unless a passage is explicitly explaining those ideas
as contrasts or risks.

## Decision Intent Log

ID: DI-nuhij
Date: 2026-06-19 14:44:51
Status: active
Decision: Plan a vocabulary pass over the HTML files to make PromiseGrid learning copy more collaborative and less hierarchical, using Promise Theory terms such as autonomous agents, voluntary cooperation, promises, offers, acceptance, intent, local assessment, trust, and credibility.
Intent: The current copy sometimes implies commands, obligations, conformance, judgment, guilt, or centralized responsibility. Promise Theory starts from autonomous agents that can only promise for themselves, may offer and accept promises voluntarily, and assess outcomes locally; the site should teach that posture.
Constraints: Do not flatten real safety or parsing behavior: malformed bytes can still be declined, set aside, or quarantined locally. Do not ban every technical occurrence of words such as responsibility or assessment when the concept is genuinely needed. Prefer concrete rewrites over broad search-and-replace.
Affects: `index.html`; `layperson.html`; `app-dev.html`; `kernel-dev.html`; `on-the-spot.html`; `on-the-spot-audio.html`; `layperson-on-the-spot.html`; `dispatch.html`; `pg-note-dispatch.html`.

ID: DI-lufif
Date: 2026-06-19 22:31:00
Status: active
Decision: Publish a dedicated `promise-language.html` reference page, linked from the home page, that lists the flagged Promise Theory vocabulary, suggested replacements, and explicit exceptions drawn from the Promise Lens rule files.
Intent: The site should expose a stable, human-readable vocabulary reference so readers and editors can see the house style in one place instead of inferring it from scattered rewrites or internal TODO notes.
Constraints: Source the page content from the current Promise Lens rule set in `/home/jj/lab/cswg/promise-lens/rules/vocabulary-source.json` and `/home/jj/lab/cswg/promise-lens/rules/rules.json`. Keep it readable as a standalone page for external readers.
Affects: `index.html`; `promise-language.html`; `TODO/TODO-sizoj-promise-theory-vocabulary.md`.

## Source Vocabulary Notes

- Promise Theory baseline: no agent can promise on behalf of another agent; each agent expresses only its own intent.
- Favor: `agent`, `autonomous agent`, `promise`, `promise body`, `intent`, `offer`, `acceptance`, `decline`, `local assessment`, `observation`, `trust`, `credibility`, `cooperation`, `coordination`, `capability`, `kept promise`, `not-kept promise`, `promise history`.
- Use carefully or only as contrasts: `command`, `control`, `authority`, `obligation`, `compliance`, `conformance`, `requirement`, `must`, `responsibility`, `judgment`, `verdict`, `guilt`, `proof`, `hostile`, `reject`, `refuse`, `burden`.
- Distinguish Promise Theory "imposition" from PromiseGrid protocol behavior. If the site explains impositions, present them as attempted influence rather than reliable control.

## Initial HTML Hotspots

- `kernel-dev.html`: high density of `responsibility`, `obligation`, `must`, `refuses`, `judge`, `controller`, `burden`, and `requirements`; much of this is in Level 3 framing and should be softened toward hosted roles, local boundaries, offered capabilities, and local assessment.
- `app-dev.html`: `obligations`, `proof`, `guilty`, `verdict`, `convict`, `judged`, `hostile`, and `reject` give several lessons a legal/compliance tone; rewrite toward promise records, local assessment, credibility updates, unsupported/malformed input, and locally declined interpretation.
- `layperson.html`: phrases like central judge, trust judgment/verdict, responsibility handoff, proof, and "judge promises" should shift toward local assessment, continuity of roles, records, and trust repair.
- `on-the-spot.html`, `on-the-spot-audio.html`, and `layperson-on-the-spot.html`: copied prompt data repeats the same hotspots and must be updated in lockstep with the main lessons.
- `dispatch.html` and `pg-note-dispatch.html`: UI words such as `verdict`, `reject`, `ignored`, and `hostile traffic` should be checked; protocol recognition can say "matched", "not accepted", "not handled", or "set aside" without sounding punitive.
- `index.html`: level summaries mention hostile peers and bytes-vs-judgment; align summaries with the revised terms after page-level rewrites.

## Suggested Vocabulary Map

- `judge` / `judgment` / `verdict` / `convict` / `guilty` -> `assess`, `local assessment`, `weigh locally`, `credibility update`, `trust update`, `not-kept report`.
- `conformance` / `compliance` / `comply` -> `matches the named spec`, `keeps the declared promise`, `aligns with the pCID spec`, `compatible with the promised behavior`.
- `obligation` / `responsibility` / `must` / `required` -> `promise`, `role`, `chosen commitment`, `hosted capability`, `local assumption`, `protocol expectation`, `the spec says`.
- `command` / `control` / `controller` / `authority` -> `signal`, `offer`, `accept`, `coordinate`, `local policy`, `source of an offer`, `shared language`.
- `reject` / `refuse` -> `decline`, `not accept`, `not handle`, `set aside`, `quarantine locally` when describing malformed or unsupported bytes.
- `hostile` -> `unreliable`, `malformed`, `unsupported`, `untrusted`, or `adversarial` only when the point is explicitly security.
- `proof` -> `record`, `receipt`, `observation`, `evidence record` when legalistic certainty is not intended.
- `burden` -> `promise body`, `promise type`, `context`, `trust context`, or `promise scope`.

## Subtasks

- [x] sizoj.1 Build a precise HTML vocabulary inventory with file/line references and classify each occurrence as `replace`, `keep`, or `needs design wording`.
- [x] sizoj.2 Draft a Promise Theory house style note for learner-facing copy, including allowed technical exceptions.
- [x] sizoj.3 Rewrite `layperson.html` and `index.html` first, because those set the tone for non-specialist readers.
- [x] sizoj.4 Rewrite `app-dev.html` and copied Level 2 prompt data in `on-the-spot.html`, `on-the-spot-audio.html`, and `layperson-on-the-spot.html`.
- [x] sizoj.5 Rewrite `kernel-dev.html` and copied Level 3 prompt data, preserving necessary precision about hosted roles and protocol boundaries.
- [x] sizoj.6 Review `dispatch.html` and `pg-note-dispatch.html` UI labels for punitive words such as verdict/reject/hostile.
- [x] sizoj.7 Run a post-edit vocabulary scan and document any intentional remaining terms with rationale.
