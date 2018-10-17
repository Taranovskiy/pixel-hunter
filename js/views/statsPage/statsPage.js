import StatsPageView from "./statsPageView";
import AbstractView from "../abstractView";

export default class StatsPage {
  constructor(state) {
    this.state = state;
    this.view = new StatsPageView(this.state);
  }

  init() {
    AbstractView.setActiveView(this.view.element);
  }
}
