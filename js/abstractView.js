export default class AbstractView {

  static createElement(string) {
    const container = document.createElement(`template`);
    container.innerHTML = string;
    return container.content;
  }

  get template() {
    throw new Error(`You have to define template for view`);
  }

  render() {
    return AbstractView.createElement(this.template);
  }

  bind() {}

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }
    return this._element;
  }
}
