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

  set response(val) {
    return this._response = val;
  }

  get response() {
    return this._response || "";
  }

  submitForm(body) {
    fetch(this.action, {
      headers: {
        "Content-Type": "application/json",
      },
      method: this.method,
      body: JSON.stringify(body),
    })
      .then(() => {
        let fields = this.querySelectorAll("real-digital-textfield");
  
        [...fields].forEach((field) => (field.clearValue()));

        this.response = "Your contact message was sent!";
        this.render();
      })
      .catch(() => {
        this.response = "Your message could not be sent. please try again";
        this.render();
      });
    ;
  }

  validateAndSubmit(e) {
    let errors = [];
    let values = {};
    const fields = e.target
      .closest("real-digital-form")
      .querySelectorAll("real-digital-textfield");

    errors = [...fields]
      .map((field) => field.validateField())
      .filter((value) => !!value);

    [...fields].forEach((field) => (values[field.name] = field.value));

    if (!errors.length) {
      this.submitForm(values);
    }
  }

  connectedCallback() {
    this.render();

    this.shadowRoot.addEventListener("onSubmit", (e) => {
      e.preventDefault();
      this.validateAndSubmit(e);
    });
  }

  render() {
    return (this.shadow.innerHTML = `
    <div part="response ${this.response ? 'success' : 'error'}"><p>${this.response}<p></div>
    <form part="form" action="${this.action}" method="${this.method}">
      <slot></slot>
    </form>`);
  }
}

customElements.define("real-digital-form", RealDigitalForm);
