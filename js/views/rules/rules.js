import RulesView from "./rulesView";
import AbstractView from "../abstractView";
import greeting from "../greeting/greeting";
import generateLevels from "../../utils/generateLevels";
import selectScreen from "../../utils/selectScreen";
import {initialState} from "../../data/data";

import App from "../../main";

export default () => {
  const levels = generateLevels();
  const nextScreen = selectScreen(initialState, levels);

  const rules = new RulesView();

  rules.onClickBackButton = () => {
    AbstractView.setActiveView(greeting());
  };

  rules.onClickContinueButton = () => {
    AbstractView.setActiveView(nextScreen);
    App.showGame();
  };

  return rules.element;
};
