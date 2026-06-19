(function () {
  const template = document.createElement("template");
  template.innerHTML = `
    <style>
      :host {
        display: block;
        color: #dfe9ef;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
      }
      .bar {
        max-width: 760px;
        margin: 0 auto;
        padding: 14px 20px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
      }
      .brand {
        font-size: 12px;
        letter-spacing: .1em;
        text-transform: uppercase;
        color: #caa066;
        white-space: nowrap;
      }
      a {
        color: #efe7d8;
        border: 1px solid rgba(202, 160, 102, .45);
        border-radius: 999px;
        padding: 6px 11px;
        text-decoration: none;
        font-size: 12px;
        line-height: 1;
        background: rgba(22, 40, 36, .72);
      }
      a:hover,
      a:focus-visible {
        border-color: #f0b35e;
        color: #f0b35e;
        outline: none;
      }
      a[aria-current="page"] {
        color: #7f9189;
        border-color: rgba(127, 145, 137, .35);
        pointer-events: none;
      }
    </style>
    <nav class="bar" aria-label="Site">
      <div class="brand">PromiseGrid</div>
      <a id="home" href="index.html">Home</a>
    </nav>
  `;

  class PromiseGridSiteHeader extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;
      const root = this.attachShadow({ mode: "open" });
      root.appendChild(template.content.cloneNode(true));
      const home = root.getElementById("home");
      // Intent: Keep the home affordance stable outside quiz/drill render trees
      // so dynamic page state cannot remove navigation. Source: DI-vuhor
      if ((this.getAttribute("current") || "").toLowerCase() === "home") {
        home.setAttribute("aria-current", "page");
      }
    }
  }

  if (!customElements.get("pg-site-header")) {
    customElements.define("pg-site-header", PromiseGridSiteHeader);
  }
})();
