class RealDigitalForm extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
  }

  get action() {
    return this.getAttribute("action");
  }

  get method() {
    return this.getAttribute("method");
  }

  validateForm() {
    const fields = document.querySelector(".real-digital-textfield");
  }

  validateAndSubmit() {
    debugger;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    return (this.shadow.innerHTML = `<form>
      <slot></slot>
    </form>`);
  }
}

customElements.define("real-digital-form", RealDigitalForm);
