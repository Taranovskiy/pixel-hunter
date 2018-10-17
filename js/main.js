import AbstractView from "./views/abstractView";
import Intro from "./views/intro/intro";
import Greeting from "./views/greeting/greeting";
import Rules from "./views/rules/rules";
import Stats from "./views/stats/stats";

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
      // [ControllerID.GAME]: Game,
      // [ControllerID.STATS]: Stats,
    };

    window.onhashchange = () => {
      this.changeController(getControllerIDFromHash(location.hash));
    };
  }

  changeController(route = ``) {
    const Controller = this.routes[route];
    new Controller().init();
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

  showStats() {
    location.hash = ControllerID.STATS;
  }

  showGame() {
    location.hash = ControllerID.GAME;
  }
}

const app = new App();
app.init();

export default app;
