# TODO-duvik - Add per-page quiz answer key export or print support

Design a way for each lesson page to expose its own quick-check questions and
correct answers as a printable or exportable answer key.

## Decision Intent Log

ID: DI-harir
Date: 2026-06-19 19:39:59
Status: active
Decision: Track a per-page quiz export feature for the lesson pages so a reader can get that page's questions and correct answers in one place.
Intent: The lesson pages already embed structured quick-check data. A page-level answer key would make review, printing, and offline study easier without scraping the DOM manually.
Constraints: Keep the pages standalone and usable from `file://`. Avoid server dependencies. The export should be scoped per page rather than mixing Level 1, Level 2, and Level 3 together.
Affects: `layperson.html`; `app-dev.html`; `kernel-dev.html`.

ID: DI-tubif
Date: 2026-06-19 19:58:01
Status: active
Decision: Implement the first export as a `Copy answer sheet` action on each lesson page, emitting plain text with each question, its correct answer, and the explanation text.
Intent: The fastest path to "see everything at once" is a clipboard-friendly study sheet generated from the lesson data already embedded in each page, without adding print layouts or downloaded files yet.
Constraints: Keep it `file://` friendly, use a fallback when the Clipboard API is unavailable, and avoid introducing a second source of truth for the quiz content.
Affects: `layperson.html`; `app-dev.html`; `kernel-dev.html`.

ID: DI-gotih
Date: 2026-06-19 20:00:46
Status: active
Decision: Extend the copy export to the On the Spot drill pages too, using each prompt's question, full model answer, and pocket answer instead of quiz-choice data.
Intent: The drill pages should offer the same "see everything at once" access as the lesson pages, but their data shape is prompt/answer oriented rather than multiple-choice oriented.
Constraints: Keep the export plain text, `file://` friendly, and generated directly from the embedded `CONCEPTS` arrays.
Affects: `on-the-spot.html`; `layperson-on-the-spot.html`; `on-the-spot-audio.html`.

## Options To Evaluate

- A print-friendly modal or section that lists each question with its correct answer and explanation.
- A generated plain-text or Markdown export that the browser downloads locally.
- A copy-to-clipboard answer key for quick reuse in notes.
- A shared helper that standardizes export formatting across all three lesson pages.

## Subtasks

- [x] duvik.1 Confirm the desired output shape: print view, download, copy, or more than one.
- [x] duvik.2 Inventory the quiz data already available on each page and identify any gaps in the current structures.
- [x] duvik.3 Choose whether the feature should live inline per page or in a shared helper.
- [x] duvik.4 Define how explanations, correct options, and page titles appear in the exported result.
