class RealDigitalButton extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    return (this.shadow.innerHTML = `
      <button>
        <slot></slot>
      </button>
    `);
  }
}

customElements.define("real-digital-button", RealDigitalButton);
