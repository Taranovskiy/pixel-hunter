import {QUESTIONS_AMOUNT} from "../data/constants";
import GameTypeOneView from "../views/game/gameTypeOneView";
import GameTypeTwoView from "../views/game/gameTypeTwoView";
import GameTypeThreeView from "../views/game/gameTypeThreeView";
import App from "../app";

export default (state, levels) => {
  const levelNum = state.level;
  const lives = state.lives;
  const currentLevel = levels[levelNum - 1];
  let nextScreen = null;

  if (levelNum > QUESTIONS_AMOUNT || lives === 0) {
    App.model.send(state);
    App.model.load(App.model.urlWrite)
      .then((data) => window.console.log(data));
    App.showStats(state);
    return nextScreen;
  }

  switch (currentLevel.levelType) {
    case 1:
      nextScreen = new GameTypeOneView(state, levels);
      break;

    case 2:
      nextScreen = new GameTypeTwoView(state, levels);

      break;

    case 3:
      nextScreen = new GameTypeThreeView(state, levels);

      break;
  }

  return nextScreen;
};
