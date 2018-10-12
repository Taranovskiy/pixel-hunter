import GreetingView from "./greetingView";
import AbstractView from "../abstractView";
import rulesElement from '../rules/rules';

export default () => {
  const greeting = new GreetingView();
  greeting.onClick = () => {
    AbstractView.setActiveView(rulesElement());
  };
  return greeting.element;
};
