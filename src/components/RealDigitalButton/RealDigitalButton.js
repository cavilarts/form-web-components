class RealDigitalButton extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();

    const button = this.shadowRoot.querySelector("button");

    button.addEventListener("click", () => {
      this.dispatchEvent(
        new CustomEvent("onSubmit", {
          bubbles: true,
          cancelable: false,
        })
      );
    });
  }


  render() {
    return (this.shadow.innerHTML = `
      <button part="button">
        <slot></slot>
      </button>
    `);
  }
}

customElements.define("real-digital-button", RealDigitalButton);
