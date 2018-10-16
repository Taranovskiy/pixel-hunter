import GreetingView from "./greetingView";
import AbstractView from "../abstractView";
import rulesElement from '../rules/rules';

import App from "../../main";

export default () => {
  const greeting = new GreetingView();
  greeting.onClick = () => {
    AbstractView.setActiveView(rulesElement());
    App.showRules();
  };
  return greeting.element;
};
