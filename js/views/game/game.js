import {QUESTIONS_AMOUNT} from "../../data/constants";
import statsPage from "../statsPage/statsPage";
import gameOne from "./gameTypeOne";
import gameTwo from "./gameTypeTwo";
import gameThree from "./gameTypeThree";

export default class Game {
  constructor(state, levels) {
    this.state = state;
    this.levels = levels;
  }

  init() {
    const levelNum = this.state.level;
    const lives = this.state.lives;
    const currentLevel = this.levels[levelNum - 1];
    let nextScreen;

    if (levelNum > QUESTIONS_AMOUNT || lives === 0) {
      return statsPage(this.state);
    }

    switch (currentLevel.levelType) {
      case 1:
        nextScreen = gameOne(this.state, this.levels, currentLevel);
        break;

      case 2:
        nextScreen = gameTwo(this.state, this.levels, currentLevel);
        break;

      case 3:
        nextScreen = gameThree(this.state, this.levels, currentLevel);
        break;
    }

    return nextScreen;

  }
}
