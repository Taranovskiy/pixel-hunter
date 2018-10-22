import generateLevels from "../../utils/generateLevels";
import checkAnswer from "../../utils/checkAnswer";
import selectScreen from "../../utils/selectScreen";
import {initialState} from "../../data/data";
import AbstractView from "../../abstractView";
import App from "../../app";

export default class Game {
  constructor(state = initialState) {
    this.state = state;
    this.levels = generateLevels();
    this.view = selectScreen(this.state, this.levels);
  }

  init() {
    AbstractView.setActiveView(this.view.element);

    this.view.onClickBackButton = () => {
      App.showGreeting();
    };

    this.view.onAnswer = (answer) => {
      const answerTime = 5;
      this.state = checkAnswer(this.state, this.levels, answerTime, answer);
      this.view = selectScreen(this.state, this.levels);
      if (this.view) {
        this.init();
      }
    };
  }
}
