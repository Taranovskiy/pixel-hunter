import gameOne from "../templates/gameOne";
import gameTwo from "../templates/gameTwo";
import gameThree from "../templates/gameThree";
import statsPage from "../templates/statsPage";
import {QUESTIONS_AMOUNT} from "../data/constants";

export default (state, levels) => {
  const levelNum = state.level;
  const level = levels[levelNum - 1];
  let nextScreen;

  if (levelNum === QUESTIONS_AMOUNT) {
    nextScreen = statsPage(state);
  }

  switch (level.levelType) {
    case 1:
      nextScreen = gameOne(state, levels);
      break;

    case 2:
      nextScreen = gameTwo(state, levels);
      break;

    case 3:
      nextScreen = gameThree(state, levels);
      break;
  }

  return nextScreen;
};
