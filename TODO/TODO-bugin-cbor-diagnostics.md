# TODO-bugin - Add CBOR diagnostic output to dispatch demos

Show learners both the encoded bytes and the decoded CBOR meaning in the
protocol recognition explainer and live dispatch demo.

## Decision Intent Log

ID: DI-motuf
Date: 2026-06-19 14:08:28
Status: active
Decision: `dispatch.html` and `pg-note-dispatch.html` will show annotated CBOR hex/disassembly as the primary diagnostic view and compact CBOR diagnostic notation as the secondary value view.
Intent: The pages should explain what bytes such as `a2` mean while still giving CBOR-literate readers a compact value notation. Annotated disassembly ties bytes to decoded roles; diagnostic notation shows the decoded value shape.
Constraints: Preserve the existing slot-colored hex display. Keep the view local to browser JavaScript. Do not claim the byte annotations are RFC diagnostic notation; they are a teaching disassembly paired with diagnostic notation.
Affects: `dispatch.html`; `pg-note-dispatch.html`; `shared/cbor-diagnostics.js`.

## Subtasks

- [x] bugin.1 Add shared CBOR diagnostic renderer.
- [x] bugin.2 Show static sample diagnostics in `dispatch.html`.
- [x] bugin.3 Show live diagnostics in `pg-note-dispatch.html` for send and loopback.
- [x] bugin.4 Verify normal and corrupt-pCID displays.
