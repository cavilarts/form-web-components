class RealDigitalTextField extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
  }

  get name() {
    return this.getAttribute("name");
  }

  get validation() {
    return this.getAttribute("validation");
  }

  connectedCallback() {
    this.render();
  }

  render() {
    return (this.shadow.innerHTML = `<input class="real-digital-textfield" name=${this.name} type="text" />`);
  }
}

customElements.define("real-digital-textfield", RealDigitalTextField);
