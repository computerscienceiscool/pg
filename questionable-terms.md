# Questionable Terms

Working list for Promise Theory vocabulary review, one page at a time.

## Drill Note

The on-the-spot pages are challenge material. Not all wording there is meant to be Promise-safe language. Some tougher or older terms may remain on purpose because the drill is supposed to challenge recognition, not just present cleaned-up copy.

## [index.html](/home/jj/lab/pg/index.html)

- Status: updated
  Sentence: `Writing against PromiseGrid: the grid envelope, promises vs. RPC, pCIDs, capability tokens, broken-promise reports, signing-key identity, local handled-pCID registration, and building for <u>hostile</u> peers.`

- Status: updated
  Sentence: `Hosting PromiseGrid on a new platform: the kernel as a role, the layered model, transport adapter, CAS, ingress, the bytes-vs-<u>judgment</u> boundary, and stating your port's envelope honestly.`

- Status: review
  Sentence: `Level 2 leans on the layperson concepts (especially "promises, not <u>commands</u>").`

- Status: updated
  Sentence: `Much of the App Dev and Kernel Dev material is still provisional upstream (<u>DR-tuhaz</u>, <u>DR-davod</u>), so treat the deeper levels as orientation, not frozen protocol.`

## [layperson.html](/home/jj/lab/pg/layperson.html)

- Status: updated
  Sentence: `Trust here isn't a global score handed out once by a central referee. It's <b>local</b> and <b>per <u>burden</u></b> — meaning you trust a specific person for a specific kind of thing.`

- Status: updated
  Sentence: `You trust your mechanic with your car, not your taxes — and if they botch one job, trust can be rebuilt over time. There's no central <u>judge</u> issuing a permanent 'trustworthy' stamp.`

- Status: updated
  Sentence: `"Trust is local and per <u>burden</u>" means…`

- Status: updated
  Sentence: `Exactly — trust is <b>contextual and rebuildable</b>, never a single permanent global <u>verdict</u>.`

- Status: updated
  Sentence: `Notice the two words: local (who, for what) and repairable (it can come back). No central, permanent <u>verdict</u>.`

- Status: updated
  Sentence: `Promises, not just <u>commands</u>`

- Status: updated
  Sentence: `So a message can matter <b>long after</b> it arrives — it might become part of a later dispute, an audit, or a trust <u>judgment</u>. The question isn't only 'did it work right now?' but 'what was promised, under what conditions, and what happened?'`

- Status: updated
  Sentence: `The key shift is time. A promise (and the <u>proof</u> around it) can still matter long after the moment it was made.`

- Status: review
  Sentence: `Some things <u>must</u> stay recognizable even when a website, vendor, or file location changes. And someone has to be able to <b>hand off</b> <u>responsibility</u> without making the whole history ambiguous.`

- Status: updated
  Sentence: `PromiseGrid is built so records keep a durable identity and <u>responsibility</u> can <b>rotate, continue, or be inherited</b> in a way that stays legible to everyone who depends on it.`

- Status: updated
  Sentence: `What does 'durable identity and handoff of <u>responsibility</u>' protect?`

- Status: review
  Sentence: `It's about change without confusion: who's <u>responsible</u> can shift while the history stays clear and unbroken.`

- Status: updated
  Sentence: `Someone or something that can make, receive, or <u>judge</u> promises.`

- Status: review
  Sentence: `Your next stop (you're an app dev): the <b>App Devs</b> section of the guide — "promises, not <u>commands</u>" (concept 7) is the doorway. Want me to build the App-Dev level of this trainer next?`

## [app-dev.html](/home/jj/lab/pg/app-dev.html)

- Status: updated
  Sentence: `So success is bigger: what was promised, under what conditions, what later promise history arrived, and who's positioned to assess whether the promise was kept, broken, superseded, or still open. A message can matter <b>long after</b> first receipt — in a dispute, an audit, or a trust <u>judgment</u>.`

