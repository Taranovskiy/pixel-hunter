import StatsPageView from "./statsPageView";
import AbstractView from "../../abstractView";
import App from "../../app";

export default class StatsPage {
  constructor(state) {
    this.state = state;
    this.view = new StatsPageView(this.state);
  }

  init() {
    this.view.onClickBackButton = () => {
      App.showGreeting();
    };

    AbstractView.setActiveView(this.view.element);
  }
}
