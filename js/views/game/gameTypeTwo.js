import GameTypeTwoView from "./gameTypeTwoView";
import AbstractView from "../abstractView";
import greetingElement from "../greeting/greeting";
import checkAnswer from "../../utils/checkAnswer";
import selectScreen from "../../utils/selectScreen";

import App from "../../main";

export default (state, levels, currentLevel) => {
  const gameTypeTwo = new GameTypeTwoView(state, levels, currentLevel);

  gameTypeTwo.onClickBackButton = () => {
    AbstractView.setActiveView(greetingElement());
  };

  gameTypeTwo.onAnswer = (answer) => {
    const answerTime = 25;
    const newState = checkAnswer(state, levels, currentLevel, answerTime, answer);
    const nextScreen = selectScreen(newState, levels);
    AbstractView.setActiveView(nextScreen);
    // App.showStats();
  };

  return gameTypeTwo.element;
};
