// PromiseGrid term source seeded from the upstream dev-guide glossary at
// /home/jj/lab/cswg/promisegrid-dev-guide/GLOSSARY.md.
// Intent: Keep lesson-page flash cards aligned with one shared internal term
// source instead of three drifting hard-coded arrays. Source: DI-nakal
(function(){
  const byId = {
    promise_chain: {
      term: "Promise Chain",
      short: "linked promises across time",
      long: "Promises and outcomes linked across time.",
      tags: ["teaching", "core"]
    },
    agent: {
      term: "agent",
      short: "a participant",
      long: "A PromiseGrid actor that can make, receive, or assess protocol-governed promises.",
      tags: ["core"]
    },
    artifact: {
      term: "artifact",
      short: "a relevant record",
      long: "A protocol-relevant record or message-shaped piece of evidence an app or port may need to keep, exchange, or assess.",
      tags: ["core"]
    },
    bootstrap: {
      term: "bootstrap",
      short: "startup information",
      long: "The initial setup information an app needs before it can start participating.",
      tags: ["core", "app"]
    },
    cas: {
      term: "CAS",
      short: "content store",
      long: "Content-addressed storage: a layer where chunks are stored and retrieved by identity derived from their bytes.",
      tags: ["core", "kernel"]
    },
    chunk: {
      term: "chunk",
      short: "a stored piece",
      long: "A content-addressed piece of stored message data under a CAS protocol.",
      tags: ["core", "kernel"]
    },
    doc_cid: {
      term: "doc-CID",
      short: "document fingerprint",
      long: "The content-addressed identifier of one exact document freeze.",
      tags: ["core", "layperson", "app"]
    },
    draft_vs_frozen: {
      term: "draft vs frozen",
      short: "working vs stable",
      long: "Working evidence can still move; a frozen spec is stable enough to cite by identity.",
      tags: ["core", "layperson"]
    },
    feed: {
      term: "feed",
      short: "a delivery lane",
      long: "A lower-layer delivery path that moves authenticated chunks or messages over some substrate.",
      tags: ["core", "layperson", "kernel"]
    },
    fork: {
      term: "fork",
      short: "a sibling path",
      long: "A sibling protocol or community path, not necessarily a failure.",
      tags: ["core", "layperson"]
    },
    ingress: {
      term: "ingress",
      short: "the front door",
      long: "The path by which work or messages first enter the host or runtime that will dispatch them.",
      tags: ["core", "layperson", "kernel"]
    },
    kernel: {
      term: "kernel",
      short: "the host role",
      long: "The infrastructure role that hosts the protocol stack and handlers.",
      tags: ["core", "layperson", "kernel"]
    },
    payload: {
      term: "payload",
      short: "the body",
      long: "The protocol-defined content carried for interpretation above lower transport or binding layers.",
      tags: ["core", "app"]
    },
    p_cid: {
      term: "pCID",
      short: "spec fingerprint",
      long: "The content-addressed identifier of a protocol spec.",
      tags: ["core", "layperson", "app"]
    },
    peer: {
      term: "peer",
      short: "another participant",
      long: "Another participant your app or port exchanges protocol traffic with.",
      tags: ["core", "app"]
    },
    port: {
      term: "port",
      short: "a build of the role",
      long: "An implementation of the PromiseGrid infrastructure role on a particular platform or runtime.",
      tags: ["core", "layperson", "kernel"]
    },
    promise: {
      term: "promise",
      short: "a trackable promise",
      long: "A protocol-governed claim or commitment that can later be assessed.",
      tags: ["core", "layperson"]
    },
    protocol: {
      term: "protocol",
      short: "a named rule set",
      long: "A named set of rules for messages, behavior, and meaning that an implementation can claim to follow.",
      tags: ["core", "app"]
    },
    protocol_role: {
      term: "protocol role",
      short: "protocol code",
      long: "The code or runtime unit that implements a protocol's rules for incoming or outgoing work.",
      tags: ["core", "app", "kernel"]
    },
    provenance: {
      term: "provenance",
      short: "where it came from",
      long: "The history or supporting context that shows where a record, spec, or artifact came from and how it was derived.",
      tags: ["core"]
    },
    rendezvous: {
      term: "rendezvous",
      short: "first contact",
      long: "How peers first find each other and establish workable contact.",
      tags: ["core", "app"]
    },
    runtime: {
      term: "runtime",
      short: "the host environment",
      long: "The host environment that executes protocol code, manages context, and carries the implementation's operational work.",
      tags: ["core", "kernel"]
    },
    session: {
      term: "session",
      short: "interaction context",
      long: "The layer or context where ongoing interaction state, membership, or sequencing assumptions are applied.",
      tags: ["core", "kernel"]
    },
    spec: {
      term: "spec",
      short: "the named contract",
      long: "The document or frozen contract that defines a protocol's rules.",
      tags: ["core", "app"]
    },
    substrate: {
      term: "substrate",
      short: "the ground it runs on",
      long: "The underlying host or transport environment a feed or port relies on.",
      tags: ["core", "layperson", "kernel"]
    },
    authorship: {
      term: "authorship",
      short: "who actually made it",
      long: "Who actually made or signed a claim.",
      tags: ["app"]
    },
    forwarding: {
      term: "forwarding",
      short: "who carried it along",
      long: "Who carried a claim along without necessarily originating it.",
      tags: ["app"]
    },
    conformance: {
      term: "conformance",
      short: "claiming to match the spec",
      long: "Whether an implementation is claiming to follow a named spec.",
      tags: ["app"]
    },
    capability: {
      term: "capability",
      short: "what it allows",
      long: "What a protocol artifact authorizes or allows under stated conditions.",
      tags: ["app"]
    },
    witness: {
      term: "witness",
      short: "offered evidence",
      long: "Evidence offered for what happened, including whether a promise was kept or broken.",
      tags: ["app"]
    },
    transport_adapter: {
      term: "transport adapter",
      short: "transport to session",
      long: "Turns raw transport behavior into the clean session context protocol roles expect.",
      tags: ["kernel"]
    },
    recognition: {
      term: "recognition",
      short: "handoff to protocol roles",
      long: "Inspecting slot 0's pCID and handing the work to the matching protocol role.",
      tags: ["kernel"]
    },
    profile: {
      term: "profile",
      short: "what a port promises",
      long: "A port's honest declaration of which layers, specs, and features it hosts.",
      tags: ["kernel"]
    },
    receive_registration: {
      term: "receive registration",
      short: "'send me these'",
      long: "An app registering with the kernel to receive messages for a given pCID.",
      tags: ["kernel"]
    },
    open_upstream_question: {
      term: "open upstream question",
      short: "a moving area",
      long: "A reminder that some details are still evolving upstream and should be read as current guidance rather than frozen protocol.",
      tags: ["app", "kernel"]
    }
  };

  const levels = {
    layperson: [
      "promise_chain",
      "agent",
      "promise",
      "fork",
      "p_cid",
      "doc_cid",
      "kernel",
      "port",
      "cas",
      "chunk",
      "feed",
      "substrate",
      "ingress",
      "draft_vs_frozen"
    ],
    app: [
      "protocol",
      "spec",
      "p_cid",
      "doc_cid",
      "payload",
      "capability",
      "authorship",
      "forwarding",
      "conformance",
      "witness",
      "protocol_role",
      "peer",
      "open_upstream_question"
    ],
    kernel: [
      "kernel",
      "port",
      "transport_adapter",
      "session",
      "substrate",
      "feed",
      "cas",
      "chunk",
      "protocol_role",
      "recognition",
      "ingress",
      "profile",
      "receive_registration",
      "open_upstream_question"
    ]
  };

  function cardsFor(level){
    return (levels[level] || []).map(id => {
      const t = byId[id];
      return [t.term, t.short, t.long];
    });
  }

  window.PGTerms = { byId, levels, cardsFor };
})();
