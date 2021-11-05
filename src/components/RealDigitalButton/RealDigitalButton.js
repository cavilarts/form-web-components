class RealDigitalButton extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
    this.button = this.shadow.querySelector("button");

    this.button.addEventListener("click", (e) => {
      this.dispatchEvent(new CustomEvent("onSubmit"));
    });
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
