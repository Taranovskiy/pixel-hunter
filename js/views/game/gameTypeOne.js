import greetingElement from "../greeting/greeting";
import checkAnswer from "../../utils/checkAnswer";
import selectScreen from "../../utils/selectScreen";
import AbstractView from "../abstractView";
import GameTypeOneView from "./gameTypeOneView";

export default (state, levels, currentLevel) => {
  const gameTypeOne = new GameTypeOneView(state, levels, currentLevel);

  gameTypeOne.onClickBackButton = () => {
    AbstractView.setActiveView(greetingElement());
  };

  gameTypeOne.onAnswer = (answer) => {
    const answerTime = 5;
    const newState = checkAnswer(state, levels, currentLevel, answerTime, answer);
    const nextScreen = selectScreen(newState, levels);
    AbstractView.setActiveView(nextScreen);
  };

  return gameTypeOne.element;
};