- Status: updated
  Sentence: `Exactly — success is about <b><u>obligations</u> and kept/broken history over time</b>, not just an instant return value.`

- Status: updated
  Sentence: `The key word is later. Don't flatten it to request/reply — a promise and its <u>proof</u> can matter long after the moment.`

- Status: updated
  Sentence: `Broken-promise reports are local records, not <u>verdicts</u>`

- Status: updated
  Sentence: `A promise that a promise broke is an assessable local record — receiving one isn't an auto <u>guilty</u> <u>verdict</u>.`

- Status: updated
  Sentence: `Emitting one isn't just “peer said bad thing happened” — preserve what was allegedly broken, when, by whom, under which conditions. And receiving one <b>shouldn't collapse into instant <u>guilt</u></b>: trust stays local and per-<u>burden</u>, so a witness can matter a lot, a little, or not at all depending on source, context, and corroboration.`

- Status: updated
  Sentence: `A witness statement in a case file, not a conviction. It's logged, weighed against other local records, and <u>judged</u> in context — never an automatic sentence.`

- Status: updated
  Sentence: `Right — it's <b>a local record to weigh locally</b>, not a universal <u>verdict</u>. Trust here is per-<u>burden</u> and contextual.`

- Status: updated
  Sentence: `A broken-promise report is a promise, not a court ruling. Log it, weigh it in context — don't let one report auto-<u>convict</u>.`

- Status: updated
  Sentence: `Expect <b>two identity layers</b>: durable identity anchor (keys) and user-facing presentation (names, handles, avatars). Presentation can travel between clients for human continuity, but <b>portability isn't identity <u>proof</u></b> — a friendly From: label is a hint, never <u>proof</u> of who's really speaking. And don't hardcode one crypto algorithm forever; a primitive aging out is a lifecycle event to handle.`

- Status: updated
  Sentence: `Keep a <b>local trust ledger</b> of kept, broken, and still-open promise records, organized by <u>burden</u> and context. PromiseGrid trust is “what has this peer done, in this context” — not a universal “good node” badge handed down from anywhere.`

- Status: updated
  Sentence: `Right — trust is <b>local and per-<u>burden</u></b>. One scalar reputation collapses information the app actually needs.`

- Status: updated
  Sentence: `Draw the <u>responsibility</u> split cleanly`

- Status: updated
  Sentence: `Everything — the whole app <u>must</u> become PromiseGrid`

- Status: updated
  Sentence: `Right. Keep the spec-facing <u>responsibility</u> explicit; leave purely local machinery local — and split distinct concerns into distinct pCIDs.`

- Status: updated
  Sentence: `Build for <u>hostile</u> peers`

- Status: updated
  Sentence: `PromiseGrid assumes <u>hostile</u>, lazy, or unreliable peers are <b>part of the environment</b>. Test against peers that drop <u>obligations</u>, send unsupported material, or validate sloppily — happy-path tests aren't enough when every new protocol surface adds attack surface and a trust <u>burden</u>.`

- Status: updated
  Sentence: `Concretely: if bytes don't parse, fail verification, or violate the spec, <b><u>reject</u> or quarantine them locally</b> — never silently reinterpret into “close enough.” Don't assume a global clock (check what clock-bound rules the spec actually names). And keep <b>support-critical logic deterministic</b>; reserve randomness for explicitly optional strategies.`

- Status: updated
  Sentence: `Right — <b><u>reject</u> or quarantine</b>, surface it locally, and only send a protocol-level rejection if the spec defines one.`

- Status: updated
  Sentence: `An assessable promise a promise wasn't kept; weighed locally, never an auto-<u>verdict</u>.`

- Status: updated
  Sentence: `One honest reminder: the App Dev section leans on <u>DR-tuhaz</u> being open — no frozen SDK, ABI, or universal message API yet. Treat the envelope shapes and token mechanics here as the current direction, not settled protocol.`
