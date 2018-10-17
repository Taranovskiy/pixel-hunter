import GreetingView from "./greetingView";
import AbstractView from "../abstractView";
import App from "../../main";

export default class Greeting {
  constructor() {
    this.view = new GreetingView();
  }

  init() {
    AbstractView.setActiveView(this.view.element);

    this.view.onClick = () => {
      App.showRules();
    };
  }
}
