import AbstractView from "../../abstractView";

export default class StatsView extends AbstractView {

  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    const statsItems = this.state.stats.map((item) => `<li class="stats__result stats__result--${item}"></li>`)
      .join(``);
    return `<ul class="stats">${statsItems}</ul>`;
  }
}
