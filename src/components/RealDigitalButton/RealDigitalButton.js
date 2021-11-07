class RealDigitalButton extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.addStyles();

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

  addStyles() {
    const styles = document.createElement("style");

    styles.innerHTML = `
      .real-digital-button {
        background-color: #ba0c2f;
        border-radius: 5px;
        font-size: 17px;
        color: white;
        border: none;
        padding: 15px 30px;
        text-transform: uppercase;
        line-height: 17px;
        transition: all .2s ease-in;
      }

      .real-digital-button:hover {
        background-color: #F56682;
      }
    `;

    this.shadow.appendChild(styles);
  }

  render() {
    return (this.shadow.innerHTML = `
      <button class="real-digital-button">
        <slot></slot>
      </button>
    `);
  }
}

customElements.define("real-digital-button", RealDigitalButton);
