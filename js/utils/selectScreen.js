import gameOne from "../templates/gameOne";
import gameTwo from "../templates/gameTwo";
import gameThree from "../templates/gameThree";
import statsPage from "../templates/statsPage";
import {QUESTIONS_AMOUNT} from "../data/constants";

export default (state, levels) => {
  const levelNum = state.level;
  const lives = state.lives;
  const currentLevel = levels[levelNum - 1];
  let nextScreen;

  if (levelNum > QUESTIONS_AMOUNT || lives === 0) {
    return statsPage(state);
  }

  switch (currentLevel.levelType) {
    case 1:
      nextScreen = gameOne(state, levels, currentLevel);
      break;

    case 2:
      nextScreen = gameTwo(state, levels, currentLevel);
      break;

    case 3:
      nextScreen = gameThree(state, levels, currentLevel);
      break;
  }

  return nextScreen;
};
