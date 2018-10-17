import Intro from "./views/intro/intro";
import Greeting from "./views/greeting/greeting";
import Rules from "./views/rules/rules";
import Game from "./views/game/game";
import StatsPage from "./views/statsPage/statsPage";

const ControllerID = {
  INTRO: ``,
  GREETING: `greeting`,
  RULES: `rules`,
  GAME: `game`,
  STATS: `stats`
};

const getControllerIDFromHash = (hash) => hash.replace(`#`, ``);

class App {
  constructor() {
    this.routes = {
      [ControllerID.INTRO]: Intro,
      [ControllerID.GREETING]: Greeting,
      [ControllerID.RULES]: Rules,
      [ControllerID.GAME]: Game,
      [ControllerID.STATS]: StatsPage,
    };

    window.onhashchange = () => {
      this.changeController(getControllerIDFromHash(location.hash));
    };
  }

  changeController(route = ``) {
    const Controller = this.routes[route];
    new Controller(this._state).init();
  }

  init() {
    this.changeController(getControllerIDFromHash(location.hash));
  }

  showGreeting() {
    location.hash = ControllerID.GREETING;
  }

  showRules() {
    location.hash = ControllerID.RULES;
  }

  showStats(state) {
    this._state = state;
    location.hash = ControllerID.STATS;
  }

  showGame() {
    location.hash = ControllerID.GAME;
  }
}
const app = new App();

export default app;
