import RulesView from "./rulesView";
import AbstractView from "../abstractView";
import App from "../../app";

export default class Rules {
  constructor() {
    this.view = new RulesView();
  }

  init() {
    AbstractView.setActiveView(this.view.element);

    this.view.onClickBackButton = () => {
      App.showGreeting();
    };

    this.view.onClickContinueButton = () => {
      App.showGame();
    };
  }

}
