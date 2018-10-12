import GameTypeThreeView from "./gameTypeThreeView";
import AbstractView from "../abstractView";
import greetingElement from "../greeting/greeting";
import checkAnswer from "../../utils/checkAnswer";
import selectScreen from "../../utils/selectScreen";

export default (state, levels, currentLevel) => {
  const gameTypeThree = new GameTypeThreeView(state, levels, currentLevel);

  gameTypeThree.onClickBackButton = () => {
    AbstractView.setActiveView(greetingElement());
  };

  gameTypeThree.onAnswer = (answer) => {
    const answerTime = 15;
    const newState = checkAnswer(state, levels, currentLevel, answerTime, answer);
    const nextScreen = selectScreen(newState, levels);
    AbstractView.setActiveView(nextScreen);
  };

  return gameTypeThree.element;
};


