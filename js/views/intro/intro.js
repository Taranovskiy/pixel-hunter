import IntroView from "./introView";
import AbstractView from "../abstractView";
import greeting from '../greeting/greeting';

import App from "../../main";

// export default () => {
//   const intro = new IntroView();
//   intro.onClick = () => {
//     App.showGreeting();
//     AbstractView.setActiveView(greeting());
//   };
//   // App.showIntro();
//   return intro.element;
// };

export default class Intro {
  constructor() {
    this.view = new IntroView();
  }

  init() {
    AbstractView.setActiveView(this.view.element);

    this.view.onClick = () => {
      App.showGreeting();
      AbstractView.setActiveView(greeting());
    };
    console.log(this.view);
  }
}
