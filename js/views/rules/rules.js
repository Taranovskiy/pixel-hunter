import RulesView from "./rulesView";
import AbstractView from "../abstractView";
import generateLevels from "../../utils/generateLevels";
import selectScreen from "../../utils/selectScreen";
import {initialState} from "../../data/data";

import App from "../../main";

// export default () => {
//   const levels = generateLevels();
//   const nextScreen = selectScreen(initialState, levels);
//
//   const rules = new RulesView();
//
//   rules.onClickBackButton = () => {
//     AbstractView.setActiveView(greeting());
//   };
//
//   rules.onClickContinueButton = () => {
//     AbstractView.setActiveView(nextScreen);
//     App.showGame();
//   };
//
//   return rules.element;
// };

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
      const levels = generateLevels();
      const nextScreen = selectScreen(initialState, levels);
      AbstractView.setActiveView(nextScreen);
      // App.showGame();
    };
  }

}
