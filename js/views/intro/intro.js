import IntroView from "./introView";
import AbstractView from "../abstractView";
import App from "../../main";

export default class Intro {
  constructor() {
    this.view = new IntroView();
  }

  init() {
    AbstractView.setActiveView(this.view.element);

    this.view.onClick = () => {
      App.showGreeting();
    };
  }
}
