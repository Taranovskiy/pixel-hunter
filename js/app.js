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
      const {controller, state} = this._parseHashFromUrl();
      this.changeController(controller, state);
    };
  }

  init() {
    const {controller, state} = this._parseHashFromUrl();
    this.changeController(controller, state);
  }

  changeController(route = ``, state) {
    const Controller = this.routes[route];
    if (Controller) {
      new Controller(state).init();
    }
  }

  _parseHashFromUrl() {
    const hash = location.hash.split(`=`);
    const [controller, hashValue] = hash;
    return {
      controller: getControllerIDFromHash(controller),
      state: hashValue ? JSON.parse(atob(hashValue)) : hashValue
    };
  }


  showGreeting() {
    location.hash = ControllerID.GREETING;
  }

  showRules() {
    location.hash = ControllerID.RULES;
  }

  showStats(state) {
    const encodeState = btoa(JSON.stringify(state));
    location.hash = `${ControllerID.STATS}=${encodeState}`;
  }

  showGame() {
    location.hash = ControllerID.GAME;
  }
}
const app = new App();

export default app;
