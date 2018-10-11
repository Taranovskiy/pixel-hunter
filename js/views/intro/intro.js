import IntroView from "./introView";
import AbstractView from "../abstractView";
import greeting from '../greeting/greeting';

export default () => {
  const intro = new IntroView();
  intro.onClick = () => {
    AbstractView.setActiveView(greeting());
  };
  return intro.element;
};
