# TODO-puhov - Replace mic-implying recall cues with "Think about the answer."

Update the recall drill prompt text so it no longer implies the page is
listening to a microphone when it is only waiting for the learner to think or
speak privately before revealing the model answer.

## Decision Intent Log

ID: DI-zozij
Date: 2026-06-19 19:39:59
Status: active
Decision: Change the learner cue from "Say your answer out loud..." to "Think about the answer." on the non-mic recall flows, and review nearby copy for the same implication.
Intent: The current text suggests the page is actively listening, but these drill pages do not capture microphone input. The wording should match the actual interaction and avoid implying voice recognition that does not exist.
Constraints: Do not add microphone APIs. Preserve the basic reveal-after-thought rhythm. Keep the copy short enough to fit the existing cue layout on mobile.
Affects: `on-the-spot.html`; `layperson-on-the-spot.html`; `index.html`.

ID: DI-gigij
Date: 2026-06-19 20:43:40
Status: active
Decision: Make the manual drill pages consistently frame recall as thinking silently or thinking it through, not speaking aloud, including the pill labels and footer guidance.
Intent: The learner should not be told that speaking is required on the manual drills. The pages should consistently present silent recall as the default interaction.
Constraints: Keep the audio drill separate; only the manual reveal drills need this wording shift.
Affects: `on-the-spot.html`; `layperson-on-the-spot.html`; `index.html`.

## Notes

- The issue is strongest on the two manual reveal drill pages, where the browser does not speak or listen.
- The audio drill may keep out-loud wording if it remains a timed spoken-response experience; that wording should be reviewed separately with TODO-bohof.

## Subtasks

- [ ] puhov.1 Replace the cue copy on `on-the-spot.html`.
- [ ] puhov.2 Replace the cue copy on `layperson-on-the-spot.html`.
- [ ] puhov.3 Review any home-page drill descriptions that still imply nonexistent microphone capture.
- [ ] puhov.4 Verify the shorter cue still reads cleanly with and without the countdown timer.
