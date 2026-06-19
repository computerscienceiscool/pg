(function () {
  function hex(bytes) {
    return Array.from(bytes, b => b.toString(16).padStart(2, "0")).join("");
  }

  function esc(value) {
    return String(value).replace(/[&<>]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[ch]));
  }

  function headerReader(u8) {
    let offset = 0;
    function readHead() {
      const start = offset;
      const first = u8[offset++];
      if (first === undefined) throw new Error("unexpected end of CBOR");
      const major = first >> 5;
      const additional = first & 31;
      let value;
      if (additional < 24) value = additional;
      else if (additional === 24) value = u8[offset++];
      else if (additional === 25) value = (u8[offset++] << 8) | u8[offset++];
      else if (additional === 26) value = (u8[offset++] * 0x1000000) + (u8[offset++] << 16) + (u8[offset++] << 8) + u8[offset++];
      else throw new Error("unsupported CBOR additional information " + additional);
      if (value === undefined || Number.isNaN(value)) throw new Error("truncated CBOR header");
      return { major, value, bytes: u8.slice(start, offset) };
    }
    function readBytes(length) {
      if (offset + length > u8.length) throw new Error("truncated CBOR payload");
      const data = u8.slice(offset, offset + length);
      offset += length;
      return data;
    }
    return { readHead, readBytes, atEnd: () => offset === u8.length };
  }

  function parse(u8, options) {
    const r = headerReader(u8);
    const lines = [];
    const decoder = new TextDecoder();

    function push(depth, bytes, note) {
      lines.push({ depth, bytes: hex(bytes), note });
    }

    function item(depth, context) {
      const head = r.readHead();
      const label = context && context.label ? context.label + ": " : "";
      if (head.major === 0) {
        push(depth, head.bytes, label + "uint(" + head.value + ")");
        return { type: "uint", value: head.value };
      }
      if (head.major === 2) {
        const data = r.readBytes(head.value);
        push(depth, head.bytes, label + "bytes(" + head.value + ")");
        const suffix = options && options.pcidOf ? " / pCID " + options.pcidOf(data) : "";
        push(depth + 1, data, "h'" + hex(data) + "'" + suffix);
        return { type: "bytes", value: data };
      }
      if (head.major === 3) {
        const data = r.readBytes(head.value);
        const text = decoder.decode(data);
        push(depth, head.bytes, label + "text(" + head.value + ")");
        push(depth + 1, data, JSON.stringify(text));
        return { type: "text", value: text };
      }
      if (head.major === 4) {
        push(depth, head.bytes, label + "array(" + head.value + ")");
        const values = [];
        for (let i = 0; i < head.value; i++) values.push(item(depth + 1, { label: "slot " + i }));
        return { type: "array", value: values };
      }
      if (head.major === 5) {
        push(depth, head.bytes, label + "map(" + head.value + ")");
        const entries = [];
        for (let i = 0; i < head.value; i++) {
          const key = item(depth + 1);
          const value = item(depth + 1);
          entries.push([key, value]);
        }
        return { type: "map", entries };
      }
      if (head.major === 6) {
        const name = head.value === 0x67726964 ? " / grid" : "";
        push(depth, head.bytes, label + "tag(" + head.value + name + ")");
        return { type: "tag", tag: head.value, value: item(depth + 1) };
      }
      throw new Error("unsupported CBOR major type " + head.major);
    }

    const value = item(0);
    if (!r.atEnd()) throw new Error("trailing bytes after first CBOR item");
    return { lines, value };
  }

  function diag(value, depth) {
    const pad = "  ".repeat(depth || 0);
    if (value.type === "uint") return String(value.value);
    if (value.type === "bytes") return "h'" + hex(value.value) + "'";
    if (value.type === "text") return JSON.stringify(value.value);
    if (value.type === "tag") return value.tag + "(" + diag(value.value, depth || 0) + ")";
    if (value.type === "array") {
      if (value.value.length === 0) return "[]";
      return "[\n" + value.value.map(v => pad + "  " + diag(v, (depth || 0) + 1)).join(",\n") + "\n" + pad + "]";
    }
    if (value.type === "map") {
      if (value.entries.length === 0) return "{}";
      return "{\n" + value.entries.map(([k, v]) => pad + "  " + diag(k, (depth || 0) + 1) + ": " + diag(v, (depth || 0) + 1)).join(",\n") + "\n" + pad + "}";
    }
    return String(value);
  }

  function ensureStyle() {
    if (document.getElementById("pg-cbor-diagnostics-style")) return;
    const style = document.createElement("style");
    style.id = "pg-cbor-diagnostics-style";
    style.textContent = `
      .cbor-diag { margin-top: 14px; display: grid; gap: 12px; }
      .cbor-diag h3 { margin: 0 0 7px; font-size: 10.5px; letter-spacing: .08em; text-transform: uppercase; color: var(--faint, #7f9189); }
      .cbor-diag pre { margin: 0; padding: 12px 13px; border: 1px solid var(--line, #243441); border-radius: 8px; background: var(--panel2, #0b1116); color: var(--ink, #dfe9ef); font-family: var(--mono, ui-monospace, monospace); font-size: 12px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; }
      .cbor-diag .bytes { color: var(--slot0, #7fd0ff); }
      .cbor-diag .note { color: var(--dim, #7c93a3); }
      .cbor-diag .err { color: var(--reject, #f0a836); }
    `;
    document.head.appendChild(style);
  }

  function render(target, bytes, options) {
    ensureStyle();
    try {
      const parsed = parse(bytes, options || {});
      const annotated = parsed.lines.map(line => {
        const pad = "  ".repeat(line.depth);
        return pad + "<span class=\"bytes\">" + esc(line.bytes) + "</span> <span class=\"note\"># " + esc(line.note) + "</span>";
      }).join("\n");
      target.innerHTML = `
        <div class="cbor-diag">
          <section><h3>CBOR byte disassembly</h3><pre>${annotated}</pre></section>
          <section><h3>CBOR diagnostic notation</h3><pre>${esc(diag(parsed.value, 0))}</pre></section>
        </div>`;
    } catch (err) {
      target.innerHTML = `<div class="cbor-diag"><pre class="err">CBOR diagnostic error: ${esc(err.message || err)}</pre></div>`;
    }
  }

  // Intent: Keep dispatch.html and pg-note-dispatch.html on one shared CBOR
  // explanation path so byte-level teaching output cannot diverge. Source: DI-motuf
  window.PGCBOR = { render };
})();
