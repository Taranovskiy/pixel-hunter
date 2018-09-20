import createElement from '../createElement';
import greetingElement from "./greeting";
import setActiveScreen from "../setActiveScreen";
import header from "./header";
import * as data from "../data";
import stats from "./stats";
import statsElement from "./statsPage";
import footer from "./footer";

const level = data.levels.levelThree;
const initialState = data.initialState;

export default () => {
  const answerContent = level.answerOptions.map((answer, index) => `
    <div class="game__option">
      <img src=${answer} alt="Option ${index}" width="304" height="455">
    </div>
  `).join(``);

  const template = `
  ${header(initialState)}
  <div class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
      ${answerContent}
    </form>
    <div class="stats">
      ${stats}
    </div>
  </div>
  ${footer}
`;

  const gameThreeElement = createElement(template);

  const backButton = gameThreeElement.querySelector(`.header__back`);
  backButton.addEventListener(`click`, () => setActiveScreen(greetingElement()));

  const gameOption = gameThreeElement.querySelectorAll(`.game__option`);
  gameOption.forEach((item) => {
    item.addEventListener(`click`, () => setActiveScreen(statsElement()));
  });

  return gameThreeElement;
};


