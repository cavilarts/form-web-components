class RealDigitalTextField extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
  }

  set value(val) {
    return (this._value = val);
  }

  get value() {
    return this._value || "";
  }

  set error(err) {
    return (this._error = err);
  }

  get error() {
    return this._error || "";
  }

  get name() {
    return this.getAttribute("name");
  }

  get validation() {
    const validation = this.getAttribute("validation");

    return validation ? new RegExp(this.getAttribute("validation")) : null;
  }

  validateField() {
    if (this.validation) {
      const isValid = this.validation.test(this.value);

      if (!this.value) {
        this.error = `This field is required`;
      } else if (!isValid) {
        this.error = `Invalid format`;
      } else {
        this.error = "";
      }
      this.render();
      this.setupListener();
    }

    return this.error;
  }

  setupListener() {
    const field = this.shadowRoot.querySelector("input");

    field.addEventListener("change", (event) => {
      event.preventDefault();

      this.value = event.target.value;
      this.validateField();
    });
  }

  connectedCallback() {
    this.render();
    this.setupListener();
  }

  render() {
    return (this.shadow.innerHTML = `<div>
    <input class="real-digital-textfield" name=${this.name} type="text" value="${this.value}" />
    <p>${this.error}</p>
    </div>`);
  }
}

customElements.define("real-digital-textfield", RealDigitalTextField);
